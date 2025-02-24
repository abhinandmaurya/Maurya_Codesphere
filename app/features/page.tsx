"use client";

import { Navigation } from "@/components/navigation";
import { motion } from "framer-motion";
import { Zap, Shield, Rocket, Clock, Palette, Users } from "lucide-react";
import { memo, useMemo } from "react";

// Types
type Feature = {
  Icon: typeof Zap;
  title: string;
  description: string;
  extraInfo: string;
};

// Animation variants
const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.98 },
  visible: { opacity: 1, scale: 1 },
  hover: { scale: 1.03 },
};

// Feature data
// Feature data
const FEATURES: readonly Feature[] = [
  {
    Icon: Zap,
    title: "Lightning Fast",
    description: "Optimized performance with cutting-edge technology.",
    extraInfo: "Load times under 2s with caching and CDN.",
  },
  {
    Icon: Shield,
    title: "Secure & Reliable",
    description: "Enterprise-grade security features.",
    extraInfo: "SSL, DDoS protection, regular audits.",
  },
  {
    Icon: Rocket,
    title: "Scalable Solutions",
    description: "Seamless growth with your business.",
    extraInfo: "Cloud-based, supports millions of users.",
  },
  {
    Icon: Clock,
    title: "24/7 Support",
    description: "Round-the-clock expert assistance.",
    extraInfo: "15-min response via chat, email, phone.",
  },
  {
    Icon: Palette,
    title: "Custom Design",
    description: "Tailored designs for your brand.",
    extraInfo: "Responsive, pixel-perfect layouts.",
  },
  {
    Icon: Users,
    title: "Team Collaboration",
    description: "Streamlined team productivity tools.",
    extraInfo: "Integrated PM and version control.",
  },
] as const;

// Memoized Feature Card
const FeatureCard = memo(
  ({ feature, index }: { feature: Feature; index: number }) => {
    const { Icon } = feature;
    return (
      <motion.article
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        whileHover="hover"
        transition={{ duration: 0.4, delay: index * 0.1 }}
        viewport={{ once: true, amount: 0.2 }}
        className="group rounded-2xl p-6 bg-white/5 backdrop-blur-md border border-white/10 shadow-md hover:bg-white/[0.07] transition-colors duration-200"
      >
        <Icon className="w-10 h-10 text-[#CCFF00] mb-4" aria-hidden="true" />
        <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
        <p className="text-gray-300 text-sm mb-3">{feature.description}</p>
        <p className="text-xs text-gray-500 italic">{feature.extraInfo}</p>
      </motion.article>
    );
  }
);
FeatureCard.displayName = "FeatureCard";

// Main Component
export default function Features() {
  const memoizedFeatures = useMemo(() => FEATURES, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white">
      <Navigation />
      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.section
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl sm:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#CCFF00] to-white">
              Our Features
            </h1>
            <p className="text-lg text-gray-300 max-w-xl mx-auto">
              Powerhouse tools to elevate your business.
            </p>
          </motion.section>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {memoizedFeatures.map((feature, index) => (
              <FeatureCard
                key={feature.title}
                feature={feature}
                index={index}
              />
            ))}
          </div>

          <motion.section
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <p className="text-base text-gray-400 mb-4">
              Ready to transform your web presence?
            </p>
            <button
              className="px-6 py-2 bg-[#CCFF00] text-black font-medium rounded-full hover:bg-[#b3e600] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#CCFF00] focus:ring-offset-2 focus:ring-offset-gray-900"
              aria-label="Get started"
            >
              Get Started
            </button>
          </motion.section>
        </div>
      </main>
    </div>
  );
}
