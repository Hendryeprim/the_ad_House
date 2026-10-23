import React, { useState, useEffect } from "react";
import {
  X,
  ShieldCheck,
  FileText,
  Printer,
  Search,
  Lock,
  Scale,
  CheckCircle2,
  Mail,
  Phone,
  MapPin,
  Copy,
  Check,
} from "lucide-react";

export const LegalModal = ({ isOpen, initialTab = "privacy", onClose }) => {
  const [activeTab, setActiveTab] = useState(initialTab);
  const [searchQuery, setSearchQuery] = useState("");
  const [copiedEmail, setCopiedEmail] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  const handlePrint = () => {
    window.print();
  };

  const copyEmail = () => {
    navigator.clipboard.writeText("hello@theadhouse.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 bg-black/80 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="legal-modal-title"
    >
      <div
        className="relative w-full max-w-4xl max-h-[92vh] flex flex-col rounded-2xl bg-[#0c0c0e] border border-white/10 shadow-[0_20px_70px_rgba(0,0,0,0.85)] text-gray-200 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Subtle orange accent glow line on top */}
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-secondary to-transparent" />

        {/* Modal Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between p-5 md:p-6 border-b border-white/10 bg-[#09090b] gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-secondary/15 border border-secondary/30 flex items-center justify-center text-secondary">
              {activeTab === "privacy" ? (
                <ShieldCheck className="w-5 h-5 text-secondary" />
              ) : (
                <Scale className="w-5 h-5 text-secondary" />
              )}
            </div>
            <div>
              <h2
                id="legal-modal-title"
                className="text-lg sm:text-xl font-bold text-white tracking-tight"
                style={{ fontFamily: "Outfit, sans-serif" }}
              >
                {activeTab === "privacy" ? "Privacy Policy" : "Terms of Service"}
              </h2>
              <div className="flex items-center gap-2 text-xs text-gray-400">
                <span>The AD House</span>
                <span>&bull;</span>
                <span className="text-secondary font-medium">Updated Oct 2026</span>
                <span>&bull;</span>
                <span className="text-gray-400">Thanjavur, India</span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 self-end sm:self-center">
            {/* Print button */}
            <button
              onClick={handlePrint}
              type="button"
              className="px-3 py-1.5 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 text-xs text-gray-300 hover:text-white flex items-center gap-1.5 transition-colors"
              title="Print document"
            >
              <Printer className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Print</span>
            </button>

            {/* Close Button */}
            <button
              onClick={onClose}
              type="button"
              className="w-8 h-8 rounded-lg border border-white/10 bg-white/5 hover:bg-secondary/20 hover:text-secondary hover:border-secondary/30 flex items-center justify-center text-gray-400 transition-colors"
              aria-label="Close dialog"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Tab Switcher & Search Bar */}
        <div className="px-5 md:px-6 py-3 bg-[#0a0a0c] border-b border-white/5 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
          {/* Tabs */}
          <div className="flex rounded-xl bg-white/5 p-1 border border-white/10 self-start sm:self-auto">
            <button
              type="button"
              onClick={() => setActiveTab("privacy")}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                activeTab === "privacy"
                  ? "bg-secondary text-white shadow-md shadow-secondary/30"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              <ShieldCheck className="w-3.5 h-3.5" />
              Privacy Policy
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("terms")}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                activeTab === "terms"
                  ? "bg-secondary text-white shadow-md shadow-secondary/30"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              <FileText className="w-3.5 h-3.5" />
              Terms of Service
            </button>
          </div>

          {/* Quick Filter Search */}
          <div className="relative sm:w-64">
            <Search className="w-3.5 h-3.5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search in policy..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-8 pr-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-xs text-white placeholder-gray-400 focus:outline-none focus:border-secondary/50 transition-colors"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white text-xs"
              >
                &times;
              </button>
            )}
          </div>
        </div>

        {/* Modal Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-5 md:p-8 space-y-8 text-xs sm:text-sm leading-relaxed text-gray-300">
          {activeTab === "privacy" ? (
            <PrivacyPolicyContent searchQuery={searchQuery} />
          ) : (
            <TermsOfServiceContent searchQuery={searchQuery} />
          )}
        </div>

        {/* Modal Footer with Direct Contact */}
        <div className="p-4 md:px-6 bg-[#09090b] border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-400">
          <div className="flex items-center gap-2 text-center sm:text-left">
            <MapPin className="w-3.5 h-3.5 text-secondary shrink-0" />
            <span>177, Fathima nagar, n.k road, Thanjavur 613001, Tamil Nadu</span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={copyEmail}
              type="button"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-white/10 hover:border-secondary/40 text-gray-300 hover:text-white transition-colors"
            >
              {copiedEmail ? (
                <>
                  <Check className="w-3.5 h-3.5 text-green-400" />
                  <span className="text-green-400">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-gray-400" />
                  <span>Copy hello@theadhouse.com</span>
                </>
              )}
            </button>

            <button
              onClick={onClose}
              type="button"
              className="px-4 py-1.5 rounded-lg bg-secondary text-white font-medium hover:bg-orange-500 transition-colors"
            >
              Understood &amp; Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

/* =========================================================================
   PRIVACY POLICY CONTENT
   ========================================================================= */
const PrivacyPolicyContent = ({ searchQuery }) => {
  const sections = [
    {
      id: "intro",
      title: "1. Introduction & Overview",
      content: (
        <>
          <p className="mb-3">
            Welcome to <strong className="text-white">The AD House</strong> ("Company", "we", "our", or "us"). We operate under our signature philosophy:{" "}
            <span className="text-secondary font-medium">"30 Minutes to Know Who You Are. 90 Days to Define Where You Go."</span> We provide end-to-end strategic marketing, performance advertising, branding, video production, and technology development services.
          </p>
          <p>
            This Privacy Policy explains transparently how we collect, handle, protect, and process your personal and business information when you visit our website, book a 30-minute consultation call, communicate with us on WhatsApp or email, or engage our marketing services. We comply with applicable Indian privacy regulations, including the{" "}
            <strong className="text-white">Digital Personal Data Protection Act (DPDPA), 2023</strong> and international best practices.
          </p>
        </>
      ),
    },
    {
      id: "collection",
      title: "2. Information We Collect",
      content: (
        <>
          <p className="mb-2">We collect information strictly necessary to provide high-impact marketing strategy and campaign execution:</p>
          <ul className="list-disc pl-5 space-y-2 mb-3">
            <li>
              <strong className="text-white">Direct Consultation &amp; Inquiry Details:</strong> When you complete our contact or discovery forms, we collect your full name, business or brand name, business phone number, email address, physical location, industry category, primary business goal, approximate monthly marketing budget, and preferred call timings.
            </li>
            <li>
              <strong className="text-white">Client Project &amp; Campaign Assets:</strong> For engaged clients, we handle brand assets (logos, images, brand guidelines, footage), audience segments, and delegated access permissions to advertising managers (Meta Business Manager, Google Ads, YouTube Studio, Google Analytics). <span className="text-secondary">We never take ownership of your advertising accounts or customer data.</span>
            </li>
            <li>
              <strong className="text-white">Communication Records:</strong> WhatsApp messages, emails, discovery call notes, and meeting agendas to deliver continuous alignment during your 90-day execution cycle.
            </li>
            <li>
              <strong className="text-white">Automated Technical &amp; Analytics Data:</strong> IP address, device type, browser specifications, operating system, referring URL, pages visited, and interaction timestamps gathered anonymously to ensure website performance and security.
            </li>
          </ul>
        </>
      ),
    },
    {
      id: "usage",
      title: "3. How We Use Your Information",
      content: (
        <>
          <p className="mb-2">Your information is utilized solely for legitimate business purposes:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-3">
            <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5">
              <span className="text-secondary font-semibold block mb-1">Strategic Consultation</span>
              <p className="text-xs text-gray-400">Conducting your 30-minute diagnostic session to evaluate market positioning and growth gaps.</p>
            </div>
            <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5">
              <span className="text-secondary font-semibold block mb-1">90-Day Execution</span>
              <p className="text-xs text-gray-400">Architecting, producing, and optimizing high-ROI marketing campaigns across our 13 core services.</p>
            </div>
            <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5">
              <span className="text-secondary font-semibold block mb-1">Direct Support</span>
              <p className="text-xs text-gray-400">Providing transparent weekly progress reports, milestone reviews, and priority WhatsApp/Email assistance.</p>
            </div>
            <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5">
              <span className="text-secondary font-semibold block mb-1">Statutory Compliance</span>
              <p className="text-xs text-gray-400">Fulfilling Indian tax (GST), accounting, invoice archiving, and anti-fraud statutory duties.</p>
            </div>
          </div>
          <p className="text-xs text-gray-400">
            <strong className="text-white">Zero Spam Commitment:</strong> We do not spam. We only contact you in response to your explicit inquiry or ongoing project engagements.
          </p>
        </>
      ),
    },
    {
      id: "sharing",
      title: "4. No Sale of Data & Third-Party Disclosure",
      content: (
        <>
          <p className="mb-2 font-medium text-white">
            We will NEVER sell, lease, rent, or trade your personal or business data to brokers, advertisers, or third-party lists under any circumstances.
          </p>
          <p className="mb-2">We only share information with third parties in the following limited situations:</p>
          <ul className="list-disc pl-5 space-y-2 mb-2">
            <li>
              <strong className="text-white">Authorized Infrastructure Vendors:</strong> Reliable cloud hosting, encrypted database providers, professional email gateways, and analytics suites operating under strict confidentiality contracts.
            </li>
            <li>
              <strong className="text-white">Advertising Platforms:</strong> Ad networks (Meta, Google, LinkedIn) exclusively for launching and running your approved advertising campaigns through your delegated ad accounts.
            </li>
            <li>
              <strong className="text-white">Legal &amp; Regulatory Mandates:</strong> Where disclosure is required by Indian law, court order, or governmental authorities.
            </li>
          </ul>
        </>
      ),
    },
    {
      id: "security",
      title: "5. Data Security & Confidentiality",
      content: (
        <>
          <p className="mb-2">
            We apply rigorous technical and administrative safeguards to protect your business information from unauthorized access, accidental alteration, or disclosure:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 mb-3">
            <li>256-bit TLS/SSL encryption for all data transmitted across our website.</li>
            <li>Role-based access controls limiting client campaign data exclusively to assigned strategists and media buyers.</li>
            <li>Two-factor authentication (2FA) enforced on all agency operational systems.</li>
            <li>Immediate revocation of client ad account access upon contract conclusion.</li>
          </ul>
        </>
      ),
    },
    {
      id: "rights",
      title: "6. Your Data Rights (DPDPA 2023 Compliant)",
      content: (
        <>
          <p className="mb-2">Under the Indian Digital Personal Data Protection Act and recognized privacy standards, you have the right to:</p>
          <div className="space-y-2">
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
              <span><strong className="text-white">Access &amp; Confirmation:</strong> Request confirmation of what personal data we hold about your business.</span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
              <span><strong className="text-white">Correction &amp; Updating:</strong> Request immediate correction of inaccurate or outdated contact information.</span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
              <span><strong className="text-white">Erasure &amp; Deletion:</strong> Request the deletion of your inquiry data and marketing archives, subject to statutory GST tax retention requirements.</span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
              <span><strong className="text-white">Consent Revocation:</strong> Withdraw consent for future follow-up communications at any moment.</span>
            </div>
          </div>
          <p className="mt-3 text-xs text-gray-400">
            To exercise any of these rights, email us directly at <span className="text-white">hello@theadhouse.com</span> with the subject line "Data Request".
          </p>
        </>
      ),
    },
    {
      id: "cookies",
      title: "7. Cookies & Tracking Technologies",
      content: (
        <>
          <p className="mb-2">
            Our website uses small text files called cookies to guarantee essential site functionality, analyze traffic flows, and measure landing page effectiveness.
          </p>
          <p className="mb-2">
            You may adjust your browser preferences to decline non-essential cookies. Disabling cookies will not restrict your access to core website information or booking forms.
          </p>
        </>
      ),
    },
    {
      id: "contact",
      title: "8. Grievance Officer & Contact Details",
      content: (
        <>
          <p className="mb-3">
            If you have questions, feedback, or grievances regarding our privacy practices, please contact our designated Grievance Officer:
          </p>
          <div className="p-4 rounded-xl bg-white/[0.04] border border-white/10 space-y-2 text-xs">
            <div className="flex items-center gap-2">
              <span className="text-secondary font-semibold">Legal &amp; Privacy Officer:</span>
              <span className="text-white">The AD House Legal Team</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-3.5 h-3.5 text-secondary" />
              <a href="mailto:hello@theadhouse.com" className="text-white hover:underline">hello@theadhouse.com</a>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-3.5 h-3.5 text-secondary" />
              <a href="tel:+918072005313" className="text-white hover:underline">+91 80720 05313</a>
            </div>
            <div className="flex items-start gap-2">
              <MapPin className="w-3.5 h-3.5 text-secondary shrink-0 mt-0.5" />
              <span className="text-gray-300">177, Fathima nagar, n.k road, Thanjavur 613001, Tamil Nadu, India</span>
            </div>
          </div>
        </>
      ),
    },
  ];

  const filtered = sections.filter(
    (s) =>
      !searchQuery ||
      s.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (typeof s.content === "string" && s.content.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="space-y-6">
      <div className="p-4 rounded-xl bg-secondary/10 border border-secondary/20 flex items-start gap-3">
        <Lock className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
        <div className="text-xs">
          <p className="text-white font-semibold mb-1">Your Privacy is Protected</p>
          <p className="text-gray-300">
            The AD House treats your business vision, strategic ideas, and proprietary marketing metrics with utmost confidentiality. We build long-term partnerships rooted in transparency.
          </p>
        </div>
      </div>

      {filtered.length === 0 ? (
        <div className="text-center py-12 text-gray-500">
          No sections match your search query "{searchQuery}".
        </div>
      ) : (
        filtered.map((sec) => (
          <section key={sec.id} id={sec.id} className="border-b border-white/5 pb-6 last:border-b-0">
            <h3 className="text-base sm:text-lg font-bold text-white mb-3" style={{ fontFamily: "Outfit, sans-serif" }}>
              {sec.title}
            </h3>
            <div className="text-gray-300">{sec.content}</div>
          </section>
        ))
      )}
    </div>
  );
};

/* =========================================================================
   TERMS OF SERVICE CONTENT
   ========================================================================= */
const TermsOfServiceContent = ({ searchQuery }) => {
  const sections = [
    {
      id: "agreement",
      title: "1. Agreement & Acceptance",
      content: (
        <>
          <p className="mb-3">
            These Terms of Service ("Terms") constitute a legally binding agreement between you or the entity you represent ("Client", "you") and{" "}
            <strong className="text-white">The AD House</strong> ("Company", "we", "us").
          </p>
          <p>
            By visiting our website, submitting a consultation request, or signing a marketing proposal/Statement of Work (SOW), you acknowledge that you have read, understood, and agree to be bound by these Terms and our Privacy Policy.
          </p>
        </>
      ),
    },
    {
      id: "framework",
      title: "2. The 30 to 90 Methodology & Services",
      content: (
        <>
          <p className="mb-2">
            The AD House provides full-funnel marketing, creative, and technology solutions built upon our core operating principle:{" "}
            <strong className="text-secondary">"Direction First &bull; Execution Second"</strong>.
          </p>
          <div className="space-y-3 my-3">
            <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5">
              <span className="text-secondary font-semibold text-xs uppercase tracking-wider block mb-1">
                Phase 1 &bull; 30-Minute Strategic Diagnostic
              </span>
              <p className="text-xs text-gray-300">
                A structured discovery conversation to evaluate brand viability, target demographic, unit economics, and growth bottlenecks before any campaign budget is allocated.
              </p>
            </div>
            <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5">
              <span className="text-secondary font-semibold text-xs uppercase tracking-wider block mb-1">
                Phase 2 &bull; 90-Day High-Impact Execution Sprint
              </span>
              <p className="text-xs text-gray-300">
                A synchronized 3-month growth cycle executing across our 13 specialized capabilities in <strong className="text-white">Digital Marketing</strong> (Performance Ads, SEO, Social, Content), <strong className="text-white">Design &amp; Branding</strong> (Identity, Collateral, UI/UX), <strong className="text-white">Production &amp; Advertising</strong> (Commercials, Reels, Photography), and <strong className="text-white">Technology &amp; Development</strong>.
              </p>
            </div>
          </div>
          <p className="text-xs text-gray-400">
            Specific deliverables, timelines, key performance indicators (KPIs), and fees are documented in individualized proposals or contracts signed between both parties.
          </p>
        </>
      ),
    },
    {
      id: "responsibilities",
      title: "3. Client Obligations & Collaboration",
      content: (
        <>
          <p className="mb-2">To achieve optimum campaign velocity and return on ad spend (ROAS), the Client agrees to:</p>
          <ul className="list-disc pl-5 space-y-2 mb-2">
            <li>Provide accurate brand guidelines, past campaign history, product details, and required raw media assets in a timely manner.</li>
            <li>Grant necessary administrative access or partner delegate access to Meta Business Suite, Google Ads, tag managers, or website CMS.</li>
            <li>Review and provide approvals or constructive revisions on creative ad concepts, video cuts, and landing pages within mutually scheduled timeframes.</li>
            <li>Maintain active payment methods on third-party advertising platforms (Meta, Google) so ad delivery is not interrupted.</li>
          </ul>
        </>
      ),
    },
    {
      id: "adspend",
      title: "4. Third-Party Ad Spend & Platform Billing",
      content: (
        <>
          <p className="mb-2 font-medium text-white">
            Agency Management Fees and Advertising Budgets are completely distinct:
          </p>
          <ul className="list-disc pl-5 space-y-2 mb-3">
            <li>
              <strong className="text-white">Direct Ad Spend:</strong> All payments for media buys on Meta Ads (Facebook/Instagram), Google Ads, YouTube, LinkedIn, or print distribution are paid directly by the Client to the respective ad networks via the Client's own payment card or billing profile.
            </li>
            <li>
              <strong className="text-white">No Ad Spend Advancing:</strong> The AD House does not advance or float ad spend on behalf of clients.
            </li>
            <li>
              <strong className="text-white">Platform Compliance:</strong> Client warrants that all advertised goods, services, and claims comply with Meta Advertising Policies, Google Ads Policies, and applicable consumer laws.
            </li>
          </ul>
        </>
      ),
    },
    {
      id: "ip",
      title: "5. Intellectual Property Rights & Deliverables",
      content: (
        <>
          <div className="space-y-3">
            <div>
              <span className="text-white font-semibold block mb-1">&bull; Client Deliverables:</span>
              <p className="text-xs text-gray-300">
                Upon full payment of all agreed agency fees, the Client owns the approved final deliverables created specifically for them, including final video renders, graphic creatives, ad copy, branding collateral, and custom website source code.
              </p>
            </div>
            <div>
              <span className="text-white font-semibold block mb-1">&bull; Agency Retained Property:</span>
              <p className="text-xs text-gray-300">
                The AD House retains sole ownership of internal marketing methodologies, strategic blueprints ("30 to 90" conceptual framework), internal proprietary checklists, raw editable project templates, and pre-existing code libraries.
              </p>
            </div>
            <div>
              <span className="text-white font-semibold block mb-1">&bull; Portfolio Showcase Rights:</span>
              <p className="text-xs text-gray-300">
                The AD House reserves the customary agency right to showcase public marketing deliverables, creative visuals, and anonymized performance metrics (e.g. ROAS multipliers, lead growth rates) in our portfolio and social channels, unless the Client has executed a formal Non-Disclosure Agreement (NDA) restricting publicity.
              </p>
            </div>
          </div>
        </>
      ),
    },
    {
      id: "payments",
      title: "6. Invoicing, Payment Terms & Taxes",
      content: (
        <>
          <ul className="list-disc pl-5 space-y-2 mb-3">
            <li>
              <strong className="text-white">Retainers &amp; Sprints:</strong> Monthly retainers are invoiced in advance of each 30-day cycle. Milestone-based creative projects are invoiced per agreed milestone schedule (e.g., 50% mobilization advance, 50% upon final delivery).
            </li>
            <li>
              <strong className="text-white">Taxes:</strong> All invoices are subject to applicable Indian Goods and Services Tax (GST) as mandated by the Government of India.
            </li>
            <li>
              <strong className="text-white">Refund Policy:</strong> Because strategic time, creative ideation, and production resources are allocated immediately upon project kickoff, fees paid for completed strategy sessions, deployed campaigns, and approved deliverables are strictly non-refundable.
            </li>
          </ul>
        </>
      ),
    },
    {
      id: "disclaimer",
      title: "7. Realistic Marketing & Performance Disclaimer",
      content: (
        <>
          <p className="mb-2">
            The AD House commits to industry-leading strategic planning, rigorous A/B creative testing, data tracking, and proactive optimization.
          </p>
          <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10 text-xs space-y-2">
            <p className="text-white font-semibold">Important Market Realities:</p>
            <p className="text-gray-300">
              Marketing outcomes inherently rely on external variables beyond agency control, including consumer buying behavior, product-market fit, competitor price shifts, inventory availability, sales team closing ability, and platform algorithm changes (Meta, Google).
            </p>
            <p className="text-gray-400">
              Therefore, while we optimize aggressively for maximum ROI and ROAS, <strong className="text-white">no ethical agency can guarantee specific sales revenue, exact lead counts, or overnight viral outcomes.</strong> We build sustainable, data-backed growth engines.
            </p>
          </div>
        </>
      ),
    },
    {
      id: "confidentiality",
      title: "8. Confidentiality & Non-Disclosure",
      content: (
        <>
          <p className="mb-2">
            Both parties agree to hold all proprietary trade secrets, financial information, customer lists, and unpublished campaign concepts in strict confidence, using the same degree of care used to protect their own sensitive business secrets.
          </p>
        </>
      ),
    },
    {
      id: "termination",
      title: "9. Term, Pause & Termination",
      content: (
        <>
          <ul className="list-disc pl-5 space-y-2 mb-2">
            <li>
              <strong className="text-white">Notice Period:</strong> Ongoing monthly retainers may be concluded or paused by either party with a written notice of at least 14 days prior to the start of the next billing cycle.
            </li>
            <li>
              <strong className="text-white">Handover:</strong> Upon conclusion, all client credentials and approved deliverables will be handed over cleanly provided all outstanding invoices are settled in full.
            </li>
          </ul>
        </>
      ),
    },
    {
      id: "jurisdiction",
      title: "10. Governing Law & Dispute Resolution",
      content: (
        <>
          <p className="mb-2">
            These Terms of Service are governed by and construed in accordance with the laws of the <strong className="text-white">Republic of India</strong>.
          </p>
          <p className="mb-2">
            In the event of any controversy, dispute, or claim arising out of or relating to these Terms, the parties agree to first seek an amicable mutual resolution in good faith. If unresolved, the dispute shall be subject to the exclusive jurisdiction of the competent courts in <strong className="text-white">Thanjavur, Tamil Nadu, India</strong>.
          </p>
        </>
      ),
    },
    {
      id: "agency-contact",
      title: "11. Agency Address & Inquiries",
      content: (
        <>
          <div className="p-4 rounded-xl bg-white/[0.04] border border-white/10 space-y-1.5 text-xs">
            <p className="text-white font-bold text-sm">The AD House</p>
            <p className="text-gray-400">30 TO 90 &bull; SEE WHAT'S NEXT</p>
            <p className="text-gray-300">177, Fathima nagar, n.k road, Thanjavur 613001, Tamil Nadu, India</p>
            <p className="text-gray-300">
              Email: <a href="mailto:hello@theadhouse.com" className="text-secondary hover:underline">hello@theadhouse.com</a>
            </p>
            <p className="text-gray-300">
              Phone: <a href="tel:+918072005313" className="text-secondary hover:underline">+91 80720 05313</a>
            </p>
          </div>
        </>
      ),
    },
  ];

  const filtered = sections.filter(
    (s) =>
      !searchQuery ||
      s.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (typeof s.content === "string" && s.content.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="space-y-6">
      <div className="p-4 rounded-xl bg-secondary/10 border border-secondary/20 flex items-start gap-3">
        <Scale className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
        <div className="text-xs">
          <p className="text-white font-semibold mb-1">Clear, Honest Business Partnerships</p>
          <p className="text-gray-300">
            Our terms are built on mutual clarity, ethical marketing, and dedicated execution. No hidden clauses, no deceptive promises — just structured 90-day growth.
          </p>
        </div>
      </div>

      {filtered.length === 0 ? (
        <div className="text-center py-12 text-gray-500">
          No sections match your search query "{searchQuery}".
        </div>
      ) : (
        filtered.map((sec) => (
          <section key={sec.id} id={sec.id} className="border-b border-white/5 pb-6 last:border-b-0">
            <h3 className="text-base sm:text-lg font-bold text-white mb-3" style={{ fontFamily: "Outfit, sans-serif" }}>
              {sec.title}
            </h3>
            <div className="text-gray-300">{sec.content}</div>
          </section>
        ))
      )}
    </div>
  );
};

export default LegalModal;
