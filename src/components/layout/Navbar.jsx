"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "#about" },
  { name: "Courses", href: "#courses" },
  { name: "Student Works", href: "#portfolio" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "glass py-4" : "bg-transparent py-6"
        }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="w-12 h-12 rounded-full overflow-hidden shrink-0 border-2 border-green/40">
            <Image
              src="/images/logo.jpeg"
              alt="LabsCadd Logo"
              width={48}
              height={48}
              className="w-full h-full object-cover"
              priority
            />
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-gray-300 hover:text-green transition-colors font-medium text-sm tracking-wide"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Enroll Button & Mobile Menu Toggle */}
        <div className="flex items-center gap-4">
          <Link
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.dispatchEvent(new CustomEvent('openEnroll'));
            }}
            className="hidden lg:inline-flex bg-green hover:bg-green-light text-white px-6 py-2.5 rounded font-medium transition-all hover:shadow-[0_0_15px_rgba(88,176,0,0.5)]"
          >
            Enroll Now
          </Link>

          <button
            className="lg:hidden text-white"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/60 z-40 lg:hidden"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed top-0 right-0 bottom-0 w-3/4 max-w-sm bg-navy-dark z-50 border-l border-white/10 p-6 flex flex-col lg:hidden"
            >
              <div className="flex justify-end mb-8">
                <button onClick={() => setIsMobileMenuOpen(false)} className="text-white">
                  <X className="w-6 h-6" />
                </button>
              </div>
              <nav className="flex flex-col gap-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-xl text-gray-300 hover:text-green font-medium transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}
                <Link
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    setIsMobileMenuOpen(false);
                    window.dispatchEvent(new CustomEvent('openEnroll'));
                  }}
                  className="mt-4 bg-green hover:bg-green-light text-white text-center px-6 py-3 rounded font-medium transition-all"
                >
                  Enroll Now
                </Link>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
