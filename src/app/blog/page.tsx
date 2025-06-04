import Link from 'next/link';
import { Metadata } from 'next';
import { getAllPosts } from '@/lib/blog';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Personal blog posts',
};

export default function BlogPage() {
  const posts = getAllPosts();
  return (
    <main className="container mx-auto max-w-3xl p-4 space-y-4">
      <h1 className="text-4xl font-bold mb-4">Blog</h1>
      <ul className="space-y-2">
        {posts.map((post) => (
          <li key={post.slug}>
            <Link className="text-blue-600 hover:underline" href={`/blog/${post.slug}`}>{post.title}</Link>
            <span className="ml-2 text-sm text-gray-500">{post.date}</span>
          </li>
        ))}
      </ul>
    </main>
  );
}
