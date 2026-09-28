"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Clock, Users, CheckCircle2, BookOpen, ChevronRight } from "lucide-react";
import { SITE_URL } from "@/lib/seo-config";

/** Per-course extended content — learning outcomes, target audience copy, overview */
const courseExtended = {
  "bim-professional-program": {
    intro: "The BIM Professional Program at LABS CADD is a comprehensive, industry-aligned course covering Building Information Modelling from fundamentals to advanced coordination workflows. You will work with Autodesk Revit for architectural and structural modelling, Navisworks for BIM coordination and clash detection, and AutoCAD for 2D documentation.",
    overview: "This program is designed for graduates and working professionals who want to build a serious career in BIM. The curriculum follows industry workflows used in commercial, residential, and infrastructure projects globally.",
    outcomes: [
      "Create and manage intelligent BIM models in Autodesk Revit",
      "Produce construction-ready documentation and schedules",
      "Perform clash detection and coordination using Navisworks",
      "Understand LOD (Level of Development) standards",
      "Collaborate in a multi-discipline BIM environment",
      "Export models for quantity surveying and cost estimation",
    ],
    faqs: [
      { q: "Who is this program for?", a: "This program is ideal for civil engineering graduates, architecture graduates, MEP engineers, and working professionals seeking to transition into BIM roles." },
      { q: "Do I need prior CAD experience?", a: "Basic AutoCAD knowledge is helpful but not mandatory. We cover AutoCAD fundamentals as part of the program." },
      { q: "Is this training available online?", a: "Yes. LABS CADD offers both online and in-person training batches for the BIM Professional Program." },
    ],
  },
  "revit-architecture": {
    intro: "The Revit Architecture course at LABS CADD teaches you to create accurate, data-rich architectural BIM models using Autodesk Revit. You will progress from setting up a project to producing complete construction documentation, sections, elevations, and schedules.",
    overview: "This course covers the complete Revit Architecture workflow — from conceptual massing and site setup through to detailed construction drawings. You will work on real residential and commercial project exercises throughout the training.",
    outcomes: [
      "Set up and manage Revit Architecture projects",
      "Create parametric walls, floors, roofs, and openings",
      "Produce floor plans, elevations, sections, and 3D views",
      "Generate schedules, legends, and material takeoffs",
      "Coordinate architectural models with structural and MEP disciplines",
      "Understand BIM standards relevant to architectural practice",
    ],
    faqs: [
      { q: "Is Revit Architecture suitable for architecture students?", a: "Absolutely. Revit Architecture is the industry-standard BIM tool for architects and architecture students, and proficiency in it is increasingly required by AEC employers." },
      { q: "What is the difference between Revit and AutoCAD?", a: "AutoCAD is a 2D and 3D drafting tool, while Revit is a full BIM platform that creates intelligent, data-rich building models used for design, documentation, and coordination." },
      { q: "Will I receive a certificate?", a: "LABS CADD provides a course completion certificate upon finishing the training program." },
    ],
  },
  "revit-mep": {
    intro: "The Revit MEP course at LABS CADD covers mechanical, electrical, and plumbing system design and documentation using Autodesk Revit. This training is specifically designed for MEP engineers, HVAC engineers, electrical engineers, and plumbing designers who want to transition to BIM workflows.",
    overview: "You will learn to model and document HVAC duct systems, electrical conduit and panel layouts, and plumbing pipe networks in a coordinated BIM environment. The course includes real-world project exercises and BIM coordination workflows.",
    outcomes: [
      "Model HVAC duct and equipment systems in Revit MEP",
      "Design electrical layouts, panels, and conduit routing",
      "Create plumbing pipe systems and fixture schedules",
      "Run automated load calculations and duct sizing",
      "Coordinate MEP models with architectural and structural disciplines",
      "Detect and resolve clashes using Navisworks",
    ],
    faqs: [
      { q: "Who should take the Revit MEP course?", a: "MEP engineers, HVAC designers, electrical engineers, plumbing engineers, and mechanical engineering graduates who want to work in BIM environments." },
      { q: "Is Revit MEP different from Revit Architecture?", a: "Yes. Revit MEP is configured for mechanical, electrical, and plumbing engineering systems, while Revit Architecture focuses on architectural elements. Both are part of the Autodesk Revit family." },
      { q: "Can I learn both Revit Architecture and Revit MEP?", a: "Yes. LABS CADD offers both courses, and our BIM Professional Program includes a coordinated multi-discipline approach." },
    ],
  },
  "interior-design-visualization": {
    intro: "The Interior Design & Visualization course at LABS CADD teaches you to create photorealistic interior renders and design presentations using 3ds Max, Corona Renderer, and V-Ray. This program is designed for interior designers, architecture students, and design professionals who want to build a competitive visualization portfolio.",
    overview: "You will master lighting, material shaders, camera composition, and post-production techniques to produce studio-quality interior renders. The course includes real residential and commercial interior project workflows.",
    outcomes: [
      "Model and furnish interior scenes in 3ds Max",
      "Apply physically-based materials and textures",
      "Set up realistic lighting with natural and artificial light sources",
      "Render high-resolution images using Corona Renderer and V-Ray",
      "Perform post-processing and compositing in Photoshop",
      "Build a professional visualization portfolio",
    ],
    faqs: [
      { q: "Do I need to know AutoCAD before this course?", a: "Basic 3D understanding is helpful but not required. The course starts from 3ds Max fundamentals." },
      { q: "What is the difference between Corona and V-Ray?", a: "Both are production-quality rendering engines for 3ds Max. Corona is known for its simpler workflow while V-Ray offers more advanced control. This course covers both." },
      { q: "Can this course help me get freelance projects?", a: "Yes. Photorealistic interior visualization is in high demand from architects, real estate developers, and interior design firms. A strong portfolio from this course can help you secure freelance work." },
    ],
  },
  "3ds-max": {
    intro: "The 3ds Max course at LABS CADD focuses on architectural visualization and 3D rendering using 3ds Max and Corona Renderer. You will learn to create professional-grade still renders and animated walkthroughs for architectural and interior projects.",
    overview: "Starting from 3ds Max interface fundamentals, you will progress through modelling, lighting, materials, rendering, and camera animation. Real architectural exterior and interior projects are used throughout the training.",
    outcomes: [
      "Navigate and use the 3ds Max interface efficiently",
      "Model architectural elements and furniture",
      "Apply Corona materials and physically accurate lighting",
      "Render photorealistic exterior and interior scenes",
      "Create animated architectural walkthroughs",
      "Output production-ready renders for client presentations",
    ],
    faqs: [
      { q: "Is 3ds Max used in the architecture industry?", a: "Yes. 3ds Max is one of the most widely used tools for architectural visualization globally, especially for high-end real estate, hospitality, and commercial projects." },
      { q: "What renderer is taught in this course?", a: "The primary renderer taught is Corona Renderer. V-Ray basics are also introduced." },
      { q: "Can I take this course as a beginner?", a: "Yes. The course starts from the fundamentals of 3ds Max and does not require prior 3D experience." },
    ],
  },
  "sketchup-lumion": {
    intro: "The SketchUp, Lumion, and Photoshop course at LABS CADD teaches rapid 3D modelling and high-quality architectural visualizations. SketchUp is widely used for quick conceptual 3D models, while Lumion produces stunning real-time renders and walkthroughs.",
    overview: "This course covers SketchUp 3D modelling, scene setup, Lumion rendering and animation, and Photoshop post-production. It is ideal for architects and designers who need to produce compelling visualizations quickly.",
    outcomes: [
      "Build accurate 3D architectural models in SketchUp",
      "Import SketchUp models into Lumion for rendering",
      "Apply Lumion materials, vegetation, and atmospheric effects",
      "Produce photorealistic day and night exterior renders",
      "Create architectural walkthrough animations in Lumion",
      "Compose and enhance renders in Photoshop",
    ],
    faqs: [
      { q: "Is SketchUp easier to learn than Revit?", a: "Yes. SketchUp has a gentler learning curve than Revit and is popular for rapid conceptual design. Revit is more suited for detailed BIM documentation." },
      { q: "Can I render walkthroughs in Lumion?", a: "Yes. Lumion is excellent for real-time rendered walkthroughs and fly-through animations, making it popular for client presentations." },
      { q: "Is this course suitable for architects?", a: "Absolutely. SketchUp and Lumion are widely used by architectural practices and interior design firms for client presentations." },
    ],
  },
  "solidworks-fusion-360": {
    intro: "The SolidWorks and Fusion 360 course at LABS CADD provides professional CAD training for product design, mechanical engineering, and manufacturing. Both tools are industry standards for 3D CAD modelling, simulation, and manufacturing documentation.",
    overview: "The course covers parametric solid modelling, assembly design, engineering drawings, and basic simulation. Real product and component design exercises are used throughout to build practical skills.",
    outcomes: [
      "Create parametric part and assembly models in SolidWorks and Fusion 360",
      "Produce engineering drawings with GD&T annotations",
      "Apply constraints and relations for parametric design intent",
      "Understand basic FEA simulation workflows",
      "Prepare models for CNC machining and manufacturing",
      "Manage design revisions using product data management principles",
    ],
    faqs: [
      { q: "What is the difference between SolidWorks and Fusion 360?", a: "SolidWorks is a professional desktop CAD application widely used in manufacturing industries. Fusion 360 is a cloud-based tool from Autodesk that combines CAD, CAM, and CAE. Both are valuable for mechanical engineers." },
      { q: "Who should take this course?", a: "Mechanical engineers, product designers, manufacturing professionals, and engineering students who want to develop professional 3D CAD skills." },
      { q: "Is this course relevant for job placement?", a: "Yes. SolidWorks and Fusion 360 proficiency is required by manufacturing, automotive, consumer product, and engineering firms." },
    ],
  },
  "blender": {
    intro: "The Blender, After Effects, and Premiere Pro course at LABS CADD teaches 3D modelling, animation, visual effects, and video production. Blender is a free, open-source 3D software widely used for architectural visualization, product animation, and motion graphics.",
    overview: "You will learn Blender's modelling, rigging, animation, and rendering (Cycles and EEVEE) workflows, then integrate with After Effects for compositing and motion graphics, and Premiere Pro for final video production.",
    outcomes: [
      "Model and texture objects in Blender",
      "Set up lighting and cameras for architectural and product visualization",
      "Animate objects and cameras for walkthrough animations",
      "Render using Blender Cycles and EEVEE",
      "Create motion graphics and titles in After Effects",
      "Edit and produce final videos in Premiere Pro",
    ],
    faqs: [
      { q: "Is Blender free to use?", a: "Yes. Blender is completely free and open-source, making it accessible to students and freelancers without software costs." },
      { q: "Can Blender be used for architectural visualization?", a: "Yes. Blender with its Cycles renderer is increasingly used for high-quality architectural visualization and is a cost-effective alternative to 3ds Max." },
      { q: "Do I need a powerful computer for Blender?", a: "A dedicated GPU is recommended for rendering. However, Blender's EEVEE real-time renderer works on most modern computers." },
    ],
  },
  "autocad": {
    intro: "The AutoCAD course at LABS CADD provides comprehensive training in 2D drafting and 3D modelling using Autodesk AutoCAD. AutoCAD is the worldwide industry standard for creating engineering drawings, architectural layouts, and technical documentation across construction and manufacturing.",
    overview: "You will master drafting commands, layers, dimensioning styles, blocks, external references (Xrefs), layout plotting, and isometric/3D drafting. Real-world architectural, structural, and mechanical drawings are practiced throughout the course.",
    outcomes: [
      "Master precision 2D drafting tools and geometric construction",
      "Create professional architectural floor plans, elevations, and sections",
      "Manage layers, line weights, styles, and annotation standards",
      "Work with dynamic blocks, attributes, and external references (Xrefs)",
      "Prepare layout sheets, viewports, scale settings, and PDF plotting",
      "Understand 3D solid modelling basics and isometric drafting in AutoCAD",
    ],
    faqs: [
      { q: "Is AutoCAD necessary before learning Revit or BIM?", a: "While not strictly mandatory, understanding AutoCAD gives you a strong foundation in drafting conventions, projection techniques, and drawing standards that makes learning Revit and BIM much faster." },
      { q: "How long does it take to learn AutoCAD at LABS CADD?", a: "Our structured AutoCAD course takes 2 months with hands-on practice sessions and real drawing assignments." },
      { q: "Can I learn AutoCAD online?", a: "Yes. LABS CADD provides live interactive online batches as well as classroom training at our Trichy centre." },
    ],
  },
  "tekla-structures": {
    intro: "The Tekla Structures course at LABS CADD covers structural BIM modelling and detailing for steel and concrete construction. Tekla Structures is the industry-leading software for structural engineers and steel fabricators involved in complex construction projects.",
    overview: "This course covers structural modelling, connection design, reinforcement detailing, drawing production, and model export for fabrication. The curriculum is designed for structural engineers and detailers in the construction industry.",
    outcomes: [
      "Create accurate structural steel and concrete BIM models in Tekla",
      "Design and apply standard structural connections",
      "Produce reinforcement layouts for concrete elements",
      "Generate shop drawings, assembly drawings, and BOMs",
      "Export models for CNC fabrication and BIM coordination",
      "Understand structural BIM workflow in multi-discipline projects",
    ],
    faqs: [
      { q: "Who is this course for?", a: "Structural engineers, civil engineering graduates, steel detailers, and fabrication professionals who work on construction projects." },
      { q: "Is Tekla used in large construction projects?", a: "Yes. Tekla Structures is used globally on major infrastructure, commercial, and industrial construction projects for its precision and interoperability." },
      { q: "Is prior structural knowledge required?", a: "Basic structural engineering knowledge is helpful. You should understand structural elements such as beams, columns, slabs, and foundations." },
    ],
  },
};

export default function CoursePageContent({ course, relatedCourses }) {
  const extended = courseExtended[course.slug] || {
    intro: course.metaDescription,
    overview: "This course provides hands-on training with industry-standard software and real-world project workflows.",
    outcomes: ["Gain practical software proficiency", "Build a project portfolio", "Understand industry workflows"],
    faqs: [],
  };

  const handleEnroll = () => {
    window.dispatchEvent(new CustomEvent("openEnroll", { detail: { course: course.title } }));
  };

  return (
    <>
      {/* Hero */}
      <section className="pt-36 pb-16 bg-navy-dark relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.5) 1px,transparent 1px)", backgroundSize: "40px 40px" }} />
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-gray-400 mb-8 flex-wrap">
            <Link href="/" className="hover:text-green transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/courses" className="hover:text-green transition-colors">Courses</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white font-medium">{course.title}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
            <div className="lg:col-span-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green/10 border border-green/20 mb-4 text-xs text-green font-semibold uppercase tracking-wider">
                {course.level}
              </div>
              <h1 className="font-montserrat text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                {course.title}
              </h1>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                {extended.intro}
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 text-gray-400 text-sm">
                  <Clock className="w-4 h-4 text-green" />
                  <span>Duration: <strong className="text-white">{course.duration}</strong></span>
                </div>
                <div className="flex items-center gap-2 text-gray-400 text-sm">
                  <Users className="w-4 h-4 text-green" />
                  <span>Level: <strong className="text-white">{course.level}</strong></span>
                </div>
              </div>
            </div>

            {/* Enroll Card */}
            <div className="glass-card p-8 rounded-2xl border border-white/10">
              <h3 className="font-montserrat font-bold text-xl text-white mb-4">Enrol in This Course</h3>
              <div className="mb-4 flex flex-wrap gap-2">
                {course.software.map((sw) => (
                  <span key={sw} className="bg-navy-dark text-gray-300 text-xs px-2.5 py-1 rounded border border-white/10">
                    {sw}
                  </span>
                ))}
              </div>
              <p className="text-gray-400 text-sm mb-6">{course.targetAudience}</p>
              <button
                type="button"
                onClick={handleEnroll}
                className="w-full bg-green hover:bg-green-light text-white font-medium py-3.5 rounded-lg flex items-center justify-center gap-2 transition-all hover:shadow-[0_0_20px_rgba(88,176,0,0.6)] cursor-pointer"
              >
                Enquire &amp; Enrol <ArrowRight className="w-4 h-4" />
              </button>
              <p className="text-gray-500 text-xs text-center mt-3">
                Our advisor will contact you within 24 hours.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Course Overview */}
      <section className="py-16 bg-navy">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-montserrat text-2xl md:text-3xl font-bold text-white mb-4">
                Course Overview
              </h2>
              <div className="w-12 h-1 bg-green mb-6" />
              <p className="text-gray-300 leading-relaxed">{extended.overview}</p>

              <div className="mt-8">
                <h3 className="font-montserrat font-bold text-lg text-white mb-4">Tools &amp; Software</h3>
                <div className="flex flex-wrap gap-2">
                  {course.software.map((sw) => (
                    <span key={sw} className="bg-navy-dark text-gray-300 text-sm px-3 py-1.5 rounded border border-white/10">
                      {sw}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-8">
                <h3 className="font-montserrat font-bold text-lg text-white mb-4">Who Should Join</h3>
                <p className="text-gray-400 leading-relaxed">{course.targetAudience}</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="font-montserrat text-2xl md:text-3xl font-bold text-white mb-4">
                What You Will Learn
              </h2>
              <div className="w-12 h-1 bg-green mb-6" />
              <ul className="flex flex-col gap-4">
                {extended.outcomes.map((outcome, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-300">
                    <CheckCircle2 className="w-5 h-5 text-green shrink-0 mt-0.5" />
                    <span>{outcome}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      {extended.faqs.length > 0 && (
        <section className="py-16 bg-navy-dark">
          <div className="container mx-auto px-6 md:px-12 max-w-3xl">
            <h2 className="font-montserrat text-2xl md:text-3xl font-bold text-white mb-8">
              Frequently Asked Questions
            </h2>
            <div className="flex flex-col gap-4">
              {extended.faqs.map((faq, i) => (
                <div key={i} className="glass-card rounded-xl border border-white/10 p-6">
                  <h3 className="font-medium text-white mb-3">{faq.q}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Related Courses */}
      {relatedCourses.length > 0 && (
        <section className="py-16 bg-navy">
          <div className="container mx-auto px-6 md:px-12">
            <h2 className="font-montserrat text-2xl md:text-3xl font-bold text-white mb-8">
              Related Courses
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedCourses.map((rc) => (
                <Link
                  key={rc.slug}
                  href={`/courses/${rc.slug}`}
                  className="glass-card p-6 rounded-2xl border border-white/10 hover:border-green/30 hover:-translate-y-1 transition-all group"
                >
                  <div className="p-2.5 bg-white/5 rounded-xl border border-white/10 w-fit mb-4 group-hover:border-green/30 transition-colors">
                    <BookOpen className="w-6 h-6 text-green" />
                  </div>
                  <h3 className="font-montserrat font-bold text-white mb-2 group-hover:text-green transition-colors">
                    {rc.title}
                  </h3>
                  <div className="flex items-center gap-2 text-gray-400 text-xs mb-3">
                    <Clock className="w-3.5 h-3.5 text-green" />
                    <span>{rc.duration}</span>
                  </div>
                  <div className="flex items-center gap-1 text-green text-sm font-medium">
                    View Course <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-16 bg-navy-dark">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <h2 className="font-montserrat text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Start Your{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green to-green-light">
              CAD &amp; BIM Career?
            </span>
          </h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            Enrol in LABS CADD's {course.title} course and build the skills that the industry demands. Batches are available online across Tamil Nadu.
          </p>
          <button
            type="button"
            onClick={handleEnroll}
            className="bg-green hover:bg-green-light text-white px-8 py-4 rounded-lg font-medium flex items-center gap-2 mx-auto transition-all hover:shadow-[0_0_25px_rgba(88,176,0,0.6)] cursor-pointer"
          >
            Enquire Now <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>
    </>
  );
}
