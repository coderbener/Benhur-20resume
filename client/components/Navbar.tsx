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
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a
              href="/"
              className="text-2xl font-serif font-semibold tracking-tight text-gray-950"
            >
              Benhur
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">
            <button
              onClick={() => scrollToSection("projects")}
              className="text-gray-600 hover:text-blue-600 transition-colors font-sans text-sm font-medium"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection("skills")}
              className="text-gray-600 hover:text-blue-600 transition-colors font-sans text-sm font-medium"
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection("experience")}
              className="text-gray-600 hover:text-blue-600 transition-colors font-sans text-sm font-medium"
            >
              Experience
            </button>
            <button
              onClick={() => scrollToSection("education")}
              className="text-gray-600 hover:text-blue-600 transition-colors font-sans text-sm font-medium"
            >
              Education
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-gray-600 hover:text-blue-600 transition-colors font-sans text-sm font-medium"
            >
              Contact
            </button>
          </div>

          {/* Desktop CTA Button */}
          <div className="hidden md:flex">
            <button
              onClick={() => scrollToSection("contact")}
              className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-2 rounded-lg transition-colors font-sans text-sm font-medium"
            >
              Get In Touch
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white"
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
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button
                onClick={() => scrollToSection("projects")}
                className="block w-full text-left px-3 py-2 text-gray-600 hover:text-blue-600 hover:bg-gray-100 rounded transition-colors font-sans text-sm"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection("skills")}
                className="block w-full text-left px-3 py-2 text-gray-600 hover:text-blue-600 hover:bg-gray-100 rounded transition-colors font-sans text-sm"
              >
                Skills
              </button>
              <button
                onClick={() => scrollToSection("experience")}
                className="block w-full text-left px-3 py-2 text-gray-600 hover:text-blue-600 hover:bg-gray-100 rounded transition-colors font-sans text-sm"
              >
                Experience
              </button>
              <button
                onClick={() => scrollToSection("education")}
                className="block w-full text-left px-3 py-2 text-gray-600 hover:text-blue-600 hover:bg-gray-100 rounded transition-colors font-sans text-sm"
              >
                Education
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="block w-full text-left px-3 py-2 text-gray-600 hover:text-blue-600 hover:bg-gray-100 rounded transition-colors font-sans text-sm"
              >
                Contact
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="block w-full text-left px-3 py-2 bg-blue-600 text-white hover:bg-blue-700 rounded mt-4 transition-colors font-sans text-sm font-medium"
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
