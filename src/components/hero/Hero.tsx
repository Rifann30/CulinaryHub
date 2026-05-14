import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-black/40"></div>
      <div className="relative z-10 text-center px-6 max-w-4xl">
        <motion.h1 initial={{ y: 40, opacity: 0 }} animate={{ y:0, opacity:1 }} transition={{ duration:0.8 }} className="font-playfair text-5xl md:text-6xl text-white font-semibold leading-tight drop-shadow-lg">
          Crafting unforgettable culinary experiences.
        </motion.h1>
        <motion.p initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay:0.4 }} className="mt-6 text-white/90 max-w-2xl mx-auto">
          Experience our curated menu, cinematic ambience, and seamless reservations.
        </motion.p>
        <motion.div initial={{ scale:0.95, opacity:0 }} animate={{ scale:1, opacity:1 }} transition={{ delay:0.6 }} className="mt-8 flex justify-center gap-4">
          <a href="#reservation" className="btn-primary">Reserve</a>
          <a href="#menu" className="btn-primary bg-white text-darkbrown">Explore Menu</a>
        </motion.div>
      </div>
    </section>
  );
}
