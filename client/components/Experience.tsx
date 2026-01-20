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
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 relative"
      style={{ background: "linear-gradient(180deg, #1e293b 0%, #0f172a 100%)" }}>
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <h2 className="text-4xl sm:text-5xl md:text-5xl font-bold tracking-tight mb-4 text-white">
          Work <span className="text-yellow-300">Experience</span>
        </h2>
        <p className="text-slate-400 font-sans text-base mb-16">
          Professional internships and hands-on learning.
        </p>

        {/* Experience Timeline */}
        <div className="space-y-8 relative">
          {/* Timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-1" style={{ background: "linear-gradient(180deg, rgba(245, 158, 11, 0.6), rgba(245, 158, 11, 0.2))" }}></div>

          {experiences.map((exp, index) => (
            <div
              key={exp.id}
              className="relative pl-20"
            >
              {/* Timeline dot */}
              <div className="absolute -left-4 top-2 w-6 h-6 bg-yellow-500 rounded-full border-4 transition-all hover:shadow-lg hover:scale-110"
                   style={{ borderColor: "#1e293b", boxShadow: "0 0 12px rgba(245, 158, 11, 0.3)" }}></div>

              {/* Content */}
              <div className="rounded-lg p-8 transition-all duration-300 hover:-translate-y-1"
                   style={{ borderColor: "rgba(245, 158, 11, 0.3)", background: "rgba(30, 41, 59, 0.5)", border: "1px solid rgba(245, 158, 11, 0.3)" }}
                   onMouseEnter={(e) => {
                     e.currentTarget.style.borderColor = "rgba(245, 158, 11, 0.6)";
                     e.currentTarget.style.boxShadow = "0 0 30px rgba(245, 158, 11, 0.2)";
                   }}
                   onMouseLeave={(e) => {
                     e.currentTarget.style.borderColor = "rgba(245, 158, 11, 0.3)";
                     e.currentTarget.style.boxShadow = "0 0 0";
                   }}>
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                  <div className="flex-grow">
                    <h3 className="text-2xl sm:text-2xl font-bold text-white">
                      {exp.position}
                    </h3>
                    <p className="text-yellow-300 font-sans font-semibold text-base mt-2">
                      {exp.company}
                    </p>
                    <p className="text-slate-400 font-sans text-sm mt-1">
                      {exp.location}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-yellow-300 font-sans font-semibold text-base whitespace-nowrap">
                      {exp.period}
                    </p>
                  </div>
                </div>

                {/* Achievements */}
                <ul className="space-y-3 mt-6">
                  {exp.achievements.map((achievement, index) => (
                    <li
                      key={index}
                      className="text-slate-300 font-sans text-sm flex gap-3 items-start"
                    >
                      <span className="text-yellow-400 mt-1.5 flex-shrink-0 font-bold">→</span>
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
