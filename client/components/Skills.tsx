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
    <section id="skills" className="bg-gray-950 py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-4xl sm:text-5xl md:text-5xl font-serif font-semibold tracking-tight text-white mb-4">
          Technical Skills.
        </h2>
        <p className="text-gray-400 font-sans text-base mb-16 max-w-2xl">
          A comprehensive toolkit for cybersecurity and software development.
        </p>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {skillCategories.map((skillGroup, index) => (
            <div
              key={index}
              className="group border border-gray-800 hover:border-yellow-500/50 bg-gray-900/50 hover:bg-gray-900 p-8 sm:p-12 rounded-lg transition-all duration-300"
            >
              {/* Category Title */}
              <h3 className="text-2xl sm:text-3xl font-serif font-semibold text-white mb-8">
                {skillGroup.category}
              </h3>

              {/* Skills List */}
              <ul className="space-y-4">
                {skillGroup.skills.map((skill, skillIndex) => (
                  <li
                    key={skillIndex}
                    className="text-gray-300 font-sans text-base flex items-center gap-3"
                  >
                    <span className="text-yellow-500 text-lg">•</span>
                    <span>{skill}</span>
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
