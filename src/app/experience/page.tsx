import markdownToHtml from "@/lib/markdownToHtml";
import Container from "@/app/_components/container";
import PageLayout from "@/app/_components/page-layout";
import { getContentBySlug } from "@/lib/getPageDetail";

const Experience = async () => {
  const experiencePageContent = getContentBySlug("experience");
  const content = await markdownToHtml(experiencePageContent?.content || "");
  return (
    <PageLayout segments={["experience"]}>
      <Container>
        <div className="prose max-w-full">
          <div dangerouslySetInnerHTML={{ __html: content }} />
        </div>
      </Container>
    </PageLayout>
  );
};

export default Experience;
