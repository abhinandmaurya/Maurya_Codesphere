"use client";

import { Navigation } from "@/components/navigation";
import { motion } from "framer-motion";
import { Users, Code, Globe, Rocket, Palette, Zap } from "lucide-react";

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const timelineVariants = {
    hidden: { width: 0 },
    visible: {
      width: "100%",
      transition: { duration: 0.8, ease: "easeInOut" },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white overflow-hidden">
      <Navigation />

      <main className="pt-32 pb-24 relative">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#CCFF00]/5 rounded-full blur-[100px]"></div>
          <div className="absolute bottom-40 right-20 w-96 h-96 bg-[#CCFF00]/10 rounded-full blur-[120px]"></div>
        </div>

        <div className="container mx-auto px-6">
          <motion.section
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="max-w-6xl mx-auto"
          >
            {/* Hero Section */}
            <motion.div variants={itemVariants} className="text-center mb-24">
              <Users className="w-20 h-20 text-[#CCFF00] animate-pulse mx-auto" />
              <h1 className="text-5xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-white via-[#CCFF00] to-white bg-clip-text text-transparent">
                Maurya CodeSphere
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
                Transforming ideas into digital masterpieces with innovation and
                precision.
              </p>
            </motion.div>

            {/* Our Story */}
            <motion.div
              variants={itemVariants}
              className="grid md:grid-cols-2 gap-16 mb-20"
            >
              <div className="space-y-6 relative z-10">
                <h2 className="text-4xl font-bold text-[#CCFF00]">
                  Our Journey
                </h2>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Launched in 2023, Maurya CodeSphere emerged from a vision to
                  redefine web development. Our founders, tech enthusiasts and
                  designers, bridged the gap between stunning design and robust
                  functionality.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Today, we serve clients across 15+ countries, delivering sleek
                  corporate sites and complex e-commerce platforms.
                </p>
                <div className="flex gap-6">
                  <div className="flex items-center space-x-2">
                    <Zap className="w-6 h-6 text-[#CCFF00]" />
                    <span className="text-lg font-medium">
                      Lightning-Fast Sites
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Palette className="w-6 h-6 text-[#CCFF00]" />
                    <span className="text-lg font-medium">Bespoke Designs</span>
                  </div>
                </div>
              </div>
              <div className="bg-gray-900/70 p-8 rounded-3xl backdrop-blur-md border border-gray-800/50 relative">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <Code className="w-10 h-10 text-[#CCFF00]" />
                    <span className="text-2xl font-semibold">
                      60+ Projects Delivered
                    </span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Globe className="w-10 h-10 text-[#CCFF00]" />
                    <span className="text-2xl font-semibold">
                      25+ Countries Served
                    </span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Rocket className="w-10 h-10 text-[#CCFF00]" />
                    <span className="text-2xl font-semibold">
                      98% Client Satisfaction
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Closing Statement */}
            <motion.p
              variants={itemVariants}
              className="text-xl text-gray-300 leading-relaxed text-center mt-20"
            >
              At Maurya CodeSphere, we craft digital legacies. Ready to elevate
              your online presence? Let’s innovate together!
            </motion.p>
          </motion.section>
        </div>
      </main>
    </div>
  );
}
