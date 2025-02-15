"use client";

import { FaDocker, FaPython, FaReact } from "react-icons/fa";
import { SiFastapi, SiNextdotjs, SiOpenai, SiTailwindcss } from "react-icons/si";
import { motion } from "framer-motion";

export default function Technologies() {
  const technologies = [
    { icon: SiFastapi, title: "FastAPI", description: "High-performance asynchronous backend framework." },
    { icon: FaPython, title: "Python", description: "Powerful scripting and AI-driven solutions." },
    { icon: FaReact, title: "React", description: "Modern frontend library for dynamic user interfaces." },
    { icon: SiNextdotjs, title: "Next.js", description: "Production-ready React framework with server-side rendering." },
    { icon: SiOpenai, title: "OpenAI", description: "AI-driven capabilities with deep learning models." },
    { icon: SiTailwindcss, title: "Tailwind CSS", description: "Utility-first styling framework for fast development." },
  ];

  return (
    <div id="technology" className="min-h-screen flex flex-col items-center justify-center bg-gray-950 text-white px-6 py-24">
      {/* Header */}
      <motion.h2
        className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-blue-400 via-purple-500 to-indigo-500 text-transparent bg-clip-text text-center drop-shadow-lg"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Technologies We Use
      </motion.h2>
      <p className="text-lg text-gray-400 mt-4 max-w-3xl text-center">
        Empowering innovation with cutting-edge technologies.
      </p>

      {/* Technology Cards */}
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 w-full max-w-6xl">
        {technologies.map((tech, index) => (
          <motion.div
            key={index}
            className="relative p-8 rounded-2xl shadow-xl border border-blue-500/30 bg-gray-900/60 backdrop-blur-xl overflow-hidden flex flex-col items-center text-center hover:scale-105 transition-transform duration-500"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 * index }}
          >
            {/* Glowing Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-indigo-500/10 blur-3xl" />
            
            {/* Icon with Hover Effect */}
            <motion.div 
              className="relative p-5 rounded-full bg-gray-800/60 shadow-lg"
              whileHover={{ scale: 1.2, rotate: 10 }}
            >
              <tech.icon className="w-16 h-16 text-blue-400" />
            </motion.div>

            <h3 className="relative text-2xl font-bold text-blue-300 mt-4">{tech.title}</h3>
            <p className="relative mt-2 text-gray-300">{tech.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
