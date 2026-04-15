import Image from "next/image";

export type ContentBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "quote"; text: string }
  | { type: "image"; src: string; alt?: string; caption?: string };

type BlogLayoutProps = {
  title: string;
  author: string;
  content: ContentBlock[];
};

// Fix: type the destructured props
export default function BlogLayout({
  title,
  author,
  content,
}: BlogLayoutProps) {
  return (
    <main className="min-h-screen px-6 py-20 max-w-3xl mx-auto">

      {/* Title */}
      <h1 className="text-4xl font-bold mb-4 leading-tight">
        {title}
      </h1>

      {/* Author */}
      <p className="text-gray-500 mb-12">
        Published on {author}
      </p>

      {/* Content */}
      <article className="space-y-6 text-gray-700 leading-relaxed text-lg">
        {content.map((block, index) => {
          if (block.type === "paragraph") {
            return <p key={index}>{block.text}</p>;
          }

          if (block.type === "heading") {
            return (
              <h2 key={index} className="text-2xl font-semibold mt-10">
                {block.text}
              </h2>
            );
          }

          if (block.type === "quote") {
            return (
              <blockquote
                key={index}
                className="border-l-4 border-gray-300 pl-4 italic text-gray-600"
              >
                {block.text}
              </blockquote>
            );
          }

          if (block.type === "image") {
            return (
              <div key={index} className="my-8">
                <Image
                  src={block.src}
                  alt={block.alt || "Blog image"}
                  width={800}
                  height={500}
                  className="rounded-xl"
                />
                {block.caption && (
                  <p className="text-sm text-gray-500 mt-2 text-center">
                    {block.caption}
                  </p>
                )}
              </div>
            );
          }

          return null;
        })}
      </article>

    </main>
  );
}