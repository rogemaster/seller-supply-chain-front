export interface IHeaderMenu {
  key: string;
  name: string;
  href: string;
  show?: boolean;
}

export interface IHeaderMainSubMenu {
  [key: string]: IHeaderMenu[];
}