import React from 'react';
import { motion } from "framer-motion";

const Experience = () => {
  const experiences = [
    {
      title: "Solution Design Intern",
      company: "Inbox Business Technologies",
      type: "On-site",
      year: "2024",
      location: "Islamabad, Pakistan",
      points: [
        "Worked on backend of an Attendance Management System using Express.js — routing, middleware, and APIs",
        "Built RESTful APIs for AI chatbots enabling dynamic user interaction",
        "Optimized MongoDB schemas for efficient data storage in a MERN app"
      ]
    },
    {
      title: "Freelance Project",
      company: "",
      type: "",
      year: "",
      location: "",
      points: [
        "Built a scalable e-commerce platform using CSS, php, PhpMyAdmin(Database), creating a user friendly experience",
        "Designed an intuitive front-end with HTML/CSS, ensuring a seamless user experience"
      ]
    }
  ];

  const education = [
    {
      degree: "Pre Engineering",
      institution: "F.G Sir Syed College",
      location: "Islamabad, Pakistan",
      year: "2019-2021"
    },
    {
      degree: "Bachelor's in Computer Science",
      institution: "National University of Computer and Emerging Sciences - FAST",
      location: "Islamabad, Pakistan",
      year: "2025"
    }
  ];

  return (
    <section id="experience" className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-green-600 mb-4">My Education & Experience</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            My professional journey and academic background that shaped my skills
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Experience Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white p-8 rounded-xl shadow-lg h-full">
              <div className="flex items-center mb-6">
                <div className="bg-green-100 p-3 rounded-full mr-4">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Experience</h3>
              </div>

              <div className="space-y-8">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: index * 0.2 }}
                    className="relative pl-8 border-l-2 border-green-500"
                  >
                    <div className="absolute -left-2.5 top-0 w-4 h-4 bg-green-500 rounded-full"></div>
                    <h4 className="text-xl font-semibold text-gray-800">{exp.title}</h4>
                    <div className="flex flex-wrap gap-2 mt-1 mb-3">
                      {exp.company && <span className="text-gray-600">{exp.company}</span>}
                      {exp.type && <span className="text-gray-500">• {exp.type}</span>}
                      {exp.year && <span className="text-gray-500">• {exp.year}</span>}
                      {exp.location && <span className="text-gray-500">• {exp.location}</span>}
                    </div>
                    <ul className="space-y-2 text-gray-600">
                      {exp.points.map((point, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-green-500 mr-2 mt-1">•</span>
                          {point}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Education Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white p-8 rounded-xl shadow-lg h-full">
              <div className="flex items-center mb-6">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Education</h3>
              </div>

              <div className="space-y-8">
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: index * 0.2 }}
                    className="relative pl-8 border-l-2 border-blue-500"
                  >
                    <div className="absolute -left-2.5 top-0 w-4 h-4 bg-blue-500 rounded-full"></div>
                    <h4 className="text-xl font-semibold text-gray-800">{edu.degree}</h4>
                    <div className="flex flex-wrap gap-2 mt-1 mb-3">
                      <span className="text-gray-600">{edu.institution}</span>
                      {edu.location && <span className="text-gray-500">• {edu.location}</span>}
                      {edu.year && <span className="text-gray-500">• {edu.year}</span>}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;