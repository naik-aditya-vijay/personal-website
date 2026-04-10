"use client";

import Image from "next/image";
import { useState } from "react";

export default function Photos() {

  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const photos = [
    { src: "/photo1.jpg", caption: "" },
    { src: "/photo2.jpg", caption: "" },
    { src: "/photo3.jpg", caption: "" },
    { src: "/photo4.jpg", caption: "" },
    { src: "/photo5.jpg", caption: "" },
    { src: "/photo6.jpg", caption: "" },
    { src: "/photo7.jpg", caption: "" },
    { src: "/photo8.jpg", caption: "" },
    { src: "/photo9.jpg", caption: "" },
    { src: "/photo10.jpg", caption: "" },
    { src: "/photo11.jpg", caption: "" },
    { src: "/photo12.jpg", caption: "" },
    { src: "/photo13.jpg", caption: "" },
    { src: "/photo14.jpg", caption: "" },
    { src: "/photo15.jpg", caption: "" },
    { src: "/photo16.jpg", caption: "" },
    { src: "/photo17.jpg", caption: "" },

    { src: "/photo18.jpg", caption: "" },
    { src: "/photo19.jpg", caption: "" },
    { src: "/photo20.jpg", caption: "" },
    { src: "/photo21.jpg", caption: "" },
    { src: "/photo22.jpg", caption: "" },
    { src: "/photo23.jpg", caption: "" },
    { src: "/photo24.jpg", caption: "" },
    { src: "/photo25.jpg", caption: "" },
    { src: "/photo26.jpg", caption: "" },
    { src: "/photo27.jpg", caption: "" },
    { src: "/photo28.jpg", caption: "" },
    { src: "/photo29.jpg", caption: "" },
    { src: "/photo30.jpg", caption: "" },
    { src: "/photo31.jpg", caption: "" },
    { src: "/photo32.jpg", caption: "" },
    { src: "/photo33.jpg", caption: "" },
    { src: "/photo34.jpg", caption: "" },

    { src: "/photo35.jpg", caption: "" },
    { src: "/photo36.jpg", caption: "" },
    { src: "/photo37.jpg", caption: "" },
    { src: "/photo38.jpg", caption: "" },
    { src: "/photo39.jpg", caption: "" },
    { src: "/photo40.jpg", caption: "" },
    { src: "/photo41.jpg", caption: "" },
    { src: "/photo42.jpg", caption: "" },
    { src: "/photo43.jpg", caption: "" },
    { src: "/photo44.jpg", caption: "" },
    { src: "/photo45.jpg", caption: "" },
    { src: "/photo46.jpg", caption: "" },
    { src: "/photo47.jpg", caption: "" },
    { src: "/photo48.jpg", caption: "" },
    { src: "/photo49.jpg", caption: "" },
    { src: "/photo50.jpg", caption: "" },
    { src: "/photo51.jpg", caption: "" },
    { src: "/photo52.jpg", caption: "" },

    { src: "/photo53.jpg", caption: "" },
    { src: "/photo54.jpg", caption: "" },
    { src: "/photo55.jpg", caption: "" },
    { src: "/photo56.jpg", caption: "" },
    { src: "/photo57.jpg", caption: "" },
    { src: "/photo58.jpg", caption: "" },
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