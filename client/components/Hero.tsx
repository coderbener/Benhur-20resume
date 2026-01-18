import { ChevronDown } from "lucide-react";

export default function Hero() {
  const scrollToProjects = () => {
    const element = document.getElementById("projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gray-950 pt-20 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto text-center space-y-8 animate-fade-in">
        {/* Main Headline */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-serif font-semibold tracking-tight text-white leading-tight">
          Benhur<br />
          Santhosh.
        </h1>

        {/* Sub-headline */}
        <p className="text-lg sm:text-xl md:text-2xl font-sans text-gray-300 max-w-3xl mx-auto leading-relaxed">
          Final year Computer Science student specializing in Cybersecurity, Penetration Testing, and Ethical Hacking.
        </p>

        {/* CTA Button */}
        <div className="pt-8">
          <button
            onClick={scrollToProjects}
            className="bg-yellow-500 text-gray-950 hover:bg-yellow-400 px-8 sm:px-10 py-3 sm:py-4 rounded-sm transition-all duration-300 font-sans font-semibold text-base sm:text-lg"
          >
            View My Projects
          </button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-yellow-500" />
        </div>
      </div>
    </section>
  );
}
