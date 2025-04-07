'use client';

import { motion } from 'framer-motion';
import { StarIcon } from '@heroicons/react/20/solid';
import BackgroundPattern from './BackgroundPattern';

const reviews = [
  {
    id: 1,
    rating: 5,
    content: "Very simple, yet the elements feel smooth. One more thing is that couldn't save the note and didn't have a button to do it, but figured out that closing the modal automatically saves the note. However, it needs refresh the tab to display it. For now, it's very clean with updatable backgrounds. Overall, the experience was nice.",
    author: "Kasun Chanuka Fernando",
    role: "Developer",
  },
  {
    id: 2,
    rating: 5,
    content: "DeedDiary is a gem of a Chrome extension that enhances your daily internet routine by reminding you of the good deeds you've performed. Logging these acts of kindness is easy and revisiting them on their anniversary is a delightful experience. The daily wallpapers add a calming touch to each new tab, making your browsing both soothing and inspiring. Highly recommended for anyone looking to bring a splash of joy and mindfulness to their day. Download DeedDiary and start spreading kindness!",
    author: "Lakpriya Senevirathna",
    role: "Software Engineer",
  },
  {
    id: 3,
    rating: 5,
    content: "Remembering the good things I've done keeps me feeling positive and proud. It's a little boost of self-appreciation that brightens my day.",
    author: "Kevin",
    role: "Entrepreneur",
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

export default function Reviews() {
  return (
    <div className="relative bg-gray-50 py-24 sm:py-32" id="reviews">
      <BackgroundPattern />
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div 
          className="mx-auto max-w-2xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Loved by users worldwide
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            See what our users have to say about their experience with DeedDiary.
          </p>
        </motion.div>
        <motion.div 
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {reviews.map((review) => (
            <motion.div
              key={review.id}
              className="flex flex-col justify-between bg-white p-8 shadow-sm ring-1 ring-gray-200 rounded-2xl"
              variants={itemVariants}
              whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
            >
              <div>
                <div className="flex gap-x-1">
                  {[...Array(review.rating)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <StarIcon className="h-5 w-5 text-yellow-400" aria-hidden="true" />
                    </motion.div>
                  ))}
                </div>
                <p className="mt-4 text-lg leading-6 text-gray-600">{review.content}</p>
              </div>
              <div className="mt-6">
                <p className="text-base font-semibold text-gray-900">{review.author}</p>
                <p className="text-sm text-gray-600">{review.role}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
} 