"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function Thoughts() {

  const blogRef = useRef<HTMLDivElement>(null);
  const quoteRef = useRef<HTMLDivElement>(null);
  const resourceRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const [isPaused, setIsPaused] = useState(false);

  const scrollTo = (ref: any) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  // MARQUEE EFFECT
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let animationFrame: any;

    const scroll = () => {
      if (!isPaused) {
        container.scrollLeft += 0.3; // speed (lower = slower)

        if (container.scrollLeft >= container.scrollWidth / 2) {
          container.scrollLeft = 0;
        }
      }
      animationFrame = requestAnimationFrame(scroll);
    };

    scroll();

    return () => cancelAnimationFrame(animationFrame);
  }, [isPaused]);

  const blogs = [
    {
      title: "Am I Stupid to be Happy?",
      description: "On finding stillness in the middle of the storm",
      link: "/personal/thoughts/blog/finding-happiness"
    },
    {
      title: "The Room Knows Nothing About You - Until You Speak",
      description: "Competency v/s Confidence",
      link: "/personal/thoughts/blog/compvsconf"
    },
    {
      title: "Rekindling Our Dreams: Breaking Through the Limitations of Adulthood",
      description: "What changed when you grew up?",
      link: "/personal/thoughts/blog/frugality"
    },
    {
      title: "Diactonomy of the middle",
      description: "",
      link: "/personal/thoughts/blog/diactonomy"
    },
    {
      title: "It's late, I'm overthinking, and here we are!",
      link: "/personal/thoughts/blog/late_overthinking"
    },
    {
      title: "A Personal Reflection",
      link: "/personal/thoughts/blog/book_reflection"
    },
  ];

  const quotes = [
    "Expectancy determines outcomes!",
    "The magic you are looking for is in the work you are avoiding.",
    "The harder I work, the luckier I get!",
    "The antidote for overthinking is overdoing!",
    "Motivation without actions brings self delusion.",
    "You didn't come this far to only come this far.",
    "Success is something you attract by the person you become.",
    "Build, Don't Talk.",
    "Aiming for the Quantum Leap.",
    "Character is what you do on the third and fourth attempts.",
    "A ssmooth sea never made a skilled sailor.",
    "Success is getting what you want. Happiness is wanting what you get."
  ];

  const resources = [
    {
      type: "Video",
      title: "How to Claim Your Leadership Power? | Michael Timms | TED",
      link: "https://www.youtube.com/watch?v=dIYmzf21d1g"
    },
    {
      type: "Video",
      title: "Rockefeller: The First Confirmed Billinoare",
      link: "https://www.youtube.com/watch?v=sMH8WchxQR8"
    },
    {
      type: "Article",
      title: "Understand Candlestick Charts for Stock Trading",
      link: "https://www.fidelity.com/bin-public/060_www_fidelity_com/documents/learning-center/Idenitfying-Chart-Patterns.pdf"
    },
    {
      type: "Video",
      title: "Naval Ravikant on Wealth Creation",
      link: "https://www.youtube.com/watch?v=6Mya4C3Yr7I"
    }
  ];

  return (
    <main className="min-h-screen px-6 py-20 max-w-6xl mx-auto">

      {/* TITLE */}
      <h1 className="text-4xl font-bold text-center mb-10">
        Thoughts & Writing
      </h1>

      {/* NAVIGATION FILTERS */}
      <div className="flex justify-center gap-6 mb-16 text-sm text-gray-600">
        <button onClick={() => scrollTo(blogRef)} className="hover:text-black">
          Blogs
        </button>
        <button onClick={() => scrollTo(quoteRef)} className="hover:text-black">
          Quotes
        </button>
        <button onClick={() => scrollTo(resourceRef)} className="hover:text-black">
          Resources
        </button>
      </div>

      {/* BLOGS */}
      <section ref={blogRef} className="mb-20">
        <h2 className="text-2xl font-semibold mb-8">
          Blogs
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {blogs.map((blog, index) => (
            <Link key={index} href={blog.link}>
              <div className="p-8 border rounded-2xl hover:shadow-lg hover:-translate-y-1 transition cursor-pointer">

                <h3 className="text-xl font-semibold mb-3">
                  {blog.title}
                </h3>

                {blog.description && (
                  <p className="text-gray-600 mb-4">
                    {blog.description}
                  </p>
                )}

                <span className="text-sm text-blue-600 font-medium">
                  Read →
                </span>

              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* QUOTES - MARQUEE */}
      <section ref={quoteRef} className="mb-20">
        <h2 className="text-2xl font-semibold mb-8">
          Words Worth Remembering
        </h2>

        <div
          ref={scrollRef}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="flex gap-6 overflow-hidden cursor-pointer"
        >
          {[...quotes, ...quotes].map((quote, index) => (
            <div
              key={index}
              className="min-w-[300px] p-6 border rounded-xl text-gray-700 italic"
            >
              “{quote}”
            </div>
          ))}
        </div>
      </section>

      {/* RESOURCES */}
      <section ref={resourceRef}>
        <h2 className="text-2xl font-semibold mb-8">
          External Resources
        </h2>

        <div className="space-y-4">
          {resources.map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-6 border rounded-xl hover:shadow-md transition"
            >
              <span className="text-xs uppercase text-gray-500">
                {item.type}
              </span>

              <p className="text-lg font-medium mt-1">
                {item.title}
              </p>
            </a>
          ))}
        </div>
      </section>

    </main>
  );
}