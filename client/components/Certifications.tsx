export default function Certifications() {
  const certifications = [
    {
      id: "cisco",
      title: "Introduction to Cybersecurity",
      issuer: "Cisco",
      description:
        "Foundational certification in cybersecurity principles and practices.",
    },
    {
      id: "ielts",
      title: "IELTS Academic",
      issuer: "IELTS",
      description:
        "Band Score: 7.5 - Demonstrates advanced English language proficiency.",
    },
  ];

  return (
    <section
      id="certifications"
      className="py-24 px-4 sm:px-6 lg:px-8 relative"
      style={{
        background: "linear-gradient(180deg, #0f172a 0%, #1e293b 100%)",
      }}
    >
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <h2 className="text-4xl sm:text-5xl md:text-5xl font-bold tracking-tight mb-4 text-white">
          <span className="text-yellow-300">Certifications</span>
        </h2>
        <p className="text-slate-400 font-sans text-base mb-16">
          Professional credentials and recognized achievements.
        </p>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="group relative p-8 sm:p-10 rounded-lg border transition-all duration-300 hover:-translate-y-1"
              style={{
                background: "rgba(30, 41, 59, 0.5)",
                borderColor: "rgba(245, 158, 11, 0.3)",
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
              <p className="text-yellow-300 font-sans font-semibold text-base mb-3 tracking-wide">
                {cert.issuer}
              </p>
              <h3 className="text-2xl sm:text-2xl font-bold text-white mb-4 group-hover:text-yellow-200 transition-colors">
                {cert.title}
              </h3>
              <p className="text-slate-300 font-sans text-base">
                {cert.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
