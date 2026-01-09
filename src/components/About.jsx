import React from "react";
import { motion } from "framer-motion";
import { Meteors } from "@/components/ui/meteors";

export default function About() {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center px-6 bg-white dark:bg-[#09090b] transition-colors duration-500 overflow-hidden">
      {/* Meteor effekti - Dark modeda yorqinroq ko'rinadi */}
      <Meteors number={20} />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-4xl w-full relative z-10"
      >
        <div className="space-y-6 text-gray-800 dark:text-zinc-300 text-base sm:text-lg leading-relaxed">
          <p className="text-xl sm:text-3xl font-semibold text-black dark:text-white tracking-tight">
            Hammasi bitta savoldan boshlandi:
            <br />
            <span className="italic text-gray-500 dark:text-zinc-500 font-normal">
              “Buni qanday avtomatlashtirish mumkin?”
            </span>
          </p>

          <p>Shu savol meni texnologiya olamiga yetaklab keldi.</p>

          <div className="space-y-3">
            <p className="font-medium text-black dark:text-zinc-100">
              Bugun esa men:
            </p>
            <ul className="space-y-3 pl-2 sm:pl-4 border-l border-gray-100 dark:border-zinc-800">
              <li className="flex items-center gap-3">
                <span className="h-px w-4 bg-blue-500"></span>
                Interfeyslar quraman
              </li>
              <li className="flex items-center gap-3">
                <span className="h-px w-4 bg-blue-500"></span>
                Foydalanuvchi tajribasini (UX) tahlil qilaman
              </li>
              <li className="flex items-center gap-3">
                <span className="h-px w-4 bg-blue-500"></span>
                Kodni jim va samarali ishlashga majbur qilaman
              </li>
            </ul>
          </div>

          <p>
            Men uchun frontend — bu shunchaki dizayn emas. Bu{" "}
            <span className="font-semibold text-black dark:text-white underline decoration-blue-500/50 decoration-2 underline-offset-4">
              tajriba
            </span>
            ,{" "}
            <span className="font-semibold text-black dark:text-white underline decoration-blue-500/50 decoration-2 underline-offset-4">
              tezlik
            </span>{" "}
            va{" "}
            <span className="font-semibold text-black dark:text-white underline decoration-blue-500/50 decoration-2 underline-offset-4">
              aniqlik
            </span>{" "}
            demakdir.
          </p>

          <p className="font-medium text-zinc-900 dark:text-zinc-200">
            Har bir loyiha — yangi savol.
            <br />
            Har bir savol — yangi yechim.
          </p>
        </div>

        {/* Divider - Dark modeda juda nafis ko'rinadi */}
        <div className="my-10 h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-zinc-800 to-transparent" />

        <motion.blockquote
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-8 text-gray-500 dark:text-zinc-500 italic text-sm sm:text-base max-w-lg leading-relaxed border-l-2 border-blue-500 dark:border-blue-500/50 pl-6"
        >
          “Mukammallik — bu qo‘shadigan narsa qolmaganda emas, balki olib
          tashlaydigan narsa qolmaganda erishiladi.”
        </motion.blockquote>
      </motion.div>
    </section>
  );
}
