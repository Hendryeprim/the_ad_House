import React from "react";
import { motion } from "framer-motion";
import { Home, TrendingUp, Wallet, Eye } from "lucide-react";

const values = [
  { icon: Home, title: "One Roof", desc: "Everything your brand needs, handled by one team." },
  { icon: TrendingUp, title: "Results First", desc: "Leads, footfall and sales matter more than vanity numbers." },
  { icon: Wallet, title: "Your Budget, Your Plan", desc: "We design what works for your budget, not the other way round." },
  { icon: Eye, title: "Transparency", desc: "Clear reports, honest advice, no hidden charges." },
];

const About = () => {
  return (
    <section id="about" className="py-28 relative overflow-hidden">
      <div className="absolute -right-48 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[radial-gradient(circle_at_center,_rgba(255,90,0,0.08)_0%,_transparent_70%)] pointer-events-none -z-10" />

      <div className="container mx-auto px-6 md:px-12">
        {/* Section Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center space-x-3 mb-12"
        >
          <div className="h-[1px] w-12 bg-secondary" />
          <span className="text-secondary text-sm font-semibold uppercase tracking-widest">About Us</span>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-extrabold mb-8 leading-tight" style={{ fontFamily: "Outfit, sans-serif" }}>
              What{" "}
              <span className="text-secondary">"The Ad House"</span>{" "}
              Means
            </h2>

            <div className="space-y-5 text-gray-400 text-lg leading-relaxed">
              <p>A house is a place where everything you need lives together. That is the idea behind <strong className="text-white">The Ad House</strong>.</p>
              <p>Most businesses run around with one agency for the logo, another for social media, another for ads and another for hoardings. The result is scattered messages, wasted money and no clear results.</p>
              <p>The Ad House brings all of it under one roof. Strategy, design, content, ads, production, websites, apps and offline branding are planned together by one team, so your brand speaks with one strong voice everywhere your customers see it.</p>
              <p>We are not just a digital marketing company. <strong className="text-white">We are your complete advertising home</strong>, and we build your brand like it is our own.</p>
            </div>

            {/* Promise */}
            <div className="mt-10 p-6 rounded-2xl border border-secondary/30 bg-secondary/5">
              <p className="text-xs font-bold uppercase tracking-widest text-secondary mb-2">Our Promise</p>
              <p className="text-xl font-bold text-white italic" style={{ fontFamily: "Outfit, sans-serif" }}>
                Ninety Days. Your Brand Rebuilt. Growth You Can Measure.
              </p>
            </div>
            
            {/* Team Placeholder */}
            <div className="mt-6 p-6 rounded-2xl border border-white/10 bg-[#060606]/10 text-center">
              <p className="text-gray-400 text-sm">Team information & founder photo coming soon.</p>
            </div>
          </motion.div>

          {/* Right: Values Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {values.map((v, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.6 }}
                className="group p-7 rounded-2xl border border-white/10 bg-[#060606]/[0.03] hover:border-secondary/40 hover:bg-secondary/5 transition-all duration-300 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                <div className="w-12 h-12 rounded-xl bg-[#060606]/5 border border-white/10 flex items-center justify-center text-white group-hover:text-secondary group-hover:border-secondary/40 transition-all duration-300 mb-5">
                  <v.icon size={22} />
                </div>
                <h3 className="text-lg font-bold text-white mb-2" style={{ fontFamily: "Outfit, sans-serif" }}>{v.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
