import BlogLayout, { ContentBlock } from "../../../../components/BlogLayout";

export default function BlogPost() {

  const content: ContentBlock[] = [

    {
      type: "image",
      src: "/happyness.jpeg",
      caption: ""
    },
    {
      type: "divider"
    },

    {
      type: "paragraph",
      text: "I know someone who is not yet thirty. He has a loving family. A healthy child. A six-figure salary. A home in New York City. Everything that many people spend decades chasing."
    },
    {
      type: "paragraph",
      text: "And yet, every time I speak to him, I hear the same sentence hidden beneath different words:"
    },
    {
      type: "paragraph",
      text: "*“I don’t feel at peace.”*"
    },

    {
      type: "divider"
    },

    {
      type: "paragraph",
      text: "I know someone else who built a successful business from scratch. They employ dozens of people. Revenue is growing. By every conventional definition, they’re successful."
    },
    {
      type: "paragraph",
      text: "Yet they’re constantly searching for what’s next, hoping the next milestone will finally bring the satisfaction this one didn’t."
    },

    {
      type: "divider"
    },
    {
      type: "paragraph",
      text: "Then I know another person who walked away from city life altogether. They traded deadlines for nature, ambition for simplicity, hoping that slowing down would finally bring peace."
    },
    {
      type: "paragraph",
      text: "It didn’t."
    },
    {
      type: "paragraph",
      text: "They’re still searching."
    },
    {
      type: "divider"
    },
    {
      type: "paragraph",
      text: "But then…"
    },
    {
      type: "paragraph",
      text: "I know someone who earns around $1,000 a month. He lives with his family in a small town in India. His life would probably never appear on a success checklist. Yet every time I meet him, he laughs wholeheartedly. He sleeps peacefully. He looks… content."
    },
    {
      type: "paragraph",
      text: "Not because his life is perfect."
    },
    {
      type: "paragraph",
      text: "But because, somehow, he seems to have found something many of us keep looking for."
    },
    
    {
      type: "divider"
    },

    {
      type: "paragraph",
      text: "These people shouldn’t exist together. If happiness came from money, status, success, location, or achievement, one group should be consistently happier than the other. But reality refuses to follow that rule."
    },
    {
      type: "paragraph",
      text: "So maybe we’ve been asking the wrong question all along."
    },
    {
      type: "paragraph",
      text: "Maybe the question isn’t: *“How do I become happy?”*"
    },
    {
      type: "paragraph",
      text: "Maybe it’s: *“What does happiness actually mean to me?”*"
    },
    {
      type: "paragraph",
      text: "Most of us never stop to answer that. Instead, we inherit someone else’s definition."
    },
    {
      type: "paragraph",
      text: "We grow up believing happiness is the next promotion, the bigger house, the perfect relationship, financial freedom, early retirement, or traveling the world."
    },
    {
      type: "paragraph",
      text: "None of those things are wrong."
    },
    {
      type: "paragraph",
      text: "The problem begins when we’re chasing a destination chosen for us rather than by us."
    },
    {
      type: "paragraph",
      text: "Take a moment and ask yourself:"
    },
    {
    type: "list",
        items: [
            "*If money wasn’t a concern, what would an ideal day look like?*",
            "*What moments in your life have made you genuinely lose track of time?*",
            "*Whose life are you trying to build — your own, or the one you were taught to admire?*",
            "*If you achieved every goal you’re currently chasing, what exactly are you expecting to feel?*"
        ]
    },
    {
      type: "paragraph",
      text: "Those questions don’t have immediate answers. But perhaps they’re more important than the goals themselves."
    },
    {
      type: "paragraph",
      text: "Because happiness isn’t necessarily one destination."
    },
    {
      type: "paragraph",
      text: "For one person, it’s building a company."
    },
    {
      type: "paragraph",
      text: "For another, it’s having dinner with family every evening."
    },
    {
      type: "paragraph",
      text: "For someone else, it’s traveling the world with a backpack."
    },
    {
      type: "paragraph",
      text: "For another, it’s living quietly in a small town."
    },
    {
      type: "paragraph",
      text: "None of them are right."
    },
    {
      type: "paragraph",
      text: "None of them are wrong."
    },
    {
      type: "paragraph",
      text: "They’re simply different."
    },
    {
      type: "paragraph",
      text: "And maybe that’s the point."
    },
    {
      type: "paragraph",
      text: "Maybe happiness isn’t something we discover at the end of a journey."
    },
    {
      type: "paragraph",
      text: "Maybe it’s something we define before we begin one."
    },
    {
      type: "paragraph",
      text: "Because if we never define it ourselves, we’ll spend our lives chasing someone else’s version of it."
    },
    {
      type: "paragraph",
      text: "So before asking yourself how to become happier… Ask yourself one question:"
    },
    {
      type: "paragraph",
      text: "*What does happiness actually mean to me?*"
    },

    {
      type: "quote",
      text: "**The first step toward attaining happiness is defining it.**"
    },
    
    {
      type: "divider"
    },
  ];

  return (
    <BlogLayout
      title="The Pursuit of Happ(y)ness"
      author="July 29, 2026"
      content={content}
    />
  );


}