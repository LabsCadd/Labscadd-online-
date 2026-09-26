"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Maximize2, X, ExternalLink, CheckCircle } from "lucide-react";

const allProjects = [
  {
    id: 1,
    title: "Luxury Modern Living Room",
    category: "Interior",
    tag: "Interior Design & Visualization",
    software: ["3ds Max", "Corona", "Photoshop"],
    image: "/images/portfolio1.png",
    description: "Photorealistic architectural rendering of a high-end luxury apartment living room, focusing on material shaders, lighting balance, and composition.",
    colSpan: "md:col-span-2",
    rowSpan: "md:row-span-2"
  },
  {
    id: 2,
    title: "Commercial High-rise BIM",
    category: "BIM",
    tag: "BIM Coordination",
    software: ["Revit", "Navisworks", "AutoCAD"],
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200",
    description: "Complete BIM coordination model for a 32-story commercial tower, resolving clash detections and automating schedule generation.",
    colSpan: "md:col-span-1",
    rowSpan: "md:row-span-1"
  },
  {
    id: 3,
    title: "Residential Architecture Villa",
    category: "Architecture",
    tag: "Revit Architecture",
    software: ["Revit", "Lumion", "Photoshop"],
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=1200",
    description: "Contemporary villa architectural documentation, detailed construction drawings, and exterior day/night Lumion renders.",
    colSpan: "md:col-span-1",
    rowSpan: "md:row-span-1"
  },
  {
    id: 4,
    title: "MEP Systems & HVAC Design",
    category: "BIM",
    tag: "Revit MEP",
    software: ["Revit MEP", "Navisworks"],
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=1200",
    description: "Intricate mechanical, electrical, and plumbing engineering layout model with automated load calculations and duct routing.",
    colSpan: "md:col-span-2",
    rowSpan: "md:row-span-1"
  },
  {
    id: 5,
    title: "Parametric Facade Concept",
    category: "Architecture",
    tag: "Computational Design",
    software: ["Rhino", "Grasshopper", "Revit"],
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=1200",
    description: "Complex parametric architectural facade model designed with algorithmic workflows and solar radiation panel optimization.",
    colSpan: "md:col-span-1",
    rowSpan: "md:row-span-1"
  },
  {
    id: 6,
    title: "Penthouse Master Bedroom",
    category: "Interior",
    tag: "Interior Rendering",
    software: ["3ds Max", "V-Ray", "Photoshop"],
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1200",
    description: "Custom lighting, bespoke joinery, and hyper-realistic texture mapping for luxury residential master suite.",
    colSpan: "md:col-span-2",
    rowSpan: "md:row-span-1"
  }
];

export default function Portfolio() {
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [activeProject, setActiveProject] = useState(null);

  const filters = ["All", "BIM", "Interior", "Architecture"];

  const filteredProjects = selectedFilter === "All" 
    ? allProjects 
    : allProjects.filter((p) => p.category === selectedFilter);

  return (
    <section id="portfolio" className="py-24 bg-navy-dark relative border-t border-white/5 scroll-mt-24">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass border-white/10 mb-3 text-xs text-green font-semibold uppercase tracking-wider">
              Student Showcase
            </div>
            <h2 className="font-montserrat text-3xl md:text-5xl font-bold text-white mb-4">
              Real Student <span className="text-green">Projects</span>
            </h2>
            <p className="text-gray-400 text-base md:text-lg">
              Explore actual BIM models, structural designs, and interior visualizations produced by our graduates.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex flex-wrap gap-2.5 bg-white/5 p-1.5 rounded-xl border border-white/10">
              {filters.map((filter) => (
                <button 
                  key={filter}
                  onClick={() => setSelectedFilter(filter)}
                  className={`px-5 py-2 rounded-lg text-xs md:text-sm font-medium transition-all cursor-pointer ${
                    selectedFilter === filter 
                      ? "bg-green text-white shadow-[0_0_15px_rgba(88,176,0,0.5)] font-semibold" 
                      : "text-gray-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Project Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-3 auto-rows-[280px] md:auto-rows-[300px] gap-6"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                onClick={() => setActiveProject(project)}
                className={`relative group rounded-2xl overflow-hidden cursor-pointer border border-white/10 shadow-lg ${
                  selectedFilter === "All" ? `${project.colSpan} ${project.rowSpan}` : "md:col-span-1 md:row-span-1"
                }`}
              >
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url('${project.image}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-dark via-navy-dark/40 to-transparent opacity-85 group-hover:opacity-95 transition-opacity duration-300" />
                
                <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end">
                  <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-green text-xs font-bold uppercase tracking-wider bg-green/10 px-2.5 py-0.5 rounded-full border border-green/20">
                        {project.tag}
                      </span>
                    </div>
                    <h3 className="font-montserrat text-lg md:text-2xl font-bold text-white mb-2 leading-snug group-hover:text-green transition-colors">
                      {project.title}
                    </h3>
                    <div className="flex flex-wrap gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {project.software.map((sw, i) => (
                        <span key={i} className="text-[10px] bg-white/10 text-gray-200 px-2 py-0.5 rounded">
                          {sw}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="absolute top-5 right-5 w-9 h-9 rounded-full bg-white/10 backdrop-blur border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  <Maximize2 className="w-4 h-4" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Project Lightbox Modal */}
      <AnimatePresence>
        {activeProject && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/85 backdrop-blur-md"
              onClick={() => setActiveProject(null)}
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-4xl bg-navy-dark border border-white/10 rounded-2xl shadow-2xl overflow-hidden glass-card flex flex-col max-h-[90vh]"
            >
              <div className="relative aspect-video w-full bg-black/60 overflow-hidden">
                <img 
                  src={activeProject.image} 
                  alt={activeProject.title}
                  className="w-full h-full object-cover"
                />
                <button
                  type="button"
                  onClick={() => setActiveProject(null)}
                  className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/60 backdrop-blur border border-white/20 text-white flex items-center justify-center hover:bg-black/80 transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-6 md:p-8 overflow-y-auto">
                <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                  <div>
                    <span className="text-green text-xs font-bold uppercase tracking-wider bg-green/10 px-3 py-1 rounded-full border border-green/20">
                      {activeProject.tag}
                    </span>
                    <h3 className="font-montserrat text-2xl md:text-3xl font-bold text-white mt-2">
                      {activeProject.title}
                    </h3>
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      setActiveProject(null);
                      window.dispatchEvent(new CustomEvent('openEnroll', { detail: { course: activeProject.title } }));
                    }}
                    className="bg-green hover:bg-green-light text-white px-6 py-2.5 rounded-lg text-sm font-medium transition-all shadow-[0_0_15px_rgba(88,176,0,0.5)] flex items-center gap-2 cursor-pointer"
                  >
                    Enroll in this Track <ExternalLink className="w-4 h-4" />
                  </button>
                </div>

                <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-6">
                  {activeProject.description}
                </p>

                <div className="border-t border-white/10 pt-4">
                  <h4 className="text-xs uppercase tracking-wider font-semibold text-gray-400 mb-2">Software Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {activeProject.software.map((sw, i) => (
                      <span key={i} className="text-xs bg-white/10 text-white px-3 py-1 rounded-md border border-white/10">
                        {sw}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
