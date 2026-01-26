import Header from "@/app/_components/header";
import Footer from "@/app/_components/footer";

type PageLayoutProps = {
  segments: string[];
  children: React.ReactNode;
};

const PageLayout = async ({ children, segments }: PageLayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header pathSegments={segments} />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </div>
  );
};
export default PageLayout;
