"use client";

import React from "react";
import Link from "next/link";
import { FaGithub, FaEnvelope, FaFileAlt } from "react-icons/fa";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import { Highlighter } from "@/components/ui/highlighter";
import { ShimmerButton } from "@/components/ui/shimmer-button";

export default function Main() {
  return (
    <main className="min-h-[calc(100vh-80px)] sm:h-[calc(100vh-80px)] sm:overflow-hidden transition-colors duration-500 selection:bg-blue-500/30 flex flex-col relative">
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-lg h-64 bg-blue-500/10 blur-[120px] -z-10 hidden dark:block pointer-events-none"></div>

      <div className="flex-1 flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-14 lg:gap-20 w-full max-w-5xl mx-auto px-4 sm:px-8 py-6 sm:py-0">

        {/* RASM */}
        <div className="relative flex-shrink-0 order-1 sm:order-2">
          <div className="absolute -bottom-4 -right-4 w-full h-full rounded-3xl border-2 border-blue-500/30 dark:border-blue-400/20" />
          <img
            src="/personal.jpg"
            alt="Dostonbek"
            className="relative w-48 h-64 sm:w-60 sm:h-80 lg:w-72 lg:h-[22rem] object-cover rounded-3xl shadow-2xl dark:shadow-black/60"
          />
          <div className="absolute inset-0 rounded-3xl ring-1 ring-black/5 dark:ring-white/10" />
        </div>

        {/* MATN */}
        <div className="flex flex-col items-center sm:items-start text-center sm:text-left flex-1 order-2 sm:order-1">
          <span className="text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-widest mb-3">
            Web dasturchi
          </span>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-zinc-100 tracking-tight leading-tight">
            Dostonbek
            <br />
            Solijonov
          </h1>

          <p className="mt-4 text-[16px] sm:text-[18px] leading-relaxed text-gray-600 dark:text-zinc-400 max-w-sm">
            Ba'zi{" "}
            <Highlighter action="underline" color="#3b82f6">
              muammolar
            </Highlighter>{" "}
            yillar davomida javobsiz qoladi. Men to'g'ri savol va bir nechta
            qator kod bilan hammasini{" "}
            <Highlighter action="highlight" color="rgb(255, 123, 0)">
              o'zgartirishim
            </Highlighter>{" "}
            mumkin.
          </p>

          {/* Ijtimoiy ikonkalar */}
          <div className="flex gap-3 mt-6">
            {[
              { icon: <FaGithub />, link: "https://github.com/soliyevdoston", label: "GitHub" },
              { icon: <FaEnvelope />, link: "mailto:dostonbeksolijonov.uz@gmail.com", label: "Email" },
              { icon: <FaFileAlt />, link: "/resume.pdf", label: "Resume" },
            ].map((item, index) => (
              <a
                key={index}
                href={item.link}
                target={item.label !== "Email" ? "_blank" : "_self"}
                rel="noreferrer"
                aria-label={item.label}
                className="p-3 rounded-xl border border-gray-400 dark:border-zinc-600 bg-white/60 dark:bg-zinc-900/50 backdrop-blur-md text-gray-700 dark:text-zinc-400 hover:text-black dark:hover:text-white hover:border-black dark:hover:border-zinc-300 hover:scale-110 transition-all duration-300 shadow-sm"
              >
                {item.icon}
              </a>
            ))}
          </div>

          {/* Tugmalar */}
          <div className="flex flex-col min-[360px]:flex-row gap-3 mt-6">
            <ShimmerButton className="w-full min-[360px]:w-auto">
              <Link href="/about" className="block w-full h-full text-center">
                Haqimda
              </Link>
            </ShimmerButton>
            <InteractiveHoverButton className="w-full min-[360px]:w-auto">
              <Link href="/projects" className="block w-full text-center">
                Kichik qadamlar
              </Link>
            </InteractiveHoverButton>
          </div>

          {/* Freelance CTA */}
          <Link
            href="/services"
            className="group mt-4 inline-flex items-center gap-2 pl-2 pr-4 py-1.5 rounded-full border border-green-500/30 dark:border-green-400/30 bg-green-500/5 dark:bg-green-400/5 text-sm font-medium text-gray-700 dark:text-zinc-300 hover:bg-green-500/10 dark:hover:bg-green-400/10 hover:border-green-500/60 dark:hover:border-green-400/60 hover:text-black dark:hover:text-white hover:shadow-md hover:shadow-green-500/10 transition-all duration-300"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75 animate-ping" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500" />
            </span>
            Muammoyingiz bormi? Birga yechamiz
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </Link>
        </div>
      </div>

      <footer className="w-full text-center text-gray-500 dark:text-zinc-600 text-xs sm:text-sm py-4">
        © 2026 soliyev.uz <br />
        Barcha huquqlar himoyalangan.
      </footer>
    </main>
  );
}