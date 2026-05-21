import Navbar from "../components/landing/Navbar";
import Hero from "../components/landing/Hero";
import MockDashboard from "../components/landing/MockDashboard";
import Features from "../components/landing/Features";
import Pricing from "../components/landing/Pricing";
import Footer from "../components/landing/Footer";

import { motion } from "framer-motion";

const Landing = () => {
  return (
    <div className="bg-white overflow-x-hidden text-gray-900">

      <Navbar />

      {/* HERO (STORY START) */}
      <Hero />

      {/* PRODUCT PROOF */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        <MockDashboard />
      </motion.section>

      {/* FEATURES */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        <Features />
      </motion.section>

      {/* PRICING */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        <Pricing />
      </motion.section>

      {/* FINAL CTA (STRIPE STYLE) */}
      <section className="relative py-32 text-center bg-gradient-to-b from-black to-gray-900 text-white overflow-hidden">

        {/* subtle glow background */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute w-[500px] h-[500px] bg-indigo-500 blur-[160px] rounded-full top-[-100px] left-[-100px]" />
          <div className="absolute w-[500px] h-[500px] bg-purple-500 blur-[160px] rounded-full bottom-[-120px] right-[-120px]" />
        </div>

        <div className="relative z-10">
          <h2 className="text-3xl md:text-5xl font-semibold">
            Ready to take control of your job search?
          </h2>

          <p className="mt-4 text-gray-300 text-sm md:text-base max-w-xl mx-auto">
            Track applications, measure progress, and land better opportunities
            with structured clarity.
          </p>

          <button className="mt-8 px-6 py-3 bg-white text-black rounded-xl font-medium hover:scale-[1.03] transition">
            Get Started Free
          </button>
        </div>

      </section>

      {/* FOOTER */}
      <Footer />

    </div>
  );
};

export default Landing;