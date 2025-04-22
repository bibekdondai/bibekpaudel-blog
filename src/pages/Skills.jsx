import React from 'react';
import { motion } from 'framer-motion';

const skills = ['Flutter', 'Firebase', 'Figma', 'Dart', 'Java', 'Python', 'Android Studio', 'Git', 'Canva'];

const Skills = () => {
  return (
    <section className="px-6 py-24 bg-[#0f172a] text-white">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          My Stack
        </motion.h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="p-4 bg-white/10 backdrop-blur-md border border-white/10 rounded-xl text-center text-white hover:scale-105 transition"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
