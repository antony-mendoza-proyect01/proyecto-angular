export interface Inavigation {
  id: number;
  title: string;
  link: string;
  activeMenu: boolean;
  faIcon: string;
  menu: Array<IMenuMetadata>;
}
export interface IMenuMetadata {
  id: number;
  title: string;
  link: string;
  activeSubMenu: boolean;
  subMenu?: Array<ISubMenuMetadata>;
}
export interface ISubMenuMetadata {
  id: string;
  title: string;
  link: string;
}
