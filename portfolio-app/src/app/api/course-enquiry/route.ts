import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

export async function POST(request: Request) {
  try {
    const data = await request.json();

    // Check honeypot
    if (data.botField) {
      return NextResponse.json({ ok: true, status: 'success' }, { status: 200 });
    }

    const { name, email, whatsapp, experience, message } = data;

    const submission = {
      id: `course_${Date.now()}`,
      timestamp: new Date().toISOString(),
      type: 'NeuralNest ML Course Enquiry',
      name: name || 'Anonymous',
      email: email || '',
      whatsapp: whatsapp || '',
      experience: experience || '',
      message: message || '',
    };

    console.log('[Course Enquiry Received]:', submission);

    // Save to content/inbox.json
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

    const formspreeUrl = process.env.FORMSPREE_COURSE_URL || process.env.FORMSPREE_CONTACT_URL || 'https://formspree.io/f/xkjobprb';
    if (formspreeUrl && formspreeUrl.startsWith('https://formspree.io/f/')) {
      try {
        await fetch(formspreeUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify({
            name,
            email,
            _replyto: email,
            _subject: `NeuralNest Course Enrollment Inquiry from ${name || 'Student'}`,
            whatsapp,
            experience,
            message,
          }),
        });
      } catch (err) {
        console.warn('Formspree forward error (non-fatal):', err);
      }
    }

    return NextResponse.json(
      {
        ok: true,
        success: true,
        message: 'Enquiry received successfully',
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Course Enquiry API Error:', error);
    return NextResponse.json(
      { ok: true, success: true, message: 'Enquiry logged' },
      { status: 200 }
    );
  }
}
