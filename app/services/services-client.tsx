"use client";

import { Navigation } from "@/components/navigation";
import { motion } from "framer-motion";
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
import { FC } from "react";

const getRandomAvatar = (): string => {
  const randomSeed = Math.random().toString(36).substring(7);
  return `https://api.dicebear.com/7.x/identicon/svg?seed=${randomSeed}`;
};

interface Service {
  icon: JSX.Element;
  title: string;
  description: string;
  features: string[];
}

const services: Service[] = [
  {
    icon: <Code2 className="w-12 h-12" />,
    title: "Web Development",
    description:
      "Custom web applications built with cutting-edge technologies.",
    features: ["React/Next.js", "TypeScript", "API Integration"],
  },
  {
    icon: <Palette className="w-12 h-12" />,
    title: "UI/UX Design",
    description: "User-centric designs that elevate brand experience.",
    features: ["Figma Prototyping", "User Testing", "Wireframing"],
  },
  {
    icon: <Smartphone className="w-12 h-12" />,
    title: "Mobile Development",
    description: "High-performance mobile apps for iOS & Android.",
    features: ["React Native", "Swift/Kotlin", "App Store Deployment"],
  },
  {
    icon: <Globe className="w-12 h-12" />,
    title: "Digital Marketing",
    description: "Boost your online visibility and conversions.",
    features: ["SEO Optimization", "PPC Campaigns", "Analytics"],
  },
  {
    icon: <Rocket className="w-12 h-12" />,
    title: "Startup Solutions",
    description: "End-to-end support for launching your MVP.",
    features: ["Rapid Prototyping", "Cloud Setup", "Growth Hacking"],
  },
  {
    icon: <Shield className="w-12 h-12" />,
    title: "Maintenance & Security",
    description: "Reliable support and robust security.",
    features: ["24/7 Monitoring", "Bug Fixes", "Security Audits"],
  },
];

interface Testimonial {
  quote: string;
  author: string;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    quote: "Their team transformed our vision into reality!",
    author: "Anuj Panchal, Anmol Farm",
    avatar: getRandomAvatar(),
  },
  {
    quote: "Fast delivery and exceptional quality!",
    author: "Vishal Dangi, Somya Engineers",
    avatar: getRandomAvatar(),
  },
];

const ServiceCard: FC<{ service: Service; index: number }> = ({
  service,
  index,
}) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    whileHover={{ y: -10 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="bg-black backdrop-blur-lg rounded-2xl p-6 shadow-lg hover:shadow-xl border border-gray-700 transition-all"
  >
    <div className="text-[#CCFF00] mb-4">{service.icon}</div>
    <h3 className="text-2xl font-semibold mb-3 text-white">{service.title}</h3>
    <p className="text-gray-300 mb-4">{service.description}</p>
    <ul className="text-sm text-gray-400 space-y-2">
      {service.features.map((feature) => (
        <li key={feature} className="flex items-center gap-2">
          <span className="w-2 h-2 bg-[#CCFF00] rounded-full"></span>
          {feature}
        </li>
      ))}
    </ul>
  </motion.div>
);

const TestimonialsSection: FC = () => (
  <section className="py-20 bg-black">
    <div className="container mx-auto px-6 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-white">
        What Our Clients Say
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="bg-black p-6 rounded-xl shadow-lg border border-gray-700 hover:border-[#CCFF00] transition-colors"
          >
            <p className="text-gray-200 italic mb-4">"{testimonial.quote}"</p>
            <div className="flex items-center gap-4">
              <Image
                src={testimonial.avatar}
                alt={testimonial.author}
                width={48}
                height={48}
                className="rounded-full border-2 border-[#CCFF00]"
              />
              <span className="font-semibold text-white">
                {testimonial.author}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export const ServicesClient: FC = () => (
  <div className="min-h-screen bg-black text-white">
    <Navigation />
    <section className="relative pt-32 pb-16 text-center px-6">
      <h1 className="text-4xl md:text-7xl font-extrabold mb-6 text-[#CCFF00]">
        Digital Excellence Unleashed
      </h1>
      <p className="text-lg md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8">
        We craft innovative solutions that drive growth.
      </p>
      <Button className="bg-[#CCFF00] text-black px-8 py-3 text-lg font-semibold rounded-full hover:bg-[#B3E600]">
        Get Started
      </Button>
    </section>
    <section className="py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
      {services.map((service, index) => (
        <ServiceCard key={index} service={service} index={index} />
      ))}
    </section>
    <TestimonialsSection />
  </div>
);
