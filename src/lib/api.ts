import { Page } from "@/interfaces/page";
import fs from "fs";
import matter from "gray-matter";
import { join } from "path";

const contentDirectory = join(process.cwd(), "_site-content");
const projectsDirectory = join(contentDirectory, "projects");

export const getContentBySlug = (
  slug: string,
  dir: string = contentDirectory,
) => {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(dir, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return { ...data, slug: realSlug, content } as Page;
};

export const getProjectSlugs = () => {
  return fs.readdirSync(projectsDirectory);
};

export const getProjectBySlug = (slug: string) => {
  return getContentBySlug(slug, projectsDirectory);
};

export const getAllProjects = (): Page[] => {
  const slugs = getProjectSlugs();
  const projects = slugs
    .map((slug) => getProjectBySlug(slug))
    // sort projects by date in descending order
    .sort((project1, project2) => (project1.date > project2.date ? -1 : 1));
  return projects;
};
