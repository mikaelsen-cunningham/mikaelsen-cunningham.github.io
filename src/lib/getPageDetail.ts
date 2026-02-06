import fs from "fs";
import matter from "gray-matter";
import { join } from "path";
import { PageDetail } from "@/interfaces/pageDetail";

const contentDirectory = join(process.cwd(), "_site-content");
const projectsDirectory = join(contentDirectory, "projects");

export const getContentBySlug = (
  slug: string,
  dir: string = contentDirectory,
): PageDetail => {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(dir, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return { ...data, slug: realSlug, content } as PageDetail;
};

export const getProjectBySlug = (slug: string): PageDetail => {
  return getContentBySlug(slug, projectsDirectory);
};

export const getAllProjects = (): PageDetail[] => {
  const slugs = fs.readdirSync(projectsDirectory);
  const projects = slugs
    .map((slug) => getProjectBySlug(slug))
    .sort((project1, project2) => project1.title.localeCompare(project2.title));
  return projects;
};
