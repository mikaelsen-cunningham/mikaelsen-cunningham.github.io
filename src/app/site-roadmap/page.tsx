import markdownToHtml from "@/lib/markdownToHtml";
import Container from "@/app/_components/container";
import PageLayout from "@/app/_components/page-layout";
import { getContentBySlug } from "@/lib/getPageDetail";

const SiteRoadmap = async () => {
  const todoPageContent = getContentBySlug("TODO", process.cwd());
  const content = await markdownToHtml(todoPageContent?.content || "");
  return (
    <PageLayout segments={["site-roadmap"]}>
      <Container>
        <div className="prose max-w-full">
          <div dangerouslySetInnerHTML={{ __html: content }} />
        </div>
      </Container>
    </PageLayout>
  );
};

export default SiteRoadmap;
