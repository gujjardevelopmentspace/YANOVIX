export type IndustryDetail = {
  slug: string;
  title: string;
  short: string;
  hero: string;
  overview: string;
  icon:
    | "health"
    | "home"
    | "law"
    | "finance"
    | "marketing"
    | "education"
    | "recruitment"
    | "construction"
    | "logistics";
  accent: string;
  capabilities: string[];
  pains: { title: string; detail: string }[];
  solutions: { title: string; detail: string }[];
  satisfaction: { label: string; value: string }[];
  quote: { text: string; name: string; role: string };
  process: { title: string; detail: string }[];
  relatedServices: string[];
  compliance: string[];
};

export const INDUSTRIES: IndustryDetail[] = [
  {
    slug: "healthcare",
    title: "Healthcare",
    short: "Intake, booking, and follow-ups that patients actually complete - without burning out your front desk.",
    hero: "Clinics that answer every call, book every slot, and follow up without the phone bank.",
    overview:
      "Healthcare teams lose patients in voicemail, no-shows, and slow follow-ups. We build voice and chat systems that handle intake, scheduling, reminders, and triage handoffs - wired into your EHR or practice tools, with privacy and audit trails your compliance team can live with.",
    icon: "health",
    accent: "#0A0A0A",
    capabilities: [
      "AI Receptionists",
      "Patient Follow-ups",
      "Appointment Booking",
      "Voice AI",
      "WhatsApp Automation",
    ],
    pains: [
      { title: "Missed calls = lost appointments", detail: "After-hours and lunch rushes leave patients hanging - and they book elsewhere." },
      { title: "Front desk drowning in intake", detail: "Repetitive forms and insurance questions eat the day before clinical work starts." },
      { title: "No-shows kill utilization", detail: "Reminders are inconsistent, and reschedules clog the phone lines." },
    ],
    solutions: [
      { title: "Always-on voice intake", detail: "Natural phone agents collect reason for visit, insurance basics, and book into your calendar." },
      { title: "Omnichannel follow-ups", detail: "SMS, WhatsApp, or voice reminders with easy reschedule links." },
      { title: "Warm handoff to humans", detail: "Urgent or complex cases transfer with full context - no 'start over'." },
    ],
    satisfaction: [
      { label: "Booking conversion lift", value: "up to 3x" },
      { label: "After-hours coverage", value: "24/7" },
      { label: "Typical go-live", value: "4-8 wks" },
      { label: "Client retention", value: "high" },
    ],
    quote: {
      text: "Booking conversion roughly tripled. I still get stopped in the hallway and asked how we pulled it off.",
      name: "Dr. Amelia Rowe",
      role: "COO, Helix Health Network",
    },
    process: [
      { title: "Map clinical ops", detail: "Intake paths, specialties, and what must stay human." },
      { title: "Privacy by design", detail: "Access controls, logging, and PHI handling from day one." },
      { title: "Pilot one site", detail: "Prove booking and CSAT before rolling out network-wide." },
      { title: "Scale and tune", detail: "Transcript reviews, no-show rates, and staffing mix." },
    ],
    relatedServices: ["voice-ai-agents", "ai-chatbots", "whatsapp-automation", "crm-automation"],
    compliance: ["HIPAA-aware design", "Audit logs", "Role-based access", "BAAs where required"],
  },
  {
    slug: "real-estate",
    title: "Real Estate",
    short: "Leads get answered in seconds, qualified, and nurtured until a closer takes over.",
    hero: "Speed-to-lead that actually books showings - not just fills a CRM.",
    overview:
      "Real estate dies in the first five minutes. We build agents and automations that reply instantly, qualify buyers and renters, match listings, and keep nurturing on WhatsApp, SMS, and email - synced to your CRM so agents only talk to warm opportunities.",
    icon: "home",
    accent: "#525252",
    capabilities: [
      "Lead Qualification",
      "CRM Automation",
      "Property Chatbots",
      "Voice Calling",
    ],
    pains: [
      { title: "Leads go cold overnight", detail: "Portals dump volume; agents cannot call everyone in time." },
      { title: "CRM is a graveyard", detail: "Half the pipeline has no next step and no owner." },
      { title: "Same questions, every listing", detail: "Price, availability, HOA, parking - repeated all day." },
    ],
    solutions: [
      { title: "Instant qualification", detail: "Chat and voice ask budget, timeline, and location - then score fit." },
      { title: "Listing-aware chatbots", detail: "Answers from your inventory, not generic fluff." },
      { title: "Closer handoff", detail: "Hot leads book a showing or call with full context in HubSpot or Salesforce." },
    ],
    satisfaction: [
      { label: "Lead conversion", value: "up to 3.7x" },
      { label: "First response", value: "~12s" },
      { label: "Nurture coverage", value: "always-on" },
      { label: "Agent time saved", value: "hours / day" },
    ],
    quote: {
      text: "Replies in under 12 seconds, day or night. Our closers finally only talk to people who want to tour.",
      name: "Ops lead",
      role: "Orbit Realty Group",
    },
    process: [
      { title: "Define ICP and disqualifiers", detail: "What makes a lead worth an agent's time." },
      { title: "Connect CRM and listings", detail: "Live inventory and clean ownership rules." },
      { title: "Launch speed layer", detail: "Instant reply + nurture sequences." },
      { title: "Coach the funnel", detail: "Weekly review of conversions by source." },
    ],
    relatedServices: ["ai-sdrs", "ai-chatbots", "crm-automation", "voice-ai-agents"],
    compliance: ["Opt-in messaging", "Do-not-call respect", "CRM audit trail"],
  },
  {
    slug: "law-firms",
    title: "Law Firms",
    short: "Client intake and scheduling that protect billable time - without dropping new matters.",
    hero: "Capture every matter cleanly, then get lawyers back to the work that bills.",
    overview:
      "Law firms lose work when intake is slow, incomplete, or stuck in email. We build intake assistants, document helpers, and scheduling flows that gather the right facts, flag conflicts early, and book consults - with confidentiality and privilege treated as first-class requirements.",
    icon: "law",
    accent: "#171717",
    capabilities: [
      "Client Intake",
      "Document Automation",
      "Scheduling",
    ],
    pains: [
      { title: "Intake is inconsistent", detail: "Associates reinvent the questionnaire every time." },
      { title: "Partners hate admin", detail: "Scheduling and follow-ups steal billable hours." },
      { title: "Documents start from zero", detail: "Engagement letters and checklists get rebuilt manually." },
    ],
    solutions: [
      { title: "Structured matter intake", detail: "Guided forms and chat that collect jurisdiction, parties, and urgency." },
      { title: "Consult booking", detail: "Calendar rules by practice area with conflict-aware notes." },
      { title: "Draft acceleration", detail: "Document templates filled from intake - attorney reviews before send." },
    ],
    satisfaction: [
      { label: "Intake completeness", value: "higher" },
      { label: "Time to consult", value: "faster" },
      { label: "Admin hours cut", value: "significant" },
      { label: "Attorney control", value: "always" },
    ],
    quote: {
      text: "Intake stopped being a bottleneck. Attorneys see complete matters, not half-written emails.",
      name: "Managing partner",
      role: "Mid-market litigation firm",
    },
    process: [
      { title: "Practice-area playbooks", detail: "What each team needs before a consult." },
      { title: "Confidentiality model", detail: "Access boundaries and retention rules." },
      { title: "Pilot one practice", detail: "Prove cycle time and quality." },
      { title: "Expand with templates", detail: "More matter types and document packs." },
    ],
    relatedServices: ["ai-agents", "ai-chatbots", "workflow-automation", "custom-saas"],
    compliance: ["Confidentiality controls", "Access logging", "Human review gates"],
  },
  {
    slug: "financial-services",
    title: "Financial Services",
    short: "Support, qualification, and document flows that stay accurate under scrutiny.",
    hero: "Client experience that moves fast - without cutting corners on controls.",
    overview:
      "Banks, brokers, and fintechs need speed and trust. We build AI support, lead qualification, and document processing with clear audit trails, escalation paths, and language that stays compliant. No freestyle promises - grounded answers and human oversight where risk is real.",
    icon: "finance",
    accent: "#262626",
    capabilities: [
      "AI Support",
      "Lead Qualification",
      "Document Processing",
    ],
    pains: [
      { title: "Support queues balloon", detail: "Same product questions clog expensive human teams." },
      { title: "KYC / docs are slow", detail: "Manual extraction delays onboarding." },
      { title: "Sales and risk misalign", detail: "Leads arrive unqualified or overpromised." },
    ],
    solutions: [
      { title: "Grounded support agents", detail: "Answers from approved product and policy sources only." },
      { title: "Doc intelligence", detail: "Extract, validate, and route with human exception queues." },
      { title: "Qualified pipeline", detail: "Score intent and eligibility before an advisor spends time." },
    ],
    satisfaction: [
      { label: "First-response speed", value: "seconds" },
      { label: "Doc cycle time", value: "down" },
      { label: "Advisor focus", value: "higher" },
      { label: "Audit readiness", value: "built-in" },
    ],
    quote: {
      text: "Support deflection went up without increasing complaints. Advisors finally see cleaner opportunities.",
      name: "Head of digital",
      role: "Regional wealth firm",
    },
    process: [
      { title: "Risk workshop", detail: "What AI may say, do, and never touch." },
      { title: "Source of truth", detail: "Approved content and document schemas." },
      { title: "Controlled pilot", detail: "Measure accuracy, escalations, and CSAT." },
      { title: "Scale with monitoring", detail: "Drift alerts and periodic policy refresh." },
    ],
    relatedServices: ["ai-chatbots", "ai-agents", "dashboard-development", "api-development"],
    compliance: ["Audit logs", "Policy-grounded answers", "Approval gates", "Data residency options"],
  },
  {
    slug: "marketing-agencies",
    title: "Marketing Agencies",
    short: "Pipeline and proposals that keep new business moving while creatives create.",
    hero: "More qualified meetings. Fewer proposal all-nighters.",
    overview:
      "Agencies grow when new business is systematic. We build AI SDR layers, lead gen workflows, and proposal automation so your team spends time on strategy and creative - not chasing cold leads or rebuilding decks from scratch every week.",
    icon: "marketing",
    accent: "#0A0A0A",
    capabilities: [
      "AI SDRs",
      "Lead Generation",
      "Proposal Automation",
    ],
    pains: [
      { title: "Feast or famine pipeline", detail: "Bizdev depends on a few rainmakers." },
      { title: "Proposals take forever", detail: "Same sections rewritten under deadline pressure." },
      { title: "Leads from ads die", detail: "No fast follow-up or qualification." },
    ],
    solutions: [
      { title: "Always-on outbound", detail: "Personalized sequences that book discovery calls." },
      { title: "Inbound speed layer", detail: "Instant reply and scoring from forms and LinkedIn." },
      { title: "Proposal drafts", detail: "Scope, timeline, and pricing packs from your templates." },
    ],
    satisfaction: [
      { label: "Qualified meetings", value: "+40% range" },
      { label: "Proposal turnaround", value: "hours not days" },
      { label: "Founder time freed", value: "material" },
      { label: "Pipeline visibility", value: "clear" },
    ],
    quote: {
      text: "We stopped losing inbound because nobody replied until Thursday. New business finally feels like a system.",
      name: "Managing director",
      role: "Full-service agency",
    },
    process: [
      { title: "Offer and ICP clarity", detail: "Who you win and why." },
      { title: "Build the machine", detail: "SDR + CRM + proposal kit." },
      { title: "Run with review", detail: "Weekly pipeline and reply coaching." },
      { title: "Productize wins", detail: "Turn repeatable scopes into faster proposals." },
    ],
    relatedServices: ["ai-sdrs", "email-automation", "crm-automation", "custom-saas"],
    compliance: ["CAN-SPAM / GDPR-aware sends", "Opt-out handling", "Brand voice controls"],
  },
  {
    slug: "education",
    title: "Education",
    short: "Admissions, tutoring support, and LMS workflows that scale without losing the human touch.",
    hero: "Students get answers. Staff get their evenings back.",
    overview:
      "Schools and edtech teams drown in the same questions every enrollment cycle. We build admission assistants, AI tutor support layers, and LMS automation that guide learners, reduce admin load, and escalate to humans when judgment matters.",
    icon: "education",
    accent: "#525252",
    capabilities: [
      "AI Tutors",
      "Admission Assistants",
      "LMS Automation",
    ],
    pains: [
      { title: "Admissions inbox overflow", detail: "Deadlines bring thousands of repeat questions." },
      { title: "Learners get stuck", detail: "Support cannot scale 1:1 tutoring for every course." },
      { title: "LMS busywork", detail: "Enrollment, reminders, and status updates are manual." },
    ],
    solutions: [
      { title: "Admission chat and voice", detail: "Program info, deadlines, and application status - grounded in your catalog." },
      { title: "Tutor copilots", detail: "Hint-based help from course materials, with faculty oversight." },
      { title: "LMS workflows", detail: "Automate reminders, cohort moves, and staff alerts." },
    ],
    satisfaction: [
      { label: "Applicant response time", value: "instant" },
      { label: "Staff ticket load", value: "down" },
      { label: "Learner continuity", value: "up" },
      { label: "Faculty control", value: "retained" },
    ],
    quote: {
      text: "Admissions stopped panicking every cycle. Students got faster answers and counselors handled the edge cases.",
      name: "Director of enrollment",
      role: "Private university program",
    },
    process: [
      { title: "Content & policy map", detail: "What can be automated vs. counselor-only." },
      { title: "Pilot a program", detail: "One school or course cohort first." },
      { title: "Measure learning support", detail: "Deflection, completion, and escalation quality." },
      { title: "Expand carefully", detail: "More programs with shared patterns." },
    ],
    relatedServices: ["ai-chatbots", "ai-agents", "workflow-automation", "dashboard-development"],
    compliance: ["Student data protections", "Content grounding", "Human escalation"],
  },
  {
    slug: "recruitment",
    title: "Recruitment",
    short: "Screen faster, schedule cleaner, and keep candidates warm without drowning recruiters.",
    hero: "High-volume hiring without low-quality shortlists.",
    overview:
      "Recruiters spend days on resumes and calendar ping-pong. We build screening agents and scheduling automation that score fit against your role criteria, book interviews, and sync decisions back to Greenhouse, Lever, or your ATS - so humans focus on judgment and relationships.",
    icon: "recruitment",
    accent: "#404040",
    capabilities: [
      "Resume Screening",
      "Interview Scheduling",
    ],
    pains: [
      { title: "Resume mountains", detail: "Good candidates get buried in volume." },
      { title: "Scheduling hell", detail: "Time zones and panel availability burn days." },
      { title: "Candidate ghosting", detail: "Slow follow-up kills offers." },
    ],
    solutions: [
      { title: "Criteria-based screening", detail: "Score and rank with transparent reasons recruiters can override." },
      { title: "Auto-scheduling", detail: "Panels, rooms, and candidate links without the email chain." },
      { title: "ATS sync", detail: "Stages, notes, and decisions stay in one system." },
    ],
    satisfaction: [
      { label: "Screening speed", value: "up to 6x" },
      { label: "Time-to-interview", value: "shorter" },
      { label: "Recruiter focus", value: "higher" },
      { label: "Candidate experience", value: "faster replies" },
    ],
    quote: {
      text: "We screen at volume without feeling reckless. Recruiters trust the shortlist because they can see why.",
      name: "Talent ops",
      role: "Quorum Talent",
    },
    process: [
      { title: "Role scorecards", detail: "Must-haves, nice-to-haves, and knockouts." },
      { title: "Connect the ATS", detail: "Stages, permissions, and audit." },
      { title: "Pilot high-volume roles", detail: "Measure precision and recruiter overrides." },
      { title: "Roll out", detail: "More teams with shared playbooks." },
    ],
    relatedServices: ["ai-agents", "workflow-automation", "crm-automation", "custom-saas"],
    compliance: ["Bias review process", "Audit of scores", "Human final decisions"],
  },
  {
    slug: "construction",
    title: "Construction",
    short: "Quotes and project updates that keep jobs moving when the field is busy.",
    hero: "Less chasing paper. More jobs won and delivered.",
    overview:
      "Construction firms lose margin in slow quotes, scattered updates, and manual coordination. We automate estimate packaging, follow-ups, and project status workflows so estimators and PMs spend time on the site and the numbers - not retyping the same spreadsheet.",
    icon: "construction",
    accent: "#737373",
    capabilities: [
      "Project Automation",
      "Quote Generation",
    ],
    pains: [
      { title: "Quotes take too long", detail: "Competitors win while your estimate is still in draft." },
      { title: "Field / office gap", detail: "Status lives in texts and memory." },
      { title: "Change orders get messy", detail: "Approvals and documentation lag the work." },
    ],
    solutions: [
      { title: "Quote accelerators", detail: "Pull assemblies and past jobs into polished proposals faster." },
      { title: "Project pulse", detail: "Automated status, reminders, and owner updates." },
      { title: "Follow-up that closes", detail: "Bid follow-ups and scheduling without relying on one estimator." },
    ],
    satisfaction: [
      { label: "Quote turnaround", value: "faster" },
      { label: "Bid follow-up", value: "consistent" },
      { label: "PM admin load", value: "down" },
      { label: "Win visibility", value: "clearer" },
    ],
    quote: {
      text: "Estimators stopped living in Word docs. We answer bids faster and look more professional doing it.",
      name: "Owner",
      role: "Regional GC / specialty contractor",
    },
    process: [
      { title: "Map estimating flow", detail: "Where time dies between site visit and send." },
      { title: "Template the winners", detail: "Standard sections and pricing patterns." },
      { title: "Automate follow-up", detail: "CRM or spreadsheet triggers that actually fire." },
      { title: "Extend to projects", detail: "Status and change-order workflows." },
    ],
    relatedServices: ["ai-agents", "custom-saas", "workflow-automation", "dashboard-development"],
    compliance: ["Document versioning", "Approval trails", "Role-based access"],
  },
  {
    slug: "logistics",
    title: "Logistics",
    short: "Tracking, dispatch, and support that keep shippers informed without drowning your team.",
    hero: "Customers stop calling. Dispatch stays ahead of exceptions.",
    overview:
      "Logistics margins disappear into 'where's my shipment?' and manual dispatch chaos. We build tracking updates, dispatch automation, and AI support that handle routine status, escalate exceptions, and keep your TMS or sheets in sync.",
    icon: "logistics",
    accent: "#171717",
    capabilities: [
      "Shipment Tracking",
      "Dispatch Automation",
      "Customer Support",
    ],
    pains: [
      { title: "Status call volume", detail: "Support repeats the same tracking answers all day." },
      { title: "Exception blindness", detail: "Delays are noticed late, when the customer is already angry." },
      { title: "Dispatch spreadsheet hell", detail: "Assignments and ETAs live in fragile files." },
    ],
    solutions: [
      { title: "Proactive tracking", detail: "WhatsApp / SMS / email updates from live shipment data." },
      { title: "Exception playbooks", detail: "Auto-alert ops when SLAs slip, with suggested next steps." },
      { title: "Support deflection", detail: "AI answers routine questions; humans take damaged / claims cases." },
    ],
    satisfaction: [
      { label: "WISMO ticket volume", value: "down" },
      { label: "Update speed", value: "proactive" },
      { label: "Dispatch clarity", value: "higher" },
      { label: "CSAT on tracking", value: "up" },
    ],
    quote: {
      text: "Customers got answers before they called. Our team finally worked exceptions instead of copy-pasting tracking numbers.",
      name: "Customer ops lead",
      role: "Regional 3PL",
    },
    process: [
      { title: "Connect shipment data", detail: "TMS, carriers, or sheets as source of truth." },
      { title: "Define exception rules", detail: "What auto-notifies vs. what needs a human." },
      { title: "Launch customer channel", detail: "Tracking bot + proactive messages." },
      { title: "Tighten dispatch", detail: "Automate assignments and ETA updates." },
    ],
    relatedServices: ["whatsapp-automation", "ai-chatbots", "workflow-automation", "dashboard-development"],
    compliance: ["Customer data handling", "Message opt-in", "Ops audit logs"],
  },
];

export function getIndustryBySlug(slug: string) {
  return INDUSTRIES.find((i) => i.slug === slug);
}
