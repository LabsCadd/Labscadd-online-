"use client";

import { motion } from "framer-motion";
import { GraduationCap, Users, Award, Clock } from "lucide-react";

export default function Stats() {
  const stats = [
    {
      icon: <GraduationCap className="w-8 h-8 text-green" />,
      value: "500+",
      label: "Students Trained",
    },
    {
      icon: <Users className="w-8 h-8 text-green" />,
      value: "1-on-1",
      label: "Expert Mentorship",
    },
    {
      icon: <Award className="w-8 h-8 text-green" />,
      value: "100%",
      label: "Practical Training",
    },
    {
      icon: <Clock className="w-8 h-8 text-green" />,
      value: "7+ Years",
      label: "Industry Experience",
    },
  ];

  return (
    <section className="bg-navy-dark border-t border-white/10 py-12 relative z-10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-center gap-5 p-6 glass-card rounded-2xl border border-white/10 hover:-translate-y-1 transition-transform duration-300"
            >
              <div className="p-3 bg-white/5 rounded-full border border-white/10 shrink-0">
                {stat.icon}
              </div>
              <div className="text-left">
                <h3 className="font-montserrat text-xl lg:text-2xl font-bold text-white">{stat.value}</h3>
                <p className="text-gray-400 text-sm mt-0.5">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
