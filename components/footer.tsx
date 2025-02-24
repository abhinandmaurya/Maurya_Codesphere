"use client";

import { motion } from "framer-motion";
import {
  Facebook,
  Linkedin,
  Twitter,
  ExternalLink,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import React from "react";

// Define types for social links and contact info
interface SocialLinkType {
  icon: React.ElementType; // Changed to ElementType
  label: string;
  handle: string;
  href: string;
}

interface ContactInfoType {
  icon: React.ElementType; // Changed to ElementType
  label: string;
  value: string;
  href?: string;
}

const socialLinks: SocialLinkType[] = [
  {
    icon: Linkedin,
    label: "Linkedin",
    handle: "@Maurya_Codesphere",
    href: "https://linkedin.com",
  },
  {
    icon: Twitter,
    label: "Twitter",
    handle: "@Maurya_Codesphere",
    href: "https://x.com/MCodesphere",
  },
  {
    icon: Facebook,
    label: "Facebook",
    handle: "@Maurya_Codesphere",
    href: "https://www.facebook.com/profile.php?id=61573744792805",
  },
];

const contactInfo: ContactInfoType[] = [
  {
    icon: Mail,
    label: "Email",
    value: "mauryacodesphere@gmail.com",
    href: "mailto:mauryacodesphere@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 9408609309 ; +91 8320771431",
    href: "tel:+919408609309",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "95, Vatva Ring Road, Ahmedabad, 382445",
  },
];

const SocialLink: React.FC<{ social: SocialLinkType; index: number }> =
  React.memo(({ social, index }) => {
    const { icon: Icon, label, handle, href } = social;
    return (
      <motion.a
        key={label}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-between p-3 rounded-lg bg-zinc-900 hover:bg-zinc-800 transition-colors duration-200 w-full max-w-[300px] mx-auto sm:mx-0"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.1 }}
        whileHover={{ scale: 1.02 }}
      >
        <div className="flex items-center gap-2 min-w-0">
          <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-[#CCFF00] flex-shrink-0" />
          <div className="min-w-0">
            <p className="font-medium text-xs sm:text-sm truncate">{label}</p>
            <p className="text-xs text-zinc-400 truncate hidden sm:block">
              {handle}
            </p>
          </div>
        </div>
        <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 text-[#CCFF00] flex-shrink-0" />
      </motion.a>
    );
  });

const ContactInfo: React.FC<{ info: ContactInfoType; index: number }> =
  React.memo(({ info, index }) => {
    const { icon: Icon, label, value, href } = info;
    return (
      <motion.div
        key={label}
        className="flex items-start gap-3 sm:gap-4"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: index * 0.1 }}
      >
        <div className="p-2 sm:p-3 rounded-full bg-zinc-900 flex-shrink-0">
          <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-[#CCFF00]" />
        </div>
        <div className="min-w-0">
          <h3 className="text-base sm:text-lg font-medium text-[#CCFF00]">
            {label}
          </h3>
          {href ? (
            <a
              href={href}
              className="text-zinc-400 hover:text-[#CCFF00] transition-colors duration-200 text-sm sm:text-base break-words"
            >
              {value}
            </a>
          ) : (
            <p className="text-zinc-400 text-sm sm:text-base break-words">
              {value}
            </p>
          )}
        </div>
      </motion.div>
    );
  });

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-8 md:py-16 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <div className="space-y-8 md:space-y-12">
            {/* Social Links */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {socialLinks.map((social, index) => (
                <SocialLink key={social.label} social={social} index={index} />
              ))}
            </div>

            {/* Contact Information */}
            <div className="space-y-4 sm:space-y-6">
              {contactInfo.map((info, index) => (
                <ContactInfo key={info.label} info={info} index={index} />
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <motion.div
            className="bg-zinc-900 p-6 sm:p-8 rounded-2xl w-full"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h2 className="text-xl sm:text-2xl font-bold mb-6 text-[#CCFF00]">
              Have an Idea? Let us Know
            </h2>
            <form className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Input
                  placeholder="Name"
                  className="bg-zinc-800 border-zinc-700 text-white placeholder:text-zinc-500 w-full"
                />
                <Input
                  placeholder="Email"
                  type="email"
                  className="bg-zinc-800 border-zinc-700 text-white placeholder:text-zinc-500 w-full"
                />
              </div>
              <Textarea
                placeholder="Project Details"
                className="bg-zinc-800 border-zinc-700 text-white placeholder:text-zinc-500 min-h-[100px] sm:min-h-[120px] w-full"
              />
              <Button className="w-full bg-[#CCFF00] text-black hover:bg-[#b3e600] transition-colors duration-200 font-medium">
                Send Your Message
              </Button>
            </form>
          </motion.div>
        </div>

        {/* Footer Bottom */}
        <motion.div
          className="flex flex-col sm:flex-row justify-between items-center mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-zinc-800 text-center sm:text-left"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <p className="text-zinc-400 text-sm sm:text-base mb-4 sm:mb-0">
            © 2025 Maurya CodeSphere. All rights reserved.
          </p>
          <p className="text-zinc-400 text-sm sm:text-base">
            Template by Abhinand Maurya
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
