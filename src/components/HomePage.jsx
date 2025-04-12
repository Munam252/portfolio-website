import React, { useEffect } from "react";
import { FaFacebookF, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "../css/HomePage.css";
import AboutMe from "./AboutMe";
import profileImage from "../assets/myprofile12.jpg";

const SocialIcons = () => (
  <div className="fixed right-10 bottom-10 flex flex-col space-y-4 text-gray-700 z-50">
    <motion.a 
      href="https://www.facebook.com/munam.mustafa.169/" 
      target="_blank" 
      rel="noopener noreferrer"
      whileHover={{ y: -5, scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <FaFacebookF className="cursor-pointer hover:text-green-500 text-2xl transition-colors duration-300" />
    </motion.a>
    <motion.a 
      href="https://github.com/Munam252" 
      target="_blank" 
      rel="noopener noreferrer"
      whileHover={{ y: -5, scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <FaGithub className="cursor-pointer hover:text-green-500 text-2xl transition-colors duration-300" />
    </motion.a>
    <motion.a 
      href="https://www.linkedin.com/in/munam-mustafa-30373a272/" 
      target="_blank" 
      rel="noopener noreferrer"
      whileHover={{ y: -5, scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <FaLinkedinIn className="cursor-pointer hover:text-green-500 text-2xl transition-colors duration-300" />
    </motion.a>
  </div>
);

const HomePage = () => {
  useEffect(() => {
    const handleMouseMove = (e) => {
      const cursor = document.querySelector('.cursor');
      if (cursor) {
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="homepage relative h-screen overflow-y-auto">
      <div className="cursor fixed w-8 h-8 rounded-full bg-green-500 bg-opacity-30 pointer-events-none transform -translate-x-1/2 -translate-y-1/2 z-50 mix-blend-difference"></div>
      
      <SocialIcons />
      
      <div className="flex h-screen">
        {/* Left Section */}
        <motion.div 
          className="name-container w-1/2 flex flex-col justify-center p-12 relative"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-[300px] h-[200px] bg-gradient-to-r from-green-400 to-blue-500 opacity-20 blur-3xl rounded-full animate-pulse"></div>
          <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-[600px] h-[700px] bg-gradient-to-r from-green-400 to-blue-500 opacity-10 blur-3xl rounded-full"></div>

          <motion.h1 
            className="text-7xl font-bold text-gray-800 relative z-10"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Munam
          </motion.h1>
          <motion.h1 
            className="text-7xl font-bold text-gray-800 relative z-10 mb-4"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Mustafa
          </motion.h1>
          <motion.p 
            className="text-gray-600 text-lg relative z-10 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Full Stack Developer
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <a 
              href="https://www.linkedin.com/in/munam-mustafa-30373a272/" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <button className="say-hello-btn mt-6 bg-gradient-to-r from-green-500 to-green-600 text-white py-3 px-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 relative z-10 group">
                <span className="relative z-10">Say Hello</span>
                <span className="absolute inset-0 bg-gradient-to-r from-green-600 to-green-700 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </button>
            </a>
          </motion.div>
        </motion.div>

        {/* Right Section */}
        <motion.div 
          className="w-1/2 flex justify-center items-center relative overflow-hidden"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-blue-500 opacity-10"></div>
          <motion.img
            src={profileImage}
            alt="Munam Mustafa"
            className="h-auto max-w-full object-cover sm:h-full sm:w-full relative z-10 rounded-lg shadow-2xl"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
      </div>
      
      <AboutMe />
    </div>
  );
};

export default HomePage;