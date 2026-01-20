export default function Skills() {
  const skillCategories = [
    {
      category: "Languages",
      skills: ["Python", "C", "SQL", "JavaScript", "PHP"],
    },
    {
      category: "Web Technologies",
      skills: ["HTML5", "CSS3"],
    },
    {
      category: "Security & Tools",
      skills: ["Git", "GitHub", "Linux", "Wireshark", "VS Code"],
    },
  ];

  return (
    <section
      id="skills"
      className="py-24 px-4 sm:px-6 lg:px-8 relative"
      style={{
        background: "linear-gradient(180deg, #0f172a 0%, #1e293b 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-4xl sm:text-5xl md:text-5xl font-bold tracking-tight mb-4 text-white">
          Technical <span className="text-yellow-300">Skills</span>
        </h2>
        <p className="text-slate-400 font-sans text-base mb-16 max-w-2xl">
          A comprehensive toolkit for cybersecurity and software development.
        </p>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((skillGroup, index) => (
            <div
              key={index}
              className="group relative p-8 sm:p-10 rounded-2xl border transition-all duration-300"
              style={{
                borderColor: "rgba(245, 158, 11, 0.3)",
                background: "rgba(30, 41, 59, 0.5)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(245, 158, 11, 0.6)";
                e.currentTarget.style.boxShadow =
                  "0 0 30px rgba(245, 158, 11, 0.2)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(245, 158, 11, 0.3)";
                e.currentTarget.style.boxShadow = "0 0 0";
              }}
            >
              {/* Category Title */}
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-8 relative z-10 group-hover:text-yellow-200 transition-colors">
                {skillGroup.category}
              </h3>

              {/* Skills List */}
              <ul className="space-y-4 relative z-10">
                {skillGroup.skills.map((skill, skillIndex) => (
                  <li
                    key={skillIndex}
                    className="text-slate-300 font-sans text-base flex items-center gap-3 group/item transition-colors"
                  >
                    <span className="text-yellow-400 text-lg font-bold group-hover/item:text-yellow-300 transition-colors">
                      ✓
                    </span>
                    <span className="group-hover/item:text-yellow-200 transition-colors">
                      {skill}
                    </span>
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
