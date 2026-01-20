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
    <section id="education" className="py-24 px-4 sm:px-6 lg:px-8 relative"
      style={{ background: "linear-gradient(180deg, #0f172a 0%, #1e293b 100%)" }}>
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <h2 className="text-4xl sm:text-5xl md:text-5xl font-bold tracking-tight mb-4 text-white">
          <span className="text-yellow-300">Education</span>
        </h2>
        <p className="text-slate-400 font-sans text-base mb-16">
          Academic journey and achievements.
        </p>

        {/* Education Timeline */}
        <div className="space-y-6">
          {educationItems.map((item) => (
            <div
              key={item.id}
              className="group p-8 sm:p-10 rounded-2xl border transition-all duration-300 hover:-translate-y-1"
              style={{ borderColor: "rgba(245, 158, 11, 0.3)", background: "rgba(30, 41, 59, 0.5)" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(245, 158, 11, 0.6)";
                e.currentTarget.style.boxShadow = "0 0 30px rgba(245, 158, 11, 0.2)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(245, 158, 11, 0.3)";
                e.currentTarget.style.boxShadow = "0 0 0";
              }}
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                <div className="flex-grow">
                  <h3 className="text-2xl sm:text-2xl font-bold text-white group-hover:text-yellow-200 transition-colors">
                    {item.degree}
                  </h3>
                  <p className="text-yellow-300 font-sans font-semibold text-base mt-2">
                    {item.institution}
                  </p>
                  <p className="text-slate-400 font-sans text-sm mt-1">
                    {item.location}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-yellow-300 font-sans font-semibold text-base whitespace-nowrap">
                    {item.period}
                  </p>
                </div>
              </div>
              <p className="text-slate-300 font-sans text-base">{item.details}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
