"use client";

import { motion } from "framer-motion";
import { Github, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center section"
    >
      <div className="text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl mb-4">I AM</h2>
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-6xl sm:text-4xl font-bold gradient-text  mb-6"
        >
          Sumanta Kumar Polai
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
        >
          A passionate Full Stack Developer with expertise in the MERN stack,
          focused on building scalable and user-friendly web applications.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex items-center justify-center gap-4"
        >
          {/* Download CV Button */}
          <a
            href="https://drive.google.com/file/d/11PBGEi9jfLxMSEzdlZcuvD3XR50d0E_t/view?usp=drivesdk "
            download="SUMANTA_KUMAR_Resume.pdf"
          >
            <Button className="gap-2 bg-gradient-to-r from-blue-500 to-pink-500 text-white px-6 py-3 rounded-lg shadow-lg transition-all duration-300 hover:scale-105">
              <Download className="w-5 h-5" />
              Download CV
            </Button>
          </a>

          {/* GitHub Button */}
          <a
            href="https://github.com/sumantpolai"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="gap-2 bg-gradient-to-r from-blue-500 to-pink-500 text-white px-6 py-3 rounded-lg shadow-lg transition-all duration-300 hover:scale-105">
              <Github className="w-5 h-5" />
              GitHub
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
}

