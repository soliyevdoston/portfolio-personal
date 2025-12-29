import React, { useState } from "react";

export default function AboutGamified() {
  const steps = [
    {
      title: "Salom! Men Dostonbek 😎",
      desc: "Frontend dasturchiman va kodni san’at deb bilaman.",
    },
    {
      title: "Portfolio Sayohati 🚀",
      desc: "Har bir loyiha — kichik hissiyot va yangi tajriba.",
    },
    {
      title: "Texnologiyalar ⚡",
      desc: "HTML, CSS, JS, React, Tailwind, va boshqalar.",
    },
    {
      title: "Yaqin kelajak 🌱",
      desc: "Odamlar hayotini osonlashtiradigan loyihalar yaratish.",
    },
    {
      title: "Endi sizning navbingiz 🎮",
      desc: "Hover va click qiling, har bir step bilan o‘ynang!",
    },
  ];

  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () => {
    setCurrentStep((prev) => (prev + 1) % steps.length);
  };

  const prevStep = () => {
    setCurrentStep((prev) => (prev - 1 + steps.length) % steps.length);
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4 py-24 gap-12">
      <div
        className="bg-white/50 backdrop-blur-xl p-8 rounded-3xl shadow-lg max-w-xl text-center cursor-pointer hover:scale-105 transition-transform"
        onClick={nextStep}
      >
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
          {steps[currentStep].title}
        </h2>
        <p className="text-gray-700 text-base">{steps[currentStep].desc}</p>
      </div>

      {/* Navigation buttons */}
      <div className="flex gap-4">
        <button
          onClick={prevStep}
          className="px-6 py-2 bg-black text-white rounded-full hover:bg-gray-800 transition"
        >
          ⬅ Oldingi
        </button>
        <button
          onClick={nextStep}
          className="px-6 py-2 bg-black text-white rounded-full hover:bg-gray-800 transition"
        >
          Keyingi ➡
        </button>
      </div>

      <p className="text-gray-500 text-sm mt-4 text-center">
        Har bir click bilan yangi step ochiladi. Sahifa bilan o‘ynang va
        tanishing!
      </p>
    </main>
  );
}
