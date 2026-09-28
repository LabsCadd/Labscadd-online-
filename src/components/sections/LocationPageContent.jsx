"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ChevronRight, CheckCircle2, Monitor, Laptop, Calendar, MapPin } from "lucide-react";

export default function LocationPageContent({ location, cityName, courses }) {
  const handleEnroll = () => {
    window.dispatchEvent(new CustomEvent("openEnroll"));
  };

  const virtualFeatures = [
    {
      icon: <Monitor className="w-6 h-6 text-green" />,
      title: "100% Live Interactive Virtual Training",
      description: `Join live interactive sessions from ${cityName} or anywhere in Tamil Nadu. Experience real-time screen sharing, live instruction, and immediate doubt-clearing sessions.`,
    },
    {
      icon: <Laptop className="w-6 h-6 text-green" />,
      title: "Hands-On AEC Project Work",
      description: `Work on real commercial and residential drawings, 3D models, and BIM coordination workflows with direct mentor evaluation and feedback.`,
    },
    {
      icon: <Calendar className="w-6 h-6 text-green" />,
      title: "Flexible Batch Schedules",
      description: `Convenient morning, evening, and weekend batches designed specifically to accommodate college students and working engineers in ${cityName}.`,
    },
  ];

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
            <span className="text-white font-medium">{cityName}</span>
          </nav>

          <div className="flex items-center gap-3 mb-4">
            <MapPin className="w-6 h-6 text-green" />
            <span className="text-green font-semibold text-sm uppercase tracking-wider">Virtual Training • {cityName}, Tamil Nadu</span>
          </div>
          <h1 className="font-montserrat text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Virtual CAD &amp; BIM Training in{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green to-green-light">
              {cityName}
            </span>
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl leading-relaxed mb-8">
            LABS CADD offers 100% live interactive virtual training in CAD, BIM, and 3D visualization for students, engineers, and architects in {cityName}, Tamil Nadu. Learn industry-standard tools like Revit, AutoCAD, 3ds Max, SketchUp, and Tekla through practical project-focused online batches.
          </p>
          <button
            type="button"
            onClick={handleEnroll}
            className="bg-green hover:bg-green-light text-white px-7 py-3.5 rounded-lg font-medium flex items-center gap-2 transition-all hover:shadow-[0_0_20px_rgba(88,176,0,0.6)] cursor-pointer w-fit"
          >
            Enquire for Virtual Batch <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      {/* Training Overview */}
      <section className="py-16 bg-navy">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-montserrat text-2xl md:text-3xl font-bold text-white mb-4">
                Virtual CAD Training for {cityName}
              </h2>
              <div className="w-12 h-1 bg-green mb-6" />
              <p className="text-gray-300 leading-relaxed mb-4">
                Computer-Aided Design (CAD) is an essential skill for engineering and architectural careers. Through LABS CADD's virtual live training, students and professionals in {cityName} gain practical mastery of AutoCAD for 2D drafting, documentation, and 3D modelling tools like SolidWorks and Fusion 360.
              </p>
              <p className="text-gray-400 leading-relaxed">
                All training is delivered online in real-time, giving you direct interaction with instructors, practical drafting exercises, and continuous guidance without traveling.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="font-montserrat text-2xl md:text-3xl font-bold text-white mb-4">
                Virtual BIM Training for {cityName}
              </h2>
              <div className="w-12 h-1 bg-green mb-6" />
              <p className="text-gray-300 leading-relaxed mb-4">
                Building Information Modelling (BIM) is transforming architecture, civil engineering, and construction across Tamil Nadu and global AEC markets. LABS CADD provides comprehensive virtual training covering Autodesk Revit for architectural and MEP modelling, Navisworks for coordination, and Tekla for structural BIM.
              </p>
              <p className="text-gray-400 leading-relaxed">
                Enrol in our live virtual programs from {cityName} and graduate with a portfolio of real BIM projects ready for industry employment.
              </p>
            </motion.div>
          </div>

          {/* Virtual Features */}
          <h2 className="font-montserrat text-2xl md:text-3xl font-bold text-white mb-8">
            How Our Virtual Training Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {virtualFeatures.map((feat, i) => (
              <div key={i} className="glass-card p-6 rounded-2xl border border-white/10">
                <div className="p-3 bg-white/5 rounded-xl border border-white/10 w-fit mb-4">
                  {feat.icon}
                </div>
                <h3 className="font-montserrat font-bold text-white mb-3">{feat.title}</h3>
                <p className="text-gray-400 leading-relaxed text-sm">{feat.description}</p>
              </div>
            ))}
          </div>

          {/* Courses Available */}
          <h2 className="font-montserrat text-2xl md:text-3xl font-bold text-white mb-8">
            Virtual Courses Available for {cityName} Students
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {courses.slice(0, 6).map((course) => (
              <Link
                key={course.slug}
                href={`/courses/${course.slug}`}
                className="glass-card p-6 rounded-2xl border border-white/10 hover:border-green/30 hover:-translate-y-1 transition-all group"
              >
                <h3 className="font-montserrat font-bold text-white mb-2 group-hover:text-green transition-colors">
                  {course.title}
                </h3>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {course.software.map((sw) => (
                    <span key={sw} className="bg-navy-dark text-gray-300 text-xs px-2 py-0.5 rounded border border-white/10">
                      {sw}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-1 text-green text-sm font-medium">
                  View Syllabus <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>

          {/* Who Can Join */}
          <div className="glass-card p-8 rounded-2xl border border-white/10 mb-16">
            <h2 className="font-montserrat text-2xl font-bold text-white mb-6">
              Who Can Join Our Virtual Batches in {cityName}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "Civil engineering students and graduates",
                "Architecture students and working architects",
                "Mechanical engineering students",
                "MEP engineers and HVAC professionals",
                "Interior designers and design students",
                "BIM professionals and coordinators seeking upskilling",
                "Working engineers wanting evening or weekend batches",
                "Fresh graduates aiming for CAD/BIM careers",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-gray-300">
                  <CheckCircle2 className="w-4 h-4 text-green shrink-0" />
                  <span className="text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* FAQ */}
          <h2 className="font-montserrat text-2xl md:text-3xl font-bold text-white mb-6">
            Frequently Asked Questions — {cityName}
          </h2>
          <div className="flex flex-col gap-4 max-w-3xl">
            {[
              {
                q: `Are the courses available in virtual mode for students in ${cityName}?`,
                a: `Yes. All LABS CADD courses are delivered 100% in live interactive virtual mode for students in ${cityName} and throughout Tamil Nadu. You participate via live video sessions with real-time screen sharing and hands-on guidance.`,
              },
              {
                q: `How do live online interactive sessions work?`,
                a: `Sessions are held live with professional instructors. You share your screen, work through real CAD drawings and 3D BIM models, ask questions in real time, and receive personalized feedback.`,
              },
              {
                q: `Which virtual CAD or BIM course should I start with?`,
                a: `If you need a drafting foundation, AutoCAD 2D & 3D is the recommended starting point. For architects and civil engineers aiming for BIM careers, Revit Architecture or the BIM Professional Program is the ideal choice.`,
              },
            ].map((faq, i) => (
              <div key={i} className="glass-card rounded-xl border border-white/10 p-6">
                <h3 className="font-medium text-white mb-3">{faq.q}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-navy-dark">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <h2 className="font-montserrat text-3xl md:text-4xl font-bold text-white mb-4">
            Start Your CAD &amp; BIM Journey from{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green to-green-light">
              {cityName}
            </span>
          </h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            Enrol in LABS CADD's live virtual training batches and build job-ready skills from {cityName}, Tamil Nadu.
          </p>
          <button
            type="button"
            onClick={handleEnroll}
            className="bg-green hover:bg-green-light text-white px-8 py-4 rounded-lg font-medium inline-flex items-center gap-2 transition-all hover:shadow-[0_0_25px_rgba(88,176,0,0.6)] cursor-pointer"
          >
            Enquire Now <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>
    </>
  );
}
