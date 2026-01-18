import { ChevronDown } from "lucide-react";

export default function Hero() {
  const scrollToProjects = () => {
    const element = document.getElementById("projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-white pt-20 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto w-full space-y-8 animate-fade-in">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left side - Text */}
          <div className="space-y-6">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-semibold tracking-tight text-gray-950 leading-tight">
              Benhur<br />
              Santhosh
            </h1>

            {/* Sub-headline */}
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              Final year Computer Science student specializing in <span className="font-semibold text-blue-600">Cybersecurity</span>, Penetration Testing, and Ethical Hacking.
            </p>

            {/* CTA Button */}
            <div>
              <button
                onClick={scrollToProjects}
                className="bg-blue-600 text-white hover:bg-blue-700 px-6 sm:px-8 py-3 rounded-lg transition-all duration-300 font-sans font-semibold text-base"
              >
                View My Work
              </button>
            </div>
          </div>

          {/* Right side - Photo */}
          <div className="flex justify-center">
            <div className="relative">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2Fbc603bacd4e645ed8ab163ef56e09eb6%2F2306b22abf6b4b32a323d34fcb6b0dc6?format=webp&width=800"
                alt="Benhur Santhosh"
                className="w-80 h-80 rounded-2xl object-cover shadow-lg"
              />
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="flex justify-center mt-12 animate-bounce">
          <ChevronDown className="w-6 h-6 text-blue-600" />
        </div>
      </div>
    </section>
  );
}
