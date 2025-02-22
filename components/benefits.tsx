import { motion } from "framer-motion";
import { useMemo } from "react";

const benefitsData = [
  {
    icon: "📊",
    title: "Enhanced Online Presence",
    description:
      "Stand out in the digital landscape with a professionally crafted website that captivates and engages your audience effectively.",
  },
  {
    icon: "🌟",
    title: "Increased Brand Visibility",
    description:
      "Boost brand recognition and visibility across various online platforms, attracting more potential customers to your business.",
  },
  {
    icon: "👤",
    title: "Improved User Experience",
    description:
      "Provide visitors with seamless navigation and intuitive interfaces, ensuring a positive experience every time.",
  },
  {
    icon: "📈",
    title: "Higher Conversion Rates",
    description:
      "Convert more visitors into customers with strategically designed elements and compelling calls-to-action tailored to drive desired actions.",
  },
  {
    icon: "🌍",
    title: "Greater Accessibility",
    description:
      "Reach a wider audience and cater to diverse user needs with responsive design and accessibility features, enhancing inclusivity and user satisfaction.",
  },
  {
    icon: "🔄",
    title: "Scalability and Flexibility",
    description:
      "Adapt to evolving business needs and growth opportunities effortlessly with scalable solutions and flexible architecture tailored to your requirements.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 },
};

function Benefits() {
  const memoizedBenefits = useMemo(() => benefitsData, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <main className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#CCFF00] px-4">
            Unlock the Advantages of Choosing Maurya CodeSphere
          </h1>
          <p className="mt-4 text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Discover the array of benefits that come with selecting Maurya
            CodeSphere, empowering your business with unparalleled web
            solutions.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {memoizedBenefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              variants={itemVariants}
              transition={{ duration: 0.6 }}
              className="bg-gray-900 p-4 sm:p-6 rounded-lg shadow-lg border-l-4 border-[#CCFF00] flex flex-col"
              role="article"
              aria-labelledby={`benefit-title-${index}`}
            >
              <div className="text-2xl sm:text-3xl mb-4" aria-hidden="true">
                {benefit.icon}
              </div>
              <h2
                id={`benefit-title-${index}`}
                className="text-lg sm:text-xl font-semibold mb-2"
              >
                {benefit.title}
              </h2>
              <p className="text-gray-400 text-sm sm:text-base flex-grow">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </main>
    </div>
  );
}

Benefits.displayName = "Benefits";

export default Benefits;
