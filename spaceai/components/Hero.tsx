'use client'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative h-screen bg-gradient-to-r from-[#3c0d99] to-[#740b9d] text-white flex items-center justify-center text-center px-6">
      <Image
        src="/images/hero-face.png"
        alt="Hero BG"
        fill
        className="object-cover opacity-30 z-0"
      />
      <div className="z-10 max-w-3xl">
        <h1 className="text-5xl font-bold leading-tight mb-4">
          Building AI solutions that benefit all of humanity
        </h1>
        <p className="mb-6 text-lg">Welcome to the Planetoid AI</p>
        <button className="bg-white text-purple-700 px-6 py-3 rounded-full font-semibold">
          Book Consultation
        </button>
      </div>
    </section>
  )
}
