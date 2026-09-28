"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function About() {
  return (
    <section id="about" aria-labelledby="about-heading" className="py-24 bg-navy-dark relative overflow-hidden scroll-mt-24">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 z-0 opacity-5" style={{
        backgroundImage: "linear-gradient(rgba(255, 255, 255, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.5) 1px, transparent 1px)",
        backgroundSize: "40px 40px"
      }} />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 id="about-heading" className="font-montserrat text-4xl md:text-5xl font-bold leading-tight mb-8 text-white">
              Creative Minds.<br />
              <span className="text-gray-500">Strategic Thinkers.</span>
            </h2>

            <div className="w-20 h-1 bg-green mb-8" />

            <p className="text-gray-300 text-lg mb-6 leading-relaxed">
              LABS CADD is an industry-focused BIM & Visualization training platform designed to bridge the gap between academic learning and real-world execution.
            </p>
            <p className="text-gray-400 mb-10 leading-relaxed">
              We empower aspiring architects, interior designers, and engineers with the technical proficiency and creative vision needed to excel in the competitive AEC industry. Our curriculum is built by industry experts who have delivered global projects.
            </p>

            <Link
              href="#courses"
              className="inline-flex items-center gap-2 text-green hover:text-green-light font-medium tracking-wide transition-colors group cursor-pointer"
            >
              Explore Our Training Programs
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Logo Watermark */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15rem] font-bold text-white/5 font-montserrat pointer-events-none select-none z-0">
              LC
            </div>

            <div className="relative z-10 p-4 pb-0 bg-white/5 border border-white/10 rounded-t-xl overflow-hidden glass-card">
              <img
                src="/images/about.png"
                alt="LABS CADD Architectural and BIM Design Training in Tamil Nadu"
                className="w-full h-auto object-cover rounded-t-lg grayscale hover:grayscale-0 transition-all duration-700"
              />
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-navy-dark via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Floating Stat Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="absolute -bottom-6 -left-6 glass-card p-6 rounded-lg border border-white/10 shadow-2xl z-20 flex items-center gap-4"
            >
              <div className="text-4xl font-bold text-green font-montserrat">7+</div>
              <div className="text-sm text-gray-300 font-medium">Years of<br />Excellence</div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
