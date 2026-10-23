import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, TrendingUp, Share2, Search } from "lucide-react";

const articles = [
  {
    icon: TrendingUp,
    category: "Strategy",
    date: "Oct 12, 2026",
    title: "How to Build a 90-Day Marketing Plan That Actually Works",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
  },
  {
    icon: Share2,
    category: "Social Media",
    date: "Oct 05, 2026",
    title: "7 Social Media Mistakes That Are Killing Your Organic Reach",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1974&auto=format&fit=crop",
  },
  {
    icon: Search,
    category: "Performance Marketing",
    date: "Sep 28, 2026",
    title: "Google Ads vs Meta Ads: Where Should Your Budget Go in 2026?",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
  },
];

const Insights = () => (
  <section id="insights" className="py-28 bg-[#060606] border-t border-gray-100">
    <div className="container mx-auto px-6 md:px-12">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16">
        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="max-w-2xl">
          <p className="text-secondary text-sm font-bold uppercase tracking-widest mb-4">Insights</p>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4" style={{ fontFamily: "Outfit, sans-serif" }}>
            Ideas That Help <span className="text-secondary">Brands Grow.</span>
          </h2>
          <p className="text-gray-400 text-lg">Strategies, tips and industry insights from The Ad House team.</p>
        </motion.div>
        <motion.a
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          href="#"
          className="hidden md:inline-flex items-center font-bold text-white hover:text-secondary transition-colors mt-6 md:mt-0"
        >
          View All <ArrowRight size={18} className="ml-2" />
        </motion.a>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {articles.map((a, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="group cursor-pointer"
          >
            <div className="h-60 rounded-2xl mb-6 overflow-hidden relative">
              <div className="absolute inset-0 bg-[#060606]/30 group-hover:bg-[#060606]/10 transition-colors z-10" />
              <img src={a.image} alt={a.title} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="flex items-center text-xs font-bold uppercase tracking-wider mb-3">
              <span className="text-secondary">{a.category}</span>
              <span className="mx-2 text-gray-400">—</span>
              <span className="text-gray-500">{a.date}</span>
            </div>
            <h3 className="text-xl font-bold mb-4 group-hover:text-secondary transition-colors leading-tight text-white" style={{ fontFamily: "Outfit, sans-serif" }}>{a.title}</h3>
            <span className="inline-flex items-center text-sm font-semibold text-gray-400 group-hover:text-white transition-colors">
              Read Article <ArrowRight size={14} className="ml-1 group-hover:translate-x-1 transition-transform" />
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Insights;
