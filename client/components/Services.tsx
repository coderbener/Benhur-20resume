import { ArrowRight } from "lucide-react";

interface ServiceCard {
  id: string;
  title: string;
  price: string;
  description: string;
  features: string[];
  cta: string;
}

const services: ServiceCard[] = [
  {
    id: "starter",
    title: "Founder's Starter Pack",
    price: "₹499",
    description:
      "Your first professional landing page, launched in days. Choose from our template gallery.",
    features: [
      "Professional landing page",
      "Mobile responsive",
      "SEO optimized",
      "2 weeks delivery",
    ],
    cta: "Get Started",
  },
  {
    id: "bespoke",
    title: "Bespoke Website",
    price: "From ₹XXXX",
    description:
      "A custom, multi-page website designed and built from scratch for your unique brand.",
    features: [
      "Custom design & development",
      "Unlimited pages",
      "Advanced features",
      "Performance optimized",
      "Analytics integration",
    ],
    cta: "Let's Talk",
  },
  {
    id: "retainer",
    title: "Your Personal IT Team",
    price: "Contact Us",
    description:
      "Ongoing updates, content creation, and technical support for your digital presence.",
    features: [
      "Monthly updates",
      "Priority support",
      "Content creation",
      "Security monitoring",
      "Performance tracking",
    ],
    cta: "Schedule Call",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-gray-950 py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-4xl sm:text-5xl md:text-5xl font-serif font-semibold tracking-tight text-white mb-4">
          Your Toolkit for Launch.
        </h2>
        <p className="text-gray-400 font-sans text-base mb-16 max-w-2xl">
          Choose the perfect plan to bring your vision to life.
        </p>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {services.map((service) => (
            <div
              key={service.id}
              className="group border border-gray-800 hover:border-yellow-500/50 bg-gray-900/50 hover:bg-gray-900 p-8 sm:p-12 rounded-lg transition-all duration-300 flex flex-col"
            >
              {/* Price Tag */}
              <div className="mb-6">
                <p className="text-yellow-500 font-sans font-semibold text-lg">
                  {service.price}
                </p>
              </div>

              {/* Title */}
              <h3 className="text-2xl sm:text-3xl font-serif font-semibold text-white mb-4">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 font-sans text-base leading-relaxed mb-8">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-3 mb-12 flex-grow">
                {service.features.map((feature, index) => (
                  <li
                    key={index}
                    className="text-gray-300 font-sans text-sm flex items-start gap-3"
                  >
                    <span className="text-yellow-500 mt-1.5 flex-shrink-0">•</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <button className="w-full border border-yellow-500 text-yellow-500 hover:bg-yellow-500/10 py-3 sm:py-4 rounded-sm transition-all duration-300 font-sans font-semibold text-base flex items-center justify-center gap-2 group/btn">
                {service.cta}
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
