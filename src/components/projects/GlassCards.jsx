import React, { useState, useEffect } from "react";

export default function VerticalFullScreenSlider({ projects }) {
  const [index, setIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    let ticking = false;

    const handleScroll = (e) => {
      if (animating) return;

      // kichik scrolllarni e'tiborsiz qoldiramiz
      if (Math.abs(e.deltaY) < 15) return;

      if (!ticking) {
        ticking = true;
        setAnimating(true);

        if (e.deltaY > 0) {
          setIndex((prev) => (prev + 1) % projects.length);
        } else {
          setIndex((prev) => (prev - 1 + projects.length) % projects.length);
        }

        setTimeout(() => {
          ticking = false;
          setAnimating(false);
        }, 1000); // animatsiya davomiyligi
      }
    };

    window.addEventListener("wheel", handleScroll, { passive: true });
    return () => window.removeEventListener("wheel", handleScroll);
  }, [animating, projects.length]);

  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-gray-100">
      {projects.map((p, i) => {
        const isActive = i === index;
        return (
          <div
            key={i}
            className={`absolute left-0 w-full transition-all duration-1000 ease-in-out ${
              isActive
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-full"
            }`}
            style={{ top: "15vh" }}
          >
            <img
              src={p.image}
              alt={p.title}
              className="mx-auto rounded-3xl shadow-lg max-h-[70vh] object-contain"
            />
            <div className="absolute bottom-16 left-1/2 -translate-x-1/2 text-center text-white bg-black/40 px-6 py-3 rounded-lg max-w-xl">
              <h2 className="text-3xl font-bold">{p.title}</h2>
              <p className="mt-2 text-sm md:text-base">
                {p.minDescription || p.description}
              </p>
              <p className="mt-2 text-xs text-gray-200">
                To‘liq ma’lumot uchun ustiga bosing
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
