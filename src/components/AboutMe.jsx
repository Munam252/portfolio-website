import React from 'react';
import { motion } from "framer-motion";
import CV from "../assets/Munam Mustafa_Full_Stack_Resume.pdf";
import profileImg from '../assets/profile2.jpg';
import { FaPhone, FaEnvelope, FaUser, FaFlag, FaGraduationCap, FaBriefcase } from 'react-icons/fa';

const infoItems = [
  { label: "Name", value: "Munam Mustafa", icon: <FaUser className="text-primary" /> },
  { label: "Phone", value: "+92 343 5231909", icon: <FaPhone className="text-primary" /> },
  { label: "Email", value: "munammustafa253@gmail.com", icon: <FaEnvelope className="text-primary" /> },
  { label: "Occupation", value: "Developer", icon: <FaBriefcase className="text-primary" /> },
  { label: "Nationality", value: "Pakistani", icon: <FaFlag className="text-primary" /> },
  { label: "Education", value: "Bachelors in Computer Science", icon: <FaGraduationCap className="text-primary" /> },
  { label: "Freelance", value: "Available", icon: <FaBriefcase className="text-primary" /> },
];

function AboutMe() {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = CV;
    link.download = "Munam_Mustafa_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="about" className="relative py-20 bg-surface flex justify-center items-center min-h-[70vh] overflow-hidden">
      {/* Decorative background shapes */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 0.08, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.2 }}
        className="absolute -top-32 -left-32 w-96 h-96 bg-primary rounded-full blur-3xl z-0"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 0.06, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.4 }}
        className="absolute -bottom-32 -right-32 w-96 h-96 bg-secondary rounded-full blur-3xl z-0"
      />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 w-full max-w-4xl bg-white/80 rounded-3xl shadow-2xl p-10 flex flex-col lg:flex-row gap-12 items-center backdrop-blur-lg"
      >
        {/* Profile Image */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex-shrink-0 relative"
        >
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-primary to-secondary blur-2xl opacity-60 animate-pulse z-0" />
          <img
            src={profileImg}
            alt="Munam Mustafa"
            className="w-48 h-48 rounded-2xl border-4 border-white shadow-2xl object-cover relative z-10"
          />
        </motion.div>

        {/* Bio and Info */}
        <div className="flex-1">
          <span className="text-primary font-semibold tracking-wider uppercase">About Me</span>
          <h2 className="font-heading text-4xl md:text-5xl font-semibold text-dark mt-2 mb-6">Where there's a bug, there's a way</h2>
          <div className="space-y-4 text-muted text-lg mb-8">
            <p>
              I'm a passionate Full Stack Web Developer who loves turning ideas into interactive, scalable web applications. From crafting frontends to building robust backends, I enjoy working across the entire tech stack.
            </p>
            <p>
              Currently pursuing my Bachelor's in Computer Science at FAST-NUCES, where I'm honing my skills and staying ahead in the fast-moving world of web development.
            </p>
          </div>

          {/* Info Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            {infoItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-center gap-3 bg-background/80 rounded-lg p-3 shadow-sm"
              >
                {item.icon}
                <div>
                  <div className="text-sm text-muted font-semibold">{item.label}</div>
                  <div className="text-dark font-medium">{item.value}</div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Download Button */}
          <motion.button
            onClick={handleDownload}
            className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-primary to-secondary text-white font-heading text-lg font-bold uppercase tracking-wide rounded-full shadow-xl ring-2 ring-primary/30 backdrop-blur-md hover:scale-105 hover:-translate-y-1 hover:from-secondary hover:to-primary transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-secondary/40"
            whileHover={{ scale: 1.05 }}
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd"></path>
            </svg>
            Download My Resume
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
}

export default AboutMe;