import Link from "next/link";
import Container from "./container";
import cn from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolder, faFile } from "@fortawesome/free-solid-svg-icons";

const routes = [
  { href: "/projects", label: "Projects", isDir: true },
  { href: "/about", label: "About", isDir: false },
];

const Header = () => {
  return (
    <header className="mb-8 w-full">
      <Container>
        <h1 className="px-4 py-4 font-bold">Mikaelsen-Cunningham</h1>
        <nav>
          <ul className="grid gap-6 grid-cols-[repeat(auto-fit,8rem)] grid-rows-[repeat(auto-fit,minmax(9rem,1fr))]">
            {routes.map((route) => (
              <li key={route.href}>
                <Link
                  href={route.href}
                  className={cn(
                    route.isDir ? "dir" : "file",
                    "flex flex-col justify-start items-center text-center h-full",
                  )}
                >
                  <div className="p-4 h-32 flex">
                    <FontAwesomeIcon icon={route.isDir ? faFolder : faFile} />
                  </div>
                  <p className="p-0.5">{route.label}</p>
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
