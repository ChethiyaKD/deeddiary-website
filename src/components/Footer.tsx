'use client';

import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';
import BackgroundPattern from './BackgroundPattern';

const navigation = {
  main: [
    { name: 'Home', href: '#' },
    { name: 'Features', href: '#features' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Contact', href: '#contact' },
  ],
  social: [
    {
      name: 'GitHub',
      href: 'https://github.com/ChethiyaKD',
      icon: FaGithub,
    },
  ],
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export default function Footer() {
  return (
    <footer className="relative bg-white">
      <BackgroundPattern />
      <div className="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
        <motion.nav 
          className="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {navigation.main.map((item) => (
            <motion.div key={item.name} variants={itemVariants}>
              <a href={item.href} className="text-sm leading-6 text-gray-600 hover:text-gray-900">
                {item.name}
              </a>
            </motion.div>
          ))}
        </motion.nav>
        <motion.div 
          className="mt-10 flex justify-center space-x-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {navigation.social.map((item) => (
            <motion.a
              key={item.name}
              href={item.href}
              className="text-gray-400 hover:text-gray-500"
              variants={itemVariants}
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <span className="sr-only">{item.name}</span>
              <item.icon className="h-6 w-6" aria-hidden="true" />
            </motion.a>
          ))}
        </motion.div>
        <motion.p 
          className="mt-10 text-center text-xs leading-5 text-gray-500"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          &copy; {new Date().getFullYear()} DeedDiary. All rights reserved.
        </motion.p>
      </div>
    </footer>
  );
} 