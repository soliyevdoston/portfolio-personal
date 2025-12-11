// src/components/Projects.jsx
import React, { useState } from "react";
import GlassCards from "./projects/GlassCards";
import TimelineProjects from "./projects/TimelineProjects";
import MasonryGrid from "./projects/MasonryGrid";

const tabs = [
  { id: "glass", label: "Glass 3D Cards" },
  { id: "timeline", label: "Timeline" },
  { id: "masonry", label: "Masonry Grid" },
];

// sample projects (o'zingiz real ma'lumot bilan almashtiring)
const SAMPLE = [
  {
    id: 1,
    title: "Fer-Teach",
    minDescription: "Ilmiy kitoblar va maqolalar jamlanmasi.",
    description: "Minimal React portfolio with animations.",
    startYear: 2023,
    endYear: 2023,
    tags: ["React", "TailwindCSS", "Vite"],
    github: "https://github.com/soliyevdoston/fer-tech",
    demo: "https://fer-teach.vercel.app/",
    image: "/src/assets/Ferteach.png",
  },
  {
    id: 1,
    title: "Portfolio v122222222",
    minDescription: "Minimal React portfolio with animations.",
    description: "Minimal React portfolio with animations.",
    startYear: 2023,
    endYear: 2023,
    tags: ["React", "TailwindCSS", "Vite"],
    github: "https://github.com/username/portfolio-v1",
    demo: "https://username-v1.vercel.app",
    image: "/src/assets/project1.png",
  },
  {
    id: 1,
    title: "Portfolio v1333333",
    description: "Minimal React portfolio with animations.",
    startYear: 2023,
    endYear: 2023,
    tags: ["React", "TailwindCSS", "Vite"],
    github: "https://github.com/username/portfolio-v1",
    demo: "https://username-v1.vercel.app",
    image: "/src/assets/project1.png",
  },
  {
    id: 1,
    title: "Portfolio v1444444444",
    minDescription: "Minimal React portfolio with animations.",
    description: "Minimal React portfolio with animations.",
    startYear: 2023,
    endYear: 2023,
    tags: ["React", "TailwindCSS", "Vite"],
    github: "https://github.com/username/portfolio-v1",
    demo: "https://username-v1.vercel.app",
    image: "/src/assets/project1.png",
  },
  {
    id: 2,
    title: "E-commerce UI5555555555",
    minDescription: "Product grid + cart UX with local storage.",
    description: "Product grid + cart UX with local storage.",
    startYear: 2024,
    endYear: 2024,
    tags: ["HTML", "CSS", "JS"],
    github: "https://github.com/username/ecommerce-ui",
    demo: "https://ecommerce-ui.netlify.app",
    image: "/src/assets/project2.png",
  },
  {
    id: 2,
    title: "E-commerce UI666666666",
    minDescription: "Product grid + cart UX with local storage.",
    description: "Product grid + cart UX with local storage.",
    startYear: 2024,
    endYear: 2024,
    tags: ["HTML", "CSS", "JS"],
    github: "https://github.com/username/ecommerce-ui",
    demo: "https://ecommerce-ui.netlify.app",
    image: "/src/assets/project2.png",
  },
  {
    id: 2,
    title: "E-commerce UI77777777",
    minDescription: "Product grid + cart UX with local storage.",
    description: "Product grid + cart UX with local storage.",
    startYear: 2024,
    endYear: 2024,
    tags: ["HTML", "CSS", "JS"],
    github: "https://github.com/username/ecommerce-ui",
    demo: "https://ecommerce-ui.netlify.app",
    image: "/src/assets/project2.png",
  },
  // Shu tarzda boshqa loyihalarni qo‘shish mumkin
];

export default function Projects() {
  const [active, setActive] = useState("glass");

  return (
    <main className="min-h-screen  pb-8  ">
      <div className=" mx-auto">
        <header className="max-w-6xl mx-auto pb-[10px] flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2">Loyihalar</h1>
          </div>

          {/* Tabs */}
          <div className="flex gap-3 mt-4 sm:mt-0">
            {tabs.map((t) => (
              <button
                key={t.id}
                onClick={() => setActive(t.id)}
                className={`px-4 py-2 rounded-full font-medium transition
          ${
            active === t.id
              ? "bg-black text-white shadow-lg"
              : "bg-white border"
          }`}
              >
                {t.label}
              </button>
            ))}
          </div>
        </header>

        {/* Content */}
        <section>
          {active === "glass" && <GlassCards projects={SAMPLE} />}
          {active === "timeline" && <TimelineProjects projects={SAMPLE} />}
          {active === "masonry" && <MasonryGrid projects={SAMPLE} />}
        </section>
      </div>
    </main>
  );
}
