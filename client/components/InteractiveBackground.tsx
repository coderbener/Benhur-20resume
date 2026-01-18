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
      {/* Main purple blob - tracks mouse */}
      <div
        className="absolute w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob transition-transform duration-300"
        style={{
          top: `-10% + ${offsetY * 0.5}px`,
          left: `-5% + ${offsetX * 0.5}px`,
        }}
      ></div>

      {/* Cyan blob - inverse tracking */}
      <div
        className="absolute w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000 transition-transform duration-300"
        style={{
          top: `0% - ${offsetY * 0.3}px`,
          right: `-5% - ${offsetX * 0.5}px`,
        }}
      ></div>

      {/* Blue blob - gentle float */}
      <div
        className="absolute w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000 transition-transform duration-300"
        style={{
          bottom: `-8% + ${offsetY * 0.4}px`,
          left: `10% + ${offsetX * 0.3}px`,
        }}
      ></div>

      {/* Extra accent blob for more depth when moving */}
      {isMoving && (
        <div
          className="absolute w-96 h-96 bg-purple-600 rounded-full mix-blend-overlay filter blur-3xl opacity-10 transition-opacity duration-500"
          style={{
            top: `${mousePos.y / window.innerHeight * 100}%`,
            left: `${mousePos.x / window.innerWidth * 100}%`,
            transform: "translate(-50%, -50%)",
          }}
        ></div>
      )}
    </div>
  );
}
