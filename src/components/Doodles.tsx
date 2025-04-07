'use client';

import { motion, Variants } from 'framer-motion';

const doodles = [
  // Hearts
  {
    path: "M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z",
    viewBox: "0 0 24 24",
    className: "text-pink-200 w-6 h-6 absolute top-12 left-1/4",
    delay: 0,
  },
  {
    path: "M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z",
    viewBox: "0 0 24 24",
    className: "text-purple-200 w-4 h-4 absolute bottom-32 right-1/4",
    delay: 0.5,
  },
  // Stars
  {
    path: "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z",
    viewBox: "0 0 24 24",
    className: "text-indigo-200 w-5 h-5 absolute top-1/4 right-1/3",
    delay: 0.2,
  },
  {
    path: "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z",
    viewBox: "0 0 24 24",
    className: "text-cyan-200 w-7 h-7 absolute bottom-1/4 left-1/3",
    delay: 0.7,
  },
  // Circles
  {
    path: "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z",
    viewBox: "0 0 24 24",
    className: "text-teal-200 w-8 h-8 absolute top-1/3 left-1/5",
    delay: 0.3,
  },
  {
    path: "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z",
    viewBox: "0 0 24 24",
    className: "text-rose-200 w-5 h-5 absolute bottom-1/3 right-1/5",
    delay: 0.8,
  },
  // Squiggles
  {
    path: "M0 12c3.5 0 3.5-6 7-6s3.5 6 7 6 3.5-6 7-6 3.5 6 7 6",
    viewBox: "0 0 28 24",
    className: "text-purple-200 w-8 h-8 absolute top-1/2 right-1/4",
    delay: 0.4,
  },
  {
    path: "M0 12c3.5 0 3.5-6 7-6s3.5 6 7 6 3.5-6 7-6 3.5 6 7 6",
    viewBox: "0 0 28 24",
    className: "text-indigo-200 w-6 h-6 absolute bottom-1/2 left-1/4",
    delay: 0.9,
  },
  // Plus signs
  {
    path: "M12 5v14M5 12h14",
    viewBox: "0 0 24 24",
    className: "text-pink-200 w-4 h-4 absolute top-2/3 right-1/3 stroke-2",
    delay: 0.1,
  },
  {
    path: "M12 5v14M5 12h14",
    viewBox: "0 0 24 24",
    className: "text-blue-200 w-6 h-6 absolute bottom-2/3 left-1/3 stroke-2",
    delay: 0.6,
  },
  // Dots
  {
    path: "M12 14a2 2 0 100-4 2 2 0 000 4z",
    viewBox: "0 0 24 24",
    className: "text-violet-200 w-3 h-3 absolute top-3/4 left-1/2",
    delay: 0.2,
  },
  {
    path: "M12 14a2 2 0 100-4 2 2 0 000 4z",
    viewBox: "0 0 24 24",
    className: "text-emerald-200 w-4 h-4 absolute bottom-3/4 right-1/2",
    delay: 0.7,
  },
];

const floatingAnimation: Variants = {
  initial: { y: 0, opacity: 0, scale: 0 },
  animate: {
    y: [0, -15, 0],
    rotate: [0, 10, -10, 0],
    scale: [1, 1.1, 1],
    opacity: [0.5, 0.8, 0.5],
    transition: {
      duration: 5,
      repeat: Infinity,
      repeatType: "mirror",
      ease: "easeInOut",
    }
  }
};

export default function Doodles() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
      {doodles.map((doodle, index) => (
        <motion.svg
          key={index}
          viewBox={doodle.viewBox}
          className={doodle.className}
          fill="currentColor"
          initial="initial"
          animate="animate"
          transition={{ delay: doodle.delay }}
          variants={floatingAnimation}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d={doodle.path} />
        </motion.svg>
      ))}
    </div>
  );
} 