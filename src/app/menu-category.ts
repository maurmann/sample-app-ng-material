import { MenuItem } from "./menu-item";

export class MenuCategory {
  icon: string;
  name: string;
  items: MenuItem[] = [];

  constructor(icon:string,name:string) {
    this.icon = icon;
    this.name = name;
  }

  attachItems(items: MenuItem[]) {
    this.items = items;
  }
}
