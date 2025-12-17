import Section from './Section';
import Image from 'next/image';
import AnimateOnScroll from '../AnimateOnScroll';

const specialties = [
  {
    title: "Anxiety & Depression",
    description: "Managing overwhelming emotions, intrusive thoughts, and mood shifts with evidence-based strategies"
  },
  {
    title: "Couples & Families",
    description: "Strengthening communication, deepening connection, and addressing conflict in romantic and family relationships"
  },
  {
    title: "Trauma & PTSD",
    description: "Offering a compassionate approach to healing from past experiences that continue to impact your present"
  },
  {
    title: "Self-Esteem & Identity Development",
    description: "Helping you build confidence, set boundaries, and cultivate self-compassion"
  },
  {
    title: "Adolescent Mental Health",
    description: "Supporting teens in managing stress, peer relationships, academic pressures, family dynamics, and self-identity"
  },
  {
    title: "Life-Transitions & Stress Management",
    description: "Providing guidance through career changes, relationship shifts, loss, and other major life adjustments"
  }
];

const Benefits = () => {
  return (
    <Section id="benefits" className="relative py-20">
      {/* Background Image */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: 'url("/images/gnpwildflower.jpg")',
          opacity: '0.20'
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-12">
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
            <div className="max-w-3xl mx-auto">
              <h2 className="font-serif text-4xl md:text-5xl tracking-wide text-black/90 mb-6">
                Our Specialties
              </h2>
            </div>
          </AnimateOnScroll>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {specialties.map((specialty, index) => (
              <AnimateOnScroll
                key={index}
                animation="fade-up"
                delay={index * 100}
              >
                <div className="text-center space-y-4">
                  <h3 className="font-serif text-2xl tracking-wide text-black/90">
                    {specialty.title}
                  </h3>
                  <p className="text-black/70 leading-relaxed">
                    {specialty.description}
                  </p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>

          {/* Pricing Button */}
          <AnimateOnScroll animation="fade-up" delay={600}>
            <div className="pt-12">
              <a
                href="/services"
                className="inline-block px-8 py-4 bg-black/40 text-white text-lg tracking-wider hover:bg-black/90 transition-colors font-light"
              >
                VIEW PRICING & SERVICES
              </a>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </Section>
  );
};

export default Benefits; 