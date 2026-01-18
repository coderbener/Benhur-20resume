import { useEffect, useState } from "react";

interface SplashScreenProps {
  onComplete: () => void;
}

export default function SplashScreen({ onComplete }: SplashScreenProps) {
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsExiting(true);
      setTimeout(onComplete, 500);
    }, 2800);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 z-50 flex items-center justify-center transition-opacity duration-500 ${
        isExiting ? "opacity-0" : "opacity-100"
      }`}
    >
      <style>
        {`
          @keyframes text-reveal {
            0% {
              clip-path: inset(0 100% 0 0);
              letter-spacing: 0.1em;
              opacity: 0;
            }
            40% {
              opacity: 1;
            }
            100% {
              clip-path: inset(0 0 0 0);
              letter-spacing: -0.02em;
              opacity: 1;
            }
          }

          .text-reveal {
            animation: text-reveal 2.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
          }
        `}
      </style>
      <div className="flex flex-col items-center justify-center">
        <h1
          className={`text-7xl sm:text-8xl font-bold tracking-tighter bg-gradient-to-r from-purple-300 via-purple-200 to-cyan-300 bg-clip-text text-transparent ${
            isExiting
              ? "scale-90 opacity-0 transition-all duration-1000"
              : "scale-100 text-reveal"
          }`}
          style={{ fontFamily: '"Space Grotesk", sans-serif', letterSpacing: '-0.02em' }}
        >
          Benhur
        </h1>
        <div
          className={`mt-8 h-1 bg-gradient-to-r from-purple-500/0 via-cyan-400 to-purple-500/0 transition-all duration-1000 ${
            isExiting ? "w-0 opacity-0" : "w-24 opacity-100 animate-pulse"
          }`}
        ></div>
      </div>
    </div>
  );
}
