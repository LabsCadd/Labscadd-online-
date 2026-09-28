"use client";

import { motion } from "framer-motion";
import { ArrowRight, Clock, Star, BookOpen } from "lucide-react";
import Link from "next/link";

const courses = [
  {
    title: "BIM Professional Program",
    slug: "bim-professional-program",
    duration: "6 Months",
    level: "Advanced",
    software: ["Revit", "Navisworks", "AutoCAD"],
    icon: <BookOpen className="w-8 h-8 text-green" />,
  },
  {
    title: "Revit Architecture",
    slug: "revit-architecture",
    duration: "2 Months",
    level: "Beginner",
    software: ["Revit"],
    icon: <Star className="w-8 h-8 text-green" />,
  },
  {
    title: "Revit MEP",
    slug: "revit-mep",
    duration: "2 Months",
    level: "Intermediate",
    software: ["Revit MEP"],
    icon: <BookOpen className="w-8 h-8 text-green" />,
  },
  {
    title: "AutoCAD 2D & 3D Drafting",
    slug: "autocad",
    duration: "2 Months",
    level: "Beginner",
    software: ["AutoCAD"],
    icon: <BookOpen className="w-8 h-8 text-green" />,
  },
  {
    title: "Interior Design & Visualization",
    slug: "interior-design-visualization",
    duration: "4 Months",
    level: "Advanced",
    software: ["3ds Max", "Corona", "V-Ray"],
    icon: <Star className="w-8 h-8 text-green" />,
  },
  {
    title: "SolidWorks & Fusion 360",
    slug: "solidworks-fusion-360",
    duration: "2 Months",
    level: "Intermediate",
    software: ["SolidWorks", "Fusion 360"],
    icon: <Clock className="w-8 h-8 text-green" />,
  },
  {
    title: "3ds Max + Corona Renderer",
    slug: "3ds-max",
    duration: "2 Months",
    level: "Intermediate",
    software: ["3ds Max", "Corona"],
    icon: <Star className="w-8 h-8 text-green" />,
  },
  {
    title: "SketchUp + Lumion + Photoshop",
    slug: "sketchup-lumion",
    duration: "2 Months",
    level: "Intermediate",
    software: ["SketchUp", "Lumion", "Photoshop"],
    icon: <Star className="w-8 h-8 text-green" />,
  },
  {
    title: "Tekla Structures",
    slug: "tekla-structures",
    duration: "2 Months",
    level: "Advanced",
    software: ["Tekla Structures"],
    icon: <BookOpen className="w-8 h-8 text-green" />,
  },
  {
    title: "Blender + After Effects + Premiere Pro",
    slug: "blender",
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
              transition={{ duration: 0.5, delay: index * 0.08 }}
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
                
                {/* Uniform title container linking to course page */}
                <h3 className="font-montserrat text-xl font-bold text-white mb-3 min-h-[3.5rem] flex items-center">
                  <Link href={`/courses/${course.slug}`} className="hover:text-green transition-colors">
                    {course.title}
                  </Link>
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

              {/* Actions pinned to bottom of card */}
              <div className="mt-auto flex items-center gap-3">
                <Link
                  href={`/courses/${course.slug}`}
                  className="flex-1 bg-white/5 hover:bg-white/10 text-gray-200 hover:text-white text-center text-sm font-medium py-3 rounded-lg border border-white/10 hover:border-green/40 transition-all"
                >
                  Syllabus
                </Link>
                <button 
                  type="button"
                  onClick={() => {
                    window.dispatchEvent(new CustomEvent('openEnroll', { detail: { course: course.title } }));
                  }}
                  className="flex-1 bg-green hover:bg-green-light text-white text-sm font-medium py-3 rounded-lg flex items-center justify-center gap-1.5 transition-all shadow-sm hover:shadow-[0_0_15px_rgba(88,176,0,0.4)] cursor-pointer"
                >
                  Enroll <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/courses"
            className="inline-flex items-center gap-2 text-green hover:text-green-light font-medium text-base hover:underline"
          >
            Explore all CAD &amp; BIM courses &amp; syllabuses <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
