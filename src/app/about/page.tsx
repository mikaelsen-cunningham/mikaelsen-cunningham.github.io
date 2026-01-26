import Container from "@/app/_components/container";
import PageLayout from "@/app/_components/page-layout";

const About = () => {
  return (
    <PageLayout segments={["about"]}>
      <Container>
        <h2 className="text-2xl font-bold mb-4">About Me</h2>
        <p className="mb-2">
          Hello! I'm Robin Cunningham, a passionate software developer with a
          love for creating innovative solutions. With a background in computer
          science, I enjoy tackling complex problems and turning ideas into
          reality through code.{" "}
        </p>
      </Container>
    </PageLayout>
  );
};

export default About;
