import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

export default function HeroSection() {
  // Open resume PDF from public folder with correct base path for GitHub Pages
  const handleResumeClick = () => {
    window.open(`${import.meta.env.BASE_URL}SagorS_DhorResume.pdf`, '_blank');
  };

  return (
    <section
    id="about"
    className="isolate min-h-[70vh] flex flex-col md:flex-row items-center justify-center px-6 pt-16 md:pt-5 pb-8 bg-[#0f0c29] text-white"
  >
  

      {/* Profile Image with Glow */}
      <motion.div
  initial={{ scale: 0.8, opacity: 0 }}
  animate={{ scale: 1, opacity: 1 }}
  transition={{ duration: 1.2, ease: 'easeOut' }}
  className="relative w-52 h-52 md:w-80 md:h-80 rounded-full mt-10 sm:mt-12 md:mt-0 md:mr-16 mb-14 sm:mb-16"
>
  {/* Futuristic animated conic ring */}
  <div
    className="absolute inset-0 rounded-full pointer-events-none z-0"
    aria-hidden="true"
  >
    {/* Main ring (hollow center via mask) */}
    <div
      className="
        absolute inset-0 rounded-full
        [background:conic-gradient(from_0deg,theme(colors.cyan.400),theme(colors.fuchsia.500),theme(colors.blue.500),theme(colors.cyan.400))]
        [mask:radial-gradient(farthest-side,#000_calc(100%-6px),transparent_calc(100%-6px))]
        animate-[spin_10s_linear_infinite]
        opacity-90
      "
    />
    {/* Soft halo inside the ring */}
    <div
      className="
        absolute inset-0 rounded-full blur-[8px] opacity-45
        [background:conic-gradient(from_0deg,theme(colors.cyan.400),theme(colors.fuchsia.500),theme(colors.blue.500),theme(colors.cyan.400))]
      "
    />
    {/* Orbiting particle */}
    <div className="absolute inset-0 rounded-full animate-[spin_6s_linear_infinite]">
      <span
        className="absolute left-1/2 -translate-x-1/2 -top-1 w-2 h-2 rounded-full
                   bg-cyan-300 shadow-[0_0_12px_3px_rgba(34,211,238,0.9)]"
      />
    </div>
  </div>

  {/* Profile image sits above the ring */}
  <img
    src={`${import.meta.env.BASE_URL}dp2.jpeg`}
    alt="Profile"
    className="relative z-10 w-full h-full object-cover rounded-full border-0 shadow-[0_0_40px_rgba(34,211,238,0.25)]"
  />
</motion.div>



      {/* Text & Buttons */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="text-center md:text-left max-w-xl"
      >
        {/* Greeting */}
        <motion.p
          variants={item}
          className="text-cyan-300 tracking-widest uppercase text-sm"
        >
          Hello! I am
        </motion.p>

        {/* Name */}
        <motion.h2
          variants={item}
          className="text-4xl md:text-6xl font-extrabold mt-3 leading-tight drop-shadow-[0_0_10px_cyan]"
        >
          Sagor Sutra Dhor
        </motion.h2>

        {/* Tagline */}
        <motion.p
          variants={item}
          className="mt-5 text-gray-300 text-lg leading-relaxed"
        >
          I build <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-300 font-semibold">AI‑powered applications</span> and seamless digital experiences with clean, modern code. Focused on full‑stack development, I merge cutting‑edge technology with user‑centric design to create solutions that feel effortless and future‑ready.
        </motion.p>

        {/* Buttons */}
        <motion.div
          variants={item}
          className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
        >
          <button
            onClick={() => (window.location.href = 'mailto:sagorsd975@gmail.com')}
            className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-teal-400 hover:from-cyan-400 hover:to-teal-300 text-white font-medium rounded-xl shadow-[0_0_10px_cyan] hover:scale-105 transition-all duration-300"
          >
            Contact Me
          </button>
          <button
            onClick={handleResumeClick}
            className="px-6 py-2 border border-cyan-400 hover:bg-cyan-400 hover:text-black text-white font-medium rounded-xl transition-all duration-300 hover:scale-105"
          >
            View Resume
          </button>
        </motion.div>

        {/* Social Icons */}
        <motion.div
          variants={item}
          className="flex justify-center md:justify-start gap-5 mt-6 text-2xl"
        >
          <a
            href="https://github.com/Sagor2050"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-white/10 hover:bg-cyan-400 hover:text-black transition transform hover:scale-110"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/sdsagor"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-white/10 hover:bg-cyan-400 hover:text-black transition transform hover:scale-110"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:sagorsd975@gmail.com"
            className="p-3 rounded-full bg-white/10 hover:bg-cyan-400 hover:text-black transition transform hover:scale-110"
          >
            <FaEnvelope />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
