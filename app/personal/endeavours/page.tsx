"use client";

import { useEffect, useState } from "react";

type Activity = {
  title: string;
  description: string;
  images: string[];
};

const activities: Activity[] = [
  {
    title: "Free Community Health Check-Up",
    description:
      "Providing accessible health screenings to promote early detection and well-being.",
    images: ["/medical1.jpg", "/medical2.jpg","/medical3.jpg","/medical4.jpg","/medical5.jpg"],
  },
  {
    title: "Self-Defense Seminar for Girls",
    description:
      "Building confidence and safety skills through practical self-defense training.",
    images: ["/defence1.jpg", "/defence2.jpg","/defence3.jpg","/defence4.jpg","/defence5.jpg"],
  },
  {
    title: "School Integration Experience",
    description:
      "Creating meaningful interactions by bringing together students from different educational backgrounds for shared learning.",
    images: ["/event11.jpg","/event12.jpg","/event13.jpg","/event14.jpg","/event15.jpg","/event16.jpg","/event17.jpg"],
  },
  {
    title: "Blood Donation: The Drive That Gave Life",
    description:
      "Bringing people together around something that costs nothing but means everything. Every unit collected was a life within reach.",
    images: ["/bd1.jpg","/bd2.jpg","/bd3.jpg","/bd4.jpg"],
  },
  {
    title: "A Meal, A Moment, A Memory",
    description:
      "Organized food distribution for those who needed it most; just the belief that nobody should go hungry while we have the means to help. Simple work. Real impact.",
    images: ["/food1.jpg","/food2.jpg","/food3.jpg","/food4.jpg"],
  },
  {
    title: "Breathe. Move. Connect",
    description:
      "Yoga has a way of meeting you exactly where you are. Organizing a virtual Yoga event was about creating a moment for people to pause and just breathe. In a world that rarely slows down, an hour of stillness felt like a quiet act of resistance.",
    images: ["/yoga1.jpg"],
  },
];

function ImageSlider({ images }: { images: string[] }) {
  const [index, setIndex] = useState(0);

  // Auto slideshow (2 sec)
  useEffect(() => {
    if (images.length <= 1) return;

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [images.length]);

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <div className="relative">
      <img
        src={images[index]}
        className="rounded-2xl w-full h-[300px] object-cover"
        alt="activity"
      />

      {images.length > 1 && (
        <>
          {/* Left Button */}
          <button
            onClick={prevSlide}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/60 text-white px-3 py-1 rounded"
          >
            ←
          </button>

          {/* Right Button */}
          <button
            onClick={nextSlide}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/60 text-white px-3 py-1 rounded"
          >
            →
          </button>
        </>
      )}
    </div>
  );
}

export default function EndeavorsPage() {
  return (
    <main className="min-h-screen px-6 py-16 max-w-6xl mx-auto">

      {/* Centered Title */}
      <h1 className="text-4xl font-bold text-center mb-16">
        Endeavors
      </h1>

      {/* Activities */}
      <div className="space-y-20">
        {activities.map((activity, idx) => (
          <div
            key={idx}
            className="grid md:grid-cols-2 gap-10 items-center"
          >
            {/* LEFT: Image Slider */}
            <ImageSlider images={activity.images} />

            {/* RIGHT: Text */}
            <div>
              <h2 className="text-2xl font-semibold mb-4">
                {activity.title}
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {activity.description}
              </p>
            </div>
          </div>
        ))}
      </div>

    </main>
  );
}