"use client";

import { motion } from "framer-motion";
import { Sparkles, Rocket, Lightbulb, TrendingUp, ShieldCheck } from "lucide-react";
import { useState, useEffect } from "react";

export function Hero() {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [windowWidth, setWindowWidth] = useState(0);
  const [windowHeight, setWindowHeight] = useState(0);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setWindowWidth(window.innerWidth);
      setWindowHeight(window.innerHeight);

      const handleMouseMove = (e: { clientX: any; clientY: any; }) => {
        setMousePosition({ x: e.clientX, y: e.clientY });
      };

      window.addEventListener("mousemove", handleMouseMove);

      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
      };
    }
  }, []);

  const benefitCards = [
    { icon: Lightbulb, title: "Innovation", description: "Pioneering the future with cutting-edge AI solutions." },
    { icon: Rocket, title: "Acceleration", description: "Boosting productivity through intelligent automation." },
    { icon: TrendingUp, title: "Growth", description: "Empowering businesses with smart analytics." },
    { icon: ShieldCheck, title: "Security", description: "Ensuring safe and reliable AI-driven solutions." },
  ];

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center text-center bg-gray-950 px-6 lg:px-16 overflow-hidden">
      {/* Dynamic Background */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-gray-950 via-blue-900 to-gray-950"
        style={{
          backgroundImage: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(0, 200, 255, 0.2) 0%, rgba(15, 23, 42, 0.08) 40%, transparent 60%)`,
        }}
      />

      {/* Animated Particles */}
      {[...Array(25)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-3 h-3 bg-cyan-400 rounded-full shadow-lg"
          initial={{ x: Math.random() * windowWidth, y: Math.random() * windowHeight, opacity: 0 }}
          animate={{ x: Math.random() * windowWidth, y: Math.random() * windowHeight, opacity: [0, 1, 0], scale: [0, 1.2, 0] }}
          transition={{ duration: 6 + Math.random() * 10, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}

      <div className="relative max-w-7xl w-full">
        {/* Powered by AI */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="flex items-center justify-center space-x-2">
          <Sparkles className="w-6 h-6 text-cyan-400" />
          <span className="text-cyan-400 font-semibold uppercase">Unleashing AI Power</span>
        </motion.div>

        {/* Hero Heading */}
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="text-5xl md:text-7xl font-extrabold text-white tracking-tight leading-tight mt-6">
          Experience the <span className="bg-gradient-to-r from-cyan-400 via-teal-500 to-blue-600 text-transparent bg-clip-text">Next-Gen AI</span>
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} className="text-lg md:text-xl text-gray-300 mt-6 max-w-2xl mx-auto">
          Elevate your business with cutting-edge artificial intelligence solutions tailored for the future.
        </motion.p>

        {/* AI Interaction Box */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }} className="relative flex items-center max-w-lg mx-auto mt-10 p-6 bg-gray-900 border border-cyan-500/30 rounded-2xl shadow-xl transition-transform hover:scale-105">
          <motion.div animate={{ rotate: isHovered ? 360 : 0 }} transition={{ duration: 0.5 }} className="bg-gradient-to-br from-teal-500 to-blue-600 p-3 rounded-full">
            <Rocket className="w-8 h-8 text-white" />
          </motion.div>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1 }} className="text-cyan-300 ml-6 text-lg font-medium">
            Embrace AI for smart decision-making and business excellence.
          </motion.p>
        </motion.div>

        {/* Benefits Section */}
        <motion.div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
          {benefitCards.map((card, index) => (
            <motion.div key={index} className="p-6 bg-gray-900 border border-cyan-500/20 rounded-xl shadow-lg hover:border-cyan-500/50 transition-all hover:scale-105">
              <card.icon className="w-12 h-12 text-cyan-400 mb-4" />
              <h3 className="text-xl font-semibold text-cyan-300">{card.title}</h3>
              <p className="text-gray-300 mt-2">{card.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
