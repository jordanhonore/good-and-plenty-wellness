'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Cormorant_Garamond } from "next/font/google";

const cormorant = Cormorant_Garamond({ 
  subsets: ["latin"],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
});

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsVisible(currentScrollY < lastScrollY || currentScrollY < 50);
      setLastScrollY(currentScrollY);
      setIsScrolled(currentScrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const handleMouseEnter = () => {
    if (!isVisible) setIsVisible(true);
  };

  const navItems = [
    {
      title: "HOME",
      href: "/"
    },
    {
      title: "SERVICES",
      href: "/services"
    },
    {
      title: "MEET YOUR THERAPIST",
      href: "/team"
    },
    {
      title: "WALK & TALK THERAPY",
      href: "/walk-and-talk"
    },
    {
      title: "FAQ",
      href: "/faq"
    },
    {
      title: "CONTACT",
      href: "/contact"
    }
  ];

  return (
    <>
      {/* Invisible hover area */}
      <div 
        className="fixed top-0 w-full h-4 z-50"
        onMouseEnter={handleMouseEnter}
      />
      
      <nav className={`fixed top-0 w-full bg-white/80 z-40 shadow-sm transition-transform duration-300 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center py-4">
            {/* Logo */}
            <div className={`relative w-64 h-24 mb-4 transition-all duration-300 ${
              isScrolled ? 'scale-75' : ''
            }`}>
              <Link href="/">
                <Image
                  src="/images/gnp_wellness.png"
                  alt="Good and Plenty Wellness"
                  fill
                  style={{ objectFit: 'contain' }}
                  priority
                />
              </Link>
            </div>

            {/* Navigation and CTA Container */}
            <div className="w-full flex justify-center items-center">
              {/* Centered Navigation Links */}
              <div className="flex space-x-8">
                {navItems.map((item) => (
                  <Link
                    key={item.title}
                    href={item.href}
                    className={`${cormorant.className} px-3 py-2 text-black/80 hover:text-black text-lg tracking-wider`}
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar; 