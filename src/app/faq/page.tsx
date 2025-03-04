'use client';
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Lato } from "next/font/google";
import Link from 'next/link';
import Image from 'next/image';



const lato = Lato({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
  display: 'swap',
});

export default function FAQ() {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const faqs = [
    {
      id: 1,
      question: "What type of therapy do you offer?",
      answer: "We offer individual therapy, couples counseling, family therapy, and specialized walk-and-talk therapy sessions. Our approach is integrative, drawing from various therapeutic modalities to best serve your unique needs."
    },
    {
      id: 2,
      question: "Do you offer virtual sessions?",
      answer: "Yes, we offer secure, HIPAA-compliant telehealth sessions for clients in Texas. Virtual therapy provides the same quality care with added convenience and flexibility."
    },
    {
      id: 3,
      question: "What can I expect from the first session?",
      answer: "Your first session is an opportunity to share your story, discuss your goals, and determine if we're a good fit. We'll explore what brings you to therapy, your background, and create an initial plan together. It's also a chance for you to ask questions and get comfortable with the therapeutic process."
    },
    {
      id: 4,
      question: "How long are sessions and how often should I come?",
      answer: "Sessions are 50 minutes long. Initially, we typically meet weekly to build momentum and establish a strong therapeutic relationship. As you progress, we can adjust the frequency based on your needs and goals."
    },
    {
      id: 5,
      question: "Do you accept insurance?",
      answer: "We are private pay but can provide superbills for out-of-network reimbursement. This allows us to focus on your needs without insurance restrictions and maintain your privacy. See our Services page for more details about the benefits of private pay."
    },
    {
      id: 6,
      question: "How do I schedule a free consultation?",
      answer: "You can schedule a free 15-minute consultation by clicking the 'Book Your Free Consultation' button or visiting our contact page. During this brief call, we'll discuss your needs and determine if we're a good fit."
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      <section className="pt-48 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
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
              FAQs
            </h1>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.id} className="border-b border-black/10">
                <button
                  className="w-full py-6 flex justify-between items-center text-left"
                  onClick={() => setExpandedId(expandedId === faq.id ? null : faq.id)}
                >
                  <h2 className={`${lato.className} text-2xl text-black/90 pr-8`}>
                    {faq.question}
                  </h2>
                  <svg 
                    className={`w-6 h-6 transform transition-transform duration-300 ${
                      expandedId === faq.id ? 'rotate-180' : ''
                    }`}
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                <div 
                  className={`overflow-hidden transition-all duration-300 ${
                    expandedId === faq.id ? 'max-h-96 pb-6' : 'max-h-0'
                  }`}
                >
                  <p className="text-lg text-black/70">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Consultation CTA */}
          <div className="text-center pt-8">
            <Link 
              href="/contact"
              className={`${lato.className} inline-block px-8 py-4 bg-black/60 text-white text-lg tracking-wider hover:bg-black/90 transition-colors font-light`}
            >
              Book Your Free 15 Min Consultation Now
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
} 