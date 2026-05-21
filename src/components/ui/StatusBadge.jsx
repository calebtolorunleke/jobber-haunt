const statusStyles = {
  Applied: "bg-blue-100 text-blue-600 border-blue-200",
  Interview: "bg-yellow-100 text-yellow-700 border-yellow-200",
  Offer: "bg-green-100 text-green-700 border-green-200",
  Rejected: "bg-red-100 text-red-600 border-red-200",
};

const StatusBadge = ({ status }) => {
  return (
    <span
      className={`
        text-xs font-medium px-3 py-1 rounded-full border
        ${statusStyles[status] || "bg-gray-100 text-gray-600 border-gray-200"}
      `}
    >
      {status}
    </span>
  );
};

export default StatusBadge;