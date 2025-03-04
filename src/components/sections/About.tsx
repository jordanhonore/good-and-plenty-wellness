import Section from './Section';
import Image from 'next/image';
import { Lato } from "next/font/google";


const lato = Lato({ 
  subsets: ["latin"],
  weight: ['300', '400', '700'],
  display: 'swap',
});

const About = () => {
  return (
    <Section id="about" className="relative py-20 bg-[#F5E6D7]">
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-12">
          <div className="relative w-24 h-24 mx-auto mb-6">
            <Image
              src="/images/gnp_icon.png"
              alt="Good and Plenty Wellness Icon"
              fill
              style={{ objectFit: 'contain' }}
            />
          </div>
          
          <h2 className={`${lato.className} text-4xl md:text-5xl tracking-wide text-black/90`}>
            About Us
          </h2>
          
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <div className="space-y-6">
              
            </div>

            <div className="space-y-6">
              <p className="text-lg leading-relaxed text-black/70">
                At Good & Plenty Wellness, we believe true wellness starts from within. Our psychotherapy services provide a safe and supportive space to explore your thoughts, emotions, and relationships. Whether you&apos;re navigating anxiety, depression, trauma, or seeking personal growth, our approach integrates mind and body for deep, lasting healing. We offer therapy for individuals, couples, and families, helping you build resilience, self-awareness, and connection. Wellness isn&apos;t just about what you do—it&apos;s about how you feel, think, and live.
              </p>
            </div>

            <div className="space-y-6">
              <p className="text-lg leading-relaxed text-black/70">
                Our approach is tailored to meet your individual needs, providing you with the tools 
                and support necessary to navigate life&apos;s challenges and achieve lasting well-being.
              </p>
            </div>

            {/* Meet Our Team Button */}
            <div className="pt-8">
              <a 
                href="/team"
                className={`${lato.className} inline-block px-8 py-4 bg-black/60 text-white text-lg tracking-wider hover:bg-black/90 transition-colors font-light`}
              >
                MEET THE FOUNDER
              </a>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About; 