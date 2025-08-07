import Image from 'next/image';
import { FiMessageSquare, FiCpu } from 'react-icons/fi';

export default function AboutCompany() {
  return (
    <section className="py-24 px-6 bg-white text-black">
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
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="bg-white p-2 rounded-full shadow-lg">
              <div className="bg-[#a259ff] p-3 rounded-full">
                <div className="w-4 h-4 border-l-4 border-white rotate-45 ml-[6px]"></div>
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
          <div className="absolute bottom-[-30px] left-1/2 transform -translate-x-1/2 bg-white px-6 py-4 rounded-full shadow-md flex items-center gap-4 border-l-4 border-purple-600">
            <p className="text-4xl font-bold text-purple-700 leading-none">9</p>
            <div>
              <p className="text-sm text-gray-500">Years</p>
              <p className="text-sm text-gray-500">Experience</p>
            </div>
          </div>
        </div>

        {/* Right Side - Text section */}
        <div className="pt-10 lg:pt-0">
          <h4 className="text-sm uppercase text-purple-700 font-medium mb-2">About Company</h4>
          <h2 className="text-4xl font-bold mb-6 leading-tight">
            The World’s Leading Ai <br /> Consulting Company
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            Since from 2021 Building Your Better IT Solution The definition of business is
            an occupation or trade & the purchase and sale of products Our Mission & Vision
            Voice and Data System are crucial to the success.
          </p>
          <p className="text-gray-600 mb-8 leading-relaxed">
            System is a term used to refer to an organized collection symbols and processes
            that may be used to operate on such symbols.
          </p>

          {/* Role Cards */}
          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="bg-[#f6edff] p-4 rounded shadow-sm text-left flex items-start gap-3">
              <FiMessageSquare size={28} className="text-purple-700 mt-1" />
              <div>
                <h5 className="text-purple-700 font-semibold text-sm">Technologies Consultant</h5>
                <p className="text-sm text-gray-600">Smarter Solutions</p>
              </div>
            </div>
            <div className="bg-[#f6edff] p-4 rounded shadow-sm text-left flex items-start gap-3">
              <FiCpu size={28} className="text-purple-700 mt-1" />
              <div>
                <h5 className="text-purple-700 font-semibold text-sm">Ai Specialist</h5>
                <p className="text-sm text-gray-600">Faster Solutions</p>
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
                <p className="text-sm text-purple-700 font-semibold">Business Manager</p>
              </div>
            </div>
            <button className="bg-purple-700 text-white px-6 py-3 rounded-full font-semibold">
              Book Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
