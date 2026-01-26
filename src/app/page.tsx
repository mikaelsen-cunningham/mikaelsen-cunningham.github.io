import Container from "@/app/_components/container";
import PageLayout from "@/app/_components/page-layout";
import { Intro } from "@/app/_components/intro";

const Index = () => {
  return (
    <PageLayout segments={[]}>
      <Container>
        <Intro />
      </Container>
    </PageLayout>
  );
};

export default Index;
