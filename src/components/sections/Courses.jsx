"use client";

import { motion } from "framer-motion";
import { ArrowRight, Clock, Star, BookOpen } from "lucide-react";
import Link from "next/link";

const courses = [
  {
    title: "BIM Professional Program",
    duration: "6 Months",
    level: "Advanced",
    software: ["Revit", "Navisworks", "AutoCAD"],
    icon: <BookOpen className="w-8 h-8 text-green" />,
  },
  {
    title: "Revit Architecture",
    duration: "2 Months",
    level: "Beginner",
    software: ["Revit"],
    icon: <Star className="w-8 h-8 text-green" />,
  },
  {
    title: "Revit MEP",
    duration: "2 Months",
    level: "Intermediate",
    software: ["Revit MEP"],
    icon: <BookOpen className="w-8 h-8 text-green" />,
  },
  {
    title: "Interior Design & Visualization",
    duration: "4 Months",
    level: "Advanced",
    software: ["3ds Max", "Corona", "V-Ray"],
    icon: <Star className="w-8 h-8 text-green" />,
  },
  {
    title: "SolidWorks & Fusion 360",
    duration: "2 Months",
    level: "Intermediate",
    software: ["SolidWorks", "Fusion 360"],
    icon: <Clock className="w-8 h-8 text-green" />,
  },
  {
    title: "3ds Max + Corona Renderer",
    duration: "2 Months",
    level: "Intermediate",
    software: ["3ds Max", "Corona"],
    icon: <Star className="w-8 h-8 text-green" />,
  },
  {
    title: "SketchUp + Lumion + Photoshop",
    duration: "2 Months",
    level: "Intermediate",
    software: ["SketchUp", "Lumion", "Photoshop"],
    icon: <Star className="w-8 h-8 text-green" />,
  },
  {
    title: "Tekla Structures",
    duration: "2 Months",
    level: "Advanced",
    software: ["Tekla Structures"],
    icon: <BookOpen className="w-8 h-8 text-green" />,
  },
  {
    title: "Blender + After Effects + Premiere Pro",
    duration: "3 Months",
    level: "Intermediate",
    software: ["Blender", "After Effects", "Premiere Pro"],
    icon: <Star className="w-8 h-8 text-green" />,
  },
];

export default function Courses() {
  return (
    <section id="courses" className="py-24 bg-navy relative scroll-mt-24">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-montserrat text-3xl md:text-5xl font-bold text-white mb-4">
              Explore Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-green to-green-light">Premium Courses</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Industry-aligned curriculum designed to make you project-ready from day one.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {courses.map((course, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-8 rounded-2xl border border-white/10 hover:-translate-y-2 transition-all duration-300 group flex flex-col h-full justify-between"
            >
              <div>
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 bg-white/5 rounded-xl border border-white/10 group-hover:border-green/30 transition-colors">
                    {course.icon}
                  </div>
                  <div className="bg-white/10 px-3 py-1 rounded-full text-xs font-semibold text-gray-300">
                    {course.level}
                  </div>
                </div>
                
                {/* Uniform title container so 1-line and 2-line titles align perfectly */}
                <h3 className="font-montserrat text-xl font-bold text-white mb-3 group-hover:text-green transition-colors min-h-[3.5rem] flex items-center">
                  {course.title}
                </h3>
                
                <div className="flex items-center gap-2 text-gray-400 text-sm mb-6">
                  <Clock className="w-4 h-4 text-green" />
                  <span>Duration: {course.duration}</span>
                </div>

                <div className="mb-8">
                  <div className="text-xs text-gray-400 mb-2.5 uppercase tracking-wider font-semibold">Software Covered</div>
                  <div className="min-h-[56px] flex flex-wrap gap-2 content-start">
                    {course.software.map((sw, idx) => (
                      <span key={idx} className="bg-navy-dark text-gray-300 text-xs px-2.5 py-1 rounded border border-white/5">
                        {sw}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Pinned to bottom of card */}
              <button 
                type="button"
                onClick={() => {
                  window.dispatchEvent(new CustomEvent('openEnroll', { detail: { course: course.title } }));
                }}
                className="mt-auto w-full bg-white/5 hover:bg-green text-white font-medium py-3.5 rounded-lg flex items-center justify-center gap-2 transition-all border border-white/10 hover:border-green cursor-pointer shadow-sm hover:shadow-[0_0_15px_rgba(88,176,0,0.4)]"
              >
                Enroll Now <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
