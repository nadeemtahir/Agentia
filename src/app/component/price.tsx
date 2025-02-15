"use client";

import { motion } from "framer-motion";
import { CheckCircle, Star } from "lucide-react";

const pricingPlans = [
  {
    name: "Starter",
    price: "$0",
    description: "Perfect for individuals exploring AI capabilities.",
    features: ["Basic AI Tools", "Limited Queries", "Community Support"],
    buttonText: "Get Started",
  },
  {
    name: "Pro",
    price: "$49/mo",
    description: "Advanced tools for professionals and businesses.",
    features: ["Unlimited Queries", "Priority Support", "Custom AI Models"],
    buttonText: "Upgrade Now",
  },
  {
    name: "Enterprise",
    price: "Custom Pricing",
    description: "Scalable solutions for large-scale applications.",
    features: ["Dedicated AI Agents", "24/7 Support", "Advanced Security"],
    buttonText: "Contact Sales",
  },
];

export default function PricingSection() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white px-6 py-20 flex flex-col items-center">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h1 className="text-5xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-500">
          Pricing Tailored for You
        </h1>
        <p className="text-xl text-gray-400 mt-4 max-w-2xl mx-auto">
          Choose a plan that suits your needs and scale effortlessly.
        </p>
      </motion.div>

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
        {pricingPlans.map((plan, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 * index }}
            className={`relative p-8 rounded-2xl shadow-xl border border-gray-700 bg-gray-800 overflow-hidden transform hover:scale-105 transition duration-500 ${
              plan.name === "Pro" ? "border-blue-500" : ""
            }`}
          >
            {plan.name === "Pro" && (
              <div className="absolute top-4 right-4 bg-blue-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                <Star className="w-4 h-4 inline mr-1" /> Most Popular
              </div>
            )}
            <h2 className="text-3xl font-bold text-blue-300">{plan.name}</h2>
            <p className="mt-2 text-gray-400">{plan.description}</p>
            <p className="mt-4 text-5xl font-extrabold text-white">{plan.price}</p>

            <ul className="mt-6 space-y-3 text-gray-300">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-blue-400" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative mt-6 w-full py-3 text-lg font-semibold rounded-lg shadow-lg bg-gradient-to-r from-blue-500 to-indigo-500 text-white hover:from-blue-600 hover:to-indigo-600 transition-all"
            >
              {plan.buttonText}
            </motion.button>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
