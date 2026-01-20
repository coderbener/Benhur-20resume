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
           style={{ background: "radial-gradient(circle, #f59e0b 0%, transparent 70%)" }}></div>

      <div className="max-w-5xl mx-auto w-full space-y-8 animate-fade-in relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left side - Text */}
          <div className="space-y-6">
            <div className="space-y-4">
              <div className="inline-block px-4 py-2 border border-yellow-500/60 rounded-full mb-4 backdrop-blur-sm transition-all hover:border-yellow-400"
                   style={{ background: "rgba(245, 158, 11, 0.08)" }}>
                <p className="text-yellow-200 text-sm font-semibold">Welcome to my portfolio</p>
              </div>
              <h1
                className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tighter leading-tight text-white"
                style={{ fontFamily: '"Space Grotesk", sans-serif', letterSpacing: '-0.02em' }}
              >
                Benhur<br />
                <span className="text-yellow-300">Santhosh</span>
              </h1>
            </div>

            {/* Sub-headline */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-lg">
              Final year CS student specializing in <span className="text-yellow-300 font-semibold">Cybersecurity</span>, <span className="text-yellow-300 font-semibold">Penetration Testing</span>, and <span className="text-yellow-300 font-semibold">Ethical Hacking</span>.
            </p>

            {/* CTA Buttons */}
            <div className="flex gap-4 pt-4">
              <button
                onClick={scrollToProjects}
                className="group relative px-8 py-4 bg-yellow-500 hover:bg-yellow-400 text-slate-900 font-semibold rounded-lg transition-all duration-300 hover:shadow-2xl hover:scale-105"
                style={{ boxShadow: "0 0 20px rgba(245, 158, 11, 0.3)" }}
              >
                <span className="relative z-10">View My Work</span>
              </button>
            </div>
          </div>

          {/* Right side - Photo */}
          <div className="flex justify-center">
            <div className="relative group">
              <div className="absolute -inset-1 rounded-full blur-2xl opacity-40 group-hover:opacity-60 transition duration-500 animate-pulse-ring"
                   style={{ background: "radial-gradient(circle, #f59e0b, #f59e0b)" }}></div>
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2Fbc603bacd4e645ed8ab163ef56e09eb6%2Fba3925f1441e4da8ae9b87b808cd5493?format=webp&width=800"
                alt="Benhur Santhosh"
                className="relative w-80 h-80 rounded-full object-cover shadow-2xl border-2 transition-all duration-300 hover:border-yellow-400"
                style={{ borderColor: "rgba(245, 158, 11, 0.6)", boxShadow: "0 0 30px rgba(245, 158, 11, 0.2)" }}
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
