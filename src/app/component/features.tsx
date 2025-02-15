"use client";

import { motion } from "framer-motion";
import { Cpu, ShieldCheck, Globe, Code2, Sparkles } from "lucide-react";
import { useState, useEffect } from "react";

export function NeoAIShowcase() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [windowWidth, setWindowWidth] = useState(0);
  const [windowHeight, setWindowHeight] = useState(0);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setWindowWidth(window.innerWidth);
      setWindowHeight(window.innerHeight);

      const handleMouseMove = (e: MouseEvent) => {
        setMousePosition({ x: e.clientX, y: e.clientY });
      };

      window.addEventListener("mousemove", handleMouseMove);
      return () => window.removeEventListener("mousemove", handleMouseMove);
    }
  }, []);

  const features = [
    { icon: Cpu, title: "Hyper AI Processing", description: "Unleashing unprecedented computing power." },
    { icon: ShieldCheck, title: "AI-Powered Security", description: "Protecting data with next-gen intelligence." },
    { icon: Globe, title: "Global AI Solutions", description: "Connecting the world through AI-driven insights." },
    { icon: Code2, title: "Seamless AI Deployment", description: "Effortless integration for real-world applications." },
  ];

  return (
    <div className="relative min-h-screen flex items-center justify-center text-center bg-gray-900 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-gray-800 to-black opacity-70" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(28,100,242,0.2)_0%,transparent_70%)]" />

      {/* Animated Particles */}
      {[...Array(25)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-blue-500 rounded-full opacity-50"
          initial={{ x: Math.random() * windowWidth, y: Math.random() * windowHeight, opacity: 0 }}
          animate={{ x: Math.random() * windowWidth, y: Math.random() * windowHeight, opacity: [0, 0.6, 0], scale: [0, 1, 0] }}
          transition={{ duration: 6 + Math.random() * 8, repeat: Infinity, ease: "linear" }}
        />
      ))}

      <div className="relative max-w-7xl px-8 py-20 z-10">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="flex items-center justify-center space-x-2">
          <Sparkles className="w-6 h-6 text-blue-400" />
          <span className="text-blue-400 font-semibold tracking-wide">THE NEXT EVOLUTION IN AI</span>
        </motion.div>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-6xl md:text-8xl font-extrabold tracking-tight text-white mt-6 bg-gradient-to-r from-blue-400 via-cyan-500 to-indigo-500 text-transparent bg-clip-text"
        >
          Meet Neo AI
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-lg md:text-xl text-gray-300 mt-4 max-w-3xl mx-auto"
        >
          Redefining intelligence with cutting-edge AI solutions that revolutionize industries.
        </motion.p>

        {/* Features Section */}
        <motion.div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="p-8 bg-gray-800 border border-blue-500/30 rounded-xl shadow-lg hover:border-blue-500/50 hover:scale-105 transition-all duration-300"
            >
              <feature.icon className="w-12 h-12 text-blue-400 mb-6" />
              <h3 className="text-2xl font-semibold text-blue-300">{feature.title}</h3>
              <p className="text-gray-300 mt-2">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
