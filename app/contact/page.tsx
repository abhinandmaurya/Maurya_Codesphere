"use client";

import { useState, useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";

import { init } from "emailjs-com";
import { CardFooter } from "@/components/ui/card";
import { Navigation } from "@/components/navigation";
init(process.env.NEXT_PUBLIC_EMAILJS_USER_ID || "Dowb-VGpYUfw9X_Bx");

interface FormData {
  name: string;
  email: string;
  message: string;
}

export default function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm<FormData>({
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
    mode: "onChange",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");

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

      if (!serviceID || !templateID || !userID) {
        throw new Error("EmailJS configuration is missing");
      }

      const response = await emailjs.send(serviceID, templateID, {
        from_name: data.name,
        reply_to: data.email,
        message: data.message,
      });

      if (response.status === 200) {
        setMessage("Message sent successfully!");
        reset();
      } else {
        throw new Error(`Unexpected response status: ${response.status}`);
      }
    } catch (error) {
      setMessage("Failed to send message. Please try again later.");
      console.error("Email sending error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black opacity-90">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(255,255,255,0.1)_0%,_rgba(255,255,255,0)_100%)] opacity-20"></div>
        <div className="absolute inset-0 [background:linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:20px_20px]"></div>
      </div>
      <Navigation />
      <motion.form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-gray-900 p-8 rounded-xl shadow-lg w-full max-w-md border border-gray-800 relative z-10"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        noValidate
      >
        <h2 className="text-3xl font-bold mb-8 text-center text-white font-sans tracking-wide">
          Contact Us
        </h2>

        <div className="space-y-6">
          <motion.div
            className="mb-4"
            initial={{ x: -20 }}
            animate={{ x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <label
              className="block text-sm font-medium mb-2 text-gray-400 font-sans"
              htmlFor="name"
            >
              Name
            </label>
            <motion.input
              {...register("name", {
                required: "Name is required",
                minLength: {
                  value: 2,
                  message: "Name must be at least 2 characters",
                },
                maxLength: {
                  value: 50,
                  message: "Name cannot exceed 50 characters",
                },
              })}
              type="text"
              id="name"
              className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 disabled:opacity-50 bg-gray-800 text-white border-gray-700 focus:ring-yellow-400 transition-all duration-300 ${
                errors.name
                  ? "border-red-500 focus:ring-red-600"
                  : "border-gray-700 focus:ring-yellow-400"
              }`}
              placeholder="Your Name"
              disabled={isSubmitting}
              aria-invalid={errors.name ? "true" : "false"}
              whileFocus={{ scale: 1.02 }}
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1" role="alert">
                {errors.name.message}
              </p>
            )}
          </motion.div>

          <motion.div
            className="mb-4"
            initial={{ x: -20 }}
            animate={{ x: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <label
              className="block text-sm font-medium mb-2 text-gray-400 font-sans"
              htmlFor="email"
            >
              Email
            </label>
            <motion.input
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address",
                },
                maxLength: {
                  value: 100,
                  message: "Email cannot exceed 100 characters",
                },
              })}
              type="email"
              id="email"
              className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 disabled:opacity-50 bg-gray-800 text-white border-gray-700 focus:ring-yellow-400 transition-all duration-300 ${
                errors.email
                  ? "border-red-500 focus:ring-red-600"
                  : "border-gray-700 focus:ring-yellow-400"
              }`}
              placeholder="Your Email"
              disabled={isSubmitting}
              aria-invalid={errors.email ? "true" : "false"}
              whileFocus={{ scale: 1.02 }}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1" role="alert">
                {errors.email.message}
              </p>
            )}
          </motion.div>

          <motion.div
            className="mb-6"
            initial={{ x: -20 }}
            animate={{ x: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <label
              className="block text-sm font-medium mb-2 text-gray-400 font-sans"
              htmlFor="message"
            >
              Message
            </label>
            <motion.textarea
              {...register("message", {
                required: "Message is required",
                minLength: {
                  value: 10,
                  message: "Message must be at least 10 characters",
                },
                maxLength: {
                  value: 1000,
                  message: "Message cannot exceed 1000 characters",
                },
              })}
              id="message"
              className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 disabled:opacity-50 bg-gray-800 text-white border-gray-700 focus:ring-yellow-400 transition-all duration-300 ${
                errors.message
                  ? "border-red-500 focus:ring-red-600"
                  : "border-gray-700 focus:ring-yellow-400"
              }`}
              rows={5}
              placeholder="Your Message"
              disabled={isSubmitting}
              aria-invalid={errors.message ? "true" : "false"}
              whileFocus={{ scale: 1.02 }}
            />
            {errors.message && (
              <p className="text-red-500 text-sm mt-1" role="alert">
                {errors.message.message}
              </p>
            )}
          </motion.div>

          <motion.button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3 px-6 rounded-xl text-black font-semibold transition-all duration-300 bg-[#CCFF00] hover:bg-[#CCFF00] focus:ring-2 focus:ring-[#CCFF00]focus:outline-none disabled:opacity-50 flex items-center justify-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            {isSubmitting ? (
              <span className="flex items-center">
                <svg
                  className="animate-spin h-5 w-5 mr-2 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v8h8a8 8 0 11-8 8v-8H4z"
                  ></path>
                </svg>
                Sending...
              </span>
            ) : (
              "Send Message"
            )}
          </motion.button>

          {message && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`mt-4 text-center text-sm ${
                message.includes("successfully")
                  ? "text-green-400"
                  : "text-red-500"
              } font-sans`}
              role="status"
            >
              {message}
            </motion.p>
          )}
        </div>
      </motion.form>
    </div>
  );
}
