import { AppRoutes } from "./Routes";

type MenuItemBase = {
  title: string;
  url?: AppRoutes;
  icon?: React.ElementType;
};

type MenuSubItem = MenuItemBase & {
  url: AppRoutes;
};

type MenuItem = MenuItemBase & { subItems?: MenuSubItem[] };

export type { MenuItem };
