"use client";

import React, { useState } from "react";
import GlassCards from "./projects/GlassCards";
import MasonryGrid from "./projects/MasonryGrid";

// Rasmlar (importlarni saqlab qoldik)
import FerTeachImg from "../assets/ferteach.jpg";
import PasswordImg from "../assets/PASSWORD2.png";
import Dictionary from "../assets/dictionary.png";
import Contextstore from "../assets/contextstore.png";
import TestOnline from "../assets/onlinetest.png";
import Countries from "../assets/countries.png";
import MemoryImg from "../assets/memory.png";
import Istiqbolluck from "../assets/istiqbolluck.png";
import superadministiqbol from "../assets/superadmin-istiqbol.jpg";
import teacheristiqbol from "../assets/teacher-istiqbol.jpg";
import studentistiqbol from "../assets/student-istiqbol.jpg";
import legallink from "../assets/legallink.jpg";
import intellectolympiad from "../assets/intellectolympiad.png";
import educode from "../assets/educode.png";
import moltacaldo from "../assets/moltacaldo.png";
import edumind from "../assets/edumind.png";
import threed from "../assets/threed.png";
const tabs = [
  { id: "glass", label: "Vitrina" },
  { id: "masonry", label: "Grid" },
];

const SAMPLE = [
  {
    id: 12,
    title: "Intellect Olympiad",
    minDescription:
      "Intellect Olympiad — turli fanlar bo'yicha onlayn olimpiada platformasi. Foydalanuvchilar bilimlarini sinab, natijani darhol oladi. Har bir o'quvchiga rasmiy sertifikat beriladi va undagi QR kodni skanerlash orqali sertifikatning haqiqiyligini tekshirish mumkin. G'oliblarga maxsus imkoniyatlar taqdim etiladi.",
    description:
      "Intellect Olympiad — onlayn olimpiada platformasi. Bilimingizni sinang, har bir o'quvchiga rasmiy sertifikat beriladi va QR kod orqali uning haqiqiyligini tekshirish mumkin.",
    startYear: "05-06-2026",
    endYear: "25-06-2026",
    tags: [
      "Next.js",
      "React",
      "NestJS",
      "PostgreSQL",
      "TailwindCSS",
      "AI",
    ],
    demo: "https://intellectolympiad.uz",
    image: intellectolympiad.src,
  },
  {
    id: 4,
    title: "OsonTestOl",
    minDescription:
      "OsonTestOl — sun'iy intellekt (AI) bilan integratsiyalashgan onlayn test platformasi. Istalgan tilda test olish imkonini beradi va bir necha daqiqada bilimlarni baholash hamda nazorat qilishga yordam beradi. Platformadan o'quvchilar bilimlarini sinash uchun, o'qituvchilar esa testlar tuzish va natijalarni boshqarish uchun foydalanadi.",
    description:
      "OsonTestOl — AI bilan onlayn test platformasi. Istalgan tilda, bir necha daqiqada test olish va bilimlarni baholash uchun qulay yechim.",
    startYear: "09-12-2025",
    endYear: "15-12-2025",
    tags: [
      "Next.js",
      "React",
      "NestJS",
      "PostgreSQL",
      "TailwindCSS",
      "AI",
    ],
    demo: "https://osontestol.uz",
    image: TestOnline.src,
  },
  {
    id: 13,
    title: "EduCode",
    minDescription:
      "EduCode — AKT (axborot-kommunikatsiya texnologiyalari) fanlarini amaliyot orqali o'rganish uchun zamonaviy ta'lim platformasi. Interaktiv darslar, tezkor AI izohlari va har bir o'quvchining sur'atiga moslashadigan tizim. Platformada videolar yuklash va savollar tayyorlash imkoniyati mavjud bo'lib, o'quvchilar barcha o'quv materiallarini o'z shaxsiy panellari orqali ko'rishi mumkin.",
    description:
      "EduCode — AKT fanlarini amaliyot orqali o'rganish uchun ta'lim platformasi. Videolar yuklash, savollar tayyorlash va o'quvchilar uchun shaxsiy panellar bilan jihozlangan.",
    startYear: "01-04-2026",
    endYear: "20-06-2026",
    tags: [
      "Fullstack",
      "React",
      "NestJS",
      "TailwindCSS",
      "PostgreSQL",
      "AI",
    ],
    demo: "https://educode.soliyev.uz",
    image: educode.src,
  },
  {
    id: 14,
    title: "Molto Caldo",
    minDescription:
      "Molto Caldo — ayollar uchun zamonaviy moda va kiyim do'koni (e-commerce) platformasi. Mahsulotlar katalogi, uch tilli interfeys (uz/ru/en), sevimlilar ro'yxati, qorong'u rejim va admin panel bilan jihozlangan.",
    description:
      "Molto Caldo — ayollar uchun zamonaviy moda do'koni. Mahsulotlar katalogi, ko'p tilli interfeys va admin panel bilan jihozlangan onlayn do'kon.",
    startYear: "01-03-2026",
    endYear: "10-05-2026",
    tags: [
      "Next.js",
      "React",
      "Prisma",
      "PostgreSQL",
      "TailwindCSS",
    ],
    demo: "https://moltacaldo.soliyev.uz",
    image: moltacaldo.src,
  },
  {
    id: 15,
    title: "EduMind",
    minDescription:
      "EduMind — sun'iy intellekt (Anthropic Claude) bilan kuchaytirilgan ta'lim platformasi. Real-vaqt viktorinalari, AI asosida savollar generatsiyasi va batafsil tahlil imkonini beradi. O'qituvchilar va talabalar uchun mo'ljallangan zamonaviy raqamli ta'lim tizimi. Xavfsiz autentifikatsiya va o'zbek tiliga to'liq moslik bilan jihozlangan.",
    description:
      "EduMind — AI (Anthropic Claude) bilan kuchaytirilgan ta'lim platformasi. Real-vaqt viktorinalari va AI asosida savollar generatsiyasi bilan o'qituvchilar va talabalar uchun zamonaviy raqamli ta'lim.",
    startYear: "01-05-2026",
    endYear: "24-06-2026",
    tags: [
      "Fullstack",
      "React",
      "NestJS",
      "TailwindCSS",
      "PostgreSQL",
      "AI",
    ],
    demo: "https://edumind.soliyev.uz",
    image: edumind.src,
  },
  {
    id: 16,
    title: "3D Gesture Control",
    minDescription:
      "Qo'l harakatlari (gesture) va ovoz orqali boshqariladigan interaktiv 3D zarrachalar vizualizatsiyasi. Veb-kamera tasviri MediaPipe yordamida tahlil qilinib, qo'l ishoralari (FIST, OPEN) bilan 3D sahna boshqariladi. Kamera to'liq brauzerda lokal ishlaydi — kadrlar serverga yuklanmaydi.",
    description:
      "Qo'l ishoralari va ovoz orqali boshqariladigan interaktiv 3D zarrachalar vizualizatsiyasi. Veb-kamera brauzerda lokal tahlil qilinadi.",
    startYear: "01-06-2026",
    endYear: "20-06-2026",
    tags: [
      "Three.js",
      "MediaPipe",
      "TypeScript",
      "Vite",
      "WebGL",
    ],
    demo: "https://3d.soliyev.uz",
    image: threed.src,
  },
  {
    id: 0,
    title: "Istiqbol Luck",
    minDescription:
      "Istiqbol Luck — xususiy maktab uchun ishlab chiqilgan zamonaviy rasmiy web sayt. ",
    description:
      "Istiqbol Luck — xususiy maktab uchun ishlab chiqilgan zamonaviy rasmiy web sayt. Sayt orqali maktab haqida umumiy ma'lumotlar, ta'lim yo'nalishlari, o'qituvchilar tarkibi va ichki test tizimi bilan tanishish mumkin.",
    startYear: "10-01-2026",
    endYear: "24-01-2026",
    tags: ["React", "TailwindCSS"],

    demo: "https://www.istiqbolluck.uz/",
    image: Istiqbolluck.src,
  },
  {
    id: 1,
    title: "Istiqbol Luck - superadmin",
    minDescription:
      "Istiqbol Luck superadmin — maktab ma'muriyati uchun maxsus ishlab chiqilgan boshqaruv paneli. Bu platforma orqali maktab ma'muriyati o'quvchilar, o'qituvchilar va test natijalarini samarali boshqarishi mumkin.",
    description:
      "Istiqbol Luck superadmin — maktab ma'muriyati uchun maxsus ishlab chiqilgan boshqaruv paneli. Bu platforma orqali maktab ma'muriyati o'quvchilar, o'qituvchilar va test natijalarini samarali boshqarishi mumkin. Boshqaruv paneli intuitiv interfeysga ega bo'lib, ma'lumotlarni tez va oson yangilash imkonini beradi.",
    startYear: "01-01-2026",
    endYear: "03-03-2026",
    tags: [
      "Fullstack",
      "React",
      "TailwindCSS",
      "NodeJs",
      "ExpressJs",
      "postgreSQL",
      "AI",
    ],

    demo: "https://superadmin.istiqbolluck.uz",
    image: superadministiqbol.src,
  },
  {
    id: 2,
    title: "Istiqbol Luck - teacher",
    minDescription:
      "Istiqbol Luck teacher — o'qituvchilar uchun maxsus ishlab chiqilgan boshqaruv paneli. Bu platforma orqali o'qituvchilar o'quvchilari bilan bog'lanish, test natijalarini ko'rish va boshqa vazifalarni bajarish mumkin.",
    description:
      "Istiqbol Luck teacher — o'qituvchilar uchun maxsus ishlab chiqilgan boshqaruv paneli. Bu platforma orqali o'qituvchilar o'quvchilari bilan bog'lanish, test natijalarini ko'rish va boshqa vazifalarni bajarish mumkin. Boshqaruv paneli intuitiv interfeysga ega bo'lib, ma'lumotlarni tez va oson yangilash imkonini beradi.",
    startYear: "01-01-2026",
    endYear: "03-03-2026",
    tags: [
      "Fullstack",
      "React",
      "TailwindCSS",
      "NodeJs",
      "ExpressJs",
      "postgreSQL",
      "AI",
    ],

    demo: "https://teacher.istiqbolluck.uz",
    image: teacheristiqbol.src,
  },
  {
    id: 3,
    title: "Istiqbol Luck - student",
    minDescription:
      "Istiqbol Luck student — o'quvchilar uchun maxsus ishlab chiqilgan boshqaruv paneli. Bu platforma orqali o'quvchilar o'quv materiallarini ko'rish, test natijalarini ko'rish va boshqa vazifalarni bajarish mumkin.",
    description:
      "Istiqbol Luck student — o'quvchilar uchun maxsus ishlab chiqilgan boshqaruv paneli. Bu platforma orqali o'quvchilar o'quv materiallarini ko'rish, test natijalarini ko'rish va boshqa vazifalarni bajarish mumkin. Boshqaruv paneli intuitiv interfeysga ega bo'lib, ma'lumotlarni tez va oson yangilash imkonini beradi.",
    startYear: "01-01-2026",
    endYear: "03-03-2026",
    tags: [
      "Fullstack",
      "React",
      "TailwindCSS",
      "NodeJs",
      "ExpressJs",
      "postgreSQL",
      "AI",
    ],

    demo: "https://student.istiqbolluck.uz",
    image: studentistiqbol.src,
  },
  {
    id: 5,
    title: "Legallink",
    minDescription:
      "Legallink — yuridik xizmatlar uchun onlayn platforma, mijozlarga qulay va tezkor yechimlar taqdim etadi.",
    description:
      "Legallink — yuridik xizmatlar uchun onlayn platforma, mijozlarga qulay va tezkor yechimlar taqdim etadi.",
    startYear: "09-01-2026",
    endYear: "15-02-2026",
    tags: ["React", "TailwindCSS"],
    demo: "https://www.legallink.uz",
    image: legallink.src,
  },
  {
    id: 6,
    title: "Fer-Teach",
    minDescription:
      "Fer-Teach — pedagogika va texnologiyaga oid ilmiy maqolalar to'plami",
    description:
      "Fer-Teach — pedagogika va texnologiyaga oid ilmiy maqolalar to'plami",
    startYear: "20-11-2025",
    endYear: "24-11-2025",
    tags: ["React", "TailwindCSS"],
    github: "https://github.com/soliyevdoston/fer-tech",
    demo: "https://ferteach.soliyev.uz",
    image: FerTeachImg.src,
  },
  {
    id: 7,
    title: "Memory Game",
    minDescription:
      "Klassik xotira o'yini: kartalarni aylantiring, juftliklarni toping!",
    description:
      "Klassik xotira o'yini: kartalarni aylantiring, juftliklarni toping!",
    startYear: "02-01-2026",
    endYear: "06-01-2026",
    tags: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/soliyevdoston/Memory",
    demo: "https://memory-game.soliyev.uz",
    image: MemoryImg.src,
  },
  {
    id: 8,
    title: "Password Generator",
    minDescription: "Xavfsiz va kuchli parollarni bir necha soniyada yarating.",
    description: "Xavfsizlik va qulaylik uchun parol generatori.",
    startYear: "24-12-2025",
    endYear: "26-12-2025",
    tags: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/soliyevdoston/password-generate",
    demo: "https://password-generate.soliyev.uz",
    image: PasswordImg.src,
  },
  {
    id: 9,
    title: "English Dictionary",
    minDescription:
      "Inglizcha so'zlar va ularning ta'riflarini o'z ichiga olgan lug'at ilovasi.",
    description:
      "Inglizcha so'zlar — inglizcha ta'riflar. Tarjimasiz o'rganish.",
    startYear: "12-12-2025",
    endYear: "15-12-2025",
    tags: ["React", "TailwindCSS", "Vite"],
    github: "https://github.com/soliyevdoston/dictionary",
    demo: "https://dictionary.soliyev.uz",
    image: Dictionary.src,
  },
  {
    id: 10,
    title: "Context Store",
    minDescription:
      "ContextStore — mahsulotlarni savatga qo'shish va avtomatik hisoblash platformasi.",
    description:
      "ContextStore — mahsulotlarni savatga qo'shish va avtomatik hisoblash platformasi.",
    startYear: "01-11-2025",
    endYear: "05-11-2025",
    tags: ["React", "CSS", "Vite"],
    github: "https://github.com/soliyevdoston/contextstore",
    demo: "https://context-store.soliyev.uz",
    image: Contextstore.src,
  },
  {
    id: 11,
    title: "Countries Information",
    minDescription:
      "Dunyo davlatlarining bayroqlari, poytaxtlari va aholisi haqida platforma.",
    description: "Dunyo davlatlari haqida ma'lumotlar platformasi.",
    startYear: "08-11-2025",
    endYear: "10-11-2025",
    tags: ["React", "TailwindCSS"],
    github: "https://github.com/soliyevdoston/countries-react",
    demo: "https://countries.soliyev.uz",
    image: Countries.src,
  },
];

export default function Projects() {
  const [active, setActive] = useState("glass");

  return (
    <main className="transition-colors duration-500 px-4 sm:px-6 pt-3 sm:pt-6 pb-4 sm:pb-10">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <header className="flex flex-col gap-3 sm:gap-4 sm:flex-row sm:items-end sm:justify-between sm:gap-6">
          <div className="space-y-1 sm:space-y-2">
            <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-gray-900 dark:text-zinc-100">
              Loyihalar
            </h1>
            <p className="hidden sm:block text-zinc-500 dark:text-zinc-400 text-sm sm:text-base max-w-md">
              Web dasturlash yo'nalishida yaratgan ilovalarim.
            </p>
          </div>

          {/* Tab Switcher (Modern Pill Style) */}
          <div className="flex p-1 bg-gray-100 dark:bg-zinc-900/50 backdrop-blur-md rounded-2xl w-full sm:w-fit border border-gray-200 dark:border-zinc-800">
            {tabs.map((t) => (
              <button
                key={t.id}
                onClick={() => setActive(t.id)}
                className={`flex-1 sm:flex-none px-4 sm:px-6 py-2 text-xs sm:text-sm font-semibold rounded-xl transition-all duration-300 whitespace-nowrap ${
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