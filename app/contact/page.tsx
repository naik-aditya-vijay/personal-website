export default function ContactPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      
      {/* Title */}
      <h1 className="text-4xl font-bold mb-4">Contact Me</h1>

      {/* Intro */}
      <p className="text-lg text-gray-600 mb-10">
        I enjoy conversations that go beyond surface level.
      </p>

      {/* Form */}
      <form
        action="https://formspree.io/f/xvzweqwq"
        method="POST"
        className="space-y-6"
      >
        <div>
          <label className="block text-sm font-medium mb-2">Name</label>
          <input
            type="text"
            name="name"
            required
            className="w-full border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Email</label>
          <input
            type="email"
            name="email"
            required
            className="w-full border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Message</label>
          <textarea
            name="message"
            rows={5}
            required
            className="w-full border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-black text-white px-6 py-3 rounded-xl hover:opacity-90 transition"
        >
          Send Message
        </button>
      </form>

      {/* Divider */}
      <div className="my-12 border-t"></div>

      {/* Alternate Contact */}
      <div className="space-y-3 text-gray-700">
        <p>
          Prefer reaching out directly?
        </p>

        <p>
          📧 Email: <a href="mailto:naikadityavijay@gmail.com" className="underline">naikadityavijay@gmail.com</a>
        </p>

        <p>
          💼 LinkedIn:{" "}
          <a
            href="https://linkedin.com/in/itsadityanaik"
            target="_blank"
            className="underline"
          >
            linkedin.com/in/itsadityanaik
          </a>
        </p>
        <p>
          ✍️ Medium:{" "}
          <a
            href="https://medium.com/@YOUR_USERNAME"
            target="_blank"
            className="underline"
          >
            https://medium.com/@talksnspeaks
    </a>
  </p>
      </div>
    </div>
  );
}