import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section className="px-6 py-24 bg-[#0f172a] text-white">
      <motion.div
        className="max-w-xl mx-auto bg-white/10 border border-white/10 rounded-2xl p-8 text-center backdrop-blur-sm shadow-lg"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl font-bold mb-4">Let’s Connect</h2>
        <p className="text-gray-300 mb-4">
          Wanna collaborate or roast some code together? Drop me an email 👇
        </p>
        <a href="mailto:bibekp8000@gmail.com" className="text-blue-400 underline hover:text-blue-300 transition">
          bibekp8000@gmail.com
        </a>
      </motion.div>
    </section>
  );
};

export default Contact;