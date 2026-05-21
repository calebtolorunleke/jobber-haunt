const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 px-10 py-16">

      <div className="grid md:grid-cols-4 gap-10 max-w-6xl mx-auto">

        <div>
          <h2 className="text-white text-xl font-semibold">JobberHaunt</h2>
          <p className="mt-3 text-sm">
            Job tracking SaaS for modern professionals.
          </p>
        </div>

        <div>
          <h3 className="text-white mb-3">Product</h3>
          <p>Dashboard</p>
          <p>Analytics</p>
        </div>

        <div>
          <h3 className="text-white mb-3">Company</h3>
          <p>About</p>
          <p>Careers</p>
        </div>

        <div>
          <h3 className="text-white mb-3">Legal</h3>
          <p>Privacy</p>
          <p>Terms</p>
        </div>

      </div>

      <div className="border-t border-gray-800 mt-10 pt-6 text-xs flex justify-between">
        <p>© {new Date().getFullYear()} JobberHaunt</p>
        <p>Built with React + Tailwind</p>
      </div>

    </footer>
  );
};

export default Footer;