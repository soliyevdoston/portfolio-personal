"use client";

import React from "react";
import Link from "next/link";
import { FaArrowRight, FaCheck } from "react-icons/fa";
import { ShimmerButton } from "@/components/ui/shimmer-button";

const SERVICES = [
  {
    id: "business",
    label: "Biznes sayti",
    title: "Kompaniya va biznes saytlari",
    description:
      "Landing, korporativ sayt yoki katalog. Mijozga aniq mahsulot va xizmatni yetkazish, ishonchli birinchi taassurot uchun.",
    features: [
      "Tezkor yuklash (Core Web Vitals)",
      "Mobile-first dizayn",
      "SEO va Google Search Console",
      "Telegram/Email forma",
      "Admin panel (ixtiyoriy)",
    ],
    example: "Legallink, Istiqbol Luck",
  },
  {
    id: "education",
    label: "Maktab platformasi",
    title: "Maktab va o'quv markazi platformalari",
    description:
      "Maktab sayti, ichki test tizimi, o'qituvchi va o'quvchi kabinetlari bilan to'liq yechim. Ma'muriyat uchun nazorat paneli.",
    features: [
      "Maktab rasmiy sayti",
      "Ichki test va baholash tizimi",
      "Superadmin / Teacher / Student kabinetlar",
      "Ota-ona uchun reportlar",
      "AI integratsiyasi (test tahlili)",
    ],
    example: "Istiqbol Luck (4 ta birlashgan platforma)",
  },
  {
    id: "dashboard",
    label: "Boshqaruv paneli",
    title: "Boshqaruv panellari (Dashboard)",
    description:
      "Murakkab biznes jarayonlarini boshqaradigan ichki platforma. CRM, buxgalteriya, ombor yoki maxsus jarayon nazorati.",
    features: [
      "Rol asosida kirish (admin, manager, ...)",
      "Real-time statistika va grafiklar",
      "PostgreSQL / MongoDB bilan integratsiya",
      "Hisobotlar va eksport (Excel/PDF)",
      "AI yordamchilar",
    ],
    example: "Istiqbol Superadmin, Online Test",
  },
  {
    id: "platform",
    label: "Onlayn platforma",
    title: "Onlayn ilovalar va platformalar",
    description:
      "E-commerce, ta'lim platforma, marketplace yoki maxsus SaaS yechim. Click/Payme to'lov tizimlari bilan integratsiya.",
    features: [
      "Click / Payme integratsiyasi",
      "Mahsulot/Xizmat katalogi",
      "Foydalanuvchi profili va savatcha",
      "Telegram bot bilan ulanish",
      "Scalable arxitektura",
    ],
    example: "Online Test Platform",
  },
];

const PROCESS = [
  { step: "01", title: "Suhbat", desc: "Loyiha maqsadi va talablarni aniqlaymiz" },
  { step: "02", title: "Reja", desc: "Texnik talab, dizayn yo'nalishi va muddat" },
  { step: "03", title: "Ishlab chiqish", desc: "Bosqichma-bosqich, ko'rsatib boraman" },
  { step: "04", title: "Deploy", desc: "Saytni ishga tushirish va o'rgatish" },
];

export default function Services() {
  return (
    <main className="transition-colors duration-500 px-4 sm:px-6 pt-4 sm:pt-8 pb-16">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <header className="mb-10 sm:mb-14 max-w-3xl">
          <p className="text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-[0.2em] mb-3">
            Xizmatlar
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 dark:text-zinc-100 leading-[1.1]">
            Web sayt va boshqaruv panellari yarataman
          </h1>
          <p className="mt-4 text-base sm:text-lg text-gray-600 dark:text-zinc-400 leading-relaxed">
            Landing'dan tortib murakkab boshqaruv tizimigacha. Toshkent, Farg'ona va O'zbekiston bo'ylab — masofadan ishlayman.
          </p>
        </header>

        {/* Xizmatlar */}
        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 mb-14 sm:mb-20">
          {SERVICES.map((s) => (
            <article
              key={s.id}
              className="group relative rounded-2xl border border-gray-200 dark:border-zinc-800 bg-white/60 dark:bg-zinc-900/60 backdrop-blur-md p-6 sm:p-7 hover:border-gray-400 dark:hover:border-zinc-600 transition-colors"
            >
              <p className="text-[11px] font-semibold uppercase tracking-widest text-blue-600 dark:text-blue-400 mb-3">
                {s.label}
              </p>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-zinc-100 leading-tight mb-3">
                {s.title}
              </h2>
              <p className="text-sm sm:text-[15px] text-gray-600 dark:text-zinc-400 leading-relaxed mb-5">
                {s.description}
              </p>
              <ul className="space-y-2 mb-5">
                {s.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-gray-700 dark:text-zinc-300">
                    <FaCheck className="flex-shrink-0 mt-1 text-blue-600 dark:text-blue-400" size={11} />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <p className="text-xs text-gray-500 dark:text-zinc-500 border-t border-gray-100 dark:border-zinc-800 pt-3">
                <span className="font-semibold">Misol:</span> {s.example}
              </p>
            </article>
          ))}
        </div>

        {/* Ish jarayoni */}
        <section className="mb-14 sm:mb-20">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 dark:text-zinc-100 mb-8">
            Qanday ishlaymiz
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {PROCESS.map((p) => (
              <div
                key={p.step}
                className="rounded-xl border border-gray-200 dark:border-zinc-800 bg-white/40 dark:bg-zinc-900/40 p-5"
              >
                <span className="text-3xl sm:text-4xl font-bold text-blue-600/30 dark:text-blue-400/30 tabular-nums">
                  {p.step}
                </span>
                <h3 className="mt-3 text-base sm:text-lg font-semibold text-gray-900 dark:text-zinc-100">
                  {p.title}
                </h3>
                <p className="mt-1 text-xs sm:text-sm text-gray-600 dark:text-zinc-400 leading-relaxed">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="rounded-3xl border border-gray-200 dark:border-zinc-800 bg-gradient-to-br from-white to-gray-50 dark:from-zinc-900/80 dark:to-zinc-950/80 p-8 sm:p-12 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900 dark:text-zinc-100 mb-3">
            Loyihangiz haqida gaplashamizmi?
          </h2>
          <p className="text-sm sm:text-base text-gray-600 dark:text-zinc-400 max-w-xl mx-auto mb-6">
            Bepul 15 daqiqalik suhbatda loyihangizni muhokama qilaylik — texnik talab, muddat va taxminiy reja.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
            <Link href="/contact">
              <ShimmerButton>
                <span className="flex items-center gap-2 text-sm font-semibold px-1">
                  Bepul konsultatsiya
                  <FaArrowRight size={11} />
                </span>
              </ShimmerButton>
            </Link>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-gray-700 dark:text-zinc-300 hover:bg-gray-100 dark:hover:bg-zinc-800 transition-colors"
            >
              Loyihalarni ko'rish
              <FaArrowRight size={11} />
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
