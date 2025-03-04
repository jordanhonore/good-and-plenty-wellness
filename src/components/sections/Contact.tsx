import Section from './Section';
import { Lato } from "next/font/google";
import Link from 'next/link';
import Image from 'next/image';



const lato = Lato({ 
  subsets: ["latin"],
  weight: ['300', '400', '700'],
  display: 'swap',
});

const Contact = () => {
  return (
    <Section id="contact" className="relative py-20 bg-[#F5E6D7]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-8 mb-12">
          <div className="relative w-24 h-24 mx-auto mb-6">
            <Image
              src="/images/gnp_icon.png"
              alt="Good and Plenty Wellness Icon"
              fill
              style={{ objectFit: 'contain' }}
            />
          </div>
          
          <h2 className={`${lato.className} text-4xl md:text-5xl tracking-wide text-black/90`}>
            Get In Touch
          </h2>
          <p className="text-lg text-black/70 max-w-2xl mx-auto">
            Ready to start your wellness journey? Reach out to schedule your free 15 minute consultation 
            or ask any questions you may have.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 text-center mb-12">
          <div className="space-y-4">
            <h3 className={`${lato.className} text-2xl text-black/90`}>
              Location
            </h3>
            <p className="text-black/70">
              Houston, Texas
            </p>
          </div>

          <div className="space-y-4">
            <h3 className={`${lato.className} text-2xl text-black/90`}>
              Email
            </h3>
            <p className="text-black/70">
              info@goodandplentywellness.com
            </p>
          </div>

          <div className="space-y-4">
            <h3 className={`${lato.className} text-2xl text-black/90`}>
              Phone
            </h3>
            <p className="text-black/70">
              (832) 409-4485
            </p>
          </div>
        </div>

        {/* Consultation CTA */}
        <div className="text-center">
          <Link 
            href="/contact"
            className={`${lato.className} inline-block px-8 py-4 bg-black/60 text-white text-lg tracking-wider hover:bg-black/90 transition-colors font-light`}
          >
            Ready to embark on your wellness journey? Book your free 15-minute consultation today!
          </Link>
        </div>
      </div>
    </Section>
  );
};

export default Contact; 