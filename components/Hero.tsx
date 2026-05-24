"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/images/hero.jpg"
          alt="Hero"
          className="w-full h-full object-cover opacity-30"
        />
      </div>

      <div className="relative z-10 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-7xl md:text-9xl font-bold tracking-tight"
        >
          AGUSTIN
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="text-7xl md:text-9xl font-bold text-neutral-400"
        >
          BIAUS
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-6 tracking-[0.3em] text-sm uppercase"
        >
          Architecture Portfolio
        </motion.p>
      </div>
    </section>
  );
}