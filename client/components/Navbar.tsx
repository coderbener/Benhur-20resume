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
    <nav className="fixed top-0 w-full z-50 bg-gray-950/80 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a
              href="/"
              className="text-2xl font-serif font-semibold tracking-tight text-white"
            >
              BenetS
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-12">
            <button
              onClick={() => scrollToSection("work")}
              className="text-gray-300 hover:text-white transition-colors font-sans text-sm"
            >
              Work
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-gray-300 hover:text-white transition-colors font-sans text-sm"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-gray-300 hover:text-white transition-colors font-sans text-sm"
            >
              About
            </button>
          </div>

          {/* Desktop CTA Button */}
          <div className="hidden md:flex">
            <button
              onClick={() => scrollToSection("contact")}
              className="border border-yellow-500 text-yellow-500 hover:bg-yellow-500/10 px-6 py-2 rounded-sm transition-colors font-sans text-sm font-medium"
            >
              Start Your Project
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
          <div className="md:hidden bg-gray-900 border-t border-gray-800">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button
                onClick={() => scrollToSection("work")}
                className="block w-full text-left px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-800 rounded transition-colors font-sans text-sm"
              >
                Work
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="block w-full text-left px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-800 rounded transition-colors font-sans text-sm"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="block w-full text-left px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-800 rounded transition-colors font-sans text-sm"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="block w-full text-left px-3 py-2 border border-yellow-500 text-yellow-500 hover:bg-yellow-500/10 rounded mt-4 transition-colors font-sans text-sm font-medium"
              >
                Start Your Project
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
