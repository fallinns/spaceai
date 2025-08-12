'use client';

import Image from 'next/image';
import { FiHome, FiChevronRight, FiCheckCircle } from 'react-icons/fi';

export default function AboutUs() {
  const ACCENT = '#16C4C9';
  const TEXT = '#203047';
  const SUB = '#475569';
  const BLOB = '#EAF7F7';
  const CHIP = '#E6F7F8';
  const BTN_DARK = '#203047';

  return (
    <>
      {/* ===================== */}
      {/* Top Teal Hero Banner (flat with angled divider) */}
      {/* ===================== */}
      <section
        className="relative overflow-hidden"
        style={{
          backgroundColor: ACCENT,
        }}
      >
        {/* soft radial highlight */}
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(80rem 40rem at 70% -10%, rgba(255,255,255,0.25), transparent)',
          }}
        />

        <div className="px-6 py-16 sm:px-10 sm:py-20 lg:px-16 lg:py-24 max-w-7xl mx-auto relative z-10">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-white/90 text-sm">
              <li className="inline-flex items-center"><FiHome /></li>
              <li aria-hidden><FiChevronRight /></li>
              <li>About Us</li>
            </ol>
          </nav>

          {/* Eyebrow + Heading */}
          <p className="text-white/85 text-xs tracking-widest uppercase mb-3">
            Product-first consulting
          </p>
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] text-white"
            style={{ maxWidth: '900px' }}
          >
            Unlock Your
            <br />
            Business Potential
            <br />
            <span className="inline-block bg-white text-[#203047] rounded-md px-4 py-2 mt-2 align-middle">
              Faster
            </span>
          </h1>

          {/* Subtext */}
          <p className="mt-6 max-w-2xl text-base sm:text-lg text-white/90">
            We specialise in accelerating the growth of your business through expertly
            crafted custom business plans and comprehensive market research reports.
          </p>

          {/* CTAs */}
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 rounded-full font-semibold bg-white text-[#203047] shadow-lg hover:shadow-xl transition"
            >
              Let’s Get Started
            </a>
            <a
              href="/projects"
              className="inline-flex items-center justify-center px-6 py-3 rounded-full font-semibold border border-white/40 text-white hover:bg-white/10 transition"
            >
              View Our Work
            </a>
          </div>
        </div>

        {/* angled divider */}
        <div
          className="absolute bottom-0 left-0 w-full h-16"
          style={{
            background: `linear-gradient(to bottom right, ${ACCENT} 50%, white 50%)`,
          }}
        />
      </section>

      {/* ===================== */}
      {/* Main About Section */}
      {/* ===================== */}
      <section className="py-24 px-6 bg-white" style={{ color: TEXT }}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left - Text Content */}
          <div>
            <h3
              className="uppercase text-sm font-semibold mb-3 tracking-wider"
              style={{ color: ACCENT }}
            >
              About Us
            </h3>

            <h2 className="text-4xl font-bold mb-6 leading-tight">
              We're a Freelance Consulting Team <br /> with a Product Mindset
            </h2>

            <p className="mb-4 leading-relaxed" style={{ color: SUB }}>
              At <strong>Planetoid AI</strong>, we help startups, SMEs, and enterprises scale with
              customized tech, marketing, and product consulting. Our collective network combines
              deep expertise in engineering, design, and strategy—delivering high-impact work with
              startup-level agility.
            </p>

            <p className="mb-6 leading-relaxed" style={{ color: SUB }}>
              Whether you're building an MVP, streamlining operations, or defining your next big move—we act as your
              extended product team to ship faster, smarter, and better.
            </p>

            {/* Stats as crisp cards */}
            <div className="grid grid-cols-2 gap-4 text-center mt-8">
              {[
                { k: '30+', v: 'Clients Served' },
                { k: '12+', v: 'Freelancers in Network' },
                { k: '50+', v: 'Projects Delivered' },
                { k: '100%', v: 'Remote & Agile' },
              ].map((s) => (
                <div
                  key={s.v}
                  className="rounded-xl border border-[#E5E7EB] bg-white py-6 shadow-sm"
                >
                  <p className="text-3xl font-extrabold" style={{ color: ACCENT }}>{s.k}</p>
                  <p className="text-xs mt-1" style={{ color: SUB }}>{s.v}</p>
                </div>
              ))}
            </div>

            {/* Mini checklist */}
            <div className="mt-8 grid sm:grid-cols-2 gap-3">
              {[
                'Product-first approach',
                'Transparent communication',
                'Scalable architectures',
                'Design systems & UX rigor',
              ].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <FiCheckCircle size={18} style={{ color: ACCENT }} />
                  <span className="text-sm" style={{ color: SUB }}>
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="/contact"
                className="px-6 py-3 rounded-full font-semibold text-white"
                style={{ backgroundColor: BTN_DARK }}
              >
                Book a Consultation
              </a>
              <a
                href="/projects"
                className="px-6 py-3 rounded-full font-semibold"
                style={{ backgroundColor: CHIP, color: TEXT }}
              >
                View Our Work
              </a>
            </div>
          </div>

          {/* Right - Image Block */}
          <div className="relative">
            <div className="relative z-10 rounded-xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.08)]">
              <Image
                src="/images/cta-two-bg-1-1.jpg"
                alt="Freelance Team at Work"
                width={600}
                height={450}
                className="rounded-xl"
                priority
              />
            </div>

            {/* Decorative blobs */}
            <div
              className="absolute top-0 left-0 w-40 h-40 rounded-full -z-10 -translate-x-10 -translate-y-10"
              style={{ backgroundColor: BLOB }}
            />
            <div
              className="absolute bottom-0 right-0 w-24 h-24 rounded-full -z-10 translate-x-10 translate-y-10"
              style={{ backgroundColor: BLOB }}
            />
          </div>
        </div>
      </section>

      {/* ===================== */}
      {/* Our Values with grid-line background */}
      {/* ===================== */}
      <section
        className="py-16 px-6 relative"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(0,0,0,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.03) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
          backgroundColor: '#F9FAFB',
        }}
      >
        <div className="max-w-7xl mx-auto">
          <h3
            className="text-center text-sm font-semibold uppercase tracking-wider mb-8"
            style={{ color: SUB }}
          >
            Our Values
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                t: 'Ownership',
                d: 'We act like product owners — accountable to outcomes, not just output.',
              },
              {
                t: 'Clarity',
                d: 'Weekly demos, transparent scope, and docs that your team can keep.',
              },
              {
                t: 'Momentum',
                d: 'Short feedback loops and pragmatic choices to ship value sooner.',
              },
            ].map((v) => (
              <div
                key={v.t}
                className="rounded-xl border border-[#E5E7EB] bg-white p-6 shadow-sm hover:shadow-md transition"
              >
                <h4 className="font-semibold mb-2" style={{ color: TEXT }}>{v.t}</h4>
                <p className="text-sm" style={{ color: SUB }}>{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
