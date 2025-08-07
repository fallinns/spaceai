import { FiCode, FiSmartphone, FiLayers, FiBarChart2, FiFigma, FiZap } from 'react-icons/fi';
import Image from 'next/image';

export default function ServicesPage() {
  const services = [
    {
      icon: <FiCode size={28} />,
      title: 'Web Development',
      desc: 'Custom websites, landing pages, and full-stack solutions tailored for startups and businesses.',
    },
    {
      icon: <FiSmartphone size={28} />,
      title: 'Mobile App Development',
      desc: 'Cross-platform mobile apps with clean UX and high performance.',
    },
    {
      icon: <FiLayers size={28} />,
      title: 'UI/UX Design',
      desc: 'Design systems, wireframes, prototypes using Figma and Adobe XD.',
    },
    {
      icon: <FiBarChart2 size={28} />,
      title: 'Analytics & Automation',
      desc: 'Data dashboards, business automation, and workflow optimization.',
    },
    {
      icon: <FiFigma size={28} />,
      title: 'Brand Identity',
      desc: 'Logo design, typography, and complete brand guidelines.',
    },
    {
      icon: <FiZap size={28} />,
      title: 'Tech Consultation',
      desc: 'Get help choosing the right stack, hiring, or scaling your MVP.',
    },
  ];

  const steps = [
    { title: '1. Discovery', desc: 'We understand your goals and business needs.' },
    { title: '2. Proposal', desc: 'You receive a scope + quote tailored for you.' },
    { title: '3. Design + Dev', desc: 'We build iteratively with regular feedback.' },
    { title: '4. Handover/Deploy', desc: 'Launch, support, and ongoing partnership.' },
  ];

  return (
    <section className="bg-white text-gray-900">
      {/* Hero */}
      <div className="text-center py-24 px-6 bg-[#f6edff]">
        <h1 className="text-4xl font-bold mb-4">Services We Offer</h1>
        <p className="text-lg max-w-2xl mx-auto text-gray-700">
          We help businesses and entrepreneurs bring their ideas to life through thoughtful design,
          scalable tech, and agile execution.
        </p>
      </div>

      {/* Services Grid */}
      <div className="py-24 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-16">Our Core Offerings</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="bg-white border border-gray-200 rounded-xl p-6 shadow-md hover:shadow-xl transition"
            >
              <div className="w-14 h-14 rounded-full bg-[#a259ff]/10 text-[#a259ff] flex items-center justify-center mb-6">
                {service.icon}
              </div>
              <h4 className="text-xl font-semibold mb-2">{service.title}</h4>
              <p className="text-gray-600 text-sm">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* How We Work */}
      <div className="bg-gray-50 py-24 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-12">Our Workflow</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {steps.map((step, idx) => (
              <div key={idx} className="text-left">
                <p className="text-[#a259ff] font-semibold mb-2">{step.title}</p>
                <p className="text-sm text-gray-600">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="py-24 px-6 max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-4">Why Choose Us?</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-16">
          We’re not just freelancers — we’re your product partners. Our hybrid approach blends freelance speed with agency-level execution.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          <div>
            <p className="text-4xl font-bold text-[#a259ff] mb-2">100%</p>
            <p className="text-sm text-gray-600">Remote & Agile</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-[#a259ff] mb-2">4.9★</p>
            <p className="text-sm text-gray-600">Avg Client Rating</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-[#a259ff] mb-2">30+</p>
            <p className="text-sm text-gray-600">Satisfied Clients</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-[#a259ff] mb-2">50+</p>
            <p className="text-sm text-gray-600">Projects Delivered</p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-[#a259ff] text-white py-20 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Let's Build Something Great Together</h2>
        <p className="mb-6">Start your project with a free consultation call today.</p>
        <a
          href="/contact"
          className="bg-white text-[#a259ff] px-6 py-3 font-semibold rounded-full hover:shadow-lg transition"
        >
          Book a Call
        </a>
      </div>
    </section>
  );
}
