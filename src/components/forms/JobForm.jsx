import { useState } from "react";
import { motion } from "framer-motion";

const JobForm = ({ onAddJob }) => {
  const [formData, setFormData] = useState({
    company: "",
    role: "",
    status: "Applied",
    link: "",
    notes: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.company || !formData.role) return;

    onAddJob({
      ...formData,
      id: crypto.randomUUID(),
      date: new Date().toISOString().split("T")[0],
    });

    setFormData({
      company: "",
      role: "",
      status: "Applied",
      link: "",
      notes: "",
    });
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      onSubmit={handleSubmit}
      className="bg-white/70 backdrop-blur-xl border border-gray-200 rounded-3xl p-6 md:p-8 shadow-sm space-y-6"
    >
      {/* HEADER */}
      <div>
        <h2 className="text-xl font-semibold text-gray-900">
          Add a new application
        </h2>

        <p className="text-sm text-gray-500 mt-1">
          Capture a job and track it through your pipeline
        </p>
      </div>

      {/* GRID INPUTS */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

        {/* COMPANY */}
        <input
          type="text"
          name="company"
          placeholder="Company name"
          value={formData.company}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white/60
          focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
        />

        {/* ROLE */}
        <input
          type="text"
          name="role"
          placeholder="Role title (e.g. Frontend Engineer)"
          value={formData.role}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white/60
          focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
        />

        {/* STATUS */}
        <select
          name="status"
          value={formData.status}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white/60
          focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
        >
          <option>Applied</option>
          <option>Interview</option>
          <option>Offer</option>
          <option>Rejected</option>
        </select>

        {/* LINK */}
        <input
          type="text"
          name="link"
          placeholder="Job URL (optional)"
          value={formData.link}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white/60
          focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
        />
      </div>

      {/* NOTES */}
      <textarea
        name="notes"
        placeholder="Add notes about this role..."
        value={formData.notes}
        onChange={handleChange}
        rows="4"
        className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white/60
        focus:outline-none focus:ring-2 focus:ring-indigo-400 transition resize-none"
      />

      {/* ACTION BAR */}
      <div className="flex items-center justify-between pt-2">

        <p className="text-xs text-gray-400">
          Tip: Keep notes short and actionable
        </p>

        <button
          type="submit"
          className="px-5 py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600
          text-white font-medium shadow-md hover:scale-[1.02] transition"
        >
          + Add Application
        </button>

      </div>
    </motion.form>
  );
};

export default JobForm;