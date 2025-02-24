"use client";
import { useState, useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "emailjs-com";
import { Send, Loader2 } from "lucide-react";
import { Navigation } from "@/components/navigation";

interface FormData {
  name: string;
  email: string;
  country: string;
  phone: string;
  message: string;
  service: string;
  budget: string;
  scheduling: string;
  contactMethod: string;
}

export default function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors, isSubmitSuccessful },
  } = useForm<FormData>();

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");
  const [selectedService, setSelectedService] = useState("");
  const [selectedBudget, setSelectedBudget] = useState("");

  useEffect(() => {
    if (isSubmitSuccessful && message.includes("successfully")) {
      const timer = setTimeout(() => {
        setMessage("");
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [isSubmitSuccessful, message]);

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    setIsSubmitting(true);
    setMessage("");

    try {
      const serviceID =
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "service_9q34gv9";
      const templateID =
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "template_ns484v8";
      const userID =
        process.env.NEXT_PUBLIC_EMAILJS_USER_ID || "Dowb-VGpYUfw9X_Bx";

      const response = await emailjs.send(
        serviceID,
        templateID,
        {
          from_name: data.name,
          reply_to: data.email,
          message: `Service: ${data.service}\nBudget: ${data.budget}\nCountry: ${data.country}\nPhone: ${data.phone}\nNeeds: ${data.message}\nScheduling: ${data.scheduling}\nPreferred Contact Method: ${data.contactMethod}`,
        },
        userID
      );

      if (response.status === 200) {
        setMessage("Message sent successfully!");
        reset();
        setSelectedService("");
        setSelectedBudget("");
      }
    } catch (error) {
      setMessage("Failed to send message. Please try again later.");
      console.error("Email sending error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  const services = [
    "AI Consultation",
    "Website Design",
    "Website Redesign",
    "Web Application",
    "SEO/Digital Marketing",
    "Custom Web Development",
  ];

  const budgets = [
    "$500 - $1K",
    "$1K - $5K",
    "$5K - $10K",
    "$10K+",
    "Not Sure",
  ];

  return (
    <div className="min-h-screen flex items-center justify-center p-4 md:p-8 relative overflow-hidden bg-black">
      <Navigation />
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute w-[500px] h-[500px] bg-yellow-500/10 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            top: "10%",
            left: "20%",
          }}
        />
        <motion.div
          className="absolute w-[400px] h-[400px] bg-yellow-500/10 rounded-full blur-3xl"
          animate={{
            x: [0, -50, 0],
            y: [0, 100, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            bottom: "20%",
            right: "10%",
          }}
        />
      </div>

      <motion.form
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="w-full max-w-4xl bg-black/60 backdrop-blur-xl p-8 md:p-12 rounded-2xl shadow-2xl border border-yellow-500/20 relative z-10"
        onSubmit={handleSubmit(onSubmit)}
      >
        <motion.h2
          variants={itemVariants}
          className="text-4xl md:text-5xl font-bold mb-12 text-center text-yellow-500"
        >
          Let's Connect
        </motion.h2>

        {/* Service Selection */}
        <motion.div variants={itemVariants} className="mb-8">
          <label className="block text-lg font-medium mb-4 text-white">
            What service are you interested in?
          </label>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {services.map((service) => (
              <motion.button
                key={service}
                type="button"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`p-4 rounded-xl text-sm md:text-base transition-all duration-300 ${
                  selectedService === service
                    ? "bg-yellow-500 text-black font-medium"
                    : "bg-black/20 text-white hover:bg-yellow-500/20"
                }`}
                onClick={() => {
                  setSelectedService(service);
                  setValue("service", service);
                }}
              >
                {service}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Budget Selection */}
        <motion.div variants={itemVariants} className="mb-8">
          <label className="block text-lg font-medium mb-4 text-white">
            What's your budget range?
          </label>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {budgets.map((budget) => (
              <motion.button
                key={budget}
                type="button"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`p-4 rounded-xl text-sm md:text-base transition-all duration-300 ${
                  selectedBudget === budget
                    ? "bg-yellow-500 text-black font-medium"
                    : "bg-black/20 text-white hover:bg-yellow-500/20"
                }`}
                onClick={() => {
                  setSelectedBudget(budget);
                  setValue("budget", budget);
                }}
              >
                {budget}
              </motion.button>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div variants={itemVariants}>
            <input
              {...register("name", { required: "Name is required" })}
              className="w-full p-4 bg-black/20 rounded-xl border border-yellow-500/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all duration-300"
              placeholder="Your Name"
            />
            {errors.name && (
              <span className="text-yellow-400 text-sm mt-1">
                {errors.name.message}
              </span>
            )}
          </motion.div>

          <motion.div variants={itemVariants}>
            <input
              {...register("email", { required: "Email is required" })}
              className="w-full p-4 bg-black/20 rounded-xl border border-yellow-500/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all duration-300"
              placeholder="Your Email"
              type="email"
            />
            {errors.email && (
              <span className="text-yellow-400 text-sm mt-1">
                {errors.email.message}
              </span>
            )}
          </motion.div>
        </div>

        <motion.div variants={itemVariants} className="mt-6">
          <textarea
            {...register("message", { required: "Message is required" })}
            className="w-full p-4 bg-black/20 rounded-xl border border-yellow-500/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all duration-300"
            placeholder="Tell us about your project..."
            rows={6}
          />
          {errors.message && (
            <span className="text-yellow-400 text-sm mt-1">
              {errors.message.message}
            </span>
          )}
        </motion.div>

        <motion.button
          variants={itemVariants}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          type="submit"
          disabled={isSubmitting}
          className="mt-8 w-full p-4 bg-yellow-500 rounded-xl text-black font-medium flex items-center justify-center gap-2 disabled:opacity-50 hover:bg-yellow-600"
        >
          {isSubmitting ? (
            <Loader2 className="w-5 h-5 animate-spin text-black" />
          ) : (
            <>
              <Send className="w-5 h-5 text-black" />
              Send Message
            </>
          )}
        </motion.button>

        {message && (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className={`mt-4 text-center ${
              message.includes("successfully")
                ? "text-green-400"
                : "text-yellow-400"
            }`}
          >
            {message}
          </motion.p>
        )}
      </motion.form>
    </div>
  );
}
