import Section from './Section';
import AnimateOnScroll from '../AnimateOnScroll';

const Hero = () => {
  return (
    <Section id="home" className="relative min-w-screen">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="absolute w-full h-full object-cover"
        >
          <source src="./images/gnpleavesvideo.mp4" type="video/mp4" />
        </video>
        {/* Overlay */}
        <div className="absolute inset-0 bg-white/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
        <div className="grid lg:grid-cols-1 gap-12 items-center">
          {/* Left Column - Empty for balance */}
          <div className="hidden lg:block">
          </div>

          {/* Right Column - Text Content */}
          <div className="space-y-8 text-center max-w-xl mx-auto">
            <AnimateOnScroll animation="fade-up">
              <p className="font-serif text-3xl md:text-4xl text-white font-light leading-relaxed">
                Your journey to balance, resilience, and joy begins at
                <br />
                Good & Plenty Wellness
              </p>
            </AnimateOnScroll>
            <AnimateOnScroll animation="fade-up" delay={200}>
              <a
                href="#about"
                className="inline-block px-8 py-4 bg-black/40 text-white text-lg tracking-wider hover:bg-black/90 transition-colors font-light"
              >
                LEARN MORE
              </a>
            </AnimateOnScroll>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Hero; 