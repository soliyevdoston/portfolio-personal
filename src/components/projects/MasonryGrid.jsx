// src/components/projects/ProjectsShowcase.jsx
import React from "react";

export default function ProjectsShowcase({ projects }) {
  return (
    <div className="relative w-full py-20 flex flex-wrap justify-center gap-8 px-6 ">
      {projects.map((p, index) => (
        <div
          key={index}
          className="w-80 p-6 rounded-2xl cursor-pointer
                     bg-gray-100 border border-gray-300
                     shadow-lg transform transition-all
                     hover:scale-105 hover:-rotate-1 hover:shadow-2xl"
        >
          {/* Image */}
          {p.image && (
            <img
              src={p.image}
              alt={p.title}
              className="w-full h-48 object-cover rounded-lg mb-4 shadow-md"
            />
          )}

          {/* Title */}
          <h2 className="text-xl font-bold text-gray-900 mb-2">{p.title}</h2>

          {/* Description */}
          <p className="text-gray-700 text-sm leading-relaxed mb-3">
            {p.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-3">
            {p.tags.map((tag, i) => (
              <span
                key={i}
                className="text-xs px-3 py-1 rounded-full bg-gray-200 text-gray-800 shadow-sm"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex gap-3 mt-2">
            {p.github && (
              <a
                href={p.github}
                target="_blank"
                rel="noreferrer"
                className="flex-1 text-center py-2 rounded-lg
                           bg-gray-300 text-gray-900 font-semibold border border-gray-400
                           hover:bg-gray-400 hover:text-gray-100 transition"
              >
                GitHub
              </a>
            )}

            {p.demo && (
              <a
                href={p.demo}
                target="_blank"
                rel="noreferrer"
                className="flex-1 text-center py-2 rounded-lg
                           bg-gray-300 text-gray-900 font-semibold border border-gray-400
                           hover:bg-gray-400 hover:text-gray-100 transition"
              >
                Demo
              </a>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
