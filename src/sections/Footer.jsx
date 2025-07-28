import React from 'react';

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#0e0c1d] py-10 px-6 text-center text-gray-500">
      <p>Currently open to new opportunities. Let's connect!</p>
      <p className="mt-2 text-sm">Email: sagorsd975@gmail.com</p>
      <div className="mt-4 space-x-4">
        <a href="https://github.com/Sagor2050" className="hover:text-white">GitHub</a>
        <a href="https://www.linkedin.com/in/sagor-sutra-dhor-95b0322aa/" className="hover:text-white">LinkedIn</a>
        <a href="https://www.facebook.com/share/16iAgbF2Ns/?mibextid=wwXIfr" className="hover:text-white">Facebook</a>
      </div>
    </footer>
  );
}
