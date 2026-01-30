import Container from "@/app/_components/container";
import Avatar from "@/app/_components/avatar";
import { HomepageNavigation, Navigation } from "@/app/_components/navigation";
import { getBreadcrumbs } from "@/lib/getBreadcrumbs";

const routes = [
  { href: "/projects", label: "Projects", hasChildren: true },
  { href: "/experience", label: "Experience", hasChildren: false },
  { href: "/site-roadmap", label: "Site Roadmap", hasChildren: false },
];

const Header = ({ pathSegments }: { pathSegments: string[] }) => {
  const breadcrumbs = getBreadcrumbs(pathSegments);
  const isHomepage = pathSegments.length === 0;
  return (
    <header>
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
