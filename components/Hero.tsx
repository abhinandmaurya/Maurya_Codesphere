"use client";

import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Image from "next/image";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export default function Hero() {
  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1d1d1d_1px,transparent_1px),linear-gradient(to_bottom,#1d1d1d_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />

      {/* Radial Gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-[radial-gradient(circle,rgba(203,255,0,0.15)_0%,transparent_70%)]" />

      {/* Navigation */}
      <nav className="relative z-10 flex items-center justify-between px-8 py-5">
        <div className="flex items-center gap-2">
          <motion.div
            initial={{ rotate: -90 }}
            animate={{ rotate: 0 }}
            transition={{ duration: 0.5 }}
          >
            <ArrowUpRight className="w-8 h-8 text-[#cbff00]" />
          </motion.div>
          <span className="text-xl font-semibold">LandFree</span>
        </div>

        <div className="flex items-center gap-8">
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="visible"
            className="flex items-center gap-8"
          >
            {["Services", "Features", "About", "Pricing", "Works"].map(
              (item) => (
                <motion.a
                  key={item}
                  href="#"
                  variants={fadeIn}
                  className="text-sm hover:text-[#cbff00] transition-colors"
                >
                  {item}
                </motion.a>
              )
            )}
          </motion.div>
          <motion.button
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1 }}
            className="flex items-center gap-2 bg-[#cbff00] text-black px-6 py-2 rounded-full hover:bg-opacity-90 transition-colors"
          >
            Contact Us
            <ArrowRight className="w-4 h-4" />
          </motion.button>
        </div>
      </nav>

      {/* Hero Content */}
      <main className="relative z-10 flex flex-col items-center justify-center text-center px-4 mt-20">
        <motion.h1
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.2 }}
          className="text-6xl font-bold leading-tight max-w-4xl mb-6"
        >
          Elevate Your Online Business with this Template
        </motion.h1>

        <motion.p
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.4 }}
          className="text-lg text-gray-400 max-w-2xl mb-12"
        >
          Maurya Codesphere simplifies the explanation of your business,
          services, and pricing, making it easily understandable.
        </motion.p>

        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="flex items-center gap-4"
        >
          <motion.button
            variants={fadeIn}
            className="flex items-center gap-2 bg-[#cbff00] text-black px-8 py-3 rounded-full hover:bg-opacity-90 transition-colors"
          >
            Get this Template
            <ArrowRight className="w-4 h-4" />
          </motion.button>

          <motion.a
            variants={fadeIn}
            href="#"
            className="flex items-center gap-2 text-[#cbff00] hover:underline"
          >
            All Templates
            <ArrowRight className="w-4 h-4" />
          </motion.a>
        </motion.div>

        {/* Floating Elements */}
        <motion.div
          animate={{
            rotate: [0, 360],
            y: [0, -10, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-1/4 left-1/4 text-[#cbff00] opacity-30"
        >
          Innovation
        </motion.div>

        <motion.div
          animate={{
            rotate: [0, -360],
            y: [0, 10, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-1/4 right-1/4 text-[#cbff00] opacity-30"
        >
          Creativity
        </motion.div>

        <motion.div
          animate={{
            rotate: [0, 360],
            x: [0, -10, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute bottom-1/4 left-1/4 text-[#cbff00] opacity-30"
        >
          Creation
        </motion.div>

        <motion.div
          animate={{
            rotate: [0, -360],
            x: [0, 10, 0],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute bottom-1/4 right-1/4 text-[#cbff00] opacity-30"
        >
          Perspective
        </motion.div>
      </main>
    </div>
  );
}
