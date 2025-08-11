'use client'
import Image from 'next/image'
import { useEffect, useState } from 'react'

export default function Hero() {
  const [heroHeight, setHeroHeight] = useState('100vh')

  useEffect(() => {
    const headerHeight = document.querySelector('header')?.offsetHeight || 0
    setHeroHeight(`calc(100vh - ${headerHeight}px)`)
  }, [])

  return (
    <section
      className="relative bg-[#16C4C9] text-[#203047] flex items-center justify-center text-center px-6 font-sans"
      style={{ height: heroHeight }}
    >
      <Image
        src="/images/slider-1-2.jpg"
        alt="Hero BG"
        fill
        className="object-cover opacity-10 z-0"
      />
      <div className="z-10 max-w-3xl">
        <p className="mb-2 uppercase tracking-wide text-[#334155] font-medium">
          Welcome to the Planetoid AI
        </p>
        <h1 className="text-5xl font-extrabold leading-tight mb-4">
          <span className="bg-white px-3 py-1 rounded-md mr-2">Experts</span>
          in Building AI solutions <br />
          that benefit all of humanity
        </h1>
        <button className="bg-[#253449] text-white px-6 py-3 rounded-full font-semibold hover:brightness-110 transition">
          Get Started
        </button>
      </div>
    </section>
  )
}
