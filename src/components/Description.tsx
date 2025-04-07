'use client';

import { motion } from 'framer-motion';
import { CalendarIcon, SparklesIcon, HeartIcon } from '@heroicons/react/24/outline';

export default function Description() {
  return (
    <div className="relative isolate overflow-hidden bg-white py-24 sm:py-32">
      {/* Gradient decoration */}
      <div className="absolute -z-10 top-0 left-1/2 -translate-x-1/2 blur-3xl" aria-hidden="true">
        <div
          className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-10"
          style={{
            clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <motion.h2
            className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Why DeedDiary?
          </motion.h2>
          <motion.p
            className="mt-6 text-lg leading-8 text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            In today's fast-paced world, it's easy to forget the small acts of kindness that make a big difference. DeedDiary helps you capture these meaningful moments, creating a personal archive of positivity that you can revisit whenever you need inspiration.
          </motion.p>
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:mt-10 lg:max-w-none lg:grid-cols-12 lg:gap-x-16 items-center">
          <motion.div
            className="lg:col-span-4"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="relative overflow-hidden rounded-2xl bg-gray-50 p-8">
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-500 opacity-10 blur" />
              <div className="relative">
                <div className="flex items-center gap-3">
                  <CalendarIcon className="h-6 w-6 text-indigo-600" />
                  <div className="font-semibold text-gray-900">Daily Inspiration</div>
                </div>
                <p className="mt-4 text-gray-700">
                  Each new tab becomes an opportunity to reflect on your positive impact. With beautiful wallpapers and your past acts of kindness, stay motivated to continue spreading goodness.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="lg:col-span-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="relative overflow-hidden rounded-2xl bg-gray-50 p-8">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-pink-500 opacity-10 blur" />
              <div className="relative">
                <div className="flex items-center gap-3">
                  <SparklesIcon className="h-6 w-6 text-purple-600" />
                  <div className="font-semibold text-gray-900">Personal Growth</div>
                </div>
                <p className="mt-4 text-gray-700">
                  Track your journey of kindness over time. Watch as small, consistent acts of goodwill create a meaningful impact in your life and the lives of others.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="lg:col-span-4"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <div className="relative overflow-hidden rounded-2xl bg-gray-50 p-8">
              <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 to-indigo-500 opacity-10 blur" />
              <div className="relative">
                <div className="flex items-center gap-3">
                  <HeartIcon className="h-6 w-6 text-pink-600" />
                  <div className="font-semibold text-gray-900">Mindful Reflection</div>
                </div>
                <p className="mt-4 text-gray-700">
                  Transform your browsing experience into mindful moments of reflection. DeedDiary helps you stay connected to what matters most - making a positive difference.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <a
            href="https://chromewebstore.google.com/detail/deeddiary/defbebpcmhejgjjoedokohipfljpaidb"
            className="text-sm font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
          >
            Start your journey today <span aria-hidden="true">→</span>
          </a>
        </motion.div>
      </div>
    </div>
  );
} 