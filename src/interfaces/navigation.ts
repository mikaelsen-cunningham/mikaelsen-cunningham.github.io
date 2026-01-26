export type NavItem = {
  label: string;
  href: string;
  hasChildren?: boolean;
};

export type NavConfig = {
  [key: string]: NavItem;
};
