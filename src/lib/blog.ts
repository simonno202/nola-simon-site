import fs from "fs";
import path from "path";
import matter from "gray-matter";

const CONTENT_DIR = path.join(process.cwd(), "src", "content", "blog");

export interface PostMeta {
  title: string;
  displayTitle?: string;
  date: string;
  description: string;
  tags?: string[];
  keywords?: string[];
  ogImage?: string;
}

export interface Post {
  slug: string;
  title: string;
  displayTitle?: string;
  date: string;
  description: string;
  tags: string[];
  keywords: string[];
  ogImage?: string;
  content: string;
}

export function getPostSlugs(): string[] {
  if (!fs.existsSync(CONTENT_DIR)) return [];
  return fs
    .readdirSync(CONTENT_DIR)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""));
}

export function getPost(slug: string): Post {
  const filePath = path.join(CONTENT_DIR, `${slug}.mdx`);
  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);
  const frontmatter = data as PostMeta;

  return {
    slug,
    title: frontmatter.title,
    displayTitle: frontmatter.displayTitle,
    date: frontmatter.date,
    description: frontmatter.description,
    tags: frontmatter.tags ?? [],
    keywords: frontmatter.keywords ?? [],
    ogImage: frontmatter.ogImage,
    content,
  };
}

export function getAllPosts(): Post[] {
  return getPostSlugs()
    .map((slug) => getPost(slug))
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}
