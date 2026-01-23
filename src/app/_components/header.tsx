import Link from "next/link";
import Container from "./container";
import cn from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFolder,
  faFile,
  faFolderOpen,
  faFileLines,
} from "@fortawesome/free-solid-svg-icons";
import Avatar from "./avatar";

const routes = [
  { href: "/projects", label: "Projects", isDir: true },
  { href: "/about", label: "About", isDir: false },
];

const Header = () => {
  return (
    <header className="mb-8 w-full">
      <Container>
        <div className="flex px-4 py-4 items-center mb-4">
          <Avatar
            name="Avatar picture of Robyn Mikaelsen-cunningham"
            picture="/avatar.png"
          />
          <h1 className="font-bold">Mikaelsen-Cunningham</h1>
        </div>
        <nav>
          <ul className="grid gap-6 grid-cols-[repeat(auto-fit,8rem)] grid-rows-[repeat(auto-fit,minmax(9rem,1fr))]">
            {routes.map((route) => (
              <li key={route.href}>
                <Link
                  href={route.href}
                  className={cn(
                    route.isDir ? "dir" : "file",
                    "flex flex-col gap-1 justify-start items-center text-center h-min rounded-md outline-offset-4 outline-none focus-visible:outline-slate-300 group ",
                  )}
                >
                  <div className="mt-0.5 py-1.5 px-2 h-24 flex rounded-md group-focus-visible:bg-opacity-60 group-focus-visible:bg-gray-300 ">
                    <FontAwesomeIcon
                      icon={route.isDir ? faFolder : faFile}
                      className="group-hover:hidden group-focus-visible:hidden"
                    />
                    <FontAwesomeIcon
                      icon={route.isDir ? faFolderOpen : faFileLines}
                      className="hidden group-hover:inline-block group-focus-visible:inline-block"
                    />
                  </div>
                  <p className="py-0.5 px-2 rounded-md group-focus-visible:bg-opacity-60 group-focus-visible:bg-gray-300 ">
                    {route.label}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
    </header>
  );
};

export default Header;
