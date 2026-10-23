import React from "react";
import { motion } from "framer-motion";
import { Clock, Rocket, CheckCircle2, ArrowRight } from "lucide-react";

const CoreIdea = () => {
  return (
    <section id="core-idea" className="py-24 md:py-32 bg-[#060606] relative overflow-hidden border-t border-white/5">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[radial-gradient(circle_at_center,_rgba(255,90,0,0.06)_0%,_transparent_65%)] pointer-events-none -z-10" />

      <div className="container mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 bg-secondary/10 border border-secondary/25 rounded-full px-4 py-1.5 mb-6"
          >
            <span className="text-xs font-bold uppercase tracking-widest text-secondary" style={{ fontFamily: "Outfit, sans-serif" }}>
              02. 30 TO 90 — THE CORE IDEA
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight mb-6"
            style={{ fontFamily: "Outfit, sans-serif" }}
          >
            30 Minutes to Know Who You Are.{" "}
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-secondary to-orange-400">
              90 Days to Define Where You Go.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="text-gray-400 text-base sm:text-lg leading-relaxed"
          >
            Marketing fails when agencies sell packages before diagnosing problems. We flipped the sequence.
          </motion.p>
        </div>

        {/* The Two Pillars: 30 Minutes vs 90 Days */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
          {/* Card 1: The 30 Minutes */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-8 sm:p-10 rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.03] to-transparent hover:border-secondary/30 transition-all duration-300 relative group"
          >
            <div className="w-14 h-14 rounded-2xl bg-secondary/10 border border-secondary/25 flex items-center justify-center text-secondary mb-6 group-hover:scale-105 transition-transform">
              <Clock size={28} />
            </div>

            <div className="inline-block px-3 py-1 rounded-full bg-secondary/10 text-secondary text-xs font-bold uppercase tracking-wider mb-3">
              Phase 01 • Diagnosis
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4" style={{ fontFamily: "Outfit, sans-serif" }}>
              The 30 Minutes
            </h3>

            <p className="text-gray-300 text-base leading-relaxed mb-6 font-normal">
              The 30 minutes are not about selling a service. They are about understanding who you are as a business — where you are now, what you are doing, what is working, what is not, and what your business actually needs.
            </p>

            <div className="space-y-3 pt-6 border-t border-white/10 text-sm text-gray-400">
              <div className="flex items-start space-x-3">
                <CheckCircle2 size={18} className="text-secondary shrink-0 mt-0.5" />
                <span>Zero pitch. Zero generic agency slide decks.</span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle2 size={18} className="text-secondary shrink-0 mt-0.5" />
                <span>An honest examination of your audience and current presence.</span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle2 size={18} className="text-secondary shrink-0 mt-0.5" />
                <span>Uncovering what is truly holding customer decisions back.</span>
              </div>
            </div>
          </motion.div>

          {/* Card 2: The 90 Days */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="p-8 sm:p-10 rounded-3xl border border-secondary/30 bg-gradient-to-b from-secondary/[0.08] via-white/[0.02] to-transparent hover:border-secondary/50 transition-all duration-300 relative group"
          >
            <div className="w-14 h-14 rounded-2xl bg-secondary text-white flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(255,90,0,0.4)] group-hover:scale-105 transition-transform">
              <Rocket size={28} />
            </div>

            <div className="inline-block px-3 py-1 rounded-full bg-secondary/20 text-orange-300 text-xs font-bold uppercase tracking-wider mb-3">
              Phase 02 • Action
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4" style={{ fontFamily: "Outfit, sans-serif" }}>
              The Next 90 Days
            </h3>

            <p className="text-gray-300 text-base leading-relaxed mb-6 font-normal">
              The next 90 days are about turning that understanding into focused action. We don't believe every business needs every marketing service. We analyse first. Identify what matters. Choose what fits. Then focus on making it work.
            </p>

            <div className="space-y-3 pt-6 border-t border-white/10 text-sm text-gray-400">
              <div className="flex items-start space-x-3">
                <CheckCircle2 size={18} className="text-secondary shrink-0 mt-0.5" />
                <span>Selective execution focused on channels with high leverage.</span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle2 size={18} className="text-secondary shrink-0 mt-0.5" />
                <span>Audience-first messaging that builds authentic customer trust.</span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle2 size={18} className="text-secondary shrink-0 mt-0.5" />
                <span>Continuous refinement to ensure real business movement.</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Guiding Principle Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto p-6 sm:p-8 rounded-2xl border border-secondary/30 bg-gradient-to-r from-secondary/15 via-[#120a05] to-secondary/15 text-center flex flex-col sm:flex-row items-center justify-between gap-6"
        >
          <div className="text-left">
            <p className="text-xs font-bold uppercase tracking-widest text-secondary mb-1">
              Our Core Philosophy
            </p>
            <p className="text-lg sm:text-xl font-bold text-white" style={{ fontFamily: "Outfit, sans-serif" }}>
              Analyse first. Identify what matters. Choose what fits. Then focus on making it work.
            </p>
          </div>
          <a
            href="#contact"
            className="px-6 py-3.5 bg-secondary hover:bg-orange-500 text-white font-bold rounded-full text-xs uppercase tracking-wider shrink-0 transition-all duration-300 shadow-[0_0_20px_rgba(255,90,0,0.3)] hover:shadow-[0_0_30px_rgba(255,90,0,0.5)] flex items-center gap-2"
          >
            LET'S TALK
            <ArrowRight size={14} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default CoreIdea;
