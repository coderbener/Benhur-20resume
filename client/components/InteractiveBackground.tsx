import { useEffect, useState } from "react";

export default function InteractiveBackground() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isMoving, setIsMoving] = useState(false);
  let moveTimeout: NodeJS.Timeout;

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
      setIsMoving(true);

      clearTimeout(moveTimeout);
      moveTimeout = setTimeout(() => {
        setIsMoving(false);
      }, 100);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      clearTimeout(moveTimeout);
    };
  }, []);

  // Calculate offset based on mouse position (gentle parallax effect)
  const offsetX = (mousePos.x - window.innerWidth / 2) * 0.05;
  const offsetY = (mousePos.y - window.innerHeight / 2) * 0.05;

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Enhanced background with multiple animated layers */}

      {/* Primary gold blob - large, drifting */}
      <div
        className="absolute w-[500px] h-[500px] rounded-full mix-blend-screen filter blur-3xl opacity-15 animate-drift-left"
        style={{
          background: "radial-gradient(circle, #f59e0b, rgba(245, 158, 11, 0))",
          top: `-15%`,
          left: `-10%`,
          boxShadow: "0 0 80px rgba(245, 158, 11, 0.3)",
        }}
      ></div>

      {/* Secondary gold blob - opposite drift */}
      <div
        className="absolute w-[400px] h-[400px] rounded-full mix-blend-screen filter blur-3xl opacity-12 animate-drift-right"
        style={{
          background: "radial-gradient(circle, #fbbf24, rgba(251, 191, 36, 0))",
          top: `10%`,
          right: `-10%`,
          boxShadow: "0 0 60px rgba(251, 191, 36, 0.25)",
        }}
      ></div>

      {/* Tertiary accent - floating up and down */}
      <div
        className="absolute w-[350px] h-[350px] rounded-full mix-blend-screen filter blur-3xl opacity-10 animate-float-slow"
        style={{
          background: "radial-gradient(circle, #fcd34d, transparent)",
          bottom: `-15%`,
          right: `10%`,
          boxShadow: "0 0 50px rgba(252, 211, 77, 0.2)",
        }}
      ></div>

      {/* Dark navy accent for depth */}
      <div
        className="absolute w-[450px] h-[450px] rounded-full mix-blend-multiply filter blur-3xl opacity-8 animate-orbit-outer"
        style={{
          background: "radial-gradient(circle, rgba(30, 41, 59, 0.8), transparent)",
          bottom: `5%`,
          left: `-5%`,
        }}
      ></div>

      {/* Rotating gold ring - cybersecurity theme */}
      <div
        className="absolute w-[600px] h-[600px] rounded-full animate-rotate-slow"
        style={{
          border: "2px solid rgba(245, 158, 11, 0.15)",
          top: `-25%`,
          right: `-15%`,
          boxShadow: "0 0 40px rgba(245, 158, 11, 0.2) inset",
        }}
      ></div>

      {/* Digital grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-5 animate-digital-grid"
        style={{
          backgroundImage: `linear-gradient(90deg, #f59e0b 1px, transparent 1px),
                            linear-gradient(0deg, #f59e0b 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
        }}
      ></div>

      {/* Center pulsing orb - subtle */}
      <div
        className="absolute w-96 h-96 rounded-full animate-cyber-pulse"
        style={{
          background: "radial-gradient(circle, rgba(245, 158, 11, 0.2), transparent)",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          boxShadow: "0 0 100px rgba(245, 158, 11, 0.15)",
        }}
      ></div>

      {/* Interactive glow effect on mouse move - enhanced */}
      {isMoving && (
        <div
          className="absolute rounded-full mix-blend-screen filter blur-2xl transition-opacity duration-300"
          style={{
            width: "300px",
            height: "300px",
            background: "radial-gradient(circle, #f59e0b, rgba(245, 158, 11, 0))",
            top: `${mousePos.y / window.innerHeight * 100}%`,
            left: `${mousePos.x / window.innerWidth * 100}%`,
            transform: "translate(-50%, -50%)",
            opacity: 0.25,
            boxShadow: "0 0 60px rgba(245, 158, 11, 0.5)",
          }}
        ></div>
      )}

      {/* Scan line effect - horizontal */}
      <div
        className="absolute w-full h-1"
        style={{
          background: "linear-gradient(90deg, transparent, rgba(245, 158, 11, 0.3), transparent)",
          top: "50%",
          animation: "scan-line 6s linear infinite",
          boxShadow: "0 0 20px rgba(245, 158, 11, 0.4)",
        }}
      ></div>
    </div>
  );
}
