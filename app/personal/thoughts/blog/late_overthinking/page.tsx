import BlogLayout from "../../../../components/BlogLayout";

export default function BlogPost() {

  const content = [
    {
      type: "paragraph",
      text: "Do we sometimes complicate life more than necessary? Actually, let me rephrase — do we complicate life, or does life just sit back and watch us do it to ourselves for entertainment?"
    },
    {
      type: "paragraph",
      text: "I ask because I’ve spent most of my life being excessively cautious. I’m talking risk-averse, overthinking, safest-person-you’ll-ever-meet levels of cautious. The kind of person who triple-checks if the stove is off, even when I haven’t cooked. The kind who overanalyzes texts before sending them and then overanalyzes them again after they’re sent. You get the idea."
    },
    {
      type: "image",
      src: "/blog_3_1.png",
      caption: ""
    },
    {
      type: "paragraph",
      text: "But here’s the thing — despite all this mental gymnastics, have I successfully dodged setbacks and lows? Absolutely not! So then… what’s the point? Overthinking is just your mind running wild while you stand there like an exhausted parent trying (and failing) to rein in a hyperactive child."
    },
    {
      type: "paragraph",
      text: "This is exactly what people mean when they say, “Control your mind, or it will control you.” And trust me, when your mind is in charge, it’s the worst driver imaginable — it speeds when it shouldn’t, brakes too late, and takes you down dark, unnecessary alleys for no reason."
    },
    {
      type: "paragraph",
      text: "One of my biggest wake-up calls was when I lived with a friend, let’s call him AJ. He and I are polar opposites. Where I overthink, he barely thinks. Where I hesitate, he jumps in. Where I imagine every possible outcome before making a move, he just… moves. Honestly, sometimes it was maddening to watch."
    },
    {
      type: "paragraph",
      text: "And yet, despite our drastically different approaches to life, his outcomes weren’t just the same as mine — they were often better. Why? I narrowed it down to two things:"
    },
    {
      type: "paragraph",
      text: "1. He didn’t stress about things beyond his control."
    },
    {
      type: "paragraph",
      text: "2. He genuinely believed he was lucky."
    },
    {
      type: "paragraph",
      text: "That’s it. No complex philosophy. No over-analysis. Just chill and trust things will work out."
    },
    {
      type: "paragraph",
      text: "And let’s be real — how often do we actually need to stress? If we zoom out, most of our problems aren’t apocalyptic. Life, in the grand scheme, is probably fine. It’s just our minds acting like dramatic film directors, adding unnecessary suspense music to situations that don’t need it."
    },
    {
      type: "paragraph",
      text: "This is where the difference between a bad day and a terrible life comes in. A bad day is just that — a bad day. It’s temporary, a single storm in an otherwise clear sky. But our minds have a habit of turning bad days into proof that everything is doomed. We take one rejection, one failure, one setback, and suddenly, it feels like our entire existence is collapsing. But is it really? Or are we just overidentifying with a moment instead of seeing the bigger picture?"
    },
    {
      type: "paragraph",
      text: "So here’s a radical thought: What if we just lived? What if we stopped looking for problems in every corner and started appreciating the fact that this is the moment? This freedom, this independence — it won’t last forever. One day, we’ll look back and realize we had everything but were too busy worrying about nothing."
    },
    {
      type: "paragraph",
      text: "Another game-changing lesson? The need to disconnect action from emotion. Some days, you won’t feel like doing what needs to be done. That’s normal. But the key is to do it anyway. That’s what legends mean when they say, “I train every day, no matter what.” They don’t wait to feel motivated — they just show up. That’s the secret."
    },
    {
      type: "paragraph",
      text: "Because here’s the harsh truth: Thoughts that make you feel self-pity, anxious, or incapable aren’t just slowing you down — they’re actively stunting your growth."
    },
    {
      type: "image",
      src: "/blog_3_2.png",
      caption: ""
    },
    {
      type: "paragraph",
      text: "So maybe it’s time to stop listening to every irrational thought. Maybe it’s time to stop treating our minds like fortune tellers when, in reality, they’re just unreliable narrators with a flair for the dramatic. Maybe it’s time to stop overthinking and start living."
    },
    {
      type: "paragraph",
      text: "And most importantly — maybe it’s time to believe we’re lucky. Because maybe, just maybe, we actually are."
    }
    // {
    //   type: "quote",
    //   text: "The harder I work, the luckier I become. — Ray Kroc"
    // },


    // {
    //   type: "heading",
    //   text: "The Shift"
    // },
  ];

  return (
    <BlogLayout
      title="It's late, I'm overthinking, and here we are!"
      author="February 20, 2025"
      content={content}
    />
  );
}