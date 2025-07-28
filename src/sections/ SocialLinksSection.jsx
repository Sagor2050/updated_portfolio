import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaFacebook } from 'react-icons/fa';

export default function SocialLinksSection() {
  return (
    <section className="py-10 px-6 bg-[#0f0c29] text-white text-center">
      <h3 className="text-2xl font-bold text-cyan-300 mb-4">Connect with Me</h3>
      <div className="flex justify-center gap-4 text-2xl text-cyan-400">
        {/* GitHub */}
        <a
          href="https://github.com/Sagor2050"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white hover:scale-110 transition transform duration-300"
        >
          <FaGithub />
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/sagor-sutra-dhor-95b0322aa/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white hover:scale-110 transition transform duration-300"
        >
          <FaLinkedin />
        </a>

        {/* Facebook */}
        <a
          href="https://www.facebook.com/share/16iAgbF2Ns/?mibextid=wwXIfr"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white hover:scale-110 transition transform duration-300"
        >
          <FaFacebook />
        </a>

        {/* Email */}
        <a
          href="mailto:sagorsd975@gmail.com"
          className="hover:text-white hover:scale-110 transition transform duration-300"
        >
          <FaEnvelope />
        </a>
      </div>
    </section>
  );
}
