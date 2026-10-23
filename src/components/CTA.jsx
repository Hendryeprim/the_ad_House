import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const CTA = () => (
  <section className="py-28 relative overflow-hidden">
    {/* Layered background */}
    <div className="absolute inset-0 bg-secondary" />
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(255,255,255,0.08)_0%,_transparent_60%)]" />
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(0,0,0,0.3)_0%,_transparent_60%)]" />
    <div className="absolute top-0 left-0 w-full h-[1px] bg-[#060606]/20" />
    <div className="absolute bottom-0 left-0 w-full h-[1px] bg-[#060606]/20" />

    <div className="container mx-auto px-6 relative z-10 text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <p className="text-white/70 text-sm font-bold uppercase tracking-widest mb-6">
          The 90-Day Growth Plan
        </p>
        <h2
          className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight"
          style={{ fontFamily: "Outfit, sans-serif" }}
        >
          Ready to see your brand <br className="hidden md:block" />
          grow in 90 days?
        </h2>
        <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto">
          Tell us your goal and your budget. We will do the rest.
        </p>
        <a
          href="#contact"
          className="group inline-flex items-center px-10 py-5 bg-[#060606] text-secondary font-extrabold text-lg rounded-full hover:bg-[#060606]/[0.03] transition-all duration-300 shadow-[0_0_40px_rgba(0,0,0,0.3)] hover:shadow-[0_0_60px_rgba(0,0,0,0.4)] hover:-translate-y-1 transform"
        >
          Get a Free Consultation
          <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
        </a>
      </motion.div>
    </div>
  </section>
);

export default CTA;
