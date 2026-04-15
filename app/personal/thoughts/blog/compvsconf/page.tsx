import BlogLayout, { ContentBlock } from "../../../../components/BlogLayout";

export default function BlogPost() {

  const content: ContentBlock[] = [
    {
      type: "paragraph",
      text: "There’s a scene I replay in my head often. A conference room. Long table, expensive chairs, the kind of subtle lighting that makes everyone look like they belong on a Forbes cover. I was there, notebook in hand, dressed sharp and prepared. Months of work had earned me that seat. I knew my stuff. And yet, the moment I opened my mouth, something strange happened. My voice dropped half a register. My sentences started with “I think maybe…” and “This could be wrong, but…” I watched as the room’s attention drifted, slowly, like a tide going out, toward the person next to me, who was saying things I knew, just louder and with fewer apologies."
    },

    {
      type: "paragraph",
      text: "That was the day I understood something nobody tells you in school: competency gets you into the room. Confidence gets you a seat at the table."
    },

    {
      type: "paragraph",
      text: "We spend years, YEARS, building competency. Degrees, certifications, late nights, early mornings. We stack credentials like armor, convinced that if we just know enough, the world will recognize it. And it does, to a point. Competency is the price of entry. It’s the reason you get the interview, the invitation, the opportunity. But here’s the uncomfortable truth nobody wants to put in a LinkedIn post — once you’re in the room, nobody has the time to audit your expertise."
    },

    {
      type: "paragraph",
      text: "Think about it. When you meet someone for the first time, are you mentally running a background check on their qualifications? Of course not. You’re reading them. Their posture. The steadiness in their eyes. Whether they take up space or shrink from it. You’re making a judgment call in seconds, not based on what they know, but based on how they carry what they know. We are all, every single one of us, doing this constantly. And if we’re doing it to others, others are absolutely doing it to us."
    },

    {
      type: "paragraph",
      text: "Confidence isn’t a shortcut around competency. It’s the bridge between competency and impact."
    },

    {
      type: "paragraph",
      text: "But here’s where it gets interesting, and where most self-help advice gets it wrong."
    },

    {
      type: "paragraph",
      text: "Confidence is not performance. It’s not a louder voice or a firmer handshake. It’s not the guy in the room who talks the most, or the woman who never admits she doesn’t know something. That’s not confidence. That’s noise."
    },

    {
      type: "paragraph",
      text: "Real confidence is authenticity, and authenticity is simply the synchrony between what’s on the inside and what you show on the outside. When those two things are aligned, there’s nothing to perform. You’re not acting confident; you are confident. The room feels it before you’ve said a single word."
    },
    {
      type: "paragraph",
      text: "I’ve met brilliant people who radiate a quiet, unshakeable certainty — not because they believe they’re the smartest person in the room, but because they’re entirely comfortable being exactly who they are in that room. And I’ve met people loaded with credentials who seem like they’re auditioning for a role they’re not sure they got. The difference isn’t intelligence. It’s alignment."
    },
    {
      type: "paragraph",
      text: "When there’s a gap between what you believe about yourself and what you project to the world, people sense it. Humans are remarkably good detectors of incongruence. We’ve evolved for thousands of years to read each other — a slight tension in the jaw, eyes that don’t quite match the smile, a voice that goes up at the end of statements that should be declarations. We pick it up. We just don’t always know why someone feels “off.”"
    },
    {
      type: "paragraph",
      text: "Here’s something that changed how I see this entirely: the communication between your mind and your body is a two-way street."
    },
    {
      type: "paragraph",
      text: "We assume the direction of traffic only goes one way; that your internal state drives your external expression. You feel confident, so you stand tall. You feel nervous, so you fidget. But science and lived experience tell a different story. It works in reverse too. Stand tall, and something inside you shifts. Speak slowly and deliberately, and your mind starts to believe you have something worth saying. Smile genuinely, and your mood actually follows."
    },
    {
      type: "paragraph",
      text: "This isn’t pop psychology. This is the fascinating reality that the body is not just the messenger of the mind; it’s also its editor. What you do with your body sends signals back to your brain, reshaping how you feel in real time. Which means confidence isn’t just a feeling you wait to arrive. It’s a practice. It’s a choice you make with your shoulders, your breath, your eye contact — until the feeling catches up."
    },
    {
      type: "paragraph",
      text: "So where does that leave the overthinkers, the over-preparers, the ones who have done the work and still feel like they’re one question away from being “found out”?"
    },
    {
      type: "paragraph",
      text: "It leaves us here: with the understanding that the work doesn’t stop at competency. The real work, the harder, quieter, more personal work, is learning to trust what you’ve built. To stop apologizing for your opinions before you’ve even shared them. To stop treating your own ideas like they need a disclaimer. To walk into a room not hoping to be accepted, but willing to contribute."
    },
    {
      type: "paragraph",
      text: "Competency is what you know. Confidence is knowing that you know it."
    },
    {
      type: "paragraph",
      text: "The room will follow."
    },
    {
      type: "paragraph",
      text: "Keep dreaming, keep believing — now say it like you mean it!"
    }

    
  ];

  return (
    <BlogLayout
      title="The Room Knows Nothing About You - Until You Speak"
      author="April 14, 2026"
      content={content}
    />
  );
}