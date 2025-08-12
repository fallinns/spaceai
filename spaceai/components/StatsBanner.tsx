'use client';

import { useEffect, useMemo, useRef, useState } from 'react';

type Mode = 'light' | 'dark';

type Stat = { label: string; value: number };

export default function StatsBanner({ mode = 'light' }: { mode?: Mode }) {
  const stats: Stat[] = useMemo(
    () => [
      { label: 'Successful Integrations', value: 151 },
      { label: 'Strategies Planned', value: 127 },
      { label: 'Projects Delivered', value: 36 },
      { label: 'Satisfied Clients', value: 68 },
    ],
    []
  );

  // Theme tokens (LaunchCrew style)
  const isDark = mode === 'dark';
  const BG = isDark ? '#0B1E2D' : '#16C4C9';
  const PANEL = isDark ? 'rgba(255,255,255,0.03)' : 'rgba(255,255,255,0.10)';
  const RING = isDark ? 'rgba(255,255,255,0.10)' : 'rgba(255,255,255,0.35)';
  const VALUE = isDark ? '#16C4C9' : '#0B1E2D';
  const LABEL = isDark ? '#E4E9EE' : '#0B1E2D';
  const GRID_LINE = isDark ? '#ffffff10' : '#0B1E2D10';
  const GLOW = isDark ? '#16C4C933' : '#ffffff66';

  // Count-up logic
  const [counts, setCounts] = useState(stats.map(() => 0));
  const startedRef = useRef(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = rootRef.current;
    if (!node || !('IntersectionObserver' in window)) return;

    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting) && !startedRef.current) {
          startedRef.current = true;
          animateCounts();
        }
      },
      { threshold: 0.25 }
    );
    io.observe(node);
    return () => io.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const animateCounts = () => {
    const duration = 1200; // ms
    const start = performance.now();
    const from = counts.slice();
    const to = stats.map((s) => s.value);

    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      // easeOutCubic
      const e = 1 - Math.pow(1 - t, 3);
      setCounts(to.map((target, i) => Math.round(from[i] + (target - from[i]) * e)));
      if (t < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  };

  return (
    <section
      className="relative py-16 px-6 overflow-hidden"
      style={{ backgroundColor: BG }}
      ref={rootRef}
    >
      {/* animated grid background */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(${GRID_LINE} 1px, transparent 1px),
            linear-gradient(90deg, ${GRID_LINE} 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
          maskImage:
            'radial-gradient(80rem 40rem at 50% -20%, black 40%, transparent 70%)',
        }}
      />
      {/* slow moving glow */}
      <div
        aria-hidden
        className="absolute -top-24 left-1/2 -translate-x-1/2 w-[70vw] h-64 rounded-full blur-3xl animate-float-slow"
        style={{ background: `radial-gradient(closest-side, ${GLOW}, transparent)` }}
      />

      <div
        className="relative max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-6 text-center"
        style={{
          // subtle panel ring
          boxShadow: `inset 0 0 0 1px ${RING}`,
          borderRadius: 16,
          background: PANEL,
          backdropFilter: 'blur(2px)',
        }}
      >
        {stats.map((stat, idx) => (
          <div
            key={stat.label}
            className="group relative py-8 transition-transform hover:-translate-y-0.5"
          >
            {/* top pulse dot */}
            <span
              aria-hidden
              className="absolute top-3 left-1/2 -translate-x-1/2 h-1.5 w-1.5 rounded-full animate-pulse"
              style={{ backgroundColor: VALUE }}
            />
            <p
              className="text-4xl font-extrabold leading-none tracking-tight"
              style={{ color: VALUE }}
            >
              {counts[idx]}
            </p>
            <p
              className="text-[13px] mt-2 font-medium"
              style={{ color: LABEL }}
            >
              {stat.label}
            </p>

            {/* bottom accent line animates on hover */}
            <span
              aria-hidden
              className="pointer-events-none absolute bottom-3 left-1/2 h-[3px] w-0 rounded-full transition-all duration-500 group-hover:w-20"
              style={{ backgroundColor: VALUE, transform: 'translateX(-50%)' }}
            />
          </div>
        ))}
      </div>

      {/* keyframes/local styles */}
      <style jsx>{`
        @keyframes float-slow {
          0% { transform: translate(-50%, 0) scale(1); opacity: 0.7; }
          50% { transform: translate(-50%, 10px) scale(1.03); opacity: 0.9; }
          100% { transform: translate(-50%, 0) scale(1); opacity: 0.7; }
        }
        .animate-float-slow { animation: float-slow 8s ease-in-out infinite; }
      `}</style>
    </section>
  );
}
