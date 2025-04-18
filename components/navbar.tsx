"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Frame, Menu, X } from "lucide-react";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Prevent scrolling when sidebar is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  return (
    <>
      {/* Navbar */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/20 w-full"
      >
        <nav className="w-full px-4 md:px-8 lg:px-12 h-16 flex items-center justify-between max-w-6xl mx-auto">
          <Link href="#" className="flex items-center gap-2">
            <Frame className="w-8 h-8" />
            <span className="font-bold text-xl">BR</span>
          </Link>

          {/* Desktop Navbar */}
          <ul className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className="nav-link text-gray-300 hover:text-transparent bg-clip-text transition-all duration-300 hover:bg-gradient-to-r from-blue-400 to-pink-500"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>

          {/* Hamburger Icon for Mobile */}
          <button
            className="md:hidden p-2 rounded-lg text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </nav>
      </motion.header>

      {/* Mobile Sidebar Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Blurred Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/40 backdrop-blur-md z-40"
              onClick={() => setIsOpen(false)}
            />

            {/* Sidebar */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 100, damping: 20 }}
              className="fixed right-0 top-0 h-full w-64 bg-gray-900/90 backdrop-blur-xl p-6 z-50 shadow-lg"
            >
              {/* Close Button */}
              <button
                className="absolute top-4 right-4 text-white"
                onClick={() => setIsOpen(false)}
              >
                <X className="w-6 h-6" />
              </button>

              {/* Sidebar Menu Items */}
              <ul className="mt-12 space-y-6">
                {navItems.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="block text-xl text-gray-300 hover:text-transparent bg-clip-text transition-all duration-300 hover:bg-gradient-to-r from-blue-400 to-pink-500"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

