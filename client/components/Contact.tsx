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
    <section id="contact" className="bg-gray-950 py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-4xl sm:text-5xl md:text-5xl font-serif font-semibold tracking-tight text-white mb-4">
          Let's Connect.
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
                  className="w-full bg-gray-900 border border-gray-800 text-white placeholder-gray-500 font-sans text-base px-4 py-3 rounded-sm focus:outline-none focus:border-yellow-500 transition-colors"
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
                  className="w-full bg-gray-900 border border-gray-800 text-white placeholder-gray-500 font-sans text-base px-4 py-3 rounded-sm focus:outline-none focus:border-yellow-500 transition-colors"
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
                  className="w-full bg-gray-900 border border-gray-800 text-white placeholder-gray-500 font-sans text-base px-4 py-3 rounded-sm focus:outline-none focus:border-yellow-500 transition-colors resize-none"
                  placeholder="Tell me about your inquiry..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isLoading || submitted}
                className="w-full bg-yellow-500 text-gray-950 hover:bg-yellow-400 disabled:bg-gray-600 py-3 sm:py-4 rounded-sm transition-all duration-300 font-sans font-semibold text-base"
              >
                {submitted ? "Message Sent! 🎉" : isLoading ? "Sending..." : "Send Inquiry"}
              </button>
            </form>
          </div>

          {/* Contact Details Column */}
          <div className="space-y-12">
            {/* Email */}
            <div className="group">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center group-hover:bg-yellow-500/10 transition-colors">
                  <Mail className="w-6 h-6 text-yellow-500" />
                </div>
                <div>
                  <p className="text-gray-400 font-sans text-sm mb-1">Email</p>
                  <a
                    href="mailto:benhuratwork@gmail.com"
                    className="text-white font-sans font-semibold text-lg hover:text-yellow-500 transition-colors"
                  >
                    benhuratwork@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Phone */}
            <div className="group">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center group-hover:bg-yellow-500/10 transition-colors">
                  <Phone className="w-6 h-6 text-yellow-500" />
                </div>
                <div>
                  <p className="text-gray-400 font-sans text-sm mb-1">Phone</p>
                  <a
                    href="tel:+919567651195"
                    className="text-white font-sans font-semibold text-lg hover:text-yellow-500 transition-colors"
                  >
                    +91 95676 51195
                  </a>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <p className="text-gray-400 font-sans text-sm mb-6">Connect With Me</p>
              <div className="flex gap-6">
                <a
                  href="https://www.linkedin.com/in/benhursanthosh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gray-900 hover:bg-yellow-500/20 rounded-lg flex items-center justify-center text-gray-400 hover:text-yellow-500 transition-colors"
                  title="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="https://github.com/coderbener"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gray-900 hover:bg-yellow-500/20 rounded-lg flex items-center justify-center text-gray-400 hover:text-yellow-500 transition-colors"
                  title="GitHub"
                >
                  <Github className="w-5 h-5" />
                </a>
              </div>
              <div className="mt-6">
                <a
                  href="https://tryhackme.com/p/benhuratwork"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-4 py-2 border border-yellow-500 text-yellow-500 hover:bg-yellow-500/10 rounded-sm transition-colors font-sans text-sm font-medium"
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
