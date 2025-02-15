"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X, BarChart, Cpu, Mail } from "lucide-react";
import Link from "next/link";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.header
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="bg-gradient-to-r from-gray-900 to-black text-white shadow-lg fixed w-full z-50"
    >
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <Link href="/">
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="text-2xl font-extrabold cursor-pointer tracking-wide bg-gradient-to-r from-blue-400 to-cyan-500 text-transparent bg-clip-text"
          >
            Agentia AI 🚀
          </motion.div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 text-lg font-semibold">
          {[
            { name: "Technology", href: "/technology", icon: <Cpu size={20} /> },
            { name: "Analysis", href: "/analysis", icon: <BarChart size={20} /> },
            { name: "Contact", href: "/contact", icon: <Mail size={20} /> },
          ].map((item, index) => (
            <motion.a
              key={index}
              href={item.href}
              whileHover={{ scale: 1.1, color: "#38BDF8" }}
              transition={{ type: "spring", stiffness: 300 }}
              className="flex items-center space-x-2 hover:text-blue-300 transition duration-300"
            >
              {item.icon}
              <span>{item.name}</span>
            </motion.a>
          ))}
        </nav>

        {/* Desktop Button */}
        <motion.a
          href="/discover-more"
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="hidden md:block px-6 py-3 bg-white text-gray-900 rounded-lg font-semibold shadow-md hover:bg-gray-300 transition"
        >
          Discover More
        </motion.a>

        {/* Mobile Menu Button */}
        <motion.button
          whileHover={{ scale: 1.2 }}
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden focus:outline-none"
        >
          {isOpen ? <X size={30} /> : <Menu size={30} />}
        </motion.button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-gray-900 p-5 absolute w-full flex flex-col items-center space-y-4"
        >
          <nav className="flex flex-col space-y-4 text-center text-lg font-medium w-full">
            {[
              { name: "Technology", href: "/technology", icon: <Cpu size={20} /> },
              { name: "Analysis", href: "/analysis", icon: <BarChart size={20} /> },
              { name: "Contact", href: "/contact", icon: <Mail size={20} /> },
            ].map((item, index) => (
              <motion.a
                key={index}
                href={item.href}
                onClick={() => setIsOpen(false)}
                whileHover={{ scale: 1.1, color: "#38BDF8" }}
                transition={{ type: "spring", stiffness: 300 }}
                className="flex items-center justify-center space-x-2 hover:text-blue-300 transition duration-300"
              >
                {item.icon}
                <span>{item.name}</span>
              </motion.a>
            ))}
          </nav>

          {/* Centered Mobile Button */}
          <motion.a
            href="/discover-more"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="mt-6 w-4/5 text-center bg-white text-gray-900 rounded-lg font-semibold py-3 shadow-md hover:bg-gray-300 transition"
          >
            Discover More
          </motion.a>
        </motion.div>
      )}
    </motion.header>
  );
}
