import Container from "@/app/_components/container";
import PageLayout from "@/app/_components/page-layout";
import { getAllProjects } from "@/lib/getPageDetail";
import IconLinkList from "@/app/_components/icon-link-list";
import { NavItem } from "@/interfaces/navigation";

const ProjectList = () => {
  const projectPageNavItems: NavItem[] = getAllProjects().map((project) => ({
    href: `/projects/${project.slug}`,
    label: project.title,
    hasChildren: false,
  }));

  return (
    <PageLayout segments={["projects"]}>
      <Container>
        <IconLinkList linkList={projectPageNavItems} />
      </Container>
    </PageLayout>
  );
};

export default ProjectList;
