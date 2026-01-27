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

const IconLinkList = ({ linkList }: { linkList: NavItem[] }) => {
  return (
    <ul className="grid gap-6 grid-cols-[repeat(auto-fit,8rem)] grid-rows-[repeat(auto-fit,minmax(9rem,1fr))]">
      {linkList.map((link) => (
        <li key={link.href}>
          <Link
            href={link.href}
            className={cn(
              link.hasChildren ? "dir" : "file",
              "flex flex-col gap-1 justify-start items-center text-center h-min rounded-md outline-offset-4 outline-none focus-visible:outline-slate-300 group ",
            )}
          >
            <div className="mt-0.5 py-1.5 px-2 h-24 flex rounded-md group-focus-visible:bg-opacity-60 group-focus-visible:bg-gray-300 group-active:bg-gray-300 group-active:bg-opacity-60">
              <FontAwesomeIcon
                icon={link.hasChildren ? faFolder : faFile}
                className="group-hover:hidden group-focus-visible:hidden group-active:hidden"
              />
              <FontAwesomeIcon
                icon={link.hasChildren ? faFolderOpen : faFileLines}
                className="hidden group-hover:inline-block group-focus-visible:inline-block group-active:inline-block"
              />
            </div>
            <p className="py-0.5 px-2 rounded-md group-focus-visible:bg-opacity-60 group-focus-visible:bg-gray-300 group-active:bg-opacity-60 group-active:bg-gray-300">
              {link.label}
            </p>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default IconLinkList;
