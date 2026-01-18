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
    <section id="skills" className="bg-slate-900 py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-4xl sm:text-5xl md:text-5xl font-serif font-bold tracking-tight mb-4 bg-gradient-to-r from-purple-300 to-cyan-300 bg-clip-text text-transparent">
          Technical Skills
        </h2>
        <p className="text-gray-400 font-sans text-base mb-16 max-w-2xl">
          A comprehensive toolkit for cybersecurity and software development.
        </p>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((skillGroup, index) => (
            <div
              key={index}
              className="group relative p-8 sm:p-10 rounded-xl border border-purple-500/30 bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm hover:border-purple-500/60 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/10"
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-cyan-600/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* Category Title */}
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white mb-8 relative z-10">
                {skillGroup.category}
              </h3>

              {/* Skills List */}
              <ul className="space-y-4 relative z-10">
                {skillGroup.skills.map((skill, skillIndex) => (
                  <li
                    key={skillIndex}
                    className="text-gray-300 font-sans text-base flex items-center gap-3 group/item"
                  >
                    <span className="text-purple-400 text-lg font-bold group-hover/item:text-cyan-400 transition-colors">✓</span>
                    <span className="group-hover/item:text-purple-300 transition-colors">{skill}</span>
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
