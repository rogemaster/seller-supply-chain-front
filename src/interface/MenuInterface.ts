export interface IMenu {
  key: string;
  name: string;
  href: string;
  show?: boolean;
}

export interface ISubMenu {
  [key: string]: IMenu[];
}