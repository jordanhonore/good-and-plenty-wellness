import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import Image from 'next/image';
import Link from 'next/link';
import { getAllPosts } from '@/lib/blog';

export default async function Home() {
  const posts = await getAllPosts();
  const recentPosts = posts.slice(0, 3);

  const services = [
    {
      title: 'Individual Therapy',
      description: 'One-on-one sessions focused on your unique journey, helping you navigate anxiety, depression, trauma, and personal growth.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
    },
    {
      title: 'Couples Counseling',
      description: 'Strengthen your relationship through guided communication, conflict resolution, and deeper understanding of each other.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
    },
    {
      title: 'Family Therapy',
      description: 'Work through family dynamics and improve communication patterns for healthier, more supportive relationships.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
    {
      title: 'Walk & Talk Therapy',
      description: 'Experience therapy in nature. Movement and fresh air can enhance the therapeutic process and reduce anxiety.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      ),
    },
  ];

  const specialties = [
    'Anxiety & Stress',
    'Depression',
    'Trauma & PTSD',
    'Relationship Issues',
    'Life Transitions',
    'Self-Esteem',
    'Grief & Loss',
    'Work-Life Balance',
  ];

  const teamMembers = [
    {
      name: 'Brittaney Honoré',
      role: 'Licensed Therapist, Founder',
      image: '/images/brittaneyhead.JPG',
      bio: 'Specializing in anxiety, depression, and relationship issues with a compassionate, client-centered approach.',
    },
  ];

  return (
    <main className="overflow-x-hidden">
      <Navbar />

      {/* ===== HERO SECTION ===== */}
      <section id="home" className="relative min-h-screen flex items-center justify-center">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/gnpnatural.jpg"
            alt="Nature wellness background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-white/40 to-white/60" />
        </div>

        {/* Content */}
        <div className="relative z-10 container-wide text-center pt-20">
          <AnimateOnScroll animation="fade-up">
            <h1 className="text-display text-white mb-6">
              Good & Plenty Wellness
            </h1>
          </AnimateOnScroll>
          <AnimateOnScroll animation="fade-up" delay={200}>
            <p className="text-body-lg text-white max-w-2xl mx-auto mb-10">
              Your journey to balance, resilience, and joy begins here
            </p>
          </AnimateOnScroll>
          <AnimateOnScroll animation="fade-up" delay={400}>
            <a
              href="#about"
              className="inline-block px-10 py-4 bg-[#4A5759] text-white tracking-widest text-sm hover:bg-[#3a4547] transition-all duration-300 hover:scale-105"
            >
              EXPLORE
            </a>
          </AnimateOnScroll>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce-slow">
          <svg
            className="w-6 h-6 text-black/50"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* ===== ABOUT SECTION ===== */}
      <section id="about" className="section-cream section-padding">
        <div className="container-wide">
          <div className="grid-asymmetric">
            {/* Text Column */}
            <div className="col-text order-2 lg:order-1">
              <AnimateOnScroll animation="slide-right">
                <p className="text-sm tracking-widest text-black/50 mb-4 uppercase">About Us</p>
                <h2 className="text-heading text-black/90 mb-6">
                  Therapy rooted in compassion
                </h2>
                <p className="text-body-lg text-black/70 mb-6">
                  At Good & Plenty Wellness, we believe that healing happens when you feel truly seen and supported.
                  Our practice is dedicated to helping you navigate life&apos;s challenges with confidence and clarity.
                </p>
                <p className="text-body-lg text-black/70 mb-8">
                  Whether you&apos;re dealing with anxiety, relationship issues, or simply seeking personal growth,
                  we provide a safe space for you to explore, heal, and thrive.
                </p>

                {/* Specialty Tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {specialties.slice(0, 4).map((specialty) => (
                    <span
                      key={specialty}
                      className="px-4 py-2 bg-white/80 text-black/70 text-sm rounded-full border border-black/10 hover:border-[#4A5759] hover:text-[#4A5759] transition-all duration-300 cursor-default"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>

                <a
                  href="#team"
                  className="inline-block px-8 py-3 border border-black/80 text-black/80 tracking-widest text-sm hover:bg-black hover:text-white transition-all duration-300"
                >
                  MEET THE TEAM
                </a>
              </AnimateOnScroll>
            </div>

            {/* Image Column */}
            <div className="col-media order-1 lg:order-2">
              <AnimateOnScroll animation="slide-left">
                <div className="image-container image-container-portrait group">
                  <Image
                    src="/images/gnplotus.jpg"
                    alt="Peaceful lotus wellness"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SERVICES SECTION ===== */}
      <section id="services" className="section-white section-padding">
        <div className="container-wide">
          {/* Section Header */}
          <div className="text-center mb-16">
            <AnimateOnScroll animation="fade-up">
              <p className="text-sm tracking-widest text-black/50 mb-4 uppercase">What We Offer</p>
              <h2 className="text-heading text-black/90 mb-6">
                Services tailored to you
              </h2>
              <p className="text-body-lg text-black/60 max-w-2xl mx-auto">
                We offer a range of therapeutic services designed to meet you where you are
                and support you in achieving your goals.
              </p>
            </AnimateOnScroll>
          </div>

          {/* Service Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {services.map((service, index) => (
              <AnimateOnScroll key={service.title} animation="fade-up" delay={index * 100}>
                <div className="group p-8 bg-[#F5E6D7]/30 rounded-2xl border border-transparent hover:border-[#4A5759]/20 hover:bg-[#F5E6D7]/50 transition-all duration-500 hover:shadow-xl hover:-translate-y-2 cursor-pointer">
                  <div className="text-[#4A5759] mb-4 transform group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="font-serif text-2xl text-black/90 mb-3 group-hover:text-[#4A5759] transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-black/60 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="mt-4 flex items-center text-[#4A5759] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-sm font-medium">Learn more</span>
                    <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>

          {/* Specialties List */}
          <AnimateOnScroll animation="fade-up" delay={400}>
            <div className="mt-16 text-center">
              <p className="text-sm tracking-widest text-black/50 mb-6 uppercase">Areas of Expertise</p>
              <div className="flex flex-wrap justify-center gap-3">
                {specialties.map((specialty) => (
                  <span
                    key={specialty}
                    className="px-5 py-2.5 bg-white text-black/70 text-sm rounded-full border border-black/10 hover:border-[#4A5759] hover:text-[#4A5759] hover:bg-[#4A5759]/5 transition-all duration-300 cursor-default"
                  >
                    {specialty}
                  </span>
                ))}
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ===== WALK & TALK FEATURE ===== */}
      <section id="walk-talk" className="relative py-32 md:py-40">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/gnpwildflower.jpg"
            alt="Nature walk therapy"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/50 to-black/60" />
        </div>

        {/* Content */}
        <div className="relative z-10 container-wide">
          <div className="max-w-3xl mx-auto text-center">
            <AnimateOnScroll animation="fade-up">
              <p className="text-sm tracking-widest text-white/70 mb-4 uppercase">Featured Service</p>
              <h2 className="text-heading text-white mb-6">
                Walk & Talk Therapy
              </h2>
              <p className="text-body-lg text-white/80 mb-10">
                Experience the healing power of nature combined with therapeutic support.
                Movement and fresh air can reduce anxiety, boost mood, and create a more
                relaxed environment for meaningful conversation.
              </p>
            </AnimateOnScroll>

            {/* Feature Cards */}
            <AnimateOnScroll animation="fade-up" delay={200}>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                <div className="p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <div className="text-white/90 font-serif text-xl mb-2">Nature</div>
                  <p className="text-white/70 text-sm">Sessions held in peaceful outdoor settings</p>
                </div>
                <div className="p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <div className="text-white/90 font-serif text-xl mb-2">Movement</div>
                  <p className="text-white/70 text-sm">Gentle walking enhances the healing process</p>
                </div>
                <div className="p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <div className="text-white/90 font-serif text-xl mb-2">Freedom</div>
                  <p className="text-white/70 text-sm">A refreshing alternative to traditional therapy</p>
                </div>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fade-up" delay={400}>
              <a
                href="#contact"
                className="inline-block px-10 py-4 bg-white text-black tracking-widest text-sm hover:bg-[#F5E6D7] transition-all duration-300 hover:scale-105"
              >
                BOOK A SESSION
              </a>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* ===== BLOG SECTION ===== */}
      <section id="blog" className="section-white section-padding">
        <div className="container-wide">
          {/* Section Header */}
          <div className="text-center mb-16">
            <AnimateOnScroll animation="fade-up">
              <p className="text-sm tracking-widest text-black/50 mb-4 uppercase">From Our Blog</p>
              <h2 className="text-heading text-black/90 mb-6">
                Insights & Resources
              </h2>
              <p className="text-body-lg text-black/60 max-w-2xl mx-auto">
                Explore our latest articles on mental health, wellness, and personal growth.
              </p>
            </AnimateOnScroll>
          </div>

          {/* Blog Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {recentPosts.map((post, index) => (
              <AnimateOnScroll key={post.slug} animation="fade-up" delay={index * 100}>
                <a href={`/blog/${post.slug}`} className="group block">
                  <div className="relative overflow-hidden rounded-2xl mb-4 aspect-[4/3]">
                    <Image
                      src={post.image || '/images/wellnessflower.jpg'}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-white/90 text-black/70 text-xs rounded-full">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <h3 className="font-serif text-xl text-black/90 mb-2 group-hover:text-[#4A5759] transition-colors duration-300">
                    {post.title}
                  </h3>
                  <p className="text-black/60 text-sm line-clamp-2 mb-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center text-[#4A5759] text-sm">
                    <span>Read article</span>
                    <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </a>
              </AnimateOnScroll>
            ))}
          </div>

          {/* View All Link */}
          <AnimateOnScroll animation="fade-up" delay={400}>
            <div className="text-center mt-12">
              <Link
                href="/blog"
                className="inline-block px-8 py-3 border border-black/80 text-black/80 tracking-widest text-sm hover:bg-black hover:text-white transition-all duration-300"
              >
                VIEW ALL ARTICLES
              </Link>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ===== TEAM SECTION ===== */}
      <section id="team" className="section-cream section-padding">
        <div className="container-wide">
          <div className="grid-asymmetric">
            {/* Image Column */}
            <div className="col-media">
              <AnimateOnScroll animation="slide-right">
                <div className="image-container image-container-portrait group">
                  <Image
                    src={teamMembers[0].image}
                    alt={teamMembers[0].name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                </div>
              </AnimateOnScroll>
            </div>

            {/* Text Column */}
            <div className="col-text">
              <AnimateOnScroll animation="slide-left">
                <p className="text-sm tracking-widest text-black/50 mb-4 uppercase">Meet Your Therapist</p>
                <h2 className="text-heading text-black/90 mb-2">
                  {teamMembers[0].name}
                </h2>
                <p className="text-lg text-[#4A5759] mb-6">{teamMembers[0].role}</p>
                <p className="text-body-lg text-black/70 mb-8">
                  {teamMembers[0].bio}
                </p>
                <p className="text-body-lg text-black/70 mb-8">
                  With years of experience and a genuine passion for helping others,
                  I create a warm, non-judgmental space where you can explore your thoughts
                  and feelings freely. My approach is collaborative—we&apos;ll work together
                  to understand your challenges and develop strategies that work for you.
                </p>

                {/* Credentials */}
                <div className="flex flex-wrap gap-3 mb-8">
                  <span className="px-4 py-2 bg-white/80 text-black/70 text-sm rounded-full border border-black/10">
                    Licensed Professional Counselor
                  </span>
                  <span className="px-4 py-2 bg-white/80 text-black/70 text-sm rounded-full border border-black/10">
                    Trauma-Informed Care
                  </span>
                  <span className="px-4 py-2 bg-white/80 text-black/70 text-sm rounded-full border border-black/10">
                    CBT Certified
                  </span>
                </div>

                <a
                  href="#contact"
                  className="inline-block px-8 py-3 bg-[#4A5759] text-white tracking-widest text-sm hover:bg-[#3a4547] transition-all duration-300"
                >
                  SCHEDULE A CONSULTATION
                </a>
              </AnimateOnScroll>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CONTACT SECTION ===== */}
      <section id="contact" className="section-white section-padding">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Left Column - Info */}
            <div>
              <AnimateOnScroll animation="slide-right">
                <p className="text-sm tracking-widest text-black/50 mb-4 uppercase">Get Started</p>
                <h2 className="text-heading text-black/90 mb-6">
                  Begin your journey today
                </h2>
                <p className="text-body-lg text-black/70 mb-10">
                  Taking the first step toward wellness is an act of courage.
                  Reach out today and let&apos;s start the conversation.
                </p>

                {/* Contact Cards */}
                <div className="space-y-4">
                  <div className="p-6 bg-[#F5E6D7]/50 rounded-xl flex items-start gap-4 hover:bg-[#F5E6D7] transition-colors duration-300">
                    <div className="text-[#4A5759]">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-serif text-lg text-black/90 mb-1">Email</h4>
                      <p className="text-black/60">info@goodandplentywellness.com</p>
                    </div>
                  </div>

                  <div className="p-6 bg-[#F5E6D7]/50 rounded-xl flex items-start gap-4 hover:bg-[#F5E6D7] transition-colors duration-300">
                    <div className="text-[#4A5759]">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-serif text-lg text-black/90 mb-1">Location</h4>
                      <p className="text-black/60">Houston, Texas</p>
                      <p className="text-black/50 text-sm">Virtual sessions available</p>
                    </div>
                  </div>

                  <div className="p-6 bg-[#F5E6D7]/50 rounded-xl flex items-start gap-4 hover:bg-[#F5E6D7] transition-colors duration-300">
                    <div className="text-[#4A5759]">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-serif text-lg text-black/90 mb-1">Hours</h4>
                      <p className="text-black/60">Monday - Friday: 9am - 6pm</p>
                      <p className="text-black/50 text-sm">Evening appointments available</p>
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>
            </div>

            {/* Right Column - CTA Card */}
            <div>
              <AnimateOnScroll animation="slide-left">
                <div className="bg-[#4A5759] p-10 rounded-2xl text-white h-full flex flex-col justify-center">
                  <h3 className="font-serif text-3xl mb-4">Ready to take the first step?</h3>
                  <p className="text-white/80 mb-8 leading-relaxed">
                    Schedule a free 15-minute consultation to see if we&apos;re a good fit.
                    No pressure, just a conversation about your needs and how we can help.
                  </p>

                  <div className="space-y-4">
                    <a
                      href="https://goodandplentywellness.clientsecure.me"
                      className="block w-full py-4 bg-white text-[#4A5759] text-center tracking-widest text-sm font-medium hover:bg-[#F5E6D7] transition-all duration-300 rounded-lg"
                    >
                      SCHEDULE APPOINTMENT
                    </a>
                    <a
                      href="/contact"
                      className="block w-full py-4 bg-transparent border border-white/50 text-white text-center tracking-widest text-sm hover:bg-white/10 transition-all duration-300 rounded-lg"
                    >
                      SEND A MESSAGE
                    </a>
                  </div>

                  <div className="mt-8 pt-8 border-t border-white/20">
                    <p className="text-white/60 text-sm text-center">
                      Accepting most major insurance plans
                    </p>
                  </div>
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
