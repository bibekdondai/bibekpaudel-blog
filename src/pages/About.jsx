import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section className="px-6 py-24 bg-gradient-to-b from-[#0f172a] to-[#111827] text-white">
      <motion.div
        className="max-w-3xl mx-auto bg-white/10 backdrop-blur-sm rounded-2xl border border-white/10 p-8 shadow-lg"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">About Me</h2>
        <p className="text-gray-300 text-lg">
          I’m Bibek, a computer engineering student who vibes with clean code, fire UI/UX, and real impact. From Firebase to Flutter, I craft beautiful, fast, and meaningful digital experiences.
        </p>
      </motion.div>
    </section>
  );
};

export default About;