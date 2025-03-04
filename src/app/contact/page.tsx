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

export default function Contact() {
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);
    setMessage('');
    setError('');

    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      message: formData.get('message'),
    };

    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      setMessage('Message sent successfully!');
      form.reset();
    } catch (error) {
      console.error('Form submission error:', error);
      setError('Failed to send message. Please try again.');
    } finally {
      setIsLoading(false);
    }
  }

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
              Contact Us
            </h1>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-6">
              <h2 className={`${lato.className} text-2xl text-black/90`}>
                Get In Touch
              </h2>
              <p className="text-lg text-black/70">
                Ready to start your wellness journey? Schedule your free 15-minute consultation 
                or reach out with any questions you may have.
              </p>
              <div className="space-y-4">
                <p className="text-black/70">
                  <strong>Email:</strong> info@goodandplentywellness.com
                </p>
                <p className="text-black/70">
                  <strong>Phone:</strong> (832) 409-4485
                </p>
                <p className="text-black/70">
                  <strong>Location:</strong> Houston, Texas
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-black/70 mb-2" htmlFor="name">Name</label>
                <input 
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="w-full p-2 border border-black/20 rounded"
                />
              </div>
              <div>
                <label className="block text-black/70 mb-2" htmlFor="email">Email</label>
                <input 
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full p-2 border border-black/20 rounded"
                />
              </div>
              <div>
                <label className="block text-black/70 mb-2" htmlFor="phone">Phone</label>
                <input 
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  className="w-full p-2 border border-black/20 rounded"
                />
              </div>
              <div>
                <label className="block text-black/70 mb-2" htmlFor="message">Message</label>
                <textarea 
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="w-full p-2 border border-black/20 rounded"
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={isLoading}
                className={`${lato.className} w-full px-8 py-4 bg-black/60 text-white text-lg tracking-wider hover:bg-black/90 transition-colors font-light disabled:bg-black/40`}
              >
                {isLoading ? 'Sending...' : 'Send Message'}
              </button>

              {message && (
                <p className="text-green-600">{message}</p>
              )}
              {error && (
                <p className="text-red-600">{error}</p>
              )}
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
} 