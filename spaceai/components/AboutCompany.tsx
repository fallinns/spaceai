import Image from 'next/image';
import { FiMessageSquare, FiCpu } from 'react-icons/fi';

type Mode = 'light' | 'dark';

export default function AboutCompany({ mode = 'light' }: { mode?: Mode }) {
  const isDark = mode === 'dark';

  // Theme tokens (LaunchCrew vibe)
  const ACCENT = '#16C4C9';
  const TEXT   = isDark ? '#E4E9EE' : '#203047';
  const SUB    = isDark ? '#B8C2CC' : '#334155';
  const BG     = isDark ? '#0B1E2D' : '#FFFFFF';
  const CARD   = isDark ? '#0F2A3A' : '#EAF7F7';
  const BTN_BG = isDark ? ACCENT : '#203047';
  const BTN_TX = isDark ? '#0B1E2D' : '#FFFFFF';

  return (
    <section className={`py-24 px-6`} style={{ backgroundColor: BG, color: TEXT }}>
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Side - Image section */}
        <div className="relative w-full h-full">
          {/* Main image */}
          <Image
            src="/images/about-five-1-1.jpg"
            alt="Team discussion"
            width={600}
            height={400}
            className="rounded-xl"
          />

          {/* Play Button Overlay */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="bg-white p-2 rounded-full shadow-lg">
              <div className="rounded-full p-3" style={{ backgroundColor: ACCENT }}>
                {/* play caret */}
                <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[14px] border-l-white border-b-[8px] border-b-transparent ml-[2px]" />
              </div>
            </div>
          </div>

          {/* Small Group Image Overlay */}
          <Image
            src="/images/about-five-1-2.jpg"
            alt="Collaboration"
            width={200}
            height={150}
            className="absolute bottom-[-20px] left-[-20px] rounded-lg border-4 border-white shadow-lg"
          />

          {/* Experience Badge */}
          <div
            className="absolute bottom-[-30px] left-1/2 -translate-x-1/2 px-6 py-4 rounded-full shadow-md flex items-center gap-4"
            style={{ backgroundColor: '#FFFFFF', borderLeft: `4px solid ${ACCENT}`, color: '#111827' }}
          >
            <p className="text-4xl font-bold" style={{ color: ACCENT, lineHeight: 1 }}>9</p>
            <div>
              <p className="text-sm text-gray-500">Years</p>
              <p className="text-sm text-gray-500">Experience</p>
            </div>
          </div>
        </div>

        {/* Right Side - Text section */}
        <div className="pt-10 lg:pt-0">
          <h4
            className="text-sm uppercase font-medium mb-2"
            style={{ color: ACCENT }}
          >
            About Company
          </h4>

          <h2 className="text-4xl font-bold mb-6 leading-tight">
            The World’s Leading Ai <br /> Consulting Company
          </h2>

          <p className="mb-4 leading-relaxed" style={{ color: SUB }}>
            Since from 2021 Building Your Better IT Solution. The definition of business is
            an occupation or trade & the purchase and sale of products. Our Mission & Vision,
            Voice and Data Systems are crucial to success.
          </p>
          <p className="mb-8 leading-relaxed" style={{ color: SUB }}>
            System is a term used to refer to an organized collection of symbols and processes
            that may be used to operate on such symbols.
          </p>

          {/* Role Cards */}
          <div className="grid grid-cols-2 gap-4 mb-8">
            <div
              className="p-4 rounded shadow-sm text-left flex items-start gap-3"
              style={{ backgroundColor: CARD }}
            >
              <FiMessageSquare size={28} style={{ color: ACCENT }} className="mt-1" />
              <div>
                <h5 className="font-semibold text-sm" style={{ color: ACCENT }}>
                  Technologies Consultant
                </h5>
                <p className="text-sm" style={{ color: SUB }}>Smarter Solutions</p>
              </div>
            </div>

            <div
              className="p-4 rounded shadow-sm text-left flex items-start gap-3"
              style={{ backgroundColor: CARD }}
            >
              <FiCpu size={28} style={{ color: ACCENT }} className="mt-1" />
              <div>
                <h5 className="font-semibold text-sm" style={{ color: ACCENT }}>
                  Ai Specialist
                </h5>
                <p className="text-sm" style={{ color: SUB }}>Faster Solutions</p>
              </div>
            </div>
          </div>

          {/* Profile + Button */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex items-center gap-3">
              <Image
                src="/images/slider-1-1.jpg"
                alt="Hayden"
                width={48}
                height={48}
                className="rounded-full"
              />
              <div>
                <p className="font-bold">Hayden M.</p>
                <p className="text-sm font-semibold" style={{ color: ACCENT }}>
                  Business Manager
                </p>
              </div>
            </div>

            <button
              className="px-6 py-3 rounded-full font-semibold transition"
              style={{ backgroundColor: BTN_BG, color: BTN_TX }}
            >
              Book Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
