import { AppRoutes } from "@/shared/types/Routes";

const ROUTES = {
  home: {
    title: "Aperçu",
    path: AppRoutes.home,
  },
  bocked: {
    title: "Refusé",
    path: AppRoutes.emailRemove,
  },
  pending: {
    title: "En Attente",
    path: AppRoutes.dashboardPending,
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
