import { ChevronDown } from "lucide-react";

export default function Hero() {
  const scrollToProjects = () => {
    const element = document.getElementById("projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-black pt-20 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-5xl mx-auto w-full space-y-8 animate-fade-in relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left side - Text */}
          <div className="space-y-6">
            <div className="space-y-4">
              <div className="inline-block px-4 py-2 bg-white/10 border border-white/30 rounded-full mb-4">
                <p className="text-gray-300 text-sm font-semibold">
                  Welcome to my portfolio
                </p>
              </div>
              <h1
                className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tighter text-white leading-tight"
                style={{
                  fontFamily: '"Space Grotesk", sans-serif',
                  letterSpacing: "-0.02em",
                }}
              >
                Benhur
                <br />
                Santhosh
              </h1>
            </div>

            {/* Sub-headline */}
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed max-w-lg">
              Final year CS student specializing in{" "}
              <span className="text-purple-300 font-semibold">
                Cybersecurity
              </span>
              ,{" "}
              <span className="text-cyan-300 font-semibold">
                Penetration Testing
              </span>
              , and{" "}
              <span className="text-purple-300 font-semibold">
                Ethical Hacking
              </span>
              .
            </p>

            {/* CTA Buttons */}
            <div className="flex gap-4 pt-4">
              <button
                onClick={scrollToProjects}
                className="group relative px-8 py-4 bg-white text-black font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-white/50"
              >
                <span className="relative z-10">View My Work</span>
              </button>
            </div>
          </div>

          {/* Right side - Photo */}
          <div className="flex justify-center">
            <div className="relative group">
              <div className="absolute -inset-1 bg-white rounded-full blur-2xl opacity-50 group-hover:opacity-75 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2Fbc603bacd4e645ed8ab163ef56e09eb6%2Fba3925f1441e4da8ae9b87b808cd5493?format=webp&width=800"
                alt="Benhur Santhosh"
                className="relative w-80 h-80 rounded-full object-cover shadow-2xl border border-white/30"
              />
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="flex justify-center mt-16 animate-bounce">
          <ChevronDown className="w-6 h-6 text-white" />
        </div>
      </div>
    </section>
  );
}
