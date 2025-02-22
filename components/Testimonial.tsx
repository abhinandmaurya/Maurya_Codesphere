import React from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Anuj Panchal",
    title: "Founder of Anmol Poultry Farm",
    quote:
      "Maurya Codesphere has been instrumental in transforming our online presence. Their team’s expertise in web development and design resulted in a visually stunning and user-friendly e-commerce platform. Our online sales have skyrocketed, and we couldn’t be happier.",
    date: "03 January 2025",
    image: "https://picsum.photos/120/120?random=1",
  },
  {
    name: "Harikesh Kashyap",
    title: "Founder of Ai Digital Info",
    quote:
      "Maurya Codesphere designed and developed a captivating web portal for showcasing our real estate listings. The platform is visually appealing and easy to navigate, allowing potential buyers to find their dream homes effortlessly. LandFree’s expertise in the real estate industry is unmatched.",
    date: "15 August 2024",
    image: "https://picsum.photos/120/120?random=2",
  },
  {
    name: "Vishal Dangi",
    title: "Founder of Somya Engineers",
    quote:
      "Working with Maurya Codesphere was a breeze. They understood our vision for a mobile app that streamlined our food delivery service. The app they delivered exceeded our expectations, and our customers love the seamless ordering experience. LandFree is a trusted partner we highly recommend.",
    date: "21 February 2024",
    image: "https://picsum.photos/120/120?random=3",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
      delay: 0.2,
    },
  },
  hover: {
    scale: 1.05,
    boxShadow: "0px 10px 20px rgba(204, 255, 0, 0.3)",
    transition: { duration: 0.3 },
  },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
};

function Testimonial() {
  return (
    <div className="bg-black min-h-screen py-16 px-4 overflow-hidden">
      <motion.div
        className="max-w-5xl mx-auto text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="text-[#CCFF00] text-5xl font-bold mb-8 tracking-wide"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
        >
          What our clients say about us
        </motion.h1>
        <motion.p
          className="text-gray-300 text-lg mb-12 max-w-2xl mx-auto"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          At LandFree, we take pride in delivering exceptional digital products
          and services that drive success for our clients. Here’s what some of
          our clients say.
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-gray-900 p-6 rounded-xl shadow-lg max-w-sm mx-auto border border-gray-800 hover:bg-gray-850 transition-colors duration-300"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-6">
                <motion.img
                  src={testimonial.image}
                  alt={`${testimonial.name}`}
                  className="w-14 h-14 rounded-full mr-5 object-cover"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.1 * index, duration: 0.5 }}
                />
                <div>
                  <motion.h3
                    className="text-white text-xl font-semibold"
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.2 * index, duration: 0.5 }}
                  >
                    {testimonial.name}
                  </motion.h3>
                  <motion.p
                    className="text-gray-400 text-base"
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.3 * index, duration: 0.5 }}
                  >
                    {testimonial.title}
                  </motion.p>
                </div>
              </div>
              <motion.p
                className="text-gray-300 text-base leading-relaxed"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 * index, duration: 0.6 }}
              >
                {testimonial.quote}
              </motion.p>
              <motion.p
                className="text-gray-500 text-sm mt-6"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 * index, duration: 0.6 }}
              >
                {testimonial.date}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

export default Testimonial;
