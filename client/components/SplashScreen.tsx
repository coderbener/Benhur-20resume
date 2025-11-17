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
    }, 1500);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 bg-gray-950 z-50 flex items-center justify-center transition-opacity duration-500 ${
        isExiting ? "opacity-0" : "opacity-100"
      }`}
    >
      <div className="flex flex-col items-center justify-center">
        <h1
          className={`text-7xl sm:text-8xl font-serif font-semibold tracking-tight text-white transition-all duration-1000 ${
            isExiting
              ? "scale-90 opacity-0"
              : "scale-100 opacity-100 animate-fade-in-slow"
          }`}
        >
          BenetS
        </h1>
        <div
          className={`mt-8 h-1 bg-gradient-to-r from-yellow-500/0 via-yellow-500 to-yellow-500/0 w-24 transition-all duration-1000 ${
            isExiting ? "w-0 opacity-0" : "w-24 opacity-100"
          }`}
        ></div>
      </div>
    </div>
  );
}
