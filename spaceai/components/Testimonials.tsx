import Image from 'next/image';
import { BiSolidQuoteAltRight } from 'react-icons/bi';

export default function Testimonials() {
  const feedback = [
    {
      name: 'Hamilton Brown',
      role: 'Software Engineer',
      text:
        "Choosing PlanetoidAi as our technology partner was the best decision we made for our business. Their expertise in Artificial intelligence coupled with their tailored solutions have empowered us to overcome complex challenges and achieve remarkable results. The team at PlanetoidAi has consistently gone above and beyond to ensure our success, and we couldn't be happier with the outcomes.",
      image: '/images/slider-1-1.jpg',
    },
    {
      name: 'Chineze Adebisi',
      role: 'Business Manager',
      text:
        "The impact of PlanetoidAi’s technology on our organization has been nothing short of extraordinary. It has not only revolutionized our operations but has also enabled us to stay ahead of our competition. The reliability, scalability, and security of PlanetoidAi’s solutions have given us peace of mind, knowing that we are supported by a truly innovative and forward-thinking technology partner.",
      image: '/images/slider-1-2.jpg',
    },
  ];

  return (
    <section className="py-24 px-6 bg-[#0B1E2D] text-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        {/* Left Text Block */}
        <div className="text-left">
          <h3 className="uppercase text-teal-400 text-sm font-semibold mb-3 tracking-wider">
            Our Clients
          </h3>
          <h2 className="text-4xl font-bold mb-6 leading-tight">
            We Are Trusted <br /> By People Worldwide
          </h2>
          <p className="text-gray-300 mb-4 leading-relaxed">
            PlanetoidAi, where innovation meets excellence. We are a leading technology company
            delivering cutting-edge solutions that revolutionize industries and empower businesses worldwide.
            With a proven track record of success and a commitment to staying at the forefront of tech advancements, 
            we are your trusted partner in navigating the ever-evolving landscape of digital transformation.
          </p>
          <p className="text-gray-300 leading-relaxed mb-8">
            We take pride in showcasing exceptional feedback from our esteemed clients, partners, and customers.
            Their success stories reflect our dedication to delivering high-impact, measurable results.
          </p>
          <button className="bg-teal-500 hover:bg-teal-400 transition-colors text-[#0B1E2D] px-6 py-3 rounded-full font-semibold">
            Read More
          </button>
        </div>

        {/* Testimonials Cards */}
        <div className="flex flex-col gap-10">
          {feedback.map((item, idx) => (
            <div
              key={idx}
              className="relative border border-teal-500 p-6 pt-10 rounded-lg bg-[#112A3A] shadow-lg"
            >
              {/* Profile Picture */}
              <div className="absolute -top-6 left-6">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={60}
                  height={60}
                  className="rounded-full border-4 border-teal-500"
                />
              </div>

              {/* Quote Content */}
              <p className="text-gray-300 text-sm mb-6 mt-2">{item.text}</p>

              {/* Name + Role + Quote Icon */}
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-bold">{item.name}</p>
                  <p className="text-sm text-teal-400 font-semibold">{item.role}</p>
                </div>
                <BiSolidQuoteAltRight size={32} className="text-teal-500" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
