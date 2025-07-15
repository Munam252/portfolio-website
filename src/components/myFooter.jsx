import React from 'react';
import { FaFacebookF, FaLinkedinIn, FaGithub, FaEnvelope } from 'react-icons/fa';

const socialLinks = [
  { icon: <FaFacebookF />, url: 'https://www.facebook.com/munam.mustafa.169/', label: 'Facebook' },
  { icon: <FaGithub />, url: 'https://github.com/Munam252', label: 'GitHub' },
  { icon: <FaLinkedinIn />, url: 'https://www.linkedin.com/in/munam-mustafa-30373a272/', label: 'LinkedIn' },
  { icon: <FaEnvelope />, url: 'mailto:munammustafa253@gmail.com', label: 'Email' },
];

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];

function myFooter() {
  return (
    <footer className="w-full px-4 py-10 mt-10 bg-white/70 dark:bg-dark/70 backdrop-blur-lg rounded-t-3xl shadow-2xl border-t border-muted/30">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Social Icons */}
        <div className="flex gap-4 mb-6 md:mb-0">
          {socialLinks.map((link, i) => (
            <a
              key={i}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              className="text-primary hover:text-secondary text-xl p-2 rounded-full bg-primary/10 hover:bg-secondary/10 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary"
              title={link.label}
            >
              {link.icon}
            </a>
          ))}
        </div>
        {/* Quick Links */}
        <nav className="flex flex-wrap gap-6 justify-center mb-6 md:mb-0">
          {navLinks.map(link => (
            <a
              key={link.name}
              href={link.href}
              className="text-muted hover:text-primary font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary rounded px-2 py-1"
            >
              {link.name}
            </a>
          ))}
        </nav>
        {/* Copyright */}
        <div className="text-center text-sm text-muted font-medium">
          © {new Date().getFullYear()} Munam Mustafa. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default myFooter;