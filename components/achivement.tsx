"use client";

import { motion } from "framer-motion";
import { Trophy, Star, Award, Code, Brain } from "lucide-react";

const achievements = [
  {
    title: "2-Time Smart India Hackathon Winner",
    description: "Winner of internal Smart India Hackathon twice, competing against top college teams.",
    icon: <Trophy className="w-10 h-10 text-yellow-400" />,
  },
  {
    title: "Source Code Competition Winner",
    description: "Secured 1st place in a competitive coding event at my college.",
    icon: <Code className="w-10 h-10 text-green-400" />,
  },
  {
    title: "Javascript intermediate from HackerRank",
    description: "Certified in Javascript intermediate by HackerRank , showcasing expertise in Javascript.",
    icon: <Brain className="w-10 h-10 text-purple-400" />,
  },
  {
    title: "Open Source Contributor",
    description: "Contributed to multiple open-source projects and received recognition from the community.",
    icon: <Star className="w-10 h-10 text-blue-400" />,
  },
  
];

export default function Achievements() {
  return (
    <section id="achievements" className="py-20 px-6 sm:px-10">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl font-bold mb-10 gradient-text"
        >
          Achievements
        </motion.h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="p-6 bg-white/10 backdrop-blur-lg border border-gray-800 rounded-xl shadow-lg shadow-blue-500/10 flex flex-col items-center text-center"
            >
              <div className="mb-4">{achievement.icon}</div>
              <h3 className="text-xl font-semibold text-white">{achievement.title}</h3>
              <p className="text-gray-300 mt-2">{achievement.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

