import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { MDXRemote } from 'next-mdx-remote/rsc';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import MDXComponents from '@/components/blog/MDXComponents';
import { getPostBySlug, getAllSlugs } from '@/lib/blog';

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      title: 'Post Not Found | Good and Plenty Wellness',
    };
  }

  return {
    title: `${post.title} | Good and Plenty Wellness`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      <article className="pt-48 pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Link */}
          <AnimateOnScroll animation="fade-in">
            <Link
              href="/blog"
              className="inline-flex items-center text-black/60 hover:text-black transition-colors mb-8"
            >
              <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Blog
            </Link>
          </AnimateOnScroll>

          {/* Header */}
          <header className="mb-12">
            <AnimateOnScroll animation="fade-up">
              <span className="inline-block bg-[var(--accent)] text-black/80 px-4 py-1 rounded-full text-sm font-medium mb-4">
                {post.category}
              </span>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fade-up" delay={100}>
              <h1 className="font-serif text-4xl md:text-5xl text-black/90 mb-6 leading-tight">
                {post.title}
              </h1>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fade-up" delay={200}>
              <div className="flex items-center gap-4 text-black/60">
                <span>{post.author}</span>
                <span>•</span>
                <time dateTime={post.date}>
                  {new Date(post.date).toLocaleDateString('en-US', {
                    month: 'long',
                    day: 'numeric',
                    year: 'numeric',
                  })}
                </time>
                <span>•</span>
                <span>{post.readingTime}</span>
              </div>
            </AnimateOnScroll>
          </header>

          {/* Featured Image */}
          {post.image && post.image !== '/images/gnp_icon.png' && (
            <AnimateOnScroll animation="fade-up" delay={300}>
              <div className="relative w-full h-64 md:h-96 mb-12 rounded-lg overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </AnimateOnScroll>
          )}

          {/* Content */}
          <AnimateOnScroll animation="fade-up" delay={400}>
            <div className="prose max-w-none">
              <MDXRemote source={post.content} components={MDXComponents} />
            </div>
          </AnimateOnScroll>

          {/* Footer CTA */}
          <AnimateOnScroll animation="fade-up" delay={500}>
            <div className="mt-16 p-8 bg-[#F5E6D7] rounded-lg text-center">
              <h3 className="font-serif text-2xl text-black/90 mb-4">
                Ready to Start Your Wellness Journey?
              </h3>
              <p className="text-black/70 mb-6">
                Book a free 15-minute consultation to see how we can support you.
              </p>
              <Link
                href="/contact"
                className="inline-block px-8 py-4 bg-black/60 text-white text-lg tracking-wider hover:bg-black/90 transition-colors font-light"
              >
                Book Your Consultation
              </Link>
            </div>
          </AnimateOnScroll>
        </div>
      </article>

      <Footer />
    </main>
  );
}
