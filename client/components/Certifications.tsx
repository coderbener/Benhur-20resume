export default function Certifications() {
  const certifications = [
    {
      id: "cisco",
      title: "Introduction to Cybersecurity",
      issuer: "Cisco",
      description: "Foundational certification in cybersecurity principles and practices.",
    },
    {
      id: "ielts",
      title: "IELTS Academic",
      issuer: "IELTS",
      description: "Band Score: 7.5 - Demonstrates advanced English language proficiency.",
    },
  ];

  return (
    <section id="certifications" className="bg-gradient-to-b from-slate-950 to-slate-900 py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <h2 className="text-4xl sm:text-5xl md:text-5xl font-serif font-bold tracking-tight mb-4 bg-gradient-to-r from-purple-300 to-cyan-300 bg-clip-text text-transparent">
          Certifications
        </h2>
        <p className="text-gray-400 font-sans text-base mb-16">
          Professional credentials and recognized achievements.
        </p>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="group relative p-8 sm:p-10 rounded-lg border border-purple-500/30 bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm hover:border-purple-500/60 hover:shadow-xl hover:shadow-purple-500/10 hover:-translate-y-1 transition-all duration-300"
            >
              <p className="text-cyan-400 font-sans font-semibold text-base mb-3 tracking-wide">
                {cert.issuer}
              </p>
              <h3 className="text-2xl sm:text-2xl font-serif font-bold text-white mb-4 group-hover:text-purple-300 transition-colors">
                {cert.title}
              </h3>
              <p className="text-gray-300 font-sans text-base">
                {cert.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
