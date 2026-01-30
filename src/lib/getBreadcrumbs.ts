import type { NavItem, NavConfig } from "../interfaces/navigation.js";

const staticConfig: NavConfig = {
  experience: {
    label: "Experience",
    href: "/experience",
    hasChildren: false,
  },
  siteRoadmap: {
    label: "Site Roadmap",
    href: "/site-roadmap",
    hasChildren: false,
  },
  projects: {
    label: "Projects",
    href: "/projects",
    hasChildren: true,
  },
};

export const getBreadcrumbs = (pathSegments: string[]): NavItem[] => {
  const breadcrumbs: NavItem[] = [];

  let currentPath = "";
  for (const [index, segment] of pathSegments.entries()) {
    const isLast = index === pathSegments.length - 1;

    currentPath += `/${segment}`;
    if (staticConfig[segment]) {
      breadcrumbs.push(staticConfig[segment]);
    } else {
      breadcrumbs.push({
        label: transformSegmentToLabel(segment),
        href: currentPath,
        hasChildren: !isLast,
      });
    }
  }

  return breadcrumbs;
};

const transformSegmentToLabel = (segment: string): string => {
  return segment
    .replace(/[-_]/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());
};
