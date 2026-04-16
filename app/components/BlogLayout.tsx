import Image from "next/image";
import ReactMarkdown from "react-markdown";

export type ContentBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "quote"; text: string }
  | { type: "highlight"; text: string }
  | { type: "divider" }
  | { type: "image"; src: string; alt?: string; caption?: string }
  | { type: "list"; items: string[] };

type BlogLayoutProps = {
  title: string;
  author: string;
  content: ContentBlock[];
};

export default function BlogLayout({
  title,
  author,
  content,
}: BlogLayoutProps) {
  return (
    <main className="min-h-screen px-6 py-20 max-w-3xl mx-auto">

      {/* HEADER */}
      <header className="mb-14">
        <h1 className="text-4xl font-bold leading-tight mb-3 text-black">
          {title}
        </h1>

        <p className="text-sm text-gray-500">
          Published on {author}
        </p>
      </header>

      {/* CONTENT */}
      <article className="space-y-8 text-gray-700 leading-relaxed text-lg">

        {content.map((block, index) => {

          // PARAGRAPH (Markdown enabled)
          if (block.type === "paragraph") {
            return (
              <div key={index} className="leading-relaxed">
                <ReactMarkdown
                  components={{
                    p: ({ children }) => <p className="mb-4">{children}</p>,
                    strong: ({ children }) => <strong className="font-semibold text-black">{children}</strong>,
                    em: ({ children }) => <em className="italic">{children}</em>,
                    a: ({ children, href }) => (
                      <a href={href as string} className="text-blue-600 underline">
                        {children}
                      </a>
                    ),
                  }}
                >
                  {block.text}
                </ReactMarkdown>
              </div>
            );
          }

          // HEADING
          if (block.type === "heading") {
            return (
              <h2
                key={index}
                className="text-2xl font-semibold mt-10 mb-3 text-black"
              >
                {block.text}
              </h2>
            );
          }

          // QUOTE (more editorial + markdown support)
          if (block.type === "quote") {
            return (
              <blockquote
                key={index}
                className="border-l-4 border-gray-300 pl-5 py-3 italic text-gray-600 bg-gray-50 rounded-r-md"
              >
                <ReactMarkdown>{block.text}</ReactMarkdown>
              </blockquote>
            );
          }

          // HIGHLIGHT (key idea callout)
          if (block.type === "highlight") {
            return (
              <div
                key={index}
                className="border-l-4 border-black pl-4 py-3 bg-gray-50 text-black font-medium rounded-r-md"
              >
                <ReactMarkdown>{block.text}</ReactMarkdown>
              </div>
            );
          }

          // DIVIDER
          if (block.type === "divider") {
            return (
              <div key={index} className="flex justify-center my-10">
                <div className="w-12 h-[2px] bg-gray-300" />
              </div>
            );
          }

          // LIST (bullets)
          if (block.type === "list") {
            return (
              <ul key={index} className="list-disc pl-6 space-y-2 text-gray-700">
                {block.items.map((item, i) => (
                  <li key={i}>
                    <ReactMarkdown
                      components={{
                        p: ({ children }) => <span>{children}</span>
                      }}
                    >
                      {item}
                    </ReactMarkdown>
                  </li>
                ))}
              </ul>
            );
          }

          // IMAGE
          if (block.type === "image") {
            return (
              <div key={index} className="my-10">
                <Image
                  src={block.src}
                  alt={block.alt || "Blog image"}
                  width={900}
                  height={600}
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