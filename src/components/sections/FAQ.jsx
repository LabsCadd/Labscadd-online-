"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What is BIM?",
    answer:
      "BIM (Building Information Modelling) is a digital process that creates intelligent, data-rich 3D models of buildings. Unlike traditional CAD drawings, BIM models carry information about geometry, materials, quantities, scheduling, and performance — enabling engineers, architects, and contractors to collaborate more efficiently throughout a project's lifecycle.",
  },
  {
    question: "What is the difference between CAD and BIM?",
    answer:
      "CAD (Computer-Aided Design) primarily produces 2D drawings and 3D geometry, while BIM (Building Information Modelling) creates intelligent models that contain data about materials, costs, schedules, and structural properties. BIM enables multi-disciplinary collaboration across architects, civil engineers, and MEP teams within a shared model environment.",
  },
  {
    question: "Which BIM software should a civil engineer learn?",
    answer:
      "Civil engineers building a BIM career should start with Autodesk Revit for structural or architectural modelling, learn Navisworks for BIM coordination and clash detection, and develop proficiency in AutoCAD for 2D documentation. LABS CADD's BIM Professional Program covers all of these tools in a structured sequence.",
  },
  {
    question: "Where can I learn Revit in Tamil Nadu?",
    answer:
      "LABS CADD offers 100% live interactive virtual training in Revit Architecture and Revit MEP across Tamil Nadu. Students and engineering professionals from Chennai, Coimbatore, Trichy, Madurai, Salem, and other cities attend our live virtual batches with real-time screen sharing and direct mentor guidance.",
  },
  {
    question: "What is Revit MEP?",
    answer:
      "Revit MEP is Autodesk's BIM software designed for Mechanical, Electrical, and Plumbing (MEP) engineering. It allows MEP engineers to design, document, and coordinate HVAC systems, electrical layouts, and plumbing networks within an integrated BIM environment — reducing coordination errors before construction.",
  },
  {
    question: "How can I become a BIM Engineer?",
    answer:
      "To become a BIM Engineer, you should learn industry-standard software such as Revit, Navisworks, and AutoCAD, understand BIM workflows and standards, and build a portfolio of real BIM projects. LABS CADD's BIM Professional Program is specifically designed to guide you through this career path with hands-on project-based training.",
  },
  {
    question: "What software should an architecture student learn?",
    answer:
      "Architecture students benefit from learning Revit Architecture for BIM modelling, SketchUp for conceptual 3D design, Lumion or V-Ray for photorealistic renders, and AutoCAD for construction drawings. LABS CADD offers structured courses in each of these tools, individually or as combined programs.",
  },
  {
    question: "What is clash detection in BIM?",
    answer:
      "Clash detection identifies conflicts between different building systems — such as a mechanical duct passing through a structural beam — within a BIM model before construction begins. Tools like Navisworks automate this process, preventing costly on-site errors and rework.",
  },
  {
    question: "What is LOD in BIM?",
    answer:
      "LOD (Level of Development or Level of Detail) defines how complete and reliable a BIM element's geometry and data are at different project stages. LOD ranges from LOD 100 (conceptual mass) to LOD 500 (as-built, verified). Understanding LOD is essential for BIM professionals coordinating multi-discipline models.",
  },
  {
    question: "Which software is used for architectural visualization?",
    answer:
      "Architectural visualization professionals commonly use 3ds Max, V-Ray, Corona Renderer, Lumion, Blender, and SketchUp to create photorealistic renders and walkthroughs. LABS CADD offers dedicated courses in 3ds Max with Corona/V-Ray, SketchUp with Lumion, and Blender for 3D animation and rendering.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section
      id="faq"
      className="py-24 bg-navy relative scroll-mt-24"
      aria-labelledby="faq-heading"
    >
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass border-white/10 mb-4 text-xs text-green font-semibold uppercase tracking-wider">
              Common Questions
            </div>
            <h2
              id="faq-heading"
              className="font-montserrat text-3xl md:text-5xl font-bold text-white mb-4"
            >
              Frequently Asked{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green to-green-light">
                Questions
              </span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Answers to the most common questions about CAD, BIM, and our
              training programs.
            </p>
          </motion.div>
        </div>

        <div className="max-w-3xl mx-auto flex flex-col gap-3">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <div
                className={`glass-card rounded-xl border transition-all duration-300 ${
                  openIndex === index
                    ? "border-green/30 shadow-[0_0_20px_rgba(88,176,0,0.1)]"
                    : "border-white/10"
                }`}
              >
                <button
                  type="button"
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                  className="w-full flex items-center justify-between gap-4 p-5 md:p-6 text-left cursor-pointer"
                  aria-expanded={openIndex === index}
                >
                  <span className="font-medium text-white text-sm md:text-base leading-snug">
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="shrink-0 text-green"
                  >
                    <ChevronDown className="w-5 h-5" />
                  </motion.div>
                </button>
                <AnimatePresence initial={false}>
                  {openIndex === index && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="text-gray-400 text-sm md:text-base leading-relaxed px-5 md:px-6 pb-5 md:pb-6">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
