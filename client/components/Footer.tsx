import { Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-950 border-t border-gray-800 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12 pb-12 border-b border-gray-800">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-serif font-semibold text-white mb-4">
              BenetS
            </h3>
            <p className="text-gray-400 font-sans text-sm leading-relaxed">
              Crafting bespoke digital experiences for founders who refuse to
              blend in.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-sans font-semibold text-sm uppercase tracking-wide mb-6">
              Navigation
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#work"
                  className="text-gray-400 hover:text-yellow-500 font-sans text-sm transition-colors"
                >
                  Work
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-gray-400 hover:text-yellow-500 font-sans text-sm transition-colors"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-400 hover:text-yellow-500 font-sans text-sm transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-white font-sans font-semibold text-sm uppercase tracking-wide mb-6">
              Follow Us
            </h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-gray-900 hover:bg-yellow-500/20 rounded-lg flex items-center justify-center text-gray-400 hover:text-yellow-500 transition-colors"
                title="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-900 hover:bg-yellow-500/20 rounded-lg flex items-center justify-center text-gray-400 hover:text-yellow-500 transition-colors"
                title="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 font-sans text-sm">
            © {currentYear} BenetS. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a
              href="#"
              className="text-gray-500 hover:text-gray-300 font-sans text-sm transition-colors"
            >
              Privacy
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-gray-300 font-sans text-sm transition-colors"
            >
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
