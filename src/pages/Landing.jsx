import Navbar from "../components/landing/Navbar";
import Hero from "../components/landing/Hero";
import MockDashboard from "../components/landing/MockDashboard";
import Features from "../components/landing/Features";
import Pricing from "../components/landing/Pricing";
import Footer from "../components/landing/Footer";

const Landing = () => {
  return (
    <div className="bg-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <MockDashboard />
      <Features />
      <Pricing />

      <section className="py-28 bg-black text-white text-center">
        <h2 className="text-4xl font-semibold">
          Ready to start?
        </h2>

        <button className="mt-6 px-6 py-3 bg-white text-black rounded-xl">
          Get Started
        </button>
      </section>

      <Footer />
    </div>
  );
};

export default Landing;