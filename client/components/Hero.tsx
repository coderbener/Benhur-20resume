import { ChevronDown } from "lucide-react";

export default function Hero() {
  const scrollToProjects = () => {
    const element = document.getElementById("projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center pt-20 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      style={{ background: "linear-gradient(180deg, #0f172a 0%, #1e293b 100%)" }}>

      {/* Subtle background glow */}
      <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 w-96 h-96 opacity-[0.08] rounded-full blur-3xl"
           style={{ background: "radial-gradient(circle, #ef4444 0%, transparent 70%)" }}></div>

      <div className="max-w-5xl mx-auto w-full space-y-8 animate-fade-in relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left side - Text */}
          <div className="space-y-6">
            <div className="space-y-4">
              <div className="inline-block px-4 py-2 border border-red-500/60 rounded-full mb-4 backdrop-blur-sm transition-all hover:border-red-400"
                   style={{ background: "rgba(239, 68, 68, 0.08)" }}>
                <p className="text-red-200 text-sm font-semibold">Welcome to my portfolio</p>
              </div>
              <h1
                className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tighter leading-tight text-white"
                style={{ fontFamily: '"Space Grotesk", sans-serif', letterSpacing: '-0.02em' }}
              >
                Benhur<br />
                <span className="text-red-400">Santhosh</span>
              </h1>
            </div>

            {/* Sub-headline */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-lg">
              Final year CS student specializing in <span className="text-red-400 font-semibold">Cybersecurity</span>, <span className="text-red-400 font-semibold">Penetration Testing</span>, and <span className="text-red-400 font-semibold">Ethical Hacking</span>.
            </p>

            {/* CTA Buttons */}
            <div className="flex gap-4 pt-4">
              <button
                onClick={scrollToProjects}
                className="group relative px-8 py-4 bg-red-500 hover:bg-red-400 text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-2xl hover:scale-105"
                style={{ boxShadow: "0 0 20px rgba(239, 68, 68, 0.3)" }}
              >
                <span className="relative z-10">View My Work</span>
              </button>
            </div>
          </div>

          {/* Right side - Photo */}
          <div className="flex justify-center">
            <div className="relative group">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2Fbc603bacd4e645ed8ab163ef56e09eb6%2Fba3925f1441e4da8ae9b87b808cd5493?format=webp&width=800"
                alt="Benhur Santhosh"
                className="relative w-80 h-80 rounded-full object-cover shadow-2xl border-2 transition-all duration-300 hover:border-red-300"
                style={{ borderColor: "rgba(239, 68, 68, 0.5)", boxShadow: "0 0 25px rgba(239, 68, 68, 0.2)" }}
              />
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="flex justify-center mt-16 animate-bounce">
          <ChevronDown className="w-6 h-6 text-yellow-400 hover:text-yellow-300 transition-colors" />
        </div>
      </div>
    </section>
  );
}
