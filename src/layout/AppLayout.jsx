import { Outlet } from "react-router-dom";
import Sidebar from "../components/layout/Sidebar";
import Topbar from "../components/layout/Topbar";

const AppLayout = () => {
  return (
    <div className="flex h-screen bg-gray-50">

      {/* SIDEBAR */}
      <Sidebar />

      {/* MAIN AREA */}
      <div className="flex flex-col flex-1 overflow-hidden">

        {/* TOPBAR */}
        <Topbar />

        {/* PAGE CONTENT */}
        <main className="flex-1 overflow-y-auto p-6">
          <Outlet />
        </main>

      </div>

    </div>
  );
};

export default AppLayout;