import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  { q: "What services does The Ad House offer?", a: "We offer 13 services grouped under Digital Presence, Brand, Social & Content, Performance, and Offline & Experiential." },
  { q: "What is the 90-Day Growth Plan?", a: "Our 90-Day Growth Plan is a structured, results-focused process: 15 days of discovery and strategy, then building and launching, then optimising and scaling, and finally accelerating with a full performance report and roadmap." },
  { q: "How does your pricing work?", a: "Pricing information coming soon. We design plans around your budget to find the right mix of services that deliver the best results." },
  { q: "What is the minimum contract period?", a: "Contract period policies coming soon." },
  { q: "Who owns the advertising accounts?", a: "Ad account ownership policies coming soon." },
  { q: "Who owns the creative files?", a: "Creative files ownership policies coming soon." },
  { q: "What are the payment terms?", a: "Payment terms coming soon." },
  { q: "What does \"measurable results\" mean?", a: "Measurable results definitions coming soon." },
  { q: "Do you handle both digital and offline marketing?", a: "Absolutely. The Ad House is one of the few agencies that covers digital marketing and offline branding — hoardings, vehicle branding, theatre ads and on-ground activations — all from one team." },
];

const FAQ = () => {
  const [open, setOpen] = useState(0);

  return (
    <section className="py-28 bg-[#060606] relative">
      <div className="container mx-auto px-6 md:px-12 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-secondary text-sm font-bold uppercase tracking-widest mb-4">FAQ</p>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4" style={{ fontFamily: "Outfit, sans-serif" }}>
            Frequently Asked <span className="text-secondary">Questions</span>
          </h2>
          <p className="text-gray-400 text-lg">Everything you need to know about working with The Ad House.</p>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className={`border rounded-2xl overflow-hidden transition-all duration-300 ${
                open === i
                  ? "border-secondary/30 bg-secondary/5"
                  : "border-white/10 bg-[#060606]/[0.02] hover:bg-[#060606]/[0.04]"
              }`}
            >
              <button
                onClick={() => setOpen(open === i ? -1 : i)}
                className="w-full px-6 py-5 flex justify-between items-center focus:outline-none text-left"
                aria-expanded={open === i}
              >
                <h3 className="font-semibold text-white text-base pr-4">{faq.q}</h3>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${open === i ? "bg-secondary text-white" : "bg-[#060606]/10 text-gray-400"}`}>
                  {open === i ? <Minus size={15} /> : <Plus size={15} />}
                </div>
              </button>

              <AnimatePresence>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 pb-6 text-gray-400 leading-relaxed text-sm">{faq.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
