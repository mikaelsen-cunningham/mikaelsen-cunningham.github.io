import Link from "next/link";
import { NavItem } from "@/interfaces/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFolder,
  faFile,
  faFolderOpen,
  faFileLines,
} from "@fortawesome/free-solid-svg-icons";
import cn from "classnames";
import Avatar from "@/app/_components/avatar";

export const HomepageNavigation = ({ routes }: { routes: NavItem[] }) => {
  return (
    <nav>
      <ul className="grid gap-6 grid-cols-[repeat(auto-fit,8rem)] grid-rows-[repeat(auto-fit,minmax(9rem,1fr))]">
        {routes.map((route) => (
          <li key={route.href}>
            <Link
              href={route.href}
              className={cn(
                route.hasChildren ? "dir" : "file",
                "flex flex-col gap-1 justify-start items-center text-center h-min rounded-md outline-offset-4 outline-none focus-visible:outline-slate-300 group ",
              )}
            >
              <div className="mt-0.5 py-1.5 px-2 h-24 flex rounded-md group-focus-visible:bg-opacity-60 group-focus-visible:bg-gray-300 group-active:bg-gray-300 group-active:bg-opacity-60">
                <FontAwesomeIcon
                  icon={route.hasChildren ? faFolder : faFile}
                  className="group-hover:hidden group-focus-visible:hidden group-active:hidden"
                />
                <FontAwesomeIcon
                  icon={route.hasChildren ? faFolderOpen : faFileLines}
                  className="hidden group-hover:inline-block group-focus-visible:inline-block group-active:inline-block"
                />
              </div>
              <p className="py-0.5 px-2 rounded-md group-focus-visible:bg-opacity-60 group-focus-visible:bg-gray-300 group-active:bg-opacity-60 group-active:bg-gray-300">
                {route.label}
              </p>
            </Link>
          </li>
        ))}
      </ul>
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
