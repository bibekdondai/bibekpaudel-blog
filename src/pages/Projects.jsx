import React from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
  return (
    <section className="px-6 py-24 bg-gradient-to-b from-[#111827] to-[#0f172a] text-white">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold mb-8 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Projects
        </motion.h2>
        <motion.div
          className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/10 shadow-xl"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-xl font-semibold mb-2">Personal Mobile Apps</h3>
          <p className="text-gray-300">
            I’ve built mobile apps with Flutter & Kotlin, styled with Figma, and launched with Firebase. My projects combine tech with creativity and purpose.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;