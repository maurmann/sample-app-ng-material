import { MenuItem } from "./menu-item";

export class MenuCategory {
  icon: string | undefined;
  name: string | undefined;
  items: MenuItem[] = [];
}
