import Image from 'next/image';
import { FiCloud, FiUsers } from 'react-icons/fi';

export default function WhyChooseUs() {
  return (
    <section className="relative py-24 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Image with BG */}
        <div className="relative z-10">
          <div className="relative bg-[#a259ff] p-4 rounded-lg">
            <Image
              src="/images/about-three-1-1.png"
              alt="Team Collaboration"
              width={600}
              height={400}
              className="rounded-lg relative z-10"
            />
            {/* Optional decorative bar above image */}
            <div className="absolute -top-4 left-[50%] transform -translate-x-1/2 w-1 h-16 bg-white"></div>
          </div>
        </div>

        {/* Right Content */}
        <div className="z-10">
          <h4 className="text-[#a259ff] uppercase text-sm font-semibold mb-3 tracking-wide">
            Company Benefits
          </h4>
          <h2 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">
            Why You Should Choose <br /> Our Services
          </h2>
          <p className="text-gray-600 mb-10 max-w-xl leading-relaxed">
            Choose Infetech to have custom software solutions for your business with
            the most reasonable price.
          </p>

          {/* Benefit Cards */}
          <div className="flex flex-col gap-6">
            <div className="flex items-start gap-4">
              <div className="bg-black text-white rounded-full p-4">
                <FiCloud size={28} />
              </div>
              <div>
                <h5 className="font-semibold text-[#a259ff] text-lg mb-1">
                  Cloud Based Services
                </h5>
                <p className="text-gray-600 text-sm">
                  Services address a range of simply free text application and infrastructure needs.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-black text-white rounded-full p-4">
                <FiUsers size={28} />
              </div>
              <div>
                <h5 className="font-semibold text-[#a259ff] text-lg mb-1">
                  Expert Team Members
                </h5>
                <p className="text-gray-600 text-sm">
                  Services address a range of simply free text application and infrastructure needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Background Blob */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-bl-[50%] bg-[#a259ff] z-0"></div>
    </section>
  );
}
