import Image from 'next/image'

export default function AboutCompany() {
  return (
    <section className="py-20 px-6 bg-white text-black text-center">
      <h3 className="text-purple-700 uppercase text-sm mb-2">About Company</h3>
      <h2 className="text-3xl font-semibold mb-6">The World’s Leading Ai Consulting Company</h2>
      <p className="max-w-2xl mx-auto mb-10 text-gray-700">
        We Provide The Best Solutions For Your Business! AI solutions to transform
        your business with next-gen tech. We specialize in web dev, design, and AI consulting.
      </p>

      <div className="flex flex-col md:flex-row justify-center items-center gap-12">
        <Image
          src="/images/about-video.png"
          alt="About"
          width={400}
          height={300}
          className="rounded-lg"
        />
        <div className="text-left max-w-md">
          <div className="mb-6">
            <p className="text-4xl text-purple-700 font-bold">9</p>
            <p className="text-sm text-gray-600">Years of Experience</p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 border rounded shadow">
              <h4 className="font-bold text-md">Technology Consultant</h4>
            </div>
            <div className="p-4 border rounded shadow">
              <h4 className="font-bold text-md">AI Specialist</h4>
            </div>
          </div>
          <div className="mt-6">
            <p className="font-semibold">Haydon M.</p>
            <p className="text-sm text-gray-500">AI Lead, Planetoid</p>
          </div>
          <button className="mt-6 bg-purple-700 text-white px-6 py-2 rounded-full">
            Book Consultation
          </button>
        </div>
      </div>
    </section>
  )
}
