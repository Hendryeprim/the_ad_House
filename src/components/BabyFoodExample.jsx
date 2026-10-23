import React from "react";
import { motion } from "framer-motion";
import { Heart, HelpCircle, ArrowRight, CheckCircle2, XCircle } from "lucide-react";

const BabyFoodExample = () => {
  return (
    <section id="baby-food-example" className="perf-section py-24 md:py-32 bg-[#060606] relative overflow-hidden border-t border-white/5">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-[radial-gradient(circle_at_center,_rgba(255,90,0,0.06)_0%,_transparent_70%)] pointer-events-none -z-10" />

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
              07. HOW WE THINK — BABY FOOD BRAND
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
              Baby Food Brand.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="text-gray-400 text-base sm:text-lg leading-relaxed"
          >
            Moving from product-first broadcasting to parent-first trust.
          </motion.p>
        </div>

        {/* Story Card: The Comparison */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto mb-14">
          {/* Side A: Product-First */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-8 sm:p-10 rounded-3xl border border-white/10 bg-white/[0.02] relative"
          >
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-bold uppercase tracking-widest text-gray-400">
                The Product-First Approach
              </span>
              <XCircle size={20} className="text-gray-500" />
            </div>

            <p className="text-gray-300 font-semibold mb-3">
              The product may be good, but the content keeps talking about the product:
            </p>

            <div className="grid grid-cols-2 gap-2 mb-6">
              {["“Healthy ingredients.”", "“Quality product.”", "“Safe for your baby.”", "“Buy now.”"].map((q, i) => (
                <div key={i} className="p-2.5 rounded-lg bg-white/[0.03] border border-white/5 text-gray-400 text-xs font-mono">
                  {q}
                </div>
              ))}
            </div>

            <p className="text-xs text-gray-400 italic mb-4">
              The information is there. But what is the parent actually thinking?
            </p>

            <div className="space-y-2 pt-4 border-t border-white/10">
              {[
                "“Is this really safe for my baby?”",
                "“What should I check before buying?”",
                "“Which ingredients matter?”",
                "“Is this suitable for my baby's age?”",
              ].map((q, i) => (
                <div key={i} className="flex items-center gap-2 text-xs text-amber-300/80">
                  <HelpCircle size={14} className="shrink-0 text-amber-400" />
                  <span>{q}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Side B: Parent-First */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="p-8 sm:p-10 rounded-3xl border border-secondary/40 bg-gradient-to-b from-secondary/[0.08] via-white/[0.02] to-transparent relative shadow-xl"
          >
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-bold uppercase tracking-widest text-secondary">
                The Parent-First Approach
              </span>
              <Heart size={20} className="text-secondary" />
            </div>

            <p className="text-white font-bold mb-4">
              So the communication changes.
            </p>

            {/* Contrast Box */}
            <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 mb-4">
              <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">Instead of constantly saying:</p>
              <p className="text-sm text-gray-400 line-through font-mono">“Here is our product.”</p>
            </div>

            <div className="p-5 rounded-2xl bg-secondary/15 border border-secondary/30 mb-6">
              <p className="text-xs text-secondary uppercase tracking-widest font-bold mb-1">We say:</p>
              <p className="text-lg font-bold text-white" style={{ fontFamily: "Outfit, sans-serif" }}>
                “Here is something every parent should know.”
              </p>
            </div>

            <div className="pt-4 border-t border-white/10">
              <p className="text-sm font-bold text-white flex items-center gap-2">
                <CheckCircle2 size={18} className="text-secondary shrink-0" />
                <span>The content moves from product-first to parent-first.</span>
              </p>
            </div>
          </motion.div>
        </div>

        {/* Core Takeaway */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto p-6 sm:p-8 rounded-2xl border border-white/10 bg-[#0d0d0d] text-center"
        >
          <span className="text-xs uppercase tracking-widest text-secondary font-bold block mb-2">
            The Communication Shift
          </span>
          <p className="text-lg sm:text-2xl font-extrabold text-white leading-relaxed" style={{ fontFamily: "Outfit, sans-serif" }}>
            "The problem may not be the product. It may be the way the product is being communicated."
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default BabyFoodExample;
