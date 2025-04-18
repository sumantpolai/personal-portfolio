"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const experiences = [
  {
    title: "Frontend Developer Intern",
    company: "Weldx-it sol. Pvt. Ltd",
    period: "06/2024–07/2024",
    description:
      "Designed and optimized interactive user interfaces using React.js, Next.js and modern JavaScript frameworks. Integrated APIs and ensured responsive design for seamless user experiences.",
  },
  
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 section">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-8 gradient-text">Experience</h2>
        <div className="grid gap-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <motion.div
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0px 10px 30px rgba(0, 153, 255, 0.2)",
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <Card className="bg-black/20 backdrop-blur-md border border-gray-800 transition-all duration-300 hover:border-blue-500">
                  <CardHeader>
                    <CardTitle className="text-xl text-white font-bold">
                      {exp.title}
                    </CardTitle>
                    <div className="text-sm text-gray-400">
                      {exp.company} • {exp.period}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300">{exp.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

