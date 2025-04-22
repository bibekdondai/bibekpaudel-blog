
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import '../glitch.css';

const textVariant = {
  hidden: { opacity: 0, y: -30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

const Home = () => {
  useEffect(() => {
    const audio = new Audio('/sounds/startup.mp3');
    audio.volume = 0.4;
    audio.play().catch(() => {}); // prevent autoplay block errors silently
  }, []);

  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 relative overflow-hidden bg-gradient-to-b from-black via-[#0e0e0e] to-[#020202] text-white">
      {/* Animated Circuit Lights */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-cyan-500/5 to-green-500/5 animate-pulse"></div>
      <div className="absolute w-[60vw] h-[60vw] top-[-10%] left-[-10%] bg-cyan-400 blur-[120px] opacity-20 rounded-full z-0 animate-spin-slow"></div>
      <div className="absolute w-[60vw] h-[60vw] bottom-[-10%] right-[-10%] bg-green-400 blur-[120px] opacity-10 rounded-full z-0 animate-ping"></div>

      <motion.div
        className="max-w-4xl w-full z-10 bg-[#0f0f0f]/80 border border-cyan-400/30 backdrop-blur-3xl p-10 rounded-3xl shadow-[0_0_100px_rgba(0,255,204,0.4)]"
        initial="hidden"
        animate="visible"
        variants={textVariant}
      >
        <div className="glitch-container">
          <h1 className="glitch" data-text="BIBEK.PROTOCOL">
            BIBEK.PROTOCOL
          </h1>
        </div>

        <p className="mt-6 text-gray-300 text-xl sm:text-2xl font-light">
          <span className="text-cyan-400 font-semibold">Bibek Paudel</span> isn’t just a name — it’s a command line that executes greatness.
        </p>
        <p className="mt-3 text-sm text-gray-500 tracking-widest uppercase">
          // Terminal UI × Cyberpunk Protocol Initiated
        </p>

        <button className="mt-6 px-6 py-3 text-lg font-bold text-black bg-cyan-400 rounded-full shadow-lg hover:bg-cyan-500 hover:scale-105 transition-transform">
          Enter Protocol
        </button>
      </motion.div>
    </section>
  );
};

export default Home;