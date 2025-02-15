"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What makes AI agents unique?",
      answer:
        "AI agents use machine learning to analyze data and automate decision-making with minimal human intervention.",
    },
    {
      question: "Can AI agents learn over time?",
      answer:
        "Yes! AI agents improve their performance through data training, allowing them to make more accurate decisions over time.",
    },
    {
      question: "How do AI agents impact productivity?",
      answer:
        "AI automates repetitive tasks, enabling businesses to focus on strategic planning and innovation, increasing overall productivity.",
    },
    {
      question: "Are AI agents safe for business operations?",
      answer:
        "We prioritize security and implement strict encryption protocols to keep your business data safe from unauthorized access.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full py-20 bg-gradient-to-b from-gray-950 to-blue-950">
      <div className="container mx-auto px-6 md:px-10">
        <h2 className="text-4xl font-bold text-center text-cyan-400 mb-12 tracking-wide">
          Frequently Asked Questions
        </h2>
        <div className="max-w-3xl mx-auto space-y-6">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="bg-gray-900 rounded-xl shadow-lg overflow-hidden"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <button
                className="w-full flex justify-between items-center text-left p-5 text-lg font-semibold text-purple-400 hover:text-cyan-400 transition-all duration-300"
                onClick={() => toggleFAQ(index)}
              >
                {faq.question}
                <motion.span
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  ▼
                </motion.span>
              </button>
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={openIndex === index ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden px-5 pb-4 text-gray-300"
              >
                {faq.answer}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
