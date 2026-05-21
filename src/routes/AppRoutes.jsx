import { Routes, Route } from "react-router-dom";
import AppLayout from "../layout/AppLayout";

import Landing from "../pages/Landing";
import Dashboard from "../pages/Dashboard";
import Jobs from "../pages/Jobs";
import Analytics from "../pages/Analytics";
import Settings from "../pages/Settings";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />

      <Route path="/" element={<AppLayout />}>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="jobs" element={<Jobs />} />
        <Route path="analytics" element={<Analytics />} />
        <Route path="settings" element={<Settings />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
