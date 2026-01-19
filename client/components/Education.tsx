export default function Education() {
  const educationItems = [
    {
      id: "college",
      institution: "Vimal Jyothi Engineering College",
      location: "Chemperi, Kerala",
      degree: "B.Tech in Computer Science Engineering",
      period: "2022 – 2026",
      details: "CGPA: 7.99/10.0",
    },
    {
      id: "senior",
      institution: "Sanjos Metropolitan School",
      location: "Thalassery, Kerala",
      degree: "Senior Secondary (CBSE)",
      period: "2020 – 2022",
      details: "XII: 78.2%",
    },
    {
      id: "secondary",
      institution: "Sanjos Metropolitan School",
      location: "Thalassery, Kerala",
      degree: "Secondary (CBSE)",
      period: "2008 – 2020",
      details: "X: 78.6%",
    },
  ];

  return (
    <section id="education" className="bg-gradient-to-b from-blue-900 to-slate-900 py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <h2 className="text-4xl sm:text-5xl md:text-5xl font-bold tracking-tight mb-4 bg-gradient-to-r from-emerald-300 to-amber-300 bg-clip-text text-transparent">
          Education
        </h2>
        <p className="text-gray-400 font-sans text-base mb-16">
          Academic journey and achievements.
        </p>

        {/* Education Timeline */}
        <div className="space-y-6">
          {educationItems.map((item) => (
            <div
              key={item.id}
              className="group bg-gradient-to-br from-slate-800/50 to-blue-900/50 backdrop-blur-md p-8 sm:p-10 rounded-2xl border border-emerald-500/30 hover:border-emerald-500/60 hover:shadow-xl hover:shadow-emerald-500/20 transition-all duration-300"
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                <div className="flex-grow">
                  <h3 className="text-2xl sm:text-2xl font-bold text-white group-hover:text-emerald-200 transition-colors">
                    {item.degree}
                  </h3>
                  <p className="text-emerald-300 font-sans font-semibold text-base mt-2">
                    {item.institution}
                  </p>
                  <p className="text-gray-400 font-sans text-sm mt-1">
                    {item.location}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-amber-300 font-sans font-semibold text-base whitespace-nowrap">
                    {item.period}
                  </p>
                </div>
              </div>
              <p className="text-gray-300 font-sans text-base">{item.details}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
