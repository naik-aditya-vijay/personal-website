"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Personal() {
  const sections = [
    {
      title: "Journey",
      desc: "Milestones, pivots, and moments that shaped me",
      href: "/personal/journey",
      emoji: "🧭",
      color: "from-blue-500/10 to-transparent",
    },
    {
      title: "Thoughts & Writing",
      desc: "Because I just couldn't sleep that night",
      href: "/personal/thoughts",
      emoji: "✍️",
      color: "from-purple-500/10 to-transparent",
    },
    {
      title: "Endeavours",
      desc: "Things I build, explore, and experiment with",
      href: "/personal/endeavours",
      emoji: "🚀",
      color: "from-orange-500/10 to-transparent",
    },
    {
      title: "Photos",
      desc: `The "I am an artist" section`,
      href: "/personal/photos",
      emoji: "📷",
      color: "from-green-500/10 to-transparent",
    },
  ];

  // 🔹 Container animation (stagger children)
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  // 🔹 Card animation
  const item = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <main className="min-h-screen px-6 py-24 max-w-5xl mx-auto">

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-20"
      >
        <h1 className="text-5xl font-bold mb-4 tracking-tight">
          Beyond my resume
        </h1>

        <p className="text-gray-500 text-lg">
          The parts of me that don’t fit on a single page
        </p>

        <div className="mt-6 w-16 h-[2px] bg-gray-300 mx-auto" />
      </motion.div>

      {/* Grid */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 md:grid-cols-2 gap-10"
      >
        {sections.map((section, index) => (
          <motion.div key={index} variants={item}>
            <Link
              href={section.href}
              className="group relative p-8 rounded-2xl border bg-white 
                         transition-all duration-500 ease-out
                         hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02]
                         overflow-hidden block"
            >
              {/* Background Glow */}
              <div
                className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br ${section.color}`}
              />

              {/* Content */}
              <div className="relative z-10 flex flex-col justify-between h-full">

                {/* Top Row */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl">
                    {section.emoji}
                  </span>

                  <span className="transition-transform duration-300 group-hover:translate-x-2 text-gray-400">
                    →
                  </span>
                </div>

                {/* Title */}
                <h2 className="text-2xl font-semibold mb-2 text-black">
                  {section.title}
                </h2>

                {/* Description */}
                <p className="text-gray-600">
                  {section.desc}
                </p>

              </div>

              {/* Shine Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-10 bg-white blur-2xl transition duration-500" />
            </Link>
          </motion.div>
        ))}
      </motion.div>

    </main>
  );
}