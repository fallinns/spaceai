import Image from 'next/image';

export default function AboutUs() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left - Text Content */}
        <div>
          <h3 className="text-[#a259ff] uppercase text-sm font-semibold mb-3 tracking-wide">
            About Us
          </h3>
          <h2 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">
            We're a Freelance Consulting Team <br /> with a Product Mindset
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            At [Your Company Name], we help startups, SMEs, and enterprises scale their business with 
            customized tech, marketing, and product consulting. With backgrounds in tech, design, and strategy, 
            our collective freelance network delivers high-impact work with startup-level agility.
          </p>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Whether you're building an MVP, streamlining operations, or designing your brand's next big move — 
            we act as your extended team to get things done faster, smarter, and better.
          </p>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 gap-6 text-center mt-10">
            <div>
              <p className="text-3xl font-bold text-[#a259ff]">30+</p>
              <p className="text-sm text-gray-600 mt-1">Clients Served</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-[#a259ff]">12+</p>
              <p className="text-sm text-gray-600 mt-1">Freelancers in Network</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-[#a259ff]">50+</p>
              <p className="text-sm text-gray-600 mt-1">Projects Delivered</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-[#a259ff]">100%</p>
              <p className="text-sm text-gray-600 mt-1">Remote & Agile</p>
            </div>
          </div>
        </div>

        {/* Right - Image Block */}
        <div className="relative">
          <div className="relative z-10 rounded-lg overflow-hidden">
            <Image
              src="/images/cta-two-bg-1-1.jpg"
              alt="Freelance Team at Work"
              width={600}
              height={450}
              className="rounded-lg"
            />
          </div>
          {/* Decorative blob */}
          <div className="absolute top-0 left-0 w-40 h-40 bg-[#f3e8ff] rounded-full -z-10 -translate-x-10 -translate-y-10"></div>
          <div className="absolute bottom-0 right-0 w-24 h-24 bg-[#f3e8ff] rounded-full -z-10 translate-x-10 translate-y-10"></div>
        </div>
      </div>
    </section>
  );
}
