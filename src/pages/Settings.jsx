import { useState } from "react";

const Settings = () => {
  const [notifications, setNotifications] = useState(true);
  const [autoSave, setAutoSave] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className="space-y-8">

      {/* HEADER */}
      <div>
        <h1 className="text-2xl font-bold text-gray-800">
          Settings
        </h1>
        <p className="text-sm text-gray-500">
          Manage your preferences and application behavior
        </p>
      </div>

      {/* PROFILE CARD */}
      <div className="bg-white/70 backdrop-blur-xl border border-gray-200 rounded-2xl p-6 shadow-sm">

        <h2 className="text-lg font-semibold text-gray-800 mb-4">
          Profile
        </h2>

        <div className="flex items-center gap-4">

          <div className="w-14 h-14 rounded-2xl bg-indigo-500 text-white flex items-center justify-center text-xl font-bold shadow-md">
            J
          </div>

          <div>
            <p className="font-semibold text-gray-800">Jobber User</p>
            <p className="text-sm text-gray-500">
              jobseeker@portfolio.app
            </p>
          </div>

        </div>

      </div>

      {/* PREFERENCES */}
      <div className="bg-white/70 backdrop-blur-xl border border-gray-200 rounded-2xl p-6 shadow-sm space-y-6">

        <h2 className="text-lg font-semibold text-gray-800">
          Preferences
        </h2>

        {/* NOTIFICATIONS */}
        <div className="flex items-center justify-between">
          <div>
            <p className="font-medium text-gray-700">Notifications</p>
            <p className="text-sm text-gray-500">
              Get updates on job status changes
            </p>
          </div>

          <button
            onClick={() => setNotifications(!notifications)}
            className={`w-12 h-6 flex items-center rounded-full p-1 transition ${
              notifications ? "bg-indigo-500" : "bg-gray-300"
            }`}
          >
            <div
              className={`w-4 h-4 bg-white rounded-full shadow-md transform transition ${
                notifications ? "translate-x-6" : ""
              }`}
            />
          </button>
        </div>

        {/* AUTO SAVE */}
        <div className="flex items-center justify-between">
          <div>
            <p className="font-medium text-gray-700">Auto Save</p>
            <p className="text-sm text-gray-500">
              Automatically save job entries
            </p>
          </div>

          <button
            onClick={() => setAutoSave(!autoSave)}
            className={`w-12 h-6 flex items-center rounded-full p-1 transition ${
              autoSave ? "bg-indigo-500" : "bg-gray-300"
            }`}
          >
            <div
              className={`w-4 h-4 bg-white rounded-full shadow-md transform transition ${
                autoSave ? "translate-x-6" : ""
              }`}
            />
          </button>
        </div>

        {/* DARK MODE (UI ONLY FOR NOW) */}
        <div className="flex items-center justify-between">
          <div>
            <p className="font-medium text-gray-700">Dark Mode</p>
            <p className="text-sm text-gray-500">
              Switch theme (UI placeholder)
            </p>
          </div>

          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`w-12 h-6 flex items-center rounded-full p-1 transition ${
              darkMode ? "bg-indigo-500" : "bg-gray-300"
            }`}
          >
            <div
              className={`w-4 h-4 bg-white rounded-full shadow-md transform transition ${
                darkMode ? "translate-x-6" : ""
              }`}
            />
          </button>
        </div>

      </div>

      {/* DANGER ZONE */}
      <div className="bg-white/70 backdrop-blur-xl border border-red-100 rounded-2xl p-6 shadow-sm">

        <h2 className="text-lg font-semibold text-red-600">
          Danger Zone
        </h2>

        <p className="text-sm text-gray-500 mt-2">
          Clear all job data permanently
        </p>

        <button className="mt-4 px-4 py-2 bg-red-500 text-white rounded-2xl hover:bg-red-600 transition">
          Reset Data
        </button>

      </div>

    </div>
  );
};

export default Settings;