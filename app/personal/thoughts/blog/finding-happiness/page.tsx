import BlogLayout, { ContentBlock } from "../../../../components/BlogLayout";

export default function BlogPost() {

  const content: ContentBlock[] = [

    {
      type: "paragraph",
      text: "*Written honestly, in the middle of the storm.*"
    },
    {
      type: "divider"
    },

    {
      type: "paragraph",
      text: "There is a particular look people give you when you describe your life in its current form. A tilt of the head. A softening of the eyes. Sympathy, wrapped in the best of intentions. I know the look well. I have been on the receiving end of it more times than I can count."
    },
    {
      type: "paragraph",
      text: "And I understand it. I really do. When you tell someone that you are working a full-time job, pursuing a Doctoral degree, unsure which country you will call home next year, two years away from your family, and sprinting toward thirty with a checklist that seems to grow faster than it shrinks, the sympathetic look is the rational response."
    },
    {
      type: "paragraph",
      text: `What is not rational, apparently, is what comes next from me: *"But honestly? I have never been happier."*`
    },
    {
      type: "paragraph",
      text: `I don't want pity. More importantly, I don't deserve it because the life they're looking at with concern is the one I wake up grateful to be living. This is the part of the conversation I quietly dread. Not the uncertainty. Not the distance. The pity. Because pity assumes that something is wrong. And nothing, to the best of my honest assessment, is.`
    },
    {
      type: "divider"
    },
    {
      type: "paragraph",
      text: `Let me tell you about the Sunday that started all of this.`
    },
    {
      type: "paragraph",
      text: `I had genuinely earned a free day. Nothing on the calendar, no deadlines lurking behind the weekend, no doctoral assignment demanding attention. For the first time in longer than I could remember, there was nothing to do. I took an afternoon nap. I woke up to a cup of tea. I turned the television on.`
    },
    {
      type: "paragraph",
      text: `For anyone who knows me, this is almost laughably out of character. Idle afternoons are usually the enemy. But that Sunday felt different. The light in the room, the quiet, the warmth of the tea; it transported me somewhere. Not to a specific place, but to a specific feeling. My childhood home. The unhurried safety of it. The sense that everything was okay and that time could, just for a moment, stop pressing in from all sides.`
    },
    {
      type: "paragraph",
      text: `Calm. Happy. Secure. Unanxious. Free.`
    },
    {
      type: "paragraph",
      text: `Then a friend called with something weighing on them, and as I listened, the answer seemed so clear and simple to me, so obvious that I half-joked to myself that perhaps I had accidentally stumbled into some form of enlightenment and needed to disappear to the Himalayas.`
    },
    {
      type: "paragraph",
      text: `I did not disappear to the Himalayas. But I did start paying attention to what had quietly changed.`
    },
    {
      type: "divider"
    },
    {
      type: "paragraph",
      text: `What changed?`
    },
    {
    type: "list",
        items: [
            "**No social media.** Months without Facebook, Instagram, or Snapchat. Occasional YouTube and LinkedIn. I did not realize how much mental energy I had been spending comparing my real life to other people's curated ones. I am genuinely ambitious and competitive, and a healthy comparison motivates me. But social media is not where authenticity lives, and I stopped pretending it was.",
            "**Going to the office every day.** Being around people. Existing in a routine. The structure does something quiet and powerful to your sense of belonging in the world.",
            "**Some form of movement every day.** Gym, sport, a long walk, it does not matter. When you see progress, even small progress, motivation compounds. ***The body and mind are less separate than we tend to treat them.***",
            "**Changing content preferences.** Lighter content. Nothing that taxes my mood or swallows my time whole. Most importantly, starting the day with something that grows rather than drains me.",
            "**Chosen solitude.** No close friends nearby sounds like a deficit. And sometimes it is. But for a specific season, it forced me inward in the best possible way, until my own mind was a place I actually wanted to spend time.",
            "**Daily, weekly, and monthly goal tracking.** Health metrics. Diet. A monthly goal outside of work (visiting somewhere new, volunteering, building a personal website, sharpening a skill). The discipline of tracking makes the invisible visible, and the visible feels earned.",
            "**Fear of going back.** Not anxiety about the future but memory of a past version of myself I no longer want to inhabit.",
            `**Letting go of outcomes I cannot control**. Focusing on the work, not the result. Doing what is mine to do, and releasing what is not. I have a Sanskrit quote in my living room that translates to: *"You have a right to perform your prescribed duties, but you are not entitled to the fruits of your actions. Never consider yourself the cause of the results of your activities, and never be attached to not doing your duty."*`
        ]
    },
    {
      type: "image",
      src: "/blog-finding-happiness.png",
      caption: ""
    },
    {
      type: "divider"
    },
    {
      type: "paragraph",
      text: `I want to be careful here, because I know how this might read. **Contentment is not complacency.** I am more focused now than I have ever been. More deliberate. More quantifiably on my way toward who and where I want to be. **The stillness is not stagnation.**`
    },
    {
      type: "paragraph",
      text: `There may be other factors contributing to this feeling that I have not yet named. That is fine. It does not harm anything to believe in the ones I have found.`
    },
    {
      type: "quote",
      text: "Happiness, I have come to think, is not the absence of difficulty. It is the quiet confidence that you are doing the right things even when no one is watching, and even when the outcome is not yet clear."
    },
    {
      type: "paragraph",
      text: `So no, I do not think I am stupid to be happy. I think I have finally, after a long time, stopped treating happiness like something that has to be earned at the end. Like the reward waiting on the other side of the chaos. Maybe it was here all along, patient, waiting for me to simply let it in.`
    }
    // {
    //   type: "divider"
    // },

    // {
    //   type: "quote",
    //   text: "Have you learned that secret from the river; that there is no such thing as time?"
    // },

    // {
    //   type: "image",
    //   src: "/blog_4_1.png",
    //   caption: ""
    // }
  ];

  return (
    <BlogLayout
      title="Am I Stupid to be Happy?"
      author="April 15, 2026"
      content={content}
    />
  );
}