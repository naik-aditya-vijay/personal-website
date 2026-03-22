"use client";

import Image from "next/image";
import { motion, useScroll } from "framer-motion";

export default function Journey() {
  const { scrollYProgress } = useScroll();
  const events = [
    {
      date: "September 2024",
      title: "Moved to Jacksonville",
      description: "Although the role was remote, I couldn't pass the opportunity to work from the HQ.",
      image: "/jacksonville.jpg",
    },
    {
      date: "August 2024",
      title: "Meet the Senior Business Analyst of Florida Blue",
      description: "Joined the value-based analytics group at Florida Blue.",
      image: "/floridablue.jpg",
    },
    {
      date: "April 2024",
      title: "Hit a bump - layoff",
      description: "A difficult but important moment that pushed me to rethink the next step. During the unemployment phase, I related to this image quite a lot. It reminded me that I need to step away, look at the bigger picture and realize that the sky is bright and clear beyond the thick clouds. FYI - this was taken from my condominium in Chicago.",
      image: "/layoff.jpg",
    },
    {
      date: "January 2024",
      title: "Moved to Chicago",
      description: "I had visited Chicago multiple times a year before when I was living in Indianapolis; and I just fell in love with the city. I took the leap and in hindsigh, it was worth it!",
      image: "/chicago.jpg",
    },
    {
      date: "January 2023",
      title: "Moved to Indianapolis",
      description: "First move after graduating. Rochester, NY was amazing but it was time for change. Lived in an apartment right on the Downtown Canal Walk with this beautiful view. Incidentally, Indianapolis, IN was also the first city I visited in the US (except Rochester where I studied).",
      image: "/indianapolis.jpg",
    },

    {
      date: "December 2022",
      title: "MS in Business Analytics",
      description: "Months of grinding, finally paid off. One of the best experiences of my life. The journey was immensely satisfying.",
      image: "/graduation.jpg",
    },
    {
      date: "August 2021",
      title: "Welcome me to the United States of America!",
      description: "Excited. Nervous. Hopeful. Skeptical. Happy. Afraid. Eager.",
      image: "/usa.jpg",
    },
    {
      date: "September 2018",
      title: "Management Executive @ Aeon",
      description: "My first professional experience. Let's unlearn what I learned for past four years.",
      image: "/aeon_logo.jpg",
    },
    {
      date: "May 2018",
      title: "BAchelor of Technology - Computer Science",
      description: "Now let's get to work!",
      image: "/bachelors.jpg",
    },
    {
      date: "April 2017",
      title: "Diploma in Business Management",
      description: "An early step toward understanding business.",
      image: "/dbm.png",
    },
    
  ];

  return (
    <main className="min-h-screen pl-16 pr-6 py-20 max-w-6xl mx-auto">
      {/* Scroll progress indicator */}
      <div className="fixed left-8 top-0 h-full w-1 bg-gray-200 z-40">

        <motion.div
          className="w-full bg-blue-600 h-full origin-top"
          style={{ scaleY: scrollYProgress }}
        />
      </div>
      <h1 className="text-4xl font-bold text-center mb-24">
        Hold on tight, it's a rollercoaster ride!
      </h1>

      <div className="space-y-32">

        {events.map((event, index) => {

          const isLeft = index % 2 === 0;

          return (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className={`flex flex-col md:flex-row items-center gap-12 ${
                isLeft ? "" : "md:flex-row-reverse"
              }`}
            >

              {/* Image */}
              <div className="w-full md:w-1/2">
                <Image
                  src={event.image}
                  alt={event.title}
                  width={600}
                  height={400}
                  className="rounded-2xl shadow-lg object-cover"
                />
              </div>

              {/* Text */}
              <div className="w-full md:w-1/2">

                <p className="text-gray-500 mb-2">
                  {event.date}
                </p>

                <h3 className="text-2xl font-semibold mb-4">
                  {event.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {event.description}
                </p>

              </div>

            </motion.div>

          );
        })}

      </div>

    </main>
  );
}