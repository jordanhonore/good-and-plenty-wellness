'use client';
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Lato } from "next/font/google";
import Image from 'next/image';


const lato = Lato({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
  display: 'swap',
});

const teamMembers = [
  {
    id: 1,
    name: "Brittaney Honoré",
    role: "Marriage and Family Therapist-Associate",
    image: "/images/brittaneyhead.JPG",
    shortBio: "Hi! I'm Brittaney - a Marriage and Family Therapist-Associate and the founder of Good & Plenty Wellness! I help individuals, couples, and families navigate life's challenges with warmth, authenticity, and a holistic approach to healing.",
    fullBio: "With a Master's degree in Marriage and Family Therapy from Houston Christian University, I blend mind-body practices with evidence-based therapy to create a space where you can feel seen, understood, and empowered. My work is rooted in systemic therapy, attachment-based techniques, and somatic interventions, all designed to foster lasting change and deeper connections.",
    approaches: [
      {
        title: "Emotionally Focused Therapy (EFT)",
        description: "Helps couples and individuals strengthen emotional bonds, improve communication, and create deeper connections."
      },
      {
        title: "Family Systems Therapy",
        description: "Examines relationship patterns within families, helping clients understand how these dynamics impact their emotional well-being."
      },
      {
        title: "Attachment Theory",
        description: "Explores early relational patterns to help clients develop secure connections, improve relationships, and foster emotional safety."
      },
      {
        title: "Narrative Therapy",
        description: "Encourages clients to rewrite unhelpful stories about themselves, fostering empowerment and self-growth."
      },
      {
        title: "Somatic Therapy",
        description: "Integrates body awareness, breathwork, and movement to release stored trauma, regulate the nervous system, and restore emotional balance."
      },
      {
        title: "Walk-and-Talk Therapy",
        description: "Offers a dynamic alternative to traditional therapy by incorporating movement, making space for openness and deeper emotional processing."
      }
    ],
    additionalInfo: [
      "At Good & Plenty Wellness, therapy isn`t one size fits all it`s dynamic, engaging, and tailored to your unique needs. Whether in a traditional talk therapy session, engaging in breathwork, or walking outdoors, my goal is to help you cultivate resilience, self-compassion, and a sense of balance in your life. With specialties in anxiety, depression, trauma, relational issues, self-esteem, communication, and perinatal mental health, I offer a compassionate and down-to-earth space for healing. I am committed to guiding you toward growth, connection, and a more fulfilling life.",
      "  Outside of therapy, you can find me doing Pilates, spending time outdoors, lost in a good book, or enjoying quality time with my husband and two little ones. I believe healing should be as much about joy, movement, and self-discovery as it is about working through the tough stuff. Let`s connect and get you moving toward the life you want!",
      "  I am currently under the supervision of Larry R. Bell Jr., LMFT-S"
    ]
  }
  // Add more team members here
];

export default function Team() {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      <section className="pt-48 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8 mb-16">
            <div className="relative w-24 h-24 mx-auto mb-6">
              <Image
                src="/images/gnp_icon.png"
                alt="Good and Plenty Wellness Icon"
                fill
                style={{ objectFit: 'contain' }}
              />
            </div>
            <h1 className={`${lato.className} text-4xl md:text-5xl text-black/90`}>
              Meet Your Therapist
            </h1>
          </div>

          <div className="grid place-items-center">
            {/* Single Team Member Card */}
            <div 
              className={`bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 w-full ${
                expandedId === teamMembers[0].id ? 'w-full' : 'w-full md:w-2/6'
              }`}
            >
              <div className={`${expandedId === teamMembers[0].id ? 'flex flex-col md:grid md:grid-cols-2 gap-8' : ''}`}>
                {/* Image Section - Smaller on mobile */}
                <div className="relative w-full h-64 md:h-96">
                  <Image
                    src={teamMembers[0].image}
                    alt={teamMembers[0].name}
                    fill
                    className="object-cover"
                    style={{ objectPosition: 'center 20%' }}
                    priority
                  />
                </div>

                {/* Content Section - Better padding on mobile */}
                <div className="p-4 md:p-6">
                  <h2 className={`${lato.className} text-2xl text-black/90 mb-2`}>
                    {teamMembers[0].name}
                  </h2>
                  <p className="text-black/70 mb-4">{teamMembers[0].role}</p>
                  <p className="text-black/70 mb-6">{teamMembers[0].shortBio}</p>

                  {/* Read More Button */}
                  <button
                    onClick={() => setExpandedId(expandedId === teamMembers[0].id ? null : teamMembers[0].id)}
                    className={`${lato.className} inline-flex items-center text-black/70 hover:text-black transition-colors`}
                  >
                    <span className="mr-2">{expandedId === teamMembers[0].id ? 'Read Less' : 'Read More'}</span>
                    <svg 
                      className={`w-4 h-4 transition-transform duration-200 ${expandedId === teamMembers[0].id ? 'rotate-180' : ''}`} 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  {/* Expanded Content - Better spacing on mobile */}
                  {expandedId === teamMembers[0].id && (
                    <div className="space-y-4 md:space-y-6 mt-4 md:mt-8 px-4 md:px-0">
                      <p className="text-black/70">{teamMembers[0].fullBio}</p>
                      <p className="text-black/70">{teamMembers[0].additionalInfo}</p>
                      <div>
                        <h3 className={`${lato.className} text-2xl text-black/90 mb-4`}>
                          My Therapeutic Approach
                        </h3>
                        
                        <ul className="space-y-4">
                          {teamMembers[0].approaches.map((approach, index) => (
                            <li key={index} className="space-y-2">
                              <h4 className="text-lg font-medium text-black/80">
                                {approach.title}
                              </h4>
                              <p className="text-black/70">{approach.description}</p>
                            </li>
                          ))}
                        </ul>
                        <br></br>
                        <p className="text-black/70">Each session is designed to support your growth and healing by blending evidence-based strategies with a holistic, embodied approach to wellness.</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
} 