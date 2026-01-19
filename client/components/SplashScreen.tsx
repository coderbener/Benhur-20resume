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
      className={`fixed inset-0 bg-black z-50 flex items-center justify-center transition-opacity duration-500 ${
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

          @keyframes underline-reveal {
            0% {
              width: 0;
              opacity: 0;
            }
            100% {
              width: 6rem;
              opacity: 1;
            }
          }

          .text-reveal {
            animation: text-reveal 2.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
          }

          .underline-reveal {
            animation: underline-reveal 2.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards 0.3s both;
          }
        `}
      </style>
      <div className="flex flex-col items-center justify-center">
        <h1
          className={`text-7xl sm:text-8xl font-bold tracking-tighter text-white ${
            isExiting
              ? "scale-90 opacity-0 transition-all duration-1000"
              : "scale-100 text-reveal"
          }`}
          style={{
            fontFamily: '"Space Grotesk", sans-serif',
            letterSpacing: "-0.02em",
          }}
        >
          Benhur
        </h1>
        <div
          className={`mt-8 h-1 bg-white ${
            isExiting
              ? "w-0 opacity-0 transition-all duration-1000"
              : "underline-reveal animate-pulse"
          }`}
        ></div>
      </div>
    </div>
  );
}
