import {
  Smartphone,
  LayoutGrid,
  BarChart3,
  Wrench,
  Globe,
  Zap,
  Shield,
  Palette,
  Rocket,
} from "lucide-react";
import { motion } from "framer-motion";

const mainFeatures = [
  {
    icon: <Smartphone className="w-6 h-6" />,
    title: "Responsive and Mobile-First Design",
    description: "Fully responsive websites that work perfectly on all devices",
  },
  {
    icon: <LayoutGrid className="w-6 h-6" />,
    title: "Seamless Content Management Systems",
    description: "Easy-to-use CMS for managing your website content",
  },
  {
    icon: <BarChart3 className="w-6 h-6" />,
    title: "Interactive Web Applications Solutions",
    description: "Dynamic and engaging web applications",
  },
  {
    icon: <Wrench className="w-6 h-6" />,
    title: "Ongoing Maintenance and Support",
    description: "Continuous support to keep your website running smoothly",
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: "Multilingual Website Development",
    description: "Reach global audiences with multi-language support",
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Performance Optimization",
    description: "Lightning-fast websites with optimized load times",
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Advanced Security Implementation",
    description: "Robust security measures to protect your digital assets",
  },
  {
    icon: <Palette className="w-6 h-6" />,
    title: "Custom UI/UX Design",
    description: "Unique, user-centered designs tailored to your brand",
  },
  {
    icon: <Rocket className="w-6 h-6" />,
    title: "E-commerce Solutions",
    description: "Powerful online stores with seamless checkout experiences",
  },
];

function MainFeatures() {
  return (
    <section className="min-h-screen flex items-center justify-center w-full py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
          {mainFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: "easeOut",
              }}
              className="bg-white/5 backdrop-blur-lg rounded-xl p-6 hover:bg-white/10 transition-colors duration-300 w-full"
            >
              <div className="flex items-start gap-4">
                <div className="text-[#CCFF00] bg-[#CCFF00]/10 p-3 rounded-xl flex-shrink-0">
                  {feature.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-xl font-semibold mb-2 leading-tight break-words">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default MainFeatures;
