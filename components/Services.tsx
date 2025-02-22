import React from 'react';
import { Palette, Code2, Settings2 } from 'lucide-react'; // Assuming you're using lucide-react for icons
import { motion } from 'framer-motion'; // Import motion from framer-motion
import { Button } from "../components/ui/button"; // Assuming you have a Button component

const services = [
  {
    icon: <Palette className="w-8 h-8" />,
    title: "Design Services",
    description: "At LandFree, our design team is passionate about creating stunning",
    skills: ["UI & UX Design", "Graphic Design", "Branding", "Web Design", "Carousel Design"]
  },
  {
    icon: <Code2 className="w-8 h-8" />,
    title: "Engineering Services",
    description: "Empowering progress through meticulous engineering services",
    skills: ["Web development", "App Development", "Node.js", "React.js", "My SQL", "Firebase"]
  },
  {
    icon: <Settings2 className="w-8 h-8" />,
    title: "Management Services",
    description: "Efficiently navigate the success with our project management services",
    skills: ["Risks management", "Resource management", "Quality Control", "Project Planning"]
  }
];

const Services = () => {
  return (
    // Services Section
    <section className="min-h-screen flex items-center justify-center py-12">
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Discover our full range of services</h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
            Maurya Codesphere offers a diverse array of expertly crafted services, seamlessly merging
            creativity and technology to deliver solutions that exceed expectations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-lg rounded-xl p-6 flex flex-col h-full"
            >
              <div className="text-[#CCFF00] mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-400 mb-4 text-sm flex-grow">{service.description}</p>
              <div className="space-y-2 mb-6">
                <div className="flex flex-wrap gap-2">
                  {service.skills.map((skill) => (
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;