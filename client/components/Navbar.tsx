import { useState } from "react";
import { Menu, X } from "lucide-react";

interface NavbarProps {
  onWorkClick?: () => void;
  onServicesClick?: () => void;
  onAboutClick?: () => void;
}

export default function Navbar({
  onWorkClick,
  onServicesClick,
  onAboutClick,
}: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <nav
      className="fixed top-0 w-full z-50 backdrop-blur-xl transition-all duration-300"
      style={{
        background: "rgba(30, 41, 59, 0.7)",
        borderBottom: "1px solid rgba(245, 158, 11, 0.1)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a
              href="/"
              className="text-2xl font-bold tracking-tighter text-yellow-300 hover:text-yellow-200 transition-colors"
              style={{
                fontFamily: '"Space Grotesk", sans-serif',
                letterSpacing: "-0.02em",
              }}
            >
              Benhur
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("projects")}
              className="text-slate-300 hover:text-yellow-300 transition-colors font-sans text-sm font-medium relative group"
            >
              Projects
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-400 group-hover:w-full transition-all duration-300"></span>
            </button>
            <button
              onClick={() => scrollToSection("skills")}
              className="text-slate-300 hover:text-yellow-300 transition-colors font-sans text-sm font-medium relative group"
            >
              Skills
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-400 group-hover:w-full transition-all duration-300"></span>
            </button>
            <button
              onClick={() => scrollToSection("experience")}
              className="text-slate-300 hover:text-yellow-300 transition-colors font-sans text-sm font-medium relative group"
            >
              Experience
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-400 group-hover:w-full transition-all duration-300"></span>
            </button>
            <button
              onClick={() => scrollToSection("education")}
              className="text-slate-300 hover:text-yellow-300 transition-colors font-sans text-sm font-medium relative group"
            >
              Education
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-400 group-hover:w-full transition-all duration-300"></span>
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-slate-300 hover:text-yellow-300 transition-colors font-sans text-sm font-medium relative group"
            >
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-400 group-hover:w-full transition-all duration-300"></span>
            </button>
          </div>

          {/* Desktop CTA Button */}
          <div className="hidden md:flex">
            <button
              onClick={() => scrollToSection("contact")}
              className="px-6 py-2 bg-yellow-500 hover:bg-yellow-400 text-slate-900 font-sans text-sm font-medium rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-105"
              style={{ boxShadow: "0 0 15px rgba(245, 158, 11, 0.3)" }}
            >
              Get In Touch
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-300 hover:text-yellow-300 transition-colors"
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div
            className="md:hidden backdrop-blur-xl transition-all duration-300"
            style={{
              background: "rgba(30, 41, 59, 0.9)",
              borderTop: "1px solid rgba(245, 158, 11, 0.1)",
            }}
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button
                onClick={() => scrollToSection("projects")}
                className="block w-full text-left px-3 py-2 text-slate-300 hover:text-yellow-300 rounded transition-colors font-sans text-sm"
                style={{ background: "rgba(245, 158, 11, 0.05)" }}
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection("skills")}
                className="block w-full text-left px-3 py-2 text-slate-300 hover:text-yellow-300 rounded transition-colors font-sans text-sm"
                style={{ background: "rgba(245, 158, 11, 0.05)" }}
              >
                Skills
              </button>
              <button
                onClick={() => scrollToSection("experience")}
                className="block w-full text-left px-3 py-2 text-slate-300 hover:text-yellow-300 rounded transition-colors font-sans text-sm"
                style={{ background: "rgba(245, 158, 11, 0.05)" }}
              >
                Experience
              </button>
              <button
                onClick={() => scrollToSection("education")}
                className="block w-full text-left px-3 py-2 text-slate-300 hover:text-yellow-300 rounded transition-colors font-sans text-sm"
                style={{ background: "rgba(245, 158, 11, 0.05)" }}
              >
                Education
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="block w-full text-left px-3 py-2 text-slate-300 hover:text-yellow-300 rounded transition-colors font-sans text-sm"
                style={{ background: "rgba(245, 158, 11, 0.05)" }}
              >
                Contact
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="block w-full text-left px-3 py-2 bg-yellow-500 text-slate-900 hover:bg-yellow-400 rounded mt-4 transition-all font-sans text-sm font-medium"
              >
                Get In Touch
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
