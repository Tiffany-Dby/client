import { Route, Routes, useLocation } from "react-router";
import "./App.css";
import BaseLayout from "@/shared/ui/components/BaseLayout";
import { AppRoutes } from "@/shared/types/Routes";
import SettingsView from "@/settings/views/SettingsView";
import { ROUTES } from "@/shared/constants/routes";
import LogsView from "@/dashboard/views/LogsView";
import OverviewView from "@/dashboard/views/OverviewView";

const App = () => {
  const location = useLocation();

  const currentRoute = Object.values(ROUTES).find(
    (route) => route.path === location.pathname
  );
  const title = currentRoute ? currentRoute.title : "404";

  return (
    <BaseLayout title={title}>
      <Routes>
        <Route path={AppRoutes.home} element={<OverviewView />} />
        <Route path={AppRoutes.settings} element={<SettingsView />} />
        <Route path={AppRoutes.dashboardLogs} element={<LogsView />} />
      </Routes>
    </BaseLayout>
  );
};

export default App;
