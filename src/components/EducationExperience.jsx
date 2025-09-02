import React from "react";
import { motion } from "framer-motion";
import { FaBriefcase, FaGraduationCap, FaMapMarkerAlt, FaCalendarAlt, FaExternalLinkAlt } from 'react-icons/fa';

const experiences = [
    {
        title: "Full Stack Developer",
        company: "Associated Business Solutions Pvt Ltd",
        type: "Experience",
        year: "July 2025 - Current",
        location: "Islamabad, Pakistan",
        description: "Working as a Full Stack Developer in a collaborative team to build an e-commerce automation platform from scratch, similar to AutoDS and Sellbrite. Responsible for designing and implementing core features using the MERN stack, integrating with multiple marketplaces, and ensuring scalability and performance for large-scale product and order management.",
        highlights: [
          "End-to-end development of an e-commerce automation platform from scratch",
          "Building product and order management modules for marketplaces",
          "Integration with third-party e-commerce APIs (Amazon, eBay, Shopify, etc.)",
          "Database design and optimization for handling large-scale inventory",
          "Implementing authentication, role-based access, and secure API endpoints",
          "Collaborating with team members using agile methodologies (Scrum)"
        ],
        tools: ["MERN Stack", "MongoDB", "Express.js", "React.js", "Node.js", "REST APIs", "E-commerce Integrations", "Git/GitHub", "Agile/Scrum"]
    },
    {
        title: "Full Stack Developer",
        company: "Switch Communications - Farm to Home",
        type: "Experience",
        year: "June 2025 - August 2025",
        location: "Islamabad, Pakistan",
        description: "Currently working as a Full Stack Developer, contributing to ongoing projects and platform enhancements. Developed scalable web applications using Laravel and TypeScript with modern DevOps practices.",
        highlights: [
          "Full-stack development with Laravel and TypeScript",
          "MySQL database design and optimization",
          "RESTful APIs and third-party service integration",
          "CI/CD and deployment automation"
        ],
        tools: ["Laravel", "TypeScript", "MySQL", "REST APIs", "DevOps", "CI/CD"]
    },
      
  {
    title: "Solution Design Intern",
    company: "Inbox Business Technologies",
    type: "Experience",
    year: "2024",
    location: "Islamabad, Pakistan",
    description: "Worked on backend development of an Attendance Management System using Express.js, built RESTful APIs for AI chatbots, and optimized MongoDB schemas for efficient data storage in MERN applications.",
    highlights: [
      "Backend development with Express.js routing and middleware",
      "RESTful APIs for AI chatbot integration",
      "MongoDB schema optimization for MERN applications"
    ],
    tools: ["Express.js", "MongoDB", "Node.js", "REST APIs", "MERN Stack"]
  },
  {
    title: "Freelance E-commerce Platform",
    company: "Freelance Project",
    type: "Experience",
    year: "2023",
    location: "Remote",
    description: "Built a scalable e-commerce platform with user-friendly experience, featuring intuitive front-end design and robust backend functionality using modern web technologies.",
    highlights: [
      "Scalable e-commerce platform development",
      "User-friendly interface design",
      "Database management with PhpMyAdmin"
    ],
    tools: ["HTML", "CSS", "PHP", "PhpMyAdmin", "MySQL"]
  }
];

const education = [
  {
    title: "Bachelor's in Computer Science",
    institution: "National University of Computer and Emerging Sciences - FAST",
    type: "Education",
    year: "2021-2025",
    location: "Islamabad, Pakistan",
    description: "Comprehensive computer science education covering algorithms, data structures, software engineering, database systems, and modern web development technologies.",
    highlights: [
      "Strong foundation in computer science fundamentals",
      "Software engineering and system design",
      "Database systems and web development",
      "Final year project: SmartTutor platform"
    ],
    tools: ["C++", "Java", "Python", "JavaScript", "React", "Node.js", "MySQL"]
  },
  {
    title: "Pre Engineering",
    institution: "F.G Sir Syed College",
    type: "Education",
    year: "2019-2021",
    location: "Islamabad, Pakistan",
    description: "Pre-engineering studies with focus on mathematics, physics, and chemistry, providing strong analytical and problem-solving foundation for engineering studies.",
    highlights: [
      "Advanced mathematics and physics",
      "Analytical problem-solving skills",
      "Foundation for engineering studies"
    ],
    tools: ["Mathematics", "Physics", "Chemistry", "Problem Solving"]
  }
];

const EducationExperience = () => {
  return (
    <section id="education-experience" className="py-20 bg-gradient-to-br from-white to-background">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-4xl font-bold text-primary mb-4">Education & Experience</h2>
          <p className="text-muted max-w-2xl mx-auto">
            My academic journey and professional experience that shaped my expertise
          </p>
        </motion.div>

        {/* Experience Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center mb-8">
            <div className="bg-primary/20 p-3 rounded-full mr-4">
              <FaBriefcase className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-3xl font-bold text-dark">Professional Experience</h3>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-surface rounded-2xl shadow-xl p-8 flex flex-col hover:shadow-2xl transition-shadow duration-300 group"
                whileHover={{ scale: 1.03 }}
              >
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="inline-block bg-primary/10 text-primary font-semibold px-3 py-1 rounded-full text-xs tracking-wide">
                      {exp.type}
                    </span>
                    <span className="text-sm text-muted flex items-center gap-1">
                      <FaCalendarAlt className="w-3 h-3" />
                      {exp.year}
                    </span>
                  </div>
                  <h4 className="font-heading text-xl font-bold text-dark mb-1">{exp.title}</h4>
                  <p className="text-base text-primary font-semibold mb-2">{exp.company}</p>
                  <div className="flex items-center gap-1 text-sm text-muted mb-3">
                    <FaMapMarkerAlt className="w-3 h-3" />
                    {exp.location}
                  </div>
                  <p className="text-muted mb-4 text-sm leading-relaxed">{exp.description}</p>
                </div>

                <div className="mb-4">
                  <h5 className="text-sm font-semibold text-dark mb-2">Key Highlights:</h5>
                  <ul className="space-y-1">
                    {exp.highlights.map((highlight, i) => (
                      <li key={i} className="text-xs text-muted flex items-start">
                        <span className="text-primary mr-2 mt-1">•</span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {exp.tools.map((tool, i) => (
                    <span
                      key={i}
                      className="inline-block bg-primary/10 text-primary font-semibold px-2 py-1 rounded-full text-xs tracking-wide group-hover:bg-primary/20 transition-colors duration-200"
                    >
                      {tool}
                    </span>
                  ))}
                </div>

                <motion.div
                  className="mt-auto flex items-center justify-center"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="flex items-center gap-2 text-primary font-semibold text-sm">
                    <FaBriefcase className="w-4 h-4" />
                    Professional Experience
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Education Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center mb-8">
            <div className="bg-secondary/20 p-3 rounded-full mr-4">
              <FaGraduationCap className="w-6 h-6 text-secondary" />
            </div>
            <h3 className="text-3xl font-bold text-dark">Education</h3>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-surface rounded-2xl shadow-xl p-8 flex flex-col hover:shadow-2xl transition-shadow duration-300 group"
                whileHover={{ scale: 1.03 }}
              >
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="inline-block bg-secondary/10 text-secondary font-semibold px-3 py-1 rounded-full text-xs tracking-wide">
                      {edu.type}
                    </span>
                    <span className="text-sm text-muted flex items-center gap-1">
                      <FaCalendarAlt className="w-3 h-3" />
                      {edu.year}
                    </span>
                  </div>
                  <h4 className="font-heading text-xl font-bold text-dark mb-1">{edu.title}</h4>
                  <p className="text-base text-secondary font-semibold mb-2">{edu.institution}</p>
                  <div className="flex items-center gap-1 text-sm text-muted mb-3">
                    <FaMapMarkerAlt className="w-3 h-3" />
                    {edu.location}
                  </div>
                  <p className="text-muted mb-4 text-sm leading-relaxed">{edu.description}</p>
                </div>

                <div className="mb-4">
                  <h5 className="text-sm font-semibold text-dark mb-2">Key Highlights:</h5>
                  <ul className="space-y-1">
                    {edu.highlights.map((highlight, i) => (
                      <li key={i} className="text-xs text-muted flex items-start">
                        <span className="text-secondary mr-2 mt-1">•</span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {edu.tools.map((tool, i) => (
                    <span
                      key={i}
                      className="inline-block bg-secondary/10 text-secondary font-semibold px-2 py-1 rounded-full text-xs tracking-wide group-hover:bg-secondary/20 transition-colors duration-200"
                    >
                      {tool}
                    </span>
                  ))}
                </div>

                <motion.div
                  className="mt-auto flex items-center justify-center"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="flex items-center gap-2 text-secondary font-semibold text-sm">
                    <FaGraduationCap className="w-4 h-4" />
                    Academic Achievement
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EducationExperience;
