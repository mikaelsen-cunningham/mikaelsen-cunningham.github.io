import Link from "next/link";
import { NavItem } from "@/interfaces/navigation";
import Avatar from "@/app/_components/avatar";
import IconLinkList from "@/app/_components/icon-link-list";

export const HomepageNavigation = ({ routes }: { routes: NavItem[] }) => {
  return (
    <nav>
      <IconLinkList linkList={routes} />
    </nav>
  );
};

export const Navigation = ({
  routeBreadcrumbs,
}: {
  routeBreadcrumbs: NavItem[];
}) => {
  return (
    <nav className="flex py-4 items-center mb-4">
      <ul className="flex gap-4 flex-wrap">
        <li className="flex items-center">
          <Link href="/" className="hover:underline">
            <Avatar
              name="Mika-ha"
              pictureAlt="Avatar picture of Robyn Mikaelsen-cunningham"
              picture="/avatar.png"
            />
          </Link>
          <span className="ml-4">{">"}</span>
        </li>
        {routeBreadcrumbs.map((route, index) => {
          const isLastCrumb = index === routeBreadcrumbs.length - 1;
          return (
            <li key={route.href} className="flex items-center">
              <Breadcrumb route={route} isLastItem={isLastCrumb} />
              {!isLastCrumb && <span className="ml-4">{">"}</span>}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

const Breadcrumb = ({
  route,
  isLastItem,
}: {
  route: { href: string; label: string };
  isLastItem: boolean;
}) => {
  return isLastItem ? (
    <span className="text-lg cursor-default">{route.label}</span>
  ) : (
    <Link
      href={route.href}
      className={`text-lg underline-offset-4 hover:underline ${isLastItem ? "text-gray-500" : ""}`}
    >
      {route.label}
    </Link>
  );
};
