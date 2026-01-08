import React from "react";
import { motion } from "framer-motion";
import { Meteors } from "@/components/ui/meteors";
export default function About() {
  return (
    <section className="relative h-[500px] w-full overflow-hidden min-h-screen w-full flex items-center justify-center  px-6">
      <Meteors />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-4xl w-full"
      >
        {/* MAIN TEXT */}
        <div className="space-y-6 text-gray-800 text-base sm:text-lg leading-relaxed">
          <p className="text-xl sm:text-2xl font-medium text-black">
            Hammasi bitta savoldan boshlandi:
            <br />
            <span className="italic text-gray-600">
              “Buni qanday avtomatlashtirish mumkin?”
            </span>
          </p>

          <p>Shu savol meni texnologiyaga olib kirdi.</p>

          <p>Bugun esa men:</p>

          <ul className="space-y-2 pl-4">
            <li>— interfeyslar quraman</li>
            <li>— foydalanuvchi harakatini o‘ylayman</li>
            <li>— kodni jim ishlashga majbur qilaman</li>
          </ul>

          <p>
            Men uchun frontend — bu shunchaki dizayn emas. Bu{" "}
            <span className="font-medium">tajriba</span>,{" "}
            <span className="font-medium">tezlik</span> va{" "}
            <span className="font-medium">aniqlik</span>.
          </p>

          <p>
            Har bir loyiha — yangi savol.
            <br />
            Har bir savol — yangi yechim.
          </p>
        </div>

        {/* DIVIDER */}
        <div className="my-10 h-px bg-gray-200" />

        {/* FOOTER QUOTE */}
        <motion.blockquote
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-gray-600 italic text-sm sm:text-base"
        >
          “Kod — bu vosita. Natija — muhim. Foydalanuvchi — markazda.”
        </motion.blockquote>

        {/* SIGNATURE */}
        <p className="mt-6 text-sm text-gray-500">— Dostonbek Solijonov</p>
      </motion.div>
    </section>
  );
}
