import React, { useState } from "react";
import { Phone, X } from "lucide-react";
import WhatsAppIcon from "./WhatsAppIcon";

const FloatingContact = () => {
  const whatsappNumber = "918072005313";
  const phoneNumber = "+918072005313";
  const message = encodeURIComponent(
    "Hi The AD House, I'd like to book a 30-minute conversation to see what's next for my business."
  );

  const [tooltipDismissed, setTooltipDismissed] = useState(false);

  return (
    <aside aria-label="Quick contact" className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Click to Call (Mobile Only) */}
      <a
        href={`tel:${phoneNumber}`}
        className="md:hidden flex items-center justify-center w-12 h-12 bg-[#121212] border border-white/20 text-white rounded-full shadow-lg hover:bg-[#1a1a1a] transition-all active:scale-95"
        aria-label="Call Us Directly"
      >
        <Phone size={20} />
      </a>

      {/* Floating WhatsApp Action with Official WhatsApp Logo */}
      <div className="relative flex items-center">
        {/* Subtle proactive badge / tooltip */}
        {!tooltipDismissed && (
          <div className="hidden sm:flex items-center gap-2 mr-3 px-3.5 py-1.5 rounded-full bg-[#111111]/95 border border-white/10 text-white text-xs font-semibold shadow-xl backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-[#25D366]" />
            <a
              href={`https://wa.me/${whatsappNumber}?text=${message}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#25D366] transition-colors whitespace-nowrap"
            >
              Chat on WhatsApp
            </a>
            <button
              onClick={() => setTooltipDismissed(true)}
              className="text-gray-400 hover:text-white p-0.5 cursor-pointer"
              aria-label="Dismiss tooltip"
            >
              <X size={12} />
            </button>
          </div>
        )}

        <a
          href={`https://wa.me/${whatsappNumber}?text=${message}`}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-[0_0_25px_rgba(37,211,102,0.5)] hover:shadow-[0_0_35px_rgba(37,211,102,0.8)] hover:scale-105 active:scale-95 transition-all duration-300 will-change-transform"
          aria-label="Direct WhatsApp Chat"
          title="Chat with The AD House on WhatsApp"
        >
          {/* Official WhatsApp SVG Logo */}
          <WhatsAppIcon size={30} className="text-white drop-shadow-sm group-hover:rotate-6 transition-transform duration-300" />
        </a>
      </div>
    </aside>
  );
};

export default FloatingContact;
