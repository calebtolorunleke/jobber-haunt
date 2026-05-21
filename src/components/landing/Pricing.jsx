const Pricing = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 md:px-10">
      <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12 md:mb-14">
        Pricing
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {["Free", "Pro", "Elite"].map((plan, i) => (
          <div
            key={i}
            className="border rounded-2xl p-6 bg-white hover:shadow-lg transition"
          >
            <h3 className="text-lg md:text-xl font-semibold">{plan}</h3>

            <p className="text-2xl md:text-3xl font-semibold mt-4">
              {i === 0 ? "$0" : i === 1 ? "$9" : "$19"}
            </p>

            <button className="mt-6 w-full bg-black text-white py-2 rounded-xl">
              Choose
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;
