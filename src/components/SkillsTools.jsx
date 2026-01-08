import React from "react";

export default function SkillsToolsCompact() {
  const skills = [
    { name: "HTML", level: 90 },
    { name: "CSS", level: 85 },
    { name: "TailwindCSS", level: 80 },
    { name: "JavaScript", level: 75 },
    { name: "React", level: 70 },
    { name: "Next.js", level: 70 },
    { name: "TypeScript", level: 65 },

    { name: "Git/GitHub", level: 80 },
  ];

  return (
    <main className="min-h-screen  flex flex-col items-center px-4 py-12">
      <h2 className="text-xl sm:text-2xl font-semibold mb-8 text-center text-gray-900">
        Ko‘nikmalar va Vositalar
      </h2>

      <div className="w-full max-w-md flex flex-col gap-3">
        {skills.map((skill) => (
          <div key={skill.name} className="flex flex-col gap-1">
            <div className="flex justify-between text-gray-700 font-medium text-sm">
              <span>{skill.name}</span>
              <span>{skill.level}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden shadow-inner">
              <div
                className="h-3 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transition-all duration-1000"
                style={{ width: `${skill.level}%` }}
              />
            </div>
          </div>
        ))}
      </div>

      <p className="text-gray-500 text-xs mt-8 text-center max-w-xs">
        Har bir skill — sizning loyihangiz uchun kichik, lekin muhim qadam.
      </p>
    </main>
  );
}
