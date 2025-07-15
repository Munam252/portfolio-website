import React from "react";
import CV from "../assets/Munam Mustafa_Full_Stack_Resume.pdf";
import { FiDownload } from "react-icons/fi";
import { motion } from "framer-motion";

const DownloadCV = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = CV;
    link.download = "Munam Mustafa_Full_Stack_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="py-20 flex justify-center items-center bg-transparent">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="w-full max-w-2xl mx-auto bg-white/80 dark:bg-dark/80 backdrop-blur-lg rounded-3xl shadow-2xl px-8 py-14 flex flex-col items-center relative overflow-hidden"
      >
        {/* Animated Download Icon */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mb-6"
        >
          <FiDownload className="text-6xl md:text-7xl text-primary drop-shadow-lg animate-bounce" />
        </motion.div>
        {/* Gradient Heading */}
        <h1 className="text-4xl md:text-5xl font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary drop-shadow-lg">
          Get My Resume
        </h1>
        <p className="text-lg text-muted mb-10 max-w-xl text-center">
          Download my full resume to learn more about my skills, experience, and professional journey.
        </p>
        {/* Download Button */}
        <motion.button
          onClick={handleDownload}
          className="flex items-center justify-center gap-3 px-10 py-4 bg-gradient-to-r from-primary to-secondary text-white font-bold uppercase tracking-wide rounded-full shadow-xl ring-2 ring-primary/30 backdrop-blur-md hover:scale-105 hover:-translate-y-1 hover:from-secondary hover:to-primary transition-all duration-300 text-lg focus:outline-none focus:ring-4 focus:ring-secondary/40"
          whileHover={{ scale: 1.08 }}
        >
          <FiDownload className="text-2xl" />
          Download Resume
        </motion.button>
        {/* Decorative Accent */}
        <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-32 h-2 bg-gradient-to-r from-primary to-secondary rounded-full opacity-80 mt-10" />
      </motion.div>
    </section>
  );
};

export default DownloadCV;