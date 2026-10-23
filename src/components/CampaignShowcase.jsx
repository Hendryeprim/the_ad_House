import React from "react";
import { motion } from "framer-motion";

const channels = [
  "Social Media", "Google Ads", "Meta Ads", "Branding", "Website",
  "Media Production", "Offline Advertising", "Theatre Ads"
];

const CampaignShowcase = () => (
  <section className="py-20 bg-[#060606] relative overflow-hidden">
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,90,0,0.04)_0%,_transparent_65%)] pointer-events-none" />
    <div className="container mx-auto px-6 md:px-12 text-center">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4" style={{ fontFamily: "Outfit, sans-serif" }}>
          One Brand. One Strategy.{" "}
          <span className="text-secondary">Everywhere.</span>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto mb-14">
          Visually connected campaigns — digital and offline — all planned by one team under one roof.
        </p>
      </motion.div>

      {/* Static pills — no infinite animations, fast render */}
      <div className="flex flex-wrap justify-center gap-3">
        {channels.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06 }}
            className="bg-[#060606]/5 border border-white/10 rounded-full px-6 py-3 text-white font-semibold text-sm hover:border-secondary/40 hover:text-secondary transition-all duration-200 cursor-default"
          >
            {item}
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default CampaignShowcase;
