export default function Projects() {
  const projects = [
    {
      id: "1",
      title: "Malayalam Sign Language Learning Platform",
      technologies: "Python, TensorFlow, OpenCV",
      description:
        "Developed the world's first dedicated learning platform for Malayalam Sign Language to bridge the communication gap for the speech-impaired community.",
      highlights: [
        "Global Innovation: Pioneering solution for regional sign language education",
        "Computer Vision: Real-time recognition system translating gestures to text and speech",
        "Data Curation: Created custom dataset addressing scarcity of vernacular sign language resources",
        "Inclusive Communication: Two-way translation enabling seamless interaction",
      ],
      image:
        "https://cdn.builder.io/api/v1/image/assets%2Fbc603bacd4e645ed8ab163ef56e09eb6%2Fde242b7898d54c0081e9bbc3b3674935?format=webp&width=800",
    },
    {
      id: "2",
      title: "Legal Firm Website",
      technologies: "HTML, CSS, JavaScript",
      description:
        "Designed and deployed a functional website for a legal firm as part of a collegiate team project.",
      highlights: [
        "Client Delivery: Professional website launch ahead of schedule",
        "Team Collaboration: Managed UI design and hosting process",
        "Responsive Design: Ensured compatibility across all devices",
        "Performance Optimized: Fast-loading and SEO-friendly architecture",
      ],
      image:
        "https://cdn.builder.io/api/v1/image/assets%2Fbc603bacd4e645ed8ab163ef56e09eb6%2F26ca49c8ad984c0f9e69ef53c7e8c490?format=webp&width=800",
    },
  ];

  return (
    <section
      id="projects"
      className="py-24 px-4 sm:px-6 lg:px-8 relative"
      style={{
        background: "linear-gradient(180deg, #1e293b 0%, #0f172a 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-4xl sm:text-5xl md:text-5xl font-bold tracking-tight mb-4 text-white">
          Featured <span className="text-yellow-300">Projects</span>
        </h2>
        <p className="text-slate-400 font-sans text-base mb-16 max-w-2xl">
          Innovative solutions demonstrating expertise in computer vision, web
          development, and cybersecurity.
        </p>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative overflow-hidden rounded-2xl transition-all duration-500 hover:-translate-y-2 border"
              style={{
                borderColor: "rgba(245, 158, 11, 0.3)",
                background: "rgba(30, 41, 59, 0.5)",
                boxShadow: "0 0 0 rgba(245, 158, 11, 0)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow =
                  "0 0 30px rgba(245, 158, 11, 0.3)";
                e.currentTarget.style.borderColor = "rgba(245, 158, 11, 0.6)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "0 0 0 rgba(245, 158, 11, 0)";
                e.currentTarget.style.borderColor = "rgba(245, 158, 11, 0.3)";
              }}
            >
              {/* Project Image */}
              <div
                className="relative h-64 sm:h-80 overflow-hidden"
                style={{
                  background: "linear-gradient(135deg, #1e293b, #0f172a)",
                }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div
                  className="absolute inset-0 group-hover:opacity-40 transition-opacity"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(15, 23, 42, 0.9), transparent)",
                    opacity: "0.6",
                  }}
                ></div>
              </div>

              {/* Project Content */}
              <div className="p-8 sm:p-10 relative z-10">
                {/* Technologies */}
                <p className="text-yellow-300 font-sans font-semibold text-sm mb-3 tracking-wide uppercase">
                  {project.technologies}
                </p>

                {/* Title */}
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 group-hover:text-yellow-200 transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-slate-300 font-sans text-base leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Highlights */}
                <ul className="space-y-3">
                  {project.highlights.map((highlight, index) => (
                    <li
                      key={index}
                      className="text-slate-300 font-sans text-sm flex items-start gap-3"
                    >
                      <span className="text-yellow-400 mt-1 flex-shrink-0 font-bold">
                        ✓
                      </span>
                      <span>{highlight}</span>
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
