import BlogLayout, { ContentBlock } from "../../../../components/BlogLayout";

export default function BlogPost() {

  const content: ContentBlock[] = [

    {
      type: "paragraph",
      text: "They told me the island was kind."
    },
    // {
    //   type: "divider"
    // },

    {
      type: "paragraph",
      text: "Not just livable. Kind. A place where the soil returns more than you bury in it, where the rains keep their appointments, where a person who works honestly is mostly allowed to keep what they build. I heard the stories for years before I ever saw the coast. A cousin who crossed and sent back photographs of a kitchen with too many cabinets. An uncle whose voice on the phone grew a little less tired each year. So one morning, I packed a single bag, far too small for everything I truly carried, and I gave myself to the water with a long, private list of who I meant to become."
    },
    {
      type: "paragraph",
      text: "The crossing is its own story, and not a gentle one. But I reached the far sand. And at the edge of it stood the men who decide who may step onto the island and who is turned back to the waves. They looked at me for the length of a held breath. They looked at my papers. Then one of them gave the smallest nod, and the island let me in."
    },
    {
      type: "paragraph",
      text: `And it was kind, mostly. I will not pretend otherwise. There was work, and the work fed me. There were paths that did not break your back to walk them, and healers who did not first ask whose son you were. I learned the island’s word for please, and for sorry, and the quick nod its people give when they wish to be warm but are already late. I found the sellers who would not cheat me. I built a small house near a low hill, then a slightly larger one, and one unremarkable evening, I looked up and understood I had a life here. A real one, with a chair that quietly became my favorite, and a particular way I prefer my tea, and neighbors who raised a hand when I passed.`
    },
    {
      type: "paragraph",
      text: `*And still.*`
    },
    // {
    //   type: "divider"
    // },
    {
      type: "paragraph",
      text: `There is an hour, near dusk, when I walk down to the water and look at the seam where the sea meets the sky, and something in me leans toward that line the way a plant leans toward a window. The island has everything. It does not have the smell of my mother’s cooking at first light. It does not hold the gray of the sky I was born under, the one that promised rain. It is not the tongue I still dream in. My own child answers me now in the island’s language and looks at me strangely when I slip into mine.`
    },
    {
      type: "quote",
      text: "ने मजसी ने परत मातृभूमि ला, सागरा प्राण तळमळला!"
    },
    {
      type: "quote",
      text: "Ne majasi ne, parat matrubhoomila… sagara, pran talmalala."
    },
    {
      type: "quote",
      text: "Carry me back, carry me home to the land that made me. O sea, my soul is in anguish. — Vinayak Damodar Savarkar, written far from home, at the edge of the water."
    },
    {
      type: "image",
      src: "/blog_ne-majasi-ne.png",
      caption: ""
    },

    {
      type: "paragraph",
      text: `That is the arithmetic of leaving. You can gain nearly everything and still walk through your good fortune with a hole in you, shaped precisely like the place you left.`
    },
    {
      type: "paragraph",
      text: `And there is a colder thing the stories never told me. On the island, my whole life rests on paper. Not on my hands, which are good hands. Not in my years here, which are many. On a mark. There is a great house where a tally is kept, a line of names that has not moved in longer than my child has been alive. From time to time, a voice speaks from the high rock at the center of the island, and the whole shore goes quiet to hear it, because a single sentence from that rock can decide who keeps his house and whose child must learn to be strange somewhere else. The men at the water’s edge are always there. A mark on a page, made in a room I will never enter, by a hand that will never learn my name, can send me back across the very sea I begged to carry me home.`
    },
    {
      type: "paragraph",
      text: `And yet the paper is not what fills the hour at dusk. When the light goes soft, and I walk down to the water, the tally and the voice on the rock fall away, and what stays is smaller and older than any fear of them. The smell of a kitchen I will not stand in again. A sky I keep searching for in this one. A person at the edge of the world, asking the sea to do the one impossible thing, and carry him home.`
    },
    
    {
      type: "divider"
    },
  ];

  return (
    <BlogLayout
      title="Almost."
      author="July 2, 2026"
      content={content}
    />
  );


}