import { ArrowRight } from "lucide-react";

interface CareerProgram {
  id: string;
  title: string;
  price: string;
  description: string;
  highlights: string[];
}

const programs: CareerProgram[] = [
  {
    id: "internship",
    title: "Virtual Internship Program",
    price: "₹399",
    description:
      "Join our exclusive virtual internship program and gain hands-on experience working on real-world projects with our team of expert designers and developers.",
    highlights: [
      "Learn bespoke design principles",
      "Work on real client projects",
      "Mentorship from industry experts",
      "Certificate of completion",
      "Potential for full-time opportunities",
    ],
  },
];

export default function Careers() {
  return (
    <section id="careers" className="bg-gray-950 py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-4xl sm:text-5xl md:text-5xl font-serif font-semibold tracking-tight text-white mb-4">
          Join Our Team.
        </h2>
        <p className="text-gray-400 font-sans text-base mb-16 max-w-2xl">
          Build your career in luxury digital design and development.
        </p>

        {/* Careers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-1 gap-8 lg:gap-12 max-w-2xl">
          {programs.map((program) => (
            <div
              key={program.id}
              className="group border border-gray-800 hover:border-yellow-500/50 bg-gray-900/50 hover:bg-gray-900 p-8 sm:p-12 rounded-lg transition-all duration-300 flex flex-col"
            >
              {/* Price Tag */}
              <div className="mb-6">
                <p className="text-yellow-500 font-sans font-semibold text-lg">
                  {program.price}
                </p>
              </div>

              {/* Title */}
              <h3 className="text-2xl sm:text-3xl font-serif font-semibold text-white mb-4">
                {program.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 font-sans text-base leading-relaxed mb-8">
                {program.description}
              </p>

              {/* Highlights */}
              <ul className="space-y-3 mb-12 flex-grow">
                {program.highlights.map((highlight, index) => (
                  <li
                    key={index}
                    className="text-gray-300 font-sans text-sm flex items-start gap-3"
                  >
                    <span className="text-yellow-500 mt-1.5 flex-shrink-0">•</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <button
                onClick={() => {
                  const contactSection = document.getElementById('contact');
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="w-full border border-yellow-500 text-yellow-500 hover:bg-yellow-500/10 py-3 sm:py-4 rounded-sm transition-all duration-300 font-sans font-semibold text-base flex items-center justify-center gap-2 group/btn"
              >
                Inquire
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
