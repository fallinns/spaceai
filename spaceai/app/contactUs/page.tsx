'use client';

import { useState } from 'react';

export default function ContactPage() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(form);
    alert('Message sent! (This is just a placeholder)');
    setForm({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Contact Info */}
        <div>
          <h3 className="text-[#a259ff] uppercase text-sm font-semibold mb-3 tracking-wide">Contact Us</h3>
          <h2 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">Let's Get in Touch</h2>
          <p className="text-gray-600 mb-6">
            Whether you have a project idea, a question, or just want to connect — we’re happy to hear from you.
          </p>

          <div className="space-y-6 text-sm">
            <div>
              <p className="font-semibold text-gray-900">Email</p>
              <p className="text-gray-600">hello@yourcompany.com</p>
            </div>
            <div>
              <p className="font-semibold text-gray-900">Phone</p>
              <p className="text-gray-600">+91 98765 43210</p>
            </div>
            <div>
              <p className="font-semibold text-gray-900">Location</p>
              <p className="text-gray-600">Ahmedabad, Gujarat, India</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              value={form.name}
              onChange={handleChange}
              className="border border-gray-300 px-4 py-3 rounded w-full outline-none focus:ring-2 focus:ring-[#a259ff]"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              value={form.email}
              onChange={handleChange}
              className="border border-gray-300 px-4 py-3 rounded w-full outline-none focus:ring-2 focus:ring-[#a259ff]"
            />
          </div>
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            required
            value={form.subject}
            onChange={handleChange}
            className="border border-gray-300 px-4 py-3 rounded w-full outline-none focus:ring-2 focus:ring-[#a259ff]"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows={5}
            required
            value={form.message}
            onChange={handleChange}
            className="border border-gray-300 px-4 py-3 rounded w-full outline-none focus:ring-2 focus:ring-[#a259ff]"
          />
          <button
            type="submit"
            className="bg-[#a259ff] text-white font-semibold px-6 py-3 rounded-full hover:shadow-lg transition"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* Optional Google Maps Embed */}
      <div className="mt-20 w-full h-[400px] rounded overflow-hidden">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.3063096142923!2d72.57136207526468!3d23.025997616157363!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e84f777fb0a4b%3A0x64fd9a6b0e13a087!2sAhmedabad%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1694244000000!5m2!1sen!2sin"
          width="100%"
          height="100%"
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>
    </section>
  );
}
