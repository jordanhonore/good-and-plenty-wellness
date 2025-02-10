import Section from './Section';

const Hero = () => {
  return (
    <Section id="home" className="relative min-h-screen bg-gray-900">
      {/* Background Image */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{
          backgroundImage: 'url("/hero-background.jpg")', // You'll need to add this image
          backgroundPosition: 'center',
          backgroundSize: 'cover'
        }}
      >
        <div className="absolute inset-0 bg-black/40" /> {/* Overlay */}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
        <div className="text-center text-white space-y-8">
          <h1 className="text-5xl md:text-7xl font-light tracking-wide">
            Good and Plenty
            <span className="block mt-2">Wellness</span>
          </h1>
          <p className="text-xl md:text-2xl font-light tracking-wider max-w-2xl mx-auto">
            Integrating Mental Health & Movement
          </p>
        </div>

        {/* Service Buttons */}
        <div className="mt-16 grid gap-4 md:gap-6 max-w-4xl mx-auto w-full">
          {[
            "MENTAL HEALTH THERAPY",
            "PILATES TRAINING",
            "MOVEMENT CLASSES",
            "WELLNESS PROGRAMS",
            "ABOUT US",
            "CONTACT US"
          ].map((service) => (
            <a
              key={service}
              href={`#${service.toLowerCase().replace(/\s+/g, '-')}`}
              className="px-8 py-4 border border-white/80 text-white hover:bg-white/10 transition-colors text-center tracking-widest text-sm md:text-base"
            >
              {service}
            </a>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Hero; 