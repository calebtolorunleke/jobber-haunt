import { useState } from "react";

const JobForm = ({ onAddJob }) => {
  const [formData, setFormData] = useState({
    company: "",
    role: "",
    status: "Applied",
    link: "",
    notes: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
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
    <form
      onSubmit={handleSubmit}
      className="bg-white/70 backdrop-blur-xl border border-gray-200 rounded-2xl p-6 shadow-sm space-y-4"
    >
      {/* HEADER */}
      <div>
        <h2 className="text-xl font-semibold text-gray-800">
          Add New Job
        </h2>
        <p className="text-sm text-gray-500">
          Track your application in your pipeline
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
          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-400"
        />

        {/* ROLE */}
        <input
          type="text"
          name="role"
          placeholder="Role (e.g Frontend Developer)"
          value={formData.role}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-400"
        />

        {/* STATUS */}
        <select
          name="status"
          value={formData.status}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-400"
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
          placeholder="Job link (optional)"
          value={formData.link}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-400"
        />
      </div>

      {/* NOTES */}
      <textarea
        name="notes"
        placeholder="Notes (optional)"
        value={formData.notes}
        onChange={handleChange}
        rows="3"
        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-400"
      />

      {/* SUBMIT BUTTON */}
      <button
        type="submit"
        className="w-full md:w-auto px-6 py-3 bg-indigo-500 text-white rounded-xl font-medium hover:bg-indigo-600 transition-all shadow-md"
      >
        ➕ Add Job
      </button>
    </form>
  );
};

export default JobForm;