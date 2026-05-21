const Features = () => {
  return (
    <section className="min-h-screen flex items-center px-6 md:px-10 bg-gray-50">

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 max-w-6xl mx-auto items-center">

        <img
          src="https://images.unsplash.com/photo-1551288049-bebda4e38f71"
          className="rounded-2xl md:rounded-3xl shadow-xl w-full"
        />

        <div>
          <h2 className="text-2xl md:text-4xl font-semibold mb-6">
            Built for clarity and execution
          </h2>

          <div className="space-y-3 text-gray-600 text-sm md:text-base">
            <p>✔ Track applications</p>
            <p>✔ Visual pipeline</p>
            <p>✔ Smart analytics</p>
          </div>
        </div>

      </div>

    </section>
  );
};

export default Features;