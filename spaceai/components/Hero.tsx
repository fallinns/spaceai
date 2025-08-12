'use client'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

export default function Hero() {
  const [heroHeight, setHeroHeight] = useState('100vh')
  const parallaxRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const headerHeight = document.querySelector('header')?.offsetHeight || 0
    setHeroHeight(`calc(100vh - ${headerHeight}px)`)

    // tiny parallax on mouse move
    const onMove = (e: MouseEvent) => {
      const container = parallaxRef.current
      if (!container) return
      const { innerWidth: w, innerHeight: h } = window
      const x = (e.clientX - w / 2) / w
      const y = (e.clientY - h / 2) / h
      container.style.setProperty('--tx', `${x * 8}px`)
      container.style.setProperty('--ty', `${y * 8}px`)
    }
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  return (
    <section
      className="relative overflow-hidden text-[#203047] font-sans"
      style={{ height: heroHeight, backgroundColor: '#16C4C9' }}
    >
      {/* subtle grid texture */}
      <div
        className="absolute inset-0 opacity-[0.08] z-0 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(#0B1E2D 1px, transparent 1px), linear-gradient(90deg, #0B1E2D 1px, transparent 1px)',
          backgroundSize: '36px 36px',
        }}
      />

      {/* background image with slow ken burns */}
      <Image
        src="/images/slider-1-2.jpg"
        alt="Hero BG"
        fill
        priority
        className="object-cover opacity-10 z-0 will-change-transform hero-kenburns"
      />

      {/* radial highlight */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(70rem 35rem at 70% -10%, rgba(255,255,255,0.25), transparent)',
        }}
      />

      {/* floating orbs */}
      <div className="absolute -top-10 -right-16 w-72 h-72 rounded-full bg-white/15 animate-float-slow z-0" />
      <div className="absolute bottom-10 -left-16 w-96 h-96 rounded-full bg-white/10 animate-float z-0" />

      {/* content */}
      <div
        ref={parallaxRef}
        className="relative z-10 h-full flex items-center justify-center px-6"
        style={{
          transform: 'translate3d(var(--tx,0), var(--ty,0), 0)',
          transition: 'transform 120ms linear',
        }}
      >
        <div className="text-center max-w-3xl">
          <p className="mb-3 uppercase tracking-[0.15em] text-[#334155] font-semibold animate-fade-up [animation-delay:80ms] [animation-fill-mode:both]">
            Welcome to the Planetoid AI
          </p>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-5 animate-fade-up [animation-delay:160ms] [animation-fill-mode:both]">
            <span className="inline-block bg-white px-3 py-1 rounded-md mr-2">
              Experts
            </span>
            in Building AI solutions <br className="hidden sm:block" />
            that benefit all of humanity
          </h1>

          <div className="flex items-center justify-center gap-3 animate-fade-up [animation-delay:240ms] [animation-fill-mode:both]">
            <a
              href="/contact"
              className="bg-[#253449] text-white px-6 py-3 rounded-full font-semibold hover:brightness-110 transition shadow-[0_10px_30px_-12px_rgba(0,0,0,0.35)]"
            >
              Get Started
            </a>
            <a
              href="/projects"
              className="px-6 py-3 rounded-full font-semibold border border-[#203047]/20 text-[#203047] hover:bg-white/40 transition"
            >
              View Work
            </a>
          </div>

          {/* trust badges */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 opacity-90 animate-fade-up [animation-delay:320ms] [animation-fill-mode:both]">
            {['client-1-2.png','client-1-3.png','client-1-4.png'].map((l) => (
              <img key={l} src={`/images/${l}`} alt="" className="h-7 object-contain" />
            ))}
          </div>
        </div>
      </div>

      {/* angled divider into next section */}
      <div
        className="absolute bottom-0 left-0 w-full h-16"
        style={{
          background: 'linear-gradient(to bottom right, #16C4C9 50%, #ffffff 50%)',
        }}
      />

      {/* local styles */}
      <style jsx>{`
        @keyframes hero-kenburns {
          0% { transform: scale(1) translate3d(0,0,0); }
          100% { transform: scale(1.06) translate3d(0,0,0); }
        }
        .hero-kenburns {
          animation: hero-kenburns 22s ease-out forwards;
        }

        @keyframes fade-up {
          from { opacity: 0; transform: translate3d(0, 12px, 0); }
          to   { opacity: 1; transform: translate3d(0, 0, 0); }
        }
        .animate-fade-up {
          animation: fade-up 700ms cubic-bezier(.2,.7,.2,1);
        }

        @keyframes float {
          0% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-slow {
          animation: float 9s ease-in-out infinite;
        }
      `}</style>
    </section>
  )
}
