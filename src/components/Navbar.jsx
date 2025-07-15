import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/60 backdrop-blur-lg shadow-xl border-b border-white/30">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3 md:py-4">
        {/* Logo/Brand */}
        <motion.a
          href="#home"
          className="font-heading text-2xl md:text-3xl font-bold text-primary tracking-tight drop-shadow-lg"
          whileHover={{ scale: 1.08, color: '#0ea5e9' }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          Munam
        </motion.a>

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-8 text-lg font-medium">
          {navLinks.map(link => (
            <motion.li key={link.name} whileHover={{ y: -3, scale: 1.08 }} transition={{ type: 'spring', stiffness: 300 }}>
              <a
                href={link.href}
                className="text-dark hover:text-primary transition-colors duration-200 px-2 py-1 rounded focus:outline-none focus:ring-2 focus:ring-primary"
              >
                {link.name}
              </a>
            </motion.li>
          ))}
        </ul>

        {/* Hamburger Icon */}
        <button
          className="md:hidden flex flex-col gap-1.5 group"
          aria-label="Open menu"
          onClick={() => setMenuOpen(v => !v)}
        >
          <span className={`block w-7 h-1 rounded bg-dark transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`block w-7 h-1 rounded bg-dark transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-7 h-1 rounded bg-dark transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.ul
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-white/95 backdrop-blur-lg flex flex-col gap-6 px-8 py-8 shadow-2xl absolute w-full left-0 top-full border-b border-muted"
          >
            {navLinks.map(link => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="block text-xl font-medium text-dark hover:text-primary transition-colors duration-200 px-2 py-1 rounded focus:outline-none focus:ring-2 focus:ring-primary"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar; 