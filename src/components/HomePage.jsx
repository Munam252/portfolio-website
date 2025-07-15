import React from "react";
import { motion } from "framer-motion";
import profileImage from "../assets/myprofile12.jpg";

const Hero = () => (
  <section id="home" className="relative flex flex-col items-center justify-center min-h-[80vh] py-20 px-4 bg-gradient-to-br from-primary/10 via-secondary/10 to-background overflow-hidden">
    {/* Animated background shapes */}
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 0.18, scale: 1 }}
      transition={{ duration: 1.2, delay: 0.2 }}
      className="absolute -top-32 -left-32 w-96 h-96 bg-primary rounded-full blur-3xl z-0"
    />
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 0.12, scale: 1 }}
      transition={{ duration: 1.2, delay: 0.4 }}
      className="absolute -bottom-32 -right-32 w-96 h-96 bg-secondary rounded-full blur-3xl z-0"
    />

    {/* Profile Image */}
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      className="relative mb-8"
    >
      <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary to-secondary blur-2xl opacity-60 animate-pulse z-0" />
      <img
        src={profileImage}
        alt="Munam Mustafa"
        className="w-44 h-44 rounded-full border-4 border-white shadow-2xl object-cover relative z-10"
      />
    </motion.div>

    {/* Name and Title */}
    <motion.h1
      className="font-heading text-5xl md:text-7xl font-semibold text-dark text-center z-10 mb-2 drop-shadow-lg"
      initial={{ y: 40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.5 }}
    >
      Munam Mustafa
    </motion.h1>
    <motion.p
      className="text-xl md:text-2xl text-muted text-center z-10 mb-4 font-sans"
      initial={{ y: 40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.7 }}
    >
      Full Stack Developer & Lifelong Learner
    </motion.p>
    <motion.p
      className="text-lg md:text-xl text-muted text-center z-10 mb-8 max-w-2xl"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.9 }}
    >
      I build beautiful, scalable web applications and love turning ideas into reality with code.
    </motion.p>

    {/* Call to Action */}
    <motion.a
      href="#contact"
      className="inline-block px-10 py-4 bg-gradient-to-r from-primary to-secondary text-white font-heading text-lg font-bold uppercase tracking-wide rounded-full shadow-xl ring-2 ring-primary/30 backdrop-blur-md hover:scale-105 hover:-translate-y-1 hover:from-secondary hover:to-primary transition-all duration-300 z-10 focus:outline-none focus:ring-4 focus:ring-secondary/40"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7, delay: 1 }}
      whileHover={{ scale: 1.07 }}
    >
      Say Hello
    </motion.a>
  </section>
);

const HomePage = () => {
  return (
    <div className="homepage bg-background min-h-screen">
      <Hero />
    </div>
  );
};

export default HomePage;