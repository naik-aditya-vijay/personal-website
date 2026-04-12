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
        "I sit at the intersection of data infrastructure and strategic decision-making within the value-based commercial analytics function, supporting leaders across Provider Analytics, Sales, Clinical, and Marketing with the insights they need to act with confidence. My work spans two dimensions: building reliable foundations and solving complex problems. On the foundation side, I own the datasets that serve as the commercial organization's source of truth, maintain dashboards used by executives and cross-functional teams, and enforce data quality standards that stakeholders depend on daily. On the strategic side, I take on high-ambiguity, high-stakes projects - from untangling inconsistent claims at the member level and managing performance analytics for provider groups, to identifying trends that shape marketing and commercial strategy. I collaborate on cross-functional projects, translating data into narratives that drive decisions at the leadership level.",
      skills: [
        "Healthcare Analytics",
        "Stakeholder Communication",
        "Strategic Thinking",
        "Data Storytelling",
        "Data Analysis"
      ],
      takeaway:
        "Turning complex health data into decisions."
    },
    {
      role: "Founder & Chair",
      company: "Youth Organization for Underpriviledged, Needful and Gifted (YOUNG) Foundation",
      logo: "/young.png",
      period: "December 2019 — Present",
      description:
        "Founded the YOUNG Foundation with a mission centered on Education & Skill Development, Healthcare Awareness, and Social Impact. I wear every hat: organizing events, managing finances, expanding our volunteer network, and identifying new ways to serve community. Building something meaningful with limited resources has sharpened my ability to prioritize, lead with purpose, and create impact where it matters most.",
      skills: [
        "Community Service",
        "Innate Satisfaction",
        "Empathy & Compassion",
        "Leadership",
        "Team Collaboration"
      ],
      takeaway:
        "A sense of purpose."
    },
    {
      role: "Pricing Analytics Expert",
      company: "EMD Millipore",
      logo: "/millipore_logo.jpg",
      period: "August 2022 — April 2024",
      description:
        "As an Analytics Expert on the pricing and commercial analytics team, I built and maintained the data infrastructure, datasets, reports, and dashboards, that kept business teams informed and decision-ready. Beyond steady-state operations, I took ownership of high-impact initiatives to improve accuracy and operations within the pricing organization. My work consistently moved from analysis to action — delivering tools and insights that became central to how teams operate.",
      skills: [
        "Data Analysis",
        "Dashboarding",
        "Pricing Analysis",
        "Problem Solving",
        "Stakeholder Communication"
      ],
      takeaway:
        "Built the tools teams rely on and led the projects that made them better. Frequent collaboration with diverse teams functionally, and locationally."
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
        "From sentiment modeling to chatbot strategy - connected the voice of the member to decisions that defined the digital product direction."
    },
    {
      role: "Go-To-Market Strategy Consultant",
      company: "Kannavie",
      logo: "",
      period: "September 2021 - December 2021",
      description:
        "In this early-career role, I developed a full go-to-market strategy for a client from the ground up - spanning market research, competitive analysis, brand positioning, outreach, and survey design. By synthesizing internal data with external market intelligence, I delivered recommendations that directly supported the client's soft launch and helped secure capital investment. More than the deliverables, this role shaped how I think about strategy: that the best analysis means nothing without clear communication and tight alignment between insight and execution.",
      skills: [
        "Client Management",
        "Marketing Strategy",
        "Team Work",
        "Business Development"
      ],
      takeaway:
        "Built a go-to-market strategy that contributed to a successful soft launch and capital investment — grounded in research, competitive analysis, and a clear strategic narrative."
    },
    {
      role: "Management Executive",
      company: "Aeon Communication",
      logo: "/aeon_logo.jpg",
      period: "September 2018 - July 2021",
      description:
        "In this role, I operated at the intersection of the management, vendors, developers, clients, and high-profile external partners including government officials, Google India, and Intel US. I led marketing initiatives and major exhibition participation, managed end-to-end client onboarding, and coordinated cross-functional teams to launch new services and streamline operations. The scope demanded equal parts relationship management and execution discipline, and the results showed: faster delivery cycles, stronger client satisfaction, and a seat at the table in strategic negotiations with some of the biggest names in tech. This role built my foundation in understanding people, communication, and the importance of aligning strategy with execution.",
      skills: [
        "Client Management",
        "Marketing Strategy",
        "Business Development",
        "Leadership"
      ],
      takeaway:
        "Working through the startup's rise and fall gave me something no classroom could — a front-row seat to the realities of leadership, strategy, and what it truly takes to build something that lasts."
    },
    {
      role: "Global Network Operations Center Engineer",
      company: "Reliance Globalcom Ltd.",
      logo: "/reliance.png",
      period: "January 2017 - June 2017",
      description:
        "This internship dropped me into one of India's largest telecom infrastructures — rotating across Network Support, Transmission, Subsea, IP, and Cloud teams at Reliance. I configured Cisco and Juniper routers, worked with protocols like MPLS, VPN, and P2P, and contributed to projects spanning internet data centers and cable landing stations. Coming from a Computer Science background, networking was new territory — and I embraced it through self-study, team collaboration, and hands-on exposure to technologies I'd never encountered before. The highlight was visiting Reliance's Internet Data Center and Cable Landing Station firsthand — seeing at scale how the internet physically works.",
      skills: [
        "Computer Networking",
        "Transmission Protocols",
        "Cloud Connectivity",
        "Cisco & Juniper"
      ],
      takeaway:
        "Hands-on across Reliance's telecom stack — from router configuration to subsea cable stations — and proof that a steep learning curve is just an opportunity in disguise."
    }
  ];

  const recommendations = [
    {
      name: "Project Mentor",
      title: "Organization",
      company: "sayhii.io",
      preview: "Dr. Handley was my mentor when I was developing strategic recommendations for sayhii.io.",
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
      preview: "Mr.Ravi was my manager and the Chief Technology Officer at Aeon.",
      link: "/LOR_Aeon.pdf"
    },
    {
      name: "Human Resource Partner",
      title: "Organization",
      company: "Aeon",
      preview: "Mr.Rajesh was the Senior HR Manager overseeing hiring, talent development, and annual performance evaluations.",
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
          Business Analytics
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