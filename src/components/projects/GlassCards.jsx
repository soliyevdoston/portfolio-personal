// src/components/projects/GlassCards.jsx
import React, { useState, useEffect, useRef } from "react";

export default function GlassCards({ projects }) {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [flipped, setFlipped] = useState(null);
  const intervalRef = useRef();

  const next = () => setIndex((prev) => (prev + 1) % projects.length);
  const prev = () =>
    setIndex((prev) => (prev - 1 + projects.length) % projects.length);

  useEffect(() => {
    if (!isPaused) {
      intervalRef.current = setInterval(next, 4000);
    }
    return () => clearInterval(intervalRef.current);
  }, [isPaused, projects.length]);

  return (
    <div
      className="relative w-full h-screen overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div
        className="flex transition-transform duration-700  max-h-[680px] ease-in-out h-full"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {projects.map((p, i) => (
          <div key={i} className="min-w-full  flex justify-center h-full">
            <div
              className="relative w-full h-full max-w-7xl perspective cursor-pointer"
              onClick={() => setFlipped(flipped === i ? null : i)}
            >
              <div
                className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d ${
                  flipped === i ? "rotate-y-180" : ""
                }`}
              >
                {/* FRONT SIDE */}
                <div className="absolute w-full h-full backface-hidden bg-[#f5f5f7] rounded-3xl shadow-xl border border-gray-200 flex flex-col overflow-hidden">
                  {/* Image */}
                  {/* Image */}
                  <div className="w-full h-[480px] bg-[#f5f5f5] flex items-center justify-center p-8">
                    <div className="bg-white w-[60%] aspect-video rounded-xl overflow-hidden shadow-xl p-4">
                      <img
                        src={p.image}
                        className="w-full h-full object-cover mb-3 rounded-lg"
                      />

                      <p className="text-center font-semibold text-gray-700 mt-3">
                        {p.title}
                      </p>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex flex-col flex-1 justify-end p-5 gap-2">
                    {/* Title */}
                    <h2 className="text-left text-lg md:text-xl font-semibold text-gray-900">
                      {p.title}
                    </h2>

                    {/* Description */}
                    <p className="text-left text-gray-800 text-sm md:text-base leading-tight">
                      {p.minDescription || p.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap justify-start gap-2">
                      {p.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="bg-gray-900 text-white px-3 py-1 rounded-full text-xs md:text-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Buttons (bir qatorda) */}
                    <div className="flex gap-3 mt-3">
                      {/* GitHub Button */}
                      {p.github && (
                        <a
                          href={p.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 bg-white text-black border border-black hover:bg-black hover:text-white transition px-4 py-2 rounded-xl text-sm md:text-base shadow-md font-medium text-center"
                        >
                          GitHub
                        </a>
                      )}

                      {/* Demo o‘rnida TITLE */}
                      {p.demo && (
                        <a
                          href={p.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 bg-gray-900 text-white px-4 py-2 rounded-xl shadow-md text-sm md:text-base font-semibold flex items-center justify-center select-none text-center transition hover:scale-105"
                        >
                          {p.title}
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                {/* Back Side */}
                {/* Back Side */}
                <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-white/25 backdrop-blur-lg rounded-3xl shadow-2xl p-6 flex flex-col justify-start">
                  {/* Top row: Title va Years */}
                  <div className="flex justify-between items-center mb-4">
                    {/* Title */}
                    <h2 className="text-left text-2xl font-bold text-gray-900">
                      {p.title}
                    </h2>

                    {/* Years */}
                    <p className="text-right text-gray-600 text-sm">
                      {p.startYear} – {p.endYear}
                    </p>
                  </div>

                  {/* Description (title va years tagida) */}
                  <p className="text-left text-gray-700 text-base leading-relaxed">
                    {p.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prev}
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 p-6 rounded-full shadow-lg z-10"
      >
        {"<"}
      </button>
      <button
        onClick={next}
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 p-6 rounded-full shadow-lg z-10"
      >
        {">"}
      </button>

      <style jsx>{`
        .perspective {
          perspective: 1200px;
        }
        .transform-style-preserve-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
      `}</style>
    </div>
  );
}
