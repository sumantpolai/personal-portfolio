"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button"; // Assuming you have a Button component from Shadcn/UI

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const footerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <footer className="py-10 section bg-black/20 backdrop-blur-md border-t border-gray-800">
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={footerVariants}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto px-4 text-center"
      >
        {/* Social Links */}
        <div className="flex cursor-pointer justify-center gap-6 mb-6">
          <motion.a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, color: "#00bcd4" }}
            transition={{ type: "spring", stiffness: 300 }}
            className="text-gray-300"
          >
            <Github className="w-6 h-6" />
          </motion.a>
          <motion.a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, color: "#00bcd4" }}
            transition={{ type: "spring", stiffness: 300 }}
            className="text-gray-300"
          >
            <Linkedin className="w-6 h-6" />
          </motion.a>
          <motion.a
            href="mailto:bisworanjanpc.334@gmail.com"
            whileHover={{ scale: 1.2, color: "#00bcd4" }}
            transition={{ type: "spring", stiffness: 300 }}
            className="text-gray-300"
          >
            <Mail className="w-6 h-6" />
          </motion.a>
        </div>

        {/* Copyright Notice */}
        <p className="text-gray-400 text-sm mb-4">
          &copy; {new Date().getFullYear()} Sumanta Kumar Polai. All rights reserved.
        </p>

        {/* Back to Top Button */}
        <Button
          onClick={scrollToTop}
          className="hotstar-button text-white px-6 py-2 rounded-lg"
        >
          Back to Top
        </Button>
      </motion.div>
    </footer>
  );
}

