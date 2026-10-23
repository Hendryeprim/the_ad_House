import React from "react";
import { motion } from "framer-motion";
import {
  Compass,
  Home,
  Sliders,
  HeartHandshake,
  TrendingUp,
  MessageSquare,
  ArrowRight,
} from "lucide-react";

const pillars = [
  {
    icon: Compass,
    title: "Direction Before Execution",
    desc: "We diagnose first. 30 minutes to understand who you are, what is working, and what is holding you back before touching a single campaign.",
  },
  {
    icon: Home,
    title: "All Four Pillars Under One Roof",
    desc: "Digital marketing, design & branding, media production, and tech development working in total alignment without fragmented communication.",
  },
  {
    icon: Sliders,
    title: "No Cookie-Cutter Plans",
    desc: "We don't do everything just because everything is available. We select the specific services that match your business and make them work.",
  },
  {
    icon: HeartHandshake,
    title: "Customer-First Communication",
    desc: "We replace empty self-promotion with the real questions and concerns your audience is actually asking, building genuine trust.",
  },
  {
    icon: TrendingUp,
    title: "The 90-Day Focus",
    desc: "A defined, disciplined trajectory from strategy to execution to review — designed for measurable business movement, not vanity views.",
  },
  {
    icon: MessageSquare,
    title: "Direct & Human Partnership",
    desc: "No corporate jargon or generic slide decks. Honest advice, clear focus, and a dedicated team treating your brand with real accountability.",
  },
];

const WhyUs = () => {
  return (
    <section id="why-us" className="perf-section py-24 md:py-32 bg-[#060606] relative overflow-hidden border-t border-white/5">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[radial-gradient(circle_at_center,_rgba(255,90,0,0.06)_0%,_transparent_65%)] pointer-events-none -z-10" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 bg-secondary/10 border border-secondary/25 rounded-full px-4 py-1.5 mb-6"
          >
            <span className="text-xs font-bold uppercase tracking-widest text-secondary" style={{ fontFamily: "Outfit, sans-serif" }}>
              09. WHY THE AD HOUSE / OUR DIFFERENCE
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-5"
            style={{ fontFamily: "Outfit, sans-serif" }}
          >
            What Makes{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-orange-400">
              The AD House Different?
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="text-gray-400 text-base sm:text-lg leading-relaxed"
          >
            Sometimes you don't need more marketing. You need the right direction first.
          </motion.p>
        </div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-16">
          {pillars.map((p, i) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="p-8 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-secondary/40 hover:bg-white/[0.04] transition-all duration-300 relative group flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-secondary/15 border border-secondary/25 flex items-center justify-center text-secondary mb-6 group-hover:scale-105 transition-transform">
                    <Icon size={22} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3" style={{ fontFamily: "Outfit, sans-serif" }}>
                    {p.title}
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed font-normal">
                    {p.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Conversation Strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto p-8 rounded-3xl border border-secondary/30 bg-gradient-to-r from-secondary/10 via-[#101010] to-secondary/10 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left"
        >
          <div>
            <span className="text-xs text-secondary font-bold uppercase tracking-widest block mb-1">
              Start with Clarity
            </span>
            <p className="text-lg sm:text-xl font-bold text-white" style={{ fontFamily: "Outfit, sans-serif" }}>
              Give us 30 minutes. Let's see what the next 90 days could look like.
            </p>
          </div>
          <a
            href="#contact"
            className="px-8 py-4 bg-secondary hover:bg-orange-500 text-white font-bold rounded-full text-sm uppercase tracking-wider shrink-0 transition-all duration-300 shadow-[0_0_25px_rgba(255,90,0,0.35)] hover:shadow-[0_0_40px_rgba(255,90,0,0.55)] flex items-center gap-2"
          >
            BOOK A 30-MINUTE CONVERSATION
            <ArrowRight size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyUs;
