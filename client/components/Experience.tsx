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
    <section id="experience" className="bg-white py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <h2 className="text-4xl sm:text-5xl md:text-5xl font-serif font-semibold tracking-tight text-gray-950 mb-4">
          Work Experience
        </h2>
        <p className="text-gray-600 font-sans text-base mb-16">
          Professional internships and hands-on learning.
        </p>

        {/* Experience Timeline */}
        <div className="space-y-8">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className="border-l-4 border-blue-600 pl-8 py-4"
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                <div className="flex-grow">
                  <h3 className="text-2xl sm:text-2xl font-serif font-semibold text-gray-950">
                    {exp.position}
                  </h3>
                  <p className="text-blue-600 font-sans font-semibold text-base mt-2">
                    {exp.company}
                  </p>
                  <p className="text-gray-600 font-sans text-sm mt-1">
                    {exp.location}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-gray-600 font-sans font-semibold text-base whitespace-nowrap">
                    {exp.period}
                  </p>
                </div>
              </div>

              {/* Achievements */}
              <ul className="space-y-3 mt-6">
                {exp.achievements.map((achievement, index) => (
                  <li
                    key={index}
                    className="text-gray-700 font-sans text-sm flex gap-3 items-start"
                  >
                    <span className="text-blue-600 mt-1.5 flex-shrink-0 font-bold">→</span>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
