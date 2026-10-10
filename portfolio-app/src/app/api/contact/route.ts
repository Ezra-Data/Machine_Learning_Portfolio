import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

export async function POST(request: Request) {
  try {
    const data = await request.json();

    // Check honeypot
    if (data._gotcha) {
      return NextResponse.json({ ok: true, status: 'success' }, { status: 200 });
    }

    const { name, email, service, message } = data;

    const submission = {
      id: `contact_${Date.now()}`,
      timestamp: new Date().toISOString(),
      name: name || 'Anonymous',
      email: email || '',
      service: service || 'general',
      message: message || '',
    };

    // 1. Log to server console
    console.log('[Contact Submission Received]:', submission);

    // 2. Persist to local content/inbox.json so no message is ever lost
    try {
      const inboxPath = path.join(process.cwd(), 'content', 'inbox.json');
      let inbox: Array<Record<string, unknown>> = [];
      try {
        const existing = await fs.readFile(inboxPath, 'utf-8');
        inbox = JSON.parse(existing);
      } catch {
        inbox = [];
      }
      inbox.unshift(submission);
      await fs.writeFile(inboxPath, JSON.stringify(inbox, null, 2), 'utf-8');
    } catch (fsErr) {
      console.warn('Could not save to inbox.json:', fsErr);
    }

    // 3. Forward to Formspree if configured
    const formspreeUrl = process.env.FORMSPREE_CONTACT_URL;
    if (formspreeUrl && formspreeUrl.startsWith('https://formspree.io/f/')) {
      try {
        await fetch(formspreeUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify({ name, email, service, message }),
        });
      } catch (err) {
        console.warn('Formspree forward error (non-fatal):', err);
      }
    }

    // 4. Forward to Web3Forms if access key configured
    const web3formsKey = process.env.WEB3FORMS_KEY;
    if (web3formsKey) {
      try {
        await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify({
            access_key: web3formsKey,
            subject: `Portfolio Inquiry from ${name} (${service})`,
            from_name: name,
            email,
            message,
          }),
        });
      } catch (err) {
        console.warn('Web3Forms forward error (non-fatal):', err);
      }
    }

    return NextResponse.json(
      {
        ok: true,
        success: true,
        message: 'Message delivered to Ezra successfully',
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact API Error:', error);
    return NextResponse.json(
      { ok: true, success: true, message: 'Message logged' },
      { status: 200 }
    );
  }
}
