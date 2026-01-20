import { useState } from "react";
import { Mail, Linkedin, Phone, Github } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setSubmitted(false), 3000);
      }
    } catch (error) {
      console.error("Error sending inquiry:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 relative"
      style={{ background: "linear-gradient(180deg, #1e293b 0%, #0f172a 100%)" }}>
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-4xl sm:text-5xl md:text-5xl font-bold tracking-tight mb-4 text-white">
          Let's <span className="text-yellow-300">Connect</span>
        </h2>
        <p className="text-slate-400 font-sans text-base mb-16 max-w-2xl">
          Interested in collaborating, learning opportunities, or just want to chat about cybersecurity? Reach out!
        </p>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Form Column */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Input */}
              <div>
                <label className="block text-white font-sans text-sm font-semibold mb-3">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full text-white placeholder-slate-500 font-sans text-base px-4 py-3 rounded-lg transition-all duration-300"
                  placeholder="Your name"
                  style={{ background: "rgba(30, 41, 59, 0.7)", border: "1px solid rgba(245, 158, 11, 0.3)" }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = "rgba(245, 158, 11, 0.6)";
                    e.currentTarget.style.boxShadow = "0 0 12px rgba(245, 158, 11, 0.2)";
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = "rgba(245, 158, 11, 0.3)";
                    e.currentTarget.style.boxShadow = "0 0 0";
                  }}
                />
              </div>

              {/* Email Input */}
              <div>
                <label className="block text-white font-sans text-sm font-semibold mb-3">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full text-white placeholder-slate-500 font-sans text-base px-4 py-3 rounded-lg transition-all duration-300"
                  placeholder="your@email.com"
                  style={{ background: "rgba(30, 41, 59, 0.7)", border: "1px solid rgba(245, 158, 11, 0.3)" }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = "rgba(245, 158, 11, 0.6)";
                    e.currentTarget.style.boxShadow = "0 0 12px rgba(245, 158, 11, 0.2)";
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = "rgba(245, 158, 11, 0.3)";
                    e.currentTarget.style.boxShadow = "0 0 0";
                  }}
                />
              </div>

              {/* Message Input */}
              <div>
                <label className="block text-white font-sans text-sm font-semibold mb-3">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full text-white placeholder-slate-500 font-sans text-base px-4 py-3 rounded-lg transition-all duration-300 resize-none"
                  placeholder="Tell me about your inquiry..."
                  style={{ background: "rgba(30, 41, 59, 0.7)", border: "1px solid rgba(245, 158, 11, 0.3)" }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = "rgba(245, 158, 11, 0.6)";
                    e.currentTarget.style.boxShadow = "0 0 12px rgba(245, 158, 11, 0.2)";
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = "rgba(245, 158, 11, 0.3)";
                    e.currentTarget.style.boxShadow = "0 0 0";
                  }}
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isLoading || submitted}
                className="w-full bg-yellow-500 hover:bg-yellow-400 text-slate-900 disabled:opacity-50 py-3 sm:py-4 rounded-lg transition-all duration-300 font-sans font-semibold text-base hover:scale-105"
                style={{ boxShadow: `0 0 20px ${submitted ? "rgba(34, 197, 94, 0.4)" : "rgba(245, 158, 11, 0.3)"}` }}
              >
                {submitted ? "Message Sent! 🎉" : isLoading ? "Sending..." : "Send Inquiry"}
              </button>
            </form>
          </div>

          {/* Contact Details Column */}
          <div className="space-y-10">
            {/* Email */}
            <div>
              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 border transition-all"
                     style={{ background: "rgba(245, 158, 11, 0.1)", borderColor: "rgba(245, 158, 11, 0.3)" }}
                     onMouseEnter={(e) => {
                       e.currentTarget.style.borderColor = "rgba(245, 158, 11, 0.6)";
                     }}
                     onMouseLeave={(e) => {
                       e.currentTarget.style.borderColor = "rgba(245, 158, 11, 0.3)";
                     }}>
                  <Mail className="w-6 h-6 text-yellow-400" />
                </div>
                <div>
                  <p className="text-slate-400 font-sans text-sm mb-1 font-semibold">Email</p>
                  <a
                    href="mailto:benhuratwork@gmail.com"
                    className="text-white font-sans font-semibold text-lg hover:text-yellow-300 transition-colors"
                  >
                    benhuratwork@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Phone */}
            <div>
              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 border transition-all"
                     style={{ background: "rgba(245, 158, 11, 0.1)", borderColor: "rgba(245, 158, 11, 0.3)" }}
                     onMouseEnter={(e) => {
                       e.currentTarget.style.borderColor = "rgba(245, 158, 11, 0.6)";
                     }}
                     onMouseLeave={(e) => {
                       e.currentTarget.style.borderColor = "rgba(245, 158, 11, 0.3)";
                     }}>
                  <Phone className="w-6 h-6 text-yellow-400" />
                </div>
                <div>
                  <p className="text-slate-400 font-sans text-sm mb-1 font-semibold">Phone</p>
                  <a
                    href="tel:+919567651195"
                    className="text-white font-sans font-semibold text-lg hover:text-yellow-300 transition-colors"
                  >
                    +91 95676 51195
                  </a>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <p className="text-slate-300 font-sans text-sm mb-6 font-semibold">Connect With Me</p>
              <div className="flex gap-4">
                <a
                  href="https://www.linkedin.com/in/benhursanthosh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 border rounded-lg flex items-center justify-center text-yellow-400 hover:text-yellow-300 transition-all"
                  title="LinkedIn"
                  style={{ background: "rgba(245, 158, 11, 0.1)", borderColor: "rgba(245, 158, 11, 0.3)" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "rgba(245, 158, 11, 0.6)";
                    e.currentTarget.style.boxShadow = "0 0 12px rgba(245, 158, 11, 0.3)";
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
                  className="w-12 h-12 border rounded-lg flex items-center justify-center text-yellow-400 hover:text-yellow-300 transition-all"
                  title="GitHub"
                  style={{ background: "rgba(245, 158, 11, 0.1)", borderColor: "rgba(245, 158, 11, 0.3)" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "rgba(245, 158, 11, 0.6)";
                    e.currentTarget.style.boxShadow = "0 0 12px rgba(245, 158, 11, 0.3)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "rgba(245, 158, 11, 0.3)";
                    e.currentTarget.style.boxShadow = "0 0 0";
                  }}
                >
                  <Github className="w-5 h-5" />
                </a>
              </div>
              <div className="mt-8">
                <a
                  href="https://tryhackme.com/p/benhuratwork"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-5 py-2 bg-yellow-500 hover:bg-yellow-400 text-slate-900 rounded-lg transition-all font-sans text-sm font-medium hover:scale-105"
                  style={{ boxShadow: "0 0 15px rgba(245, 158, 11, 0.3)" }}
                >
                  TryHackMe Profile
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
