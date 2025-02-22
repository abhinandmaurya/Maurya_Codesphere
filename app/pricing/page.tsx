"use client";

import { useState, useCallback } from "react";
import { Navigation } from "@/components/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check, ChevronDown } from "lucide-react";

// Constants
const PLANS = [
  {
    name: "Basic Website",
    price: "Starting at Affordable Rates",
    description: "Perfect for small businesses",
    features: [
      "5-10 Pages",
      "Responsive Design",
      "Basic SEO",
      "3 Months Support",
    ],
  },
  {
    name: "E-commerce",
    price: "Competitive Pricing",
    description: "Ideal for growing online stores",
    features: [
      "50-100 Products",
      "Payment Integration",
      "Advanced SEO",
      "6 Months Support",
      "Custom Domain",
    ],
  },
  {
    name: "Custom Project",
    price: "Custom Quote",
    description: "For unique, large-scale needs",
    features: [
      "Tailored Solutions",
      "Full Customization",
      "24/7 Priority Support",
      "Scalable Design",
      "API Access",
    ],
  },
] as const;

const FAQS = [
  {
    question: "What’s included in the price?",
    answer:
      "All packages include design, development, and initial support tailored to your plan. Additional features depend on the chosen tier.",
  },
  {
    question: "Do you offer payment plans?",
    answer:
      "Yes, we provide flexible payment options based on project scope and timeline.",
  },
  {
    question: "How long does a project take?",
    answer:
      "Timelines vary: small sites take 2-4 weeks, e-commerce 6-10 weeks, and custom projects are scoped individually.",
  },
  {
    question: "Can I request custom features?",
    answer:
      "Absolutely! Our custom tier is designed for unique needs, and we can tailor any package with a quote.",
  },
] as const;

const TESTIMONIALS = [
  { quote: "Amazing work, delivered on time!", author: "Anuj Panchal, CEO" },
  {
    quote: "Transformed our online presence.",
    author: "Vishal Dangi, Founder",
  },
] as const;

// Animation Variants
const animationVariants = {
  section: {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  },
  item: {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: i * 0.1 },
    }),
  },
  answer: {
    hidden: { opacity: 0, height: 0, marginTop: 0 },
    visible: {
      opacity: 1,
      height: "auto",
      marginTop: "1rem",
      transition: { duration: 0.4, ease: "easeInOut" },
    },
    exit: {
      opacity: 0,
      height: 0,
      marginTop: 0,
      transition: { duration: 0.3, ease: "easeInOut" },
    },
  },
};

// Components
const PricingCard = ({
  plan,
  index,
}: {
  plan: (typeof PLANS)[number];
  index: number;
}) => (
  <motion.div
    custom={index}
    variants={animationVariants.item}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}
    className="bg-white/5 backdrop-blur-lg rounded-xl p-6 hover:bg-white/10 transition-colors duration-300"
  >
    <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
    <div className="text-2xl font-bold text-[#CCFF00] mb-2">{plan.price}</div>
    <p className="text-gray-400 mb-6">{plan.description}</p>
    <ul className="space-y-3 mb-8">
      {plan.features.map((feature) => (
        <li key={feature} className="flex items-center">
          <Check className="w-5 h-5 text-[#CCFF00] mr-2 flex-shrink-0" />
          <span>{feature}</span>
        </li>
      ))}
    </ul>
    <Button className="w-full bg-[#CCFF00] text-black hover:bg-[#CCFF00]/90">
      {plan.price === "Custom Quote" ? "Request a Quote" : "Get Started"}
    </Button>
  </motion.div>
);

const TestimonialCard = ({
  testimonial,
  index,
}: {
  testimonial: (typeof TESTIMONIALS)[number];
  index: number;
}) => (
  <motion.div
    custom={index}
    variants={animationVariants.item}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}
    className="bg-white/5 backdrop-blur-lg rounded-xl p-6"
  >
    <p className="italic text-gray-300 mb-2">"{testimonial.quote}"</p>
    <p className="font-semibold text-[#CCFF00]">{testimonial.author}</p>
  </motion.div>
);

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const toggleFAQ = useCallback((index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  }, []);

  return (
    <motion.section
      variants={animationVariants.section}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="mb-16"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
        Frequently Asked Questions
      </h2>
      <div className="max-w-4xl mx-auto space-y-4">
        {FAQS.map((faq, index) => (
          <motion.div
            key={faq.question}
            custom={index}
            variants={animationVariants.item}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-colors duration-300 cursor-pointer"
            onClick={() => toggleFAQ(index)}
          >
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-semibold">{faq.question}</h3>
              <motion.div
                animate={{ rotate: openIndex === index ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronDown className="w-6 h-6 text-[#CCFF00]" />
              </motion.div>
            </div>
            <AnimatePresence>
              {openIndex === index && (
                <motion.p
                  variants={animationVariants.answer}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="text-gray-400"
                >
                  {faq.answer}
                </motion.p>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

// Main Component
export default function Pricing() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <main className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <motion.section
            variants={animationVariants.section}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Pricing Plans
            </h1>
            <p className="text-xl text-gray-400 mb-4">
              Affordable, transparent pricing for top-tier web development.
            </p>
            <p className="text-lg text-gray-300">
              Expert craftsmanship, fast delivery, and responsive designs
              tailored to your needs.
            </p>
          </motion.section>

          <motion.section
            variants={animationVariants.section}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16"
          >
            {PLANS.map((plan, index) => (
              <PricingCard key={plan.name} plan={plan} index={index} />
            ))}
          </motion.section>

          <motion.section
            variants={animationVariants.section}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">
              How We Price Your Project
            </h2>
            <p className="text-gray-400 max-w-3xl mx-auto">
              We offer flexible pricing: <strong>Hourly Rates</strong> for
              evolving projects, <strong>Flat Rates</strong> for defined scopes,
              and <strong>Retainers</strong> for ongoing support. Reach out for
              a personalized quote with no hidden fees.
            </p>
          </motion.section>

          <motion.section
            variants={animationVariants.section}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-center mb-8">
              What Our Clients Say
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {TESTIMONIALS.map((testimonial, index) => (
                <TestimonialCard
                  key={testimonial.author}
                  testimonial={testimonial}
                  index={index}
                />
              ))}
            </div>
          </motion.section>

          <FAQSection />

          <motion.section
            variants={animationVariants.section}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold mb-4">Ready to Start?</h2>
            <p className="text-lg text-gray-400 mb-6">
              Contact us for a custom quote or choose a package today.
            </p>
            <Button className="bg-[#CCFF00] text-black hover:bg-[#CCFF00]/90 text-lg py-3 px-6">
              Request a Quote
            </Button>
          </motion.section>
        </div>
      </main>
      <footer className="bg-white/5 text-center py-6">
        <p className="text-gray-400">
          © 2025 Maurya CodeSphere. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
