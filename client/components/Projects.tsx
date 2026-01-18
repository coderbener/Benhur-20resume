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
    <section id="projects" className="bg-gray-950 py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-4xl sm:text-5xl md:text-5xl font-serif font-semibold tracking-tight text-white mb-4">
          Featured Projects.
        </h2>
        <p className="text-gray-400 font-sans text-base mb-16 max-w-2xl">
          Innovative solutions demonstrating expertise in computer vision, web development, and cybersecurity.
        </p>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group border border-gray-800 hover:border-yellow-500/50 bg-gray-900/50 hover:bg-gray-900 overflow-hidden rounded-lg transition-all duration-300"
            >
              {/* Project Image */}
              <div className="relative h-64 sm:h-80 overflow-hidden bg-gray-800">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Project Content */}
              <div className="p-8 sm:p-10">
                {/* Technologies */}
                <p className="text-yellow-500 font-sans font-semibold text-sm mb-3">
                  {project.technologies}
                </p>

                {/* Title */}
                <h3 className="text-2xl sm:text-3xl font-serif font-semibold text-white mb-4">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 font-sans text-base leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Highlights */}
                <ul className="space-y-3">
                  {project.highlights.map((highlight, index) => (
                    <li
                      key={index}
                      className="text-gray-300 font-sans text-sm flex items-start gap-3"
                    >
                      <span className="text-yellow-500 mt-1 flex-shrink-0">•</span>
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
