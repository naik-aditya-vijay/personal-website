"use client";

import Image from "next/image";
import { motion, useScroll } from "framer-motion";

export default function Journey() {
  const { scrollYProgress } = useScroll();
  const events = [
    {
      date: "January 2026",
      title: "Doctorate in Business Administration",
      description: "Started the DBA at National Louis University - the next deliberate step in a journey that was always heading toward the intersection of data, strategy, and leadership.",
      image: "/nlu.jpg",
    },
    {
      date: "March 2025",
      title: "Love at First Dink",
      description: "Someone handed me a paddle and life hasn't been the same since. The newest obsession.",
      image: "/pb.jpg",
    },
    {
      date: "September 2024",
      title: "Moved to Jacksonville | Chasing Sun & Office Badges",
      description: "Although the role was remote, I couldn't pass the opportunity to explore a new city and a quiet push to find my way back into an office and around people again.",
      image: "/jacksonville.jpg",
    },
    {
      date: "August 2024",
      title: "Senior Business Analyst at Florida Blue - A New Chapter",
      description: "Landed a role that matched both the skillset and the ambition. Moving forward with purpose.",
      image: "/floridablue.jpg",
    },
    {
      date: "April 2024",
      title: "Hit a bump - layoff",
      description: "An unexpected plot twist. During the unemployment phase, I ket coming back to this image. It was a reminder that I need to take a step back, look at the bigger picture and realize that the sky is bright and clear beyond the thick clouds. FYI - this was taken from my condominium in Chicago. Took it on the chin, reflected hard, and came back with more clarity than before.",
      image: "/layoff.jpg",
    },
    {
      date: "January 2024",
      title: "Moved to Chicago",
      description: "I wanted to live in this city since the first time I visited. Chicago called, and so did new opportunities, new people, and a bigger stage.",
      image: "/chicago.jpg",
    },
    {
      date: "January 2023",
      title: "Moved to Indianapolis",
      description: "Sometimes the cities you don't plan for are the ones that leave the biggest mark. Indianapolis was supposed to be a stopover — it turned into a home, and the people there turned into family.",
      image: "/indianapolis.jpg",
    },

    {
      date: "December 2022",
      title: "MS in Business Analytics",
      description: "Proof that the grind, the late nights, and the leap of faith it took to pursue this in a new country were all worth it. One of the most satisfying chapters of my life!",
      image: "/graduation.jpg",
    },
    {
      date: "August 2022",
      title: "Landing to Launching",
      description: "Meet the Pricing Analyst at Millipore Sigma! Exactly one year after landing in the US, I had my first full-time role. Twelve months of figuring things out, pushing through uncertainty, and trusting the process — and it was already paying off in ways I hadn't expected. You know things are working in your favor when you finish an internship on Friday and start a new job following Monday.",
      image: "/ms-avn.jpg",
    },
    {
      date: "May 2022",
      title: "Summer of '22",
      description: "Digital Strategy & Analytics internship. Dove into digital analytics and member insights — this was exactly the direction I wanted to be.",
      image: "/excellus.jpg",
    },
    {
      date: "August 2021",
      title: "Welcome to the United States of America!",
      description: "Landed in a new country with a long-term vision and a short-term plan.",
      image: "/usa.jpg",
    },
    {
      date: "December 2019",
      title: "Founder YOUNG",
      description: "There's a kind of success that's measured in the lives you touch. A we build a very successful nonprofit.",
      image: "/yf_logo.png",
    },
    {
      date: "September 2018",
      title: "Management Executive at Aeon",
      description: "Stepped into the professional world and got an unfiltered education in leadership, operations, and what it really takes to build something.",
      image: "/aeon_logo.jpg",
    },
    {
      date: "May 2018",
      title: "Bachelor's in Computer Science",
      description: "Four years of systems, logic, and problem-solving that gave me the technical backbone everything else is built on.",
      image: "/sit_logo.jpg",
    },
    {
      date: "April 2017",
      title: "Diploma in Business Management",
      description: "Made a deliberate early bet on business — pursuing a part-time diploma alongside my CS degree because I always knew technology was the tool, not the destination.",
      image: "/dbm.png",
    },
    {
      date: "May 2011",
      title: "First Trip to the US",
      description: "My school offered a trip to the United States and somehow I ended up on that plane. I came back a different person — wider eyes, bigger dreams, and a quiet feeling that I'd be back someday. Turns out I was right.",
      image: "/ind-us.png",
    },
    {
      date: "2004",
      title: "Hooked on Tennis",
      description: "Tennis has followed me across countries, cities, and life chapters — and I wouldn't have it any other way.",
      image: "/tennis.png",
    },
    {
      date: "2003",
      title: "Hi-yah!",
      description: "Yes, I have a black belt in Karate. No, I will not be demonstrating it.",
      image: "/karate.png",
    },
    {
      date: "1996",
      title: "New here!",
      description: "",
      image: "/birth.png",
    }
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