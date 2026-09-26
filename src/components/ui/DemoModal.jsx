"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Play, Volume2, Sparkles, ArrowRight } from "lucide-react";

export default function DemoModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    window.addEventListener("openDemoModal", handleOpen);

    const handleKeyDown = (e) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("openDemoModal", handleOpen);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const close = () => {
    setIsOpen(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/85 backdrop-blur-md"
            onClick={close}
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-4xl bg-navy-dark border border-white/10 rounded-2xl shadow-2xl overflow-hidden glass-card flex flex-col max-h-[92vh]"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-5 border-b border-white/10 shrink-0">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-green animate-pulse" />
                <h3 className="font-montserrat text-lg font-bold text-white">
                  LABS CADD Virtual Classroom & Project Demo
                </h3>
              </div>
              <button 
                onClick={close} 
                className="text-gray-400 hover:text-white p-1 rounded-lg hover:bg-white/5 transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Video / Visual Simulation Player */}
            <div className="relative aspect-video w-full bg-black/60 overflow-hidden flex items-center justify-center">
              <img 
                src="/images/hero.png" 
                alt="BIM Classroom Simulation"
                className="w-full h-full object-cover filter brightness-75" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-dark via-transparent to-black/30 pointer-events-none" />

              {/* Animated HUD Elements */}
              <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/50 backdrop-blur border border-white/10 text-xs text-white">
                <Volume2 className="w-3.5 h-3.5 text-green" />
                <span>Live Revit Session Demo • 1080p 60fps</span>
              </div>

              {/* Center Play Indicator */}
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="relative z-10 w-20 h-20 rounded-full bg-green/90 text-white flex items-center justify-center shadow-[0_0_30px_rgba(88,176,0,0.8)] cursor-pointer"
                onClick={() => setIsPlaying(!isPlaying)}
              >
                <Play className="w-9 h-9 fill-white ml-1" />
              </motion.div>

              {/* Bottom Video Progress Simulation */}
              <div className="absolute bottom-4 left-6 right-6 flex items-center justify-between text-xs text-gray-300">
                <span>04:15 / 15:00</span>
                <div className="flex-1 mx-4 h-1.5 bg-white/20 rounded-full overflow-hidden">
                  <div className="h-full bg-green w-1/3 rounded-full" />
                </div>
                <span>BIM Architecture & MEP Masterclass</span>
              </div>
            </div>

            {/* Demo Footer & Quick Action */}
            <div className="p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-white/10 shrink-0 bg-navy/40">
              <div>
                <h4 className="font-montserrat font-bold text-white text-base flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-green" /> Ready to master these skills?
                </h4>
                <p className="text-gray-400 text-xs mt-1">
                  Join our upcoming batch with live mentorship and 100% practical portfolio projects.
                </p>
              </div>
              <div className="flex items-center gap-3 w-full sm:w-auto">
                <button
                  type="button"
                  onClick={close}
                  className="flex-1 sm:flex-none px-5 py-2.5 rounded-lg border border-white/10 text-gray-300 hover:text-white hover:bg-white/5 text-sm font-medium transition-colors cursor-pointer"
                >
                  Close
                </button>
                <button
                  type="button"
                  onClick={() => {
                    close();
                    window.dispatchEvent(new CustomEvent('openEnroll', { detail: { course: "BIM Professional" } }));
                  }}
                  className="flex-1 sm:flex-none bg-green hover:bg-green-light text-white px-6 py-2.5 rounded-lg text-sm font-medium transition-all shadow-[0_0_15px_rgba(88,176,0,0.4)] flex items-center justify-center gap-2 cursor-pointer"
                >
                  Enroll Now <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
