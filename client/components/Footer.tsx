import { Linkedin, Github, Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-slate-950 to-black border-t border-purple-500/20 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12 pb-12 border-b border-purple-500/20">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-serif font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-4">
              Benhur Santhosh
            </h3>
            <p className="text-gray-400 font-sans text-sm leading-relaxed">
              Cybersecurity enthusiast exploring the world of penetration testing and ethical hacking.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-sans font-semibold text-sm uppercase tracking-wide mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#projects"
                  className="text-gray-400 hover:text-purple-400 font-sans text-sm transition-colors"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className="text-gray-400 hover:text-purple-400 font-sans text-sm transition-colors"
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-400 hover:text-purple-400 font-sans text-sm transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-white font-sans font-semibold text-sm uppercase tracking-wide mb-6">
              Connect
            </h4>
            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/in/benhursanthosh"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gradient-to-br from-purple-600/20 to-cyan-600/20 border border-purple-500/30 hover:border-purple-500/60 rounded-lg flex items-center justify-center text-purple-400 hover:text-purple-300 transition-all"
                title="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/coderbener"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gradient-to-br from-purple-600/20 to-cyan-600/20 border border-purple-500/30 hover:border-purple-500/60 rounded-lg flex items-center justify-center text-cyan-400 hover:text-cyan-300 transition-all"
                title="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="mailto:benhuratwork@gmail.com"
                className="w-10 h-10 bg-gradient-to-br from-purple-600/20 to-cyan-600/20 border border-purple-500/30 hover:border-purple-500/60 rounded-lg flex items-center justify-center text-purple-400 hover:text-purple-300 transition-all"
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
