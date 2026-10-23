import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, ShieldAlert } from "lucide-react";

const steps = [
  { num: "01", name: "Business", desc: "Understanding the model, margins, goals & reality." },
  { num: "02", name: "Audience", desc: "Defining who buys, what they care about & why." },
  { num: "03", name: "Competitors", desc: "Mapping where others are winning and failing." },
  { num: "04", name: "Current Digital Presence", desc: "Auditing current channels, touchpoints & assets." },
  { num: "05", name: "Gaps", desc: "Pinpointing the leaks where attention is lost." },
  { num: "06", name: "Opportunity", desc: "Spotting highest-leverage marketing angles." },
  { num: "07", name: "Strategy", desc: "Building the custom 90-day action blueprint." },
  { num: "08", name: "Execution", desc: "Deploying creative, ads, tech & media with precision." },
  { num: "09", name: "Review", desc: "Measuring real movement, refining & scaling up." },
];

const Approach = () => {
  return (
    <section id="approach" className="perf-section py-24 md:py-32 bg-[#060606] relative overflow-hidden border-t border-white/5">
      {/* Background glow */}
      <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,_rgba(255,90,0,0.05)_0%,_transparent_70%)] pointer-events-none -z-10" />

      <div className="container mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 bg-secondary/10 border border-secondary/25 rounded-full px-4 py-1.5 mb-6"
          >
            <span className="text-xs font-bold uppercase tracking-widest text-secondary" style={{ fontFamily: "Outfit, sans-serif" }}>
              05. OUR APPROACH
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight"
            style={{ fontFamily: "Outfit, sans-serif" }}
          >
            NO COOKIE-CUTTER PLANS.
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="space-y-3"
          >
            <p className="text-xl sm:text-2xl text-gray-400 line-through decoration-red-500/60">
              We do not start with: “What service do you want?”
            </p>
            <p className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-secondary to-orange-400" style={{ fontFamily: "Outfit, sans-serif" }}>
              We start by understanding the business.
            </p>
          </motion.div>
        </div>

        {/* 9-Step Linear Flow Diagram */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="text-center mb-8">
            <span className="text-xs font-bold uppercase tracking-widest text-gray-400">
              The 9-Step Strategic Progression
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-secondary/40 hover:bg-white/[0.04] transition-all duration-300 relative group"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono font-bold px-2 py-1 rounded bg-secondary/10 text-secondary border border-secondary/20">
                    Step {step.num}
                  </span>
                  {i < steps.length - 1 ? (
                    <span className="text-gray-600 group-hover:text-secondary transition-colors font-bold text-sm">
                      &rarr;
                    </span>
                  ) : (
                    <span className="text-secondary font-bold text-xs uppercase tracking-wider">
                      Continuous
                    </span>
                  )}
                </div>
                <h3 className="text-lg font-bold text-white mb-1.5" style={{ fontFamily: "Outfit, sans-serif" }}>
                  {step.name}
                </h3>
                <p className="text-xs text-gray-400 leading-relaxed">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Core Job Takeaway Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto p-8 sm:p-10 rounded-3xl border border-secondary/30 bg-gradient-to-r from-secondary/10 via-[#101010] to-secondary/10 text-center relative overflow-hidden"
        >
          <div className="relative z-10">
            <p className="text-xs font-bold uppercase tracking-widest text-secondary mb-3">
              The AD House Mandate
            </p>
            <p className="text-lg sm:text-2xl font-bold text-white leading-relaxed max-w-3xl mx-auto" style={{ fontFamily: "Outfit, sans-serif" }}>
              "Our job is to identify what your business actually needs, choose the appropriate tools from our services, and focus the effort where it can make the most sense."
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Approach;
