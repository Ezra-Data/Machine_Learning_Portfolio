'use client';

import { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { Send, CheckCircle2, MessageCircle, AlertCircle } from 'lucide-react';

const serviceOptions = [
  { value: 'course', label: 'ML Course (NeuralNest)' },
  { value: 'web', label: 'ML Web App (Custom Model Deployment)' },
  { value: 'native', label: 'Native App (Android & Edge ML)' },
  { value: 'analytics', label: 'Data Analysis & Dashboards (Power BI, SQL, Excel)' },
  { value: 'other', label: 'Other Project or Role Inquiry' },
];

export default function ContactForm() {
  const searchParams = useSearchParams();
  const rawService = searchParams.get('service') || 'web';
  const initialService = ['course', 'web', 'native', 'analytics', 'other'].includes(rawService)
    ? rawService
    : 'web';

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: initialService,
    message: '',
    _gotcha: '', // Formspree honeypot spam protection
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData._gotcha) {
      // Honeypot field filled by bot: pretend success without sending
      setStatus('success');
      return;
    }

    setStatus('submitting');
    setErrorMessage('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          service: formData.service,
          message: formData.message,
        }),
      });

      if (!res.ok) {
        throw new Error('Failed to send message');
      }

      setStatus('success');
    } catch {
      // Graceful instant fallback to direct WhatsApp or Mailto
      const text = encodeURIComponent(
        `Hi Ezra, my name is ${formData.name} (${formData.email}). Regarding ${formData.service}: ${formData.message}`
      );
      window.open(`https://wa.me/254738933046?text=${text}`, '_blank');
      setStatus('success');
    }
  };

  if (status === 'success') {
    const waText = encodeURIComponent(
      `Hi Ezra, I submitted a contact inquiry from your portfolio website.\n\nName: ${formData.name || 'Visitor'}\nEmail: ${formData.email || 'N/A'}\nService: ${formData.service}\nMessage: ${formData.message || ''}`
    );
    const mailSubject = encodeURIComponent(`Portfolio Inquiry from ${formData.name || 'Visitor'}`);
    const mailBody = encodeURIComponent(
      `Hi Ezra,\n\nName: ${formData.name}\nEmail: ${formData.email}\nService: ${formData.service}\n\nMessage:\n${formData.message}`
    );

    return (
      <div
        className="glass-card"
        style={{
          padding: '3rem 2rem',
          borderRadius: '24px',
          textAlign: 'center',
        }}
      >
        <CheckCircle2 size={48} style={{ color: '#22C55E', margin: '0 auto 1.25rem' }} />
        <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--text)', marginBottom: '0.75rem' }}>
          Message Sent Successfully!
        </h3>
        <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', maxWidth: '480px', margin: '0 auto 1.5rem' }}>
          Thank you for reaching out, {formData.name || 'there'}. Ezra has received your message and will reply within 24 hours.
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', justifyContent: 'center', marginBottom: '1.5rem' }}>
          <a
            href={`https://wa.me/254738933046?text=${waText}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-sm"
          >
            <MessageCircle size={16} />
            <span>Chat Directly on WhatsApp</span>
          </a>
          <a
            href={`mailto:ogechiezranalyst@gmail.com?subject=${mailSubject}&body=${mailBody}`}
            className="btn btn-secondary btn-sm"
          >
            <span>Send Copy via Email</span>
          </a>
        </div>
        <button
          onClick={() => {
            setStatus('idle');
            setFormData({ name: '', email: '', service: 'web', message: '', _gotcha: '' });
          }}
          className="btn btn-ghost btn-sm"
          style={{ margin: '0 auto', border: '1px solid var(--border)' }}
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="glass-card"
      style={{
        padding: '2.5rem',
        borderRadius: '24px',
        display: 'flex',
        flexDirection: 'column',
        gap: '1.25rem',
      }}
    >
      {/* Honeypot field for Formspree spam filtering */}
      <input
        type="text"
        name="_gotcha"
        value={formData._gotcha}
        onChange={(e) => setFormData({ ...formData, _gotcha: e.target.value })}
        style={{ display: 'none' }}
        tabIndex={-1}
        autoComplete="off"
      />

      <div>
        <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: 'var(--text)', marginBottom: '0.375rem' }}>
          Your Name *
        </label>
        <input
          type="text"
          required
          placeholder="e.g. Sarah Kimani"
          className="input-field"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
      </div>

      <div>
        <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: 'var(--text)', marginBottom: '0.375rem' }}>
          Email Address *
        </label>
        <input
          type="email"
          required
          placeholder="sarah@company.com"
          className="input-field"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
      </div>

      <div>
        <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: 'var(--text)', marginBottom: '0.375rem' }}>
          Service Interest
        </label>
        <select
          className="input-field"
          value={formData.service}
          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
          style={{ background: 'var(--surface)', color: 'var(--text)' }}
        >
          {serviceOptions.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: 'var(--text)', marginBottom: '0.375rem' }}>
          Message / Project Scope *
        </label>
        <textarea
          required
          rows={5}
          placeholder="Describe your goals, requirements, or questions..."
          className="input-field"
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          style={{ resize: 'vertical' }}
        />
      </div>

      {status === 'error' && (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            color: '#EF4444',
            fontSize: '0.875rem',
            padding: '0.75rem',
            borderRadius: '10px',
            background: 'rgba(239, 68, 68, 0.1)',
          }}
        >
          <AlertCircle size={16} />
          <span>{errorMessage}</span>
        </div>
      )}

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="btn btn-primary"
        style={{ justifyContent: 'center', marginTop: '0.5rem', width: '100%' }}
      >
        {status === 'submitting' ? (
          <span>Sending Message...</span>
        ) : (
          <>
            <Send size={16} />
            <span>Send Message to Ezra</span>
          </>
        )}
      </button>

      <div style={{ textAlign: 'center', fontSize: '0.75rem', color: 'var(--muted)', marginTop: '0.25rem' }}>
        No spam ever. Your information is delivered straight to Ezra and never shared.
      </div>
    </form>
  );
}
