import React, { useState } from "react";
import GlassCards from "./projects/GlassCards";
import MasonryGrid from "./projects/MasonryGrid";

// Rasmlar (importlarni saqlab qoldik)
import FerTeachImg from "../assets/Ferteach.png";
import PasswordImg from "../assets/PASSWORD2.png";
import Dictionary from "../assets/dictionary.png";
import Contextstore from "../assets/contextstore.png";
import TestOnline from "../assets/onlinetest.png";
import Countries from "../assets/countries.png";
import MemoryImg from "../assets/memory.png";

const tabs = [
  { id: "glass", label: "Scroll rejimi" },
  { id: "masonry", label: "Grid rejimi" },
];

const SAMPLE = [
  {
    id: 1,
    title: "Online Test Platform",
    minDescription:
      "Mazkur onlayn test platforma bilimlarni baholash va nazorat qilish uchun mo‘ljallangan.",
    description:
      "Onlayn test platformasi — bilimlarni baholash va nazorat qilish uchun qulay yechim.",
    startYear: "09-12-2025",
    endYear: "15-12-2025",
    tags: ["React", "TailwindCSS", "NodeJs"],
    github: "https://github.com/soliyevdoston/Test-sayti",
    demo: "https://www.testonlinee.uz",
    image: TestOnline,
  },
  {
    id: 2,
    title: "Fer-Teach",
    minDescription:
      "Fer-Teach — pedagogika va texnologiyaga oid ilmiy maqolalar to‘plami",
    description:
      "Fer-Teach — pedagogika va texnologiyaga oid ilmiy maqolalar to‘plami",
    startYear: "20-11-2025",
    endYear: "24-11-2025",
    tags: ["React", "TailwindCSS"],
    github: "https://github.com/soliyevdoston/fer-tech",
    demo: "https://ferteach.soliyev.uz",
    image: FerTeachImg,
  },
  {
    id: 3,
    title: "Memory Game",
    minDescription:
      "Klassik xotira o‘yini: kartalarni aylantiring, juftliklarni toping!",
    description:
      "Klassik xotira o‘yini: kartalarni aylantiring, juftliklarni toping!",
    startYear: "02-01-2026",
    endYear: "06-01-2026",
    tags: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/soliyevdoston/Memory",
    demo: "https://memory-game.soliyev.uz",
    image: MemoryImg,
  },
  {
    id: 4,
    title: "Password Generator",
    minDescription: "Xavfsiz va kuchli parollarni bir necha soniyada yarating.",
    description: "Xavfsizlik va qulaylik uchun parol generatori.",
    startYear: "24-12-2025",
    endYear: "26-12-2025",
    tags: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/soliyevdoston/password-generate",
    demo: "https://password-generate.soliyev.uz",
    image: PasswordImg,
  },
  {
    id: 5,
    title: "English Dictionary",
    minDescription:
      "Inglizcha so‘zlar va ularning ta’riflarini o‘z ichiga olgan lug‘at ilovasi.",
    description:
      "Inglizcha so‘zlar — inglizcha ta’riflar. Tarjimasiz o‘rganish.",
    startYear: "12-12-2025",
    endYear: "15-12-2025",
    tags: ["React", "TailwindCSS", "Vite"],
    github: "https://github.com/soliyevdoston/dictionary",
    demo: "https://dictionary.soliyev.uz",
    image: Dictionary,
  },
  {
    id: 6,
    title: "Context Store",
    minDescription:
      "ContextStore — mahsulotlarni savatga qo‘shish va avtomatik hisoblash platformasi.",
    description:
      "ContextStore — mahsulotlarni savatga qo‘shish va avtomatik hisoblash platformasi.",
    startYear: "01-11-2025",
    endYear: "05-11-2025",
    tags: ["React", "CSS", "Vite"],
    github: "https://github.com/soliyevdoston/contextstore",
    demo: "https://context-store.soliyev.uz",
    image: Contextstore,
  },
  {
    id: 7,
    title: "Countries Information",
    minDescription:
      "Dunyo davlatlarining bayroqlari, poytaxtlari va aholisi haqida platforma.",
    description: "Dunyo davlatlari haqida ma'lumotlar platformasi.",
    startYear: "08-11-2025",
    endYear: "10-11-2025",
    tags: ["React", "TailwindCSS"],
    github: "https://github.com/soliyevdoston/countries-react",
    demo: "https://countries.soliyev.uz",
    image: Countries,
  },
];

export default function Projects() {
  const [active, setActive] = useState("glass");

  return (
    <main className="min-h-screen  dark:bg-[#09090b] transition-colors duration-500  px-4 sm:px-6">
      <div className="max-w-7xl mx-auto  ">
        {/* Header Section */}
        <header className="flex flex-col sm:flex-row sm:items-end sm:justify-between ">
          <div className="space-y-2">
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900 dark:text-zinc-100">
              Loyihalar
            </h1>
            <p className="text-zinc-500 dark:text-zinc-400 text-sm sm:text-base max-w-md">
              Frontend yo‘nalishida yaratgan ilovalarim.
            </p>
          </div>

          {/* Tab Switcher (Modern Pill Style) */}
          <div className="flex p-1 bg-gray-100 dark:bg-zinc-900/50 backdrop-blur-md rounded-2xl w-fit border border-gray-200 dark:border-zinc-800">
            {tabs.map((t) => (
              <button
                key={t.id}
                onClick={() => setActive(t.id)}
                className={`px-6 py-2 text-sm font-semibold rounded-xl transition-all duration-300 ${
                  active === t.id
                    ? "bg-white dark:bg-zinc-800 text-black dark:text-white shadow-md"
                    : "text-gray-500 dark:text-zinc-500 hover:text-gray-900 dark:hover:text-zinc-200"
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>
        </header>

        {/* Content Section */}
        <section className="relative">
          {active === "glass" && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
              <GlassCards projects={SAMPLE} />
            </div>
          )}
          {active === "masonry" && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
              <MasonryGrid projects={SAMPLE} />
            </div>
          )}
        </section>
      </div>
    </main>
  );
}
