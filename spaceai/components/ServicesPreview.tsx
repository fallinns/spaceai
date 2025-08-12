'use client';

import { useEffect, useRef } from 'react';
import {
  FiCpu,
  FiGlobe,
  FiShield,
  FiPenTool,
  FiBarChart2,
} from 'react-icons/fi';

export default function ServicesPreview() {
  // Theme
  const ACCENT = '#16C4C9';
  const CARD_BG = '#FFFFFF';
  const ICON_BG = '#E6F7F8';
  const TITLE_COLOR = '#203047';
  const DESC_COLOR = '#475569';
  const SECTION_BG = '#F9FAFB';

  const services = [
    {
      title: 'Artificial Intelligence',
      desc: 'AI-powered software and prototype development to solve real-world problems.',
      icon: <FiCpu size={28} style={{ color: ACCENT }} />,
    },
    {
      title: 'Web Technologies',
      desc: 'Design and development with cutting-edge web frameworks and stacks.',
      icon: <FiGlobe size={28} style={{ color: ACCENT }} />,
    },
    {
      title: 'Security',
      desc: 'Comprehensive security audits & penetration testing for maximum safety.',
      icon: <FiShield size={28} style={{ color: ACCENT }} />,
    },
    {
      title: 'Graphic Design',
      desc: 'UI/UX, video editing, and jewellery CAD designs that inspire.',
      icon: <FiPenTool size={28} style={{ color: ACCENT }} />,
    },
    {
      title: 'Sales Automation & Marketing',
      desc: 'Lead generation, automation, and data mining for smarter funnels.',
      icon: <FiBarChart2 size={28} style={{ color: ACCENT }} />,
    },
  ];

  // simple IntersectionObserver to reveal on scroll
  const gridRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const cards = gridRef.current?.querySelectorAll('.svc-card');
    if (!cards || !('IntersectionObserver' in window)) return;

    const io = new IntersectionObserver(
      entries => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in-view');
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    cards.forEach((c) => io.observe(c));
    return () => io.disconnect();
  }, []);

  return (
    <section
      className="relative py-24 px-6 text-center overflow-hidden"
      style={{ backgroundColor: SECTION_BG }}
    >
      {/* soft grid background */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            'linear-gradient(#0B1E2D 1px, transparent 1px), linear-gradient(90deg, #0B1E2D 1px, transparent 1px)',
          backgroundSize: '38px 38px',
        }}
      />

      {/* floating blobs */}
      <div className="pointer-events-none absolute -top-16 -right-16 w-72 h-72 rounded-full"
           style={{ backgroundColor: ICON_BG, opacity: 0.6, filter: 'blur(20px)' }} />
      <div className="pointer-events-none absolute -bottom-24 -left-24 w-96 h-96 rounded-full"
           style={{ backgroundColor: ICON_BG, opacity: 0.5, filter: 'blur(28px)' }} />

      {/* Header */}
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold mb-3"
             style={{ backgroundColor: ICON_BG, color: TITLE_COLOR }}>
          <span>Popular Services</span>
        </div>
        <h2
          className="text-3xl md:text-4xl font-extrabold mb-4 leading-tight"
          style={{ color: TITLE_COLOR }}
        >
          We Provide Our Clients Best <br /> Software Solution Services
        </h2>
        <p className="text-sm md:text-base mb-12" style={{ color: DESC_COLOR }}>
          Outcome-focused delivery with speed, quality, and maintainability.
        </p>
      </div>

      {/* Cards */}
      <div
        ref={gridRef}
        className="relative z-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-8 max-w-7xl mx-auto"
      >
        {services.map((service, idx) => {
          // one-up / one-down stagger (only on lg+ so mobile stays clean)
          const staggerClass =
            idx % 2 === 0 ? 'lg:-translate-y-3' : 'lg:translate-y-3';

          return (
            <article
              key={service.title}
              className={`svc-card group relative ${staggerClass} rounded-2xl p-7 border bg-white
                          shadow-[0_10px_30px_-12px_rgba(0,0,0,0.15)]
                          hover:shadow-xl transition-transform duration-500
                          before:absolute before:inset-0 before:rounded-2xl before:pointer-events-none
                          before:opacity-0 group-hover:before:opacity-100
                          overflow-hidden`}
              style={{ borderColor: '#E5E7EB', backgroundColor: CARD_BG }}
            >
              {/* shine on hover */}
              <span
                aria-hidden
                className="pointer-events-none absolute -top-1/2 -left-1/2 h-[200%] w-[200%] rotate-12 opacity-0 group-hover:opacity-10 transition"
                style={{
                  background:
                    'radial-gradient(circle at 30% 30%, white, rgba(255,255,255,0) 35%)',
                }}
              />

              {/* icon circle */}
              <div
                className="w-12 h-12 mx-auto mb-5 rounded-full flex items-center justify-center"
                style={{ backgroundColor: ICON_BG }}
              >
                {service.icon}
              </div>

              <h4 className="font-semibold text-lg mb-1" style={{ color: TITLE_COLOR }}>
                {service.title}
              </h4>
              <p className="text-sm" style={{ color: DESC_COLOR }}>
                {service.desc}
              </p>

              {/* bottom chips */}
              <div className="mt-4 flex flex-wrap gap-2 justify-center">
                {['Scoped', 'Fast delivery', 'Weekly demos']
                  .slice(0, 1 + ((idx % 3) + 1)) // vary count for subtle variety
                  .map((chip) => (
                    <span
                      key={chip}
                      className="text-[11px] px-2 py-1 rounded-full"
                      style={{ backgroundColor: '#EEF6F7', color: TITLE_COLOR }}
                    >
                      {chip}
                    </span>
                  ))}
              </div>
            </article>
          );
        })}
      </div>

      {/* CTA Row */}
      <div className="relative z-10 mt-12">
        <a
          href="/services"
          className="inline-flex items-center justify-center px-5 py-3 rounded-full font-semibold hover:brightness-110 transition"
          style={{ backgroundColor: ACCENT, color: '#0B1E2D' }}
        >
          View Full Services
        </a>
      </div>

      {/* scoped animations */}
      <style jsx>{`
        .svc-card {
          opacity: 0;
          transform: translateY(18px);
        }
        .svc-card.in-view {
          opacity: 1;
          transform: translateY(0) translateZ(0);
          transition: transform 600ms cubic-bezier(0.2, 0.8, 0.2, 1),
            opacity 600ms ease;
        }
      `}</style>
    </section>
  );
}
