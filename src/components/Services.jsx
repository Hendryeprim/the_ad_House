import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Share2,
  TrendingUp,
  Target,
  Search,
  Mail,
  Palette,
  PenTool,
  MapPin,
  Film,
  Tv,
  Sparkles,
  Globe,
  Smartphone,
  ArrowRight,
  Layers,
} from "lucide-react";

const serviceCategories = [
  {
    id: "digital-marketing",
    name: "Digital Marketing",
    count: 5,
    tagline: "Audience targeting, multi-platform ads & retention",
    services: [
      {
        name: "Social Media Marketing",
        icon: Share2,
        desc: "Content planning, Reels, posts, and community engagement built around what your audience actually cares about.",
      },
      {
        name: "Performance Marketing",
        icon: TrendingUp,
        desc: "Data-led advertising campaigns structured around customer intent and measurable business actions.",
      },
      {
        name: "Meta Ads",
        icon: Target,
        desc: "High-impact Instagram & Facebook ad campaigns with refined audience targeting and creative testing.",
      },
      {
        name: "Google Ads",
        icon: Search,
        desc: "Search, display, and intent-driven campaigns that capture buyers actively seeking your solution.",
      },
      {
        name: "Email Marketing",
        icon: Mail,
        desc: "Direct communication workflows, newsletters, and automated sequences that nurture relationships and retention.",
      },
    ],
  },
  {
    id: "design-branding",
    name: "Design & Branding",
    count: 3,
    tagline: "Distinctive identity & cohesive physical touchpoints",
    services: [
      {
        name: "Brand & Branding & Identity",
        icon: Layers,
        desc: "Comprehensive brand positioning, visual language, typography, and tone that establish long-term recognition.",
      },
      {
        name: "Logo Design",
        icon: PenTool,
        desc: "Distinctive, memorable logo marks engineered for versatility across digital interfaces and physical print.",
      },
      {
        name: "Offline Branding",
        icon: MapPin,
        desc: "Hoardings, flex signage, environmental graphics, and on-ground brand collateral that capture local physical attention.",
      },
    ],
  },
  {
    id: "production-advertising",
    name: "Production & Advertising",
    count: 3,
    tagline: "Storytelling, cinema reach & experiential formats",
    services: [
      {
        name: "Media Production",
        icon: Film,
        desc: "Commercial ad films, product cinematography, studio photography, and high-quality brand video production.",
      },
      {
        name: "Theatre Advertising",
        icon: Tv,
        desc: "Captive on-screen cinema advertising that delivers undivided attention across prime theater networks.",
      },
      {
        name: "Immersive Advertising",
        icon: Sparkles,
        desc: "Interactive visual experiences, AR activations, and unconventional experiential formats that make a lasting impression.",
      },
    ],
  },
  {
    id: "technology-development",
    name: "Technology & Development",
    count: 2,
    tagline: "High-performance web architecture & mobile apps",
    services: [
      {
        name: "Website Design & Development",
        icon: Globe,
        desc: "Fast, responsive web applications and landing pages engineered to convert visitor curiosity into real inquiries.",
      },
      {
        name: "Mobile App Development",
        icon: Smartphone,
        desc: "Custom iOS and Android applications providing intuitive user journeys, customer loyalty, and functional utility.",
      },
    ],
  },
];

const Services = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="services" className="py-24 md:py-32 bg-[#060606] relative overflow-hidden border-t border-white/5">
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
              03. SERVICES — FOUR CATEGORIES
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
            13 Specialized Services.{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-orange-400">
              Four Core Pillars.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="text-gray-400 text-base sm:text-lg leading-relaxed"
          >
            We don't recommend every service to every client. We select only the appropriate tools from our capabilities that fit your exact business goals.
          </motion.p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 max-w-4xl mx-auto">
          {serviceCategories.map((cat, idx) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(idx)}
              className={`px-5 py-3 rounded-xl font-bold text-xs sm:text-sm transition-all duration-300 flex items-center space-x-2 border cursor-pointer ${
                activeTab === idx
                  ? "bg-secondary text-white border-secondary shadow-[0_0_20px_rgba(255,90,0,0.3)] scale-[1.02]"
                  : "bg-white/[0.03] text-gray-400 border-white/10 hover:border-white/20 hover:text-white"
              }`}
              style={{ fontFamily: "Outfit, sans-serif" }}
            >
              <span>{cat.name}</span>
              <span
                className={`text-[11px] px-2 py-0.5 rounded-full ${
                  activeTab === idx ? "bg-white/20 text-white" : "bg-white/10 text-gray-400"
                }`}
              >
                {cat.count}
              </span>
            </button>
          ))}
        </div>

        {/* Tab Content Header */}
        <div className="text-center mb-10">
          <p className="text-secondary text-xs uppercase tracking-widest font-bold">
            Category {String(activeTab + 1).padStart(2, "0")} of 04
          </p>
          <p className="text-gray-300 text-sm mt-1">
            {serviceCategories[activeTab].tagline}
          </p>
        </div>

        {/* Service Cards Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
          >
            {serviceCategories[activeTab].services.map((service, i) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.name}
                  className="group p-8 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-secondary/40 hover:bg-white/[0.04] transition-all duration-300 relative overflow-hidden flex flex-col justify-between"
                >
                  <div className="absolute top-0 right-0 w-28 h-28 bg-secondary/5 rounded-bl-full pointer-events-none group-hover:bg-secondary/15 transition-colors" />

                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-white group-hover:border-secondary transition-all duration-300 shadow-sm">
                        <Icon size={22} />
                      </div>
                      <span className="text-xs font-mono font-bold text-gray-500 group-hover:text-secondary transition-colors">
                        0{i + 1}
                      </span>
                    </div>

                    <h3
                      className="text-xl font-bold text-white mb-3 group-hover:text-white transition-colors"
                      style={{ fontFamily: "Outfit, sans-serif" }}
                    >
                      {service.name}
                    </h3>

                    <p className="text-gray-400 text-sm leading-relaxed mb-6">
                      {service.desc}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs text-gray-500">
                    <span className="uppercase tracking-wider font-semibold">
                      {serviceCategories[activeTab].name}
                    </span>
                    <span className="text-secondary opacity-0 group-hover:opacity-100 transition-opacity font-bold">
                      Integrated &rarr;
                    </span>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </AnimatePresence>

        {/* Bottom Context Callout */}
        <div className="mt-16 text-center max-w-2xl mx-auto p-6 rounded-2xl border border-white/10 bg-white/[0.02]">
          <p className="text-xs text-secondary font-bold uppercase tracking-widest mb-1">
            Fit Over Fluff
          </p>
          <p className="text-sm text-gray-300">
            "We don't do everything just because everything is available. We choose what fits your business and focus on making it work."
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
