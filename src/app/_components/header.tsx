import Container from "@/app/_components/container";
import Avatar from "@/app/_components/avatar";
import { HomepageNavigation, Navigation } from "@/app/_components/navigation";
import { getBreadcrumbs } from "@/lib/getBreadcrumbs";

const routes = [
  { href: "/projects", label: "Projects", hasChildren: true },
  { href: "/about", label: "About", hasChildren: false },
];

const Header = ({ pathSegments }: { pathSegments: string[] }) => {
  console.log(getBreadcrumbs(pathSegments));
  const breadcrumbs = getBreadcrumbs(pathSegments);
  console.log("Header pathSegments:", { pathSegments });
  const isHomepage = pathSegments.length === 0;
  return (
    <header className="mb-8 w-full">
      <Container>
        {isHomepage ? (
          <>
            <div className="flex py-4 items-center mb-4">
              <Avatar
                name="Mikaelsen-cunningham"
                pictureAlt="Avatar picture of Robyn Mikaelsen-cunningham"
                picture="/avatar.png"
              />
            </div>
            <HomepageNavigation routes={routes} />
          </>
        ) : (
          <Navigation routeBreadcrumbs={breadcrumbs} />
        )}
      </Container>
    </header>
  );
};

export default Header;
