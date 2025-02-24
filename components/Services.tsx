import React from "react";
import { Palette, Code2, Settings2 } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "../components/ui/button";

interface Service {
  icon: JSX.Element;
  title: string;
  description: string;
  skills: string[];
}

const services: Service[] = [
  {
    icon: <Palette className="w-8 h-8" />,
    title: "Design Services",
    description:
      "At LandFree, our design team is passionate about creating stunning",
    skills: [
      "UI & UX Design",
      "Graphic Design",
      "Branding",
      "Web Design",
      "Carousel Design",
    ],
  },
  {
    icon: <Code2 className="w-8 h-8" />,
    title: "Engineering Services",
    description: "Empowering progress through meticulous engineering services",
    skills: [
      "Web development",
      "App Development",
      "Node.js",
      "React.js",
      "My SQL",
      "Firebase",
    ],
  },
  {
    icon: <Settings2 className="w-8 h-8" />,
    title: "Management Services",
    description:
      "Efficiently navigate the success with our project management services",
    skills: [
      "Risks management",
      "Resource management",
      "Quality Control",
      "Project Planning",
    ],
  },
];

// Card animation variants
const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const ServiceCard: React.FC<Service> = React.memo(
  ({ icon, title, description, skills }) => {
    return (
      <motion.div
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="bg-white/5 backdrop-blur-lg rounded-xl p-6 flex flex-col h-full"
      >
        <div className="text-[#CCFF00] mb-4">{icon}</div>
        <h3 className="text-xl font-bold mb-3">{title}</h3>
        <p className="text-gray-400 mb-4 text-sm flex-grow">{description}</p>
        <div className="space-y-2 mb-6">
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <div
                key={skill}
                className="bg-white/5 rounded-lg px-3 py-1 text-sm whitespace-nowrap"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
        <Button className="w-full bg-[#CCFF00] text-black hover:bg-[#CCFF00]/90 text-sm mt-auto">
          Book a Call
        </Button>
      </motion.div>
    );
  }
);

const Services: React.FC = () => {
  // Container animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <section className="min-h-screen flex items-center justify-center py-12">
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-[#CCFF00]">
            Discover our full range of services
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
            Maurya Codesphere offers a diverse array of expertly crafted
            services, seamlessly merging creativity and technology to deliver
            solutions that exceed expectations.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
