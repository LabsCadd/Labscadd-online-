"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, PlayCircle, CheckCircle2, Award, Sparkles } from "lucide-react";

export default function Hero() {
  const highlights = [
    "Live Interactive Classes",
    "Real Projects",
    "Expert Trainer",
    "Placement Support",
  ];

  return (
    <section
      aria-label="LABS CADD — CAD and BIM Training Institute in Tamil Nadu"
      className="relative min-h-screen flex items-center pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-navy-dark"
    >
      {/* Background Image / Overlay */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center md:bg-right transition-all duration-1000"
          style={{ backgroundImage: "url('/images/hero.png')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-dark via-navy-dark/95 md:via-navy-dark/80 to-navy-dark/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-dark via-transparent to-navy-dark/60" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-7 max-w-2xl"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border-white/10 mb-6 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-green animate-pulse" />
            <span className="text-green font-medium text-xs md:text-sm tracking-wide uppercase">
              CAD &amp; BIM Training in Tamil Nadu
            </span>
          </div>
          
          <h1 className="font-montserrat text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6 text-white tracking-tight">
            LEARN. <span className="text-transparent bg-clip-text bg-gradient-to-r from-green to-green-light">PRACTICE.</span>
            <br /> BUILD YOUR FUTURE.
          </h1>
          
          <p className="text-gray-300 text-base sm:text-lg md:text-xl mb-8 max-w-xl leading-relaxed font-light">
            Industry-focused virtual training in BIM, Interior Design & Visualization. Transform your career with expert-led real-world projects.
          </p>

          <div className="flex flex-wrap items-center gap-4 mb-10">
            <Link 
              href="#courses"
              className="bg-green hover:bg-green-light text-white px-7 py-3.5 sm:px-8 sm:py-4 rounded-lg font-medium flex items-center gap-2 transition-all hover:shadow-[0_0_20px_rgba(88,176,0,0.6)] cursor-pointer"
            >
              Explore Courses <ArrowRight className="w-5 h-5" />
            </Link>
            <button 
              type="button"
              onClick={() => window.dispatchEvent(new CustomEvent('openDemoModal'))}
              className="glass hover:bg-white/10 text-white px-7 py-3.5 sm:px-8 sm:py-4 rounded-lg font-medium flex items-center gap-2 transition-all cursor-pointer"
            >
              <PlayCircle className="w-5 h-5 text-green" /> Watch Demo
            </button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 gap-3.5 pt-2 border-t border-white/10">
            {highlights.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + (index * 0.1) }}
                className="flex items-center gap-2.5 text-gray-300"
              >
                <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-green shrink-0" />
                <span className="text-xs sm:text-sm font-medium">{item}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right Floating Showcase Cards */}
        <div className="lg:col-span-5 relative hidden md:flex flex-col items-end gap-6 justify-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="glass-card p-6 rounded-2xl border border-white/10 max-w-sm w-full backdrop-blur-xl shadow-2xl hover:-translate-y-1 transition-transform"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-green/20 border border-green/30 flex items-center justify-center text-green">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">BIM & Revit Certified</h4>
                  <p className="text-xs text-gray-400">Industry Accredited Curriculum</p>
                </div>
              </div>
              <span className="px-2.5 py-1 rounded-full bg-green/10 text-green text-[11px] font-semibold">
                Active
              </span>
            </div>
            <p className="text-xs text-gray-300 leading-relaxed">
              Hands-on training with industry-standard workflows in Autodesk Revit, Navisworks, 3ds Max & Lumion.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            onClick={() => window.dispatchEvent(new CustomEvent('openDemoModal'))}
            className="glass-card p-5 rounded-2xl border border-white/10 max-w-xs w-full backdrop-blur-xl shadow-2xl cursor-pointer hover:border-green/40 transition-all group mr-6"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-green flex items-center justify-center text-white shadow-[0_0_15px_rgba(88,176,0,0.5)] group-hover:scale-110 transition-transform">
                <PlayCircle className="w-6 h-6" />
              </div>
              <div>
                <div className="flex items-center gap-1.5 text-green text-xs font-semibold uppercase tracking-wider">
                  <Sparkles className="w-3.5 h-3.5" /> Watch Preview
                </div>
                <h4 className="text-sm font-bold text-white group-hover:text-green transition-colors">
                  Interactive Class Demo
                </h4>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
