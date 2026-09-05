const fs = require("fs");

const file = "src/ephrem-portfolio.jsx";
let content = fs.readFileSync(file, "utf8");

const initialData = `const INITIAL_DATA = {
  profile: {
    name: "Ephrem Dushimimana",
    title: "Medical Student | Digital Health Researcher | Health-Tech Builder",
    tagline: "I am a medical student, digital health researcher, and health-tech builder exploring how technology, evidence, and better-designed health systems can improve healthcare in Rwanda and across Africa.",
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
    mission: "To study, design, and build digital health systems that make healthcare safer, more connected, and more equitable across African health systems.",
    vision: "A future where African health systems use evidence, technology, and human-centered design to deliver high-quality care for every community."
  },
  about: {
    bio: "I am Ephrem Dushimimana, a medical student in Rwanda building a career at the intersection of clinical medicine, digital health research, and health-system innovation.\\n\\nMy work is shaped by one core question: how can technology, evidence, and better-designed systems improve healthcare delivery across Africa? I am especially interested in digital antimicrobial stewardship, health data, interoperability, AI in healthcare, oncology, and implementation science.",
    interests: ["Digital Health", "Antimicrobial Resistance", "Health Systems", "AI in Healthcare", "Oncology", "Health Equity"],
    timeline: [
      { year: "2024", title: "Medical foundation", desc: "Deepening clinical training, leadership, and early public-health project work." },
      { year: "2025", title: "Research and innovation", desc: "Building stronger research habits around health systems, digital health, and implementation questions." },
      { year: "2026", title: "Digital health building", desc: "Developing health-tech ideas, research protocols, and practical tools for African healthcare contexts." },
      { year: "Next", title: "Physician-scientist direction", desc: "Growing toward digital-health research leadership and evidence-based health-tech building." }
    ],
    learning: [
      { area: "Health interoperability", items: ["HL7", "FHIR", "APIs", "OpenHIE", "Health Information Exchange"] },
      { area: "Digital health", items: ["Digital health architecture", "Implementation science", "Health technology assessment"] },
      { area: "AI in healthcare", items: ["Clinical decision support", "Responsible AI", "Health-data applications"] }
    ],
    leadership: [
      { role: "Digital Health Builder", org: "Independent projects and research development", year: "2026-Present" },
      { role: "Medical Student", org: "University of Rwanda", year: "2021-Present" },
      { role: "Health Systems Learner", org: "Digital health, AMR, and implementation science", year: "Ongoing" }
    ]
  },
  education: [
    { degree: "Doctor of Medicine (MD)", institution: "University of Rwanda", period: "2021-Present", desc: "Medical training with growing focus on digital health, health systems, antimicrobial stewardship, oncology, and implementation research." },
    { degree: "Digital Health & Health Systems Learning", institution: "Independent study and project development", period: "Ongoing", desc: "Focused learning in interoperability, health data, APIs, implementation science, and responsible AI for clinical and public-health contexts." }
  ],
  experience: [
    { role: "RADTS Project Lead", org: "Independent digital health prototype", period: "2026-Present", desc: "Developing a digital traceability and stewardship concept for antibiotic prescriptions, verification workflows, and health-system monitoring." },
    { role: "Digital Health Researcher", org: "Independent research development", period: "2025-Present", desc: "Exploring implementation research questions around health systems, digital tools, AI, interoperability, and data-driven healthcare improvement." },
    { role: "Medical Student", org: "University of Rwanda", period: "2021-Present", desc: "Building clinical foundations while connecting medical training with research, systems thinking, and technology-enabled care." }
  ],
  awards: [
    { title: "Evidence to be added", org: "Award, fellowship, certificate, or recognition", year: "Upcoming", desc: "This section is reserved for verified awards and recognitions with supporting proof links." }
  ],
  research: [
    { title: "Rwanda Antibiotic Digital Traceability & Stewardship System (RADTS)", type: "Implementation Research", status: "Prototype / Research & Pilot Development", year: "2026", journal: "Protocol in development", role: "Project Lead", summary: "A mixed-methods implementation study concept using the RE-AIM framework to explore prescription verification, QR/token workflows, antibiotic traceability, and stewardship monitoring.", link: "" },
    { title: "Digital Health Architecture for African Health Systems", type: "Research Interest", status: "In Development", year: "2026", journal: "Ongoing learning agenda", role: "Researcher", summary: "Exploring how interoperable health-information systems, APIs, standards, and implementation design can improve care coordination and health-system intelligence.", link: "" },
    { title: "AI in Clinical and Public-Health Decision Support", type: "Research Interest", status: "In Development", year: "2026", journal: "Ongoing learning agenda", role: "Researcher", summary: "Studying where AI can responsibly support clinical reasoning, triage, surveillance, and public-health decision-making without widening inequities.", link: "" },
    { title: "Oncology, Health Equity, and Digital Tools", type: "Research Interest", status: "Exploratory", year: "2026", journal: "Future research direction", role: "Medical Student Researcher", summary: "Investigating how digital tools and better care pathways can support earlier detection, continuity of care, and more equitable oncology outcomes.", link: "" }
  ],
  writing: [
    { title: "Why digital health is not just technology", type: "Digital Health", publication: "LinkedIn", year: "2026", excerpt: "Thoughts on why strong digital health work begins with health-system problems, clinical workflows, trust, and evidence rather than software alone.", link: "" },
    { title: "What healthcare interoperability could mean for Rwanda", type: "Health Systems", publication: "LinkedIn", year: "2026", excerpt: "A reflection on hospitals, laboratories, pharmacies, and health-information systems that communicate more effectively.", link: "" },
    { title: "Why antimicrobial resistance needs digital solutions", type: "AMR", publication: "LinkedIn", year: "2026", excerpt: "Exploring how prescription verification, traceability, surveillance, and stewardship monitoring can support better antibiotic use.", link: "" },
    { title: "Building while learning", type: "Medicine", publication: "LinkedIn", year: "2026", excerpt: "Notes from the journey of becoming a doctor while learning to think like a digital-health researcher and health-tech builder.", link: "" }
  ],
  presentations: [
    { title: "Speaking record coming soon", type: "Future Talk", event: "Conferences, panels, workshops, and webinars", location: "Rwanda / Africa / Virtual", year: "Next", fileUrl: "" }
  ],
  projects: [
    { title: "RADTS", subtitle: "Rwanda Antibiotic Digital Traceability & Stewardship System", type: "Digital Health Tool", stage: "Prototype / Research & Pilot Development", problem: "Antibiotic prescribing and stewardship require better traceability, verification, and data for responsible decision-making.", solution: "A digital system concept designed around prescription verification, QR/token workflows, antibiotic traceability, and stewardship monitoring.", impact: "Mixed-methods implementation study planned using the RE-AIM framework. Evidence and pilot outcomes will be added as the project develops.", proof: "Protocol, demo, and pilot evidence to be added", collaborating: true },
    { title: "Interoperability Learning Lab", subtitle: "Health information exchange for connected care", type: "Health System Innovation", stage: "Concept", problem: "Hospitals, laboratories, pharmacies, and health-information systems often operate with fragmented data flows.", solution: "A learning project exploring how APIs, FHIR, OpenHIE ideas, and practical workflow design could support better coordination.", impact: "Early-stage concept and learning agenda. Designed to become a demonstrable project with documentation.", proof: "Architecture notes to be added", collaborating: true },
    { title: "AI for Clinical Workflow", subtitle: "Responsible support for care delivery", type: "Experimental", stage: "Concept", problem: "AI tools can help clinical and public-health decision-making, but only when designed around real workflows, evidence, and safety.", solution: "A research and prototype track focused on responsible AI use cases in triage, surveillance, and clinical workflow support.", impact: "Exploratory project. Claims will be tied to demos, protocols, or publications as evidence develops.", proof: "Demo or research notes to be added", collaborating: true },
    { title: "Health Systems Writing Series", subtitle: "LinkedIn essays and public learning", type: "Advocacy / Policy", stage: "Active", problem: "Digital health conversations can become tool-focused while ignoring systems, implementation, and evidence.", solution: "A public writing stream on digital health, AMR, AI, interoperability, medical training, and African health systems.", impact: "Ongoing ideas archive. Links to posts will be added as each piece is published.", proof: "LinkedIn links to be added", collaborating: false }
  ],
  labFocus: [
    { title: "Interoperability", question: "How can hospitals, laboratories, pharmacies, and health-information systems communicate effectively?" },
    { title: "AI in Healthcare", question: "Where can AI genuinely improve clinical and public-health decision-making?" },
    { title: "Digital Antimicrobial Stewardship", question: "How can digital systems improve antibiotic prescribing, traceability, and surveillance?" },
    { title: "Health Data", question: "How can fragmented health data become actionable health intelligence?" },
    { title: "Clinical Workflow", question: "How should technology fit into the realities of healthcare delivery?" }
  ],
  initiatives: [
    { title: "SRH Advocacy & Policy", icon: "Policy", color: "#E63946", type: "Policy & Advocacy", stage: "Active", desc: "A continued interest area in evidence-based campaigns and policy briefs for sexual and reproductive health rights in Rwanda and East Africa.", impact: "Evidence links and verified campaign details will be added as available." },
    { title: "Community Health Equity", icon: "Equity", color: "#2A9D8F", type: "Community Initiative", stage: "Active", desc: "A broader commitment to social determinants of health, rural access, and practical health-system improvement.", impact: "Partnerships, projects, and proof points will be documented over time." }
  ]
};`;

const homePage = `const HomePage = ({ data, onNav }) => {
  const { profile, research, writing, projects, labFocus } = data;
  const selectedInsights = writing.slice(0, 3);

  return (
    <div className="fade-in">
      <section style={{ minHeight:"calc(100vh - 60px)", display:"grid", gridTemplateColumns:"repeat(auto-fit, minmax(300px, 1fr))", background:"#F9F7F3", position:"relative", overflow:"hidden" }}>
        <div style={{ display:"flex", flexDirection:"column", justifyContent:"center", padding:"clamp(2rem, 8vw, 8rem) clamp(1.5rem, 5vw, 5rem)", position:"relative", zIndex:1 }}>
          <div className="mono" style={{ fontSize:"0.7rem", letterSpacing:"0.18em", textTransform:"uppercase", color:"#E63946", marginBottom:"1.2rem" }}>Medical Student - Digital Health - Health Systems</div>
          <h1 className="serif" style={{ fontSize:"clamp(2rem, 5vw, 5.5rem)", lineHeight:1.02, marginBottom:"0.6rem" }}>
            {profile.name.split(" ")[0]}<br/>
            <em style={{ color:"#E63946", textTransform:"uppercase" }}>{profile.name.split(" ").slice(1).join(" ")}</em>
          </h1>
          <p className="serif" style={{ fontSize:"clamp(0.95rem, 2vw, 1.2rem)", fontStyle:"italic", color:"#4A4340", maxWidth:"560px", marginBottom:"1rem", lineHeight:1.7 }}>
            {profile.tagline}
          </p>
          <div style={{ display:"inline-flex", alignItems:"center", gap:"0.6rem", padding:"0.65rem 0.95rem", borderRadius:"999px", background:"rgba(255,255,255,0.75)", border:"1px solid #E8E0D5", marginBottom:"2rem", width:"fit-content", boxShadow:"0 8px 24px rgba(15,13,11,0.05)" }}>
            <span style={{ width:"8px", height:"8px", borderRadius:"50%", background:"#E63946" }}></span>
            <span className="mono" style={{ fontSize:"0.65rem", letterSpacing:"0.12em", textTransform:"uppercase", color:"#4A4340" }}>Medicine - Research - Technology - Better Health Systems</span>
          </div>
          <div style={{ display:"flex", gap:"0.6rem", flexWrap:"wrap", marginBottom:"2.5rem" }}>
            {["Medicine","Digital Health","Health Systems","Research"].map((p,i)=>(
              <span key={p} className="pill" style={{ background:["#E63946","#2A9D8F","#D4A574","#2C3E50"][i], color:"#fff" }}>{p}</span>
            ))}
          </div>
          <div style={{ display:"flex", gap:"1rem", flexWrap:"wrap" }}>
            <button className="btn-primary" onClick={()=>onNav("projects")}>View Projects</button>
            <button className="btn-outline" onClick={()=>onNav("digital health lab")}>Digital Health Lab</button>
            <button className="btn-outline" onClick={()=>onNav("research")}>Research</button>
          </div>
        </div>
        <div style={{ background:"linear-gradient(135deg,#F0E9E0,#E8D5C4)", display:"flex", alignItems:"center", justifyContent:"center", position:"relative", overflow:"hidden", minHeight:"400px" }}>
          <div style={{ position:"absolute", width:"420px", height:"420px", borderRadius:"50%", background:"radial-gradient(circle,#E6394622,transparent)", animation:"pulse 6s ease-in-out infinite" }}></div>
          <ProfilePhoto photo={profile.photo} name={profile.name} />
          <div style={{ position:"absolute", bottom:"18%", left:"8%", background:"#fff", border:"1px solid #E8E0D5", borderRadius:"6px", padding:"0.85rem 1.1rem", boxShadow:"8px 8px 24px rgba(0,0,0,0.08)", zIndex:3 }}>
            <div className="mono" style={{ fontSize:"0.58rem", color:"#E63946", letterSpacing:"0.12em", textTransform:"uppercase", marginBottom:"0.25rem" }}>Exploring</div>
            <div className="serif" style={{ fontSize:"1.1rem", color:"#1A1612", lineHeight:1.1 }}>Digital Health</div>
          </div>
          <div style={{ position:"absolute", top:"24%", right:"8%", background:"#fff", border:"1px solid #E8E0D5", borderRadius:"6px", padding:"0.85rem 1.1rem", boxShadow:"8px 8px 24px rgba(0,0,0,0.08)", zIndex:3 }}>
            <div className="mono" style={{ fontSize:"0.58rem", color:"#2A9D8F", letterSpacing:"0.12em", textTransform:"uppercase", marginBottom:"0.25rem" }}>Building</div>
            <div className="serif" style={{ fontSize:"1.1rem", color:"#1A1612", lineHeight:1.1 }}>Health-Tech Systems</div>
          </div>
        </div>
        <style>{\`@keyframes pulse{0%,100%{transform:scale(1)}50%{transform:scale(1.08)}}
          @media(max-width:768px){
            section{min-height:auto;grid-template-columns:1fr}
            section > div:last-child{min-height:300px}
            .serif{font-size:clamp(1.2rem,4vw,2.8rem)!important}
          }
        \`}</style>
      </section>

      <section style={{ padding:"clamp(2rem, 8vw, 5rem) clamp(1.5rem, 5vw, 4rem)", background:"#fff" }}>
        <SectionHeader num="01" title="Core Question" />
        <div className="serif" style={{ fontSize:"clamp(1.5rem, 4vw, 3rem)", lineHeight:1.15, maxWidth:"850px", marginBottom:"1rem" }}>
          How can technology and evidence improve African health systems?
        </div>
        <p style={{ color:"#4A4340", maxWidth:"700px", fontSize:"1rem" }}>
          This portfolio is organized around the healthcare problem space I care about: digital health, antimicrobial stewardship, AI, health data, and practical systems that improve care delivery.
        </p>
      </section>

      <section style={{ padding:"clamp(2rem, 8vw, 5rem) clamp(1.5rem, 5vw, 4rem)", background:"#F9F7F3" }}>
        <SectionHeader num="02" title="Selected Projects" />
        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill, minmax(300px, 1fr))", gap:"1.2rem" }}>
          {projects.slice(0,3).map((p,i)=>(
            <div key={i} className="card">
              <div className="mono" style={{ fontSize:"0.63rem", letterSpacing:"0.1em", textTransform:"uppercase", color:"#2A9D8F", marginBottom:"0.7rem" }}>{p.type} - {p.stage}</div>
              <div className="serif" style={{ fontSize:"1.25rem", marginBottom:"0.25rem", lineHeight:1.25 }}>{p.title}</div>
              {p.subtitle && <div style={{ color:"#4A4340", fontSize:"0.82rem", marginBottom:"0.9rem", fontWeight:600 }}>{p.subtitle}</div>}
              <div style={{ fontSize:"0.83rem", color:"#4A4340", lineHeight:1.65 }}>{p.solution}</div>
            </div>
          ))}
        </div>
        <button className="btn-outline" style={{ marginTop:"1.5rem" }} onClick={()=>onNav("projects")}>All Projects</button>
      </section>

      <section style={{ padding:"clamp(2rem, 8vw, 5rem) clamp(1.5rem, 5vw, 4rem)", background:"#0F0D0B" }}>
        <SectionHeader num="03" title="Digital Health Lab" light/>
        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill, minmax(240px, 1fr))", gap:"1rem" }}>
          {(labFocus || []).map((item,i)=>(
            <div key={item.title} style={{ background:"rgba(255,255,255,0.04)", border:"1px solid rgba(255,255,255,0.1)", borderRadius:"6px", padding:"1.4rem" }}>
              <div className="mono" style={{ color:"#E8654A", fontSize:"0.62rem", marginBottom:"0.5rem" }}>{String(i+1).padStart(2,"0")}</div>
              <div className="serif" style={{ color:"#fff", fontSize:"1.15rem", marginBottom:"0.65rem" }}>{item.title}</div>
              <div style={{ color:"rgba(255,255,255,0.58)", fontSize:"0.83rem", lineHeight:1.6 }}>{item.question}</div>
            </div>
          ))}
        </div>
        <button className="btn-primary" style={{ marginTop:"2rem", background:"transparent", borderColor:"rgba(255,255,255,0.3)", color:"#fff" }} onClick={()=>onNav("digital health lab")}>Enter the Lab</button>
      </section>

      <section style={{ padding:"clamp(2rem, 8vw, 5rem) clamp(1.5rem, 5vw, 4rem)", background:"#fff" }}>
        <SectionHeader num="04" title="What I'm Thinking About" />
        {selectedInsights.map((w,i)=>(
          <div key={i} className="writing-row">
            <div className="mono" style={{ fontSize:"0.7rem", color:"#4A4340", opacity:0.5, paddingTop:"3px" }}>{String(i+1).padStart(2,"0")}</div>
            <div>
              <div className="mono" style={{ fontSize:"0.63rem", letterSpacing:"0.1em", textTransform:"uppercase", color:"#2A9D8F", marginBottom:"0.25rem" }}>{w.type} - {w.publication}</div>
              <div className="serif writing-row-title" style={{ fontSize:"1.1rem", marginBottom:"0.3rem", lineHeight:1.35, transition:"color 0.2s" }}>{w.title}</div>
              <div style={{ fontSize:"0.82rem", color:"#4A4340", lineHeight:1.6 }}>{w.excerpt}</div>
            </div>
            <div className="arrow">+</div>
          </div>
        ))}
        <button className="btn-outline" style={{ marginTop:"1.5rem" }} onClick={()=>onNav("writing")}>Writing & Ideas</button>
      </section>

      <section style={{ padding:"clamp(2rem, 8vw, 5rem) clamp(1.5rem, 5vw, 4rem)", background:"#E63946", textAlign:"center" }}>
        <div className="serif" style={{ fontSize:"clamp(1.4rem, 4vw, 2.8rem)", color:"#fff", marginBottom:"1rem", fontStyle:"italic" }}>Let's build better health systems.</div>
        <p style={{ color:"rgba(255,255,255,0.82)", margin:"0 auto 2rem", fontSize:"1rem", maxWidth:"700px" }}>
          I am interested in collaborating on digital health research, health-tech projects, interoperability, healthcare innovation, and evidence-based solutions for African health systems.
        </p>
        <button className="btn-primary" style={{ background:"#fff", color:"#E63946", borderColor:"#fff" }} onClick={()=>onNav("contact")}>Start a Conversation</button>
      </section>
    </div>
  );
};`;

const aboutPage = `const AboutPage = ({ data }) => {
  const { profile, about } = data;
  return (
    <div className="fade-in" style={{ padding:"clamp(2rem, 8vw, 4rem) clamp(1.5rem, 5vw, 5rem)" }}>
      <SectionHeader num="01" title="About Me"/>
      <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit, minmax(300px, 1fr))", gap:"clamp(2rem, 5vw, 4rem)", marginBottom:"4rem", alignItems:"start" }}>
        <div>
          {about.bio.split("\\n\\n").map((p,i)=>(
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

      <SectionHeader num="02" title="Currently Learning"/>
      <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill, minmax(260px, 1fr))", gap:"1rem", marginBottom:"4rem" }}>
        {(about.learning || []).map((group)=>(
          <div key={group.area} className="card">
            <div className="serif" style={{ fontSize:"1.15rem", marginBottom:"0.8rem" }}>{group.area}</div>
            <div style={{ display:"flex", gap:"0.45rem", flexWrap:"wrap" }}>
              {group.items.map(item=><span key={item} style={{ background:"#F9F7F3", border:"1px solid #E8E0D5", borderRadius:"3px", padding:"0.3rem 0.65rem", fontSize:"0.78rem", color:"#4A4340" }}>{item}</span>)}
            </div>
          </div>
        ))}
      </div>

      <SectionHeader num="03" title="Journey"/>
      <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit, minmax(220px, 1fr))", gap:"1rem", marginBottom:"4rem" }}>
        {(about.timeline || []).map((item)=>(
          <div key={item.year} className="card">
            <div className="mono" style={{ fontSize:"0.7rem", color:"#E63946", letterSpacing:"0.1em", marginBottom:"0.55rem" }}>{item.year}</div>
            <div className="serif" style={{ fontSize:"1.1rem", marginBottom:"0.45rem" }}>{item.title}</div>
            <div style={{ color:"#4A4340", fontSize:"0.82rem", lineHeight:1.6 }}>{item.desc}</div>
          </div>
        ))}
      </div>

      <SectionHeader num="04" title="Roles & Direction"/>
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
};`;

const researchPage = `const ResearchPage = ({ data }) => {
  const [filter, setFilter] = useState("All");
  const types = ["All", ...new Set(data.research.map(r=>r.type))];
  const filtered = filter==="All" ? data.research : data.research.filter(r=>r.type===filter);
  const methods = ["Literature review", "Mixed-methods research", "Implementation science", "Health systems research", "Quantitative analysis", "Qualitative research"];
  const interests = ["Digital Health", "Antimicrobial Resistance", "Health Systems", "Oncology", "Public Health", "Health Equity"];

  return (
    <div className="fade-in" style={{ padding:"clamp(2rem, 8vw, 4rem) clamp(1.5rem, 5vw, 5rem)" }}>
      <SectionHeader num="01" title="Research"/>
      <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit, minmax(280px, 1fr))", gap:"1rem", marginBottom:"3rem" }}>
        <div className="card">
          <div className="mono" style={{ fontSize:"0.63rem", color:"#E63946", textTransform:"uppercase", letterSpacing:"0.1em", marginBottom:"0.7rem" }}>Research Interests</div>
          <div style={{ display:"flex", flexWrap:"wrap", gap:"0.5rem" }}>
            {interests.map(item=><span key={item} className="pill" style={{ background:"#F9F7F3", color:"#1A1612", border:"1px solid #E8E0D5" }}>{item}</span>)}
          </div>
        </div>
        <div className="card">
          <div className="mono" style={{ fontSize:"0.63rem", color:"#2A9D8F", textTransform:"uppercase", letterSpacing:"0.1em", marginBottom:"0.7rem" }}>Research Methods</div>
          <div style={{ display:"flex", flexWrap:"wrap", gap:"0.5rem" }}>
            {methods.map(item=><span key={item} className="pill" style={{ background:"#F9F7F3", color:"#1A1612", border:"1px solid #E8E0D5" }}>{item}</span>)}
          </div>
        </div>
      </div>

      <SectionHeader num="02" title="Publications, Manuscripts & Ongoing Research"/>
      <div style={{ display:"flex", gap:"0.5rem", flexWrap:"wrap", marginBottom:"2.5rem" }}>
        {types.map(t=>(
          <button key={t} onClick={()=>setFilter(t)} style={{ padding:"0.4rem 1rem", borderRadius:"2rem", border:"1.5px solid", fontFamily:"'JetBrains Mono',monospace", fontSize:"0.7rem", letterSpacing:"0.08em", cursor:"pointer", background:filter===t?"#E63946":"transparent", color:filter===t?"#fff":"#4A4340", borderColor:filter===t?"#E63946":"#D6CFC5", transition:"all 0.2s" }}>{t}</button>
        ))}
      </div>
      <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill, minmax(300px, 1fr))", gap:"1.2rem" }}>
        {filtered.map((r,i)=>(
          <div key={i} className="card">
            <div className="mono" style={{ fontSize:"0.63rem", letterSpacing:"0.1em", textTransform:"uppercase", color:"#2A9D8F", marginBottom:"0.7rem" }}>{r.type}</div>
            <div className="serif" style={{ fontSize:"1.1rem", marginBottom:"0.7rem", lineHeight:1.35 }}>{r.title}</div>
            <div style={{ fontSize:"0.82rem", color:"#4A4340", lineHeight:1.65, marginBottom:"1rem" }}>{r.summary}</div>
            <div style={{ display:"flex", flexWrap:"wrap", gap:"0.5rem", alignItems:"center" }}>
              <span style={{ background:"#E6394622", color:"#E63946", padding:"0.2rem 0.7rem", borderRadius:"2rem", fontSize:"0.7rem", fontWeight:600 }}>{r.status}</span>
              <span className="mono" style={{ fontSize:"0.65rem", color:"#4A4340", opacity:0.5 }}>{r.year} - {r.journal}</span>
            </div>
            <div style={{ fontSize:"0.75rem", color:"#4A4340", marginTop:"0.5rem" }}>Role: <strong>{r.role}</strong></div>
            {r.link && <a href={r.link} target="_blank" rel="noreferrer" style={{ display:"inline-flex", alignItems:"center", gap:"0.3rem", fontSize:"0.8rem", color:"#E63946", fontWeight:600, marginTop:"0.8rem", textDecoration:"none" }}>Read</a>}
          </div>
        ))}
      </div>
    </div>
  );
};`;

const writingPage = `const WritingPage = ({ data }) => {
  const [filter, setFilter] = useState("All");
  const types = ["All", ...new Set(data.writing.map(w=>w.type))];
  const filtered = filter==="All" ? data.writing : data.writing.filter(w=>w.type===filter);
  return (
    <div className="fade-in" style={{ padding:"clamp(2rem, 8vw, 4rem) clamp(1.5rem, 5vw, 5rem)" }}>
      <SectionHeader num="06" title="Writing & Ideas"/>
      <div style={{ background:"#fff", border:"1px solid #E8E0D5", borderRadius:"8px", padding:"1.5rem", marginBottom:"2rem" }}>
        <div className="mono" style={{ fontSize:"0.63rem", letterSpacing:"0.12em", textTransform:"uppercase", color:"#E63946", marginBottom:"0.6rem" }}>Latest from LinkedIn</div>
        <div className="serif" style={{ fontSize:"1.35rem", marginBottom:"0.5rem" }}>{data.writing[0]?.title}</div>
        <p style={{ color:"#4A4340", fontSize:"0.9rem" }}>{data.writing[0]?.excerpt}</p>
      </div>
      <div style={{ display:"flex", gap:"0.5rem", flexWrap:"wrap", marginBottom:"2.5rem" }}>
        {types.map(t=>(
          <button key={t} onClick={()=>setFilter(t)} style={{ padding:"0.4rem 1rem", borderRadius:"2rem", border:"1.5px solid", fontFamily:"'JetBrains Mono',monospace", fontSize:"0.7rem", letterSpacing:"0.08em", cursor:"pointer", background:filter===t?"#E63946":"transparent", color:filter===t?"#fff":"#4A4340", borderColor:filter===t?"#E63946":"#D6CFC5", transition:"all 0.2s" }}>{t}</button>
        ))}
      </div>
      {filtered.map((w,i)=>(
        <div key={i} className="writing-row" onClick={()=>w.link && window.open(w.link,"_blank")}>
          <div className="mono" style={{ fontSize:"0.7rem", color:"#4A4340", opacity:0.5, paddingTop:"3px" }}>{w.year}</div>
          <div>
            <div className="mono" style={{ fontSize:"0.63rem", letterSpacing:"0.1em", textTransform:"uppercase", color:"#2A9D8F", marginBottom:"0.25rem" }}>{w.type} - {w.publication}</div>
            <div className="serif writing-row-title" style={{ fontSize:"1.15rem", marginBottom:"0.4rem", lineHeight:1.35, transition:"color 0.2s" }}>{w.title}</div>
            <div style={{ fontSize:"0.82rem", color:"#4A4340", lineHeight:1.6, marginBottom:"0.6rem" }}>{w.excerpt}</div>
            {w.link && (
              <a href={w.link} target="_blank" rel="noreferrer" style={{ color:"#E63946", fontWeight:600, fontSize:"0.8rem", textDecoration:"none" }}>
                Read on LinkedIn
              </a>
            )}
          </div>
          <div className="arrow">+</div>
        </div>
      ))}
    </div>
  );
};`;

const projectsPage = `const VenturesPage = ({ data }) => (
  <div className="fade-in" style={{ padding:"clamp(2rem, 8vw, 4rem) clamp(1.5rem, 5vw, 5rem)" }}>
    <SectionHeader num="04" title="Projects & Innovation"/>
    <p style={{ color:"#4A4340", fontSize:"1rem", lineHeight:1.8, maxWidth:"740px", marginBottom:"3rem" }}>
      A practical evidence layer for what I am studying and building. Each project is labeled honestly by its current stage, with proof links intended to grow as protocols, demos, papers, or documentation become available.
    </p>
    <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill, minmax(300px, 1fr))", gap:"1.5rem" }}>
      {data.projects.map((p,i)=>(
        <div key={i} className="card">
          <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", marginBottom:"1rem", gap:"0.8rem" }}>
            <div className="mono" style={{ fontSize:"0.63rem", letterSpacing:"0.1em", textTransform:"uppercase", color:"#2A9D8F" }}>{p.type}</div>
            <span style={{ background:"#D4A57422", color:"#9B6C1E", padding:"0.15rem 0.6rem", borderRadius:"2rem", fontSize:"0.68rem", fontWeight:600 }}>{p.stage}</span>
          </div>
          <div className="serif" style={{ fontSize:"1.3rem", marginBottom:"0.35rem", lineHeight:1.2 }}>{p.title}</div>
          {p.subtitle && <div style={{ color:"#4A4340", fontWeight:600, fontSize:"0.84rem", marginBottom:"1rem" }}>{p.subtitle}</div>}
          <div style={{ marginBottom:"0.8rem" }}>
            <div className="mono" style={{ fontSize:"0.63rem", color:"#E63946", textTransform:"uppercase", letterSpacing:"0.08em", marginBottom:"0.3rem" }}>Problem</div>
            <div style={{ fontSize:"0.83rem", color:"#4A4340", lineHeight:1.6 }}>{p.problem}</div>
          </div>
          <div style={{ marginBottom:"0.8rem" }}>
            <div className="mono" style={{ fontSize:"0.63rem", color:"#2A9D8F", textTransform:"uppercase", letterSpacing:"0.08em", marginBottom:"0.3rem" }}>Approach</div>
            <div style={{ fontSize:"0.83rem", color:"#4A4340", lineHeight:1.6 }}>{p.solution}</div>
          </div>
          <div style={{ marginBottom:"1rem" }}>
            <div className="mono" style={{ fontSize:"0.63rem", color:"#D4A574", textTransform:"uppercase", letterSpacing:"0.08em", marginBottom:"0.3rem" }}>Evidence Layer</div>
            <div style={{ fontSize:"0.83rem", color:"#4A4340", lineHeight:1.6 }}>{p.proof || p.impact}</div>
          </div>
          {p.collaborating && <div style={{ display:"inline-flex", alignItems:"center", gap:"0.4rem", fontSize:"0.75rem", color:"#E63946", border:"1px solid #E6394633", padding:"0.3rem 0.8rem", borderRadius:"3px", background:"#E6394608" }}>Open to Collaborate</div>}
        </div>
      ))}
    </div>
  </div>
);`;

const labPage = `const InnovationLabPage = ({ data }) => (
  <div className="fade-in" style={{ background:"#0F0D0B", minHeight:"60vh" }}>
    <div style={{ background:"linear-gradient(135deg,#1A1612 0%,#2C1810 100%)", padding:"4rem clamp(1.5rem,5vw,5rem) 3rem" }}>
      <div style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:"0.68rem", letterSpacing:"0.16em", textTransform:"uppercase", color:"#E8654A", marginBottom:"1rem" }}>05 - Digital Health Lab</div>
      <h1 className="serif" style={{ fontSize:"clamp(2rem,4vw,3.2rem)", color:"#fff", lineHeight:1.1, marginBottom:"1rem" }}>
        Questions I'm investigating.<br/><em style={{ color:"#E8654A" }}>Systems I'm studying. Solutions I'm building.</em>
      </h1>
      <p style={{ fontSize:"1rem", color:"rgba(255,255,255,0.58)", maxWidth:"650px", lineHeight:1.7 }}>
        This is the intellectual center of the portfolio: a living lab for digital health, implementation research, health data, and responsible technology for African health systems.
      </p>
    </div>
    <div style={{ padding:"3.5rem clamp(1.5rem,5vw,5rem)" }}>
      <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(280px,1fr))", gap:"1.5rem", marginBottom:"3rem" }}>
        {(data.labFocus || []).map((item,i) => (
          <div key={item.title} style={{ background:"rgba(255,255,255,0.04)", border:"1px solid rgba(255,255,255,0.1)", borderRadius:"6px", padding:"2rem", position:"relative", overflow:"hidden" }}>
            <div style={{ position:"absolute", bottom:"-1rem", right:"0.5rem", fontFamily:"'DM Serif Display',serif", fontSize:"6rem", color:"#fff", opacity:0.03, lineHeight:1, pointerEvents:"none" }}>{String(i+1).padStart(2,"0")}</div>
            <div className="serif" style={{ fontSize:"1.35rem", color:"#fff", marginBottom:"0.8rem", lineHeight:1.2 }}>{item.title}</div>
            <div style={{ fontSize:"0.9rem", color:"rgba(255,255,255,0.62)", lineHeight:1.7 }}>{item.question}</div>
          </div>
        ))}
      </div>
      <SectionHeader num="06" title="Lab Projects" light/>
      <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(300px,1fr))", gap:"1.5rem" }}>
        {data.projects.slice(0,3).map((p,i) => (
          <div key={i} style={{ background:"rgba(255,255,255,0.04)", border:"1px solid rgba(255,255,255,0.1)", borderRadius:"6px", padding:"2rem" }}>
            <div style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:"0.6rem", letterSpacing:"0.1em", textTransform:"uppercase", color:"#E8654A", marginBottom:"0.7rem" }}>{p.type} - {p.stage}</div>
            <div className="serif" style={{ fontSize:"1.3rem", color:"#fff", marginBottom:"1rem", lineHeight:1.2 }}>{p.title}</div>
            <div style={{ fontSize:"0.82rem", color:"rgba(255,255,255,0.58)", lineHeight:1.6 }}>{p.solution}</div>
          </div>
        ))}
      </div>
    </div>
  </div>
);`;

function replaceBetween(startRegex, endRegex, replacement) {
  const start = content.search(startRegex);
  if (start === -1) throw new Error(`Missing start: ${startRegex}`);
  const rest = content.slice(start);
  const endMatch = rest.match(endRegex);
  if (!endMatch || endMatch.index === undefined) throw new Error(`Missing end after: ${startRegex}`);
  const end = start + endMatch.index;
  content = content.slice(0, start) + replacement + "\n\n" + content.slice(end);
}

content = content.replace(/const INITIAL_DATA = \{[\s\S]*?\n\};\n\n\/\/.*?ICONS/, initialData + "\n\n// ICONS");
content = content.replace('const navItems = ["Home","About","Research","Ventures","Initiatives","Innovation Lab","Writing","Speaking","CV","Contact"];', 'const navItems = ["Home","About","Research","Projects","Digital Health Lab","Writing","CV","Contact"];');
content = content.replace('{activePage==="ventures" && <VenturesPage data={data}/>}','{activePage==="projects" && <VenturesPage data={data}/>}');
content = content.replace('{activePage==="innovation lab" && <InnovationLabPage data={data}/>}','{activePage==="digital health lab" && <InnovationLabPage data={data}/>}');

replaceBetween(/const HomePage = \(\{ data, onNav \}\) => \{/, /\/\/.*?ABOUT PAGE/, homePage);
content = content.replace("// ABOUT PAGE", "// ABOUT PAGE");
replaceBetween(/const AboutPage = \(\{ data \}\) => \{/, /\/\/.*?CV PAGE/, aboutPage);
content = content.replace("// CV PAGE", "// CV PAGE");
replaceBetween(/const ResearchPage = \(\{ data \}\) => \{/, /\/\/.*?WRITING PAGE/, researchPage);
content = content.replace("// WRITING PAGE", "// WRITING PAGE");
replaceBetween(/const WritingPage = \(\{ data \}\) => \{/, /\/\/.*?PROJECTS PAGE/, writingPage);
content = content.replace("// PROJECTS PAGE", "// PROJECTS PAGE");
replaceBetween(/const VenturesPage = \(\{ data \}\) => \(/, /\/\/.*?PRESENTATIONS PAGE/, projectsPage);
content = content.replace("// PRESENTATIONS PAGE", "// PRESENTATIONS PAGE");
replaceBetween(/const InnovationLabPage = \(\{ data \}\) => \(/, /\/\/.*?CONTACT PAGE/, labPage);
content = content.replace("// CONTACT PAGE", "// CONTACT PAGE");

content = content.replace(/<div style=\{\{ fontFamily:"'JetBrains Mono',monospace", fontSize:"0\.68rem"[\s\S]*?10.*?Contact[\s\S]*?<\/p>/, `<div style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:"0.68rem", letterSpacing:"0.16em", textTransform:"uppercase", color:"#E63946", marginBottom:"1rem" }}>08 - Collaboration</div>
          <h1 className="serif" style={{ fontSize:"clamp(1.8rem, 4vw, 3.2rem)", color:"#fff", lineHeight:1.1, marginBottom:"1rem" }}>
            Let's build better<br/><em style={{ color:"#E8654A" }}>health systems.</em>
          </h1>
          <p style={{ fontSize:"clamp(0.9rem, 2vw, 1rem)", color:"rgba(255,255,255,0.5)", maxWidth:"620px", lineHeight:1.7 }}>
            I am interested in collaborating on digital health research, health-tech projects, interoperability, healthcare innovation, and evidence-based solutions for African health systems.
          </p>`);

content = content.replace('const pages = ["Home","About","Research","Ventures","Initiatives","Innovation Lab","Writing","Speaking","CV","Contact"];', 'const pages = ["Home","About","Research","Projects","Digital Health Lab","Writing","CV","Contact"];');
content = content.replace("Medical Student Â· Digital Health Â· SRH Advocate", "Medical Student - Digital Health - Health Systems");
content = content.replace("Kigali, Rwanda Â· Built with purpose", "Kigali, Rwanda - Built with purpose");
content = content.replace("Â© {year} Ephrem Dushimimana Â· All rights reserved", "© {year} Ephrem Dushimimana - All rights reserved");

fs.writeFileSync(file, content);
