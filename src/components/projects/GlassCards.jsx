// src/components/VerticalFullScreenSlider.jsx
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function VerticalFullScreenSlider({ projects }) {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState("down"); // yo'nalishni saqlash
  const isAnimating = useRef(false);
  const lastActionTime = useRef(0);
  const touchStartY = useRef(0);

  const changeSlide = (dir) => {
    if (isAnimating.current) return;

    const now = Date.now();
    if (now - lastActionTime.current < 900) return; // tezlikni cheklash

    lastActionTime.current = now;
    isAnimating.current = true;
    setDirection(dir);

    setIndex((prev) =>
      dir === "down"
        ? (prev + 1) % projects.length
        : (prev - 1 + projects.length) % projects.length
    );

    setTimeout(() => {
      isAnimating.current = false;
    }, 900); // animatsiya davomiyligi bilan mos
  };

  // Desktop scroll
  useEffect(() => {
    const handleWheel = (e) => {
      if (Math.abs(e.deltaY) < 20) return;
      changeSlide(e.deltaY > 0 ? "down" : "up");
    };
    window.addEventListener("wheel", handleWheel, { passive: true });
    return () => window.removeEventListener("wheel", handleWheel);
  }, []);

  // Mobile swipe
  useEffect(() => {
    const handleTouchStart = (e) =>
      (touchStartY.current = e.touches[0].clientY);
    const handleTouchEnd = (e) => {
      const diff = touchStartY.current - e.changedTouches[0].clientY;
      if (Math.abs(diff) < 50) return;
      changeSlide(diff > 0 ? "down" : "up");
    };
    window.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("touchend", handleTouchEnd);
    return () => {
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, []);

  // Animatsiya variantlari
  const variants = {
    enter: (dir) => ({
      y: dir === "down" ? 60 : -60,
      opacity: 0,
      scale: 0.95,
    }),
    center: { y: 0, opacity: 1, scale: 1 },
    exit: (dir) => ({
      y: dir === "down" ? -60 : 60,
      opacity: 0,
      scale: 0.95,
    }),
  };

  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-gray-100">
      <AnimatePresence initial={false} custom={direction}>
        {projects.map(
          (p, i) =>
            i === index && (
              <motion.div
                key={p.id}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ type: "spring", stiffness: 120, damping: 25 }}
                className="absolute inset-0 flex flex-col items-center"
              >
                {/* IMAGE */}
                <div className="mt-[12vh] w-full flex justify-center px-4">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full max-w-5xl max-h-[55vh] object-contain rounded-3xl shadow-2xl"
                  />
                </div>

                {/* INFO CARD */}
                <div className="mt-6 w-full max-w-5xl bg-white rounded-2xl shadow-xl px-5 py-4 mx-4 flex flex-col gap-3">
                  <div className="flex flex-col sm:flex-row sm:justify-between">
                    <h2 className="text-xl sm:text-2xl font-bold">{p.title}</h2>
                    <span className="text-sm text-gray-500">
                      {p.startYear} / {p.endYear}
                    </span>
                  </div>

                  <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                    {p.minDescription || p.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {p.tags.map((t, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 text-xs sm:text-sm bg-black text-white rounded-full"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    {p.github && (
                      <a
                        href={p.github}
                        target="_blank"
                        rel="noreferrer"
                        className="flex-1 border border-black rounded-xl py-2 text-center hover:bg-black hover:text-white transition"
                      >
                        GitHub
                      </a>
                    )}
                    {p.demo && (
                      <a
                        href={p.demo}
                        target="_blank"
                        rel="noreferrer"
                        className="flex-1 bg-black text-white rounded-xl py-2 text-center hover:opacity-90 transition"
                      >
                        {p.title}
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            )
        )}
      </AnimatePresence>
    </div>
  );
}
