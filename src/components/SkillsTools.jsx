import React from "react";

export default function SkillsTools() {
  return (
    <div className="mt-12 max-w-md mx-auto">
      <h2 className="text-2xl font-semibold mb-6 text-center">
        Konikmalar va vositalar
      </h2>

      {[
        { name: "HTML", level: 90 },
        { name: "CSS", level: 85 },
        { name: "TailwindCSS", level: 80 },
        { name: "JavaScript", level: 75 },
        { name: "React", level: 70 },
        { name: "Git/GitHub", level: 80 },
      ].map((skill) => (
        <div key={skill.name} className="mb-6">
          <div className="flex justify-between mb-2 text-gray-700 font-medium">
            <span>{skill.name}</span>
            <span>{skill.level}%</span>
          </div>
          <div className="w-full bg-gray-300 rounded-full h-4 overflow-hidden shadow-inner">
            <div
              className="h-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-1000"
              style={{ width: `${skill.level}%` }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
