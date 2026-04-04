import fs from "fs";
import path from "path";
import matter from "gray-matter";

const CONTENT_DIR = path.join(process.cwd(), "src", "content", "newsletter");

export interface IssueMeta {
  title: string;
  date: string;
  issue: number;
  description: string;
}

export interface Issue {
  slug: string;
  title: string;
  date: string;
  issue: number;
  description: string;
  content: string;
}

export function getIssueSlugs(): string[] {
  if (!fs.existsSync(CONTENT_DIR)) return [];
  return fs
    .readdirSync(CONTENT_DIR)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""));
}

export function getIssue(slug: string): Issue {
  const filePath = path.join(CONTENT_DIR, `${slug}.mdx`);
  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);
  const frontmatter = data as IssueMeta;

  return {
    slug,
    title: frontmatter.title,
    date: frontmatter.date,
    issue: frontmatter.issue,
    description: frontmatter.description,
    content,
  };
}

export function getAllIssues(): Issue[] {
  return getIssueSlugs()
    .map((slug) => getIssue(slug))
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}
