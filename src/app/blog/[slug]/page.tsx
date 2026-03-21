import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { blogPosts } from '@/data/blog-posts';
import { Calendar, Clock, User, ArrowLeft } from 'lucide-react';

type Params = Promise<{ slug: string }>;

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return { title: 'Post Not Found' };
  return { title: post.title, description: post.excerpt };
}

export default async function BlogPostPage({ params }: { params: Params }) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <>
      <section className="hero-gradient py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link href="/blog" className="inline-flex items-center gap-1 text-gray-400 hover:text-white text-sm mb-4 transition-colors">
            <ArrowLeft className="h-4 w-4" /> Back to Blog
          </Link>
          <span className="inline-block text-xs font-semibold text-construction-yellow bg-construction-yellow/10 px-3 py-1 rounded-full mb-4 capitalize">
            {post.category.replace('-', ' ')}
          </span>
          <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">{post.title}</h1>
          <div className="flex items-center gap-4 text-sm text-gray-300">
            <span className="flex items-center gap-1"><User className="h-4 w-4" /> {post.author}</span>
            <span className="flex items-center gap-1"><Calendar className="h-4 w-4" /> {new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
            <span className="flex items-center gap-1"><Clock className="h-4 w-4" /> {post.readTime}</span>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-concrete-gray text-lg leading-relaxed mb-6">{post.excerpt}</p>
            <p className="text-concrete-gray leading-relaxed mb-6">
              This is a placeholder for the full article content. In production, this would be loaded from a CMS or MDX file with rich content including images, code blocks, and formatted text.
            </p>
            <p className="text-concrete-gray leading-relaxed mb-6">
              Kaporta Group is committed to sharing knowledge and insights about the construction industry in Sierra Leone and West Africa. Stay tuned for more articles from our team of experts.
            </p>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <Link href="/blog" className="inline-flex items-center gap-2 text-deep-blue font-heading font-semibold hover:text-construction-yellow-dark transition-colors">
              <ArrowLeft className="h-5 w-5" /> Back to All Posts
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
