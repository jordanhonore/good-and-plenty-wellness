'use client';

import Section from './Section';
import Link from 'next/link';
import Image from 'next/image';
import { useEffect } from 'react';
import AnimateOnScroll from '../AnimateOnScroll';

const Contact = () => {
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

  return (
    <Section id="contact" className="relative py-20 bg-[#F5E6D7]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-8 mb-12">
          <AnimateOnScroll animation="fade-in">
            <div className="relative w-24 h-24 mx-auto mb-6">
              <Image
                src="/images/gnp_icon.png"
                alt="Good and Plenty Wellness Icon"
                fill
                style={{ objectFit: 'contain' }}
              />
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll animation="fade-up">
            <h2 className="font-serif text-4xl md:text-5xl tracking-wide text-black/90">
              Get In Touch
            </h2>
          </AnimateOnScroll>

          <AnimateOnScroll animation="fade-up" delay={100}>
            <p className="text-lg text-black/70 max-w-2xl mx-auto">
              Ready to start your wellness journey? Reach out to schedule your free 15 minute consultation
              or ask any questions you may have.
            </p>
          </AnimateOnScroll>
        </div>

        <div className="grid md:grid-cols-3 gap-8 text-center mb-12">
          <AnimateOnScroll animation="fade-up" delay={200}>
            <div className="space-y-4">
              <h3 className="font-serif text-2xl text-black/90">
                Location
              </h3>
              <p className="text-black/70">
                Houston, Texas
              </p>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll animation="fade-up" delay={300}>
            <div className="space-y-4">
              <h3 className="font-serif text-2xl text-black/90">
                Email
              </h3>
              <p className="text-black/70">
                info@goodandplentywellness.com
              </p>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll animation="fade-up" delay={400}>
            <div className="space-y-4">
              <h3 className="font-serif text-2xl text-black/90">
                Phone
              </h3>
              <p className="text-black/70">
                (832) 409-4485
              </p>
            </div>
          </AnimateOnScroll>
        </div>

        {/* Consultation CTA */}
        <AnimateOnScroll animation="fade-up" delay={500}>
          <div className="text-center">
            <Link
              href="https://goodandplentywellness.clientsecure.me"
              data-spwidget-scope-id="7dd0a58a-073d-4f14-9018-251dbd5d1a53"
              data-spwidget-scope-uri="goodandplentywellness"
              data-spwidget-application-id="7c72cb9f9a9b913654bb89d6c7b4e71a77911b30192051da35384b4d0c6d505b"
              data-spwidget-scope-global
              data-spwidget-autobind
              className="inline-block px-6 py-3 text-white bg-[#8BA888] hover:bg-[#d15913] rounded-md font-semibold transition-colors"
            >
              Book Your Consultation
            </Link>
          </div>
        </AnimateOnScroll>
      </div>
    </Section>
  );
};

export default Contact; 