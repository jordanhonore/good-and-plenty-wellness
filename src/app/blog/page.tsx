import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BlogCard from '@/components/blog/BlogCard';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import Image from 'next/image';
import { getAllPosts, getAllCategories } from '@/lib/blog';

export const metadata = {
  title: 'Blog | Good and Plenty Wellness',
  description: 'Insights, tips, and resources for mental health and wellness from Good & Plenty Wellness.',
};

export default function BlogPage() {
  const posts = getAllPosts();
  const categories = getAllCategories();

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      <section className="pt-48 pb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center space-y-8 mb-16">
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
              <h1 className="font-serif text-4xl md:text-5xl text-black/90">
                Blog
              </h1>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fade-up" delay={100}>
              <p className="text-lg text-black/70 max-w-2xl mx-auto">
                Insights, tips, and resources to support your mental health journey.
              </p>
            </AnimateOnScroll>
          </div>

          {/* Categories */}
          {categories.length > 0 && (
            <AnimateOnScroll animation="fade-up" delay={200}>
              <div className="flex flex-wrap justify-center gap-3 mb-12">
                <span className="px-4 py-2 bg-black/80 text-white rounded-full text-sm font-medium">
                  All
                </span>
                {categories.map((category) => (
                  <span
                    key={category}
                    className="px-4 py-2 bg-black/5 text-black/70 rounded-full text-sm font-medium hover:bg-black/10 transition-colors cursor-pointer"
                  >
                    {category}
                  </span>
                ))}
              </div>
            </AnimateOnScroll>
          )}

          {/* Blog Grid */}
          {posts.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post, index) => (
                <AnimateOnScroll key={post.slug} animation="fade-up" delay={index * 100}>
                  <BlogCard post={post} />
                </AnimateOnScroll>
              ))}
            </div>
          ) : (
            <AnimateOnScroll animation="fade-up">
              <div className="text-center py-16">
                <p className="text-xl text-black/60 mb-4">
                  Blog posts coming soon!
                </p>
                <p className="text-black/50">
                  We&apos;re working on bringing you helpful content about mental health and wellness.
                </p>
              </div>
            </AnimateOnScroll>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}
