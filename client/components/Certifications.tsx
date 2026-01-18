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
    <section id="certifications" className="bg-gray-950 py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <h2 className="text-4xl sm:text-5xl md:text-5xl font-serif font-semibold tracking-tight text-white mb-4">
          Certifications.
        </h2>
        <p className="text-gray-400 font-sans text-base mb-16">
          Professional credentials and recognized achievements.
        </p>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="group border border-gray-800 hover:border-yellow-500/50 bg-gray-900/50 hover:bg-gray-900 p-8 sm:p-10 rounded-lg transition-all duration-300"
            >
              <p className="text-yellow-500 font-sans font-semibold text-base mb-3">
                {cert.issuer}
              </p>
              <h3 className="text-2xl sm:text-2xl font-serif font-semibold text-white mb-4">
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
