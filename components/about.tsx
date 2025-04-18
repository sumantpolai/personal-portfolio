"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React.js",
  "Next.js",
  "Node.js",
  "Express.js",
  "MongoDB",
  "MySQL",
  "postgresql",
  "TypeScript",
  "Tailwind CSS",
  "Bootstrap",
  "Git",
  "GitHub",
  "Firebase",
  "DSA",
  "Linux Ubuntu",
  "Figma",
];

export default function About() {
  return (
    <section id="about" className="py-20 section">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-4xl font-bold mb-8 gradient-text">About Me</h2>
        <p className="text-gray-300 mb-8">
          I am currently pursuing B.Tech in Computer Science Engineering at Gandhi Institute of Excellent Technocrats,
          Bhubaneswar with a CGPA of 8.1/10. I am passionate about creating web applications that solve real-world
          problems and enhance user experiences.
        </p>
        <h3 className="text-2xl font-bold mb-4">Technical Skills</h3>
        <div className="flex flex-wrap gap-3">
          {skills.map((skill) => (
            <Badge
              key={skill}
              className="text-lg px-4 py-2 rounded-lg transition-all duration-300 bg-gray-800 border border-gray-700 text-white 
                        hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-blue-400 to-pink-500 
                        transform hover:scale-105"
            >
              {skill}
            </Badge>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

