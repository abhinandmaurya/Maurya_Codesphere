import { motion, useInView } from "framer-motion";
import { useRef } from "react";

// Benefits data array (unchanged)
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

// Animation variants for individual items
const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
      duration: 0.5,
    },
  },
};

// Main component
const Benefits = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, {
    once: true, // Animation triggers only once
    amount: 0.2, // Trigger when 20% of the container is visible
  });

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <main className="container mx-auto px-4 py-12 sm:px-6 lg:px-8 flex-grow">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-12 px-2 sm:px-0"
        >
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#CCFF00] leading-tight mb-4">
            Unlock the Advantages of Choosing Maurya CodeSphere
          </h1>
          <p className="mt-4 text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto px-2">
            Discover the array of benefits that come with selecting Maurya
            CodeSphere, empowering your business with unparalleled web
            solutions.
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div
          ref={containerRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto"
        >
          {benefitsData.map((benefit, index) => {
            const cardRef = useRef(null);
            const cardInView = useInView(cardRef, {
              once: true,
              amount: 0.5, // Trigger when 50% of the card is visible
            });

            return (
              <motion.div
                ref={cardRef}
                key={benefit.title}
                variants={itemVariants}
                initial="hidden"
                animate={cardInView ? "visible" : "hidden"}
                className="bg-black p-4 sm:p-6 rounded-lg shadow-lg border-l-4 border-[#CCFF00] flex flex-col h-full hover:shadow-xl transition-shadow duration-300"
                role="article"
                aria-labelledby={`benefit-title-${index}`}
              >
                <div
                  className="text-2xl sm:text-3xl mb-4 flex-shrink-0"
                  aria-hidden="true"
                >
                  {benefit.icon}
                </div>
                <h2
                  id={`benefit-title-${index}`}
                  className="text-lg sm:text-xl font-semibold mb-2 line-clamp-2"
                >
                  {benefit.title}
                </h2>
                <p className="text-gray-400 text-sm sm:text-base flex-grow">
                  {benefit.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </main>

      {/* Footer Spacing */}
      <div className="h-12 shrink-0" />
    </div>
  );
};

Benefits.displayName = "Benefits";

export default Benefits;
