export interface IHeaderMenu {
  key: string;
  name: string;
  href: string;
  current?: boolean;
}

export interface IHeaderMainSubMenu {
  [key: string]: IHeaderMenu[];
}