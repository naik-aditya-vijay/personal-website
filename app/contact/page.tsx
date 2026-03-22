"use client";

import Link from "next/link";

export default function UnderConstruction() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 text-center">

      {/* Animated Icon */}
      <div className="text-6xl mb-6 animate-bounce">
        🚧
      </div>

      {/* Title */}
      <h1 className="text-4xl font-bold mb-4">
        Under Construction
      </h1>

      {/* Subtitle */}
      <p className="text-gray-600 max-w-md mb-8">
        I'm currently building something meaningful here.  
        Check back soon — it’ll be worth it.
      </p>

      {/* Subtle Divider */}
      <div className="w-16 h-[2px] bg-gray-300 mb-8" />

      {/* Optional Thought (on-brand for you) */}
      <p className="text-sm text-gray-500 italic mb-10">
        “Good things take time — great things take intention.”
      </p>

      {/* Back Button */}
      <Link
        href="/"
        className="px-6 py-3 rounded-lg bg-black text-white hover:bg-gray-800 transition"
      >
        Back to Home
      </Link>

    </main>
  );
}