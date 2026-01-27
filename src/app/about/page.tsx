import markdownToHtml from "@/lib/markdownToHtml";
import Container from "@/app/_components/container";
import PageLayout from "@/app/_components/page-layout";
import { getContentBySlug } from "@/lib/api";

const About = async () => {
  const aboutPageContent = getContentBySlug("about");
  const content = await markdownToHtml(aboutPageContent?.content || "");
  return (
    <PageLayout segments={["about"]}>
      <Container>
        <div className="prose">
          <h2 className="text-2xl font-bold mb-4">About Me Page</h2>
          <div dangerouslySetInnerHTML={{ __html: content }} />
        </div>
      </Container>
    </PageLayout>
  );
};

export default About;
