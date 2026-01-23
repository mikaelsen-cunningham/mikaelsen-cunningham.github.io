import Container from "../_components/container";

const ProjectList = () => {
  return (
    <Container>
      <h1>Projects</h1>
      <p>Welcome to the projects page. Here are some of my projects:</p>
      <ul className="list-disc list-inside">
        <li>Project Alpha</li>
        <li>Project Beta</li>
        <li>Project Gamma</li>
      </ul>
    </Container>
  );
};

export default ProjectList;
