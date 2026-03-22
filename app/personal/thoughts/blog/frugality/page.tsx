import BlogLayout, { ContentBlock } from "../../../../components/BlogLayout";

export default function BlogPost() {

  // Explicitly type content as ContentBlock[]
  const content: ContentBlock[] = [
    {
      type: "paragraph",
      text: "When we transition into adulthood, we often start imposing limitations on our dreams. I remember my younger self with, what my adult self would call, bizarre dreams: owning a real estate empire, having helicopters to save commute time, and leading hundreds of people. Okay, let’s be honest, thousands! These dreams felt real, unlike the whimsical childhood dreams of becoming an astronaut or the President. There was so much clarity in my thoughts and conviction in my speech. It felt as if these dreams were just an age milestone away, like getting a driver’s license at 18."
    },

    // {
    //   type: "image",
    //   src: "/dreams.jpg",
    //   caption: "Dreams feel bigger when we’re younger"
    // },

    {
      type: "paragraph",
      text: "Fast forward to my early twenties, and I experienced significant success. My Master’s journey was well-rounded, leading to a coveted summer internship and a full-time job offer before graduation. However, as I pen this article, I find myself jobless — a story for another time. The years 2021 and 2022 felt surreal; if I wanted something, I believed I could easily attain it. I felt lucky. In retrospection, I am reminded of a quote by Ray Kroc, “The harder I work, the luckier I become.”"
    },

    {
      type: "image",
      src: "/raykroc.png",
      caption: ""
    },

    // {
    //   type: "quote",
    //   text: "The harder I work, the luckier I become. — Ray Kroc"
    // },

    {
      type: "paragraph",
      text: "During this high, I revisited my teenage dreams. If I could achieve what I envisioned, why not focus on those earlier dreams of passive real estate income and escaping city traffic? But then reality struck. My dreams had been filtered through a lens of practicality. “I want to own a chopper” had morphed into “I mean who really owns a chopper? I just want to be able to afford occasional sightseeing rides.” I grew hesitant to say those big things from my mouth. Mind you, it’s not just about what people will think. My conviction in my dreams had been shunted."
    },

    // {
    //   type: "heading",
    //   text: "The Shift"
    // },

    {
      type: "paragraph",
      text: "I am someone who draws inspiration from everything and everyone — the people I meet, the books I read, the podcasts I listen to, and the leaders I admire. As I reflected, I realized the only barrier was my mind. Although I don’t have a step-by-step plan, my conviction is back. I believe I will succeed on all fronts — physically, mentally, emotionally, spiritually, materially, and financially. This isn’t arrogance; it’s a profound inner belief."
    },

    {
      type: "paragraph",
      text: "The first step to realization is visualization."
    },

    // {
    //   type: "heading",
    //   text: "Final Thought"
    // },

    {
      type: "paragraph",
      text: "My goal here is to reach anyone who might be limiting their dreams as they grow older. While writing this, I imagine a news channel highlighting this article during prime time a few years from now, backing my success."
    },
    {
      type: "paragraph",
      text: "Keep dreaming, keep believing!"
    }
  ];

  return (
    <BlogLayout
      title="Rekindling Our Dreams: Breaking Through the Limitations of Adulthood"
      author="July 13, 2024"
      content={content}
    />
  );
}