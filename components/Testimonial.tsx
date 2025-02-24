import React from "react";
import { motion } from "framer-motion";

// Define the type for a single testimonial
interface TestimonialType {
  id: number;
  name: string;
  title: string;
  quote: string;
  date: string;
  image: string;
}

// Define the props for the TestimonialCard component
interface TestimonialCardProps {
  testimonial: TestimonialType;
}

const testimonials: TestimonialType[] = [
  {
    id: 1,
    name: "Anuj Panchal",
    title: "Founder of Anmol Poultry Farm",
    quote:
      "Maurya Codesphere has revolutionized our poultry e-commerce business. Their expertise in web development and design resulted in a visually appealing and highly functional online store. Our digital transformation has led to a significant increase in online sales, and we couldn't be more satisfied with their service.",
    date: "03 January 2025",
    image: "https://picsum.photos/120/120?random=1",
  },
  {
    id: 2,
    name: "Danial John",
    title: "Founder of Modern Agency",
    quote:
      "Maurya Codesphere built an impressive real estate portal tailored to our agency’s needs. The platform’s sleek design and intuitive navigation make it easy for potential buyers to explore property listings. Their deep understanding of the real estate industry has helped us attract more clients effortlessly.",
    date: "15 August 2024",
    image: "https://picsum.photos/120/120?random=2",
  },
  {
    id: 3,
    name: "Vishal Dangi",
    title: "Founder of Somya Engineers",
    quote:
      "Collaborating with Maurya Codesphere was seamless. They developed a feature-rich mobile app for our engineering solutions, improving customer engagement and service efficiency. Their commitment to quality and innovation makes them a highly reliable tech partner.",
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

// TestimonialCard component with props type
const TestimonialCard: React.FC<TestimonialCardProps> = React.memo(
  ({ testimonial }) => {
    const { id, name, title, quote, date, image } = testimonial;

    return (
      <motion.div
        key={id}
        className="bg-black p-6 rounded-xl shadow-lg max-w-sm mx-auto border border-gray-800 hover:bg-gray-850 transition-colors duration-300"
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        whileHover="hover"
        viewport={{ once: true }}
      >
        <div className="flex items-center mb-6">
          <motion.img
            src={image}
            alt={`${name}'s profile`}
            className="w-14 h-14 rounded-full mr-5 object-cover"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.1 * id, duration: 0.5 }}
          />
          <div>
            <motion.h3
              className="text-white text-xl font-semibold"
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2 * id, duration: 0.5 }}
            >
              {name}
            </motion.h3>
            <motion.p
              className="text-gray-400 text-base"
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3 * id, duration: 0.5 }}
            >
              {title}
            </motion.p>
          </div>
        </div>
        <motion.p
          className="text-gray-300 text-base leading-relaxed"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 * id, duration: 0.6 }}
        >
          {quote}
        </motion.p>
        <motion.p
          className="text-gray-500 text-sm mt-6"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 * id, duration: 0.6 }}
        >
          {date}
        </motion.p>
      </motion.div>
    );
  }
);

const Testimonial: React.FC = () => {
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
          At Maurya CodeSphere, we take pride in delivering exceptional digital
          products and services that drive success for our clients. Here’s what
          some of our clients say.
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Testimonial;
