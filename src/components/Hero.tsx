'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Hero() {
  return (
    <div className="relative overflow-hidden bg-white">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/40 via-white to-purple-50/40" />
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left column - Text content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.div
              className="inline-flex items-center gap-x-2 rounded-full px-4 py-1 bg-indigo-50 mb-6"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <span className="text-sm font-medium text-indigo-600">New Update</span>
              <div className="h-4 w-px bg-indigo-200" />
              <span className="text-sm text-gray-600">Beautiful wallpapers added</span>
            </motion.div>

            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Turn Every Tab Into a Positive Habit
            </motion.h1>

            <motion.p 
              className="mt-6 text-lg text-gray-600 max-w-xl mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              DeedDiary helps you log your daily good deeds and reminds you of your kindness year after year.
            </motion.p>

            <motion.div 
              className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <a
                href="https://chromewebstore.google.com/detail/deeddiary/defbebpcmhejgjjoedokohipfljpaidb"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full px-8 py-3 text-base font-semibold text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 shadow-md hover:shadow-lg transition-all duration-200"
              >
                Download Extension
                <motion.span 
                  className="ml-2 inline-block"
                  animate={{ x: [0, 3, 0] }}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  →
                </motion.span>
              </a>
              <a 
                href="#features" 
                className="inline-flex items-center justify-center rounded-full px-8 py-3 text-base font-semibold text-gray-900 hover:text-indigo-600 bg-gray-50 hover:bg-gray-100 transition-all duration-200"
              >
                Learn more
                <span className="ml-2">→</span>
              </a>
            </motion.div>
          </motion.div>

          {/* Right column - Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-500 blur-2xl opacity-10 transform scale-95" />
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-white">
              <Image
                src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/hero-image.png`}
                alt="DeedDiary Extension Screenshot"
                width={800}
                height={533}
                className="w-full h-auto"
                priority
              />
              <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-black/10" />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
} 