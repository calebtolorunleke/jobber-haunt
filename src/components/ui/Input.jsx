const Input = ({
  label,
  name,
  value,
  onChange,
  type = "text",
  placeholder = "",
  className = "",
}) => {
  return (
    <div className="flex flex-col gap-1 w-full">

      {/* LABEL */}
      {label && (
        <label className="text-sm font-medium text-gray-700">
          {label}
        </label>
      )}

      {/* INPUT */}
      <input
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`
          w-full px-4 py-3 rounded-2xl
          border border-gray-200
          bg-white/70 backdrop-blur-xl
          text-gray-700 text-sm
          focus:outline-none focus:ring-2 focus:ring-indigo-400
          transition-all duration-200
          ${className}
        `}
      />
    </div>
  );
};

export default Input;