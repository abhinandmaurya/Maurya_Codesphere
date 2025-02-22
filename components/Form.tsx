import { useState, useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";

import { init } from "emailjs-com";
init(process.env.NEXT_PUBLIC_EMAILJS_USER_ID || "Dowb-VGpYUfw9X_Bx");

interface FormData {
  name: string;
  email: string;
  message: string;
}

export default function ContactForm() {
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
    <div className="min-h-screen flex items-center justify-center bg-black">
      <motion.form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-gray-900 p-8 rounded-lg shadow-md w-full max-w-md border border-gray-800"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        noValidate
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-white font-sans">
          Contact Us
        </h2>

        <div className="mb-4">
          <label
            className="block text-sm font-medium mb-2 text-gray-400 font-sans"
            htmlFor="name"
          >
            Name
          </label>
          <input
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
            className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 disabled:opacity-50 bg-gray-800 text-white border-gray-700 focus:ring-yellow-400 ${
              errors.name
                ? "border-red-500 focus:ring-red-600"
                : "border-gray-700 focus:ring-yellow-400"
            }`}
            placeholder="Your Name"
            disabled={isSubmitting}
            aria-invalid={errors.name ? "true" : "false"}
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1" role="alert">
              {errors.name.message}
            </p>
          )}
        </div>

        <div className="mb-4">
          <label
            className="block text-sm font-medium mb-2 text-gray-400 font-sans"
            htmlFor="email"
          >
            Email
          </label>
          <input
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
            className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 disabled:opacity-50 bg-gray-800 text-white border-gray-700 focus:ring-yellow-400 ${
              errors.email
                ? "border-red-500 focus:ring-red-600"
                : "border-gray-700 focus:ring-yellow-400"
            }`}
            placeholder="Your Email"
            disabled={isSubmitting}
            aria-invalid={errors.email ? "true" : "false"}
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1" role="alert">
              {errors.email.message}
            </p>
          )}
        </div>

        <div className="mb-6">
          <label
            className="block text-sm font-medium mb-2 text-gray-400 font-sans"
            htmlFor="message"
          >
            Message
          </label>
          <textarea
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
            className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 disabled:opacity-50 bg-gray-800 text-white border-gray-700 focus:ring-yellow-400 ${
              errors.message
                ? "border-red-500 focus:ring-red-600"
                : "border-gray-700 focus:ring-yellow-400"
            }`}
            rows={4}
            placeholder="Your Message"
            disabled={isSubmitting}
            aria-invalid={errors.message ? "true" : "false"}
          />
          {errors.message && (
            <p className="text-red-500 text-sm mt-1" role="alert">
              {errors.message.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full py-2 px-4 rounded-lg text-white transition duration-300 disabled:opacity-50 bg-yellow-400 hover:bg-yellow-500 focus:ring-2 focus:ring-yellow-300 focus:outline-none`}
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>

        {message && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
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
      </motion.form>
    </div>
  );
}
