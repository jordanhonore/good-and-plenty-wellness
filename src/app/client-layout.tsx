'use client';
import { useEffect } from 'react';

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const background = document.querySelector('.parallax-bg') as HTMLElement;
      if (background) {
        background.style.transform = `translate3d(0, ${scrolled * -0.1}px, 0)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className="relative overflow-x-hidden">
      {children}
    </main>
  );
} 