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
      {/* Top Teal Banner       */}
      {/* ===================== */}
      <section style={{ backgroundColor: ACCENT }}>
        <div className="px-6 py-12 sm:px-10 sm:py-16 lg:px-16 lg:py-20 max-w-7xl mx-auto">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-white/90 text-sm mb-6">
            <FiHome />
            <FiChevronRight />
            <span>About Us</span>
          </div>

          {/* Heading */}
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] text-white"
            style={{ maxWidth: '900px' }}
          >
            Unlock Your
            <br />
            Business Potential
            <br />
            <span className="inline-block bg-white text-[#203047] rounded-md px-4 py-2 mt-2">
              Faster
            </span>
          </h1>

          {/* Subtext */}
          <p
            className="mt-6 max-w-2xl text-base sm:text-lg text-white/90"
          >
            We specialise in accelerating the growth of your business through expertly
            crafted custom business plans and comprehensive market research reports.
          </p>
        </div>
      </section>

      {/* ===================== */}
      {/* Main About Section    */}
      {/* ===================== */}
      <section className="py-24 px-6 bg-white" style={{ color: TEXT }}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left - Text Content */}
          <div>
            <h3 className="uppercase text-sm font-semibold mb-3 tracking-wider" style={{ color: ACCENT }}>
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

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-6 text-center mt-8">
              <div>
                <p className="text-3xl font-bold" style={{ color: ACCENT }}>30+</p>
                <p className="text-sm mt-1" style={{ color: SUB }}>Clients Served</p>
              </div>
              <div>
                <p className="text-3xl font-bold" style={{ color: ACCENT }}>12+</p>
                <p className="text-sm mt-1" style={{ color: SUB }}>Freelancers in Network</p>
              </div>
              <div>
                <p className="text-3xl font-bold" style={{ color: ACCENT }}>50+</p>
                <p className="text-sm mt-1" style={{ color: SUB }}>Projects Delivered</p>
              </div>
              <div>
                <p className="text-3xl font-bold" style={{ color: ACCENT }}>100%</p>
                <p className="text-sm mt-1" style={{ color: SUB }}>Remote & Agile</p>
              </div>
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
                  <span className="text-sm" style={{ color: SUB }}>{item}</span>
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
    </>
  );
}
