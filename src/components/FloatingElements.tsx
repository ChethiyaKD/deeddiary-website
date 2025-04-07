'use client';

import { motion, Variants } from 'framer-motion';

const elements = [
  {
    type: 'circle',
    className: 'w-12 h-12 rounded-full bg-gradient-to-br from-indigo-400/20 to-purple-400/20 absolute top-20 left-1/4',
    delay: 0,
  },
  {
    type: 'square',
    className: 'w-16 h-16 rotate-45 bg-gradient-to-tr from-pink-400/20 to-indigo-400/20 absolute top-40 right-1/3',
    delay: 0.2,
  },
  {
    type: 'ring',
    className: 'w-20 h-20 rounded-full border-4 border-indigo-200/30 absolute bottom-40 left-1/3',
    delay: 0.4,
  },
  {
    type: 'dots',
    className: 'w-24 h-24 absolute top-1/3 right-1/4',
    delay: 0.6,
  },
  {
    type: 'lines',
    className: 'w-32 h-32 absolute bottom-1/4 right-1/3',
    delay: 0.8,
  },
];

const floatingAnimation: Variants = {
  initial: { 
    opacity: 0, 
    scale: 0.5 
  },
  animate: {
    opacity: 1,
    scale: 1,
    y: [0, -20, 0],
    x: [0, 10, 0],
    rotate: [0, 10, -10, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut",
    },
  },
};

const dotsPattern = Array(9).fill(0).map((_, i) => (
  <motion.div
    key={i}
    className="w-1.5 h-1.5 rounded-full bg-indigo-300/30"
    style={{
      position: 'absolute',
      top: `${Math.floor(i / 3) * 40}%`,
      left: `${(i % 3) * 40}%`,
    }}
    animate={{
      scale: [1, 1.2, 1],
      opacity: [0.3, 0.6, 0.3],
    }}
    transition={{
      duration: 2,
      repeat: Infinity,
      delay: i * 0.1,
    }}
  />
));

const linesPattern = Array(3).fill(0).map((_, i) => (
  <motion.div
    key={i}
    className="w-full h-0.5 bg-gradient-to-r from-transparent via-purple-300/30 to-transparent"
    style={{
      position: 'absolute',
      top: `${30 + i * 30}%`,
    }}
    animate={{
      scaleX: [1, 1.2, 1],
      opacity: [0.2, 0.4, 0.2],
    }}
    transition={{
      duration: 3,
      repeat: Infinity,
      delay: i * 0.3,
    }}
  />
));

export default function FloatingElements() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {elements.map((element, index) => (
        <motion.div
          key={index}
          className={element.className}
          initial="initial"
          animate="animate"
          transition={{ delay: element.delay }}
          variants={floatingAnimation}
        >
          {element.type === 'dots' && dotsPattern}
          {element.type === 'lines' && linesPattern}
        </motion.div>
      ))}
    </div>
  );
} 