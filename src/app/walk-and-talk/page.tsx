import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link';

export default function WalkAndTalk() {
  const benefits = [
    {
      title: "Reduced Anxiety & Stress",
      description: "The combination of movement and nature helps activate your body&apos;s natural relaxation response, making it easier to process difficult emotions."
    },
    {
      title: "Enhanced Mind-Body Connection",
      description: "Walking while talking helps bridge the gap between thoughts and physical sensations, leading to deeper self-awareness."
    },
    {
      title: "Natural Flow of Conversation",
      description: "Side-by-side walking often feels more natural than face-to-face sitting, making it easier to open up and express yourself."
    },
    {
      title: "Physical & Mental Well-being",
      description: "Gentle movement in nature provides both psychological benefits and physical health advantages, supporting overall wellness."
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      <section className="pt-48 pb-20 relative">
        {/* Video Background */}
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute w-full h-full object-cover"
            style={{ opacity: '0.15' }}
          >
            <source src="/images/gnpforrest.mp4" type="video/mp4" />
          </video>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8 mb-16">
            <div className="relative w-24 h-24 mx-auto mb-6">
              <Image
                src="/images/gnp_icon.png"
                alt="Good and Plenty Wellness Icon"
                fill
                style={{ objectFit: 'contain' }}
              />
            </div>
            
            <h1 className="font-serif text-4xl md:text-5xl text-black/90">
              Walk & Talk Therapy
            </h1>
          </div>

          <div className="max-w-none space-y-8">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="font-serif text-3xl text-black/90 mb-6">
                What is Walk & Talk Therapy?
              </h2>

              <p className="text-xl text-black/70 mb-8">
                Sometimes, healing happens best when we&apos;re moving. Walk-and-talk therapy integrates traditional talk therapy with somatic techniques that help regulate the nervous system and process emotions through movement.
              </p>

              <p className="text-xl text-black/70 mb-8">
                Walking in nature or engaging in gentle movement can help release stress, increase mind-body awareness, and create a deeper sense of connection between thoughts and emotions.
              </p>

              <p className="text-xl text-black/70">
                This approach is great for those who feel stuck in their bodies or struggle to express feelings in a traditional seated session.
              </p>
            </div>

            {/* Benefits Grid */}
            <div className="mt-20">
              <h2 className="font-serif text-3xl text-black/90 text-center mb-12">
                Benefits of Movement in Therapy
              </h2>

              <div className="grid md:grid-cols-2 gap-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="bg-white/50 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                    <h3 className="font-serif text-2xl text-black/90 mb-4">
                      {benefit.title}
                    </h3>
                    <p className="text-black/70">
                      {benefit.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Section */}
            <div className="text-center mt-16">
              <Link
                href="/contact"
                className="inline-block px-8 py-4 bg-black/60 text-white text-lg tracking-wider hover:bg-black/90 transition-colors font-light"
              >
                Book Your Free 15 Min Consultation Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
} 