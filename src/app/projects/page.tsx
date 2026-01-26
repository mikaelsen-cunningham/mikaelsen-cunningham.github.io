import Container from "@/app/_components/container";
import PageLayout from "@/app/_components/page-layout";

const ProjectList = () => {
  return (
    <PageLayout segments={["projects"]}>
      <Container>
        <h1>Projects</h1>
        <p>Welcome to the projects page. Here are some of my projects:</p>
        <ul className="list-disc list-inside">
          <li>Project Alpha</li>
          <li>Project Beta</li>
          <li>Project Gamma</li>
        </ul>
      </Container>
    </PageLayout>
  );
};

export default ProjectList;
