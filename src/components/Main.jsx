// src/components/Main.jsx
import React from "react";
import profile from "../assets/personal.jpeg"; // O'z rasmiingni qo'y
import { Link } from "react-router-dom";

export default function Main() {
  return (
    <main className="max-w-3xl mx-auto pt-24 px-6">
      {/* Grid fon */}
      <div className="fixed inset-0 -z-10 bg-[url('/src/assets/grid.svg')] opacity-40"></div>

      {/* Rasm + ism */}
      <div className="flex flex-col items-center text-center">
        <img
          src={profile}
          alt="Dostonbek"
          className="w-40 h-40 rounded-full object-cover shadow"
        />

        <h1 className="mt-6 text-3xl font-semibold text-gray-900">
          Dostonbek Solijonov
        </h1>

        <p className="text-lg text-blue-700 font-medium mt-1">
          Frontend dasturchi
        </p>

        {/* Icons */}
        <div className="flex gap-4 mt-4 text-xl">
          <a className="hover:text-black transition" href="#">
            📘
          </a>
          <a className="hover:text-black transition" href="#">
            💻
          </a>
          <a className="hover:text-black transition" href="#">
            📁
          </a>
        </div>
      </div>

      {/* Matn */}
      <p className="mt-6 text-[17px] leading-[26px] text-gray-700 text-center">
        Men kod yozishni nafaqat ish deb bilaman, balki{" "}
        <span className="bg-yellow-300 px-1 rounded">
          fikrlarimni hayotga aylantirish
        </span>{" "}
        san’ati sifatida qabul qilaman. Har bir loyiha –{" "}
        <span className="underline decoration-blue-400">
          odamlar hayotini yengillashtirishga
        </span>{" "}
        qaratilgan kichik qadamdir.
      </p>

      {/* Buttonlar */}
      <div className="flex items-center justify-center gap-4 mt-8">
        <a
          href="#"
          className="px-6 py-3 bg-black text-white rounded-full shadow hover:bg-gray-800 transition"
        >
          Haqimda
        </a>

        <Link
          to="/skills"
          className="px-6 py-3 border border-black rounded-full hover:bg-black hover:text-white transition"
        >
          Ko'nikmalar Va Vositalar
        </Link>
      </div>

      {/* Footer */}
      <footer className="text-center text-gray-500 text-sm mt-16 pb-10">
        © 2025 soliyev.uz
      </footer>
    </main>
  );
}
