"use client";

import Link from "next/link";

export default function Thoughts() {

  const items = [
    {
      type: "Blog",
      tag: "Blog",
      title: "Rekindling Our Dreams: Breaking Through the Limitations of Adulthood",
      description:
        "What chaged when you grew up?",
      link: "/personal/thoughts/blog/frugality"
    },
    {
      type: "Blog",
      tag: "Blog",
      title: "Diactonomy of the middle",
      description:
        "",
      link: "/personal/thoughts/blog/diactonomy"
    },
    {
      type: "Blog",
      tag: "Blog",
      title: "It's late, I'm overthinking, and here we are!",
      description:
        "",
      link: "/personal/thoughts/blog/late_overthinking"
    },
    {
      type: "Blog",
      tag: "Blog",
      title: "A Personal Reflection",
      description:
        "",
      link: "/personal/thoughts/blog/book_reflection"
    },
    {
      type: "Quote",
      tag: "Quote",
      title: "Ray Kroc",
      description:
        "“The harder I work, the luckier I get!”"
    },
    {
      type: "Article",
      tag: "Article",
      title: "Understand Candlestick Charts for Stock Trading",
      description:
        "A basic introduction to understand how to read and predict trends.",
      link: "https://www.fidelity.com/bin-public/060_www_fidelity_com/documents/learning-center/Idenitfying-Chart-Patterns.pdf"
    },
    {
      type: "Video",
      tag: "Video",
      title: "Naval Ravikant on Wealth Creation",
      description:
        "A talk about building wealth and thinking long-term.",
      link: "https://www.youtube.com/watch?v=6Mya4C3Yr7I"
    },
    // {
    //   type: "Idea",
    //   tag: "Idea",
    //   title: "Marketplace for Student Mentorship",
    //   description:
    //     "A platform where students can connect with professionals for short mentorship sessions.",
    //   link: "/personal/thoughts/ideas/student-mentorship/"
    // }
  ];

  return (
    <main className="min-h-screen px-6 py-20 max-w-5xl mx-auto">

      <h1 className="text-4xl font-bold text-center mb-16">
        Thoughts & Writing
      </h1>

      <div className="space-y-10">

        {items.map((item, index) => {

          const isExternal =
            item.type === "Article" || item.type === "Video";

          return (

            <div
              key={index}
              className="p-8 border rounded-xl hover:shadow-md transition"
            >

              {/* Tag */}
              <span className="text-xs uppercase text-gray-500">
                {item.tag}
              </span>

              {/* Title */}
              <h2 className="text-2xl font-semibold mt-2 mb-3">
                {item.title}
              </h2>

              {/* Description */}
              <p className="text-gray-600 mb-4">
                {item.description}
              </p>

              {/* Links */}

              {item.link && !isExternal && (
                <Link
                  href={item.link}
                  className="text-blue-600 text-sm font-medium hover:underline"
                >
                  Read →
                </Link>
              )}

              {item.link && isExternal && (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 text-sm font-medium hover:underline"
                >
                  Open →
                </a>
              )}

            </div>

          );
        })}

      </div>

    </main>
  );
}