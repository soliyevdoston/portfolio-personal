import React from "react";
import profile from "../assets/personal.jpeg";
import { Link } from "react-router-dom";
import { FaGithub, FaEnvelope, FaFileAlt } from "react-icons/fa";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import { Highlighter } from "@/components/ui/highlighter";
export default function Main() {
  return (
    <main className="max-w-3xl mx-auto pt-24 px-4 sm:px-6">
      {/* Grid fon */}
      <div className="fixed inset-0 -z-10 bg-[url('/src/assets/grid.svg')] opacity-40"></div>

      {/* Rasm + ism */}
      <div className="flex flex-col items-center text-center">
        <img
          src={profile}
          alt="Dostonbek"
          className="w-32 h-32 sm:w-40 sm:h-40 rounded-full object-cover shadow"
        />

        <h1 className="mt-5 text-2xl sm:text-3xl font-semibold text-gray-900">
          Dostonbek Solijonov
        </h1>

        <p className="text-base sm:text-lg text-blue-700 font-medium mt-1">
          Frontend dasturchi
        </p>

        {/* Icons */}
        <div className="flex gap-4 mt-4">
          {/* GitHub */}
          <a
            href="https://github.com/soliyevdoston"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="
      p-3 
      rounded-xl 
      border 
      border-gray-700 
      bg-white/60 
      backdrop-blur-md 
      text-gray-800 
      text-xl
      hover:text-black 
      hover:border-black 
      hover:scale-110 
      transition-all
    "
          >
            <FaGithub />
          </a>

          {/* Email */}
          <a
            href="mailto:solijonovd97@gmail.com"
            aria-label="Email"
            className="
      p-3 
      rounded-xl 
      border 
      border-gray-700 
      bg-white/60 
      backdrop-blur-md 
      text-gray-800 
      text-xl
      hover:text-black 
      hover:border-black 
      hover:scale-110 
      transition-all
    "
          >
            <FaEnvelope />
          </a>

          {/* Resume */}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            aria-label="Resume"
            className="
      p-3 
      rounded-xl 
      border 
      border-gray-700 
      bg-white/60 
      backdrop-blur-md 
      text-gray-800 
      text-xl
      hover:text-black 
      hover:border-black 
      hover:scale-110 
      transition-all
    "
          >
            <FaFileAlt />
          </a>
        </div>
      </div>

      {/* Matn */}
      <p className="mt-6 text-[15px] sm:text-[17px] leading-[24px] sm:leading-[26px] text-gray-700 text-center">
        Ba’zi{" "}
        <Highlighter action="underline" color="#fb0606">
          {" "}
          muammolar{" "}
        </Highlighter>{" "}
        yillar davomida javobsiz qoladi. Men to‘g‘ri savol va bir nechta qator
        kod bilan hammasini
        <Highlighter action="highlight" color="rgb(235, 102, 35)">
          o‘zgartirishim{" "}
        </Highlighter>
        mumkin.
      </p>

      {/* BUTTONLAR — MOBILE OPTIMIZED */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mt-8">
        <Link
          to="/about"
          className="
            px-5 py-2.5
            text-sm
            bg-black text-white
            rounded-full
            shadow
            hover:bg-gray-800
            transition
            w-full sm:w-auto
            text-center
          "
        >
          Haqimda
        </Link>
        <InteractiveHoverButton>
          <Link to="/projects">Kichik qadamlar</Link>
        </InteractiveHoverButton>
      </div>

      {/* Footer */}
      <footer className="text-center text-gray-500 text-xs sm:text-sm mt-16 pb-10">
        © 2025 soliyev.uz
      </footer>
    </main>
  );
}
