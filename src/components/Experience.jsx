import React from 'react';
import { motion } from "framer-motion";
import { FaBriefcase, FaGraduationCap, FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa';

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
  },
  {
    title: "Full Stack Developer",
    company: "Switch Communications - Farm to Home",
    type: "On-site",
    year: "June 2025 - current",
    location: "Islamabad, Pakistan",
    points: [
      "Currently working as a Full Stack Developer, contributing to ongoing projects and platform enhancements.",
      "Developed and maintained scalable web applications using Laravel and TypeScript.",
      "Designed and optimized MySQL databases for high performance and reliability.",
      "Implemented RESTful APIs and integrated third-party services to enhance platform capabilities.",
      "Collaborated with cross-functional teams to deliver end-to-end solutions in an agile environment.",
      "Utilized modern DevOps practices for CI/CD and deployment automation.",
      "Worked on both frontend and backend, ensuring seamless user experience and robust backend logic."
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

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-4xl font-bold text-primary mb-4">My Education & Experience</h2>
          <p className="text-muted max-w-2xl mx-auto">
            My professional journey and academic background that shaped my skills
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Experience Timeline */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-surface p-8 rounded-2xl shadow-xl h-full">
              <div className="flex items-center mb-6">
                <div className="bg-primary/20 p-3 rounded-full mr-4">
                  <FaBriefcase className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-dark">Experience</h3>
              </div>
              <div className="space-y-10">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: index * 0.2 }}
                    className="relative pl-8 border-l-4 border-primary"
                  >
                    <div className="absolute -left-3 top-2 w-5 h-5 bg-primary rounded-full border-4 border-white"></div>
                    <h4 className="text-xl font-semibold text-dark flex items-center gap-2">{exp.title} {exp.company && <span className="text-muted text-base font-normal">@ {exp.company}</span>}</h4>
                    <div className="flex flex-wrap gap-2 mt-1 mb-3 text-sm text-muted">
                      {exp.type && <span className="flex items-center gap-1"><FaBriefcase /> {exp.type}</span>}
                      {exp.year && <span className="flex items-center gap-1"><FaCalendarAlt /> {exp.year}</span>}
                      {exp.location && <span className="flex items-center gap-1"><FaMapMarkerAlt /> {exp.location}</span>}
                    </div>
                    <ul className="space-y-2 text-muted text-base">
                      {exp.points.map((point, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-primary mr-2 mt-1">•</span>
                          {point}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Education Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-surface p-8 rounded-2xl shadow-xl h-full">
              <div className="flex items-center mb-6">
                <div className="bg-secondary/20 p-3 rounded-full mr-4">
                  <FaGraduationCap className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-2xl font-bold text-dark">Education</h3>
              </div>
              <div className="space-y-10">
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: index * 0.2 }}
                    className="relative pl-8 border-l-4 border-secondary"
                  >
                    <div className="absolute -left-3 top-2 w-5 h-5 bg-secondary rounded-full border-4 border-white"></div>
                    <h4 className="text-xl font-semibold text-dark flex items-center gap-2">{edu.degree}</h4>
                    <div className="flex flex-wrap gap-2 mt-1 mb-3 text-sm text-muted">
                      <span className="flex items-center gap-1"><FaGraduationCap /> {edu.institution}</span>
                      {edu.location && <span className="flex items-center gap-1"><FaMapMarkerAlt /> {edu.location}</span>}
                      {edu.year && <span className="flex items-center gap-1"><FaCalendarAlt /> {edu.year}</span>}
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