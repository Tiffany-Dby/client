import { Route, Routes, useLocation } from "react-router";
import "./App.css";
import BaseLayout from "@/shared/ui/components/BaseLayout";
import { AppRoutes } from "@/shared/types/Routes";
import SettingsView from "@/settings/views/SettingsView";
import { ROUTES } from "@/shared/constants/routes";

const App = () => {
  const location = useLocation();

  const currentRoute = Object.values(ROUTES).find(
    (route) => route.path === location.pathname
  );
  const title = currentRoute ? currentRoute.title : "404";

  return (
    <BaseLayout title={title}>
      <Routes>
        <Route path={AppRoutes.settings} element={<SettingsView />} />
      </Routes>
    </BaseLayout>
  );
};

export default App;
