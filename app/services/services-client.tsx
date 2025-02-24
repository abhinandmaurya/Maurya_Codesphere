"use client";

import { Navigation } from "@/components/navigation";
import { motion, Variants } from "framer-motion";
import {
  Code2,
  Palette,
  Smartphone,
  Globe,
  Rocket,
  Shield,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { FC, memo, Suspense } from "react";
import { twMerge } from "tailwind-merge";

// Animation variants
const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
  hover: { y: -10 },
};

const testimonialVariants: Variants = {
  hidden: (index: number) => ({ opacity: 0, x: index % 2 === 0 ? -30 : 30 }),
  visible: { opacity: 1, x: 0 },
};

// Types
interface Service {
  Icon: FC<{ className?: string }>;
  title: string;
  description: string;
  features: string[];
}

interface Testimonial {
  quote: string;
  author: string;
  avatar: string;
}

// Data
const services: Service[] = [
  {
    Icon: Code2,
    title: "Web Development",
    description:
      "Custom web applications built with cutting-edge technologies.",
    features: ["React/Next.js", "TypeScript", "API Integration"],
  },
  {
    Icon: Palette,
    title: "UI/UX Design",
    description: "User-centric designs that elevate brand experience.",
    features: ["Figma Prototyping", "User Testing", "Wireframing"],
  },
  {
    Icon: Smartphone,
    title: "Mobile Development",
    description: "High-performance mobile apps for iOS & Android.",
    features: ["React Native", "Swift/Kotlin", "App Store Deployment"],
  },
  {
    Icon: Globe,
    title: "Digital Marketing",
    description: "Boost your online visibility and conversions.",
    features: ["SEO Optimization", "PPC Campaigns", "Analytics"],
  },
  {
    Icon: Rocket,
    title: "Startup Solutions",
    description: "End-to-end support for launching your MVP.",
    features: ["Rapid Prototyping", "Cloud Setup", "Growth Hacking"],
  },
  {
    Icon: Shield,
    title: "Maintenance & Security",
    description: "Reliable support and robust security.",
    features: ["24/7 Monitoring", "Bug Fixes", "Security Audits"],
  },
];

const testimonials: Testimonial[] = Array.from({ length: 2 }, (_, i) => ({
  quote:
    i === 0
      ? "Their team transformed our vision into reality!"
      : "Fast delivery and exceptional quality!",
  author:
    i === 0 ? "Anuj Panchal, Anmol Farm" : "Vishal Dangi, Somya Engineers",
  avatar: `https://api.dicebear.com/7.x/identicon/svg?seed=${Math.random()
    .toString(36)
    .substring(7)}`,
}));

// Memoized Components
const ServiceCard: FC<{ service: Service; index: number }> = memo(
  ({ service, index }) => (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="rounded-2xl p-6 shadow-lg border border-gray-700 bg-black backdrop-blur-lg hover:shadow-xl transition-shadow"
    >
      <Suspense
        fallback={
          <div className="w-12 h-12 bg-gray-700 rounded animate-pulse" />
        }
      >
        <service.Icon className="w-12 h-12 text-[#CCFF00] mb-4" />
      </Suspense>
      <h3 className="text-2xl font-semibold mb-3 text-white">
        {service.title}
      </h3>
      <p className="text-gray-300 mb-4">{service.description}</p>
      <ul className="text-sm text-gray-400 space-y-2">
        {service.features.map((feature) => (
          <li key={feature} className="flex items-center gap-2">
            <span className="w-2 h-2 bg-[#CCFF00] rounded-full" />
            {feature}
          </li>
        ))}
      </ul>
    </motion.div>
  )
);
ServiceCard.displayName = "ServiceCard";

const TestimonialCard: FC<{ testimonial: Testimonial; index: number }> = memo(
  ({ testimonial, index }) => (
    <motion.div
      custom={index}
      variants={testimonialVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="p-6 rounded-xl shadow-lg border border-gray-700 bg-black hover:border-[#CCFF00] transition-colors"
    >
      <p className="text-gray-200 italic mb-4">"{testimonial.quote}"</p>
      <div className="flex items-center gap-4">
        <Image
          src={testimonial.avatar}
          alt={testimonial.author}
          width={48}
          height={48}
          className="rounded-full border-2 border-[#CCFF00]"
          loading="lazy"
          decoding="async"
        />
        <span className="font-semibold text-white">{testimonial.author}</span>
      </div>
    </motion.div>
  )
);
TestimonialCard.displayName = "TestimonialCard";

const TestimonialsSection: FC = memo(() => (
  <section className="py-20 bg-black">
    <div className="container mx-auto px-6 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-white">
        What Our Clients Say
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard
            key={index}
            testimonial={testimonial}
            index={index}
          />
        ))}
      </div>
    </div>
  </section>
));
TestimonialsSection.displayName = "TestimonialsSection";

export const ServicesClient: FC = () => (
  <div className="min-h-screen bg-black text-white">
    <header>
      <Navigation />
    </header>
    <main>
      <section className="relative pt-32 pb-16 text-center px-6">
        <h1 className="text-4xl md:text-7xl font-extrabold mb-6 text-[#CCFF00]">
          Digital Excellence Unleashed
        </h1>
        <p className="text-lg md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8">
          We craft innovative solutions that drive growth.
        </p>
        <Button
          className={twMerge(
            "bg-[#CCFF00] text-black px-8 py-3 text-lg font-semibold rounded-full",
            "hover:bg-[#B3E600] transition-colors duration-200"
          )}
        >
          Get Started
        </Button>
      </section>
      <section className="py-20 px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </section>
      <TestimonialsSection />
    </main>
  </div>
);
