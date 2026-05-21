import { motion, useScroll, useTransform } from "framer-motion";

const MockDashboard = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 400], [0, -30]);

  return (
    <motion.div
      style={{ y }}
      className="mt-16 md:mt-20 w-full max-w-5xl mx-auto px-4 md:px-0"
    >
      <div className="rounded-2xl border shadow-xl overflow-hidden">
        {/* WINDOW BAR */}
        <div className="h-10 bg-gray-50 flex items-center px-4 gap-2">
          <div className="w-3 h-3 bg-red-400 rounded-full" />
          <div className="w-3 h-3 bg-yellow-400 rounded-full" />
          <div className="w-3 h-3 bg-green-400 rounded-full" />
        </div>

        {/* CONTENT GRID */}
        <div className="p-4 md:p-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div className="h-20 md:h-24 bg-indigo-50 rounded-xl" />
          <div className="h-20 md:h-24 bg-purple-50 rounded-xl" />
          <div className="h-20 md:h-24 bg-blue-50 rounded-xl" />
          <div className="col-span-1 sm:col-span-2 md:col-span-3 h-32 md:h-44 bg-gray-50 rounded-xl" />
        </div>
      </div>
    </motion.div>
  );
};

export default MockDashboard;
