"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

export default function LegalModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [type, setType] = useState("privacy");

  useEffect(() => {
    const handleOpen = (e) => {
      setType(e.detail.type);
      setIsOpen(true);
    };
    window.addEventListener("openLegalModal", handleOpen);

    const handleKeyDown = (e) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("openLegalModal", handleOpen);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const close = () => setIsOpen(false);

  const content = {
    privacy: {
      title: "Privacy Policy",
      body: (
        <div className="space-y-4 text-gray-300 text-sm leading-relaxed">
          <p>At LABS CADD, we are committed to protecting your privacy. This Privacy Policy outlines how we collect, use, and safeguard your personal information.</p>
          <h4 className="text-white font-bold text-base mt-6">1. Information Collection</h4>
          <p>We collect information you provide directly to us when enrolling in courses, including your name, email, and phone number.</p>
          <h4 className="text-white font-bold text-base mt-4">2. Use of Information</h4>
          <p>Your information is used solely to provide educational services, process enrollments, and communicate with you regarding your courses.</p>
          <h4 className="text-white font-bold text-base mt-4">3. Data Protection</h4>
          <p>We implement strict security measures to ensure your personal data is protected against unauthorized access. We do not sell or share your data with third parties.</p>
        </div>
      ),
    },
    terms: {
      title: "Terms of Service",
      body: (
        <div className="space-y-4 text-gray-300 text-sm leading-relaxed">
          <p>By accessing and enrolling in LABS CADD courses, you agree to abide by the following terms and conditions.</p>
          <h4 className="text-white font-bold text-base mt-6">1. Course Enrollment</h4>
          <p>Enrollment in our programs grants you a non-exclusive license to access course materials for your personal educational use.</p>
          <h4 className="text-white font-bold text-base mt-4">2. Intellectual Property</h4>
          <p>All training materials, videos, and documentation are the intellectual property of LABS CADD and may not be redistributed, copied, or sold.</p>
          <h4 className="text-white font-bold text-base mt-4">3. Code of Conduct</h4>
          <p>Students are expected to maintain professional behavior during interactive sessions and respect the learning environment.</p>
        </div>
      ),
    }
  };

  const activeContent = content[type];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={close}
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-2xl max-h-[80vh] flex flex-col bg-navy-dark border border-white/10 rounded-2xl shadow-2xl overflow-hidden glass-card"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-white/5 shrink-0">
              <h3 className="font-montserrat text-xl font-bold text-white">{activeContent?.title}</h3>
              <button onClick={close} className="text-gray-400 hover:text-white transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content (Scrollable) */}
            <div className="p-6 overflow-y-auto custom-scrollbar">
              {activeContent?.body}
            </div>
            
            {/* Footer */}
            <div className="p-6 border-t border-white/5 shrink-0 flex justify-end">
              <button
                onClick={close}
                className="bg-white/10 hover:bg-white/20 text-white font-medium py-2 px-6 rounded transition-colors"
              >
                Close
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
