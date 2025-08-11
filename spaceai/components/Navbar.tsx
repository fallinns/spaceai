'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { FiMenu, FiX, FiSearch } from 'react-icons/fi';

const navItems = [
  { href: '/', label: 'HOME' },
  { href: '/about', label: 'ABOUT US' },
  { href: '/services', label: 'SERVICES' },
  { href: '/projects', label: 'PROJECTS' },
  { href: '/store', label: 'STORE' },
  { href: '/contact', label: 'CONTACT' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-40 bg-white font-sans">

      {/* Main navbar */}
      <div className="border-b">
        <div className="mx-auto max-w-[1780px] h-[80px] px-6 flex items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/images/logodark11.png"
              alt="Planetoid AI"
              width={130}
              height={38}
              className="h-[38px] w-auto"
            />
          </Link>

          {/* Nav links */}
          <nav className="hidden md:flex items-center gap-8 ml-10">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-[14px] font-medium tracking-wide transition-colors duration-200 ${
                  isActive(item.href)
                    ? 'text-[#16C4C9] font-semibold'
                    : 'text-[#203047] hover:text-[#16C4C9]'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex-1" />

          {/* Right: Search + CTA */}
          <div className="hidden md:flex items-center">
            {/* Search */}
            <div className="h-[46px] w-[360px] border border-gray-300 rounded-sm flex items-center px-4 bg-white shadow-sm">
              <input
                type="text"
                placeholder="Search..."
                className="h-full flex-1 outline-none text-[14px] placeholder:text-gray-400 text-[#203047]"
              />
              <div className="w-px h-6 bg-gray-200 mx-3" />
              <FiSearch className="text-[18px] text-gray-600" />
            </div>

            {/* CTA */}
            <Link
              href="/contact"
              className="ml-4 h-[46px] w-[260px] rounded-sm bg-[#203047] text-white px-6 flex items-center justify-start hover:bg-[#182435] transition-colors"
            >
              <div className="mr-3 flex items-center justify-center h-8 w-8 rounded-full bg-white/15">
                <span className="block h-2 w-2 rounded-full bg-white" />
              </div>
              <div className="leading-tight">
                <div className="text-[15px] font-semibold">Get In Touch!</div>
                <div className="text-[10px] opacity-80 tracking-wider">ANYTIME</div>
              </div>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden ml-auto p-2 text-gray-700"
            onClick={() => setOpen((s) => !s)}
            aria-label="Toggle menu"
          >
            {open ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-b">
          <div className="mx-auto max-w-[1280px] px-4 py-4 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`block py-2 text-[14px] ${
                  isActive(item.href) ? 'text-[#16C4C9] font-semibold' : 'text-[#203047]'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-3">
              <div className="h-[46px] w-full border rounded-sm flex items-center px-3">
                <input
                  type="text"
                  placeholder="Search…"
                  className="h-full flex-1 outline-none text-[14px]"
                />
                <FiSearch className="text-[18px] text-gray-700" />
              </div>
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="mt-3 inline-flex w-full items-center justify-center rounded-sm bg-[#203047] px-4 py-3 text-white font-semibold"
              >
                Get In Touch
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
