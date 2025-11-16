import { useRef, useEffect, useState } from "react";

interface Portfolio {
  id: string;
  title: string;
  category: string;
  image: string;
}

const portfolioItems: Portfolio[] = [
  {
    id: "fashion",
    title: "Fashion",
    category: "E-Commerce",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
  },
  {
    id: "architect",
    title: "Architect",
    category: "Portfolio",
    image:
      "https://images.unsplash.com/photo-1486325212027-8081e3e4e947?w=800&h=600&fit=crop",
  },
  {
    id: "medical",
    title: "Medical",
    category: "Healthcare",
    image:
      "https://images.unsplash.com/photo-1576091160550-112173bd89ac?w=800&h=600&fit=crop",
  },
  {
    id: "hr",
    title: "HR",
    category: "HR Solutions",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop",
  },
  {
    id: "consultant",
    title: "Consultant",
    category: "Business",
    image:
      "https://images.unsplash.com/photo-1552664584-b46f2cfc4e0e?w=800&h=600&fit=crop",
  },
];

export default function Work() {
  const scrollContainer = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (scrollContainer.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainer.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    checkScroll();
    const container = scrollContainer.current;
    container?.addEventListener("scroll", checkScroll);
    return () => container?.removeEventListener("scroll", checkScroll);
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainer.current) {
      const scrollAmount = 400;
      scrollContainer.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="work"
      className="bg-gray-950 py-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-4xl sm:text-5xl md:text-5xl font-serif font-semibold tracking-tight text-white mb-4">
          Crafted for Class.
        </h2>
        <p className="text-gray-400 font-sans text-base mb-16 max-w-2xl">
          Explore our portfolio of bespoke digital experiences designed to
          inspire and convert.
        </p>

        {/* Scroll Container */}
        <div className="relative">
          <div
            ref={scrollContainer}
            className="flex gap-6 overflow-x-auto scroll-smooth pb-4 -mx-4 px-4"
            style={{ scrollBehavior: "smooth" }}
          >
            {portfolioItems.map((item) => (
              <div
                key={item.id}
                className="flex-shrink-0 w-full sm:w-96 group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-lg h-80 bg-gray-800">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <h3 className="text-2xl font-serif font-semibold text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-yellow-500 font-sans text-sm font-medium mb-4">
                      {item.category}
                    </p>
                    <a
                      href="#"
                      className="text-yellow-500 font-sans text-sm font-medium hover:text-yellow-400 transition-colors inline-block"
                    >
                      View Demo →
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Scroll Buttons */}
          <button
            onClick={() => scroll("left")}
            className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 hidden lg:flex items-center justify-center w-12 h-12 rounded-full border border-gray-700 hover:border-yellow-500 hover:text-yellow-500 text-gray-400 transition-colors ${
              !canScrollLeft && "opacity-30 cursor-not-allowed"
            }`}
            disabled={!canScrollLeft}
          >
            ←
          </button>
          <button
            onClick={() => scroll("right")}
            className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 hidden lg:flex items-center justify-center w-12 h-12 rounded-full border border-gray-700 hover:border-yellow-500 hover:text-yellow-500 text-gray-400 transition-colors ${
              !canScrollRight && "opacity-30 cursor-not-allowed"
            }`}
            disabled={!canScrollRight}
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
}
