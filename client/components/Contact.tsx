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
    <section id="contact" className="bg-black py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-4xl sm:text-5xl md:text-5xl font-bold tracking-tight mb-4 text-white">
          Let's Connect
        </h2>
        <p className="text-gray-400 font-sans text-base mb-16 max-w-2xl">
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
                  className="w-full bg-gray-800/50 border border-white/20 text-white placeholder-gray-400 font-sans text-base px-4 py-3 rounded-lg focus:outline-none focus:border-white focus:ring-2 focus:ring-white/20 transition-all duration-300"
                  placeholder="Your name"
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
                  className="w-full bg-gray-800/50 border border-white/20 text-white placeholder-gray-400 font-sans text-base px-4 py-3 rounded-lg focus:outline-none focus:border-white focus:ring-2 focus:ring-white/20 transition-all duration-300"
                  placeholder="your@email.com"
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
                  className="w-full bg-gray-800/50 border border-white/20 text-white placeholder-gray-400 font-sans text-base px-4 py-3 rounded-lg focus:outline-none focus:border-white focus:ring-2 focus:ring-white/20 transition-all duration-300 resize-none"
                  placeholder="Tell me about your inquiry..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isLoading || submitted}
                className="w-full bg-white text-black hover:shadow-lg hover:shadow-white/50 disabled:opacity-50 py-3 sm:py-4 rounded-lg transition-all duration-300 font-sans font-semibold text-base"
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
                <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0 border border-white/20 group-hover:border-white/40 transition-all">
                  <Mail className="w-6 h-6 text-gray-300" />
                </div>
                <div>
                  <p className="text-gray-400 font-sans text-sm mb-1 font-semibold">Email</p>
                  <a
                    href="mailto:benhuratwork@gmail.com"
                    className="text-white font-sans font-semibold text-lg hover:text-gray-300 transition-colors"
                  >
                    benhuratwork@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Phone */}
            <div>
              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0 border border-white/20 group-hover:border-white/40 transition-all">
                  <Phone className="w-6 h-6 text-gray-300" />
                </div>
                <div>
                  <p className="text-gray-400 font-sans text-sm mb-1 font-semibold">Phone</p>
                  <a
                    href="tel:+919567651195"
                    className="text-white font-sans font-semibold text-lg hover:text-gray-300 transition-colors"
                  >
                    +91 95676 51195
                  </a>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <p className="text-gray-300 font-sans text-sm mb-6 font-semibold">Connect With Me</p>
              <div className="flex gap-4">
                <a
                  href="https://www.linkedin.com/in/benhursanthosh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gradient-to-br from-purple-600/20 to-cyan-600/20 border border-purple-500/30 hover:border-purple-500/60 rounded-lg flex items-center justify-center text-purple-400 hover:text-purple-300 transition-all"
                  title="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="https://github.com/coderbener"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gradient-to-br from-purple-600/20 to-cyan-600/20 border border-purple-500/30 hover:border-purple-500/60 rounded-lg flex items-center justify-center text-cyan-400 hover:text-cyan-300 transition-all"
                  title="GitHub"
                >
                  <Github className="w-5 h-5" />
                </a>
              </div>
              <div className="mt-8">
                <a
                  href="https://tryhackme.com/p/benhuratwork"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-5 py-2 bg-gradient-to-r from-purple-600 to-cyan-600 text-white hover:shadow-lg hover:shadow-purple-500/50 rounded-lg transition-all font-sans text-sm font-medium"
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
