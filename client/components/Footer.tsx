import { Linkedin, Github, Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-200 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12 pb-12 border-b border-gray-200">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-serif font-semibold text-gray-950 mb-4">
              Benhur Santhosh
            </h3>
            <p className="text-gray-600 font-sans text-sm leading-relaxed">
              Cybersecurity enthusiast exploring the world of penetration testing and ethical hacking.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-gray-950 font-sans font-semibold text-sm uppercase tracking-wide mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#projects"
                  className="text-gray-600 hover:text-blue-600 font-sans text-sm transition-colors"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className="text-gray-600 hover:text-blue-600 font-sans text-sm transition-colors"
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-600 hover:text-blue-600 font-sans text-sm transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-gray-950 font-sans font-semibold text-sm uppercase tracking-wide mb-6">
              Connect
            </h4>
            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/in/benhursanthosh"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-blue-100 hover:bg-blue-200 rounded-lg flex items-center justify-center text-blue-600 transition-colors"
                title="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/coderbener"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-blue-100 hover:bg-blue-200 rounded-lg flex items-center justify-center text-blue-600 transition-colors"
                title="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="mailto:benhuratwork@gmail.com"
                className="w-10 h-10 bg-blue-100 hover:bg-blue-200 rounded-lg flex items-center justify-center text-blue-600 transition-colors"
                title="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 font-sans text-sm">
            © {currentYear} Benhur Santhosh. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a
              href="#"
              className="text-gray-500 hover:text-gray-700 font-sans text-sm transition-colors"
            >
              Privacy
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-gray-700 font-sans text-sm transition-colors"
            >
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
