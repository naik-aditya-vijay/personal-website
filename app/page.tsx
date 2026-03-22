"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="min-h-screen bg-white bg-texture-pattern px-6 py-20">

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16"
      >

        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col items-center text-center"
        >

          {/* Profile Image */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
          className="mb-8"
        >
        <Image
          src="/profile.jpg"
          alt="Aditya Naik"
          width={260}
          height={260}
          className="rounded-full object-cover shadow-xl transition duration-300 hover:shadow-2xl"
        />
        </motion.div>

          {/* Name */}
          <h1 className="text-4xl md:text-5xl font-bold mb-3">
            Aditya Naik
          </h1>

          {/* Tagline */}
          <p className="text-lg text-gray-600 max-w-xs">
            Visionary • Entrepreneurial • Empathetic
          </p>

        </motion.div>

        {/* Divider (desktop only) */}
        <div className="hidden md:block w-px bg-gray-200 h-96"></div>

        {/* RIGHT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="max-w-2xl text-center md:text-left space-y-5"
        >

          <p className="text-gray-500">
            Thanks for visiting my page!
          </p>

          <p className="text-gray-500">
            I'd love to connect with you to get to know you and your life,
            work, ideas, passions, aspirations, or share these things about
            myself if you are interested to listen.
          </p>

          <p className="text-gray-500">
            Born in India, currently residing in the US. Trying to make the
            juice worth the squeeze (iykyk).
          </p>

          <p className="text-gray-500">
            Professionally, I am a Senior Business Analyst at one of the largest
            not-for-profit health insurance companies in the US. I get to work
            with amazing people on amazing projects with amazing challenges.
          </p>

          <p className="text-gray-500">
            Academically, I am pursuing a Doctorate in Business Administration
            with a Master's in Business Analytics (University of Rochester, 2022)
            and Bachelor's in Computer Science (Symbiosis International University, 2018).
          </p>

          <p className="text-gray-500">
            Personally, I have three interests — meeting people, overthinking,
            and sports.
          </p>

          <p className="text-gray-500">
            If this introduction interests you, I invite you to spend some more
            time on this website or hit me up and we can connect.
          </p>

        </motion.div>

      </motion.div>

    </main>
  );
}