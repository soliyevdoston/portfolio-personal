// src/components/VerticalFullScreenSlider.jsx
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function VerticalFullScreenSlider({ projects }) {
  const [index, setIndex] = useState(0);
  const isAnimating = useRef(false);
  const lastActionTime = useRef(0);
  const touchStartY = useRef(0);

  const changeSlide = (direction) => {
    if (isAnimating.current) return;

    const now = Date.now();
    if (now - lastActionTime.current < 1200) return;

    lastActionTime.current = now;
    isAnimating.current = true;

    setIndex((prev) =>
      direction === "down"
        ? (prev + 1) % projects.length
        : (prev - 1 + projects.length) % projects.length
    );

    setTimeout(() => {
      isAnimating.current = false;
    }, 1000);
  };

  // Desktop scroll
  useEffect(() => {
    const handleWheel = (e) => {
      if (Math.abs(e.deltaY) < 20) return;
      changeSlide(e.deltaY > 0 ? "down" : "up");
    };
    window.addEventListener("wheel", handleWheel, { passive: true });
    return () => window.removeEventListener("wheel", handleWheel);
  }, [index]);

  // Mobile touch
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
  }, [index]);

  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-gray-100">
      <AnimatePresence initial={false}>
        {projects.map((p, i) =>
          i === index ? (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.7, ease: "easeInOut" }}
              className="absolute inset-0 flex flex-col items-center"
            >
              <div className="mt-[12vh] w-full flex justify-center px-4">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full max-w-5xl max-h-[55vh] object-contain rounded-3xl shadow-2xl"
                />
              </div>

              <div className="mt-6 w-full max-w-5xl bg-white rounded-2xl shadow-xl px-5 py-4 mx-4 flex flex-col gap-3">
                <div className="flex flex-col sm:flex-row sm:justify-between">
                  <h2 className="text-xl sm:text-2xl font-bold">{p.title}</h2>
                  <span className="text-sm text-gray-500">
                    {p.startYear} – {p.endYear}
                  </span>
                </div>
                <p className="text-gray-700 text-sm sm:text-base">
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
                      Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ) : null
        )}
      </AnimatePresence>
    </div>
  );
}
