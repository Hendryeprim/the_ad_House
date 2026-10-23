import React from "react";
import { motion } from "framer-motion";

const Proof = () => (
  <section className="py-24 bg-[#060606] relative overflow-hidden border-y border-white/5">
    <div className="container mx-auto px-6 md:px-12 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-extrabold mb-8 text-white" style={{ fontFamily: "Outfit, sans-serif" }}>
          Client Success Stories
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-8">
          <div className="p-8 border border-white/10 rounded-2xl bg-[#060606]/30">
            <h3 className="text-xl font-bold text-white mb-2">Client Testimonials</h3>
            <p className="text-gray-400 text-sm">Client testimonials coming soon.</p>
          </div>
          <div className="p-8 border border-white/10 rounded-2xl bg-[#060606]/30">
            <h3 className="text-xl font-bold text-white mb-2">Portfolio & Case Studies</h3>
            <p className="text-gray-400 text-sm">Portfolio coming soon.</p>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default Proof;
