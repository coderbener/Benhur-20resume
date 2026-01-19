export default function Experience() {
  const experiences = [
    {
      id: "cio",
      company: "CIO Association of India",
      location: "Remote",
      position: "Research and Development Intern",
      period: "Aug 2025 – Present",
      achievements: [
        "Process Automation: Developed Python scripts to parse bulk Excel datasets and convert them into VCF format, automating the synchronization of hundreds of stakeholder contacts and eliminating manual data entry.",
        "Cybersecurity Content: Spearheaded content initiatives for Cybersecurity Awareness Month 2025, producing an exclusive interview with ex-CTO Satyendra K. Dwivedi on the DPDP Act and digital hygiene.",
        "Digital Engagement: Managed the organization's official LinkedIn presence, conducting research to curate strategic insights on emerging industry trends and foster community awareness.",
      ],
    },
    {
      id: "intrainz",
      company: "Intrainz",
      location: "Remote",
      position: "Web Development Intern",
      period: "Mar 2023 – May 2023",
      achievements: [
        "Frontend Development: Gained practical expertise in HTML5, CSS3, and JavaScript through hands-on project implementation.",
        "Project Delivery: Built a fully functional interactive Calculator application, demonstrating proficiency in DOM manipulation and UI logic.",
        "Optimization: Collaborated on responsive design strategies to ensure application compatibility across devices.",
      ],
    },
  ];

  return (
    <section id="experience" className="bg-black py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <h2 className="text-4xl sm:text-5xl md:text-5xl font-bold tracking-tight mb-4 text-white">
          Work Experience
        </h2>
        <p className="text-gray-400 font-sans text-base mb-16">
          Professional internships and hands-on learning.
        </p>

        {/* Experience Timeline */}
        <div className="space-y-8 relative">
          {/* Timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-500 to-cyan-500"></div>

          {experiences.map((exp, index) => (
            <div
              key={exp.id}
              className="relative pl-20"
            >
              {/* Timeline dot */}
              <div className="absolute -left-4 top-2 w-6 h-6 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full border-4 border-slate-900"></div>

              {/* Content */}
              <div className="bg-slate-800/50 backdrop-blur-sm border border-purple-500/30 rounded-lg p-8 hover:border-purple-500/60 hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-300">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                  <div className="flex-grow">
                    <h3 className="text-2xl sm:text-2xl font-serif font-bold text-white">
                      {exp.position}
                    </h3>
                    <p className="text-purple-400 font-sans font-semibold text-base mt-2">
                      {exp.company}
                    </p>
                    <p className="text-gray-400 font-sans text-sm mt-1">
                      {exp.location}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-cyan-400 font-sans font-semibold text-base whitespace-nowrap">
                      {exp.period}
                    </p>
                  </div>
                </div>

                {/* Achievements */}
                <ul className="space-y-3 mt-6">
                  {exp.achievements.map((achievement, index) => (
                    <li
                      key={index}
                      className="text-gray-300 font-sans text-sm flex gap-3 items-start"
                    >
                      <span className="text-cyan-400 mt-1.5 flex-shrink-0 font-bold">→</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
