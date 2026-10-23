import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HelpCircle, Sparkles, UserCheck, ArrowRight, CheckCircle2 } from "lucide-react";

const pillars = [
  {
    id: "what",
    label: "WHAT",
    title: "What is Digital Marketing?",
    subtitle: "Understanding the complete journey from attention to action",
    icon: HelpCircle,
    content: (
      <div className="space-y-5 text-gray-300 leading-relaxed text-base sm:text-lg">
        <p className="p-4 rounded-xl bg-white/[0.03] border border-white/10 text-white font-medium italic">
          "Imagine you are a business owner and you randomly start posting videos on Instagram. Will posting videos automatically grow your business? Not necessarily."
        </p>
        <p>
          First, we need to understand who you are trying to reach. Then we need to understand what they care about, what kind of content will reach them, what will build trust, and what will finally make them enquire, visit, call, order or buy.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
          <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
            <span className="text-secondary text-xs font-bold uppercase tracking-wider block mb-1">For Product Businesses</span>
            <p className="text-sm text-gray-300">Turning attention into a direct website order or an in-person store visit.</p>
          </div>
          <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
            <span className="text-secondary text-xs font-bold uppercase tracking-wider block mb-1">For Service Businesses</span>
            <p className="text-sm text-gray-300">Demonstrating service quality, verified expertise, and proof strongly enough for someone to enquire.</p>
          </div>
        </div>
        <p className="font-semibold text-white border-l-2 border-secondary pl-4 py-1">
          That entire journey — understanding the audience, building the right content, creating trust and moving people towards action — is what we see as Digital Marketing.
        </p>
      </div>
    ),
  },
  {
    id: "why",
    label: "WHY",
    title: "Why Digital Marketing?",
    subtitle: "Connecting discovery, credibility, and customer choice",
    icon: Sparkles,
    content: (
      <div className="space-y-5 text-gray-300 leading-relaxed text-base sm:text-lg">
        <p>
          Your product or service may already be good. But how does someone who has never heard of you find you?
        </p>
        <div className="flex flex-wrap gap-2 py-2">
          {["Search on Google", "Discover on Instagram", "See a video", "Hear from someone else"].map((step, i) => (
            <span key={i} className="px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs text-gray-300 font-medium">
              &bull; {step}
            </span>
          ))}
        </div>
        <p className="p-4 rounded-xl bg-white/[0.03] border border-white/10 text-white font-medium">
          When they discover you, do they immediately understand why they should choose you?
        </p>
        <p className="font-semibold text-white border-l-2 border-secondary pl-4 py-1">
          Digital Marketing is not simply posting a Reel every day. It is connecting audience, message, content, trust and action.
        </p>
      </div>
    ),
  },
  {
    id: "who",
    label: "WHO",
    title: "Who Needs Digital Marketing?",
    subtitle: "Choosing what actually fits rather than doing everything",
    icon: UserCheck,
    content: (
      <div className="space-y-5 text-gray-300 leading-relaxed text-base sm:text-lg">
        <p className="text-white font-semibold">
          You do not need to decide which digital marketing services you need.
        </p>
        <p>
          We analyse your business, current digital presence, audience, competitors, gaps and opportunities. Then we identify what actually matters.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-300 my-3">
          <div className="p-3 rounded-lg bg-white/[0.02] border border-white/5 flex items-start gap-2">
            <CheckCircle2 size={16} className="text-secondary shrink-0 mt-0.5" />
            <span>If Instagram needs attention, we focus there.</span>
          </div>
          <div className="p-3 rounded-lg bg-white/[0.02] border border-white/5 flex items-start gap-2">
            <CheckCircle2 size={16} className="text-secondary shrink-0 mt-0.5" />
            <span>If Google is the stronger opportunity, we focus there.</span>
          </div>
          <div className="p-3 rounded-lg bg-white/[0.02] border border-white/5 flex items-start gap-2">
            <CheckCircle2 size={16} className="text-secondary shrink-0 mt-0.5" />
            <span>If website or SEO needs work, we address that.</span>
          </div>
          <div className="p-3 rounded-lg bg-white/[0.02] border border-white/5 flex items-start gap-2">
            <CheckCircle2 size={16} className="text-secondary shrink-0 mt-0.5" />
            <span>If paid advertising is the next step, we build around it.</span>
          </div>
        </div>
        <p>
          We don't do everything just because everything is available. We choose what fits your business and focus on making it work.
        </p>
        <p className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-secondary to-orange-400 text-lg sm:text-xl border-l-2 border-secondary pl-4 py-1">
          Sometimes you don't need more marketing. You need the right direction first.
        </p>
      </div>
    ),
  },
];

const DigitalMarketing = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="digital-marketing" className="py-24 md:py-32 bg-[#060606] relative overflow-hidden border-t border-white/5">
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
              04. DIGITAL MARKETING — WHAT / WHY / WHO
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
            A Conversational Look at{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-orange-400">
              Real Digital Marketing
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="text-gray-400 text-base sm:text-lg leading-relaxed"
          >
            Not vanity metrics or random posting. Here is how we think about marketing that actually creates business movement.
          </motion.p>
        </div>

        {/* Tab Switcher */}
        <div className="flex justify-center gap-2 sm:gap-4 mb-10 max-w-xl mx-auto">
          {pillars.map((p, idx) => {
            const Icon = p.icon;
            const isActive = activeTab === idx;
            return (
              <button
                key={p.id}
                onClick={() => setActiveTab(idx)}
                className={`flex-1 py-3.5 px-4 rounded-2xl border font-bold text-xs sm:text-sm transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer ${
                  isActive
                    ? "bg-secondary text-white border-secondary shadow-[0_0_20px_rgba(255,90,0,0.3)] scale-[1.02]"
                    : "bg-white/[0.03] text-gray-400 border-white/10 hover:border-white/20 hover:text-white"
                }`}
                style={{ fontFamily: "Outfit, sans-serif" }}
              >
                <Icon size={16} />
                <span>{p.label}</span>
              </button>
            );
          })}
        </div>

        {/* Active Content Card */}
        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
              className="p-8 sm:p-12 rounded-3xl border border-white/10 bg-gradient-to-b from-[#121212] to-[#080808] relative overflow-hidden shadow-2xl"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-6 border-b border-white/10 gap-2">
                <div>
                  <span className="text-secondary text-xs uppercase tracking-widest font-bold">
                    Pillar 0{activeTab + 1} &bull; {pillars[activeTab].label}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-1" style={{ fontFamily: "Outfit, sans-serif" }}>
                    {pillars[activeTab].title}
                  </h3>
                </div>
                <span className="text-xs text-gray-400 font-medium sm:text-right">
                  {pillars[activeTab].subtitle}
                </span>
              </div>

              {pillars[activeTab].content}

              {/* Bottom Quick Navigation */}
              <div className="mt-10 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
                <span className="text-xs text-gray-500">
                  Switch tabs above to read What, Why & Who
                </span>
                <div className="flex items-center gap-3">
                  {activeTab < pillars.length - 1 ? (
                    <button
                      onClick={() => setActiveTab(activeTab + 1)}
                      className="text-xs text-secondary hover:text-orange-400 font-bold flex items-center gap-1 cursor-pointer"
                    >
                      Next: {pillars[activeTab + 1].label} &rarr;
                    </button>
                  ) : (
                    <a
                      href="#approach"
                      className="text-xs text-secondary hover:text-orange-400 font-bold flex items-center gap-1"
                    >
                      Next: Our Approach &rarr;
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default DigitalMarketing;
