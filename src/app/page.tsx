import Container from "@/app/_components/container";
import PageLayout from "@/app/_components/page-layout";
import { getContentBySlug } from "@/lib/getPageDetail";
import markdownToHtml from "@/lib/markdownToHtml";

const Index = async () => {
  const readMeContent = getContentBySlug("README", process.cwd());
  const content = await markdownToHtml(readMeContent?.content || "");
  return (
    <PageLayout segments={[]}>
      <Container>
        <div className="prose max-w-full mt-8">
          <div dangerouslySetInnerHTML={{ __html: content }} />
        </div>
      </Container>
    </PageLayout>
  );
};

export default Index;
