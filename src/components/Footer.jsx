import React from "react";
import { ArrowRight, Compass } from "lucide-react";
import WhatsAppIcon from "./WhatsAppIcon";

const Footer = ({ onOpenLegal }) => {
  const whatsappNumber = "918072005313";
  const whatsappMessage = encodeURIComponent(
    "Hi The AD House, I would like to enquire about your 30-to-90 marketing strategy."
  );

  const handleLegalClick = (e, type) => {
    e.preventDefault();
    if (onOpenLegal) {
      onOpenLegal(type);
    } else {
      window.location.hash = type === "privacy" ? "privacy-policy" : "terms-of-service";
    }
  };

  const quickLinks = [
    { name: "30 to 90 Concept", href: "#core-idea" },
    { name: "13 Services", href: "#services" },
    { name: "What / Why / Who", href: "#digital-marketing" },
    { name: "No Cookie-Cutter Plans", href: "#approach" },
    { name: "Travel Scenario", href: "#travel-example" },
    { name: "Baby Food Scenario", href: "#baby-food-example" },
    { name: "Strategy Mind Map", href: "#strategy-map" },
    { name: "Why The AD House", href: "#why-us" },
  ];

  const serviceCategories = [
    { name: "Digital Marketing", count: "5 Services" },
    { name: "Design & Branding", count: "3 Services" },
    { name: "Production & Advertising", count: "3 Services" },
    { name: "Technology & Development", count: "2 Services" },
  ];

  const socials = ["Instagram", "Facebook", "YouTube", "LinkedIn"];

  return (
    <footer className="perf-section bg-[#050505] pt-20 pb-12 border-t border-white/10 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[1px] bg-gradient-to-r from-transparent via-secondary/40 to-transparent" />

      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
          {/* Brand Info */}
          <div className="lg:col-span-4">
            <h2 className="text-2xl font-extrabold mb-3 text-white tracking-tight" style={{ fontFamily: "Outfit, sans-serif" }}>
              The AD<span className="text-secondary"> House</span><span className="text-secondary">.</span>
            </h2>
            <p className="text-secondary text-xs uppercase tracking-widest font-bold mb-3">
              30 TO 90 — SEE WHAT'S NEXT
            </p>
            <p className="text-gray-400 text-sm mb-6 max-w-sm leading-relaxed">
              30 Minutes to Know Who You Are. 90 Days to Define Where You Go. Digital marketing, branding, production, and technology in complete alignment.
            </p>
            <div className="flex flex-wrap items-center gap-2">
              {/* WhatsApp direct pill */}
              <a
                href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#25D366]/15 border border-[#25D366]/30 text-xs text-[#25D366] hover:bg-[#25D366] hover:text-white transition-all duration-200 font-semibold"
                aria-label="WhatsApp"
              >
                <WhatsAppIcon size={14} />
                WhatsApp
              </a>

              {socials.map((s) => (
                <a
                  key={s}
                  href="#"
                  aria-label={s}
                  className="px-3.5 py-1.5 rounded-full border border-white/10 text-xs text-gray-400 hover:text-secondary hover:border-secondary/40 transition-all duration-200"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* Section Navigation */}
          <div className="lg:col-span-3">
            <h3 className="text-white font-bold mb-6 text-xs uppercase tracking-widest" style={{ fontFamily: "Outfit, sans-serif" }}>
              Explore Website Flow
            </h3>
            <ul className="space-y-2.5 text-sm">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-secondary transition-colors duration-200 flex items-center gap-1.5"
                  >
                    <span className="text-secondary text-xs">&rsaquo;</span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Four Service Categories */}
          <div className="lg:col-span-3">
            <h3 className="text-white font-bold mb-6 text-xs uppercase tracking-widest" style={{ fontFamily: "Outfit, sans-serif" }}>
              Four Service Pillars
            </h3>
            <ul className="space-y-3 text-sm">
              {serviceCategories.map((cat) => (
                <li key={cat.name} className="p-2.5 rounded-xl bg-white/[0.02] border border-white/5">
                  <a href="#services" className="text-gray-300 hover:text-secondary block font-medium">
                    {cat.name}
                  </a>
                  <span className="text-[11px] text-gray-500">{cat.count}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Consultation CTA Card */}
          <div className="lg:col-span-2 flex flex-col justify-between">
            <div>
              <h3 className="text-white font-bold mb-4 text-xs uppercase tracking-widest" style={{ fontFamily: "Outfit, sans-serif" }}>
                Primary Action
              </h3>
              <p className="text-xs text-gray-400 leading-relaxed mb-4">
                Give us 30 minutes to understand where your business is today.
              </p>
              <a
                href="#contact"
                className="px-4 py-3 bg-secondary hover:bg-orange-500 text-white font-bold rounded-xl text-xs uppercase tracking-wider transition-all block text-center shadow-[0_0_20px_rgba(255,90,0,0.3)] hover:shadow-[0_0_30px_rgba(255,90,0,0.5)]"
              >
                BOOK 30-MIN CALL
              </a>
            </div>
            <div className="mt-6 pt-4 border-t border-white/5 space-y-1.5 text-xs text-gray-400">
              <a href="tel:+918072005313" className="text-white font-medium hover:text-secondary transition-colors block">
                +91 80720 05313
              </a>
              <p className="text-white font-medium">hello@theadhouse.com</p>
              <p className="text-gray-400 text-[11px] leading-tight">
                177, Fathima nagar, n.k road, Thanjavur 613001
              </p>
              <a
                href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-[#25D366] hover:underline pt-1"
              >
                <WhatsAppIcon size={13} />
                Direct WhatsApp Support
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row justify-between items-center text-xs text-gray-400 gap-4">
          <p>&copy; 2026 The AD House. All rights reserved.</p>
          <p className="text-gray-400">
            30 TO 90 &bull; Direction First &bull; Execution Second
          </p>
          <div className="flex items-center space-x-6">
            <button
              type="button"
              onClick={(e) => handleLegalClick(e, "privacy")}
              className="hover:text-secondary text-gray-400 transition-colors cursor-pointer font-medium"
            >
              Privacy Policy
            </button>
            <span className="text-white/20">&bull;</span>
            <button
              type="button"
              onClick={(e) => handleLegalClick(e, "terms")}
              className="hover:text-secondary text-gray-400 transition-colors cursor-pointer font-medium"
            >
              Terms of Service
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
