import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import WhatsAppIcon from "./WhatsAppIcon";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const whatsappNumber = "918072005313";
  const whatsappMessage = encodeURIComponent(
    "Hi The AD House, I'd like to book a 30-minute conversation."
  );

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const isScrolled = window.scrollY > 30;
          setScrolled((prev) => (prev !== isScrolled ? isScrolled : prev));
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "30 to 90", href: "#core-idea" },
    { name: "Services", href: "#services" },
    { name: "Digital Marketing", href: "#digital-marketing" },
    { name: "Approach", href: "#approach" },
    { name: "Strategy Map", href: "#strategy-map" },
    { name: "Why Us", href: "#why-us" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "py-3 bg-[#0a0a0a]/90 backdrop-blur-lg border-b border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        <a href="#hero" className="flex items-center" aria-label="The AD House Home">
          <video 
            src="/TheAdHouse_logo_animation.mp4" 
            autoPlay 
            loop 
            muted 
            playsInline
            preload="auto"
            className="h-12 md:h-14 object-contain rounded-lg will-change-transform"
            style={{ transform: "translateZ(0)" }}
            aria-label="The Ad House Logo Video"
          />
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-7">
          <ul className="flex space-x-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="text-sm text-gray-400 hover:text-white transition-colors duration-200 relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-secondary transition-all duration-300 group-hover:w-full rounded-full" />
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center space-x-3">
            <a
              href="#contact"
              className="px-5 py-2.5 bg-secondary text-white text-sm font-semibold rounded-full hover:bg-orange-500 transition-all duration-300 shadow-[0_0_20px_rgba(255,90,0,0.35)] hover:shadow-[0_0_30px_rgba(255,90,0,0.55)] hover:-translate-y-0.5 transform whitespace-nowrap"
            >
              Book a 30-Minute Conversation
            </a>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex md:hidden items-center">
          <button
            className="text-white focus:outline-none p-1"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden bg-[#060606]/95 backdrop-blur-md border-b border-white/10"
          >
            <div className="px-6 py-6 flex flex-col space-y-4">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="text-base font-medium text-gray-300 hover:text-white transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </motion.a>
              ))}

              <div className="pt-2 flex flex-col gap-2.5">
                <a
                  href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-6 py-3 bg-[#25D366] text-white font-semibold rounded-full hover:bg-[#20ba59] transition-all text-sm"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <WhatsAppIcon size={18} />
                  Chat on WhatsApp
                </a>

                <a
                  href="#contact"
                  className="px-6 py-3 bg-secondary text-white text-center font-semibold rounded-full hover:bg-orange-500 transition-all text-sm"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Book a 30-Minute Conversation
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
