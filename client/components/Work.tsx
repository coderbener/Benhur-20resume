import { useState } from "react";
import { X } from "lucide-react";

interface WorkItem {
  id: string;
  image: string;
  size?: "small" | "medium" | "large";
}

const workItems: WorkItem[] = [
  {
    id: "1",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2Fbc603bacd4e645ed8ab163ef56e09eb6%2Fde242b7898d54c0081e9bbc3b3674935?format=webp&width=800",
    size: "large",
  },
  {
    id: "2",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2Fbc603bacd4e645ed8ab163ef56e09eb6%2F26ca49c8ad984c0f9e69ef53c7e8c490?format=webp&width=800",
    size: "medium",
  },
  {
    id: "3",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2Fbc603bacd4e645ed8ab163ef56e09eb6%2Fa0b7a2efa337465fb66bc06bd27d9270?format=webp&width=800",
    size: "medium",
  },
  {
    id: "4",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2Fbc603bacd4e645ed8ab163ef56e09eb6%2F6ca097aaae1142c78825ce1145ce1804?format=webp&width=800",
    size: "medium",
  },
  {
    id: "5",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2Fbc603bacd4e645ed8ab163ef56e09eb6%2Fe39d700281294f55a83fe8cac1c91b5c?format=webp&width=800",
    size: "large",
  },
  {
    id: "6",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2Fbc603bacd4e645ed8ab163ef56e09eb6%2Ff6f5f36a5fb3498cbf11ac4ad293dde0?format=webp&width=800",
    size: "small",
  },
  {
    id: "7",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2Fbc603bacd4e645ed8ab163ef56e09eb6%2Ff08def58c15542059f1dbb18435e6427?format=webp&width=800",
    size: "small",
  },
  {
    id: "8",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2Fbc603bacd4e645ed8ab163ef56e09eb6%2Fc9f25a56dd074e56bdab648c19f2104e?format=webp&width=800",
    size: "medium",
  },
  {
    id: "9",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2Fbc603bacd4e645ed8ab163ef56e09eb6%2Fc599b25975744b6d8c0e054c9d5a4f16?format=webp&width=800",
    size: "medium",
  },
  {
    id: "10",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2Fbc603bacd4e645ed8ab163ef56e09eb6%2Ff5e2c259a45b492ea883cb2f0bb04509?format=webp&width=800",
    size: "small",
  },
  {
    id: "11",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2Fbc603bacd4e645ed8ab163ef56e09eb6%2F36d95c1425754092aca3fc6ceb20f901?format=webp&width=800",
    size: "small",
  },
  {
    id: "12",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2Fbc603bacd4e645ed8ab163ef56e09eb6%2Fdcbb5afa4d6e4291b9f0b6c883e27650?format=webp&width=800",
    size: "medium",
  },
  {
    id: "13",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2Fbc603bacd4e645ed8ab163ef56e09eb6%2F950cd7c79ab846669d01154d505fc615?format=webp&width=800",
    size: "large",
  },
  {
    id: "14",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2Fbc603bacd4e645ed8ab163ef56e09eb6%2F0251e5e3b9e04a20b999098534ac4047?format=webp&width=800",
    size: "medium",
  },
  {
    id: "15",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2Fbc603bacd4e645ed8ab163ef56e09eb6%2F166383b0e4b142eb9477897c1cdde233?format=webp&width=800",
    size: "medium",
  },
  {
    id: "16",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2Fbc603bacd4e645ed8ab163ef56e09eb6%2Fb65f28af278040b5a2f9c0b2b73117f1?format=webp&width=800",
    size: "small",
  },
  {
    id: "17",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2Fbc603bacd4e645ed8ab163ef56e09eb6%2F77b8ecd73dd6458c96e8ebd698c39bbf?format=webp&width=800",
    size: "small",
  },
  {
    id: "18",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2Fbc603bacd4e645ed8ab163ef56e09eb6%2F520ccbbda1064347b588d0d5d25150ea?format=webp&width=800",
    size: "medium",
  },
  {
    id: "19",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2Fbc603bacd4e645ed8ab163ef56e09eb6%2F2ee257857fb24113bbe6ae6bafbac9d9?format=webp&width=800",
    size: "medium",
  },
  {
    id: "20",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2Fbc603bacd4e645ed8ab163ef56e09eb6%2F988b244218c44cfda579951ec9438310?format=webp&width=800",
    size: "large",
  },
  {
    id: "21",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2Fbc603bacd4e645ed8ab163ef56e09eb6%2F173a6d30b7674b7abb3c4bc1130c4583?format=webp&width=800",
    size: "medium",
  },
];

export default function Work() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [selectedImageId, setSelectedImageId] = useState<string | null>(null);

  const selectedItem = workItems.find((item) => item.id === selectedImageId);

  const getGridClass = (size?: string) => {
    switch (size) {
      case "large":
        return "col-span-1 sm:col-span-2 lg:col-span-2 row-span-2";
      case "medium":
        return "col-span-1 sm:col-span-1 row-span-1";
      case "small":
        return "col-span-1 sm:col-span-1 row-span-1";
      default:
        return "col-span-1";
    }
  };

  return (
    <section
      id="work"
      className="bg-gray-950 py-32 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-20">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-semibold tracking-tight text-white mb-6">
            Our Work.
          </h2>
          <div className="h-1 w-16 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-full"></div>
          <p className="text-gray-300 font-sans text-base md:text-lg mt-8 max-w-3xl leading-relaxed">
            A curated collection of digital experiences crafted with precision,
            innovation, and uncompromising quality. Each project represents our
            commitment to excellence and transformative design.
          </p>
        </div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 auto-rows-[250px] sm:auto-rows-[300px] md:auto-rows-[350px]">
          {workItems.map((item) => (
            <div
              key={item.id}
              className={`${getGridClass(item.size)} group relative overflow-hidden rounded-lg cursor-pointer`}
              onMouseEnter={() => setHoveredId(item.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Image */}
              <img
                src={item.image}
                alt={`Portfolio item ${item.id}`}
                className="w-full h-full object-contain bg-gray-900 transition-transform duration-500 group-hover:scale-105"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6 cursor-pointer">
                <div
                  className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-300"
                  onClick={() => setSelectedImageId(item.id)}
                >
                  <div className="h-1 w-8 bg-yellow-500 mb-3 rounded-full"></div>
                  <p className="text-yellow-500 font-sans text-sm font-semibold hover:text-yellow-400">
                    View Image
                  </p>
                </div>
              </div>

              {/* Border accent on hover */}
              <div className="absolute inset-0 border border-yellow-500/0 group-hover:border-yellow-500/50 rounded-lg transition-colors duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-24 pt-16 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-8">
          <div>
            <h3 className="text-2xl sm:text-3xl font-serif font-semibold text-white mb-3">
              Ready to create something extraordinary?
            </h3>
            <p className="text-gray-400 font-sans text-sm md:text-base">
              Let's transform your vision into a digital masterpiece.
            </p>
          </div>
          <button
            onClick={() => {
              const element = document.getElementById("contact");
              if (element) {
                element.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="bg-yellow-500 text-gray-950 hover:bg-yellow-400 px-8 py-3 rounded-sm transition-all duration-300 font-sans font-semibold text-base whitespace-nowrap"
          >
            Start Your Project
          </button>
        </div>
      </div>
    </section>
  );
}
