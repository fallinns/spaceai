import {
  FiCode,
  FiSmartphone,
  FiLayers,
  FiBarChart2,
  FiFigma,
  FiZap,
  FiCheckCircle,
  FiArrowUpRight,
} from 'react-icons/fi';

export default function ServicesPage() {
  // Theme tokens
  const ACCENT = '#16C4C9';
  const TEXT = '#203047';
  const SUB = '#475569';
  const CARD = '#FFFFFF';
  const SOFT = '#F9FAFB';
  const ICON_BG = '#E6F7F8';
  const DARK = '#0B1E2D';

  const services = [
    {
      icon: <FiCode size={24} style={{ color: ACCENT }} />,
      title: 'Web Development',
      desc: 'Landing pages, SaaS apps and full-stack products built for speed, SEO and scale.',
      tags: ['Next.js', 'Node', 'Postgres'],
    },
    {
      icon: <FiSmartphone size={24} style={{ color: ACCENT }} />,
      title: 'Mobile Apps',
      desc: 'Cross-platform apps with native feel, clean UX and robust offline support.',
      tags: ['React Native', 'Expo'],
    },
    {
      icon: <FiLayers size={24} style={{ color: ACCENT }} />,
      title: 'UI/UX Design',
      desc: 'Design systems, prototypes and user flows that convert and scale.',
      tags: ['Figma', 'Design System'],
    },
    {
      icon: <FiBarChart2 size={24} style={{ color: ACCENT }} />,
      title: 'Analytics & Automation',
      desc: 'Dashboards, ETL, and workflow automation that unlock decisions.',
      tags: ['dbt', 'Airflow', 'Zapier'],
    },
    {
      icon: <FiFigma size={24} style={{ color: ACCENT }} />,
      title: 'Brand & Identity',
      desc: 'Logo, typography and guidelines to launch or refresh your brand.',
      tags: ['Logo', 'Guidelines'],
    },
    {
      icon: <FiZap size={24} style={{ color: ACCENT }} />,
      title: 'Tech Consultation',
      desc: 'Architecture, hiring plans and MVP scoping from people who’ve shipped.',
      tags: ['MVP', 'Roadmap'],
    },
  ];

  const steps = [
    { title: 'Discovery', desc: 'Goals, users, constraints and success metrics.' },
    { title: 'Proposal', desc: 'Scope, timelines and pricing. No surprises.' },
    { title: 'Design + Build', desc: 'Weekly demos. Ship value every sprint.' },
    { title: 'Launch & Iterate', desc: 'Deploy, monitor, optimize and handover.' },
  ];

  const studies = [
    {
      title: 'SaaS Analytics Platform',
      impact: '↑ 32% activation',
      blurb:
        'Rebuilt onboarding and core funnels; added event pipeline with warehouse-first analytics.',
    },
    {
      title: 'D2C Replatform',
      impact: '↑ 18% conversion',
      blurb:
        'Headless storefront with optimized PDP and checkout; sub-second Largest Contentful Paint.',
    },
    {
      title: 'Ops Automation',
      impact: '− 40% manual work',
      blurb:
        'Automated reporting and approvals; reduced support time with self-serve tooling.',
    },
  ];

  const models = [
    {
      name: 'Fixed Scope',
      price: 'Best for MVPs',
      points: ['Clear deliverables', 'Predictable budget', 'Milestone based'],
      featured: false,
    },
    {
      name: 'Monthly Partner',
      price: 'From $6k/mo',
      points: ['Flexible roadmap', 'Dedicated team', 'Priority support'],
      featured: true,
    },
    {
      name: 'Hourly / Advisory',
      price: '$80–$150/hr',
      points: ['Architecture & audits', 'Hiring & coaching', 'On-call help'],
      featured: false,
    },
  ];

  const faqs = [
    { q: 'How soon can you start?', a: 'Typically within 1–2 weeks. We can fast-track small engagements sooner.' },
    { q: 'Do you work with early-stage startups?', a: 'Yes. We’re comfortable owning outcomes with lean teams and tight timelines.' },
    { q: 'What tech stacks do you prefer?', a: 'Next.js/React, Node/Express, Postgres, Prisma, Tailwind, React Native, and a modern data stack.' },
    { q: 'Can you join existing teams?', a: 'Absolutely. We collaborate in your tools and processes or bring ours.' },
  ];

  return (
    <section className="bg-white" style={{ color: TEXT }}>
      {/* HERO */}
      <div
        className="py-24 px-6 text-center relative overflow-hidden"
        style={{
          backgroundColor: ACCENT,
          backgroundImage:
            'radial-gradient(90rem 30rem at 50% -50%, rgba(255,255,255,0.25), transparent)',
        }}
      >
        <div className="mx-auto max-w-5xl relative z-10">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-white text-xs mb-5">
            <span>Trusted delivery</span>
            <span className="opacity-80">•</span>
            <span>Design → Build → Grow</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white">
            Services We Offer
          </h1>
          <p className="mt-4 text-white/90 text-lg">
            We design, build and grow digital products with a product-first mindset.
          </p>

        {/* logos */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-8 opacity-95">
            {['client-1-2.png', 'client-1-3.png', 'client-1-4.png', 'client-1-5.png', 'client-1-6.png'].map((l) => (
              <img key={l} src={`/images/${l}`} alt={l} className="h-8 object-contain" />
            ))}
          </div>
        </div>

        {/* soft shapes */}
        <div className="absolute -top-10 -right-10 w-72 h-72 rounded-full bg-white/10" />
        <div className="absolute -bottom-20 -left-20 w-96 h-96 rounded-full bg-white/10" />
      </div>

      {/* SERVICES GRID */}
      <div className="py-24 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-6">Our Core Offerings</h2>
        <p className="text-center max-w-2xl mx-auto mb-16" style={{ color: SUB }}>
          Outcomes over output. We focus on speed, quality and maintainability.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <article key={i} className="group relative">
              {/* gradient ring */}
              <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-b from-[#eaf7f7] to-transparent opacity-0 group-hover:opacity-100 transition pointer-events-none" />
              <div className="relative rounded-2xl p-6 border border-gray-200 bg-white shadow-[0_10px_30px_-12px_rgba(0,0,0,0.12)] hover:shadow-xl transition">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center mb-5"
                  style={{ backgroundColor: ICON_BG }}
                >
                  {s.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
                <p className="text-sm" style={{ color: SUB }}>
                  {s.desc}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {s.tags.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2 py-1 rounded-full"
                      style={{ backgroundColor: '#EEF6F7', color: TEXT }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <a
                  href="/contact"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold hover:underline underline-offset-4"
                  style={{ color: ACCENT }}
                >
                  Discuss this
                  <FiArrowUpRight />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* PROCESS / WORKFLOW (with connectors) */}
      {/* <div className="py-24 px-6" style={{ backgroundColor: SOFT }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">How We Work</h2>
          <ol className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {steps.map((s, i) => (
              <li key={i} className="relative bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
                {i < steps.length - 1 && (
                  <span className="hidden md:block absolute top-10 right-[-12px] h-[2px] w-6 bg-gray-200" />
                )}
                <div
                  className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-full text-sm font-bold"
                  style={{ backgroundColor: ICON_BG, color: ACCENT }}
                >
                  {i + 1}
                </div>
                <p className="font-semibold mb-1">{s.title}</p>
                <p className="text-sm" style={{ color: SUB }}>
                  {s.desc}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div> */}

      {/* RECENT OUTCOMES — MOSAIC ON SOFT TEAL */}
<div className="relative py-24 px-6" style={{ backgroundColor: '#F3FBFC' }}>
  {/* faint grid texture */}
  <div className="pointer-events-none absolute inset-0 opacity-[0.06]"
       style={{
         backgroundImage:
           'linear-gradient(#0B1E2D 1px, transparent 1px), linear-gradient(90deg, #0B1E2D 1px, transparent 1px)',
         backgroundSize: '28px 28px'
       }} />
  <div className="max-w-7xl mx-auto relative z-10">
    <h2 className="text-3xl font-bold text-center mb-3" style={{ color: '#203047' }}>Recent Outcomes</h2>
    <p className="text-center max-w-2xl mx-auto mb-14" style={{ color: '#475569' }}>
      A few highlights from recent work. Each project shipped with measurable impact.
    </p>

    <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
      {/* Big feature card */}
      <article className="lg:col-span-3 rounded-2xl overflow-hidden border border-[#E5E7EB] bg-white shadow-sm hover:shadow-md transition">
        <div className="relative h-56">
          <img src="/images/about-five-1-1.jpg" alt="SaaS Analytics Platform"
               className="h-full w-full object-cover" />
          <span className="absolute top-4 left-4 rounded-full px-3 py-1 text-xs font-semibold"
                style={{ backgroundColor: '#E6F7F8', color: '#16C4C9' }}>
            ↑ 32% activation
          </span>
        </div>
        <div className="p-6">
          <h3 className="text-lg font-semibold" style={{ color: '#203047' }}>SaaS Analytics Platform</h3>
          <p className="text-sm mt-2" style={{ color: '#475569' }}>
            Rebuilt onboarding and core funnels; added event pipeline with warehouse-first analytics.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {['Next.js', 'Postgres', 'Segment', 'dbt'].map(t => (
              <span key={t} className="text-xs px-2 py-1 rounded-full"
                    style={{ backgroundColor: '#EEF6F7', color: '#203047' }}>{t}</span>
            ))}
          </div>
        </div>
      </article>

      {/* Two stacked cards */}
      <div className="lg:col-span-2 grid grid-rows-2 gap-8">
        <article className="rounded-2xl overflow-hidden border border-[#E5E7EB] bg-white shadow-sm hover:shadow-md transition">
          <div className="relative h-40">
            <img src="/images/about-five-1-2.jpg" alt="D2C Replatform"
                 className="h-full w-full object-cover" />
            <span className="absolute top-3 left-3 rounded-full px-3 py-1 text-xs font-semibold"
                  style={{ backgroundColor: '#E6F7F8', color: '#16C4C9' }}>
              ↑ 18% conversion
            </span>
          </div>
          <div className="p-5">
            <h3 className="text-base font-semibold" style={{ color: '#203047' }}>D2C Replatform</h3>
            <p className="text-sm mt-1" style={{ color: '#475569' }}>
              Headless storefront; optimized PDP and checkout for sub-second LCP.
            </p>
          </div>
        </article>

        <article className="rounded-2xl overflow-hidden border border-[#E5E7EB] bg-white shadow-sm hover:shadow-md transition">
          <div className="relative h-40">
            <img src="/images/about-three-1-1.png" alt="Ops Automation"
                 className="h-full w-full object-cover" />
            <span className="absolute top-3 left-3 rounded-full px-3 py-1 text-xs font-semibold"
                  style={{ backgroundColor: '#E6F7F8', color: '#16C4C9' }}>
              − 40% manual work
            </span>
          </div>
          <div className="p-5">
            <h3 className="text-base font-semibold" style={{ color: '#203047' }}>Ops Automation</h3>
            <p className="text-sm mt-1" style={{ color: '#475569' }}>
              Automated reporting & approvals; self-serve tooling reduced support load.
            </p>
          </div>
        </article>
      </div>
    </div>

    {/* compact KPI row under mosaic */}
    <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
      {[
        { k: '100%', v: 'Remote & Agile' },
        { k: '4.9★', v: 'Avg Client Rating' },
        { k: '30+', v: 'Satisfied Clients' },
        { k: '50+', v: 'Projects Delivered' },
      ].map((s) => (
        <div key={s.v} className="rounded-xl border border-[#E5E7EB] bg-white py-6">
          <p className="text-2xl font-extrabold" style={{ color: '#16C4C9' }}>{s.k}</p>
          <p className="text-xs mt-1" style={{ color: '#475569' }}>{s.v}</p>
        </div>
      ))}
    </div>
  </div>
</div>


      {/* ENGAGEMENT MODELS (feature the middle one) */}
      <div className="py-24 px-6" style={{ backgroundColor: SOFT }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Engagement Models</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {models.map((m, i) => (
              <div
                key={i}
                className={`rounded-2xl p-6 border shadow-sm bg-white ${
                  m.featured ? 'relative ring-2' : ''
                }`}
                style={{
                  borderColor: '#E5E7EB',
                  ...(m.featured ? { ringColor: ACCENT as any } : {}),
                }}
              >
                {m.featured && (
                  <span
                    className="absolute -top-3 left-6 px-3 py-1 rounded-full text-xs font-semibold"
                    style={{ backgroundColor: ICON_BG, color: ACCENT }}
                  >
                    Most Popular
                  </span>
                )}
                <p className="text-sm uppercase tracking-wider" style={{ color: SUB }}>
                  {m.price}
                </p>
                <h3 className="text-xl font-semibold mt-1">{m.name}</h3>
                <ul className="mt-4 space-y-2">
                  {m.points.map((p) => (
                    <li key={p} className="flex items-start gap-2 text-sm" style={{ color: SUB }}>
                      <FiCheckCircle className="mt-[2px]" style={{ color: ACCENT }} />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="/contact"
                  className="mt-6 inline-flex w-full items-center justify-center rounded-full px-4 py-2 font-semibold hover:brightness-110 transition"
                  style={{ backgroundColor: ACCENT, color: DARK }}
                >
                  Get Proposal
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* TECH STACK STRIP */}
      <div className="py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs uppercase tracking-wider text-center mb-6" style={{ color: SUB }}>
            We build with
          </p>
          <div className="flex flex-wrap items-center justify-center gap-10 opacity-90">
            {['client-1-2.png', 'client-1-3.png', 'client-1-4.png', 'client-1-5.png', 'client-1-6.png', 'client-1-7.png'].map((l) => (
              <img key={l} src={`/images/${l}`} alt={l} className="h-7 object-contain" />
            ))}
          </div>
        </div>
      </div>

      {/* FAQ (with nicer summary affordance) */}
      <div className="py-24 px-6" style={{ backgroundColor: SOFT }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">FAQs</h2>
          <div className="space-y-4">
            {faqs.map((f, i) => (
              <details
                key={i}
                className="group rounded-2xl bg-white border border-gray-200 p-5 shadow-sm open:shadow-md transition"
              >
                <summary className="cursor-pointer list-none font-semibold flex items-center justify-between">
                  <span>{f.q}</span>
                  <span
                    className="ml-4 inline-flex h-7 w-7 items-center justify-center rounded-full text-sm font-bold transition group-open:rotate-45"
                    style={{ backgroundColor: ICON_BG, color: ACCENT }}
                  >
                    +
                  </span>
                </summary>
                <p className="mt-3 text-sm" style={{ color: SUB }}>
                  {f.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="text-center py-20 px-6" style={{ backgroundColor: DARK, color: 'white' }}>
        <h2 className="text-3xl font-bold mb-3">Let’s build something great together</h2>
        <p className="opacity-90">Brief us today — get a scoped proposal within 48 hours.</p>
        <a
          href="/contact"
          className="mt-6 inline-flex items-center justify-center px-6 py-3 font-semibold rounded-full hover:brightness-110 transition"
          style={{ backgroundColor: ACCENT, color: DARK }}
        >
          Start a Project
        </a>
      </div>
    </section>
  );
}
