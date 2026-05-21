import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const Navbar = () => {
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition ${
        scrolled ? "bg-white/70 backdrop-blur border-b" : "bg-transparent"
      }`}
    >
      <div className="flex justify-between items-center px-8 py-4 max-w-6xl mx-auto">
        <h1 className="font-semibold text-xl">JobberHaunt</h1>

        <div className="flex gap-6 text-sm text-gray-600">
          <button>Features</button>
          <button>Pricing</button>

          <button
            onClick={() => navigate("/jobs")}
            className="px-5 py-2 bg-black text-white rounded-xl"
          >
            Open App
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;