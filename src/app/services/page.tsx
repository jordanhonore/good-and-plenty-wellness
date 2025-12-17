import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';

export default function Services() {
  const services = [
    {
      title: "Individual Therapy",
      description: "One-on-one support tailored to your unique needs, focusing on personal growth, emotional well-being, and coping strategies for challenges such as anxiety, depression, and life transitions.",
      price: "$50/50-minute session"
    },
    {
      title: "Couples & Family Therapy",
      description: "Designed to strengthen relationships through improved communication, conflict resolution, and deeper emotional connection. Whether you're a couple or a family, these sessions provide a safe space to work through challenges together.",
      price: "$100/50-minute session"
    },
    {
      title: "Group Therapy",
      description: "A supportive, therapist-led environment where individuals with shared experiences can connect, learn, and grow together. Groups may focus on topics such as stress-management, grief, self-esteem, or relational-dynamics.",
      price: "$30/50-minute session"
    }
  ];

  const benefits = [
    {
      title: "More Personalized Care",
      description: "Insurance often dictates the length and type of therapy. With private pay, we focus on your unique needs, not a company's restrictions."
    },
    {
      title: "Greater Privacy & Confidentiality",
      description: "Insurance requires a diagnosis and access to your records. With private pay, your information stays between us."
    },
    {
      title: "No Diagnosis Required",
      description: "You don't have to meet insurance criteria for a mental health disorder to receive support. Whether you are navigating life changes, relationships, stress, or personal growth, therapy is available to you without a label."
    },
    {
      title: "Flexible & Tailored Approach",
      description: "We have the freedom to incorporate different therapeutic styles, including traditional talk therapy and walk-and-talk sessions, creating a more natural and engaging space for healing."
    },
    {
      title: "No Surprise Bills or Hassles",
      description: "Insurance billing can be unpredictable, with denied claims and delayed payments. With private pay, you get transparent pricing and no hidden fees."
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      <section className="pt-48 pb-20 relative">
        {/* Background Image */}
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: 'url("/images/gnpoffice.png")',
            opacity: '0.15'
          }}
        />

        {/* Content with relative positioning */}
        <div className="relative z-10 max-w-6xl mx-auto px-8 sm:px-6 lg:px-16">
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
              Services & Pricing
            </h1>
          </div>

          {/* Service Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="p-8 space-y-4">
                  <h2 className="font-serif text-2xl text-black/90 font-semibold">
                    {service.title}
                  </h2>
                  <p className="text-lg text-black/70">
                    {service.description}
                  </p>
                  <p className="font-serif text-xl font-semibold text-black/80">
                    {service.price}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Private Pay Benefits Section */}
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="font-serif text-3xl text-black/90 text-center mb-8">
              Why Private Pay?
            </h2>

            <p className="text-xl text-black/70 mb-16">
              At Good & Plenty Wellness, I believe therapy should be flexible, confidential, and truly centered around you&mdash;not the limitations of insurance companies. Here&apos;s how private pay benefits you:
            </p>

            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="space-y-2">
                  <h3 className="font-serif text-2xl text-black/90">
                    {index + 1}. {benefit.title}
                  </h3>
                  <p className="text-black/70 pl-6">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="space-y-4 pt-8">
              <p className="text-xl text-black/70">
                While I don&apos;t accept insurance directly, I can provide a superbill upon request, which you may submit to your insurance for potential reimbursement.
              </p>

              <p className="text-xl text-black/70">
                Investing in therapy is an investment in yourself. Let&apos;s find a rate that works for you! If you have any questions about payment options or want to see if we&apos;re a good fit, feel free to reach out!
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
} 