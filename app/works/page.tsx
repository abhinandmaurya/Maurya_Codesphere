"use client";

import { Navigation } from "@/components/navigation";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useMemo } from "react";

// Types
interface Work {
  title: string;
  category: string;
  image: string;
  description: string;
  technologies: string[];
}

// Data
const works: Work[] = [
  {
    title: "Luxury Fashion Store",
    category: "E-commerce",
    image:
      "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?auto=format&fit=crop&w=800&q=80",
    description:
      "A premium e-commerce platform with advanced filtering and AR try-on features",
    technologies: ["Next.js", "Shopify", "ThreeJS", "Stripe"],
  },
  {
    title: "Corporate SaaS Dashboard",
    category: "Web Application",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    description:
      "Enterprise-grade analytics dashboard with real-time data visualization",
    technologies: ["React", "D3.js", "WebSocket", "AWS"],
  },
  {
    title: "Creative Agency Site",
    category: "Web Design",
    image:
      "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?auto=format&fit=crop&w=800&q=80",
    description:
      "Award-winning portfolio with smooth animations and bold typography",
    technologies: ["Next.js", "GSAP", "Tailwind CSS", "Framer Motion"],
  },
  {
    title: "Healthcare Booking System",
    category: "Web Application",
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80",
    description: "Secure patient management system with appointment scheduling",
    technologies: ["React", "Node.js", "PostgreSQL", "Twilio"],
  },
  {
    title: "Tech Startup Landing",
    category: "Web Development",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
    description:
      "Conversion-optimized landing page with interactive 3D elements",
    technologies: ["Next.js", "Three.js", "GSAP", "Vercel"],
  },
  {
    title: "Educational Platform",
    category: "LMS Development",
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80",
    description: "Interactive learning management system with gamification",
    technologies: ["React", "Firebase", "Socket.io", "WebRTC"],
  },
  {
    title: "Restaurant Booking App",
    category: "Web & Mobile",
    image:
      "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=800&q=80",
    description: "Cross-platform reservation system with menu integration",
    technologies: ["React Native", "Node.js", "MongoDB", "Stripe"],
  },
  {
    title: "Fitness Community",
    category: "Social Platform",
    image:
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=800&q=80",
    description: "Social fitness platform with workout tracking and challenges",
    technologies: ["Next.js", "Supabase", "WebRTC", "TensorFlow.js"],
  },
  {
    title: "Real Estate Platform",
    category: "Web Application",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80",
    description:
      "Advanced property search with virtual tours and mortgage calculator",
    technologies: ["Next.js", "MapboxGL", "Prisma", "AWS S3"],
  },
  {
    title: "Digital Art Marketplace",
    category: "E-commerce",
    image:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    description: "NFT marketplace with crypto payments and artist profiles",
    technologies: ["React", "Ethereum", "IPFS", "Web3.js"],
  },
  {
    title: "Travel Booking Platform",
    category: "Web & Mobile",
    image:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=800&q=80",
    description: "Comprehensive travel booking system with AI recommendations",
    technologies: ["Next.js", "Node.js", "PostgreSQL", "TensorFlow"],
  },
  {
    title: "Music Streaming App",
    category: "Web Application",
    image:
      "https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=800&q=80",
    description: "High-performance audio streaming with social features",
    technologies: ["React", "WebAudio API", "Redis", "Socket.io"],
  },
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function Works() {
  const [filter, setFilter] = useState<string>("All");
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const categories = useMemo(
    () => ["All", ...Array.from(new Set(works.map((work) => work.category)))],
    []
  );

  const filteredWorks = useMemo(
    () =>
      filter === "All"
        ? works
        : works.filter((work) => work.category === filter),
    [filter]
  );

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />

      <main className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            className="text-center mb-16"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#CCFF00] to-[#99FF33]">
              Our Portfolio
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
              Discover our cutting-edge digital solutions crafted for innovative
              businesses worldwide
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-4 py-2 rounded-full text-sm md:text-base font-medium transition-colors duration-300 ${
                  filter === category
                    ? "bg-[#cbff00] text-black"
                    : "bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-[#CCFF00]"
                }`}
                aria-pressed={filter === category}
              >
                {category}
              </button>
            ))}
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredWorks.map((work, index) => (
              <motion.div
                key={work.title}
                variants={itemVariants}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-[#CCFF00]/20"
              >
                <div className="relative aspect-[4/3]">
                  <Image
                    src={work.image}
                    alt={work.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    loading={index > 5 ? "lazy" : "eager"}
                    priority={index <= 2}
                  />
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent flex flex-col justify-end p-4 sm:p-6"
                    animate={{ opacity: hoveredIndex === index ? 1 : 0.5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2">
                      {work.title}
                    </h3>
                    <p className="text-[#cbff00] text-sm md:text-base mb-2">
                      {work.category}
                    </p>
                    <p className="text-xs sm:text-sm text-gray-300 mb-4 line-clamp-2">
                      {work.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {work.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs px-2 py-1 bg-white/10 rounded-full text-gray-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </main>
    </div>
  );
}
