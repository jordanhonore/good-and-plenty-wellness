'use client';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Cormorant_Garamond, Lato } from "next/font/google";
import { useFormStatus } from 'react-dom';
import { useActionState } from 'react';
import { sendEmail } from '../actions/sendEmail';
import Image from 'next/image';

const cormorant = Cormorant_Garamond({ 
  subsets: ["latin"],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
});

const lato = Lato({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
  display: 'swap',
});

// Initial state for the form
type FormState = {
  message: string;
  success: boolean;
  error: string | undefined;
};

const initialState: FormState = {
  message: '',
  success: false,
  error: undefined
};

function SubmitButton() {
  const { pending } = useFormStatus();
  
  return (
    <button
      type="submit"
      disabled={pending}
      className={`${lato.className} w-full px-8 py-4 bg-black/60 text-white text-lg tracking-wider hover:bg-black/90 transition-colors font-light disabled:bg-black/40`}
    >
      {pending ? 'Sending...' : 'Send Message'}
    </button>
  );
}
export default function Contact() {
  const [state, formAction] = useActionState<FormState>(
    async (state: FormState) => {
      // Return current state if no form data
      if (!state) return initialState;
      
      try {
        const formData = new FormData();
        const result = await sendEmail(formData);
        return {
          message: result.error || '',
          success: result.success,
          error: result.error
        };
      } catch (error) {
        return {
          message: 'Failed to send message',
          success: false,
          error: 'An error occurred'
        };
      }
    },
    initialState
  );

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
            <h1 className={`${cormorant.className} text-4xl md:text-5xl text-black/90`}>
              Contact Us
            </h1>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-6">
              <h2 className={`${cormorant.className} text-2xl text-black/90`}>
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
            <form action={formAction} className="space-y-6">
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
              
              <SubmitButton />
              
              {state?.success && (
                <p className="text-green-600">Message sent successfully!</p>
              )}
              {state?.error && (
                <p className="text-red-600">{state.error}</p>
              )}
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
} 