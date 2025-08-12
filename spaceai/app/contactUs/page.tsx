'use client';

import { useState } from 'react';
import { FiMail, FiPhone, FiMapPin, FiClock, FiCheckCircle, FiAlertCircle } from 'react-icons/fi';

type FormState = {
  name: string;
  email: string;
  subject: string;
  message: string;
  company?: string; // honeypot
};

export default function ContactPage() {
  // Theme tokens
  const ACCENT = '#16C4C9';
  const TEXT = '#203047';
  const SUB = '#475569';
  const DARK = '#0B1E2D';
  const SOFT = '#F9FAFB';
  const ICON_BG = '#E6F7F8';

  const [form, setForm] = useState<FormState>({
    name: '',
    email: '',
    subject: '',
    message: '',
    company: '', // honeypot
  });
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState<null | 'ok' | 'err'>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    setSent(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (form.company) return; // honeypot: silently ignore bots
    setLoading(true);
    setSent(null);
    try {
      // TODO: hook up to your API route / serverless function / 3rd-party form handler
      await new Promise((r) => setTimeout(r, 900));
      setSent('ok');
      setForm({ name: '', email: '', subject: '', message: '', company: '' });
    } catch {
      setSent('err');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-white" style={{ color: TEXT }}>
      {/* HERO */}
      <div
        className="relative overflow-hidden text-center py-20 px-6"
        style={{
          backgroundColor: ACCENT,
          backgroundImage:
            'radial-gradient(80rem 40rem at 70% -10%, rgba(255,255,255,0.25), transparent)',
        }}
      >
        <div className="mx-auto max-w-5xl relative z-10">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-white text-xs mb-4">
            <span>We reply within 24 hours</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white">Let’s Get in Touch</h1>
          <p className="mt-3 text-white/90 max-w-2xl mx-auto">
            Tell us about your goals—product, design, automation or growth. We’ll scope a plan and
            next steps fast.
          </p>
        </div>
        {/* soft shapes */}
        <div className="absolute -top-10 -right-10 w-72 h-72 rounded-full bg-white/10" />
        <div className="absolute -bottom-20 -left-20 w-96 h-96 rounded-full bg-white/10" />
      </div>

      {/* CONTENT */}
      <div className="py-24 px-6 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* CONTACT INFO CARDS */}
        <div>
          <h3 className="uppercase text-sm font-semibold mb-3 tracking-wider" style={{ color: ACCENT }}>
            Contact Us
          </h3>
          <h2 className="text-4xl font-bold mb-6 leading-tight">We’re here to help</h2>
          <p className="mb-8" style={{ color: SUB }}>
            Whether you have a project idea, a question, or just want to connect — we’re happy to hear from you.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              {
                icon: <FiMail />,
                title: 'Email',
                value: 'hello@yourcompany.com',
              },
              {
                icon: <FiPhone />,
                title: 'Phone',
                value: '+91 98765 43210',
              },
              {
                icon: <FiMapPin />,
                title: 'Location',
                value: 'Ahmedabad, Gujarat, India',
              },
              {
                icon: <FiClock />,
                title: 'Office Hours',
                value: 'Mon–Fri, 10:00–18:00 IST',
              },
            ].map((c) => (
              <div
                key={c.title}
                className="rounded-xl border border-[#E5E7EB] bg-white p-5 shadow-sm hover:shadow-md transition"
              >
                <div
                  className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full"
                  style={{ backgroundColor: ICON_BG, color: ACCENT }}
                >
                  {c.icon}
                </div>
                <p className="text-sm font-semibold">{c.title}</p>
                <p className="text-sm mt-1" style={{ color: SUB }}>
                  {c.value}
                </p>
              </div>
            ))}
          </div>

          {/* Small social/alt contact strip */}
          <div className="mt-6 text-sm" style={{ color: SUB }}>
            Prefer email? <a href="mailto:hello@yourcompany.com" className="font-semibold" style={{ color: ACCENT }}>hello@yourcompany.com</a>
          </div>
        </div>

        {/* FORM PANEL */}
        <form
          onSubmit={handleSubmit}
          className="rounded-2xl border border-[#E5E7EB] bg-white p-6 sm:p-8 shadow-[0_10px_30px_-12px_rgba(0,0,0,0.12)]"
        >
          <h3 className="text-xl font-semibold mb-1">Start a conversation</h3>
          <p className="text-sm mb-6" style={{ color: SUB }}>
            Tell us a bit about your project and we’ll get back within 1 business day.
          </p>

          {/* status messages */}
          {sent === 'ok' && (
            <div
              className="mb-6 flex items-center gap-2 rounded-lg px-4 py-3 text-sm"
              style={{ backgroundColor: ICON_BG, color: '#065F46' }}
            >
              <FiCheckCircle />
              Message sent! We’ll reach out shortly.
            </div>
          )}
          {sent === 'err' && (
            <div
              className="mb-6 flex items-center gap-2 rounded-lg px-4 py-3 text-sm"
              style={{ backgroundColor: '#FEF2F2', color: '#991B1B' }}
            >
              <FiAlertCircle />
              Something went wrong. Please retry.
            </div>
          )}

          {/* honeypot (hidden) */}
          <input
            type="text"
            name="company"
            value={form.company}
            onChange={handleChange}
            className="hidden"
            tabIndex={-1}
            autoComplete="off"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-semibold block mb-1.5" htmlFor="name">
                Your Name
              </label>
              <input
                id="name"
                type="text"
                name="name"
                required
                value={form.name}
                onChange={handleChange}
                className="w-full rounded-md border border-gray-300 px-4 py-3 outline-none focus:ring-2"
                style={{ focusRingColor: ACCENT as any }}
              />
            </div>
            <div>
              <label className="text-xs font-semibold block mb-1.5" htmlFor="email">
                Your Email
              </label>
              <input
                id="email"
                type="email"
                name="email"
                required
                value={form.email}
                onChange={handleChange}
                className="w-full rounded-md border border-gray-300 px-4 py-3 outline-none focus:ring-2"
              />
            </div>
          </div>

          <div className="mt-4">
            <label className="text-xs font-semibold block mb-1.5" htmlFor="subject">
              Subject
            </label>
            <input
              id="subject"
              type="text"
              name="subject"
              required
              value={form.subject}
              onChange={handleChange}
              className="w-full rounded-md border border-gray-300 px-4 py-3 outline-none focus:ring-2"
            />
          </div>

          <div className="mt-4">
            <label className="text-xs font-semibold block mb-1.5" htmlFor="message">
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={6}
              required
              value={form.message}
              onChange={handleChange}
              className="w-full rounded-md border border-gray-300 px-4 py-3 outline-none focus:ring-2"
            />
            <p className="mt-2 text-xs" style={{ color: SUB }}>
              By submitting, you agree to our privacy policy. We’ll never share your data.
            </p>
          </div>

          <div className="mt-6 flex items-center gap-3">
            <button
              type="submit"
              disabled={loading}
              className="rounded-full px-6 py-3 font-semibold text-white disabled:opacity-60"
              style={{ backgroundColor: DARK }}
            >
              {loading ? 'Sending…' : 'Send Message'}
            </button>
            <a
              href="mailto:hello@yourcompany.com"
              className="rounded-full px-6 py-3 font-semibold"
              style={{ backgroundColor: ICON_BG, color: TEXT }}
            >
              Email Us Instead
            </a>
          </div>
        </form>
      </div>

      {/* FAQ STRIP */}
      <div className="py-16 px-6" style={{ backgroundColor: SOFT }}>
        <div className="max-w-5xl mx-auto">
          <h3 className="text-center text-sm font-semibold uppercase tracking-wider mb-8" style={{ color: SUB }}>
            Frequently Asked
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                q: 'How soon can you start?',
                a: 'Usually within 1–2 weeks. We can fast-track smaller engagements.',
              },
              {
                q: 'Do you sign NDAs?',
                a: 'Yes. We’re happy to sign NDAs before any sensitive discussion.',
              },
              {
                q: 'What tools do you work in?',
                a: 'Your stack or ours — Slack/Jira/Linear, Notion, GitHub, Figma, Vercel.',
              },
            ].map((f) => (
              <div key={f.q} className="rounded-xl border border-[#E5E7EB] bg-white p-6 shadow-sm">
                <p className="text-sm font-semibold">{f.q}</p>
                <p className="text-sm mt-2" style={{ color: SUB }}>
                  {f.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* MAP */}
      <div className="px-6 pb-24">
        <div className="max-w-7xl mx-auto">
          <div className="w-full h-[420px] rounded-2xl overflow-hidden border border-[#E5E7EB] shadow-sm">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.3063096142923!2d72.57136207526468!3d23.025997616157363!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e84f777fb0a4b%3A0x64fd9a6b0e13a087!2sAhmedabad%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1694244000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
