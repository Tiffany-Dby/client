import { AppRoutes } from "@/shared/types/Routes";

const ROUTES = {
  home: {
    title: "Aperçu",
    path: AppRoutes.home,
  },
  pending: {
    title: "Refusé",
    path: AppRoutes.emailRemove,
  },
  logs: {
    title: "Historique",
    path: AppRoutes.dashboardLogs,
  },
  settings: {
    title: "Paramètres",
    path: AppRoutes.settings,
  },
};

export { ROUTES };
