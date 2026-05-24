"use client";

import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1 }}
      className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/30 border-b border-black/5"
    >
      <div className="container-custom flex justify-between items-center py-5 px-6">
        <h1 className="text-sm tracking-[0.3em] font-semibold">
          AGUSTIN BIAUS
        </h1>

        <div className="flex gap-8 text-sm">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </motion.nav>
  );
}