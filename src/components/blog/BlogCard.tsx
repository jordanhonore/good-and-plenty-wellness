import Image from 'next/image';
import Link from 'next/link';
import type { BlogPostMeta } from '@/lib/blog';

interface BlogCardProps {
  post: BlogPostMeta;
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <Link href={`/blog/${post.slug}`} className="group block">
      <article className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
        <div className="relative h-48 w-full overflow-hidden">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute top-4 left-4">
            <span className="bg-[var(--accent)] text-black/80 px-3 py-1 rounded-full text-sm font-medium">
              {post.category}
            </span>
          </div>
        </div>

        <div className="p-6 space-y-3">
          <div className="flex items-center gap-3 text-sm text-black/60">
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

          <h2 className="font-serif text-2xl text-black/90 group-hover:text-[var(--primary)] transition-colors">
            {post.title}
          </h2>

          <p className="text-black/70 line-clamp-2">
            {post.excerpt}
          </p>

          <div className="pt-2">
            <span className="text-[var(--primary)] font-medium group-hover:underline">
              Read More →
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}
