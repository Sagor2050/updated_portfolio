import React from 'react';

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-[#0e0c1d] z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-white">MyPortfolio</h1>
        <div className="space-x-6 text-sm">
          <a href="#about" className="hover:text-indigo-400">About</a>
          <a href="#about" className="hover:text-indigo-400">Vlog</a>
          <a href="#work" className="hover:text-indigo-400">Work</a>
          <a href="#projects" className="hover:text-indigo-400">Projects</a>
          <a href="#contact" className="hover:text-indigo-400">Contact</a>
        </div>
      </div>
    </nav>
  );
}