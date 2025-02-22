"use client";

import { Navigation } from "@/components/navigation";
import { motion } from "framer-motion";
import { Zap, Shield, Rocket, Clock, Palette, Users } from "lucide-react";

const features = [
  {
    icon: <Zap className="w-12 h-12" />,
    title: "Lightning Fast",
    description:
      "Optimized performance with cutting-edge technology for the best user experience.",
    extraInfo:
      "Load times under 2 seconds with advanced caching and CDN integration.",
  },
  {
    icon: <Shield className="w-12 h-12" />,
    title: "Secure & Reliable",
    description:
      "Enterprise-grade security features to protect your data and users.",
    extraInfo:
      "SSL encryption, DDoS protection, and regular security audits included.",
  },
  {
    icon: <Rocket className="w-12 h-12" />,
    title: "Scalable Solutions",
    description:
      "Infrastructure that grows seamlessly with your business needs.",
    extraInfo:
      "Cloud-based architecture supporting millions of users without downtime.",
  },
  {
    icon: <Clock className="w-12 h-12" />,
    title: "24/7 Expert Support",
    description: "Round-the-clock assistance from our dedicated support team.",
    extraInfo:
      "Live chat, email, and phone support with a 15-minute response time.",
  },
  {
    icon: <Palette className="w-12 h-12" />,
    title: "Custom Design",
    description: "Unique, tailored designs that reflect your brand identity.",
    extraInfo:
      "Collaborate with our design team for pixel-perfect, responsive layouts.",
  },
  {
    icon: <Users className="w-12 h-12" />,
    title: "Team Collaboration",
    description: "Tools and workflows to streamline your team's productivity.",
    extraInfo: "Integrated project management and version control systems.",
  },
];

export default function Features() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white">
      <Navigation />

      <main className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center mb-20"
          >
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#CCFF00] to-white">
              Our Features
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto">
              Discover the powerhouse tools and services designed to elevate
              your business.
            </p>
          </motion.div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.15,
                  ease: "easeOut",
                }}
                whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
                className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 shadow-lg hover:bg-white/10 border border-white/10 transition-all duration-300"
              >
                <div className="text-[#CCFF00] mb-6">{feature.icon}</div>
                <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <p className="text-sm text-gray-500 italic">
                  {feature.extraInfo}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="text-center mt-20"
          >
            <p className="text-lg text-gray-400 mb-6">
              Ready to transform your web presence?
            </p>
            <button className="px-8 py-3 bg-[#CCFF00] text-black font-semibold rounded-full hover:bg-[#b3e600] transition-colors duration-300">
              Get Started Now
            </button>
          </motion.div>
        </div>
      </main>
    </div>
  );
}
