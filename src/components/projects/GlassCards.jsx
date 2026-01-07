import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function VerticalFullScreenSlider({ projects }) {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState("down");

  const isAnimating = useRef(false);
  const lastActionTime = useRef(0);
  const touchStartY = useRef(0);

  /* BODY SCROLLNI BLOKLASH */
  useEffect(() => {
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = original);
  }, []);

  const changeSlide = (dir) => {
    if (isAnimating.current) return;

    const now = Date.now();
    if (now - lastActionTime.current < 650) return;

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
    }, 550);
  };

  /* MOUSE */
  useEffect(() => {
    const handleWheel = (e) => {
      e.preventDefault();
      if (Math.abs(e.deltaY) < 30) return;
      changeSlide(e.deltaY > 0 ? "down" : "up");
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => window.removeEventListener("wheel", handleWheel);
  }, []);

  /* KEYBOARD */
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "ArrowDown") changeSlide("down");
      if (e.key === "ArrowUp") changeSlide("up");
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  /* TOUCH */
  useEffect(() => {
    const start = (e) => (touchStartY.current = e.touches[0].clientY);
    const end = (e) => {
      const diff = touchStartY.current - e.changedTouches[0].clientY;
      if (Math.abs(diff) < 60) return;
      changeSlide(diff > 0 ? "down" : "up");
    };

    window.addEventListener("touchstart", start);
    window.addEventListener("touchend", end);
    return () => {
      window.removeEventListener("touchstart", start);
      window.removeEventListener("touchend", end);
    };
  }, []);

  const variants = {
    enter: (dir) => ({
      y: dir === "down" ? 100 : -100,
      opacity: 0,
      scale: 0.97,
    }),
    center: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: { duration: 0.55, ease: "easeOut" },
    },
    exit: (dir) => ({
      y: dir === "down" ? -100 : 100,
      opacity: 0,
      scale: 0.97,
      transition: { duration: 0.35, ease: "easeIn" },
    }),
  };

  return (
    <div className="relative w-full h-screen overflow-hidden ">
      {/* PROGRESS */}
      <div
        className="
    fixed z-50
    bottom-4 left-1/2 -translate-x-1/2
    flex flex-row gap-3
    lg:absolute
    lg:right-5 lg:top-1/2
    lg:left-auto lg:bottom-auto
    lg:-translate-x-0 lg:-translate-y-1/2
    lg:flex-col
  "
      >
        {projects.map((_, i) => (
          <span
            key={i}
            className={`w-2.5 h-2.5 rounded-full transition-all ${
              i === index ? "bg-black scale-125" : "bg-gray-400"
            }`}
          />
        ))}
      </div>

      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={index}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          className="absolute inset-0 flex flex-col items-center"
        >
          {/* IMAGE */}
          <div className="mt-[3vh] w-full flex justify-center px-4 ">
            <img
              src={projects[index].image}
              alt={projects[index].title}
              className="w-full max-w-5xl max-h-[55vh] object-contain rounded-3xl shadow-2xl"
            />
          </div>

          {/* INFO CARD */}
          <div className="mt-4 w-full max-w-5xl bg-white rounded-2xl shadow-xl px-5 py-3 mx-4 flex flex-col gap-2">
            <div className="flex flex-col sm:flex-row sm:justify-between">
              <h2 className="text-xl sm:text-2xl font-bold">
                {projects[index].title}
              </h2>
              <span className="text-sm text-gray-500">
                {projects[index].startYear} / {projects[index].endYear}
              </span>
            </div>

            <p className="text-gray-700 text-sm sm:text-base">
              {projects[index].minDescription || projects[index].description}
            </p>

            <div className="flex flex-wrap gap-2">
              {projects[index].tags.map((t, i) => (
                <span
                  key={i}
                  className="px-3 py-1 text-xs bg-black text-white rounded-full"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3 mt-1">
              {projects[index].github && (
                <a
                  href={projects[index].github}
                  target="_blank"
                  className="flex-1 border border-black rounded-xl py-2 text-center hover:bg-black hover:text-white transition"
                >
                  GitHub 🔗
                </a>
              )}
              {projects[index].demo && (
                <a
                  href={projects[index].demo}
                  target="_blank"
                  className="flex-1 bg-black text-white rounded-xl py-2 text-center hover:opacity-90 transition"
                >
                  {projects[index].title} →
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
