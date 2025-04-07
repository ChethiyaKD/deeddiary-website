'use client';

import { motion } from 'framer-motion';
import {
  ClipboardDocumentCheckIcon,
  ClockIcon,
  PhotoIcon,
  MagnifyingGlassIcon,
} from '@heroicons/react/24/outline';
import FloatingElements from './FloatingElements';

const features = [
  {
    name: 'Log Good Deeds with Ease',
    description: 'Quickly record your acts of kindness with a simple, intuitive interface.',
    icon: ClipboardDocumentCheckIcon,
    gradient: 'from-purple-400 to-indigo-400',
  },
  {
    name: 'Revisit Your Past Acts of Kindness',
    description: 'Look back on your journey of positivity and personal growth.',
    icon: ClockIcon,
    gradient: 'from-indigo-400 to-cyan-400',
  },
  {
    name: 'Beautiful, Calming Wallpapers',
    description: 'Enjoy serene backgrounds that help maintain a positive mindset.',
    icon: PhotoIcon,
    gradient: 'from-cyan-400 to-teal-400',
  },
  {
    name: 'New Tab Integration with Clock & Search',
    description: 'Transform your new tab into a productivity hub with time and search functionality.',
    icon: MagnifyingGlassIcon,
    gradient: 'from-teal-400 to-purple-400',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
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

export default function Features() {
  return (
    <div id="features" className="relative bg-white py-24 sm:py-32">
      <FloatingElements />
      
      {/* Decorative background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[calc(50%-18rem)] top-[calc(50%-20rem)] transform-gpu blur-3xl">
          <div className="aspect-[1108/632] w-[69.25rem] bg-gradient-to-r from-purple-200 to-indigo-200 opacity-20" 
            style={{
              clipPath: 'polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)'
            }}
          />
        </div>
        <div className="absolute left-[calc(50%+18rem)] top-[calc(50%+20rem)] transform-gpu blur-3xl">
          <div className="aspect-[1108/632] w-[69.25rem] bg-gradient-to-r from-indigo-200 to-purple-200 opacity-20"
            style={{
              clipPath: 'polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)'
            }}
          />
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div 
          className="mx-auto max-w-2xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-base font-semibold leading-7 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Features</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need to track your journey of kindness
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            DeedDiary combines beautiful design with powerful features to help you maintain and reflect on your positive impact.
          </p>
        </motion.div>
        <motion.div 
          className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
            {features.map((feature) => (
              <motion.div
                key={feature.name}
                className="group relative"
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
              >
                <div className="relative">
                  <div className={`absolute -inset-1 rounded-lg bg-gradient-to-r ${feature.gradient} opacity-10 blur transition group-hover:opacity-20`} />
                  <div className="relative rounded-lg bg-white p-6 ring-1 ring-gray-900/5">
                    <dt className="inline-flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                      <motion.div
                        className={`flex min-h-12 min-w-12 h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r ${feature.gradient}`}
                        style={{width:48, height:48, minWidth:48, minHeight:48}}
                      >
                        <feature.icon className="h-7 w-7 text-white stroke-[1.5]" aria-hidden="true" />
                      </motion.div>
                      {feature.name}
                    </dt>
                    <dd className="mt-4 text-base leading-7 text-gray-600">{feature.description}</dd>
                  </div>
                </div>
              </motion.div>
            ))}
          </dl>
        </motion.div>
      </div>
    </div>
  );
} 