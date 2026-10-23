import React, { useState } from "react";
import { motion } from "framer-motion";
import { Target, FileText, TrendingUp, Lightbulb, CheckCheck, ArrowRight } from "lucide-react";

const branches = [
  {
    id: "target",
    title: "TARGET",
    icon: Target,
    desc: "Identify exactly who the brand needs to reach.",
    detail: "Audience definition, buyer intent, and customer profile mapping.",
    color: "from-orange-500 to-amber-500",
  },
  {
    id: "content",
    title: "CONTENT",
    icon: FileText,
    desc: "Build content around what that audience actually cares about.",
    detail: "Parent-first and customer-first value rather than empty self-promotion.",
    color: "from-amber-500 to-yellow-500",
  },
  {
    id: "trends",
    title: "TRENDS",
    icon: TrendingUp,
    desc: "Don't blindly chase every trend. Map relevant trends to the business and recreate/adapt them when they fit.",
    detail: "Selective trend intelligence that protects brand credibility.",
    color: "from-secondary to-orange-600",
  },
  {
    id: "create",
    title: "CREATE",
    icon: Lightbulb,
    desc: "Don't wait for something to become viral. Create original ideas from the brand itself.",
    detail: "Original creative concepts originating from your unique identity.",
    color: "from-orange-400 to-secondary",
  },
  {
    id: "work",
    title: "MAKE THE CONTENT WORK",
    icon: CheckCheck,
    desc: "The objective is not simply views. The objective is stronger digital presence, stronger trust, better attention and business movement.",
    detail: "Translating attention into inquiries, footfall, and measurable sales.",
    color: "from-secondary to-amber-400",
  },
];

const flowSteps = [
  "Audience",
  "Content",
  "Trend Intelligence",
  "Original Creation",
  "Consistency",
  "Stronger Digital Presence",
  "Business Growth",
];

const MindMap = () => {
  const [activeBranch, setActiveBranch] = useState(null);

  return (
    <section id="strategy-map" className="perf-section py-24 md:py-32 bg-[#060606] relative overflow-hidden border-t border-white/5">
      {/* Dynamic ambient radial lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[850px] bg-[radial-gradient(circle_at_center,_rgba(255,90,0,0.08)_0%,_transparent_65%)] pointer-events-none -z-10" />

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
              08. 30 TO 90 STRATEGY MIND MAP
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
            Strategy Radiates from{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-orange-400">
              Clear Understanding.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="text-gray-400 text-base sm:text-lg leading-relaxed"
          >
            How The AD House maps audience, content, trends, and creation into sustainable digital growth.
          </motion.p>
        </div>

        {/* The Mind Map Visual Hub */}
        <div className="max-w-5xl mx-auto mb-20 relative">
          {/* Center Hub */}
          <div className="text-center mb-12">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              className="inline-block relative group"
            >
              {/* Outer glowing halo */}
              <div className="absolute -inset-2 bg-gradient-to-r from-secondary to-orange-500 rounded-3xl opacity-30 blur-xl group-hover:opacity-60 transition duration-500 pointer-events-none" />

              <div className="relative p-6 sm:p-8 rounded-3xl bg-[#121212] border-2 border-secondary shadow-[0_0_50px_rgba(255,90,0,0.3)] max-w-md mx-auto">
                <span className="inline-block text-[11px] font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-secondary/20 text-secondary mb-2">
                  Central Punch
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight" style={{ fontFamily: "Outfit, sans-serif" }}>
                  The AD House
                </h3>
                <p className="text-secondary text-sm sm:text-base font-bold mt-1 tracking-wider uppercase">
                  30 TO 90 — SEE WHAT'S NEXT
                </p>
                <p className="text-xs text-gray-400 mt-2">
                  Core Diagnosis &bull; 90-Day Execution Engine
                </p>
              </div>
            </motion.div>
          </div>

          {/* 5 Branches: Clean responsive visual grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {branches.map((b, idx) => {
              const Icon = b.icon;
              const isSelected = activeBranch === b.id;
              const isFullSpan = idx === 4; // Make the 5th branch span nicely on desktop

              return (
                <motion.div
                  key={b.id}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.08 }}
                  onMouseEnter={() => setActiveBranch(b.id)}
                  onMouseLeave={() => setActiveBranch(null)}
                  className={`p-6 sm:p-7 rounded-2xl border transition-all duration-300 relative group cursor-pointer ${
                    isFullSpan ? "md:col-span-2 lg:col-span-2" : ""
                  } ${
                    isSelected
                      ? "border-secondary bg-secondary/10 shadow-[0_0_30px_rgba(255,90,0,0.2)] scale-[1.02]"
                      : "border-white/10 bg-white/[0.02] hover:border-white/30 hover:bg-white/[0.04]"
                  }`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-secondary/15 border border-secondary/30 flex items-center justify-center text-secondary group-hover:scale-110 transition-transform">
                        <Icon size={20} />
                      </div>
                      <span className="text-xs font-mono font-bold text-gray-400">
                        Branch 0{idx + 1}
                      </span>
                    </div>
                    <span className="text-xs font-bold text-secondary uppercase tracking-widest">
                      {b.title}
                    </span>
                  </div>

                  <h4 className="text-lg font-bold text-white mb-2" style={{ fontFamily: "Outfit, sans-serif" }}>
                    {b.title}
                  </h4>

                  <p className="text-sm text-gray-300 leading-relaxed font-normal mb-3">
                    {b.desc}
                  </p>

                  <p className="text-xs text-gray-500 italic pt-2 border-t border-white/5">
                    {b.detail}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Final Flow Track Banner */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto p-8 sm:p-10 rounded-3xl border border-secondary/30 bg-gradient-to-b from-[#111111] to-[#080808] shadow-2xl"
        >
          <div className="text-center mb-8">
            <span className="text-xs font-bold uppercase tracking-widest text-secondary block mb-1">
              Final Strategic Flow
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-white" style={{ fontFamily: "Outfit, sans-serif" }}>
              How Everything Connects
            </h3>
          </div>

          {/* Flow Stepper */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {flowSteps.map((step, idx) => (
              <React.Fragment key={step}>
                <div className="px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-white font-semibold text-xs sm:text-sm shadow-sm hover:border-secondary hover:text-secondary transition-all">
                  <span className="text-secondary/70 font-mono text-[11px] mr-1.5">0{idx + 1}.</span>
                  {step}
                </div>
                {idx < flowSteps.length - 1 && (
                  <span className="text-secondary font-bold text-sm select-none">&rarr;</span>
                )}
              </React.Fragment>
            ))}
          </div>

          <div className="mt-8 text-center pt-6 border-t border-white/10">
            <p className="text-xs sm:text-sm text-gray-400">
              The objective is not simply views. The objective is stronger digital presence, stronger trust, better attention and business movement.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MindMap;
