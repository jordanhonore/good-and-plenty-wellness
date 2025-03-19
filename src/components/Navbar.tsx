'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';




export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const SIMPLEPRACTICE_SCOPE_ID = process.env.NEXT_PUBLIC_SIMPLEPRACTICE_SCOPE_ID;
  const SIMPLEPRACTICE_SCOPE_URI = process.env.NEXT_PUBLIC_SIMPLEPRACTICE_SCOPE_URI;
  const SIMPLEPRACTICE_APP_ID = process.env.NEXT_PUBLIC_SIMPLEPRACTICE_APP_ID;

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

  const appointmentButtonStyle = {
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

  return (
    <nav className="fixed w-full bg-white/95 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image src="/images/gnp_wellness.png" alt="Good & Plenty Wellness Icon" width={100} height={100} />
          </Link>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2"
            aria-label="Toggle menu"
          >
            <svg
              className="h-6 w-6"
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
            <Link href="/services" className="text-black/70 hover:text-black">Services</Link>
            <Link href="/walk-and-talk" className="text-black/70 hover:text-black">Walk & Talk</Link>
            <Link href="/team" className="text-black/70 hover:text-black">Team</Link>
            <Link href="/faq" className="text-black/70 hover:text-black">FAQ</Link>
            <Link href="/contact" className="text-black/70 hover:text-black">Contact</Link>
            <a
              href={`https://${SIMPLEPRACTICE_SCOPE_URI}.clientsecure.me`}
              className="spwidget-button"
              data-spwidget-scope-id={SIMPLEPRACTICE_SCOPE_ID}
              data-spwidget-scope-uri={SIMPLEPRACTICE_SCOPE_URI}
              data-spwidget-application-id={SIMPLEPRACTICE_APP_ID}
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
          } overflow-hidden`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              href="/services"
              className="block px-3 py-2 text-black/70 hover:text-black"
              onClick={() => setIsOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/walk-and-talk"
              className="block px-3 py-2 text-black/70 hover:text-black"
              onClick={() => setIsOpen(false)}
            >
              Walk & Talk
            </Link>
            <Link
              href="/team"
              className="block px-3 py-2 text-black/70 hover:text-black"
              onClick={() => setIsOpen(false)}
            >
              Team
            </Link>
            <Link
              href="/faq"
              className="block px-3 py-2 text-black/70 hover:text-black"
              onClick={() => setIsOpen(false)}
            >
              FAQ
            </Link>
            <Link
              href="/contact"
              className="block px-3 py-2 text-black/70 hover:text-black"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <a
              href={`https://${SIMPLEPRACTICE_SCOPE_URI}.clientsecure.me`}
              className="spwidget-button block px-3 py-2"
              data-spwidget-scope-id={SIMPLEPRACTICE_SCOPE_ID}
              data-spwidget-scope-uri={SIMPLEPRACTICE_SCOPE_URI}
              data-spwidget-application-id={SIMPLEPRACTICE_APP_ID}
              data-spwidget-scope-global
              data-spwidget-autobind
              style={appointmentButtonStyle}
              onClick={() => setIsOpen(false)}
            >
              Request Appointment
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
} 