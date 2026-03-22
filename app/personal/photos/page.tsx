"use client";

import Image from "next/image";
import { useState } from "react";

export default function Photos() {

  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const photos = [
    { src: "/photo1.jpg", caption: "It wasn't complete until my parents visited my alma matar." },
    { src: "/photo2.jpg", caption: "Antelope Canyon, AZ" },
    { src: "/photo3.jpg", caption: "In my emelent. @ Blue Ridge, GA" },
    { src: "/photo4.jpg", caption: "Aurora Dreams finally came true. @ WI" },
    { src: "/photo5.jpg", caption: "Horseshoe Bend, AZ" },
    { src: "/photo6.jpg", caption: "Niagara Falls never disappoints" },
    { src: "/photo7.jpg", caption: "Enjoying a nice stroll by Lake Michigan, Chicago" },
    { src: "/photo8.jpg", caption: "Piedmont Park, Atlanta, GA" },
    { src: "/photo9.jpg", caption: "Buckingham Fountain, Chicago, IL" },
    { src: "/photo10.jpg", caption: "Proud moment when my parents visited my workplace." },
    { src: "/photo11.jpg", caption: "Never miss a sunset. @ Hoover Dam, NV" },
    { src: "/photo12.jpg", caption: "Miami, FL" },
    { src: "/photo13.jpg", caption: "Belle Isle Island, Detriot, MI" },
    { src: "/photo14.jpg", caption: "Only photo that wasn't blurry. @ Las Vegas, NV" },
    { src: "/photo15.jpg", caption: "Orlando, FL" },
    { src: "/photo16.jpg", caption: "First fall. @ Indianapolis, IN" },
    { src: "/photo17.jpg", caption: "Martian. @ Bryce Canyon National Park, UT" }
  ];

  return (
    <main className="min-h-screen px-6 py-20 max-w-7xl mx-auto">

      <h1 className="text-4xl font-bold text-center mb-16">
        Moments That Matter
      </h1>

      {/* Masonry layout */}
      <div className="columns-1 sm:columns-2 md:columns-3 gap-6 space-y-6">

        {photos.map((photo, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-xl cursor-pointer group break-inside-avoid animate-fadeIn"
            onClick={() => setSelectedImage(photo.src)}
            style={{ animationDelay: `${index * 80}ms` }}
          >

            <Image
              src={photo.src}
              alt={photo.caption}
              width={500}
              height={700}
              loading="lazy"
              className="rounded-xl object-cover w-full transition duration-500 group-hover:scale-110"
            />

            {/* Hover caption */}
            <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white text-sm text-center p-3 opacity-0 group-hover:opacity-100 transition duration-300">
              {photo.caption}
            </div>

          </div>
        ))}

      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-6"
          onClick={() => setSelectedImage(null)}
        >
          <Image
            src={selectedImage}
            alt="selected"
            width={1200}
            height={900}
            className="rounded-xl max-h-[90vh] w-auto"
          />
        </div>
      )}

    </main>
  );
}