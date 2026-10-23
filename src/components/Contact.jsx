import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ArrowRight,
  CheckCircle2,
  Calendar,
  MessageSquare,
} from "lucide-react";
import WhatsAppIcon from "./WhatsAppIcon";

const serviceCategoriesList = [
  "Digital Marketing",
  "Design & Branding",
  "Production & Advertising",
  "Technology & Development",
];

const inputCls =
  "w-full bg-[#121212] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary/50 transition-all duration-200 text-sm";
const labelCls = "block text-xs font-bold text-gray-300 mb-2 uppercase tracking-wider";

const Contact = ({ onOpenLegal }) => {
  const whatsappNumber = "918072005313";
  const whatsappMessage = encodeURIComponent(
    "Hi The AD House, I'd like to book a 30-minute conversation to discuss our brand strategy."
  );

  const [form, setForm] = useState({
    name: "",
    business: "",
    phone: "",
    email: "",
    city: "",
    services: [],
    goal: "",
    budget: "",
    preferredTime: "",
    message: "",
    consent: false,
    honeypot: "",
  });
  const [phoneError, setPhoneError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const setField = (k, v) => setForm((p) => ({ ...p, [k]: v }));

  const toggleService = (s) => {
    setForm((p) => ({
      ...p,
      services: p.services.includes(s)
        ? p.services.filter((x) => x !== s)
        : [...p.services, s],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (form.honeypot) return; // Anti-spam honeypot

    // 10-digit validation
    if (!/^\d{10}$/.test(form.phone.trim())) {
      setPhoneError("Please enter a valid 10-digit mobile number.");
      return;
    }
    setPhoneError("");

    // Email format validation
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      setEmailError("Please enter a valid email address.");
      return;
    }
    setEmailError("");

    if (form.services.length === 0) return;

    setLoading(true);
    // Simulate API request / backend handover
    await new Promise((r) => setTimeout(r, 900));
    setLoading(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section id="contact" className="py-28 bg-[#060606] flex items-center justify-center min-h-[60vh] border-t border-white/5">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center p-10 sm:p-14 border border-secondary/40 rounded-3xl bg-secondary/10 max-w-xl mx-6 shadow-2xl"
        >
          <div className="w-20 h-20 rounded-full bg-secondary/20 border border-secondary/40 flex items-center justify-center mx-auto mb-6 text-secondary">
            <CheckCircle2 size={40} />
          </div>
          <h2 className="text-3xl font-extrabold text-white mb-3" style={{ fontFamily: "Outfit, sans-serif" }}>
            Conversation Booked!
          </h2>
          <p className="text-gray-300 text-sm leading-relaxed mb-6">
            Thank you, <strong className="text-white">{form.name}</strong> from{" "}
            <strong className="text-white">{form.business}</strong>. We've received your consultation request. Our team will review your details and contact you within 24 hours.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-6">
            {/* Quick WhatsApp Action after submit */}
            <a
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                `Hi The AD House, I just submitted the 30-min conversation booking form for ${form.business} (${form.name}). Connecting here for faster response!`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-bold uppercase tracking-wider transition-all shadow-[0_0_20px_rgba(37,211,102,0.4)]"
            >
              <WhatsAppIcon size={18} />
              Fast Track on WhatsApp
            </a>

            <button
              onClick={() => {
                setSubmitted(false);
                setForm({
                  name: "",
                  business: "",
                  phone: "",
                  email: "",
                  city: "",
                  services: [],
                  goal: "",
                  budget: "",
                  preferredTime: "",
                  message: "",
                  consent: false,
                  honeypot: "",
                });
              }}
              className="px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-bold uppercase tracking-wider transition-all"
            >
              Submit Another Request
            </button>
          </div>
        </motion.div>
      </section>
    );
  }

  return (
    <section id="contact" className="perf-section py-24 md:py-32 bg-[#060606] relative overflow-hidden border-t border-white/5">
      <div className="absolute top-1/2 right-1/4 w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,_rgba(255,90,0,0.07)_0%,_transparent_70%)] pointer-events-none -z-10" />

      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Direct Wording & Contact Details */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5"
          >
            <div className="inline-flex items-center space-x-2 bg-secondary/10 border border-secondary/25 rounded-full px-4 py-1.5 mb-6">
              <span className="text-xs font-bold uppercase tracking-widest text-secondary" style={{ fontFamily: "Outfit, sans-serif" }}>
                10. CONSULTATION / CONTACT CTA
              </span>
            </div>

            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-5 text-white leading-tight"
              style={{ fontFamily: "Outfit, sans-serif" }}
            >
              Give Us{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-orange-400">
                30 Minutes.
              </span>
            </h2>

            <p className="text-gray-300 text-base sm:text-lg mb-8 leading-relaxed">
              We'll use that time to understand where your business is today and identify what the next 90 days could look like.
            </p>

            <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 mb-8 space-y-3 text-sm text-gray-300">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 size={16} className="text-secondary shrink-0" />
                <span>Zero sales pressure or aggressive pitch</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 size={16} className="text-secondary shrink-0" />
                <span>Thorough audit of your current digital bottlenecks</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 size={16} className="text-secondary shrink-0" />
                <span>Clear outline of high-leverage opportunities</span>
              </div>
            </div>

            {/* Direct WhatsApp Callout Card */}
            <div className="p-5 rounded-2xl bg-gradient-to-r from-[#25D366]/15 via-[#25D366]/5 to-transparent border border-[#25D366]/30 mb-8 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-xl bg-[#25D366] text-white flex items-center justify-center shadow-[0_0_15px_rgba(37,211,102,0.4)] shrink-0">
                  <WhatsAppIcon size={26} />
                </div>
                <div>
                  <h3 className="text-white font-bold text-sm">Prefer WhatsApp?</h3>
                  <p className="text-gray-400 text-xs">Chat directly with our strategy team</p>
                </div>
              </div>
              <a
                href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap shadow-[0_0_15px_rgba(37,211,102,0.3)] hover:scale-105 active:scale-95"
              >
                Chat Now
              </a>
            </div>

            {/* Quick Contact Details */}
            <div className="space-y-4 pt-4 border-t border-white/10">
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 rounded-xl bg-secondary/10 border border-secondary/20 flex items-center justify-center text-secondary shrink-0">
                  <Phone size={18} />
                </div>
                <div>
                  <p className="text-[11px] font-bold text-gray-400 uppercase tracking-wider">Phone / WhatsApp</p>
                  <a href={`tel:+918072005313`} className="text-white text-sm font-medium hover:text-secondary transition-colors">
                    +91 80720 05313
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 rounded-xl bg-secondary/10 border border-secondary/20 flex items-center justify-center text-secondary shrink-0">
                  <Mail size={18} />
                </div>
                <div>
                  <p className="text-[11px] font-bold text-gray-400 uppercase tracking-wider">Email</p>
                  <a href="mailto:hello@theadhouse.com" className="text-white text-sm font-medium hover:text-secondary transition-colors">
                    hello@theadhouse.com
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 rounded-xl bg-secondary/10 border border-secondary/20 flex items-center justify-center text-secondary shrink-0">
                  <MapPin size={18} />
                </div>
                <div>
                  <p className="text-[11px] font-bold text-gray-400 uppercase tracking-wider">Office Location</p>
                  <p className="text-white text-sm font-medium">177, Fathima nagar, n.k road, Thanjavur 613001</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 rounded-xl bg-secondary/10 border border-secondary/20 flex items-center justify-center text-secondary shrink-0">
                  <Clock size={18} />
                </div>
                <div>
                  <p className="text-[11px] font-bold text-gray-400 uppercase tracking-wider">Working Hours</p>
                  <p className="text-white text-sm font-medium">Mon &ndash; Sat: 9:30 AM &ndash; 7:00 PM</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Full Client-Specified Booking Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 rounded-3xl p-8 sm:p-10 border border-white/10 bg-gradient-to-b from-[#121212] to-[#080808] shadow-2xl"
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Anti-spam honeypot */}
              <input
                type="text"
                name="website"
                tabIndex={-1}
                autoComplete="off"
                style={{ display: "none" }}
                value={form.honeypot}
                onChange={(e) => setField("honeypot", e.target.value)}
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className={labelCls}>Full Name *</label>
                  <input
                    required
                    type="text"
                    className={inputCls}
                    placeholder="Your full name"
                    value={form.name}
                    onChange={(e) => setField("name", e.target.value)}
                  />
                </div>
                <div>
                  <label className={labelCls}>Business / Brand Name *</label>
                  <input
                    required
                    type="text"
                    className={inputCls}
                    placeholder="Company or brand name"
                    value={form.business}
                    onChange={(e) => setField("business", e.target.value)}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className={labelCls}>Phone / WhatsApp Number *</label>
                  <input
                    required
                    type="tel"
                    className={inputCls}
                    placeholder="10-digit mobile number"
                    maxLength={10}
                    value={form.phone}
                    onChange={(e) => {
                      setField("phone", e.target.value);
                      setPhoneError("");
                    }}
                  />
                  {phoneError && <p className="text-red-400 text-xs mt-1">{phoneError}</p>}
                </div>
                <div>
                  <label className={labelCls}>Email Address *</label>
                  <input
                    required
                    type="email"
                    className={inputCls}
                    placeholder="name@company.com"
                    value={form.email}
                    onChange={(e) => {
                      setField("email", e.target.value);
                      setEmailError("");
                    }}
                  />
                  {emailError && <p className="text-red-400 text-xs mt-1">{emailError}</p>}
                </div>
              </div>

              <div>
                <label className={labelCls}>City / Location (Optional)</label>
                <input
                  type="text"
                  className={inputCls}
                  placeholder="e.g. Chennai, Coimbatore, Bengaluru..."
                  value={form.city}
                  onChange={(e) => setField("city", e.target.value)}
                />
              </div>

              {/* Service Categories Selection */}
              <div>
                <label className={labelCls}>
                  Services Needed *{" "}
                  <span className="text-gray-400 font-normal normal-case tracking-normal">
                    (Select all that apply)
                  </span>
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 p-3 rounded-2xl bg-white/[0.02] border border-white/10">
                  {serviceCategoriesList.map((cat) => (
                    <label
                      key={cat}
                      className={`flex items-center space-x-3 p-3 rounded-xl border transition-all cursor-pointer ${
                        form.services.includes(cat)
                          ? "bg-secondary/15 border-secondary/50 text-white"
                          : "bg-white/[0.02] border-white/5 text-gray-300 hover:border-white/20"
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={form.services.includes(cat)}
                        onChange={() => toggleService(cat)}
                        className="accent-secondary w-4 h-4 rounded cursor-pointer"
                      />
                      <span className="text-xs sm:text-sm font-medium">{cat}</span>
                    </label>
                  ))}
                </div>
                {form.services.length === 0 && (
                  <p className="text-gray-400 text-xs mt-1">Please select at least one area of interest.</p>
                )}
              </div>

              {/* Main Goal and Budget in 2 columns */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className={labelCls}>Primary Business Goal *</label>
                  <select
                    required
                    className={inputCls + " cursor-pointer"}
                    value={form.goal}
                    onChange={(e) => setField("goal", e.target.value)}
                  >
                    <option value="" disabled className="bg-[#0a0a0a]">
                      Select what you want to achieve
                    </option>
                    {[
                      "Generate Qualified Leads",
                      "Drive In-Store / Showroom Footfall",
                      "Build Brand Awareness & Trust",
                      "Scale E-Commerce / Website Orders",
                      "Need Clear Marketing Direction First",
                      "Other",
                    ].map((g) => (
                      <option key={g} value={g} className="bg-[#0a0a0a] text-white">
                        {g}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className={labelCls}>Monthly Budget (Optional)</label>
                  <select
                    className={inputCls + " cursor-pointer"}
                    value={form.budget}
                    onChange={(e) => setField("budget", e.target.value)}
                  >
                    <option value="" className="bg-[#0a0a0a]">
                      Select approximate budget
                    </option>
                    {[
                      "Below ₹25,000",
                      "₹25,000 to ₹50,000",
                      "₹50,000 to ₹1,00,000",
                      "Above ₹1,00,000",
                      "Not sure / Let's discuss",
                    ].map((b) => (
                      <option key={b} value={b} className="bg-[#0a0a0a] text-white">
                        {b}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Preferred Time & Message */}
              <div>
                <label className={labelCls}>Preferred Contact Time (Optional)</label>
                <select
                  className={inputCls + " cursor-pointer"}
                  value={form.preferredTime}
                  onChange={(e) => setField("preferredTime", e.target.value)}
                >
                  <option value="" className="bg-[#0a0a0a]">
                    Any time that suits you
                  </option>
                  <option value="Morning (9:30 AM - 1:00 PM)" className="bg-[#0a0a0a]">
                    Morning (9:30 AM &ndash; 1:00 PM)
                  </option>
                  <option value="Afternoon (1:00 PM - 5:00 PM)" className="bg-[#0a0a0a]">
                    Afternoon (1:00 PM &ndash; 5:00 PM)
                  </option>
                  <option value="Evening (5:00 PM - 7:30 PM)" className="bg-[#0a0a0a]">
                    Evening (5:00 PM &ndash; 7:30 PM)
                  </option>
                </select>
              </div>

              <div>
                <label className={labelCls}>Your Message / Current Challenge (Optional)</label>
                <textarea
                  rows={3}
                  className={inputCls + " resize-none"}
                  placeholder="Tell us briefly about your business, current situation, or what you'd like to achieve in the next 90 days..."
                  value={form.message}
                  onChange={(e) => setField("message", e.target.value)}
                />
              </div>

              {/* Consent checkbox */}
              <div className="flex items-start space-x-3 pt-2">
                <input
                  required
                  type="checkbox"
                  id="consent"
                  checked={form.consent}
                  onChange={(e) => setField("consent", e.target.checked)}
                  className="mt-1 accent-secondary w-4 h-4 cursor-pointer"
                />
                <label htmlFor="consent" className="text-xs text-gray-400 cursor-pointer leading-relaxed">
                  I agree to be contacted by The AD House for a 30-minute strategic conversation under your{" "}
                  <button
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      if (onOpenLegal) onOpenLegal("privacy");
                      else window.location.hash = "privacy-policy";
                    }}
                    className="text-secondary underline hover:text-orange-400 transition-colors inline font-medium"
                  >
                    Privacy Policy
                  </button>{" "}
                  and{" "}
                  <button
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      if (onOpenLegal) onOpenLegal("terms");
                      else window.location.hash = "terms-of-service";
                    }}
                    className="text-secondary underline hover:text-orange-400 transition-colors inline font-medium"
                  >
                    Terms of Service
                  </button>
                  . No unsolicited spam, ever.
                </label>
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 px-6 rounded-xl bg-secondary hover:bg-orange-500 text-white font-bold text-sm uppercase tracking-wider transition-all duration-300 shadow-[0_0_25px_rgba(255,90,0,0.35)] hover:shadow-[0_0_35px_rgba(255,90,0,0.55)] flex items-center justify-center space-x-2 disabled:opacity-50"
              >
                {loading ? (
                  <span className="inline-block animate-spin mr-2">&#9696;</span>
                ) : null}
                <span>BOOK A 30-MINUTE CONVERSATION</span>
                <ArrowRight size={16} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
