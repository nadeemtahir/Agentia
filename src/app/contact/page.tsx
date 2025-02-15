"use client";

import { motion } from "framer-motion";
import { useState, ChangeEvent, FormEvent } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div id="contact" className="min-h-screen flex flex-col items-center justify-center px-6 py-24 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      
      {/* Heading */}
      <motion.h2
        className="text-6xl md:text-7xl font-extrabold bg-gradient-to-r from-blue-400 to-cyan-500 text-transparent bg-clip-text text-center drop-shadow-lg mb-6"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Get in Touch
      </motion.h2>
      
      <p className="text-lg text-gray-300 max-w-2xl text-center mb-8">
        {`We're here to help! Send us a message and we'll get back to you soon.`}
      </p>

      {/* Form */}
      <motion.form
        onSubmit={handleSubmit}
        className="relative mt-6 w-full max-w-3xl bg-gray-900/50 border border-blue-400/30 rounded-3xl p-10 shadow-2xl backdrop-blur-lg overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Background Glow Effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-cyan-400/10 blur-3xl"></div>

        {/* Inputs */}
        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-6">
          {["name", "email"].map((field, idx) => (
            <div key={idx} className="relative">
              <input
                type={field === "email" ? "email" : "text"}
                name={field}
                value={formData[field as keyof typeof formData]}
                onChange={handleChange}
                required
                placeholder=""
                className="peer w-full p-4 bg-gray-800/60 text-white border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-md transition-all duration-300"
              />
              <label
                className={`absolute left-4 top-4 text-gray-400 text-sm transition-all ${
                  formData[field as keyof typeof formData] ? "top-2 text-xs text-blue-400" : "peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-lg peer-placeholder-shown:text-gray-500 peer-focus:top-2 peer-focus:text-xs peer-focus:text-blue-400"
                }`}
              >
                {field === "name" ? "Your Name" : "Your Email"}
              </label>
            </div>
          ))}
        </div>

        {/* Subject Input */}
        <div className="relative mt-6">
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            placeholder=""
            className="peer w-full p-4 bg-gray-800/60 text-white border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-md transition-all duration-300"
          />
          <label
            className={`absolute left-4 top-4 text-gray-400 text-sm transition-all ${
              formData.subject ? "top-2 text-xs text-blue-400" : "peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-lg peer-placeholder-shown:text-gray-500 peer-focus:top-2 peer-focus:text-xs peer-focus:text-blue-400"
            }`}
          >
            Subject
          </label>
        </div>

        {/* Message Textarea */}
        <div className="relative mt-6">
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            placeholder=""
            className="peer w-full p-4 bg-gray-800/60 text-white border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 h-36 resize-none shadow-md transition-all duration-300"
          />
          <label
            className={`absolute left-4 top-4 text-gray-400 text-sm transition-all ${
              formData.message ? "top-2 text-xs text-blue-400" : "peer-placeholder-shown:top-4 peer-placeholder-shown:text-lg peer-placeholder-shown:text-gray-500 peer-focus:top-2 peer-focus:text-xs peer-focus:text-blue-400"
            }`}
          >
            Your Message
          </label>
        </div>

        {/* Submit Button */}
        <motion.button
          whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px rgba(0, 191, 255, 0.8)" }}
          whileTap={{ scale: 0.95 }}
          type="submit"
          className="relative mt-6 w-full bg-gradient-to-r from-blue-400 to-cyan-500 text-white font-semibold py-4 rounded-xl shadow-lg transition-all duration-300 hover:from-blue-500 hover:to-cyan-600 hover:shadow-2xl"
        >
          Send Message
        </motion.button>

        {/* Success Message */}
        {submitted && (
          <motion.div
            className="absolute inset-0 flex items-center justify-center bg-gray-900/90 rounded-3xl"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <motion.p
              className="text-lg text-green-400 font-semibold"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              ✅ Your message has been sent!
            </motion.p>
          </motion.div>
        )}
      </motion.form>
    </div>
  );
}
