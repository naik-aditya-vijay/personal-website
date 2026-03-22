import BlogLayout, { ContentBlock } from "../../../../components/BlogLayout";

export default function BlogPost() {

  // Explicitly type content as ContentBlock[]
  const content: ContentBlock[] = [
    {
      type: "paragraph",
      text: "I have been slightly burnt by poverty and spoilt somewhat by the taste of becoming wealthy. It’s a strange place to be — neither here nor there. I have brushed shoulders with the affluent, glimpsed their luxury, and felt the pull of what life could be if only there was more. At the same time, I’ve stared into the abyss of poverty, just close enough to see the edge and feel the chill of financial insecurity. Contentment, for me, has always been an elusive thing."
    },
    {
      type: "image",
      src: "/blog_2_1.png",
      caption: ""
    },
    {
      type: "paragraph",
      text: "Today is no different. I’m headed to an important meeting at a lavish 5-star hotel. A place where wealth is not just a backdrop but a currency. I’ve been to places like this before, but it always strikes me how I can be both in and out of the picture at the same time. I’m dressed in the best suit I own. It’s not new — in fact, I’ve owned it for years — but it’s carefully kept, protected in plastic like some prized artifact. This is the kind of suit that gets brought out for occasions like these, as if it alone can open doors to the world of wealth I so often observe from a distance."
    },
    {
      type: "paragraph",
      text: "The first stop is the gas station. There’s something about this simple act of filling the tank that brings home the stark reality of my situation. I make an extra effort to ensure the reading is at zero when the attendant starts filling. Every rupee matters, especially these days. I even watch closely as the last drop of petrol drips into the tank, unwilling to let even that go to waste. There’s a strange satisfaction in knowing I’ve squeezed out every bit of value, but also a quiet humiliation in the fact that I have to."
    },
    {
      type: "paragraph",
      text: "Driving through the city, the scenery reflects the same split that runs through my life. On one side, there are slums — clusters of homes held together by desperation and ingenuity. Here, life is a daily struggle for basic necessities: water, food, shelter. On the other side of the road, I see a different world entirely. Cars that are symbols of affluence zoom past — sleek, expensive machines that burn petrol without a second thought. For those driving them, the cost of fuel is an afterthought, the luxury of consumption the only concern."
    },
    {
      type: "image",
      src: "/blog_2_2.png",
      caption: ""
    },
    {
      type: "paragraph",
      text: "The sun beats down hard today, and my car grows stuffy. I want to crank up the A/C, but a small voice inside stops me. Blasting the A/C would make the drive more comfortable, but it would also lower the mileage — something I can’t afford. The car, like my life, is stuck somewhere between economy and luxury. I find myself constantly measuring how much I can take, how much I can afford to give myself without tipping over into wastefulness."
    },
    {
      type: "paragraph",
      text: "When I reach the hotel, the valet greets me with a smile and the security guards open the door as if I truly belong here. It’s strange how much weight a good suit carries. Despite my reality, I walk through those glass doors with confidence, momentarily part of the well-heeled crowd. As I wait in the lobby for my client, I can’t help but observe the people around me."
    },
    {
      type: "paragraph",
      text: "Some are dressed in the casual elegance of wealth — effortless, understated, but unmistakably expensive. I imagine their day so far: perhaps a lazy breakfast in bed, a leisurely bubble bath to wash away the remnants of last night’s party, and now, a relaxed lunch with friends, discussing vacations or new business ventures. Others might have flown in early this morning, stepping off private jets or first-class flights, here to close million-dollar deals before heading back to their homes, where money flows as easily as water."
    },
    {
      type: "image",
      src: "/blog_2_3.png",
      caption: ""
    },
    {
      type: "paragraph",
      text: "I sit among them, part of this scene but never fully immersed. I wonder what it would be like to live their lives — to not think about the last drop of petrol, to not hesitate when cooling your car, to wear luxury not just on your body but as a mindset. To be free of the constant calculations that have become second nature to me."
    },
    {
      type: "paragraph",
      text: "After the meeting, I retrace my steps back to my car. The valet returns the keys to me with the same politeness, but as I drive away, those thoughts come back. The allure of a life where every move isn’t weighed against a budget, where opportunity doesn’t have a price tag."
    },
    {
      type: "paragraph",
      text: "It’s hard to be content with the middle ground when you’ve tasted both extremes. The middle feels like a suspension, an endless balancing act between want and enough. It’s a space where I can’t fully relax because I’ve seen too much of what lies above and below me. Every time I step into these luxurious hotels, meet with clients who think nothing of spending on what I would consider a fortune, the middle feels less satisfying, less secure."
    },
    {
      type: "paragraph",
      text: "Like every human, I aspire to become rich — financially, emotionally, spiritually, physically, and mentally. These are the moments that I want to remember as I push forward, aiming for success. I want the finer things in life, but I never want to lose sight of the value in small things — like that last drop of petrol."
    },
    {
      type: "paragraph",
      text: "And so, I drive home, passing the slums and the mansions, the compact cars and the luxury sedans, caught between the dichotomy of the two worlds within and around me."
    },
    {
      type: "image",
      src: "/blog_2_4.png",
      caption: ""
    }
  ];

  return (
    <BlogLayout
      title="Dicotonomy of the middle!"
      author="September 15, 2024"
      content={content}
    />
  );
}