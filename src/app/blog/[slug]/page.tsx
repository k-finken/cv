import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { getPost, getPostSlugs, markdownToHtml } from '@/lib/blog';

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return getPostSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const post = getPost(params.slug);
  return {
    title: post?.title || 'Post',
    description: post?.title,
  };
}

export default function PostPage({ params }: Props) {
  const post = getPost(params.slug);
  if (!post) return notFound();
  return (
    <main className="container mx-auto max-w-3xl p-4">
      <h1 className="mb-4 text-4xl font-bold">{post.title}</h1>
      <article
        className="space-y-4 text-gray-800"
        dangerouslySetInnerHTML={{ __html: markdownToHtml(post.content) }}
      />
    </main>
  );
}
