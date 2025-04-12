import React from 'react';
import { motion } from "framer-motion";
import CV from "../assets/Munam Mustafa_Full_Stack_Resume.pdf";
import profileImg from '../assets/profile2.jpg';
import Experience from './Experience';
import MyProjects from './MyProjects';
import '../css/AboutMe.css';

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
    <section id="about" className="relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col lg:flex-row gap-12 items-center"
        >
          {/* Image Section */}
          <div className="relative lg:w-1/2 flex justify-center">
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative z-10"
            >
              <img
                src={profileImg}
                alt="Munam Mustafa"
                className="w-full max-w-md rounded-xl shadow-2xl border-4 border-white/10 hover:border-green-400/30 transition-all duration-500"
              />
            </motion.div>
            
            {/* Decorative elements */}
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="absolute -bottom-8 -left-8 w-64 h-64 bg-green-400/10 rounded-xl -z-10"
            ></motion.div>
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="absolute -top-8 -right-8 w-64 h-64 bg-blue-400/10 rounded-xl -z-10"
            ></motion.div>
          </div>

          {/* Content Section */}
          <div className="lg:w-1/2">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-green-500 font-medium tracking-wider">ABOUT ME</span>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mt-2 mb-6">
                Where there's a bug, there's a way
              </h1>
              
              <div className="space-y-4 text-gray-600">
                <p>
                  I'm a passionate Full Stack Web Developer who loves turning ideas into interactive, scalable web applications. From crafting frontends to building robust backends, I enjoy working across the entire tech stack.
                </p>
                <p>
                  Currently pursuing my Bachelor's in Computer Science at FAST-NUCES, where I'm honing my skills and staying ahead in the fast-moving world of web development.
                </p>
              </div>

              {/* Personal Info Grid */}
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { label: "Name", value: "Munam Mustafa" },
                  { label: "Phone", value: "+92 343 5231909" },
                  { label: "Age", value: "22 Years" },
                  { label: "Email", value: "munammustafa253@gmail.com" },
                  { label: "Occupation", value: "Developer" },
                  { label: "Nationality", value: "Pakistani" },
                  { label: "Education", value: "Bachelors in Computer Science" },
                  { label: "Freelance", value: "Available" },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white/50 p-3 rounded-lg backdrop-blur-sm border border-gray-200/50"
                  >
                    <p className="font-semibold text-gray-700">{item.label}</p>
                    <p className="text-gray-600">{item.value}</p>
                  </motion.div>
                ))}
              </div>

              {/* Download Button */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="mt-8"
              >
                <button
                  onClick={handleDownload}
                  className="relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-medium text-white transition-all bg-green-500 rounded-lg group hover:bg-green-600 hover:shadow-lg"
                >
                  <span className="absolute inset-0 border-0 group-hover:border-[25px] ease-linear duration-100 transition-all border-white/10 rounded-lg"></span>
                  <span className="relative z-10 w-full text-center flex items-center justify-center gap-2">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd"></path>
                    </svg>
                    Download My Resume
                  </span>
                </button>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <Experience />
      <MyProjects />
    </section>
  );
}

export default AboutMe;