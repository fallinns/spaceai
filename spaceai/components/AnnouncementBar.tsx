'use client';

import { HiOutlineMail } from 'react-icons/hi';
import { GoLocation } from 'react-icons/go';
import { FaLinkedinIn, FaInstagram, FaYoutube } from 'react-icons/fa6';
import { FaXTwitter } from 'react-icons/fa6';
import Link from 'next/link';

export default function AnnouncementBar() {
  return (
    <div className="w-full bg-[#0B1E2D] text-[#E4E9EE] font-sans">
      <div className="mx-auto max-w-[1780px] h-10 px-4 flex items-center justify-between text-[13px] leading-none">
        
        {/* Left: Welcome text */}
        <span className="tracking-wide font-medium">
          Welcome to the Planetoid AI
        </span>

        {/* Right: Contact + Location + Social */}
        <div className="flex items-center gap-5">
          
          {/* Email */}
          <a
            href="mailto:info@planetoidai.com"
            className="flex items-center gap-2 hover:text-white transition-colors"
          >
            <HiOutlineMail className="text-[14px]" />
            <span className="hidden sm:inline">info@planetoidai.com</span>
          </a>

          {/* Location */}
          <div className="hidden md:flex items-center gap-2">
            <GoLocation className="text-[14px]" />
            <span>San Jose, CA 95110, USA</span>
          </div>

          {/* Social Icons */}
          <div className="hidden sm:flex items-center gap-3">
            <Link
              href="https://linkedin.com"
              aria-label="LinkedIn"
              className="hover:text-white transition-colors"
            >
              <FaLinkedinIn />
            </Link>
            <Link
              href="https://twitter.com"
              aria-label="X"
              className="hover:text-white transition-colors"
            >
              <FaXTwitter />
            </Link>
            <Link
              href="https://instagram.com"
              aria-label="Instagram"
              className="hover:text-white transition-colors"
            >
              <FaInstagram />
            </Link>
            <Link
              href="https://youtube.com"
              aria-label="YouTube"
              className="hover:text-white transition-colors"
            >
              <FaYoutube />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
