import Image from 'next/image';
import Link from 'next/link';
import type { MDXComponents } from 'mdx/types';

const components: MDXComponents = {
  h1: ({ children }) => (
    <h1 className="font-serif text-4xl md:text-5xl font-light text-black/90 mb-6">
      {children}
    </h1>
  ),
  h2: ({ children }) => (
    <h2 className="font-serif text-3xl font-light text-black/90 mt-12 mb-4">
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3 className="font-serif text-2xl font-light text-black/90 mt-8 mb-3">
      {children}
    </h3>
  ),
  p: ({ children }) => (
    <p className="mb-6 text-lg text-black/80 leading-relaxed">
      {children}
    </p>
  ),
  ul: ({ children }) => (
    <ul className="mb-6 pl-6 list-disc space-y-2 text-black/80">
      {children}
    </ul>
  ),
  ol: ({ children }) => (
    <ol className="mb-6 pl-6 list-decimal space-y-2 text-black/80">
      {children}
    </ol>
  ),
  li: ({ children }) => (
    <li className="text-lg">
      {children}
    </li>
  ),
  blockquote: ({ children }) => (
    <blockquote className="border-l-4 border-[var(--accent)] pl-6 italic my-8 text-black/70 text-lg">
      {children}
    </blockquote>
  ),
  a: ({ href, children }) => {
    const isExternal = href?.startsWith('http');
    if (isExternal) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[var(--primary)] underline hover:text-black/90 transition-colors"
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href || '#'} className="text-[var(--primary)] underline hover:text-black/90 transition-colors">
        {children}
      </Link>
    );
  },
  img: ({ src, alt }) => (
    <div className="relative w-full h-64 md:h-96 my-8">
      <Image
        src={src || ''}
        alt={alt || ''}
        fill
        className="object-cover rounded-lg"
      />
    </div>
  ),
  strong: ({ children }) => (
    <strong className="font-semibold text-black/90">
      {children}
    </strong>
  ),
  em: ({ children }) => (
    <em className="italic">
      {children}
    </em>
  ),
  hr: () => (
    <hr className="my-8 border-t border-black/10" />
  ),
};

export default components;
