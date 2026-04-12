"use client";

import Image from "next/image";

export default function Work() {

  const jobs = [
    {
      role: "Doctorate in Business Administration",
      company: "National Louis University, Tampa",
      logo: "/nlu_logo.png",
      period: "January 2026 — Present",
      description:
        "I am pursuing a PhD in Business Administration to position myself at the forefront of industry leadership, armed with the academic credentials and deep subject matter expertise needed to drive meaningful impact at the highest levels. Through this journey, I hope to cultivate a powerful professional network that will open doors to transformative opportunities and collaborations throughout my career.",
      skills: [
        "Business Administration",
        "Strategic Leadership",
        "Organizational Management",
        "Research",
        "Writing"
      ],
      takeaway:
        "I am continually exposed to cutting-edge research, finding joy in exploring diverse perspectives that challenge and expand my understanding of the business world."
    },
    {
      role: "Master of Science in Business Analytics",
      company: "Simon Business School, University of Rochester",
      logo: "/ur_logo.png",
      period: "August 2021 — December 2022",
      description:
        "",
      skills: [
        "Business Analysis",
        "Data Science",
        "Client Communication",
        "Professional Communication",
        "Team Leadership"
      ],
      takeaway:
        "One of the best epxeriences of my life - personally, professionally, academically."
    },
    {
      role: "Bachelor of Technology in Computer Science",
      company: "Symbiosis International University",
      logo: "/symbi_logo.png",
      period: "August 2014 - May 2018",
      description:
        "My Bachelor's in Computer Science gave me the technical foundation that underpins everything I do today — from data engineering and programming to systems thinking and problem-solving",
      skills: [
        "Computer Science",
        "Computer Networking",
        "Programming Languages",
        "Common Sense"
      ],
      takeaway:
        "A technical grounding in Computer Science that made every analytics and strategy challenge that followed feel like home."
    },
    {
      role: "Diploma in Business Analytics",
      company: "Symbiosis Institute of Business Management",
      logo: "/symbi_logo.png",
      period: "May 2015 - May 2017",
      description:
        "While completing my Bachelor's in Computer Science, I pursued a part-time Diploma in Business Management - a deliberate early step toward bridging the gap between technology and business. Even then, I had a clear long-term vision: to move beyond building systems and toward shaping the decisions behind them.",
      skills: [
        "Business Management",
        "Communication",
        "Economics",
        "Finance"
      ],
      takeaway:
        "Where the tech-meets-business story began."
    }
  ];

  const recommendations = [
    {
      name: "Clinical Associate Professor of Business Administration",
      title: "Organization",
      company: "University of Rochester",
      preview: "Prof. Elizabeth taught me couple of courses throughout the program and I worked closely with her to pilot the Student Mentorship program.",
      link: "/liza_lor.pdf"
    },
    {
      name: "Director of Career Development",
      title: "Organization",
      company: "University of Rochester",
      preview: "Katie Mulheron is responsible for mentoring and guiding Master's students through their professional journey.",
      link: "/ms_lor.pdf"
    },
    {
      name: "Project Mentor",
      title: "Organization",
      company: "sayhii.io",
      preview: "Dr. John Handley was my mentor when I was working as a Consultant and acted as a liason between me and the client.",
      link: "/ms_project.pdf"
    },
    {
      name: "Head of Department - Computer Science",
      title: "Organization",
      company: "Symbiosis International University",
      preview: "Prof. Shraddha was the head of the department and I had the pleasure to interact with her and seek career guidance.",
      link: "/LOR_Symbiosis.pdf"
    }
  ];

  return (
    <main className="min-h-screen px-6 py-20 max-w-6xl mx-auto">

      <h1 className="text-4xl font-bold text-center mb-10">
        Education
      </h1>

      {/* Career Snapshot Strip */}
      <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600 mb-16">

        <span className="px-4 py-2 bg-gray-100 rounded-full">
          Business Analyst
        </span>

        <span className="px-4 py-2 bg-gray-100 rounded-full">
          Computer Science
        </span>

        <span className="px-4 py-2 bg-gray-100 rounded-full">
          Business Management
        </span>

        <span className="px-4 py-2 bg-gray-100 rounded-full">
          Business Administration
        </span>

        <span className="px-4 py-2 bg-gray-100 rounded-full">
          Bachelor of Technology
        </span>

        <span className="px-4 py-2 bg-gray-100 rounded-full">
          Master of Science
        </span>

        <span className="px-4 py-2 bg-gray-100 rounded-full">
          Doctorate of Business Administration
        </span>

      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

        {/* Career Section */}
        <div className="md:col-span-2 space-y-12">

          {jobs.map((job, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl shadow-lg hover:shadow-xl transition bg-white"
            >

              {/* Job Header with Logo */}
              <div className="flex items-center gap-4 mb-4">

                <Image
                  src={job.logo}
                  alt={job.company}
                  width={50}
                  height={50}
                  className="rounded-md object-contain"
                />

                <div>
                  <h2 className="text-2xl font-semibold">
                    {job.role}
                  </h2>

                  <p className="text-gray-600 font-medium">
                    {job.company}
                  </p>

                  <p className="text-sm text-gray-500">
                    {job.period}
                  </p>
                </div>

              </div>

              <p className="text-gray-700 leading-relaxed">
                {job.description}
              </p>

              {/* Skills */}
              <div className="flex flex-wrap gap-2 mt-4">
                {job.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="text-xs px-3 py-1 bg-gray-100 rounded-full text-gray-700"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Key Takeaway */}
              <div className="mt-5 p-4 bg-gray-50 rounded-lg border-l-4 border-blue-500">
                <p className="text-sm font-medium text-gray-800">
                  Key Takeaway
                </p>
                <p className="text-sm text-gray-600 mt-1">
                  {job.takeaway}
                </p>
              </div>

            </div>
          ))}

        </div>

        {/* Recommendations Panel */}
        <div className="space-y-6 md:sticky md:top-24 h-fit">

          <h2 className="text-xl font-semibold">
            Academic Recommendations
          </h2>

          {recommendations.map((rec, index) => (
            <a
              key={index}
              href={rec.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-5 rounded-xl border hover:shadow-md transition relative"
            >

              {/* External Link Icon */}
              <span className="absolute top-4 right-4 text-gray-400 text-sm">
                ↗
              </span>

              <p className="font-medium">
                {rec.name}
              </p>

              <p className="text-sm text-gray-500">
                {rec.title} — {rec.company}
              </p>

              <p className="text-sm text-gray-600 mt-2 italic">
                "{rec.preview}"
              </p>

            </a>
          ))}

        </div>

      </div>

    </main>
  );
}