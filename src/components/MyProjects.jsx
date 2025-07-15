import React from "react";
import { motion } from "framer-motion";
import DownloadCV from "./DownloadCV";

const projects = [
  {
    title: "SmartTutor",
    shortTitle: "Final Year Project at FAST NUCES, ISB",
    description: "Developed SmartTutor, an interactive learning platform focused on delivering seamless user experiences for both students and tutors. The platform features integrated video calling capabilities and real-time emotion tracking, allowing tutors to monitor student engagement during online sessions and tailor their teaching accordingly.",
    github: "https://github.com/muhammadraza-511/SmartTutor",
    tools: ["HTML", "CSS", "JavaScript", "Node.js", "Express.js", "PhpMyAdmin", "WebRTC", "SimplePeer", "Socket.io", "Git"]
  },
  {
    title: "Smart Timetable Scheduler",
    shortTitle: "Artificial Intelligence Course Project",
    description: "Smart Timetable Scheduler is an AI-powered system designed to solve the university timetable scheduling problem using genetic algorithms. It efficiently assigns time slots to courses, ensuring minimal conflicts between professors, sections, and classrooms.",
    github: "https://github.com/Munam252/Artificial_Intelligence_Time_Table_Scheduling",
    tools: ["Python", "IPython Notebook"]
  },
  {
    title: "ThesisFlow",
    shortTitle: "Thesis Management System",
    description: "I developed ThesisFlow, a comprehensive thesis management system built with the .NET framework to streamline thesis submission, review, and tracking for both students and faculty. The platform features user authentication, role-based access control, and a dynamic dashboard.",
    github: "https://github.com/Munam252/Thesis-management-system",
    tools: [".NET", "C#", "MySQL"]
  },
  {
    title: "Quiz System",
    shortTitle: "Full Stack Quiz Application",
    description: "Quiz System is a robust web application designed to create, manage, and take quizzes online. Built using Laravel for the backend, React for the frontend, and MySQL for data storage, it supports user authentication, real-time quiz results, and an intuitive admin panel for managing questions and users.",
    github: "https://github.com/Munam252/Laravel-React-Testing",
    tools: ["Laravel", "React", "MySQL", "TypeScript", "REST API"]
  }
];

const MyProjects = () => {
  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-white to-background">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-4xl font-bold text-primary mb-4">My Projects</h2>
          <p className="text-muted max-w-2xl mx-auto">
            A showcase of my work and contributions to various projects
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-surface rounded-2xl shadow-xl p-8 flex flex-col hover:shadow-2xl transition-shadow duration-300 group"
              whileHover={{ scale: 1.03 }}
            >
              <div className="mb-4">
                <h3 className="font-heading text-2xl font-bold text-dark mb-1">{project.title}</h3>
                {project.shortTitle && (
                  <p className="text-base text-muted mb-2">{project.shortTitle}</p>
                )}
                <p className="text-muted mb-4 text-base">{project.description}</p>
              </div>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tools.map((tool, i) => (
                  <span
                    key={i}
                    className="inline-block bg-primary/10 text-primary font-semibold px-3 py-1 rounded-full text-xs tracking-wide group-hover:bg-primary/20 transition-colors duration-200"
                  >
                    {tool}
                  </span>
                ))}
              </div>
              <motion.a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-primary to-secondary text-white font-heading rounded-full shadow hover:from-secondary hover:to-primary hover:scale-105 transition-all duration-300"
                whileHover={{ scale: 1.07 }}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path>
                </svg>
                View on GitHub
              </motion.a>
            </motion.div>
          ))}
        </div>

        <div className="mt-20">
          <DownloadCV />
        </div>
      </div>
    </section>
  );
};

export default MyProjects;