import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaFacebookF, FaLinkedinIn, FaGithub, FaEnvelope } from 'react-icons/fa';

const socialLinks = [
  { icon: <FaFacebookF />, url: 'https://www.facebook.com/munam.mustafa.169/', label: 'Facebook' },
  { icon: <FaGithub />, url: 'https://github.com/Munam252', label: 'GitHub' },
  { icon: <FaLinkedinIn />, url: 'https://www.linkedin.com/in/munam-mustafa-30373a272/', label: 'LinkedIn' },
  { icon: <FaEnvelope />, url: 'mailto:munammustafa253@gmail.com', label: 'Email' },
];

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    setSubmitted(true);
    // You can add email sending logic here (e.g., EmailJS, Formspree, etc.)
  };

  return (
    <section id="contact" className="py-20 bg-surface flex justify-center items-center min-h-[60vh]">
      <div className="w-full max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-heading text-4xl font-bold text-primary mb-4">Contact Me</h2>
          <p className="text-muted max-w-xl mx-auto">
            Interested in working together or have a question? Fill out the form below or connect with me on social media.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="bg-white/80 rounded-3xl shadow-2xl p-10 backdrop-blur-lg"
        >
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center text-lg text-primary font-semibold py-12"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', stiffness: 300, delay: 0.2 }}
                className="flex justify-center mb-4"
              >
                <svg className="w-16 h-16 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </motion.div>
              Thank you for reaching out! I'll get back to you soon.
            </motion.div>
          ) : (
            <form className="space-y-6" onSubmit={handleSubmit} autoComplete="off">
              <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }}>
                <label className="block text-dark font-semibold mb-2" htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-muted/30 bg-surface focus:outline-none focus:ring-2 focus:ring-primary text-dark font-medium"
                />
              </motion.div>
              <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
                <label className="block text-dark font-semibold mb-2" htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-muted/30 bg-surface focus:outline-none focus:ring-2 focus:ring-primary text-dark font-medium"
                />
              </motion.div>
              <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}>
                <label className="block text-dark font-semibold mb-2" htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-muted/30 bg-surface focus:outline-none focus:ring-2 focus:ring-primary text-dark font-medium"
                />
              </motion.div>
              <motion.button
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-primary to-secondary text-white font-heading text-lg font-bold uppercase tracking-wide rounded-full shadow-xl ring-2 ring-primary/30 backdrop-blur-md hover:scale-105 hover:-translate-y-1 hover:from-secondary hover:to-primary transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-secondary/40"
                whileHover={{ scale: 1.04 }}
              >
                Send Message
              </motion.button>
            </form>
          )}

          {/* Social Icons */}
          <div className="flex justify-center gap-6 mt-10">
            {socialLinks.map((link, i) => (
              <motion.a
                key={i}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-secondary text-2xl p-3 rounded-full bg-primary/10 hover:bg-secondary/10 transition-colors duration-200"
                whileHover={{ scale: 1.2 }}
                title={link.label}
              >
                {link.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact; 