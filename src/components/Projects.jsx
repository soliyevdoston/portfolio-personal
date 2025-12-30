// src/components/Projects.jsx
import React, { useState } from "react";
import GlassCards from "./projects/GlassCards";
import MasonryGrid from "./projects/MasonryGrid";
import FerTeachImg from "../assets/Ferteach.png";
import PasswordImg from "../assets/PASSWORD2.png";
import Dictionary from "../assets/dictionary.png";
import Contextstore from "../assets/contextstore.png";
import TestOnline from "../assets/onlinetest.png";
import Countries from "../assets/countries.png";
const tabs = [
  { id: "glass", label: "Glass 3D Cards" },
  { id: "masonry", label: "Masonry Grid" },
];

// sample projects (o'zingiz real ma'lumot bilan almashtiring)
const SAMPLE = [
  {
    id: 1,
    title: "Password Generator",
    minDescription:
      "Xavfsiz va kuchli parollarni bir necha soniyada yarating. Uzunlik, harflar, raqamlar va maxsus belgilarni tanlab, ishonchli parolga ega bo‘ling.",
    description: "Xavfsizlik va qulaylik uchun parol generatori.",
    startYear: "24-12-2025",
    endYear: "26-12-2025",
    tags: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/soliyevdoston/password-generate",
    demo: "https://password-generate.soliyev.uz",
    image: PasswordImg,
  },
  {
    id: 2,
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
    id: 3,
    title: "Context Store",
    description:
      "Mahsulotlarni ko‘rish, savatga qo‘shish va umumiy summani hisoblash imkonini beruvchi platforma.",
    minDescription:
      "ContextStore — mahsulotlarni ko‘rish, savatga qo‘shish, o‘chirish va umumiy summani avtomatik hisoblash imkonini beruvchi platforma.",
    startYear: "01-11-2025",
    endYear: "05-11-2025",
    tags: ["React", "CSS", "Vite"],
    github: "https://github.com/soliyevdoston/contextstore",
    demo: "https://context-store.soliyev.uz",
    image: Contextstore,
  },
  {
    id: 4,
    title: "Online Test Platform",
    minDescription:
      "Mazkur onlayn test platforma bilimlarni baholash va nazorat qilish uchun mo‘ljallangan bo‘lib, o‘quvchilar, talabalar va o‘qituvchilar uchun qulay va samarali yechim hisoblanadi.",
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
    id: 5,
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
    id: 6,
    title: "Countries Information",
    minDescription:
      "Dunyo davlatlarining bayroqlari, poytaxtlari va aholisi haqidagi to‘liq va ishonchli ma’lumotlar jamlangan ta’limiy platforma.",
    description:
      "Dunyo davlatlari haqida ma'lumotlar. Nomi, aholisi, va poytaxti haqida ishonchli ma'lumotlar",
    startYear: "08-11-2025",
    endYear: "10-11-2025",
    tags: ["React", "TailwindCSS"],
    github: "https://github.com/soliyevdoston/countries-react",
    demo: "https://countries.soliyev.uz",
    image: Countries,
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
          {active === "masonry" && <MasonryGrid projects={SAMPLE} />}
        </section>
      </div>
    </main>
  );
}
