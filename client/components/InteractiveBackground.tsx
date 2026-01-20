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
      {/* Gold accent blob - tracks mouse with subtle glow */}
      <div
        className="absolute w-80 h-80 rounded-full mix-blend-screen filter blur-3xl opacity-10 animate-blob transition-transform duration-300"
        style={{
          background: "radial-gradient(circle, #f59e0b, rgba(245, 158, 11, 0))",
          top: `-10% + ${offsetY * 0.5}px`,
          left: `-5% + ${offsetX * 0.5}px`,
        }}
      ></div>

      {/* Secondary gold blob - inverse tracking for depth */}
      <div
        className="absolute w-72 h-72 rounded-full mix-blend-screen filter blur-3xl opacity-8 animate-blob animation-delay-2000 transition-transform duration-300"
        style={{
          background: "radial-gradient(circle, #fbbf24, rgba(251, 191, 36, 0))",
          top: `5% - ${offsetY * 0.3}px`,
          right: `-5% - ${offsetX * 0.5}px`,
        }}
      ></div>

      {/* Navy/dark accent for depth */}
      <div
        className="absolute w-96 h-96 rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-blob animation-delay-4000 transition-transform duration-300"
        style={{
          background: "radial-gradient(circle, #1e293b, rgba(30, 41, 59, 0))",
          bottom: `-8% + ${offsetY * 0.4}px`,
          left: `10% + ${offsetX * 0.3}px`,
        }}
      ></div>

      {/* Interactive glow effect on mouse move - cybersecurity themed */}
      {isMoving && (
        <div
          className="absolute w-64 h-64 rounded-full mix-blend-screen filter blur-2xl opacity-15 transition-opacity duration-500"
          style={{
            background: "radial-gradient(circle, #f59e0b, rgba(245, 158, 11, 0))",
            top: `${mousePos.y / window.innerHeight * 100}%`,
            left: `${mousePos.x / window.innerWidth * 100}%`,
            transform: "translate(-50%, -50%)",
            boxShadow: "0 0 40px rgba(245, 158, 11, 0.3)",
          }}
        ></div>
      )}
    </div>
  );
}
