import React from "react";
import { motion } from "framer-motion";
import { Plane, AlertTriangle, CheckCircle, ArrowRight, Sparkles, Calendar } from "lucide-react";

const TravelExample = () => {
  return (
    <section id="travel-example" className="perf-section py-24 md:py-32 bg-[#060606] relative overflow-hidden border-t border-white/5">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-[radial-gradient(circle_at_center,_rgba(255,90,0,0.06)_0%,_transparent_70%)] pointer-events-none -z-10" />

      <div className="container mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 bg-secondary/10 border border-secondary/25 rounded-full px-4 py-1.5 mb-4"
          >
            <span className="text-xs font-bold uppercase tracking-widest text-secondary" style={{ fontFamily: "Outfit, sans-serif" }}>
              06. HOW WE THINK — TRAVEL BUSINESS
            </span>
          </motion.div>

          {/* Illustrative Disclaimer Tag */}
          <div className="mb-6">
            <span className="inline-block text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300">
              Illustrative Scenario &bull; Not a Client Case Study
            </span>
          </div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-5"
            style={{ fontFamily: "Outfit, sans-serif" }}
          >
            Let's Take a{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-orange-400">
              Travel Business.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="text-gray-400 text-base sm:text-lg leading-relaxed"
          >
            The difference between random posting and strategic timing.
          </motion.p>
        </div>

        {/* Story Card Comparison */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto mb-14">
          {/* Side A: What Typically Happens */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-8 sm:p-10 rounded-3xl border border-red-500/20 bg-gradient-to-b from-red-500/[0.04] to-transparent relative"
          >
            <div className="flex items-center justify-between mb-6">
              <span className="text-xs font-bold uppercase tracking-widest text-red-400">
                The Common Mistake &bull; Reactive Timing
              </span>
              <AlertTriangle size={20} className="text-red-400" />
            </div>

            <p className="text-gray-300 font-semibold mb-4">
              The business posts winter content only after winter starts:
            </p>

            <div className="space-y-2 mb-6">
              {["“Winter has arrived.”", "“Snowfall is happening here.”", "“Book your trip.”"].map((quote, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-white/[0.03] border border-white/5 text-gray-400 font-mono text-sm italic">
                  {quote}
                </div>
              ))}
            </div>

            <div className="pt-6 border-t border-white/10 space-y-3">
              <p className="text-sm text-gray-300 leading-relaxed font-semibold">
                The problem is not necessarily the destination or package. The timing of the communication is the problem.
              </p>
              <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                If people only hear about the destination when the season has already started, the opportunity to create curiosity and intent earlier has been missed.
              </p>
            </div>
          </motion.div>

          {/* Side B: How The AD House Thinks */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="p-8 sm:p-10 rounded-3xl border border-secondary/40 bg-gradient-to-b from-secondary/[0.08] via-white/[0.02] to-transparent relative shadow-xl"
          >
            <div className="flex items-center justify-between mb-6">
              <span className="text-xs font-bold uppercase tracking-widest text-secondary">
                The AD House Strategy &bull; Pre-Season Anticipation
              </span>
              <Plane size={20} className="text-secondary" />
            </div>

            <p className="text-white font-bold mb-4">
              We would start before the season:
            </p>

            {/* 6-step sequence */}
            <div className="grid grid-cols-2 gap-2.5 mb-6 text-xs sm:text-sm">
              {[
                "1. Build curiosity",
                "2. Show destination",
                "3. Share experience",
                "4. Answer questions",
                "5. Create desire to go",
                "6. Introduce package",
              ].map((step, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-secondary/10 border border-secondary/20 text-white font-medium flex items-center gap-1.5">
                  <CheckCircle size={14} className="text-secondary shrink-0" />
                  <span>{step}</span>
                </div>
              ))}
            </div>

            <div className="pt-6 border-t border-white/10 space-y-3">
              <p className="text-sm font-bold text-white leading-relaxed">
                The goal is not to wait for the season to create demand. The goal is to make people think about the destination before the season arrives.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Core Content Philosophy Takeaway */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto p-6 sm:p-8 rounded-2xl border border-white/10 bg-[#0d0d0d] text-center"
        >
          <span className="text-xs uppercase tracking-widest text-secondary font-bold block mb-2">
            The Content Perspective
          </span>
          <p className="text-lg sm:text-2xl font-extrabold text-white leading-relaxed" style={{ fontFamily: "Outfit, sans-serif" }}>
            "That is how we look at content — not only <span className="text-gray-400 font-normal">“What should we post today?”</span> but <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-orange-400">“What should the customer be thinking about next?”</span>"
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default TravelExample;
