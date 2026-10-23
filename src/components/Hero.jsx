import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Clock, Compass, Sparkles } from "lucide-react";

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen pt-32 pb-20 overflow-hidden flex flex-col justify-center">
      {/* Ambient background glow */}
      <div className="absolute top-12 left-1/4 w-[520px] h-[520px] bg-[radial-gradient(circle_at_center,_rgba(255,90,0,0.14)_0%,_transparent_70%)] -z-10 pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[420px] h-[420px] bg-[radial-gradient(circle_at_center,_rgba(255,140,0,0.08)_0%,_transparent_70%)] -z-10 pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Column: Core Messaging */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="show"
          className="lg:col-span-7 max-w-2xl"
        >
          {/* Eyebrow badge */}
          <motion.div variants={fadeUp} className="inline-flex items-center space-x-2.5 bg-secondary/10 border border-secondary/30 rounded-full px-4 py-1.5 mb-8">
            <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
            <span className="text-xs font-bold tracking-widest text-secondary uppercase" style={{ fontFamily: "Outfit, sans-serif" }}>
              30 TO 90 — SEE WHAT'S NEXT
            </span>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            variants={fadeUp}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.08] mb-6 text-white tracking-tight"
            style={{ fontFamily: "Outfit, sans-serif" }}
          >
            30 Minutes to Know Who You Are.{" "}
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-secondary via-orange-400 to-amber-300">
              90 Days to Define Where You Go.
            </span>
          </motion.h1>

          {/* Direct client copy */}
          <motion.p
            variants={fadeUp}
            className="text-base sm:text-lg md:text-xl text-gray-300 mb-10 leading-relaxed font-normal"
          >
            We spend the first 30 minutes understanding your business, your audience, your current digital presence and what is actually holding you back. Then we use that understanding to define what the next 90 days should look like.
          </motion.p>

          {/* Action CTAs */}
          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center">
            <a
              href="#contact"
              className="group px-8 py-4 bg-secondary text-white font-bold rounded-full hover:bg-orange-500 transition-all duration-300 shadow-[0_0_25px_rgba(255,90,0,0.35)] hover:shadow-[0_0_40px_rgba(255,90,0,0.55)] flex items-center justify-center text-sm md:text-base hover:-translate-y-0.5"
            >
              BOOK A 30-MINUTE CONVERSATION
              <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#core-idea"
              className="px-8 py-4 bg-white/5 border border-white/15 text-white font-semibold rounded-full hover:bg-white/10 hover:border-white/30 transition-all duration-300 text-center text-sm md:text-base"
            >
              See How It Works
            </a>
          </motion.div>
        </motion.div>

        {/* Right Column: Visual 30-to-90 Concept Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.25, ease: "easeOut" }}
          className="lg:col-span-5 relative"
        >
          <div className="relative rounded-3xl p-6 sm:p-8 border border-white/10 bg-gradient-to-b from-[#141414] to-[#0a0a0a] shadow-2xl">
            {/* Background accent lines */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/10 rounded-full blur-2xl pointer-events-none" />

            <div className="flex items-center justify-between pb-6 border-b border-white/10">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-secondary" />
                <span className="text-xs font-bold tracking-wider text-gray-300 uppercase">Strategic Trajectory</span>
              </div>
              <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-secondary/15 text-secondary border border-secondary/20">
                The AD House
              </span>
            </div>

            {/* 30 Minutes Card */}
            <div className="mt-6 p-5 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-secondary/40 transition-colors">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-xl bg-secondary/15 border border-secondary/30 flex items-center justify-center text-secondary shrink-0">
                  <Clock size={22} />
                </div>
                <div>
                  <div className="flex items-center space-x-2">
                    <span className="text-xl font-bold text-white" style={{ fontFamily: "Outfit, sans-serif" }}>
                      The 30 Minutes
                    </span>
                    <span className="text-xs font-bold text-secondary uppercase">Diagnosis</span>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-400 mt-1.5 leading-relaxed">
                    Understand your business, your audience, current presence & what is holding you back. No pitch. Pure understanding.
                  </p>
                </div>
              </div>
            </div>

            {/* Connector */}
            <div className="my-3 flex items-center justify-center">
              <div className="flex flex-col items-center">
                <div className="w-[2px] h-4 bg-gradient-to-b from-secondary to-orange-400" />
                <span className="text-[11px] font-semibold text-secondary px-3 py-0.5 rounded-full bg-secondary/10 border border-secondary/25 my-1 uppercase tracking-wider">
                  Leads To
                </span>
                <div className="w-[2px] h-4 bg-gradient-to-b from-orange-400 to-amber-300" />
              </div>
            </div>

            {/* 90 Days Card */}
            <div className="p-5 rounded-2xl bg-gradient-to-br from-secondary/10 via-white/[0.02] to-transparent border border-secondary/30">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-xl bg-secondary border border-secondary flex items-center justify-center text-white shrink-0 shadow-[0_0_15px_rgba(255,90,0,0.5)]">
                  <Compass size={22} />
                </div>
                <div>
                  <div className="flex items-center space-x-2">
                    <span className="text-xl font-bold text-white" style={{ fontFamily: "Outfit, sans-serif" }}>
                      The 90 Days
                    </span>
                    <span className="text-xs font-bold text-orange-300 uppercase">Focused Action</span>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-300 mt-1.5 leading-relaxed">
                    Turn clear diagnosis into disciplined action. Identify what matters, choose what fits, and execute with focus.
                  </p>
                </div>
              </div>
            </div>

            {/* Punchline */}
            <div className="mt-6 pt-5 border-t border-white/10 flex items-center justify-between text-xs text-gray-400">
              <span>Direction first. Execution second.</span>
              <span className="text-secondary font-semibold">Real Business Movement</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Strategic 3-Pillar Strip */}
      <div className="container mx-auto px-6 md:px-12 mt-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="border border-white/10 rounded-2xl p-6 sm:p-8 bg-gradient-to-r from-white/[0.02] via-[#0d0d0d] to-white/[0.02] grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <div className="flex items-start space-x-4">
            <span className="text-2xl font-black text-secondary font-mono">01</span>
            <div>
              <h2 className="text-base font-bold text-white mb-1" style={{ fontFamily: "Outfit, sans-serif" }}>
                Diagnose In 30 Minutes
              </h2>
              <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                We pinpoint where you are now, what is working, and what is not.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4 md:border-x md:border-white/10 md:px-6">
            <span className="text-2xl font-black text-secondary font-mono">02</span>
            <div>
              <h2 className="text-base font-bold text-white mb-1" style={{ fontFamily: "Outfit, sans-serif" }}>
                Filter What Fits
              </h2>
              <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                No bloated service lists. We select only the channels that move your needle.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <span className="text-2xl font-black text-secondary font-mono">03</span>
            <div>
              <h2 className="text-base font-bold text-white mb-1" style={{ fontFamily: "Outfit, sans-serif" }}>
                Define 90 Days of Action
              </h2>
              <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                Clear execution roadmap designed around your customers, message, and trust.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
