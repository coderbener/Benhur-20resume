import { Linkedin, Github, Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="py-16 px-4 sm:px-6 lg:px-8"
      style={{
        background: "linear-gradient(180deg, #0f172a 0%, #000 100%)",
        borderTop: "1px solid rgba(245, 158, 11, 0.1)",
      }}
    >
      <div className="max-w-7xl mx-auto">
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12 pb-12"
          style={{ borderBottom: "1px solid rgba(245, 158, 11, 0.1)" }}
        >
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Benhur <span className="text-yellow-300">Santhosh</span>
            </h3>
            <p className="text-slate-400 font-sans text-sm leading-relaxed">
              Cybersecurity enthusiast exploring the world of penetration
              testing and ethical hacking.
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
                  className="text-slate-400 hover:text-yellow-300 font-sans text-sm transition-colors"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className="text-slate-400 hover:text-yellow-300 font-sans text-sm transition-colors"
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-slate-400 hover:text-yellow-300 font-sans text-sm transition-colors"
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
                className="w-10 h-10 border rounded-lg flex items-center justify-center text-yellow-400 hover:text-yellow-300 transition-all"
                title="LinkedIn"
                style={{
                  background: "rgba(245, 158, 11, 0.1)",
                  borderColor: "rgba(245, 158, 11, 0.3)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "rgba(245, 158, 11, 0.6)";
                  e.currentTarget.style.boxShadow =
                    "0 0 12px rgba(245, 158, 11, 0.3)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(245, 158, 11, 0.3)";
                  e.currentTarget.style.boxShadow = "0 0 0";
                }}
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/coderbener"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border rounded-lg flex items-center justify-center text-yellow-400 hover:text-yellow-300 transition-all"
                title="GitHub"
                style={{
                  background: "rgba(245, 158, 11, 0.1)",
                  borderColor: "rgba(245, 158, 11, 0.3)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "rgba(245, 158, 11, 0.6)";
                  e.currentTarget.style.boxShadow =
                    "0 0 12px rgba(245, 158, 11, 0.3)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(245, 158, 11, 0.3)";
                  e.currentTarget.style.boxShadow = "0 0 0";
                }}
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="mailto:benhuratwork@gmail.com"
                className="w-10 h-10 border rounded-lg flex items-center justify-center text-yellow-400 hover:text-yellow-300 transition-all"
                title="Email"
                style={{
                  background: "rgba(245, 158, 11, 0.1)",
                  borderColor: "rgba(245, 158, 11, 0.3)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "rgba(245, 158, 11, 0.6)";
                  e.currentTarget.style.boxShadow =
                    "0 0 12px rgba(245, 158, 11, 0.3)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(245, 158, 11, 0.3)";
                  e.currentTarget.style.boxShadow = "0 0 0";
                }}
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 font-sans text-sm">
            © {currentYear} Benhur Santhosh. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a
              href="#"
              className="text-slate-500 hover:text-yellow-300 font-sans text-sm transition-colors"
            >
              Privacy
            </a>
            <a
              href="#"
              className="text-slate-500 hover:text-yellow-300 font-sans text-sm transition-colors"
            >
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
