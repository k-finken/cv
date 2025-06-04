import fs from 'fs';
import path from 'path';

export interface Post {
  slug: string;
  title: string;
  date: string;
  content: string;
}

const POSTS_PATH = path.join(process.cwd(), 'src', 'posts');

export function getPostSlugs(): string[] {
  if (!fs.existsSync(POSTS_PATH)) return [];
  return fs
    .readdirSync(POSTS_PATH)
    .filter((file) => file.endsWith('.md'))
    .map((file) => file.replace(/\.md$/, ''));
}

function parseFrontMatter(file: string) {
  const match = /^---\n([\s\S]+?)\n---\n/.exec(file);
  if (!match) return { attributes: {}, body: file };
  const [, frontMatter] = match;
  const attrs: Record<string, string> = {};
  frontMatter.split(/\n/).forEach((line) => {
    const [key, ...rest] = line.split(':');
    if (key) attrs[key.trim()] = rest.join(':').trim();
  });
  const body = file.slice(match[0].length);
  return { attributes: attrs, body };
}

export function getPost(slug: string): Post | null {
  const fullPath = path.join(POSTS_PATH, `${slug}.md`);
  if (!fs.existsSync(fullPath)) return null;
  const file = fs.readFileSync(fullPath, 'utf8');
  const { attributes, body } = parseFrontMatter(file);
  return {
    slug,
    title: attributes.title || slug,
    date: attributes.date || '',
    content: body,
  };
}

export function getAllPosts(): Post[] {
  return getPostSlugs()
    .map((slug) => getPost(slug)!)
    .filter(Boolean)
    .sort((a, b) => (a.date > b.date ? -1 : 1));
}

export function markdownToHtml(md: string): string {
  let html = md
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');

  html = html.replace(/\n{2,}/g, '</p><p>');
  html = `<p>${html}</p>`;

  html = html.replace(/^<p># (.*?)<\/p>/gm, '<h1>$1</h1>');
  html = html.replace(/^<p>## (.*?)<\/p>/gm, '<h2>$1</h2>');
  html = html.replace(/^<p>### (.*?)<\/p>/gm, '<h3>$1</h3>');
  html = html.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
  html = html.replace(/_(.*?)_/g, '<em>$1</em>');
  html = html.replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" class="text-blue-600 underline">$1</a>');
  return html;
}
