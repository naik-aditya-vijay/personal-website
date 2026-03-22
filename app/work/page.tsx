"use client";

import Image from "next/image";

export default function Work() {

  const jobs = [
    {
      role: "Senior Health Business Analyst",
      company: "Florida Blue",
      logo: "/floridablue_logo.jpg",
      period: "Aug 2024 — Present",
      description:
        "Working in the value-based commercial analytics department with a blend of monthly processes and ad-hoc projects. Monthly responsibilities include building datasets that serve as the source of truth for the commercial organization, maintaining dashboards to visualize data and trends, and running quality checks and testing. Ad-hoc project scope covers anything that requires leveraging data - from investigating inconsistent claims for a member and managing performance for provider groups, to tracking trends and supplying data for marketing initiatives.",
      skills: [
        "Healthcare Analytics",
        "Stakeholder Communication",
        "Strategic Thinking",
        "Data Storytelling",
        "Data Analysis"
      ],
      takeaway:
        "Using data to leverage decision-making; ad-hoc projects allow working with new data, with new challenges, and new stakeholders."
    },
    {
      role: "Pricing Analytics Expert",
      company: "EMD Millipore",
      logo: "/millipore_logo.jpg",
      period: "August 2022 — April 2024",
      description:
        "Builds and maintains the data infrastructure that keeps commercial teams informed, from source-of-truth datasets to dashboards and reporting. When ad-hoc needs arise - whether optimizing pricing, investigating claims, or supporting marketing - steps in to deliver the analysis that drives the decision.",
      skills: [
        "Data Analysis",
        "Dashboarding",
        "Pricing Analysis",
        "Problem Solving",
        "Stakeholder Communication"
      ],
      takeaway:
        "Biggest learning was from cross-cultural team across continents - I was part of the Global Pricing team and had to work closely with reprentatives from all markets where the business operates, including USA, Germany, China, Brazil, Canada, India."
    },
    {
      role: "Digital Strategy & Analytics",
      company: "Excellus Blue Cross Blue Shield",
      logo: "/excellus_logo.png",
      period: "June 2022 - August 2022",
      description:
        "Analyzed digital customer behavior and member feedback to surface insights that shaped business goals and product direction. Designed and deployed surveys, built out sentiment and topic modeling workflows, and contributed to the strategy behind new digital features like chatbot and live messaging.",
      skills: [
        "Healthcare",
        "Data Presentations",
        "Team Collaboration",
        "Analytics"
      ],
      takeaway:
        "Realized the power of sofisticated technical processes when I got to update a monthly process from manual entry on Excel to topic handling with Python."
    },
    {
      role: "Go-To-Market Strategy Consultant",
      company: "Kannavie",
      logo: "",
      period: "September 2021 - December 2021",
      description:
        "Developed a go-to-market strategy grounded in market research, competitive analysis, and internal data - covering brand positioning, outreach, and surveys. The work helped position the client for a successful soft launch and capital investment.",
      skills: [
        "Client Management",
        "Marketing Strategy",
        "Team Work",
        "Business Development"
      ],
      takeaway:
        "This role built my foundation in understanding people, communication, and the importance of aligning strategy with execution."
    },
    {
      role: "Management Executive",
      company: "Aeon Communication",
      logo: "/aeon_logo.jpg",
      period: "September 2018 - July 2021",
      description:
        "Served as a central connector across teams, vendors, and high-profile external partners - from government officials to Google and Intel - keeping projects aligned and moving. Led marketing efforts, managed client onboarding, and coordinated cross-functional launches that improved delivery and client satisfaction.",
      skills: [
        "Client Management",
        "Marketing Strategy",
        "Business Development",
        "Leadership"
      ],
      takeaway:
        "This role built my foundation in understanding people, communication, and the importance of aligning strategy with execution."
    }
  ];

  const recommendations = [
    {
      name: "Project Mentor",
      title: "Organization",
      company: "sayhii.io",
      preview: "Dr. John Handley was my mentor when I was working as a Consultant and acted as a liason between me and the client.",
      link: "/ms_project.pdf"
    },
    {
      name: "Strategic Partner",
      title: "Organization",
      company: "Changhong",
      preview: "Mr.Parag was the Sales Director for South Asian market for Changhong and our strategic partner.",
      link: "/LOR_Changhong.pdf"
    },
    {
      name: "Manager",
      title: "Organization",
      company: "Aeon",
      preview: "Mr.Ravi was my manager and the Chief Technology Officer (CTO) when I was working at Aeon Communication.",
      link: "/LOR_Aeon.pdf"
    },
    {
      name: "Human Resource Partner",
      title: "Organization",
      company: "Aeon",
      preview: "Mr.Rajesh was the Senior HR Manager overseeing all hiring, and people development activities.",
      link: "/LOR_Aeon_HR.pdf"
    }
  ];

  return (
    <main className="min-h-screen px-6 py-20 max-w-6xl mx-auto">

      <h1 className="text-4xl font-bold text-center mb-10">
        Work
      </h1>

      {/* Career Snapshot Strip */}
      <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600 mb-16">

        <span className="px-4 py-2 bg-gray-100 rounded-full">
          6+ Years Experience
        </span>

        <span className="px-4 py-2 bg-gray-100 rounded-full">
          Business Analytics, Data Presentation & Strategy Alignment
        </span>

        <span className="px-4 py-2 bg-gray-100 rounded-full">
          Data Presentation
        </span>

        <span className="px-4 py-2 bg-gray-100 rounded-full">
          Strategy Alignment
        </span>

        <span className="px-4 py-2 bg-gray-100 rounded-full">
          Multi-Country Exposure
        </span>
      
        <span className="px-4 py-2 bg-gray-100 rounded-full">
          Growth & Entrepreneural Mindset
        </span>

        <span className="px-4 py-2 bg-gray-100 rounded-full">
          Proactive Initiative Leadership
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
            Professional Recommendations
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