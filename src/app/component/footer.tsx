'use client';

import { Facebook, Twitter, Linkedin, Mail } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 ">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6 text-center md:text-left">
        {/* Brand Logo */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-extrabold tracking-wide mb-6 md:mb-0"
        >
          Agentia AI 🚀
        </motion.div>

        {/* Navigation Links */}
        <motion.nav
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center md:justify-start space-x-6 md:space-x-8 text-lg font-medium mb-6 md:mb-0"
        >
          {['Technology', 'Analysis', 'Contact'].map((item) => (
            <motion.div whileHover={{ scale: 1.1 }} key={item}>
              <Link href={`/${item.toLowerCase()}`} className="hover:text-gray-300 transition duration-300">
                {item}
              </Link>
            </motion.div>
          ))}
        </motion.nav>

        {/* Social Media Links */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex space-x-4"
        >
          {[Facebook, Twitter, Linkedin, Mail].map((Icon, index) => (
            <motion.a
              key={index}
              whileHover={{ scale: 1.2 }}
              href="#"
              className="p-3 rounded-full bg-gray-800 hover:bg-gray-700 transition duration-300"
            >
              <Icon size={24} />
            </motion.a>
          ))}
        </motion.div>
      </div>

      {/* Footer Bottom */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="text-sm text-gray-500 border-t border-gray-700 w-full text-center mt-6 pt-6"
      >
        © {new Date().getFullYear()} Agentia AI. All Rights Reserved.
      </motion.div>
    </footer>
  );
}
