"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {

  const pathname = usePathname();

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Work", href: "/work" },
    { name: "Education", href: "/education" },
    { name: "Personal", href: "/personal" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="flex justify-between items-center p-6 max-w-5xl mx-auto">

      {/* Navigation Links */}
      <div className="flex space-x-6 text-gray-600 items-center">

        {navItems.map((item) => {
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.name}
              href={item.href}
              className={`relative group transition duration-300 ${
                isActive ? "text-black" : "hover:text-black"
              }`}
            >
              {item.name}

              {/* Underline */}
              <span
                className={`absolute left-0 -bottom-1 h-[2px] bg-black transition-all duration-300
                ${isActive ? "w-full" : "w-0 group-hover:w-full"}`}
              />
            </Link>
          );
        })}

      </div>

      {/* CTA Buttons */}
      <div className="flex space-x-4">

        {/* LinkedIn Button */}
        <a
          href="https://www.linkedin.com/in/itsadityanaik"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center px-5 py-2.5 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 hover:scale-105 transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 mr-2"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.28c-.97 0-1.75-.79-1.75-1.75S5.53 5.22 6.5 5.22s1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm13.5 10.28h-3v-4.5c0-1.08-.02-2.48-1.51-2.48-1.51 0-1.74 1.18-1.74 2.4v4.58h-3v-9h2.88v1.23h.04c.4-.76 1.38-1.56 2.85-1.56 3.05 0 3.61 2 3.61 4.59v5.74z"/>
          </svg>
          LinkedIn
        </a>

        {/* Resume Button */}
        <a
          href="/avn_resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center px-5 py-2.5 bg-gray-800 text-white rounded-lg shadow hover:bg-gray-900 hover:scale-105 transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M7 7h10M7 11h10M7 15h6M5 3h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2z" />
          </svg>
          Resume
        </a>

      </div>

    </nav>
  );
}