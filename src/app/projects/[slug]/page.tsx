import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllProjects, getProjectBySlug } from "@/lib/getPageDetail";
import markdownToHtml from "@/lib/markdownToHtml";

import Container from "@/app/_components/container";
import PageLayout from "@/app/_components/page-layout";

export const generateMetadata = async (props: Params): Promise<Metadata> => {
  const params = await props.params;
  const project = getProjectBySlug(params.slug);

  if (!project) {
    return notFound();
  }

  const title = project.title;

  return {
    title,
    openGraph: {
      title,
    },
  };
};

export const generateStaticParams = async () => {
  const projects = getAllProjects();
  return projects.map((project) => {
    return {
      slug: project.slug,
    };
  });
};

const Project = async ({ params }: Params) => {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return notFound();
  }
  const content = await markdownToHtml(project.content || "");

  return (
    <PageLayout segments={["projects", project.slug]}>
      <Container>
        <article>
          <div
            className="prose max-w-full"
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </article>
      </Container>
    </PageLayout>
  );
};

type Params = {
  params: Promise<{
    slug: string;
  }>;
};

export default Project;
