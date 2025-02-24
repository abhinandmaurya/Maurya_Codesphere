"use client";

import { useState, useCallback, memo } from "react";
import { Navigation } from "@/components/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check, ChevronDown } from "lucide-react";

// Constants with proper typing
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
      "All packages include design, development, and initial support tailored to your plan.",
  },
  {
    question: "Do you offer payment plans?",
    answer: "Yes, we provide flexible payment options based on project scope.",
  },
  {
    question: "How long does a project take?",
    answer:
      "Small sites: 2-4 weeks, e-commerce: 6-10 weeks, custom projects vary.",
  },
  {
    question: "Can I request custom features?",
    answer: "Yes! We can tailor any package with a custom quote.",
  },
] as const;

const TESTIMONIALS = [
  { quote: "Amazing work, delivered on time!", author: "Anuj Panchal, CEO" },
  {
    quote: "Transformed our online presence.",
    author: "Vishal Dangi, Founder",
  },
] as const;

// Animation Variants with optimized settings
const animationVariants = {
  section: {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  },
  item: {
    hidden: { opacity: 0 },
    visible: (i: number) => ({
      opacity: 1,
      transition: { duration: 0.4, delay: i * 0.1, ease: "easeOut" },
    }),
  },
  answer: {
    hidden: { opacity: 0, height: 0 },
    visible: { opacity: 1, height: "auto", transition: { duration: 0.3 } },
  },
};

// Memoized Components
const PricingCard = memo(
  ({ plan, index }: { plan: (typeof PLANS)[number]; index: number }) => (
    <motion.div
      custom={index}
      variants={animationVariants.item}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="rounded-xl p-6 bg-white/5 hover:bg-white/10 transition-colors"
      whileHover={{ scale: 1.02 }}
    >
      <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
      <p className="text-2xl font-bold text-[#CCFF00] mb-2">{plan.price}</p>
      <p className="text-gray-400 mb-6">{plan.description}</p>
      <ul className="space-y-3 mb-8">
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-start">
            <Check className="w-5 h-5 text-[#CCFF00] mr-2 mt-0.5 flex-shrink-0" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <Button className="w-full bg-[#CCFF00] text-black hover:bg-[#CCFF00]/90">
        {plan.price === "Custom Quote" ? "Request Quote" : "Get Started"}
      </Button>
    </motion.div>
  )
);

const TestimonialCard = memo(
  ({
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
      viewport={{ once: true, amount: 0.3 }}
      className="rounded-xl p-6 bg-white/5"
    >
      <p className="italic text-gray-300 mb-2">"{testimonial.quote}"</p>
      <p className="font-semibold text-[#CCFF00]">{testimonial.author}</p>
    </motion.div>
  )
);

const FAQSection = memo(() => {
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
          <div
            key={faq.question}
            className="rounded-xl p-6 bg-white/5 hover:bg-white/10 transition-colors cursor-pointer"
            onClick={() => toggleFAQ(index)}
          >
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-semibold">{faq.question}</h3>
              <motion.div
                animate={{ rotate: openIndex === index ? 180 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <ChevronDown className="w-6 h-6 text-[#CCFF00]" />
              </motion.div>
            </div>
            <AnimatePresence mode="wait">
              {openIndex === index && (
                <motion.p
                  key={faq.answer}
                  variants={animationVariants.answer}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  className="text-gray-400 mt-4"
                >
                  {faq.answer}
                </motion.p>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </motion.section>
  );
});

// Main Component with lazy loading
export default function Pricing() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <main className="container mx-auto px-4 pt-32 pb-16">
        <motion.section
          variants={animationVariants.section}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl text-[#CCFF00] font-bold mb-4">
            Pricing Plans
          </h1>
          <p className="text-xl text-gray-400 mb-4">
            Affordable pricing for top-tier web development
          </p>
          <p className="text-lg text-gray-300">
            Expert craftsmanship and responsive designs
          </p>
        </motion.section>

        <section className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {PLANS.map((plan, index) => (
            <PricingCard key={plan.name} plan={plan} index={index} />
          ))}
        </section>

        <motion.section
          variants={animationVariants.section}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">How We Price</h2>
          <p className="text-gray-400 max-w-3xl mx-auto">
            Flexible pricing: <strong>Hourly Rates</strong>,{" "}
            <strong>Flat Rates</strong>, or <strong>Retainers</strong>. Get a
            personalized quote.
          </p>
        </motion.section>

        <section className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 col-span-full">
            Client Testimonials
          </h2>
          {TESTIMONIALS.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.author}
              testimonial={testimonial}
              index={index}
            />
          ))}
        </section>

        <FAQSection />

        <motion.section
          variants={animationVariants.section}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold mb-4">Ready to Start?</h2>
          <Button className="bg-[#CCFF00] text-black hover:bg-[#CCFF00]/90 text-lg py-3 px-6">
            Request Quote
          </Button>
        </motion.section>
      </main>
      <footer className="bg-white/5 text-center py-6">
        <p className="text-gray-400">© 2025 Maurya CodeSphere</p>
      </footer>
    </div>
  );
}

PricingCard.displayName = "PricingCard";
TestimonialCard.displayName = "TestimonialCard";
FAQSection.displayName = "FAQSection";
