import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Zap, Eye, Globe } from "lucide-react";

const items = [
  { icon: Zap, title: "Performance-First Thinking", desc: "Every rupee is tracked. Every decision is backed by data. We optimise until your campaigns deliver measurable results." },
  { icon: Eye, title: "Creative That Converts", desc: "Scroll-stopping content, reels and ad creatives engineered with proven psychology to turn attention into enquiries." },
  { icon: Globe, title: "Digital & Offline — Together", desc: "We are the only team that plans your Instagram post and your hoarding in the same room, so your brand is consistent everywhere." },
  { icon: Sparkles, title: "One Point of Contact", desc: "No juggling agencies. No mixed messages. One team, one plan, one person you can call." },
];

const Innovation = () => (
  <section className="py-24 bg-[#060606] relative overflow-hidden border-t border-white/10">
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[radial-gradient(circle_at_center,_rgba(255,90,0,0.08)_0%,_transparent_70%)] pointer-events-none -z-10" />

    <div className="container mx-auto px-6 md:px-12">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16">
        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="max-w-2xl">
          <div className="inline-flex items-center space-x-2 bg-[#060606]/5 border border-white/10 rounded-full px-4 py-1.5 mb-6">
            <Sparkles size={14} className="text-secondary" />
            <span className="text-xs font-semibold tracking-widest text-gray-300 uppercase">The Ad House Difference</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4" style={{ fontFamily: "Outfit, sans-serif" }}>
            What Makes Us <span className="text-secondary">Different.</span>
          </h2>
          <p className="text-gray-400 text-lg">One roof. One plan. Real results. That is the Ad House way.</p>
        </motion.div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {items.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="p-8 bg-[#060606]/[0.03] rounded-3xl border border-white/10 hover:border-secondary/30 transition-all duration-300 flex flex-col sm:flex-row items-start gap-6 group"
          >
            <div className="w-14 h-14 shrink-0 rounded-2xl bg-[#060606]/5 border border-white/10 flex items-center justify-center text-white group-hover:bg-secondary group-hover:border-secondary group-hover:text-white transition-all duration-300">
              <item.icon size={24} />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2 text-white" style={{ fontFamily: "Outfit, sans-serif" }}>{item.title}</h3>
              <p className="text-gray-400 leading-relaxed text-sm">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Innovation;
