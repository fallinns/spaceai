"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { FiExternalLink, FiFilter, FiCode, FiUsers } from "react-icons/fi";

type Project = {
  title: string;
  image: string;
  description: string;
  tech: string[];
  link: string;
  tags: string[]; // for filtering
};

const ACCENT = "#16C4C9";
const TEXT = "#203047";
const SUB = "#475569";
const DARK = "#0B1E2D";
const SOFT = "#F9FAFB";
const ICON_BG = "#E6F7F8";

const projects: Project[] = [
  {
    title: "AI Resume Parser",
    image: "/images/slider-1-1.jpg",
    description:
      "AI-powered resume parser using OpenAI & Python. Extracts, scores, and classifies resumes with high accuracy.",
    tech: ["Python", "OpenAI", "FastAPI", "MongoDB"],
    link: "https://github.com/your-repo/resume-parser",
    tags: ["AI/ML", "Backend"],
  },
  {
    title: "Turf Booking Platform",
    image: "/images/slider-1-2.jpg",
    description:
      "Full-stack booking system with admin, real-time sloting, and secure payments.",
    tech: ["Next.js", "Tailwind", "FastAPI", "Stripe"],
    link: "#",
    tags: ["Web App", "SaaS"],
  },
  {
    title: "Car Accessories Brand (Fallinns)",
    image: "/images/about-five-1-2.jpg",
    description:
      "End-to-end eCommerce setup: branding, Shopify, product photography, and marketing automation.",
    tech: ["Shopify", "Klaviyo", "Meta Ads", "GTM"],
    link: "#",
    tags: ["E-commerce", "Branding"],
  },
  {
    title: "SaaS Dashboard for MSME Research",
    image: "/images/cta-two-bg-1-1.jpg",
    description:
      "Market data collector with structured categorization and instant reporting for startups.",
    tech: ["Python", "BeautifulSoup", "Tailwind", "Next.js"],
    link: "#",
    tags: ["Web App", "Data"],
  },
];

const FILTERS = ["All", "AI/ML", "Web App", "SaaS", "E-commerce", "Branding", "Data", "Backend"];

export default function ProjectsPage() {
  const [filter, setFilter] = useState<string>("All");

  const visible = useMemo(() => {
    if (filter === "All") return projects;
    return projects.filter((p) => p.tags.includes(filter));
  }, [filter]);

  return (
    <section className="bg-white" style={{ color: TEXT }}>
      {/* HERO */}
      <div
        className="relative overflow-hidden text-center py-24 px-6"
        style={{
          backgroundColor: ACCENT,
          backgroundImage:
            "radial-gradient(80rem 40rem at 70% -10%, rgba(255,255,255,0.25), transparent)",
        }}
      >
        <div className="mx-auto max-w-5xl relative z-10">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-white text-xs mb-5">
            <FiCode />
            <span>Real client work</span>
            <span className="opacity-80">•</span>
            <FiUsers />
            <span>Product-first delivery</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white">Project Portfolio</h1>
          <p className="mt-4 text-white/90 text-lg">
            A snapshot of outcomes across AI, web, e-commerce, and automation.
          </p>

          {/* Filter bar */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
            <span className="inline-flex items-center gap-2 text-white/80 text-sm mr-2">
              <FiFilter /> Filter:
            </span>
            {FILTERS.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className="px-3 py-1.5 rounded-full text-sm font-medium transition"
                style={{
                  backgroundColor: filter === f ? "#FFFFFF" : "rgba(255,255,255,0.15)",
                  color: filter === f ? TEXT : "#FFFFFF",
                  border: filter === f ? "1px solid rgba(0,0,0,0.05)" : "1px solid transparent",
                }}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        {/* soft shapes */}
        <div className="absolute -top-10 -right-10 w-72 h-72 rounded-full bg-white/10" />
        <div className="absolute -bottom-20 -left-20 w-96 h-96 rounded-full bg-white/10" />
      </div>

      {/* PROJECTS GRID */}
      <div className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {visible.map((project, index) => (
            <article
              key={index}
              className="group relative rounded-2xl overflow-hidden border border-gray-200 bg-white shadow-[0_10px_30px_-12px_rgba(0,0,0,0.12)] hover:shadow-xl transition"
            >
              {/* image */}
              <div className="relative h-64">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 50vw, 100vw"
                  priority={index < 2}
                />
                {/* gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent opacity-90" />
                {/* title + link pill */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between gap-3">
                  <h3 className="text-white text-lg font-semibold drop-shadow">{project.title}</h3>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 rounded-full bg-white/90 hover:bg-white px-3 py-1 text-xs font-semibold transition"
                    style={{ color: TEXT }}
                  >
                    View <FiExternalLink />
                  </a>
                </div>
              </div>

              {/* content */}
              <div className="p-6">
                <p className="text-sm mb-4" style={{ color: SUB }}>
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs px-2 py-1 rounded-full"
                      style={{ backgroundColor: ICON_BG, color: TEXT }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* tags footer */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((t) => (
                    <span
                      key={t}
                      className="text-[11px] px-2 py-0.5 rounded-full border"
                      style={{
                        borderColor: "#E5E7EB",
                        backgroundColor: "#EEF6F7",
                        color: TEXT,
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* metrics strip */}
        <div className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
          {[
            { k: "50+", v: "Projects Shipped" },
            { k: "4.9★", v: "Avg Client Rating" },
            { k: "12+", v: "Experts in Network" },
            { k: "100%", v: "Remote & Agile" },
          ].map((s) => (
            <div key={s.v} className="rounded-xl border border-[#E5E7EB] bg-white py-6">
              <p className="text-2xl font-extrabold" style={{ color: ACCENT }}>
                {s.k}
              </p>
              <p className="text-xs mt-1" style={{ color: SUB }}>
                {s.v}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* RECENT OUTCOMES MOSAIC (visual break) */}
      <div
        className="relative py-24 px-6"
        style={{
          backgroundColor: "#F3FBFC",
          backgroundImage:
            "linear-gradient(#0B1E2D0D 1px, transparent 1px), linear-gradient(90deg, #0B1E2D0D 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-3">Recent Outcomes</h2>
          <p className="text-center max-w-2xl mx-auto mb-12" style={{ color: SUB }}>
            Proof beats promises. A few highlights from recent work.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* feature */}
            <article className="lg:col-span-3 rounded-2xl overflow-hidden border border-[#E5E7EB] bg-white shadow-sm hover:shadow-md transition">
              <div className="relative h-56">
                <Image src="/images/about-five-1-1.jpg" alt="SaaS Analytics" fill className="object-cover" />
                <span
                  className="absolute top-4 left-4 rounded-full px-3 py-1 text-xs font-semibold bg-white/90"
                  style={{ color: ACCENT }}
                >
                  ↑ 32% activation
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold">SaaS Analytics Platform</h3>
                <p className="text-sm mt-2" style={{ color: SUB }}>
                  Rebuilt onboarding & funnels; added event pipeline and warehouse-first analytics.
                </p>
              </div>
            </article>

            {/* stack */}
            <div className="lg:col-span-2 grid grid-rows-2 gap-8">
              <article className="rounded-2xl overflow-hidden border border-[#E5E7EB] bg-white shadow-sm hover:shadow-md transition">
                <div className="relative h-40">
                  <Image src="/images/about-five-1-2.jpg" alt="D2C Replatform" fill className="object-cover" />
                  <span
                    className="absolute top-3 left-3 rounded-full px-3 py-1 text-xs font-semibold bg-white/90"
                    style={{ color: ACCENT }}
                  >
                    ↑ 18% conversion
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="text-base font-semibold">D2C Replatform</h3>
                  <p className="text-sm mt-1" style={{ color: SUB }}>
                    Headless storefront; sub-second LCP, optimized PDP & checkout.
                  </p>
                </div>
              </article>

              <article className="rounded-2xl overflow-hidden border border-[#E5E7EB] bg-white shadow-sm hover:shadow-md transition">
                <div className="relative h-40">
                  <Image src="/images/about-three-1-1.png" alt="Ops Automation" fill className="object-cover" />
                  <span
                    className="absolute top-3 left-3 rounded-full px-3 py-1 text-xs font-semibold bg-white/90"
                    style={{ color: ACCENT }}
                  >
                    − 40% manual work
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="text-base font-semibold">Ops Automation</h3>
                  <p className="text-sm mt-1" style={{ color: SUB }}>
                    Automated reporting & approvals; self-serve reduced support load.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>

      {/* TESTIMONIAL SLICE */}
      <div className="py-20 px-6" style={{ backgroundColor: SOFT }}>
        <div className="max-w-4xl mx-auto rounded-2xl border border-[#E5E7EB] bg-white p-8 shadow-sm">
          <p className="text-sm" style={{ color: SUB }}>
            “They plugged in like an in-house product team. Clear scope, weekly demos, and measurable impact.
            We hit our launch date and exceeded the activation target by 30%+.”
          </p>
          <div className="mt-5 flex items-center gap-3">
            <Image src="/images/slider-1-1.jpg" alt="Client" width={40} height={40} className="rounded-full" />
            <div>
              <p className="text-sm font-semibold">Hamilton Brown</p>
              <p className="text-xs" style={{ color: SUB }}>CTO, Seed-stage SaaS</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="text-center py-20 px-6" style={{ backgroundColor: DARK, color: "white" }}>
        <h2 className="text-3xl font-bold mb-3">Have something similar in mind?</h2>
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
