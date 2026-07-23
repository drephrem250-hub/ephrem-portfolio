import { useState, useEffect, useRef } from "react";
import "./portfolio.css";

// ─── INITIAL DATA ───────────────────────────────────────────────────────────
const INITIAL_DATA = {
  profile: {
    name: "Ephrem Dushimimana",
    title: "Medical Student | Researcher | Writer | Public Health Innovator",
    tagline: "I am a medical student passionate about oncology, public health equity, research, and innovation. My work focuses on building solutions, writing ideas that matter, and contributing to health and community transformation in Rwanda and beyond.",
    email: "ephrem@example.com",
    phone: "+250 700 000 000",
    linkedin: "linkedin.com/in/ephremdushimimana",
    twitter: "@EphremDushi",
    whatsapp: "+250700000000",
    instagram: "@ephremdushi",
    facebook: "facebook.com/ephremdushimimana",
    researchgate: "researchgate.net/profile/Ephrem-Dushimimana",
    github: "github.com/ephremdushi",
    youtube: "",
    orcid: "0000-0000-0000-0000",
    googlescholar: "",
    location: "Kigali, Rwanda",
    timezone: "CAT (UTC+2)",
    photo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='500' viewBox='0 0 400 500'%3E%3Crect width='400' height='500' rx='36' fill='%23E9D8C8'/%3E%3Ccircle cx='200' cy='180' r='90' fill='%234A4340'/%3E%3Cpath d='M86 440c18-92 89-155 114-155 25 0 96 63 114 155' fill='%234A4340'/%3E%3Ctext x='200' y='470' text-anchor='middle' fill='%23E63946' font-size='42' font-family='Arial, sans-serif' font-weight='700'%3EED%3C/text%3E%3C/svg%3E",
    cvUrl: "",
    openToWork: true,
    openToCollaboration: true,
    mission: "To bridge the gap between clinical medicine, digital innovation, and community health — building equitable, technology-driven solutions that transform healthcare in Africa and beyond.",
    vision: "A future where every person, regardless of geography or circumstance, has access to high-quality, dignified, and innovative healthcare."
  },
  about: {
    bio: "I am Ephrem Dushimimana, a medical student and public health advocate from Rwanda. My academic journey is shaped by a deep commitment to health equity, digital health innovation, and sexual and reproductive health (SRH) rights.\n\nBeyond medicine, I am a researcher, writer, and community builder. I believe that transforming healthcare requires more than clinical skills — it demands creativity, technology, and the courage to challenge the systems that keep communities underserved.",
    interests: ["Oncology", "Digital Health", "SRH & Reproductive Rights", "Health Equity", "AI in Medicine", "Global Health Policy"],
    leadership: [
      { role: "SRH Advocacy Lead", org: "Organization Name", year: "2022–2023" },
      { role: "Digital Health Innovator", org: "Program Name", year: "2023–Present" },
      { role: "Student Representative", org: "Medical School Council", year: "2021–Present" }
    ]
  },
  education: [
    { degree: "Doctor of Medicine (MD)", institution: "University of Rwanda", period: "2021–Present", desc: "Focus on global health, digital medicine, and reproductive health. Active in student-led research and advocacy initiatives." },
    { degree: "Bachelor of Science", institution: "Institution Name", period: "2018–2021", desc: "Graduated with distinction. Thesis on community health interventions." }
  ],
  experience: [
    { role: "Digital Health Innovator", org: "Organization / Program", period: "2023–Present", desc: "Designing and piloting mHealth tools to improve SRH access in low-resource settings." },
    { role: "SRH Advocacy Lead", org: "Organization Name", period: "2022–2023", desc: "Led campaigns reaching 10,000+ young people on SRHR education and policy change." },
    { role: "Research Assistant", org: "Lab / Institution", period: "2021–2022", desc: "Supported data collection and analysis for clinical research projects." }
  ],
  awards: [
    { title: "Best Student Research Award", org: "University of Rwanda", year: "2023", desc: "Recognized for excellence in undergraduate research on digital health interventions." },
    { title: "SRH Youth Leadership Fellowship", org: "Global Health Organization", year: "2022", desc: "Competitive fellowship for young leaders advancing sexual and reproductive health rights in Africa." },
    { title: "Innovation in Health Award", org: "Rwanda Health Innovation Summit", year: "2023", desc: "Awarded for development of an mHealth application addressing SRH access barriers." }
  ],
  research: [
    { title: "Digital Health Interventions for SRH in Sub-Saharan Africa", type: "Systematic Review", status: "Under Review", year: "2024", journal: "Global Health Journal", role: "Lead Author", summary: "A comprehensive review of mobile health platforms and their effectiveness in improving sexual and reproductive health outcomes across Sub-Saharan Africa.", link: "" },
    { title: "Barriers to Contraceptive Access Among University Students", type: "Conference Abstract", status: "Published", year: "2023", journal: "African Health Conference", role: "Lead Author", summary: "Investigating structural, social, and knowledge barriers that prevent university students from accessing modern contraception in Rwanda.", link: "" },
    { title: "AI-Assisted Triage Systems in Low-Resource Emergency Departments", type: "Policy Brief", status: "Published", year: "2024", journal: "Health Policy Review", role: "Co-Author", summary: "Evaluating the feasibility and equity implications of deploying AI triage tools in under-resourced emergency care settings.", link: "" },
    { title: "Telemedicine Uptake and Patient Satisfaction Post-COVID-19 in East Africa", type: "Original Research", status: "In Progress", year: "2024", journal: "East Africa Medical Journal", role: "Lead Author", summary: "Longitudinal study tracking telemedicine adoption patterns and perceived quality of care in three East African countries.", link: "" }
  ],
  writing: [
    { title: "Why Africa's Youth Need Digital SRH Tools Now", type: "Op-Ed", publication: "Health Africa", year: "2024", excerpt: "Arguing for urgent investment in mobile-first reproductive health platforms tailored to the needs of young Africans.", link: "" },
    { title: "From Classroom to Clinic: Notes on Medical Education in a Digital Age", type: "Feature", publication: "MedStudent Blog", year: "2024", excerpt: "Reflecting on the transformation of medical training and what it means to be a doctor in an era defined by AI and data.", link: "" },
    { title: "Health Equity is Not a Buzzword", type: "Essay", publication: "Public Health Review", year: "2023", excerpt: "A critical analysis of systemic inequities in African healthcare systems and pathways toward meaningful reform.", link: "" },
    { title: "The Promise and Peril of AI in Low-Income Healthcare Settings", type: "Commentary", publication: "Digital Health Today", year: "2023", excerpt: "Examining how artificial intelligence can both widen and narrow health disparities depending on implementation context.", link: "" }
  ],
  presentations: [
    { title: "Digital Innovation for Equitable SRH: Opportunities Across Africa", type: "Keynote", event: "Africa Health Summit", location: "Nairobi, Kenya", year: "2024", fileUrl: "" },
    { title: "Young Leaders in Global Health: Technology as a Lever for Change", type: "Panel Discussion", event: "Global Health Forum", location: "Virtual", year: "2024", fileUrl: "" },
    { title: "AI-Assisted Diagnostics: Lessons from a Low-Resource Pilot Study", type: "Conference Talk", event: "Rwanda Medical Conference", location: "Kigali, Rwanda", year: "2023", fileUrl: "" },
    { title: "Designing mHealth Solutions for Marginalized Communities", type: "Workshop", event: "Health Innovation Hackathon", location: "Kampala, Uganda", year: "2023", fileUrl: "" }
  ],
  projects: [
    { title: "SRH-Connect", type: "Digital Health Tool", stage: "Pilot", problem: "Limited access to SRH information and services for rural youth in Rwanda.", solution: "A mobile platform providing SRH education, provider directories, and anonymous Q&A with health professionals.", impact: "Piloted with 500 users across 3 districts. 87% reported improved SRH knowledge.", collaborating: true },
    { title: "AI Triage Assistant", type: "Health Innovation", stage: "Concept", problem: "Overburdened emergency departments with inadequate triage systems in low-resource settings.", solution: "AI-powered symptom checker and triage support tool designed for community health workers.", impact: "Proof of concept validated with emergency medicine faculty.", collaborating: true },
    { title: "Health Equity Policy Brief Series", type: "Advocacy Initiative", stage: "Active", problem: "Policy makers lack accessible, evidence-based briefs on health equity issues in Rwanda.", solution: "Series of short, actionable policy briefs written for non-specialist audiences and distributed to decision-makers.", impact: "3 briefs published; distributed to Ministry of Health.", collaborating: false }
  ],
  initiatives: [
    { title: "SRH Advocacy & Policy", icon: "🏛️", color: "#E63946", type: "Policy & Advocacy", stage: "Active", desc: "Leading evidence-based campaigns and policy briefs to advance sexual and reproductive health rights in Rwanda and across East Africa. Working with civil society, student networks, and government stakeholders to drive systemic change.", impact: "Policy briefs distributed to Ministry of Health; 10,000+ youth reached through campaigns." },
    { title: "Community Health Equity", icon: "🤝", color: "#2A9D8F", type: "Community Initiative", stage: "Active", desc: "Building grassroots programs that address social determinants of health in underserved communities, with a focus on rural Rwanda and peri-urban populations.", impact: "Ongoing partnerships with 3 community health worker networks." },
    { title: "Digital Health Literacy", icon: "📱", color: "#D4A574", type: "Education Initiative", stage: "Pilot", desc: "Training young people and community health workers to leverage digital tools for health information access, telemedicine, and self-advocacy.", impact: "First cohort of 80 participants trained across 2 districts." },
    { title: "Global Health Equity Journalism", icon: "✍️", color: "#2C3E50", type: "Media & Advocacy", stage: "Active", desc: "Publishing op-eds, commentaries, and essays in African and international health media to shift narratives around health equity, reproductive rights, and digital health in low-resource settings.", impact: "4+ publications across global health platforms." }
  ]
};

// ─── ICONS ───────────────────────────────────────────────────────────────────
const Icon = ({ name, size = 18 }) => {
  const icons = {
    menu: "M3 12h18M3 6h18M3 18h18",
    x: "M18 6L6 18M6 6l12 12",
    edit: "M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z",
    plus: "M12 5v14M5 12h14",
    trash: "M3 6h18M8 6V4h8v2M19 6l-1 14H6L5 6",
    save: "M19 21H5a2 2 0 01-2-2V5a2 2 0 012-2h11l5 5v11a2 2 0 01-2 2zM17 21v-8H7v8M7 3v5h8",
    eye: "M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8zM12 9a3 3 0 100 6 3 3 0 000-6z",
    chevronR: "M9 18l6-6-6-6",
    download: "M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3",
    mail: "M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2zM22 6l-10 7L2 6",
    link: "M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71",
    settings: "M12 15a3 3 0 100-6 3 3 0 000 6zM19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z",
    user: "M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2M12 11a4 4 0 100-8 4 4 0 000 8z",
    book: "M4 19.5A2.5 2.5 0 016.5 17H20M4 19.5A2.5 2.5 0 004 17V4h16v13M4 19.5V20a2 2 0 002 2h12a2 2 0 002-2v-.5",
    mic: "M12 1a3 3 0 00-3 3v8a3 3 0 006 0V4a3 3 0 00-3-3zM19 10v2a7 7 0 01-14 0v-2M12 19v4M8 23h8",
    award: "M12 15l-4 4 1-5-4-3 5-.5L12 6l2 4.5 5 .5-4 3 1 5-4-4z",
    flask: "M9 3h6M9 3v7L5 20h14L15 10V3",
    home: "M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2zM9 22V12h6v10",
    logout: "M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4M16 17l5-5-5-5M21 12H9",
    phone: "M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z",
    mappin: "M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0zM12 7a3 3 0 100 6 3 3 0 000-6z",
    globe: "M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10zM2 12a10 10 0 1020 0A10 10 0 002 12z",
    send: "M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z",
    at: "M12 20h9M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z",
  };
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d={icons[name]} />
    </svg>
  );
};

// Social brand icons as inline SVG (no library needed)
const SocialBrandIcon = ({ platform, size = 20 }) => {
  const brands = {
    linkedin: <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>,
    twitter:  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>,
    instagram:<svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>,
    facebook: <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>,
    whatsapp: <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M11.5 2C6.262 2 2 6.262 2 11.5a9.463 9.463 0 001.386 4.942L2 22l5.686-1.375A9.463 9.463 0 0011.5 22c5.238 0 9.5-4.262 9.5-9.5S16.738 2 11.5 2z"/></svg>,
    researchgate: <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor"><text x="2" y="18" fontSize="14" fontWeight="bold" fontFamily="serif">RG</text></svg>,
    github:   <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22"/></svg>,
    orcid:    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="10" fill="#A6CE39" opacity="0.2"/><text x="3.5" y="16" fontSize="9" fontWeight="bold" fill="#A6CE39">iD</text></svg>,
    scholar:  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor"><path d="M12 3L2 9l10 6 10-6-10-6zM2 15l10 6 10-6M2 12l10 6 10-6"/></svg>,
    youtube:  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor"><path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 00-1.95 1.96A29 29 0 001 12a29 29 0 00.46 5.58A2.78 2.78 0 003.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.95A29 29 0 0023 12a29 29 0 00-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white"/></svg>,
    email:    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2zM22 6l-10 7L2 6"/></svg>,
  };
  return brands[platform] || <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/></svg>;
};

// ─── STORAGE ─────────────────────────────────────────────────────────────────
const DEFAULT_ADMIN_PASSWORD = process.env.REACT_APP_ADMIN_PASSWORD || "Soulmate@250";
const ADMIN_PASSWORD_STORAGE_KEY = "ephrem_portfolio_admin_password";
let adminPasswordInMemory = DEFAULT_ADMIN_PASSWORD;

const isStrongAdminPassword = (password) => {
  return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{12,}$/.test(password);
};

const getStoredAdminPassword = () => {
  try {
    const sessionPassword = window.sessionStorage.getItem(ADMIN_PASSWORD_STORAGE_KEY);
    if (sessionPassword) {
      adminPasswordInMemory = sessionPassword;
      return sessionPassword;
    }
  } catch {}

  return adminPasswordInMemory;
};

const setStoredAdminPassword = (password) => {
  adminPasswordInMemory = password;
  try {
    window.sessionStorage.setItem(ADMIN_PASSWORD_STORAGE_KEY, password);
  } catch {}
};

const useStorage = () => {
  const [data, setData] = useState(INITIAL_DATA);
  useEffect(() => {
    try {
      const saved = window.storage ? null : null; // use in-memory
      const local = localStorage.getItem("ephrem_portfolio");
      if (local) setData(JSON.parse(local));
    } catch {}
  }, []);
  const save = (newData) => {
    setData(newData);
    try { localStorage.setItem("ephrem_portfolio", JSON.stringify(newData)); } catch {}
  };
  return [data, save];
};

// ═══════════════════════════════════════════════════════════════════════════
// PORTFOLIO SITE
// ═══════════════════════════════════════════════════════════════════════════
const PortfolioSite = ({ data, onAdminClick }) => {
  const [activePage, setActivePage] = useState("home");
  const [mobileOpen, setMobileOpen] = useState(false);
  const navItems = ["Home","About","Research","Ventures","Initiatives","Innovation Lab","Writing","Speaking","CV","Contact"];

  return (
    <div style={{ fontFamily: "'DM Sans', system-ui, sans-serif", background: "#F9F7F3", minHeight: "100vh", color: "#1A1612" }}>
      {/* NAV */}
      <nav style={{ position:"fixed", top:0, left:0, right:0, zIndex:1000, background:"rgba(249,247,243,0.92)", backdropFilter:"blur(12px)", borderBottom:"1px solid #E8E0D5", padding:"0 clamp(1rem, 5vw, 2rem)", height:"60px", display:"flex", alignItems:"center", justifyContent:"space-between" }}>
        <span onClick={()=>setActivePage("home")} style={{ fontFamily:"'DM Serif Display',serif", fontSize:"1.1rem", cursor:"pointer", letterSpacing:"0.01em" }}>Ephrem Dushimimana</span>
        <div className="nav-desktop" style={{ display:"flex", gap:"1.8rem", alignItems:"center" }}>
          {navItems.map(n=>(
            <span key={n} className={`nav-link ${activePage===n.toLowerCase()?"active":""}`} onClick={()=>setActivePage(n.toLowerCase())}>{n}</span>
          ))}
        </div>
        <div style={{ display:"flex", gap:"0.75rem", alignItems:"center" }}>
          <button onClick={onAdminClick} style={{ background:"none", border:"1px solid #E8E0D5", borderRadius:"4px", padding:"0.4rem 0.7rem", cursor:"pointer", color:"#4A4340", fontSize:"0.7rem", fontFamily:"'JetBrains Mono',monospace", letterSpacing:"0.08em" }}>ADMIN</button>
          <button className="nav-mobile-btn" onClick={()=>setMobileOpen(!mobileOpen)} style={{ background:"none", border:"none", cursor:"pointer" }}><Icon name="menu"/></button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div style={{ position:"fixed", inset:0, zIndex:999, background:"rgba(249,247,243,0.98)", display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", gap:"2rem" }}>
          <button onClick={()=>setMobileOpen(false)} style={{ position:"absolute", top:"1.5rem", right:"1.5rem", background:"none", border:"none", cursor:"pointer" }}><Icon name="x" size={24}/></button>
          {navItems.map(n=>(
            <span key={n} style={{ fontFamily:"'DM Serif Display',serif", fontSize:"2rem", cursor:"pointer", color: activePage===n.toLowerCase()?"#E63946":"#1A1612" }} onClick={()=>{setActivePage(n.toLowerCase());setMobileOpen(false)}}>{n}</span>
          ))}
        </div>
      )}

      <div style={{ paddingTop:"60px" }}>
        {activePage==="home" && <HomePage data={data} onNav={setActivePage}/>}
        {activePage==="about" && <AboutPage data={data}/>}
        {activePage==="research" && <ResearchPage data={data}/>}
        {activePage==="ventures" && <VenturesPage data={data}/>}
        {activePage==="initiatives" && <InitiativesPage data={data}/>}
        {activePage==="innovation lab" && <InnovationLabPage data={data}/>}
        {activePage==="writing" && <WritingPage data={data}/>}
        {activePage==="speaking" && <SpeakingPage data={data}/>}
        {activePage==="cv" && <CVPage data={data}/>}
        {activePage==="contact" && <ContactPage data={data}/>}
        <SiteFooter data={data} onNav={setActivePage}/>
      </div>
    </div>
  );
};

// ─── HOME PAGE ────────────────────────────────────────────────────────────────
const HomePage = ({ data, onNav }) => {
  const { profile, research, writing, projects } = data;
  return (
    <div className="fade-in">
      {/* HERO */}
      <section style={{ minHeight:"calc(100vh - 60px)", display:"grid", gridTemplateColumns:"repeat(auto-fit, minmax(300px, 1fr))", background:"#F9F7F3", position:"relative", overflow:"hidden" }}>
        <div style={{ display:"flex", flexDirection:"column", justifyContent:"center", padding:"clamp(2rem, 8vw, 8rem) clamp(1.5rem, 5vw, 5rem)", position:"relative", zIndex:1 }}>
          <div className="mono" style={{ fontSize:"0.7rem", letterSpacing:"0.18em", textTransform:"uppercase", color:"#E63946", marginBottom:"1.2rem" }}>Medical Student · Digital Health · SRH Advocate</div>
          <h1 className="serif" style={{ fontSize:"clamp(2rem, 5vw, 5.5rem)", lineHeight:1.02, marginBottom:"0.6rem" }}>
            {profile.name.split(" ")[0]}<br/>
            <em style={{ color:"#E63946" }}>{profile.name.split(" ").slice(1).join(" ")}</em>
          </h1>
          <p className="serif" style={{ fontSize:"clamp(0.9rem, 2vw, 1.15rem)", fontStyle:"italic", color:"#4A4340", maxWidth:"460px", marginBottom:"1rem", lineHeight:1.7 }}>
            {profile.tagline}
          </p>
          <div style={{ display:"inline-flex", alignItems:"center", gap:"0.6rem", padding:"0.65rem 0.95rem", borderRadius:"999px", background:"rgba(255,255,255,0.75)", border:"1px solid #E8E0D5", marginBottom:"2rem", width:"fit-content", boxShadow:"0 8px 24px rgba(15,13,11,0.05)" }}>
            <span style={{ width:"8px", height:"8px", borderRadius:"50%", background:"#E63946" }}></span>
            <span className="mono" style={{ fontSize:"0.65rem", letterSpacing:"0.12em", textTransform:"uppercase", color:"#4A4340" }}>Research-led • Community-focused • Built for impact</span>
          </div>
          <div style={{ display:"flex", gap:"0.6rem", flexWrap:"wrap", marginBottom:"2.5rem" }}>
            {["Medicine","Digital Health","SRH Advocacy","Research"].map((p,i)=>(
              <span key={p} className="pill" style={{ background:["#E63946","#2A9D8F","#D4A574","#2C3E50"][i], color:"#fff" }}>{p}</span>
            ))}
          </div>
          <div style={{ display:"flex", gap:"1rem", flexWrap:"wrap" }}>
            <button className="btn-primary" onClick={()=>onNav("cv")}>View CV</button>
            <button className="btn-outline" onClick={()=>onNav("research")}>Research</button>
            {profile.cvUrl && <a href={profile.cvUrl} className="btn-outline" target="_blank" rel="noreferrer" style={{ display:"flex", alignItems:"center", gap:"0.4rem" }}><Icon name="download" size={15}/> Download CV</a>}
          </div>
        </div>
        <div style={{ background:"linear-gradient(135deg,#F0E9E0,#E8D5C4)", display:"flex", alignItems:"center", justifyContent:"center", position:"relative", overflow:"hidden", minHeight:"400px" }}>
          <div style={{ position:"absolute", width:"420px", height:"420px", borderRadius:"50%", background:"radial-gradient(circle,#E6394622,transparent)", animation:"pulse 6s ease-in-out infinite" }}></div>
          <ProfilePhoto photo={profile.photo} name={profile.name} />
          <div style={{ position:"absolute", bottom:"20%", left:"8%", background:"#fff", border:"1px solid #E8E0D5", borderRadius:"6px", padding:"0.8rem 1.2rem", boxShadow:"8px 8px 24px rgba(0,0,0,0.08)", zIndex:3 }}>
            <div className="serif" style={{ fontSize:"1.8rem", color:"#E63946", lineHeight:1 }}>{data.research.length}</div>
            <div style={{ fontSize:"0.72rem", color:"#4A4340", marginTop:"0.15rem", fontWeight:500 }}>Research Projects</div>
          </div>
          <div style={{ position:"absolute", top:"25%", right:"8%", background:"#fff", border:"1px solid #E8E0D5", borderRadius:"6px", padding:"0.8rem 1.2rem", boxShadow:"8px 8px 24px rgba(0,0,0,0.08)", zIndex:3 }}>
            <div className="serif" style={{ fontSize:"1.8rem", color:"#2A9D8F", lineHeight:1 }}>{data.writing.length}</div>
            <div style={{ fontSize:"0.72rem", color:"#4A4340", marginTop:"0.15rem", fontWeight:500 }}>Published Articles</div>
          </div>
        </div>
        <style>{`@keyframes pulse{0%,100%{transform:scale(1)}50%{transform:scale(1.08)}}
          @media(max-width:768px){
            section{min-height:auto;grid-template-columns:1fr}
            section > div:last-child{min-height:300px}
            .serif{font-size:clamp(1.2rem,4vw,2.8rem)!important}
          }
        `}</style>
      </section>

      {/* FEATURED RESEARCH */}
      <section style={{ padding:"clamp(2rem, 8vw, 5rem) clamp(1.5rem, 5vw, 4rem)", background:"#fff" }}>
        <SectionHeader num="01" title="Featured Research" />
        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill, minmax(280px, 1fr))", gap:"1.2rem", marginBottom:"2rem" }}>
          {research.slice(0,3).map((r,i)=>(
            <div key={i} className="card">
              <div className="mono" style={{ fontSize:"0.63rem", letterSpacing:"0.1em", textTransform:"uppercase", color:"#2A9D8F", marginBottom:"0.7rem" }}>◆ {r.type}</div>
              <div className="serif" style={{ fontSize:"1.05rem", marginBottom:"0.7rem", lineHeight:1.35 }}>{r.title}</div>
              <div style={{ fontSize:"0.8rem", color:"#4A4340", lineHeight:1.6, marginBottom:"1rem" }}>{r.summary.substring(0,100)}...</div>
              <span style={{ background: r.status==="Published"?"#2A9D8F22":r.status==="Under Review"?"#D4A57422":"#E6394622", color: r.status==="Published"?"#2A9D8F":r.status==="Under Review"?"#D4A574":"#E63946", padding:"0.2rem 0.6rem", borderRadius:"2rem", fontSize:"0.7rem", fontWeight:600 }}>{r.status}</span>
            </div>
          ))}
        </div>
        <button className="btn-outline" onClick={()=>onNav("research")}>All Research →</button>
      </section>

      {/* FEATURED WRITING */}
      <section style={{ padding:"clamp(2rem, 8vw, 5rem) clamp(1.5rem, 5vw, 4rem)", background:"#F9F7F3" }}>
        <SectionHeader num="02" title="Latest Writing" />
        {writing.slice(0,3).map((w,i)=>(
          <div key={i} className="writing-row">
            <div className="mono" style={{ fontSize:"0.7rem", color:"#4A4340", opacity:0.5, paddingTop:"3px" }}>{w.year}</div>
            <div>
              <div className="mono" style={{ fontSize:"0.63rem", letterSpacing:"0.1em", textTransform:"uppercase", color:"#2A9D8F", marginBottom:"0.25rem" }}>{w.type} · {w.publication}</div>
              <div className="serif writing-row-title" style={{ fontSize:"1.1rem", marginBottom:"0.3rem", lineHeight:1.35, transition:"color 0.2s" }}>{w.title}</div>
              <div style={{ fontSize:"0.8rem", color:"#4A4340", marginBottom:"0.6rem" }}>{w.excerpt.substring(0,90)}...</div>
              {w.link && (
                <a href={w.link} target="_blank" rel="noreferrer" style={{ color:"#E63946", fontWeight:600, fontSize:"0.8rem", textDecoration:"none" }}>
                  Read article →
                </a>
              )}
            </div>
            <div className="arrow">→</div>
          </div>
        ))}
        <button className="btn-outline" style={{ marginTop:"1.5rem" }} onClick={()=>onNav("writing")}>All Writing →</button>
      </section>

      {/* FEATURED PROJECTS */}
      <section style={{ padding:"clamp(2rem, 8vw, 5rem) clamp(1.5rem, 5vw, 4rem)", background:"#0F0D0B" }}>
        <SectionHeader num="03" title="Ventures & Innovation" light/>
        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill, minmax(300px, 1fr))", gap:"1.2rem" }}>
          {projects.slice(0,3).map((p,i)=>(
            <div key={i} style={{ background:"rgba(255,255,255,0.04)", border:"1px solid rgba(255,255,255,0.1)", borderRadius:"6px", padding:"1.8rem", position:"relative", overflow:"hidden" }}>
              <div className="mono" style={{ fontSize:"0.63rem", letterSpacing:"0.1em", textTransform:"uppercase", color:"#E8654A", marginBottom:"0.7rem" }}>{p.type} · {p.stage}</div>
              <div className="serif" style={{ fontSize:"1.1rem", color:"#fff", marginBottom:"0.8rem", lineHeight:1.35 }}>{p.title}</div>
              <div style={{ fontSize:"0.8rem", color:"rgba(255,255,255,0.55)", lineHeight:1.6 }}>{p.solution.substring(0,100)}...</div>
              {p.collaborating && <div style={{ marginTop:"1rem", display:"inline-flex", alignItems:"center", gap:"0.4rem", fontSize:"0.75rem", color:"#E8654A", border:"1px solid #E8654A33", padding:"0.25rem 0.7rem", borderRadius:"3px" }}>🤝 Open to Collaborate</div>}
            </div>
          ))}
        </div>
        <button className="btn-primary" style={{ marginTop:"2rem", background:"transparent", borderColor:"rgba(255,255,255,0.3)", color:"#fff" }} onClick={()=>onNav("ventures")}>All Ventures →</button>
      </section>

      {/* CTA */}
      <section style={{ padding:"clamp(2rem, 8vw, 5rem) clamp(1.5rem, 5vw, 4rem)", background:"#E63946", textAlign:"center" }}>
        <div className="serif" style={{ fontSize:"clamp(1.4rem, 4vw, 2.8rem)", color:"#fff", marginBottom:"1rem", fontStyle:"italic" }}>Let's build something meaningful together.</div>
        <p style={{ color:"rgba(255,255,255,0.75)", marginBottom:"2rem", fontSize:"1rem" }}>Research · Ventures · Digital Health Innovation</p>
        <button className="btn-primary" style={{ background:"#fff", color:"#E63946", borderColor:"#fff" }} onClick={()=>onNav("contact")}>Get In Touch</button>
      </section>
    </div>
  );
};

// ─── ABOUT PAGE ───────────────────────────────────────────────────────────────
const AboutPage = ({ data }) => {
  const { profile, about } = data;
  return (
    <div className="fade-in" style={{ padding:"clamp(2rem, 8vw, 4rem) clamp(1.5rem, 5vw, 5rem)" }}>
      <SectionHeader num="01" title="About Me"/>
      <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit, minmax(300px, 1fr))", gap:"clamp(2rem, 5vw, 4rem)", marginBottom:"4rem", alignItems:"start" }}>
        <div>
          {about.bio.split("\n\n").map((p,i)=>(
            <p key={i} style={{ color:"#4A4340", marginBottom:"1.2rem", fontSize:"1.05rem", lineHeight:1.8 }}>{p}</p>
          ))}
          <div style={{ marginTop:"2rem" }}>
            <div className="mono" style={{ fontSize:"0.65rem", letterSpacing:"0.12em", textTransform:"uppercase", color:"#2A9D8F", marginBottom:"0.8rem" }}>Research & Practice Interests</div>
            <div style={{ display:"flex", flexWrap:"wrap", gap:"0.5rem" }}>
              {about.interests.map(i=>(
                <span key={i} style={{ background:"#F9F7F3", border:"1px solid #E8E0D5", color:"#4A4340", fontSize:"0.8rem", padding:"0.3rem 0.8rem", borderRadius:"3px", fontWeight:500 }}>{i}</span>
              ))}
            </div>
          </div>
        </div>
        <div>
          <InfoBlock label="Location" value={profile.location}/>
          <InfoBlock label="Mission" value={profile.mission}/>
          <InfoBlock label="Vision" value={profile.vision}/>
        </div>
      </div>
      <SectionHeader num="02" title="Leadership Roles"/>
      <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill, minmax(260px, 1fr))", gap:"1rem" }}>
        {about.leadership.map((l,i)=>(
          <div key={i} className="card">
            <div className="mono" style={{ fontSize:"0.63rem", color:"#E63946", letterSpacing:"0.1em", textTransform:"uppercase", marginBottom:"0.5rem" }}>{l.year}</div>
            <div style={{ fontWeight:600, marginBottom:"0.3rem" }}>{l.role}</div>
            <div style={{ fontSize:"0.85rem", color:"#2A9D8F", fontWeight:500 }}>{l.org}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

// ─── CV PAGE ──────────────────────────────────────────────────────────────────
const CVPage = ({ data }) => {
  const { profile, education, experience, awards } = data;
  return (
    <div className="fade-in" style={{ padding:"clamp(2rem, 8vw, 4rem) clamp(1.5rem, 5vw, 5rem)" }}>
      <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", marginBottom:"3rem", flexWrap:"wrap", gap:"1rem" }}>
        <div>
          <div className="serif" style={{ fontSize:"2.4rem", marginBottom:"0.3rem" }}>{profile.name}</div>
          <div style={{ color:"#4A4340", fontSize:"0.95rem" }}>{profile.title}</div>
        </div>
        {profile.cvUrl && (
          <a href={profile.cvUrl} target="_blank" rel="noreferrer" className="btn-primary" style={{ display:"flex", alignItems:"center", gap:"0.5rem" }}>
            <Icon name="download" size={16}/> Download Full CV
          </a>
        )}
      </div>
      <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit, minmax(350px, 1fr))", gap:"clamp(2rem, 5vw, 4rem)" }}>
        <div>
          <CVSection title="Education" color="#2A9D8F">
            {education.map((e,i)=><TimelineItem key={i} date={e.period} title={e.degree} sub={e.institution} desc={e.desc}/>)}
          </CVSection>
          <CVSection title="Awards & Fellowships" color="#D4A574">
            {awards.map((a,i)=><TimelineItem key={i} date={a.year} title={a.title} sub={a.org} desc={a.desc}/>)}
          </CVSection>
        </div>
        <div>
          <CVSection title="Experience & Leadership" color="#E63946">
            {experience.map((e,i)=><TimelineItem key={i} date={e.period} title={e.role} sub={e.org} desc={e.desc}/>)}
          </CVSection>
        </div>
      </div>
    </div>
  );
};

// ─── RESEARCH PAGE ────────────────────────────────────────────────────────────
const ResearchPage = ({ data }) => {
  const [filter, setFilter] = useState("All");
  const types = ["All", ...new Set(data.research.map(r=>r.type))];
  const filtered = filter==="All" ? data.research : data.research.filter(r=>r.type===filter);
  return (
    <div className="fade-in" style={{ padding:"clamp(2rem, 8vw, 4rem) clamp(1.5rem, 5vw, 5rem)" }}>
      <SectionHeader num="03" title="Research & Abstracts"/>
      <div style={{ display:"flex", gap:"0.5rem", flexWrap:"wrap", marginBottom:"2.5rem" }}>
        {types.map(t=>(
          <button key={t} onClick={()=>setFilter(t)} style={{ padding:"0.4rem 1rem", borderRadius:"2rem", border:"1.5px solid", fontFamily:"'JetBrains Mono',monospace", fontSize:"0.7rem", letterSpacing:"0.08em", cursor:"pointer", background:filter===t?"#E63946":"transparent", color:filter===t?"#fff":"#4A4340", borderColor:filter===t?"#E63946":"#D6CFC5", transition:"all 0.2s" }}>{t}</button>
        ))}
      </div>
      <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill, minmax(300px, 1fr))", gap:"1.2rem" }}>
        {filtered.map((r,i)=>(
          <div key={i} className="card">
            <div className="mono" style={{ fontSize:"0.63rem", letterSpacing:"0.1em", textTransform:"uppercase", color:"#2A9D8F", marginBottom:"0.7rem" }}>◆ {r.type}</div>
            <div className="serif" style={{ fontSize:"1.1rem", marginBottom:"0.7rem", lineHeight:1.35 }}>{r.title}</div>
            <div style={{ fontSize:"0.82rem", color:"#4A4340", lineHeight:1.65, marginBottom:"1rem" }}>{r.summary}</div>
            <div style={{ display:"flex", flexWrap:"wrap", gap:"0.5rem", alignItems:"center" }}>
              <span style={{ background: r.status==="Published"?"#2A9D8F22":r.status==="Under Review"?"#D4A57422":"#E6394622", color: r.status==="Published"?"#2A9D8F":r.status==="Under Review"?"#D4A574":"#E63946", padding:"0.2rem 0.7rem", borderRadius:"2rem", fontSize:"0.7rem", fontWeight:600 }}>{r.status}</span>
              <span className="mono" style={{ fontSize:"0.65rem", color:"#4A4340", opacity:0.5 }}>{r.year} · {r.journal}</span>
            </div>
            <div style={{ fontSize:"0.75rem", color:"#4A4340", marginTop:"0.5rem" }}>Role: <strong>{r.role}</strong></div>
            {r.link && <a href={r.link} target="_blank" rel="noreferrer" style={{ display:"inline-flex", alignItems:"center", gap:"0.3rem", fontSize:"0.8rem", color:"#E63946", fontWeight:600, marginTop:"0.8rem", textDecoration:"none" }}>Read →</a>}
          </div>
        ))}
      </div>
    </div>
  );
};

// ─── WRITING PAGE ─────────────────────────────────────────────────────────────
const WritingPage = ({ data }) => {
  const [filter, setFilter] = useState("All");
  const types = ["All", ...new Set(data.writing.map(w=>w.type))];
  const filtered = filter==="All" ? data.writing : data.writing.filter(w=>w.type===filter);
  return (
    <div className="fade-in" style={{ padding:"clamp(2rem, 8vw, 4rem) clamp(1.5rem, 5vw, 5rem)" }}>
      <SectionHeader num="07" title="Writing & Articles"/>
      <div style={{ display:"flex", gap:"0.5rem", flexWrap:"wrap", marginBottom:"2.5rem" }}>
        {types.map(t=>(
          <button key={t} onClick={()=>setFilter(t)} style={{ padding:"0.4rem 1rem", borderRadius:"2rem", border:"1.5px solid", fontFamily:"'JetBrains Mono',monospace", fontSize:"0.7rem", letterSpacing:"0.08em", cursor:"pointer", background:filter===t?"#E63946":"transparent", color:filter===t?"#fff":"#4A4340", borderColor:filter===t?"#E63946":"#D6CFC5", transition:"all 0.2s" }}>{t}</button>
        ))}
      </div>
      {filtered.map((w,i)=>(
        <div key={i} className="writing-row" onClick={()=>w.link && window.open(w.link,"_blank")}>
          <div className="mono" style={{ fontSize:"0.7rem", color:"#4A4340", opacity:0.5, paddingTop:"3px" }}>{w.year}</div>
          <div>
            <div className="mono" style={{ fontSize:"0.63rem", letterSpacing:"0.1em", textTransform:"uppercase", color:"#2A9D8F", marginBottom:"0.25rem" }}>{w.type} · {w.publication}</div>
            <div className="serif writing-row-title" style={{ fontSize:"1.15rem", marginBottom:"0.4rem", lineHeight:1.35, transition:"color 0.2s" }}>{w.title}</div>
            <div style={{ fontSize:"0.82rem", color:"#4A4340", lineHeight:1.6, marginBottom:"0.6rem" }}>{w.excerpt}</div>
            {w.link && (
              <a href={w.link} target="_blank" rel="noreferrer" style={{ color:"#E63946", fontWeight:600, fontSize:"0.8rem", textDecoration:"none" }}>
                Read article →
              </a>
            )}
          </div>
          <div className="arrow">→</div>
        </div>
      ))}
    </div>
  );
};

// ─── PROJECTS PAGE ────────────────────────────────────────────────────────────
const VenturesPage = ({ data }) => (
  <div className="fade-in" style={{ padding:"clamp(2rem, 8vw, 4rem) clamp(1.5rem, 5vw, 5rem)" }}>
    <SectionHeader num="04" title="Ventures & Entrepreneurship"/>
    <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill, minmax(300px, 1fr))", gap:"1.5rem" }}>
      {data.projects.map((p,i)=>(
        <div key={i} className="card">
          <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", marginBottom:"1rem" }}>
            <div className="mono" style={{ fontSize:"0.63rem", letterSpacing:"0.1em", textTransform:"uppercase", color:"#2A9D8F" }}>{p.type}</div>
            <span style={{ background:p.stage==="Active"||p.stage==="Pilot"?"#2A9D8F22":"#D4A57422", color:p.stage==="Active"||p.stage==="Pilot"?"#2A9D8F":"#D4A574", padding:"0.15rem 0.6rem", borderRadius:"2rem", fontSize:"0.68rem", fontWeight:600 }}>{p.stage}</span>
          </div>
          <div className="serif" style={{ fontSize:"1.3rem", marginBottom:"1.2rem", lineHeight:1.2 }}>{p.title}</div>
          <div style={{ marginBottom:"0.8rem" }}>
            <div className="mono" style={{ fontSize:"0.63rem", color:"#E63946", textTransform:"uppercase", letterSpacing:"0.08em", marginBottom:"0.3rem" }}>Problem</div>
            <div style={{ fontSize:"0.83rem", color:"#4A4340", lineHeight:1.6 }}>{p.problem}</div>
          </div>
          <div style={{ marginBottom:"0.8rem" }}>
            <div className="mono" style={{ fontSize:"0.63rem", color:"#2A9D8F", textTransform:"uppercase", letterSpacing:"0.08em", marginBottom:"0.3rem" }}>Solution</div>
            <div style={{ fontSize:"0.83rem", color:"#4A4340", lineHeight:1.6 }}>{p.solution}</div>
          </div>
          <div style={{ marginBottom:"1rem" }}>
            <div className="mono" style={{ fontSize:"0.63rem", color:"#D4A574", textTransform:"uppercase", letterSpacing:"0.08em", marginBottom:"0.3rem" }}>Impact</div>
            <div style={{ fontSize:"0.83rem", color:"#4A4340", lineHeight:1.6 }}>{p.impact}</div>
          </div>
          {p.collaborating && <div style={{ display:"inline-flex", alignItems:"center", gap:"0.4rem", fontSize:"0.75rem", color:"#E63946", border:"1px solid #E6394633", padding:"0.3rem 0.8rem", borderRadius:"3px", background:"#E6394608" }}>🤝 Open to Collaborate</div>}
        </div>
      ))}
    </div>
  </div>
);

// ─── PRESENTATIONS PAGE ───────────────────────────────────────────────────────
const SpeakingPage = ({ data }) => (
  <div className="fade-in" style={{ padding:"clamp(2rem, 8vw, 4rem) clamp(1.5rem, 5vw, 5rem)" }}>
    <SectionHeader num="08" title="Speaking & Presentations"/>
    <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill, minmax(280px, 1fr))", gap:"1.2rem" }}>
      {data.presentations.map((p,i)=>(
        <div key={i} style={{ background:"#1A1612", borderRadius:"6px", padding:"2rem", position:"relative", overflow:"hidden", transition:"transform 0.2s" }} onMouseEnter={e=>e.currentTarget.style.transform="translateY(-3px)"} onMouseLeave={e=>e.currentTarget.style.transform=""}>
          <div style={{ position:"absolute", bottom:"-1rem", right:"0.5rem", fontFamily:"'DM Serif Display',serif", fontSize:"6rem", color:"#fff", opacity:0.04, lineHeight:1, pointerEvents:"none" }}>{String(i+1).padStart(2,"0")}</div>
          <div className="mono" style={{ fontSize:"0.63rem", letterSpacing:"0.12em", textTransform:"uppercase", color:"#E8654A", marginBottom:"0.7rem" }}>{p.type}</div>
          <div className="serif" style={{ fontSize:"1.1rem", color:"#fff", marginBottom:"1rem", lineHeight:1.4 }}>{p.title}</div>
          <div style={{ fontSize:"0.8rem", color:"rgba(255,255,255,0.55)", lineHeight:1.5 }}>{p.event} · {p.location}</div>
          <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", marginTop:"1.2rem" }}>
            <span className="mono" style={{ fontSize:"0.7rem", color:"#E8654A", border:"1px solid #E8654A44", padding:"0.2rem 0.6rem", borderRadius:"2px" }}>{p.year}</span>
            {p.fileUrl && <a href={p.fileUrl} target="_blank" rel="noreferrer" style={{ display:"flex", alignItems:"center", gap:"0.3rem", fontSize:"0.75rem", color:"#E8654A", textDecoration:"none" }}><Icon name="download" size={13}/> Slides</a>}
          </div>
        </div>
      ))}
    </div>
  </div>
);


// ─── INITIATIVES PAGE ────────────────────────────────────────────────────────
const InitiativesPage = ({ data }) => {
  const initiatives = data.initiatives || [];

  return (
    <div className="fade-in" style={{ padding:"clamp(2rem, 8vw, 4rem) clamp(1.5rem, 5vw, 5rem)" }}>
      <SectionHeader num="05" title="Initiatives & Advocacy"/>
      <p style={{ color:"#4A4340", fontSize:"1rem", lineHeight:1.8, maxWidth:"680px", marginBottom:"3rem" }}>
        Beyond research and clinical work, I lead and contribute to initiatives that tackle systemic barriers to health equity — from policy advocacy to community education and media campaigns.
      </p>
      <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill, minmax(300px, 1fr))", gap:"1.5rem" }}>
        {initiatives.map((item, i) => (
          <div key={i} className="card" style={{ borderTop:`3px solid ${item.color}` }}>
            <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", marginBottom:"1rem" }}>
              <div style={{ fontSize:"2rem" }}>{item.icon}</div>
              <span style={{ background:`${item.color}18`, color:item.color, padding:"0.15rem 0.65rem", borderRadius:"2rem", fontSize:"0.68rem", fontWeight:600, fontFamily:"'JetBrains Mono',monospace" }}>{item.stage}</span>
            </div>
            <div style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:"0.6rem", letterSpacing:"0.1em", textTransform:"uppercase", color:item.color, marginBottom:"0.4rem" }}>{item.type}</div>
            <div className="serif" style={{ fontSize:"1.2rem", marginBottom:"0.8rem", lineHeight:1.25 }}>{item.title}</div>
            <div style={{ fontSize:"0.83rem", color:"#4A4340", lineHeight:1.65, marginBottom:"1rem" }}>{item.desc}</div>
            <div style={{ borderTop:"1px solid #E8E0D5", paddingTop:"0.8rem" }}>
              <div style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:"0.6rem", color:"#D4A574", textTransform:"uppercase", letterSpacing:"0.08em", marginBottom:"0.3rem" }}>Impact</div>
              <div style={{ fontSize:"0.8rem", color:"#4A4340" }}>{item.impact}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// ─── INNOVATION LAB PAGE ──────────────────────────────────────────────────────
const InnovationLabPage = ({ data }) => (
  <div className="fade-in" style={{ background:"#0F0D0B", minHeight:"60vh" }}>
    {/* Header band */}
    <div style={{ background:"linear-gradient(135deg,#1A1612 0%,#2C1810 100%)", padding:"4rem clamp(1.5rem,5vw,5rem) 3rem" }}>
      <div style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:"0.68rem", letterSpacing:"0.16em", textTransform:"uppercase", color:"#E8654A", marginBottom:"1rem" }}>06 — Innovation Lab</div>
      <h1 className="serif" style={{ fontSize:"clamp(2rem,4vw,3.2rem)", color:"#fff", lineHeight:1.1, marginBottom:"1rem" }}>
        Where ideas become<br/><em style={{ color:"#E8654A" }}>tools for change.</em>
      </h1>
      <p style={{ fontSize:"1rem", color:"rgba(255,255,255,0.5)", maxWidth:"520px", lineHeight:1.7 }}>
        A space for prototypes, experiments, and digital health solutions built at the intersection of medicine, technology, and community need.
      </p>
    </div>
    {/* Projects grid */}
    <div style={{ padding:"3.5rem clamp(1.5rem,5vw,5rem)" }}>
      <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(300px,1fr))", gap:"1.5rem" }}>
        {data.projects.map((p,i) => (
          <div key={i} style={{ background:"rgba(255,255,255,0.04)", border:"1px solid rgba(255,255,255,0.1)", borderRadius:"6px", padding:"2rem", position:"relative", overflow:"hidden", transition:"transform 0.2s, border-color 0.2s" }}
            onMouseEnter={e=>{ e.currentTarget.style.transform="translateY(-3px)"; e.currentTarget.style.borderColor="rgba(232,101,74,0.4)"; }}
            onMouseLeave={e=>{ e.currentTarget.style.transform=""; e.currentTarget.style.borderColor="rgba(255,255,255,0.1)"; }}>
            <div style={{ position:"absolute", bottom:"-1rem", right:"0.5rem", fontFamily:"'DM Serif Display',serif", fontSize:"6rem", color:"#fff", opacity:0.03, lineHeight:1, pointerEvents:"none" }}>{String(i+1).padStart(2,"0")}</div>
            <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", marginBottom:"1rem" }}>
              <div style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:"0.6rem", letterSpacing:"0.1em", textTransform:"uppercase", color:"#E8654A" }}>{p.type}</div>
              <span style={{ background:p.stage==="Active"||p.stage==="Pilot"?"#1A7A6E22":"#B8860B22", color:p.stage==="Active"||p.stage==="Pilot"?"#1A7A6E":"#B8860B", padding:"0.15rem 0.6rem", borderRadius:"2rem", fontSize:"0.68rem", fontWeight:600 }}>{p.stage}</span>
            </div>
            <div className="serif" style={{ fontSize:"1.3rem", color:"#fff", marginBottom:"1.2rem", lineHeight:1.2 }}>{p.title}</div>
            <div style={{ marginBottom:"0.75rem" }}>
              <div style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:"0.6rem", color:"#C0392B", textTransform:"uppercase", letterSpacing:"0.08em", marginBottom:"0.3rem" }}>Problem</div>
              <div style={{ fontSize:"0.82rem", color:"rgba(255,255,255,0.55)", lineHeight:1.6 }}>{p.problem}</div>
            </div>
            <div style={{ marginBottom:"0.75rem" }}>
              <div style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:"0.6rem", color:"#1A7A6E", textTransform:"uppercase", letterSpacing:"0.08em", marginBottom:"0.3rem" }}>Solution</div>
              <div style={{ fontSize:"0.82rem", color:"rgba(255,255,255,0.55)", lineHeight:1.6 }}>{p.solution}</div>
            </div>
            <div style={{ marginBottom:"1rem" }}>
              <div style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:"0.6rem", color:"#B8860B", textTransform:"uppercase", letterSpacing:"0.08em", marginBottom:"0.3rem" }}>Impact</div>
              <div style={{ fontSize:"0.82rem", color:"rgba(255,255,255,0.55)", lineHeight:1.6 }}>{p.impact}</div>
            </div>
            {p.collaborating && <div style={{ display:"inline-flex", alignItems:"center", gap:"0.4rem", fontSize:"0.75rem", color:"#E8654A", border:"1px solid #E8654A33", padding:"0.3rem 0.8rem", borderRadius:"3px", background:"#E8654A08" }}>🤝 Open to Collaborate</div>}
          </div>
        ))}
      </div>
    </div>
  </div>
);

// ─── CONTACT PAGE ─────────────────────────────────────────────────────────────
const ContactPage = ({ data }) => {
  const { profile } = data;
  const [form, setForm] = useState({ name:"", email:"", subject:"", message:"" });
  const [sent, setSent] = useState(false);
  const handleSubmit = () => {
    if (!form.name || !form.email || !form.message) return;
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(form.subject||"Message from website")}&body=${encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)}`;
    setSent(true);
  };

  const directContacts = [
    { platform:"email",    label:"Email",      value: profile.email,    href:`mailto:${profile.email}`,                                    color:"#E63946", show: !!profile.email },
    { platform:"whatsapp", label:"WhatsApp",   value: profile.whatsapp, href:`https://wa.me/${(profile.whatsapp||"").replace(/\D/g,"")}`,   color:"#25D366", show: !!profile.whatsapp },
    { platform:"linkedin", label:"LinkedIn",   value: profile.linkedin, href:`https://${profile.linkedin}`,                                color:"#0A66C2", show: !!profile.linkedin },
    { platform:"twitter",  label:"X / Twitter",value: profile.twitter,  href:`https://twitter.com/${(profile.twitter||"").replace("@","")}`,color:"#000",    show: !!profile.twitter },
  ].filter(c=>c.show);

  const academicContacts = [
    { platform:"orcid",      label:"ORCID",          value: profile.orcid,         href:`https://orcid.org/${profile.orcid}`,   color:"#A6CE39", show: profile.orcid && profile.orcid!=="0000-0000-0000-0000" },
    { platform:"researchgate",label:"ResearchGate",  value: profile.researchgate,  href:`https://${profile.researchgate}`,     color:"#00CCBB", show: !!profile.researchgate },
    { platform:"scholar",    label:"Google Scholar", value: "Scholar Profile",     href:`https://${profile.googlescholar}`,    color:"#4285F4", show: !!profile.googlescholar },
    { platform:"github",     label:"GitHub",         value: profile.github,        href:`https://${profile.github}`,           color:"#6e5494", show: !!profile.github },
  ].filter(c=>c.show);

  const socialContacts = [
    { platform:"instagram", label:"Instagram", value: profile.instagram, href:`https://instagram.com/${(profile.instagram||"").replace("@","")}`, color:"#E1306C", show: !!profile.instagram },
    { platform:"facebook",  label:"Facebook",  value: profile.facebook,  href:`https://${profile.facebook}`,                                      color:"#1877F2", show: !!profile.facebook },
    { platform:"youtube",   label:"YouTube",   value: "YouTube Channel", href:`https://${profile.youtube}`,                                       color:"#FF0000", show: !!profile.youtube },
  ].filter(c=>c.show);

  const ContactRow = ({ item }) => (
    <a href={item.href} target="_blank" rel="noreferrer"
      style={{ display:"flex", alignItems:"center", gap:"0.9rem", padding:"0.85rem 1rem", border:`1px solid ${item.color}22`, borderRadius:"5px", textDecoration:"none", color:"#1A1612", transition:"all 0.2s", background:`${item.color}06` }}
      onMouseEnter={e=>{ e.currentTarget.style.background=`${item.color}12`; e.currentTarget.style.borderColor=`${item.color}55`; }}
      onMouseLeave={e=>{ e.currentTarget.style.background=`${item.color}06`; e.currentTarget.style.borderColor=`${item.color}22`; }}
    >
      <div style={{ width:"34px", height:"34px", background:`${item.color}18`, borderRadius:"4px", display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0, color:item.color }}>
        <SocialBrandIcon platform={item.platform} size={16}/>
      </div>
      <div>
        <div style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:"0.58rem", letterSpacing:"0.1em", textTransform:"uppercase", color:item.color, marginBottom:"0.1rem", opacity:0.8 }}>{item.label}</div>
        <div style={{ fontSize:"0.85rem", fontWeight:500, color:"#1A1612" }}>{item.value}</div>
      </div>
    </a>
  );

  return (
    <div className="fade-in" style={{ background:"#F9F7F3" }}>

      {/* HERO BAND */}
      <div style={{ background:"linear-gradient(135deg,#0F0D0B 0%,#2C1810 100%)", padding:"clamp(2rem, 8vw, 4rem) clamp(1.5rem, 5vw, 5rem)" }}>
        <div style={{ maxWidth:"1100px", margin:"0 auto" }}>
          <div style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:"0.68rem", letterSpacing:"0.16em", textTransform:"uppercase", color:"#E63946", marginBottom:"1rem" }}>10 — Contact</div>
          <h1 className="serif" style={{ fontSize:"clamp(1.8rem, 4vw, 3.2rem)", color:"#fff", lineHeight:1.1, marginBottom:"1rem" }}>
            Let's build something<br/><em style={{ color:"#E8654A" }}>meaningful together.</em>
          </h1>
          <p style={{ fontSize:"clamp(0.9rem, 2vw, 1rem)", color:"rgba(255,255,255,0.5)", maxWidth:"500px", lineHeight:1.7 }}>
            Whether you're a researcher, policy maker, fellow student, or organization — I'm open to collaboration, speaking, and new opportunities.
          </p>
          {(profile.openToCollaboration || profile.openToWork) && (
            <div style={{ display:"flex", gap:"0.6rem", marginTop:"1.5rem", flexWrap:"wrap" }}>
              {profile.openToCollaboration && <span style={{ fontSize:"0.75rem", background:"#2A9D8F22", color:"#2A9D8F", border:"1px solid #2A9D8F55", padding:"0.3rem 0.8rem", borderRadius:"2rem", fontWeight:600 }}>🤝 Open to Collaborate</span>}
              {profile.openToWork && <span style={{ fontSize:"0.75rem", background:"#E6394622", color:"#E8654A", border:"1px solid #E6394655", padding:"0.3rem 0.8rem", borderRadius:"2rem", fontWeight:600 }}>💼 Open to Opportunities</span>}
            </div>
          )}
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div style={{ maxWidth:"1100px", margin:"0 auto", padding:"clamp(2rem, 8vw, 3.5rem) clamp(1.5rem, 5vw, 5rem)" }}>
        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit, minmax(320px, 1fr))", gap:"clamp(2rem, 5vw, 3rem)", alignItems:"start" }}>

          {/* LEFT: contact channels */}
          <div>
            {/* Direct */}
            <div style={{ marginBottom:"2rem" }}>
              <div style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:"0.65rem", letterSpacing:"0.12em", textTransform:"uppercase", color:"#E63946", marginBottom:"0.8rem" }}>Direct Contact</div>
              <div style={{ display:"flex", flexDirection:"column", gap:"0.6rem" }}>
                {directContacts.map(c=><ContactRow key={c.label} item={c}/>)}
              </div>
            </div>

            {/* Academic */}
            {academicContacts.length > 0 && (
              <div style={{ marginBottom:"2rem" }}>
                <div style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:"0.65rem", letterSpacing:"0.12em", textTransform:"uppercase", color:"#2A9D8F", marginBottom:"0.8rem" }}>Academic Profiles</div>
                <div style={{ display:"flex", flexDirection:"column", gap:"0.6rem" }}>
                  {academicContacts.map(c=><ContactRow key={c.label} item={c}/>)}
                </div>
              </div>
            )}

            {/* Social */}
            {socialContacts.length > 0 && (
              <div>
                <div style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:"0.65rem", letterSpacing:"0.12em", textTransform:"uppercase", color:"#D4A574", marginBottom:"0.8rem" }}>Social Media</div>
                <div style={{ display:"flex", flexDirection:"column", gap:"0.6rem" }}>
                  {socialContacts.map(c=><ContactRow key={c.label} item={c}/>)}
                </div>
              </div>
            )}

            {/* Location card */}
            <div style={{ marginTop:"1.5rem", background:"#fff", border:"1px solid #E8E0D5", borderRadius:"6px", padding:"1.2rem 1.5rem", display:"flex", gap:"1rem", alignItems:"center" }}>
              <div style={{ fontSize:"1.5rem" }}>📍</div>
              <div>
                <div style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:"0.6rem", letterSpacing:"0.1em", textTransform:"uppercase", color:"#4A4340", opacity:0.5, marginBottom:"0.15rem" }}>Location & Timezone</div>
                <div style={{ fontWeight:600 }}>{profile.location}</div>
                <div style={{ fontSize:"0.82rem", color:"#4A4340" }}>{profile.timezone}</div>
              </div>
            </div>
          </div>

          {/* RIGHT: form */}
          <div style={{ background:"#fff", border:"1px solid #E8E0D5", borderRadius:"8px", padding:"clamp(1.5rem, 4vw, 2rem)", boxShadow:"0 4px 24px rgba(0,0,0,0.05)" }}>
            <div className="serif" style={{ fontSize:"1.4rem", marginBottom:"0.3rem" }}>Send a Message</div>
            <p style={{ fontSize:"0.82rem", color:"#4A4340", marginBottom:"1.5rem" }}>Fill the form — it will open your email client with everything pre-filled.</p>
            {sent ? (
              <div style={{ textAlign:"center", padding:"3rem 2rem", color:"#2A9D8F" }}>
                <div style={{ fontSize:"3rem", marginBottom:"0.75rem" }}>✅</div>
                <div style={{ fontFamily:"'DM Serif Display',serif", fontSize:"1.3rem", marginBottom:"0.5rem" }}>Message prepared!</div>
                <div style={{ fontSize:"0.85rem", color:"#4A4340" }}>Your email client should have opened. Thank you for reaching out.</div>
              </div>
            ) : (
              <div style={{ display:"flex", flexDirection:"column", gap:"0.9rem" }}>
                <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit, minmax(150px, 1fr))", gap:"0.9rem" }}>
                  {[["name","Your full name","text"],["email","Your email address","email"]].map(([k,ph,t])=>(
                    <div key={k}>
                      <div style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:"0.6rem", letterSpacing:"0.1em", textTransform:"uppercase", color:"#4A4340", opacity:0.5, marginBottom:"0.35rem" }}>{k}</div>
                      <input type={t} placeholder={ph} value={form[k]} onChange={e=>setForm({...form,[k]:e.target.value})}
                        style={{ padding:"0.7rem 0.9rem", border:"1.5px solid #E8E0D5", borderRadius:"4px", fontSize:"0.88rem", outline:"none", width:"100%", fontFamily:"inherit", transition:"border-color 0.2s" }}
                        onFocus={e=>e.target.style.borderColor="#E63946"} onBlur={e=>e.target.style.borderColor="#E8E0D5"}/>
                    </div>
                  ))}
                </div>
                <div>
                  <div style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:"0.6rem", letterSpacing:"0.1em", textTransform:"uppercase", color:"#4A4340", opacity:0.5, marginBottom:"0.35rem" }}>Subject</div>
                  <input type="text" placeholder="What is this about?" value={form.subject} onChange={e=>setForm({...form,subject:e.target.value})}
                    style={{ padding:"0.7rem 0.9rem", border:"1.5px solid #E8E0D5", borderRadius:"4px", fontSize:"0.88rem", outline:"none", width:"100%", fontFamily:"inherit", transition:"border-color 0.2s" }}
                    onFocus={e=>e.target.style.borderColor="#E63946"} onBlur={e=>e.target.style.borderColor="#E8E0D5"}/>
                </div>
                <div>
                  <div style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:"0.6rem", letterSpacing:"0.1em", textTransform:"uppercase", color:"#4A4340", opacity:0.5, marginBottom:"0.35rem" }}>Message</div>
                  <textarea placeholder="Tell me about your project, idea, or question..." value={form.message} onChange={e=>setForm({...form,message:e.target.value})} rows={6}
                    style={{ padding:"0.7rem 0.9rem", border:"1.5px solid #E8E0D5", borderRadius:"4px", fontSize:"0.88rem", outline:"none", resize:"vertical", fontFamily:"inherit", width:"100%", transition:"border-color 0.2s" }}
                    onFocus={e=>e.target.style.borderColor="#E63946"} onBlur={e=>e.target.style.borderColor="#E8E0D5"}/>
                </div>
                <button className="btn-primary" onClick={handleSubmit} style={{ width:"100%", justifyContent:"center", display:"flex", alignItems:"center", gap:"0.5rem" }}>
                  Send Message →
                </button>
                <p style={{ fontSize:"0.75rem", color:"#4A4340", opacity:0.5, textAlign:"center" }}>Opens your default email app</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

// ═══════════════════════════════════════════════════════════════════════════
// ADMIN DASHBOARD
// ═══════════════════════════════════════════════════════════════════════════
const AdminDashboard = ({ data, onSave, onExit }) => {
  const [section, setSection] = useState("profile");
  const [localData, setLocalData] = useState(JSON.parse(JSON.stringify(data)));
  const [saved, setSaved] = useState(false);
  const [passwordState, setPasswordState] = useState({ current:"", next:"", confirm:"" });
  const [passwordMessage, setPasswordMessage] = useState("");

  const handleSave = () => {
    onSave(localData);
    setSaved(true);
    setTimeout(()=>setSaved(false),2000);
  };

  const update = (path, value) => {
    const d = JSON.parse(JSON.stringify(localData));
    const parts = path.split(".");
    let obj = d;
    for (let i = 0; i < parts.length - 1; i++) obj = obj[parts[i]];
    obj[parts[parts.length-1]] = value;
    setLocalData(d);
  };

  const handlePasswordChange = () => {
    const current = passwordState.current.trim();
    const next = passwordState.next.trim();
    const confirm = passwordState.confirm.trim();
    const expected = getStoredAdminPassword();

    if (!current) {
      setPasswordMessage("Current password is required.");
      return;
    }

    if (current !== expected) {
      setPasswordMessage("Current password is incorrect.");
      return;
    }

    if (!next || !isStrongAdminPassword(next)) {
      setPasswordMessage("New password must be at least 12 characters and include uppercase, lowercase, a number, and a symbol.");
      return;
    }

    if (next !== confirm) {
      setPasswordMessage("The new passwords do not match.");
      return;
    }

    setStoredAdminPassword(next);
    setPasswordState({ current:"", next:"", confirm:"" });
    setPasswordMessage("Password updated successfully.");
  };

  const navItems = [
    { id:"profile", icon:"user", label:"Profile" },
    { id:"about", icon:"book", label:"About" },
    { id:"education", icon:"award", label:"Education" },
    { id:"experience", icon:"settings", label:"Experience" },
    { id:"awards", icon:"award", label:"Awards" },
    { id:"research", icon:"flask", label:"Research" },
    { id:"writing", icon:"edit", label:"Writing" },
    { id:"projects", icon:"link", label:"Ventures / Lab" },
    { id:"initiatives", icon:"globe", label:"Initiatives" },
    { id:"presentations", icon:"mic", label:"Speaking" },
  ];

  return (
    <div style={{ display:"flex", height:"100vh", fontFamily:"'DM Sans',system-ui,sans-serif", background:"#0F0D0B", color:"#fff" }}>
      <style>{`
        .admin-input { background: #1E1A17; border: 1.5px solid #2E2A27; border-radius:4px; padding:0.65rem 0.9rem; color:#fff; font-size:0.88rem; width:100%; outline:none; font-family:'DM Sans',sans-serif; transition:border-color 0.2s; }
        .admin-input:focus { border-color:#C0392B; }
        .admin-label { font-family:'JetBrains Mono',monospace; font-size:0.62rem; letter-spacing:0.1em; text-transform:uppercase; color:rgba(255,255,255,0.35); margin-bottom:0.35rem; display:block; }
        .admin-card { background:#1A1612; border:1px solid #2E2A27; border-radius:6px; padding:1.5rem; margin-bottom:1rem; }
        .admin-btn-del { background:none; border:1px solid #C0392B33; color:#C0392B; padding:0.35rem 0.7rem; border-radius:3px; cursor:pointer; font-size:0.75rem; transition:all 0.2s; }
        .admin-btn-del:hover { background:#C0392B; color:#fff; }
        .admin-btn-add { background:none; border:1px solid #1A7A6E55; color:#1A7A6E; padding:0.5rem 1.2rem; border-radius:4px; cursor:pointer; font-size:0.85rem; transition:all 0.2s; display:flex; align-items:center; gap:0.4rem; margin-top:0.5rem; }
        .admin-btn-add:hover { background:#1A7A6E; color:#fff; }
        .admin-nav-item { display:flex; align-items:center; gap:0.7rem; padding:0.65rem 1rem; border-radius:4px; cursor:pointer; font-size:0.85rem; color:rgba(255,255,255,0.5); transition:all 0.2s; }
        .admin-nav-item:hover { background:#1E1A17; color:#fff; }
        .admin-nav-item.active { background:#C0392B15; color:#C0392B; }
      `}</style>

      {/* SIDEBAR */}
      <div style={{ width:"220px", flexShrink:0, background:"#0A0806", borderRight:"1px solid #1E1A17", display:"flex", flexDirection:"column", overflow:"hidden" }}>
        <div style={{ padding:"1.5rem 1rem", borderBottom:"1px solid #1E1A17" }}>
          <div style={{ fontFamily:"'DM Serif Display',serif", fontSize:"1rem", marginBottom:"0.2rem" }}>Admin Panel</div>
          <div style={{ fontSize:"0.72rem", color:"rgba(255,255,255,0.3)", fontFamily:"'JetBrains Mono',monospace" }}>Ephrem Dushimimana</div>
        </div>
        <div style={{ flex:1, overflowY:"auto", padding:"0.75rem 0.5rem" }}>
          {navItems.map(n=>(
            <div key={n.id} className={`admin-nav-item ${section===n.id?"active":""}`} onClick={()=>setSection(n.id)}>
              <Icon name={n.icon} size={15}/> {n.label}
            </div>
          ))}
        </div>
        <div style={{ padding:"1rem", borderTop:"1px solid #1E1A17", display:"flex", gap:"0.5rem" }}>
          <button onClick={handleSave} style={{ flex:1, background:saved?"#1A7A6E":"#C0392B", color:"#fff", border:"none", borderRadius:"4px", padding:"0.6rem", cursor:"pointer", fontSize:"0.8rem", fontWeight:600, transition:"background 0.3s" }}>
            {saved ? "✓ Saved!" : "Save All"}
          </button>
          <button onClick={onExit} style={{ background:"#1E1A17", color:"rgba(255,255,255,0.5)", border:"1px solid #2E2A27", borderRadius:"4px", padding:"0.6rem 0.8rem", cursor:"pointer" }}><Icon name="eye" size={14}/></button>
        </div>
      </div>

      {/* MAIN */}
      <div style={{ flex:1, overflowY:"auto", padding:"2rem" }}>
        <div style={{ maxWidth:"800px", margin:"0 auto" }}>

          {section==="profile" && (
            <AdminSection title="Profile & Identity">
              <div className="admin-card">
                <div style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:"0.65rem", letterSpacing:"0.12em", textTransform:"uppercase", color:"#C0392B", marginBottom:"0.8rem" }}>Security</div>
                <div style={{ display:"grid", gap:"0.75rem" }}>
                  <Field label="Current Password" value={passwordState.current} onChange={v=>setPasswordState({...passwordState,current:v})}/>
                  <Field label="New Password" value={passwordState.next} onChange={v=>setPasswordState({...passwordState,next:v})}/>
                  <Field label="Confirm New Password" value={passwordState.confirm} onChange={v=>setPasswordState({...passwordState,confirm:v})}/>
                  <div style={{ display:"flex", gap:"0.75rem", flexWrap:"wrap" }}>
                    <button className="admin-btn-add" onClick={handlePasswordChange}><Icon name="save" size={14}/> Change Password</button>
                  </div>
                  {passwordMessage && <div style={{ fontSize:"0.8rem", color:"#1A7A6E" }}>{passwordMessage}</div>}
                </div>
              </div>

              {/* BASIC */}
              <div style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:"0.65rem", letterSpacing:"0.12em", textTransform:"uppercase", color:"#C0392B", marginBottom:"0.8rem", marginTop:"0.5rem" }}>Basic Info</div>
              <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"1rem" }}>
                <Field label="Full Name" value={localData.profile.name} onChange={v=>update("profile.name",v)}/>
                <Field label="Professional Title" value={localData.profile.title} onChange={v=>update("profile.title",v)}/>
                <Field label="Email" value={localData.profile.email} onChange={v=>update("profile.email",v)}/>
                <Field label="Phone" value={localData.profile.phone} onChange={v=>update("profile.phone",v)}/>
                <Field label="Location" value={localData.profile.location} onChange={v=>update("profile.location",v)}/>
                <Field label="Timezone" value={localData.profile.timezone} onChange={v=>update("profile.timezone",v)}/>
              </div>
              <Field label="Photo URL (paste direct image link)" value={localData.profile.photo} onChange={v=>update("profile.photo",v)} placeholder="https://..."/>
              <Field label="CV Download URL (Google Drive / Dropbox PDF link)" value={localData.profile.cvUrl} onChange={v=>update("profile.cvUrl",v)}/>

              {/* OPEN TO */}
              <div style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:"0.65rem", letterSpacing:"0.12em", textTransform:"uppercase", color:"#C0392B", margin:"1.5rem 0 0.8rem" }}>Availability Badges</div>
              <div style={{ display:"flex", gap:"2rem" }}>
                <label style={{ display:"flex", alignItems:"center", gap:"0.5rem", cursor:"pointer", fontSize:"0.88rem", color:"rgba(255,255,255,0.7)" }}>
                  <input type="checkbox" checked={!!localData.profile.openToCollaboration} onChange={e=>update("profile.openToCollaboration",e.target.checked)}/>
                  Show "Open to Collaborate" badge
                </label>
                <label style={{ display:"flex", alignItems:"center", gap:"0.5rem", cursor:"pointer", fontSize:"0.88rem", color:"rgba(255,255,255,0.7)" }}>
                  <input type="checkbox" checked={!!localData.profile.openToWork} onChange={e=>update("profile.openToWork",e.target.checked)}/>
                  Show "Open to Opportunities" badge
                </label>
              </div>

              {/* SOCIAL LINKS */}
              <div style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:"0.65rem", letterSpacing:"0.12em", textTransform:"uppercase", color:"#C0392B", margin:"1.5rem 0 0.8rem" }}>Social & Academic Profiles</div>
              <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"1rem" }}>
                <Field label="LinkedIn (e.g. linkedin.com/in/...)" value={localData.profile.linkedin} onChange={v=>update("profile.linkedin",v)}/>
                <Field label="Twitter / X (e.g. @Handle)" value={localData.profile.twitter} onChange={v=>update("profile.twitter",v)}/>
                <Field label="WhatsApp (digits only, e.g. +250700000000)" value={localData.profile.whatsapp} onChange={v=>update("profile.whatsapp",v)}/>
                <Field label="Instagram (e.g. @handle)" value={localData.profile.instagram} onChange={v=>update("profile.instagram",v)}/>
                <Field label="Facebook (e.g. facebook.com/...)" value={localData.profile.facebook} onChange={v=>update("profile.facebook",v)}/>
                <Field label="GitHub (e.g. github.com/...)" value={localData.profile.github} onChange={v=>update("profile.github",v)}/>
                <Field label="ResearchGate (e.g. researchgate.net/profile/...)" value={localData.profile.researchgate} onChange={v=>update("profile.researchgate",v)}/>
                <Field label="ORCID (16-digit ID)" value={localData.profile.orcid} onChange={v=>update("profile.orcid",v)}/>
                <Field label="Google Scholar profile URL" value={localData.profile.googlescholar} onChange={v=>update("profile.googlescholar",v)}/>
                <Field label="YouTube (channel URL, optional)" value={localData.profile.youtube} onChange={v=>update("profile.youtube",v)}/>
              </div>

              {/* NARRATIVE */}
              <div style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:"0.65rem", letterSpacing:"0.12em", textTransform:"uppercase", color:"#C0392B", margin:"1.5rem 0 0.8rem" }}>Narrative</div>
              <Field label="Tagline / Hero intro text" value={localData.profile.tagline} onChange={v=>update("profile.tagline",v)} multiline rows={4}/>
              <Field label="Mission Statement" value={localData.profile.mission} onChange={v=>update("profile.mission",v)} multiline/>
              <Field label="Vision Statement" value={localData.profile.vision} onChange={v=>update("profile.vision",v)} multiline/>
            </AdminSection>
          )}

          {section==="about" && (
            <AdminSection title="About Me">
              <Field label="Biography" value={localData.about.bio} onChange={v=>update("about.bio",v)} multiline rows={8}/>
              <div style={{ marginTop:"1rem" }}>
                <label className="admin-label">Interests (one per line)</label>
                <textarea className="admin-input" rows={5} value={localData.about.interests.join("\n")} onChange={e=>update("about.interests",e.target.value.split("\n").filter(Boolean))} style={{ resize:"vertical" }}/>
              </div>
              <div style={{ marginTop:"1.5rem" }}>
                <div style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:"0.7rem", letterSpacing:"0.1em", textTransform:"uppercase", color:"rgba(255,255,255,0.35)", marginBottom:"0.8rem" }}>Leadership Roles</div>
                {localData.about.leadership.map((l,i)=>(
                  <div key={i} className="admin-card">
                    <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr 1fr auto", gap:"0.75rem", alignItems:"end" }}>
                      <Field label="Role" value={l.role} onChange={v=>{const a=[...localData.about.leadership];a[i]={...a[i],role:v};update("about.leadership",a)}}/>
                      <Field label="Organization" value={l.org} onChange={v=>{const a=[...localData.about.leadership];a[i]={...a[i],org:v};update("about.leadership",a)}}/>
                      <Field label="Year" value={l.year} onChange={v=>{const a=[...localData.about.leadership];a[i]={...a[i],year:v};update("about.leadership",a)}}/>
                      <button className="admin-btn-del" onClick={()=>update("about.leadership",localData.about.leadership.filter((_,j)=>j!==i))}>✕</button>
                    </div>
                  </div>
                ))}
                <button className="admin-btn-add" onClick={()=>update("about.leadership",[...localData.about.leadership,{role:"",org:"",year:""}])}><Icon name="plus" size={14}/> Add Role</button>
              </div>
            </AdminSection>
          )}

          {section==="education" && (
            <AdminSection title="Education">
              {localData.education.map((e,i)=>(
                <div key={i} className="admin-card">
                  <div style={{ display:"flex", justifyContent:"space-between", marginBottom:"1rem" }}>
                    <span style={{ fontFamily:"'DM Serif Display',serif", fontSize:"1rem" }}>{e.degree||`Entry ${i+1}`}</span>
                    <button className="admin-btn-del" onClick={()=>update("education",localData.education.filter((_,j)=>j!==i))}>Remove</button>
                  </div>
                  <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"0.75rem" }}>
                    <Field label="Degree" value={e.degree} onChange={v=>{const a=[...localData.education];a[i]={...a[i],degree:v};update("education",a)}}/>
                    <Field label="Institution" value={e.institution} onChange={v=>{const a=[...localData.education];a[i]={...a[i],institution:v};update("education",a)}}/>
                    <Field label="Period" value={e.period} onChange={v=>{const a=[...localData.education];a[i]={...a[i],period:v};update("education",a)}}/>
                  </div>
                  <Field label="Description" value={e.desc} onChange={v=>{const a=[...localData.education];a[i]={...a[i],desc:v};update("education",a)}} multiline/>
                </div>
              ))}
              <button className="admin-btn-add" onClick={()=>update("education",[...localData.education,{degree:"",institution:"",period:"",desc:""}])}><Icon name="plus" size={14}/> Add Education</button>
            </AdminSection>
          )}

          {section==="experience" && (
            <AdminSection title="Experience & Leadership">
              {localData.experience.map((e,i)=>(
                <div key={i} className="admin-card">
                  <div style={{ display:"flex", justifyContent:"space-between", marginBottom:"1rem" }}>
                    <span style={{ fontFamily:"'DM Serif Display',serif", fontSize:"1rem" }}>{e.role||`Entry ${i+1}`}</span>
                    <button className="admin-btn-del" onClick={()=>update("experience",localData.experience.filter((_,j)=>j!==i))}>Remove</button>
                  </div>
                  <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"0.75rem" }}>
                    <Field label="Role / Title" value={e.role} onChange={v=>{const a=[...localData.experience];a[i]={...a[i],role:v};update("experience",a)}}/>
                    <Field label="Organization" value={e.org} onChange={v=>{const a=[...localData.experience];a[i]={...a[i],org:v};update("experience",a)}}/>
                    <Field label="Period" value={e.period} onChange={v=>{const a=[...localData.experience];a[i]={...a[i],period:v};update("experience",a)}}/>
                  </div>
                  <Field label="Description" value={e.desc} onChange={v=>{const a=[...localData.experience];a[i]={...a[i],desc:v};update("experience",a)}} multiline/>
                </div>
              ))}
              <button className="admin-btn-add" onClick={()=>update("experience",[...localData.experience,{role:"",org:"",period:"",desc:""}])}><Icon name="plus" size={14}/> Add Experience</button>
            </AdminSection>
          )}

          {section==="awards" && (
            <AdminSection title="Awards & Fellowships">
              {localData.awards.map((a,i)=>(
                <div key={i} className="admin-card">
                  <div style={{ display:"flex", justifyContent:"space-between", marginBottom:"1rem" }}>
                    <span style={{ fontFamily:"'DM Serif Display',serif", fontSize:"1rem" }}>{a.title||`Award ${i+1}`}</span>
                    <button className="admin-btn-del" onClick={()=>update("awards",localData.awards.filter((_,j)=>j!==i))}>Remove</button>
                  </div>
                  <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"0.75rem" }}>
                    <Field label="Award Title" value={a.title} onChange={v=>{const arr=[...localData.awards];arr[i]={...arr[i],title:v};update("awards",arr)}}/>
                    <Field label="Organization" value={a.org} onChange={v=>{const arr=[...localData.awards];arr[i]={...arr[i],org:v};update("awards",arr)}}/>
                    <Field label="Year" value={a.year} onChange={v=>{const arr=[...localData.awards];arr[i]={...arr[i],year:v};update("awards",arr)}}/>
                  </div>
                  <Field label="Description" value={a.desc} onChange={v=>{const arr=[...localData.awards];arr[i]={...arr[i],desc:v};update("awards",arr)}} multiline/>
                </div>
              ))}
              <button className="admin-btn-add" onClick={()=>update("awards",[...localData.awards,{title:"",org:"",year:"",desc:""}])}><Icon name="plus" size={14}/> Add Award</button>
            </AdminSection>
          )}

          {section==="research" && (
            <AdminSection title="Research & Abstracts">
              {localData.research.map((r,i)=>(
                <div key={i} className="admin-card">
                  <div style={{ display:"flex", justifyContent:"space-between", marginBottom:"1rem" }}>
                    <span style={{ fontFamily:"'DM Serif Display',serif", fontSize:"1rem" }}>{r.title||`Research ${i+1}`}</span>
                    <button className="admin-btn-del" onClick={()=>update("research",localData.research.filter((_,j)=>j!==i))}>Remove</button>
                  </div>
                  <Field label="Title" value={r.title} onChange={v=>{const a=[...localData.research];a[i]={...a[i],title:v};update("research",a)}}/>
                  <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"0.75rem", marginTop:"0.75rem" }}>
                    <Field label="Type" value={r.type} onChange={v=>{const a=[...localData.research];a[i]={...a[i],type:v};update("research",a)}} placeholder="Systematic Review, Abstract..."/>
                    <div>
                      <label className="admin-label">Status</label>
                      <select className="admin-input" value={r.status} onChange={e=>{const a=[...localData.research];a[i]={...a[i],status:e.target.value};update("research",a)}}>
                        {["Published","Under Review","In Progress","Submitted"].map(s=><option key={s}>{s}</option>)}
                      </select>
                    </div>
                    <Field label="Year" value={r.year} onChange={v=>{const a=[...localData.research];a[i]={...a[i],year:v};update("research",a)}}/>
                    <Field label="Journal / Conference" value={r.journal} onChange={v=>{const a=[...localData.research];a[i]={...a[i],journal:v};update("research",a)}}/>
                    <Field label="Your Role" value={r.role} onChange={v=>{const a=[...localData.research];a[i]={...a[i],role:v};update("research",a)}}/>
                    <Field label="Link (optional)" value={r.link} onChange={v=>{const a=[...localData.research];a[i]={...a[i],link:v};update("research",a)}}/>
                  </div>
                  <Field label="Summary / Abstract" value={r.summary} onChange={v=>{const a=[...localData.research];a[i]={...a[i],summary:v};update("research",a)}} multiline/>
                </div>
              ))}
              <button className="admin-btn-add" onClick={()=>update("research",[...localData.research,{title:"",type:"",status:"In Progress",year:new Date().getFullYear().toString(),journal:"",role:"Lead Author",summary:"",link:""}])}><Icon name="plus" size={14}/> Add Research</button>
            </AdminSection>
          )}

          {section==="writing" && (
            <AdminSection title="Writing & Articles">
              {localData.writing.map((w,i)=>(
                <div key={i} className="admin-card">
                  <div style={{ display:"flex", justifyContent:"space-between", marginBottom:"1rem" }}>
                    <span style={{ fontFamily:"'DM Serif Display',serif", fontSize:"1rem" }}>{w.title||`Article ${i+1}`}</span>
                    <button className="admin-btn-del" onClick={()=>update("writing",localData.writing.filter((_,j)=>j!==i))}>Remove</button>
                  </div>
                  <Field label="Title" value={w.title} onChange={v=>{const a=[...localData.writing];a[i]={...a[i],title:v};update("writing",a)}}/>
                  <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"0.75rem", marginTop:"0.75rem" }}>
                    <Field label="Type" value={w.type} onChange={v=>{const a=[...localData.writing];a[i]={...a[i],type:v};update("writing",a)}} placeholder="Op-Ed, Essay, Feature..."/>
                    <Field label="Publication" value={w.publication} onChange={v=>{const a=[...localData.writing];a[i]={...a[i],publication:v};update("writing",a)}}/>
                    <Field label="Year" value={w.year} onChange={v=>{const a=[...localData.writing];a[i]={...a[i],year:v};update("writing",a)}}/>
                    <Field label="Link (optional)" value={w.link} onChange={v=>{const a=[...localData.writing];a[i]={...a[i],link:v};update("writing",a)}}/>
                  </div>
                  <Field label="Excerpt / Summary" value={w.excerpt} onChange={v=>{const a=[...localData.writing];a[i]={...a[i],excerpt:v};update("writing",a)}} multiline/>
                </div>
              ))}
              <button className="admin-btn-add" onClick={()=>update("writing",[...localData.writing,{title:"",type:"",publication:"",year:new Date().getFullYear().toString(),excerpt:"",link:""}])}><Icon name="plus" size={14}/> Add Article / Post</button>
            </AdminSection>
          )}


          {section==="initiatives" && (
            <AdminSection title="Initiatives & Advocacy">
              {localData.initiatives.map((item,i)=>(
                <div key={i} className="admin-card">
                  <div style={{ display:"flex", justifyContent:"space-between", marginBottom:"1rem" }}>
                    <span style={{ fontFamily:"'DM Serif Display',serif", fontSize:"1rem" }}>{item.title||`Initiative ${i+1}`}</span>
                    <button className="admin-btn-del" onClick={()=>update("initiatives",localData.initiatives.filter((_,j)=>j!==i))}>Remove</button>
                  </div>
                  <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"0.75rem" }}>
                    <Field label="Title" value={item.title} onChange={v=>{const a=[...localData.initiatives];a[i]={...a[i],title:v};update("initiatives",a)}}/>
                    <Field label="Type" value={item.type} onChange={v=>{const a=[...localData.initiatives];a[i]={...a[i],type:v};update("initiatives",a)}}/>
                    <Field label="Stage" value={item.stage} onChange={v=>{const a=[...localData.initiatives];a[i]={...a[i],stage:v};update("initiatives",a)}}/>
                    <Field label="Icon" value={item.icon} onChange={v=>{const a=[...localData.initiatives];a[i]={...a[i],icon:v};update("initiatives",a)}}/>
                  </div>
                  <Field label="Description" value={item.desc} onChange={v=>{const a=[...localData.initiatives];a[i]={...a[i],desc:v};update("initiatives",a)}} multiline/>
                  <Field label="Impact" value={item.impact} onChange={v=>{const a=[...localData.initiatives];a[i]={...a[i],impact:v};update("initiatives",a)}} multiline/>
                </div>
              ))}
              <button className="admin-btn-add" onClick={()=>update("initiatives",[...localData.initiatives,{title:"",icon:"",color:"#E63946",type:"",stage:"Active",desc:"",impact:""}])}><Icon name="plus" size={14}/> Add Initiative</button>
            </AdminSection>
          )}

          {section==="projects" && (
            <AdminSection title="Ventures & Innovation Lab">
              {localData.projects.map((p,i)=>(
                <div key={i} className="admin-card">
                  <div style={{ display:"flex", justifyContent:"space-between", marginBottom:"1rem" }}>
                    <span style={{ fontFamily:"'DM Serif Display',serif", fontSize:"1rem" }}>{p.title||`Project ${i+1}`}</span>
                    <button className="admin-btn-del" onClick={()=>update("projects",localData.projects.filter((_,j)=>j!==i))}>Remove</button>
                  </div>
                  <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"0.75rem" }}>
                    <Field label="Project Title" value={p.title} onChange={v=>{const a=[...localData.projects];a[i]={...a[i],title:v};update("projects",a)}}/>
                    <Field label="Type" value={p.type} onChange={v=>{const a=[...localData.projects];a[i]={...a[i],type:v};update("projects",a)}}/>
                    <div>
                      <label className="admin-label">Stage</label>
                      <select className="admin-input" value={p.stage} onChange={e=>{const a=[...localData.projects];a[i]={...a[i],stage:e.target.value};update("projects",a)}}>
                        {["Concept","Pilot","Active","Completed","On Hold"].map(s=><option key={s}>{s}</option>)}
                      </select>
                    </div>
                    <div style={{ display:"flex", alignItems:"center", gap:"0.5rem", paddingTop:"1.5rem" }}>
                      <input type="checkbox" checked={p.collaborating} onChange={e=>{const a=[...localData.projects];a[i]={...a[i],collaborating:e.target.checked};update("projects",a)}} id={`collab-${i}`}/>
                      <label htmlFor={`collab-${i}`} style={{ fontSize:"0.85rem", color:"rgba(255,255,255,0.7)", cursor:"pointer" }}>Open to Collaborate</label>
                    </div>
                  </div>
                  <Field label="Problem" value={p.problem} onChange={v=>{const a=[...localData.projects];a[i]={...a[i],problem:v};update("projects",a)}} multiline/>
                  <Field label="Solution" value={p.solution} onChange={v=>{const a=[...localData.projects];a[i]={...a[i],solution:v};update("projects",a)}} multiline/>
                  <Field label="Impact" value={p.impact} onChange={v=>{const a=[...localData.projects];a[i]={...a[i],impact:v};update("projects",a)}} multiline/>
                </div>
              ))}
              <button className="admin-btn-add" onClick={()=>update("projects",[...localData.projects,{title:"",type:"",stage:"Concept",problem:"",solution:"",impact:"",collaborating:false}])}><Icon name="plus" size={14}/> Add Project</button>
            </AdminSection>
          )}

          {section==="presentations" && (
            <AdminSection title="Speaking & Presentations">
              {localData.presentations.map((p,i)=>(
                <div key={i} className="admin-card">
                  <div style={{ display:"flex", justifyContent:"space-between", marginBottom:"1rem" }}>
                    <span style={{ fontFamily:"'DM Serif Display',serif", fontSize:"1rem" }}>{p.title||`Talk ${i+1}`}</span>
                    <button className="admin-btn-del" onClick={()=>update("presentations",localData.presentations.filter((_,j)=>j!==i))}>Remove</button>
                  </div>
                  <Field label="Title" value={p.title} onChange={v=>{const a=[...localData.presentations];a[i]={...a[i],title:v};update("presentations",a)}}/>
                  <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"0.75rem", marginTop:"0.75rem" }}>
                    <Field label="Type" value={p.type} onChange={v=>{const a=[...localData.presentations];a[i]={...a[i],type:v};update("presentations",a)}} placeholder="Keynote, Panel, Workshop..."/>
                    <Field label="Event / Conference" value={p.event} onChange={v=>{const a=[...localData.presentations];a[i]={...a[i],event:v};update("presentations",a)}}/>
                    <Field label="Location" value={p.location} onChange={v=>{const a=[...localData.presentations];a[i]={...a[i],location:v};update("presentations",a)}}/>
                    <Field label="Year" value={p.year} onChange={v=>{const a=[...localData.presentations];a[i]={...a[i],year:v};update("presentations",a)}}/>
                    <Field label="Slides / File URL (optional)" value={p.fileUrl} onChange={v=>{const a=[...localData.presentations];a[i]={...a[i],fileUrl:v};update("presentations",a)}}/>
                  </div>
                </div>
              ))}
              <button className="admin-btn-add" onClick={()=>update("presentations",[...localData.presentations,{title:"",type:"",event:"",location:"",year:new Date().getFullYear().toString(),fileUrl:""}])}><Icon name="plus" size={14}/> Add Presentation</button>
            </AdminSection>
          )}

        </div>
      </div>
    </div>
  );
};

// ─── SHARED COMPONENTS ────────────────────────────────────────────────────────
const ProfilePhoto = ({ photo, name }) => {
  const [imgError, setImgError] = useState(false);
  return (
    <div style={{ width:"280px", height:"340px", borderRadius:"12px", background:"linear-gradient(160deg,#F0E9E0,#D6CFC5)", border:"2px solid #D6CFC5", boxShadow:"20px 20px 60px rgba(0,0,0,0.12)", display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", position:"relative", zIndex:2, overflow:"hidden" }}>
      {photo && !imgError ? (
        <img src={photo} alt={name} loading="lazy" decoding="async" style={{ width:"100%", height:"100%", objectFit:"cover" }} onError={()=>setImgError(true)} />
      ) : (
        <>
          <svg width="64" height="64" viewBox="0 0 64 64" fill="none"><circle cx="32" cy="24" r="14" stroke="#4A4340" strokeWidth="2"/><path d="M6 58c0-14.359 11.641-26 26-26s26 11.641 26 26" stroke="#4A4340" strokeWidth="2" strokeLinecap="round"/></svg>
          <div className="mono" style={{ fontSize:"0.6rem", color:"#4A4340", marginTop:"0.8rem", opacity:0.5, letterSpacing:"0.1em" }}>ADD PHOTO IN ADMIN</div>
        </>
      )}
    </div>
  );
};

const SectionHeader = ({ num, title, light }) => (
  <div style={{ display:"flex", alignItems:"baseline", gap:"1.2rem", marginBottom:"2.5rem", borderBottom:`2px solid ${light?"rgba(255,255,255,0.15)":"#1A1612"}`, paddingBottom:"0.8rem" }}>
    <span style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:"0.7rem", color:"#C0392B", letterSpacing:"0.1em" }}>{num}</span>
    <h2 className="section-title" style={{ color: light?"#fff":undefined }}>{title}</h2>
  </div>
);

const InfoBlock = ({ label, value }) => (
  <div style={{ borderLeft:"3px solid #C0392B", padding:"0.9rem 1.2rem", marginBottom:"1rem", background:"#F8F5F0", borderRadius:"0 4px 4px 0" }}>
    <div style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:"0.62rem", letterSpacing:"0.1em", textTransform:"uppercase", color:"#C0392B", marginBottom:"0.35rem" }}>{label}</div>
    <div style={{ fontWeight:500, color:"#1A1612", fontSize:"0.88rem", lineHeight:1.5 }}>{value}</div>
  </div>
);

const CVSection = ({ title, color, children }) => (
  <div style={{ marginBottom:"2.5rem" }}>
    <div style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:"0.68rem", letterSpacing:"0.12em", textTransform:"uppercase", color, marginBottom:"1.2rem", paddingBottom:"0.4rem", borderBottom:"1px solid #E8E0D5" }}>{title}</div>
    {children}
  </div>
);

const TimelineItem = ({ date, title, sub, desc }) => (
  <div style={{ display:"grid", gridTemplateColumns:"85px 1fr", gap:"1rem", marginBottom:"1.8rem", position:"relative" }}>
    <div style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:"0.68rem", color:"#4A4340", textAlign:"right", paddingTop:"3px", lineHeight:1.4 }}>{date}</div>
    <div style={{ borderLeft:"1.5px solid #E8E0D5", paddingLeft:"1rem", position:"relative" }}>
      <div style={{ position:"absolute", left:"-5px", top:"5px", width:"9px", height:"9px", borderRadius:"50%", background:"#C0392B", border:"2px solid #F8F5F0" }}></div>
      <div style={{ fontWeight:600, marginBottom:"0.2rem" }}>{title}</div>
      <div style={{ fontSize:"0.85rem", color:"#1A7A6E", fontWeight:500, marginBottom:"0.25rem" }}>{sub}</div>
      <div style={{ fontSize:"0.8rem", color:"#4A4340", lineHeight:1.6 }}>{desc}</div>
    </div>
  </div>
);

const Field = ({ label, value, onChange, placeholder, multiline, rows=3 }) => (
  <div style={{ marginBottom:"0.75rem" }}>
    {label && <label className="admin-label">{label}</label>}
    {multiline
      ? <textarea className="admin-input" rows={rows} value={value||""} onChange={e=>onChange(e.target.value)} placeholder={placeholder} style={{ resize:"vertical" }}/>
      : <input className="admin-input" value={value||""} onChange={e=>onChange(e.target.value)} placeholder={placeholder}/>
    }
  </div>
);

const AdminSection = ({ title, children }) => (
  <div>
    <div style={{ fontFamily:"'DM Serif Display',serif", fontSize:"1.6rem", marginBottom:"1.5rem", color:"#fff" }}>{title}</div>
    {children}
  </div>
);

// ─── SITE FOOTER ─────────────────────────────────────────────────────────────
const SiteFooter = ({ data, onNav }) => {
  const { profile } = data;
  const year = new Date().getFullYear();

  const socials = [
    { key:"linkedin",    label:"LinkedIn",      href:`https://${profile.linkedin}`,                       color:"#0A66C2" },
    { key:"twitter",     label:"X / Twitter",   href:`https://twitter.com/${profile.twitter.replace("@","")}`, color:"#000" },
    { key:"researchgate",label:"ResearchGate",  href:`https://${profile.researchgate}`,                   color:"#00CCBB" },
    { key:"orcid",       label:"ORCID",         href:`https://orcid.org/${profile.orcid}`,                color:"#A6CE39" },
    { key:"github",      label:"GitHub",        href:`https://${profile.github}`,                         color:"#6e5494" },
    { key:"instagram",   label:"Instagram",     href:`https://instagram.com/${profile.instagram.replace("@","")}`, color:"#E1306C" },
    { key:"facebook",    label:"Facebook",      href:`https://${profile.facebook}`,                       color:"#1877F2" },
    { key:"scholar",     label:"Google Scholar",href:profile.googlescholar?`https://${profile.googlescholar}`:"#", color:"#4285F4" },
    { key:"youtube",     label:"YouTube",       href:profile.youtube?`https://${profile.youtube}`:"#",   color:"#FF0000" },
    { key:"whatsapp",    label:"WhatsApp",      href:`https://wa.me/${profile.whatsapp}`,                 color:"#25D366" },
  ].filter(s => {
    const val = profile[s.key === "scholar" ? "googlescholar" : s.key];
    return val && val !== "" && val !== "0000-0000-0000-0000";
  });

  const pages = ["Home","About","Research","Ventures","Initiatives","Innovation Lab","Writing","Speaking","CV","Contact"];

  return (
    <footer style={{ background:"#12100E", color:"#fff", fontFamily:"'DM Sans',sans-serif" }}>
      <div style={{ height:"2px", background:"linear-gradient(90deg, #C0392B 0%, #E8654A 40%, #1A7A6E 70%, #B8860B 100%)" }}/>
      <div style={{ maxWidth:"1100px", margin:"0 auto", padding:"1.8rem 2rem" }}>

        {/* COMPACT SINGLE ROW */}
        <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", flexWrap:"wrap", gap:"1rem", marginBottom:"1rem" }}>
          {/* Brand */}
          <div style={{ display:"flex", alignItems:"center", gap:"1.2rem" }}>
            <span style={{ fontFamily:"'DM Serif Display',serif", fontSize:"1rem", cursor:"pointer" }} onClick={()=>onNav&&onNav("home")}>
              Ephrem <em style={{ color:"#C0392B" }}>Dushimimana</em>
            </span>
            <span style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:"0.58rem", letterSpacing:"0.1em", textTransform:"uppercase", color:"rgba(255,255,255,0.25)", borderLeft:"1px solid rgba(255,255,255,0.1)", paddingLeft:"1.2rem" }}>
              Medical Student · Digital Health · SRH Advocate
            </span>
          </div>
          {/* Quick nav */}
          <div style={{ display:"flex", gap:"1.2rem", flexWrap:"wrap", alignItems:"center" }}>
            {pages.map(p => (
              <span key={p} onClick={()=>onNav&&onNav(p.toLowerCase())} style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:"0.62rem", letterSpacing:"0.06em", color:"rgba(255,255,255,0.4)", cursor:"pointer", transition:"color 0.2s", textTransform:"uppercase" }}
                onMouseEnter={e=>e.target.style.color="#C0392B"}
                onMouseLeave={e=>e.target.style.color="rgba(255,255,255,0.4)"}
              >{p}</span>
            ))}
          </div>
        </div>

        {/* SOCIAL ICONS ROW — compact icon-only */}
        <div style={{ display:"flex", gap:"0.5rem", flexWrap:"wrap", marginBottom:"1rem" }}>
          {socials.map(s => (
            <a key={s.key} href={s.href} target="_blank" rel="noreferrer"
              style={{ display:"flex", alignItems:"center", justifyContent:"center", width:"28px", height:"28px", borderRadius:"4px", border:"1px solid rgba(255,255,255,0.08)", background:"rgba(255,255,255,0.02)", color:"rgba(255,255,255,0.45)", textDecoration:"none", transition:"all 0.2s" }}
              onMouseEnter={e=>{ e.currentTarget.style.background=s.color+"22"; e.currentTarget.style.borderColor=s.color+"66"; e.currentTarget.style.color="#fff"; }}
              onMouseLeave={e=>{ e.currentTarget.style.background="rgba(255,255,255,0.02)"; e.currentTarget.style.borderColor="rgba(255,255,255,0.08)"; e.currentTarget.style.color="rgba(255,255,255,0.45)"; }}
              title={s.label}
            >
              <SocialBrandIcon platform={s.key} size={12}/>
            </a>
          ))}
        </div>

        {/* BOTTOM LINE */}
        <div style={{ borderTop:"1px solid rgba(255,255,255,0.05)", paddingTop:"0.8rem", display:"flex", alignItems:"center", justifyContent:"space-between", flexWrap:"wrap", gap:"0.5rem" }}>
          <div style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:"0.58rem", color:"rgba(255,255,255,0.15)", letterSpacing:"0.06em" }}>
            © {year} Ephrem Dushimimana · All rights reserved
          </div>
          <div style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:"0.58rem", color:"rgba(255,255,255,0.12)", letterSpacing:"0.06em" }}>
            Kigali, Rwanda · Built with purpose
          </div>
        </div>
      </div>
    </footer>
  );
};

// ═══════════════════════════════════════════════════════════════════════════
// LOGIN
// ═══════════════════════════════════════════════════════════════════════════
const AdminLogin = ({ onLogin, onCancel }) => {
  const [pass, setPass] = useState("");
  const [err, setErr] = useState(false);

  const attempt = () => {
    if (pass === getStoredAdminPassword()) { onLogin(); }
    else {
      setErr(true);
      setTimeout(()=>setErr(false),2000);
    }
  };

  return (
    <div style={{ position:"fixed", inset:0, background:"rgba(0,0,0,0.85)", zIndex:9999, display:"flex", alignItems:"center", justifyContent:"center" }}>
      <div style={{ background:"#1A1612", border:"1px solid #2E2A27", borderRadius:"8px", padding:"2.5rem", width:"360px", fontFamily:"'DM Sans',sans-serif" }}>
        <div style={{ fontFamily:"'DM Serif Display',serif", fontSize:"1.5rem", color:"#fff", marginBottom:"0.3rem" }}>Admin Access</div>
        <div style={{ fontSize:"0.8rem", color:"rgba(255,255,255,0.4)", marginBottom:"2rem", fontFamily:"'JetBrains Mono',monospace" }}>Enter password to manage content</div>
        <input type="password" placeholder="Password" value={pass} onChange={e=>setPass(e.target.value)} onKeyDown={e=>e.key==="Enter"&&attempt()} style={{ width:"100%", background:"#0F0D0B", border:`1.5px solid ${err?"#C0392B":"#2E2A27"}`, borderRadius:"4px", padding:"0.75rem 1rem", color:"#fff", fontSize:"0.9rem", outline:"none", marginBottom:"1rem", fontFamily:"inherit" }} autoFocus/>
        {err && <div style={{ color:"#C0392B", fontSize:"0.8rem", marginBottom:"0.8rem" }}>Incorrect password. Try again.</div>}
        <div style={{ display:"flex", gap:"0.75rem" }}>
          <button onClick={attempt} style={{ flex:1, background:"#C0392B", color:"#fff", border:"none", borderRadius:"4px", padding:"0.75rem", cursor:"pointer", fontWeight:600 }}>Enter</button>
          <button onClick={onCancel} style={{ background:"#2E2A27", color:"rgba(255,255,255,0.5)", border:"none", borderRadius:"4px", padding:"0.75rem 1rem", cursor:"pointer" }}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

// ═══════════════════════════════════════════════════════════════════════════
// ROOT APP
// ═══════════════════════════════════════════════════════════════════════════
export default function App() {
  const [data, saveData] = useStorage();
  const [mode, setMode] = useState("site"); // "site" | "login" | "admin"

  return (
    <>
      {mode==="site" && <PortfolioSite data={data} onAdminClick={()=>setMode("login")}/>}
      {mode==="login" && <><PortfolioSite data={data} onAdminClick={()=>{}}/><AdminLogin onLogin={()=>setMode("admin")} onCancel={()=>setMode("site")}/></>}
      {mode==="admin" && <AdminDashboard data={data} onSave={saveData} onExit={()=>setMode("site")}/>}
    </>
  );
}
