import React from "react";
import profile from "../assets/personal.jpg";
import { Link } from "react-router-dom";
import { FaGithub, FaEnvelope, FaFileAlt } from "react-icons/fa";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import { Highlighter } from "@/components/ui/highlighter";
import { ShimmerButton } from "@/components/ui/shimmer-button";
export default function Main() {
  return (
    <main className="min-h-screen transition-colors duration-500 dark:bg-[#09090b] selection:bg-blue-500/30">
      <div className="max-w-3xl mx-auto pt-24 px-4 sm:px-6">
        {/* Grid fon - Dark modeda xiraroq va ko'kroq tusda */}
        <div className="fixed inset-0 -z-10 bg-[url('/src/assets/grid.svg')] opacity-40 dark:opacity-[0.15] dark:invert"></div>

        {/* Yuqoridagi gradient nur (Glow effect) faqat dark mode uchun */}
        <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-lg h-64 bg-blue-500/10 blur-[120px] -z-10 hidden dark:block"></div>

        {/* Rasm + ism */}
        <div className="flex flex-col items-center text-center">
          <div className="relative">
            <img
              src={profile}
              alt="Dostonbek"
              className="w-32 h-32 sm:w-40 sm:h-40 rounded-full object-cover shadow-2xl border-2 border-transparent dark:border-white/10"
            />
            {/* Dark modeda rasm atrofidagi kichik nur */}
            <div className="absolute inset-0 rounded-full shadow-[0_0_40px_rgba(59,130,246,0.2)] dark:block hidden"></div>
          </div>

          <h1 className="mt-5 text-2xl sm:text-3xl font-semibold text-gray-900 dark:text-zinc-100 tracking-tight">
            Dostonbek Solijonov
          </h1>

          <p className="text-base sm:text-lg text-blue-700 dark:text-blue-400 font-medium mt-1">
            Frontend dasturchi
          </p>

          {/* Icons */}
          <div className="flex gap-4 mt-6">
            {[
              {
                icon: <FaGithub />,
                link: "https://github.com/soliyevdoston",
                label: "GitHub",
              },
              {
                icon: <FaEnvelope />,
                link: "mailto:dostonbeksolijonov.uz@gmail.com",
                label: "Email",
              },
              { icon: <FaFileAlt />, link: "/resume.pdf", label: "Resume" },
            ].map((item, index) => (
              <a
                key={index}
                href={item.link}
                target={item.label !== "Email" ? "_blank" : "_self"}
                rel="noreferrer"
                aria-label={item.label}
                className="
                  p-3 
                  rounded-xl 
                  border 
                  border-gray-200 dark:border-zinc-800
                  bg-white/60 dark:bg-zinc-900/50
                  backdrop-blur-md 
                  text-gray-700 dark:text-zinc-400
                  hover:text-black dark:hover:text-white
                  hover:border-black dark:hover:border-zinc-500
                  hover:scale-110 
                  transition-all duration-300
                  shadow-sm
                "
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Matn */}
        <p className="mt-8 text-[16px] sm:text-[18px] leading-[26px] sm:leading-[28px] text-gray-700 dark:text-zinc-400 text-center max-w-2xl mx-auto">
          Ba’zi{" "}
          <Highlighter action="underline" color="#3b82f6">
            muammolar
          </Highlighter>{" "}
          yillar davomida javobsiz qoladi. Men to‘g‘ri savol va bir nechta qator
          kod bilan hammasini{" "}
          <Highlighter action="highlight" color="rgb(255, 123, 0)">
            o‘zgartirishim
          </Highlighter>{" "}
          mumkin.
        </p>

        {/* BUTTONLAR */}
        <div className="flex flex-col min-[360px]:flex-row items-center justify-center gap-4 mt-10">
          {/* Haqimda tugmasi */}
          {/* Haqimda tugmasi - Shimmer Button versiyasi */}
          <ShimmerButton className="w-full min-[360px]:w-auto ">
            <Link to="/about" className="block w-full h-full text-center">
              Haqimda
            </Link>
          </ShimmerButton>

          {/* Kichik qadamlar tugmasi */}
          <InteractiveHoverButton className="w-full min-[360px]:w-auto">
            <Link to="/projects" className="block w-full text-center">
              Kichik qadamlar
            </Link>
          </InteractiveHoverButton>
        </div>

        {/* Footer */}
        <footer className="text-center text-gray-500 dark:text-zinc-500 text-xs sm:text-sm mt-20 pb-10">
          © 2026 soliyev.uz <br />
          Barcha huquqlar himoyalangan.
        </footer>
      </div>
    </main>
  );
}
