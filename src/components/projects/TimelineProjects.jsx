// src/components/projects/TimelineProjects.jsx
import React from "react";

export default function TimelineProjects({ projects }) {
  return (
    <div className="relative w-full py-20">
      {/* Vertical Line */}
      <div className="absolute left-1/2 top-0 h-full w-[4px] bg-white/20 rounded-full shadow-[0_0_15px_rgba(255,255,255,0.3)]"></div>

      <div className="flex flex-col gap-20">
        {projects.map((p, index) => (
          <div
            key={index}
            className={`w-full flex items-center gap-10 px-6 ${
              index % 2 === 0 ? "flex-row" : "flex-row-reverse"
            }`}
          >
            {/* Line Dot */}
            <div className="relative">
              <div className="absolute left-1/2 -translate-x-1/2 -top-3 w-6 h-6 bg-white/40 border-white border rounded-full shadow-[0_0_25px_white]"></div>
            </div>

            {/* Card */}
            <div className="w-[48%] bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 shadow-xl hover:scale-[1.03] transition-all cursor-pointer">
              {/* Image */}
              {p.image && (
                <img
                  src={p.image}
                  className="w-full h-full object-cover rounded-xl mb-4 shadow-lg"
                  alt={p.title}
                />
              )}

              {/* Title + Year */}
              {/* Title + Year */}
              <div className="flex items-center justify-between mb-2">
                <h2 className="text-xl font-bold text-black drop-shadow-md">
                  {p.title}
                </h2>
                <span className="text-sm text-black tracking-wide">
                  {p.startYear} — {p.endYear}
                </span>
              </div>

              {/* Description */}
              <p className="text-gray text-sm leading-relaxed mb-3">
                {p.minDescription}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {p.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="text-xs px-3 py-1 rounded-full bg-black/40 text-white"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex gap-3 mt-4">
                {p.github && (
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 text-center bg-white text-black font-semibold py-2 rounded-xl border border-white hover:bg-black hover:text-white transition"
                  >
                    GitHub
                  </a>
                )}

                {p.demo && (
                  <a
                    href={p.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 text-center bg-black text-white font-semibold py-2 rounded-xl hover:bg-white hover:text-black border border-white transition"
                  >
                    Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
