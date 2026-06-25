"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaArrowRight, FaArrowLeft } from "react-icons/fa";

export default function GlassCards({ projects }) {
  const [idx, setIdx] = useState(0);
  const [dir, setDir] = useState(1);
  const touchStartX = useRef(0);

  const next = useCallback(() => {
    if (idx >= projects.length - 1) return;
    setDir(1);
    setIdx((i) => i + 1);
  }, [idx, projects.length]);

  const prev = useCallback(() => {
    if (idx <= 0) return;
    setDir(-1);
    setIdx((i) => i - 1);
  }, [idx]);

  /* Body scroll lock — barcha qurilmalarda */
  useEffect(() => {
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = original; };
  }, []);

  /* Keyboard */
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowRight" || e.key === "ArrowDown") next();
      if (e.key === "ArrowLeft" || e.key === "ArrowUp") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [next, prev]);

  /* Touch swipe — mobilda chap/o'ngga sviplab almashtirish */
  const onTouchStart = (e) => { touchStartX.current = e.touches[0].clientX; };
  const onTouchEnd = (e) => {
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) < 50) return;
    diff > 0 ? next() : prev();
  };

  const p = projects[idx];

  const imgVariants = {
    enter: (d) => ({ opacity: 0, scale: 1.05, x: d * 30 }),
    center: { opacity: 1, scale: 1, x: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
    exit: (d) => ({ opacity: 0, scale: 0.98, x: -d * 30, transition: { duration: 0.4, ease: [0.55, 0, 0.65, 0.45] } }),
  };

  const textVariants = {
    enter: { opacity: 0 },
    center: (i) => ({
      opacity: 1,
      transition: { duration: 0.45, delay: 0.1 + i * 0.05, ease: [0.22, 1, 0.36, 1] },
    }),
    exit: { opacity: 0, transition: { duration: 0.2 } },
  };

  return (
    <div className="relative w-full h-[calc(100vh-160px)] sm:h-[calc(100vh-180px)] lg:h-auto lg:min-h-[calc(100vh-180px)] py-2 lg:py-6 flex flex-col lg:block">

      {/* Asosiy ko'rinish */}
      <div className="grid grid-rows-[30vh_1fr] sm:grid-rows-[35vh_1fr] lg:grid-rows-none lg:grid-cols-[1fr_1.25fr] gap-3 lg:gap-14 flex-1 min-h-0 lg:h-full lg:items-stretch">

        {/* CHAP — Info panel */}
        <div className="flex flex-col lg:justify-between gap-2 lg:gap-6 lg:min-h-[70vh] order-2 lg:order-1 min-h-0">
          {/* Yuqori — hisoblagich (1/12) — faqat desktop'da, mobilda rasm ustida */}
          <div className="hidden lg:flex items-baseline gap-1 font-bold tabular-nums">
            <span className="text-black dark:text-white lg:text-4xl">
              {idx + 1}
            </span>
            <span className="text-gray-400 dark:text-zinc-600 lg:text-2xl">
              /{projects.length}
            </span>
          </div>

          {/* Markaz — kontent (animatsion) */}
          <div className="lg:flex-1 flex flex-col lg:justify-center min-h-0 overflow-hidden">
            <AnimatePresence mode="wait" custom={dir}>
              <motion.div key={idx} className="flex flex-col gap-2 lg:gap-5">
                <motion.span
                  custom={0}
                  variants={textVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="text-[10px] sm:text-xs uppercase tracking-[0.2em] lg:tracking-[0.3em] text-blue-600 dark:text-blue-400 font-semibold"
                >
                  Loyiha · {p.endYear?.split("-")[2] || ""}
                </motion.span>

                <motion.h2
                  custom={1}
                  variants={textVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="text-lg sm:text-2xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-gray-900 dark:text-zinc-50 leading-[1.1] break-words line-clamp-2"
                >
                  {p.title}
                </motion.h2>

                <motion.p
                  custom={2}
                  variants={textVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="text-[13px] sm:text-[15px] lg:text-[16px] leading-snug lg:leading-relaxed text-gray-600 dark:text-zinc-400 max-w-lg line-clamp-3 lg:line-clamp-none"
                >
                  {p.minDescription || p.description}
                </motion.p>

                <motion.div
                  custom={3}
                  variants={textVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="flex flex-wrap gap-1.5 lg:gap-2 max-h-[3rem] lg:max-h-none overflow-hidden"
                >
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="px-2 lg:px-3 py-0.5 lg:py-1 text-[9px] lg:text-[11px] font-medium uppercase tracking-wider rounded-full border border-gray-300 dark:border-zinc-700 text-gray-700 dark:text-zinc-300"
                    >
                      {t}
                    </span>
                  ))}
                </motion.div>

                <motion.div
                  custom={4}
                  variants={textVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="flex gap-2 lg:gap-3 mt-1 lg:mt-2"
                >
                  {p.demo && (
                    <a
                      href={p.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="group inline-flex items-center gap-2 px-3.5 lg:px-5 py-2 lg:py-3 rounded-full bg-black dark:bg-white text-white dark:text-black text-xs lg:text-sm font-semibold hover:gap-3 transition-all duration-300"
                    >
                      Saytni ko'rish
                      <FaArrowRight size={11} className="transition-transform group-hover:translate-x-0.5" />
                    </a>
                  )}
                  {p.github && (
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noreferrer"
                      aria-label="GitHub"
                      className="inline-flex items-center justify-center w-9 h-9 lg:w-12 lg:h-12 rounded-full border border-gray-300 dark:border-zinc-700 text-gray-700 dark:text-zinc-300 hover:bg-gray-100 dark:hover:bg-zinc-800 transition-colors"
                    >
                      <FaGithub size={14} />
                    </a>
                  )}
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Pastki — strelka tugmalar (faqat desktop, mobilda rasm ustida) */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={prev}
              disabled={idx === 0}
              aria-label="Oldingi"
              className="group w-9 h-9 lg:w-12 lg:h-12 rounded-full border border-gray-300 dark:border-zinc-700 flex items-center justify-center text-gray-700 dark:text-zinc-300 hover:bg-black hover:text-white hover:border-black dark:hover:bg-white dark:hover:text-black dark:hover:border-white disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-200"
            >
              <FaArrowLeft size={12} />
            </button>
            <button
              onClick={next}
              disabled={idx === projects.length - 1}
              aria-label="Keyingi"
              className="group w-9 h-9 lg:w-12 lg:h-12 rounded-full border border-gray-300 dark:border-zinc-700 flex items-center justify-center text-gray-700 dark:text-zinc-300 hover:bg-black hover:text-white hover:border-black dark:hover:bg-white dark:hover:text-black dark:hover:border-white disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-200"
            >
              <FaArrowRight size={12} />
            </button>
            <span className="ml-3 text-xs text-gray-400 dark:text-zinc-600 hidden sm:inline">
              ← → klaviatura bilan ham
            </span>
          </div>
        </div>

        {/* O'NG — Rasm */}
        <div
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
          className="relative order-1 lg:order-2 h-[30vh] sm:h-[35vh] lg:h-[75vh] rounded-xl lg:rounded-3xl overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 dark:from-zinc-900 dark:to-zinc-950 shadow-xl lg:shadow-2xl dark:shadow-black/50 ring-1 ring-black/5 dark:ring-white/10 touch-pan-y"
        >
          <AnimatePresence mode="wait" custom={dir}>
            <motion.div
              key={idx}
              custom={dir}
              variants={imgVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="absolute inset-0"
            >
              {/* Blur backdrop — bir xil rasmni cho'zib, blurlab qo'yamiz */}
              <img
                src={p.image}
                alt=""
                aria-hidden="true"
                className="absolute inset-0 w-full h-full object-cover scale-110 blur-2xl opacity-40 dark:opacity-25"
              />
              {/* Asosiy rasm — to'liq ko'rinadi */}
              <img
                src={p.image}
                alt={p.title}
                className="absolute inset-0 w-full h-full object-contain p-4 sm:p-6 lg:p-8 drop-shadow-2xl"
              />
            </motion.div>
          </AnimatePresence>

        </div>
      </div>

      {/* MOBILE — pastdagi toza navigatsiya qatori */}
      <div className="lg:hidden flex items-center justify-center gap-4 mt-3">
        <button
          onClick={prev}
          disabled={idx === 0}
          aria-label="Oldingi"
          className="w-11 h-11 rounded-full border border-gray-300 dark:border-zinc-700 flex items-center justify-center text-gray-700 dark:text-zinc-300 active:scale-95 disabled:opacity-30 disabled:cursor-not-allowed transition-all bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md"
        >
          <FaArrowLeft size={14} />
        </button>
        <span className="text-sm font-bold tabular-nums text-gray-700 dark:text-zinc-300 min-w-[3.5rem] text-center">
          {idx + 1} / {projects.length}
        </span>
        <button
          onClick={next}
          disabled={idx === projects.length - 1}
          aria-label="Keyingi"
          className="w-11 h-11 rounded-full border border-gray-300 dark:border-zinc-700 flex items-center justify-center text-gray-700 dark:text-zinc-300 active:scale-95 disabled:opacity-30 disabled:cursor-not-allowed transition-all bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md"
        >
          <FaArrowRight size={14} />
        </button>
      </div>

    </div>
  );
}