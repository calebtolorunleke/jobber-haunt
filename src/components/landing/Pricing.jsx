import { motion } from "framer-motion";

const plans = [
  {
    name: "Starter",
    price: "$0",
    description: "Perfect for beginners entering the job market.",
    features: [
      "Track 10 applications",
      "Basic analytics",
      "Application timeline",
      "Mobile responsive dashboard",
    ],
    button: "Start Free",
    glow: "from-gray-200 to-gray-100",
    border: "border-gray-200",
  },

  {
    name: "Pro",
    price: "$12",
    description: "Built for serious job seekers optimizing interviews.",
    features: [
      "Unlimited applications",
      "Advanced analytics",
      "Interview tracking",
      "Priority insights",
      "Custom job categories",
      "Productivity metrics",
    ],
    button: "Go Pro",
    popular: true,
    glow: "from-indigo-500 to-purple-500",
    border: "border-indigo-400",
  },

  {
    name: "Elite",
    price: "$29",
    description: "Premium tools for elite candidates and professionals.",
    features: [
      "AI job recommendations",
      "Offer tracking system",
      "Resume optimization",
      "Priority support",
      "Advanced reporting",
      "Team collaboration",
    ],
    button: "Get Elite",
    glow: "from-pink-500 to-orange-400",
    border: "border-pink-400",
  },
];

const Pricing = () => {
  return (
    <section className="relative py-32 px-6 md:px-10 overflow-hidden bg-[#0B0B0F] text-white">

      {/* BACKGROUND GLOWS */}
      <div className="absolute top-0 left-[-200px] w-[500px] h-[500px] bg-indigo-500/30 blur-[140px] rounded-full" />
      <div className="absolute bottom-0 right-[-200px] w-[500px] h-[500px] bg-pink-500/20 blur-[140px] rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >

          <p className="text-indigo-400 uppercase tracking-[0.3em] text-sm mb-4">
            Pricing
          </p>

          <h2 className="text-4xl md:text-6xl font-semibold tracking-tight max-w-4xl mx-auto leading-tight">
            Pricing designed for ambitious job seekers
          </h2>

          <p className="text-gray-400 mt-6 max-w-2xl mx-auto text-base md:text-lg">
            Whether you're applying to your first internship or managing dozens
            of interviews, JobberHaunt scales with your career journey.
          </p>

        </motion.div>

        {/* PRICING GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{
                y: -12,
                scale: 1.02,
              }}
              className={`relative rounded-3xl border ${plan.border}
                bg-white/5 backdrop-blur-2xl
                overflow-hidden shadow-2xl`}
            >

              {/* POPULAR BADGE */}
              {plan.popular && (
                <div className="absolute top-5 right-5">
                  <div className="px-4 py-1 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 text-xs font-semibold shadow-lg">
                    MOST POPULAR
                  </div>
                </div>
              )}

              {/* CARD GLOW */}
              <div
                className={`absolute inset-0 opacity-20 bg-gradient-to-br ${plan.glow}`}
              />

              {/* CONTENT */}
              <div className="relative z-10 p-8 md:p-10">

                {/* PLAN NAME */}
                <h3 className="text-2xl font-semibold tracking-tight">
                  {plan.name}
                </h3>

                <p className="text-gray-400 mt-3 text-sm leading-relaxed">
                  {plan.description}
                </p>

                {/* PRICE */}
                <div className="mt-8 flex items-end gap-2">
                  <span className="text-5xl font-bold tracking-tight">
                    {plan.price}
                  </span>

                  <span className="text-gray-400 mb-1">
                    / month
                  </span>
                </div>

                {/* BUTTON */}
                <button
                  className={`mt-8 w-full py-3 rounded-2xl font-medium transition-all duration-300
                  ${
                    plan.popular
                      ? "bg-white text-black hover:scale-[1.03]"
                      : "bg-white/10 hover:bg-white/20 border border-white/10"
                  }`}
                >
                  {plan.button}
                </button>

                {/* FEATURES */}
                <div className="mt-10 space-y-4">

                  {plan.features.map((feature, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-3 text-sm text-gray-300"
                    >
                      <div className="mt-1 w-2 h-2 rounded-full bg-indigo-400" />

                      <p>{feature}</p>
                    </div>
                  ))}

                </div>

              </div>

            </motion.div>
          ))}

        </div>

        {/* BOTTOM CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mt-24 text-center"
        >

          <h3 className="text-2xl md:text-3xl font-semibold">
            Start tracking smarter today
          </h3>

          <p className="text-gray-400 mt-4 max-w-xl mx-auto">
            Join professionals building a more organized and strategic job search.
          </p>

          <button className="mt-8 px-8 py-4 rounded-2xl bg-white text-black font-medium hover:scale-[1.03] transition">
            Get Started Free
          </button>

        </motion.div>

      </div>

    </section>
  );
};

export default Pricing;