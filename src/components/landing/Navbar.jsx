import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/70 backdrop-blur-xl border-b border-gray-200 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-8 py-4 flex items-center justify-between">

        {/* LOGO */}
        <div
          onClick={() => navigate("/")}
          className="flex items-center gap-2 cursor-pointer"
        >
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold">
            J
          </div>

          <h1 className="font-semibold text-lg tracking-tight">
            JobberHaunt
          </h1>
        </div>

        {/* NAV LINKS */}
        <nav className="hidden md:flex items-center gap-8 text-sm text-gray-600">

          {["Features", "Pricing", "Dashboard"].map((item, i) => (
            <button
              key={i}
              onClick={() =>
                item === "Dashboard" ? navigate("/dashboard") : null
              }
              className="relative group hover:text-black transition"
            >
              {item}

              {/* UNDERLINE ANIMATION */}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-black group-hover:w-full transition-all duration-300"></span>
            </button>
          ))}

        </nav>

        {/* CTA BUTTON */}
        <div className="flex items-center gap-3">

          <button
            onClick={() => navigate("/jobs")}
            className="px-5 py-2.5 rounded-xl bg-black text-white text-sm font-medium hover:scale-[1.03] transition shadow-lg"
          >
            Open App
          </button>

        </div>

      </div>
    </motion.header>
  );
};

export default Navbar;