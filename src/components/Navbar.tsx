'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

interface ButtonStyle {
  display: string;
  padding: string;
  color: string;
  background: string;
  border: number;
  borderRadius: string;
  fontSize: string;
  fontWeight: number;
  textDecoration: string;
  transition: string;
  ':hover': {
    background: string;
    color: string;
  };
  ':active': {
    color: string;
    boxShadow: string;
  };
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  useEffect(() => {
    // Load SimplePractice widget script
    const script = document.createElement('script');
    script.src = 'https://widget-cdn.simplepractice.com/assets/integration-1.0.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    setIsOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    if (isHomePage) {
      e.preventDefault();
      scrollToSection(sectionId);
    }
  };

  const appointmentButtonStyle: ButtonStyle = {
    display: 'inline-block',
    padding: '12px 24px',
    color: '#fff',
    background: '#8BA888',
    border: 0,
    borderRadius: '4px',
    fontSize: '16px',
    fontWeight: 600,
    textDecoration: 'none',
    transition: 'background 0.2s ease',
    ':hover': {
      background: '#d15913',
      color: '#fff'
    },
    ':active': {
      color: 'rgba(255, 255, 255, .75)',
      boxShadow: '0 1px 3px rgba(0, 0, 0, .15) inset'
    }
  };

  const navLinks = [
    { label: 'About', sectionId: 'about', href: '/#about' },
    { label: 'Services', sectionId: 'services', href: '/#services' },
    { label: 'Walk & Talk', sectionId: 'walk-talk', href: '/#walk-talk' },
    { label: 'Blog', sectionId: 'blog', href: '/#blog' },
    { label: 'Team', sectionId: 'team', href: '/#team' },
    { label: 'Contact', sectionId: 'contact', href: '/#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 bg-white ${
      scrolled ? 'shadow-sm' : ''
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-28 py-2">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image src="/images/gnp_wellness.png" alt="Good & Plenty Wellness Icon" width={150} height={150} />
          </Link>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2"
            aria-label="Toggle menu"
          >
            <svg
              className={`h-6 w-6 transition-colors ${scrolled ? 'text-black' : 'text-black/80'}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.sectionId}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.sectionId)}
                className={`transition-colors cursor-pointer ${
                  scrolled ? 'text-black/70 hover:text-black' : 'text-black/70 hover:text-black'
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://goodandplentywellness.clientsecure.me"
              className="spwidget-button"
              data-spwidget-scope-id="7dd0a58a-073d-4f14-9018-251dbd5d1a53"
              data-spwidget-scope-uri="goodandplentywellness"
              data-spwidget-application-id="7c72cb9f9a9b913654bb89d6c7b4e71a77911b30192051da35384b4d0c6d505b"
              data-spwidget-scope-global
              data-spwidget-autobind
              style={appointmentButtonStyle}
            >
              Schedule Appointment
            </a>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          } overflow-hidden bg-white/95 backdrop-blur-sm rounded-b-lg`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.sectionId}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.sectionId)}
                className="block px-3 py-2 text-black/70 hover:text-black cursor-pointer"
              >
                {link.label}
              </a>
            ))}
            <div className="px-3 py-2">
              <a
                href="https://goodandplentywellness.clientsecure.me/sign-in"
                className="spwidget-button block text-center"
                data-spwidget-scope-id="7dd0a58a-073d-4f14-9018-251dbd5d1a53"
                data-spwidget-scope-uri="goodandplentywellness"
                data-spwidget-application-id="7c72cb9f9a9b913654bb89d6c7b4e71a77911b30192051da35384b4d0c6d505b"
                data-spwidget-scope-global
                data-spwidget-autobind
                style={appointmentButtonStyle}
              >
                Schedule Appointment
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
