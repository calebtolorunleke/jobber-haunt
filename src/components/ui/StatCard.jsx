const StatCard = ({ title, value, icon, trend, color = "indigo" }) => {
  const colorStyles = {
    indigo: "bg-indigo-50 text-indigo-600 border-indigo-100",
    green: "bg-green-50 text-green-600 border-green-100",
    yellow: "bg-yellow-50 text-yellow-600 border-yellow-100",
    red: "bg-red-50 text-red-600 border-red-100",
    gray: "bg-gray-50 text-gray-600 border-gray-100",
  };

  return (
    <div className="bg-white/70 backdrop-blur-xl border border-gray-200 rounded-2xl p-5 shadow-sm hover:shadow-md transition-all duration-300">

      {/* TOP ROW */}
      <div className="flex items-center justify-between">

        {/* TITLE */}
        <p className="text-sm text-gray-500 font-medium">
          {title}
        </p>

        {/* ICON */}
        <div
          className={`w-10 h-10 rounded-2xl flex items-center justify-center border ${
            colorStyles[color]
          }`}
        >
          <span className="text-lg">{icon}</span>
        </div>

      </div>

      {/* VALUE */}
      <div className="mt-4">
        <h3 className="text-2xl font-bold text-gray-800">
          {value}
        </h3>

        {/* TREND (OPTIONAL) */}
        {trend && (
          <p className="text-xs text-gray-500 mt-1">
            {trend}
          </p>
        )}
      </div>

    </div>
  );
};

export default StatCard;