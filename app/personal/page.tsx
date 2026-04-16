"use client";

import Link from "next/link";

export default function Personal() {
  const sections = [
    {
      title: "Journey",
      desc: "Milestones, pivots, and moments that shaped me",
      href: "/personal/journey",
    },
    {
      title: "Thoughts & Writing",
      desc: "Because I just couldn't sleep that night",
      href: "/personal/thoughts",
    },
    {
      title: "Endeavours",
      desc: "Things I build, explore, and experiment with",
      href: "/personal/endeavours",
    },
    {
      title: "Photos",
      desc: `The "I am an artist" section`,
      href: "/personal/photos",
    },
  ];

  return (
    <main className="min-h-screen px-6 py-20 max-w-5xl mx-auto">

      {/* Heading */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-3">
          Beyond my resume
        </h1>
        <p className="text-gray-500">
          The parts of me that don’t fit on a single page
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

        {sections.map((section, index) => (
          <Link
            key={index}
            href={section.href}
            className="group p-8 rounded-2xl border bg-white 
                       transition duration-300 ease-in-out 
                       hover:shadow-xl hover:-translate-y-1
                       flex flex-col justify-between min-h-[180px]"
          >
            {/* Title */}
            <h2 className="text-2xl font-semibold mb-3 flex items-center justify-between">
              {section.title}
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </h2>

            {/* Description */}
            <p className="text-gray-600">
              {section.desc}
            </p>

          </Link>
        ))}

      </div>

    </main>
  );
}