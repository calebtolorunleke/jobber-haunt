import Button from "./Button";

const statusStyles = {
  Applied: "bg-blue-100 text-blue-600",
  Interview: "bg-yellow-100 text-yellow-600",
  Offer: "bg-green-100 text-green-600",
  Rejected: "bg-red-100 text-red-600",
};

const JobCard = ({ job, onDelete }) => {
  return (
    <div className="bg-white/70 backdrop-blur-xl border border-gray-200 rounded-2xl p-5 shadow-sm hover:shadow-lg transition-all duration-300">
      {/* TOP ROW */}
      <div className="flex items-start justify-between">
        {/* LEFT INFO */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800">{job.role}</h3>

          <p className="text-sm text-gray-500 mt-1">{job.company}</p>
        </div>

        {/* STATUS BADGE */}
        <span
          className={`text-xs px-3 py-1 rounded-full font-medium ${
            statusStyles[job.status] || "bg-gray-100 text-gray-600"
          }`}
        >
          {job.status}
        </span>
      </div>

      {/* MIDDLE INFO */}
      <div className="mt-4 flex items-center justify-between text-sm text-gray-500">
        <span>📅 {job.date}</span>

        {job.location && <span>📍 {job.location}</span>}
      </div>

      {/* NOTES */}
      {job.notes && (
        <p className="mt-3 text-sm text-gray-600 bg-gray-50 p-3 rounded-xl border border-gray-100">
          {job.notes}
        </p>
      )}

      {/* ACTIONS */}
      <div className="mt-4 flex items-center justify-between">
        {/* LINK */}
        {job.link ? (
          <a
            href={job.link}
            target="_blank"
            className="text-sm text-indigo-500 hover:underline"
          >
            View Job →
          </a>
        ) : (
          <span className="text-sm text-gray-400">No link provided</span>
        )}

        {/* DELETE */}
        <Button variant="danger" onClick={() => onDelete(job.id)}>
          Delete
        </Button>
      </div>
    </div>
  );
};

export default JobCard;
