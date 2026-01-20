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
    }, 3200);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-500 ${
        isExiting ? "opacity-0" : "opacity-100"
      }`}
      style={{ background: "linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)" }}
    >
      <style>
        {`
          @keyframes text-reveal {
            0% {
              clip-path: inset(0 100% 0 0);
              letter-spacing: 0.15em;
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

          @keyframes underline-reveal {
            0% {
              width: 0;
              opacity: 0;
              box-shadow: 0 0 0 rgba(245, 158, 11, 0.5);
            }
            100% {
              width: 8rem;
              opacity: 1;
              box-shadow: 0 0 20px rgba(245, 158, 11, 0.6);
            }
          }

          @keyframes glow-in {
            0% {
              opacity: 0;
              text-shadow: 0 0 0 rgba(245, 158, 11, 0);
            }
            50% {
              text-shadow: 0 0 20px rgba(245, 158, 11, 0.4);
            }
            100% {
              opacity: 1;
              text-shadow: 0 0 30px rgba(245, 158, 11, 0.3);
            }
          }

          .text-reveal {
            animation: text-reveal 2.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
          }

          .underline-reveal {
            animation: underline-reveal 2.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards 0.4s both;
          }

          .glow-in {
            animation: glow-in 3s ease-out forwards;
          }

          .security-dot {
            display: inline-block;
            width: 8px;
            height: 8px;
            background: #f59e0b;
            border-radius: 50%;
            margin: 0 4px;
            animation: terminal-cursor 1s infinite;
          }
        `}
      </style>

      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 opacity-5 rounded-full blur-3xl"
             style={{ background: "radial-gradient(circle, #f59e0b 0%, transparent 70%)" }}></div>
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 opacity-5 rounded-full blur-3xl"
             style={{ background: "radial-gradient(circle, #f59e0b 0%, transparent 70%)" }}></div>
      </div>

      <div className="relative flex flex-col items-center justify-center z-10">
        <h1
          className={`text-7xl sm:text-8xl font-bold tracking-tighter text-yellow-300 ${
            isExiting
              ? "scale-90 opacity-0 transition-all duration-1000"
              : "scale-100 text-reveal"
          }`}
          style={{ fontFamily: '"Space Grotesk", sans-serif', letterSpacing: '-0.02em' }}
        >
          Benhur
        </h1>
        <div
          className={`mt-8 h-2 bg-yellow-500 rounded-full ${
            isExiting ? "w-0 opacity-0 transition-all duration-1000" : "underline-reveal"
          }`}
          style={{ background: "linear-gradient(90deg, #f59e0b, #fbbf24)" }}
        ></div>

        {/* Security indicator dots */}
        <div className={`mt-6 flex gap-2 glow-in ${isExiting ? "opacity-0" : ""}`}>
          <div className="security-dot"></div>
          <div className="security-dot" style={{ animationDelay: "0.2s" }}></div>
          <div className="security-dot" style={{ animationDelay: "0.4s" }}></div>
        </div>
      </div>
    </div>
  );
}
