export type ServiceDetail = {
  slug: string;
  title: string;
  short: string;
  hero: string;
  overview: string;
  icon:
    | "bot"
    | "phone"
    | "chat"
    | "users"
    | "code"
    | "building"
    | "workflow"
    | "mail"
    | "chart"
    | "database"
    | "cpu"
    | "cloud"
    | "sparkles";
  outcomes: string[];
  deliverables: string[];
  process: { title: string; detail: string }[];
  useCases: string[];
  stack: string[];
  timeline: string;
  faqs: { q: string; a: string }[];
};

export const SERVICES: ServiceDetail[] = [
  {
    slug: "ai-agents",
    title: "AI Agents",
    short: "Software that handles the repetitive work across your tools - overnight, not on Monday.",
    hero: "Agents that do the work, not just draft the email.",
    overview:
      "We design AI agents that live inside your existing stack - CRM, inbox, docs, ticketing - and actually finish tasks. They read context, take actions with guardrails, and escalate when a human should decide. No demo theater. Production workflows with logging, retries, and ownership.",
    icon: "bot",
    outcomes: [
      "Hours of manual ops work moved off your team's plate every week",
      "Fewer dropped handoffs between tools and people",
      "Clear audit trail of what the agent did and why",
    ],
    deliverables: [
      "Agent scope, permissions, and escalation map",
      "Connected tools (CRM, Slack, email, sheets, APIs)",
      "Production agent with monitoring and failure alerts",
      "Playbook for your team to review and override outputs",
    ],
    process: [
      { title: "Map the work", detail: "We shadow the repetitive jobs that burn hours - then pick the ones with clear rules and ROI." },
      { title: "Build with guardrails", detail: "Actions are scoped. Sensitive steps need approval. Everything is logged." },
      { title: "Pilot on real volume", detail: "We run against live data with your team in the loop, then expand." },
      { title: "Handoff and iterate", detail: "Dashboards, runbooks, and a path to add the next workflow." },
    ],
    useCases: [
      "Lead enrichment and CRM cleanup",
      "Invoice / document triage",
      "Support ticket drafting and routing",
      "Internal research and reporting agents",
    ],
    stack: ["OpenAI / Anthropic", "LangGraph / custom orchestration", "n8n", "Your CRM & APIs", "Vector search"],
    timeline: "First production agent in 3-6 weeks",
    faqs: [
      { q: "Will it replace my team?", a: "No. It takes the repetitive layer so people can focus on judgment calls and customers." },
      { q: "What if it makes a mistake?", a: "We define approval gates for high-risk actions and give you overrides plus full logs." },
    ],
  },
  {
    slug: "voice-ai-agents",
    title: "Voice AI Agents",
    short: "Phone agents that sound like your best rep - bookings, follow-ups, the whole call.",
    hero: "Phone lines that answer, qualify, and book - without holding anyone hostage.",
    overview:
      "Our voice agents handle inbound and outbound calls with natural pacing, interruption handling, and your brand's tone. They book appointments, answer FAQs, capture intake, and warm-transfer when needed. Built for real phone networks, not just web demos.",
    icon: "phone",
    outcomes: [
      "Missed calls become booked appointments",
      "Consistent intake quality after hours",
      "Lower cost per conversation vs. a full phone bank",
    ],
    deliverables: [
      "Call flow, scripts, and escalation rules",
      "Telephony setup (numbers, SIP, recording policies)",
      "Calendar / CRM booking integration",
      "Live dashboard for call outcomes and transcripts",
    ],
    process: [
      { title: "Design the conversation", detail: "We map happy paths, edge cases, and when a human must take over." },
      { title: "Train on your voice", detail: "Tone, vocabulary, compliance language, and product facts." },
      { title: "Connect telephony", detail: "Numbers, routing, recording, and CRM write-back." },
      { title: "Tune with real calls", detail: "Weekly review of transcripts until conversion and quality hit target." },
    ],
    useCases: [
      "Healthcare patient intake and booking",
      "Real estate lead follow-up",
      "Appointment reminders and reschedules",
      "After-hours sales qualification",
    ],
    stack: ["Twilio / SIP", "Realtime voice models", "Calendar APIs", "CRM webhooks", "Call analytics"],
    timeline: "Pilot live in 4-8 weeks",
    faqs: [
      { q: "Does it sound robotic?", a: "Modern voice stacks sound natural. We tune pacing, fillers, and interruption so it feels like a trained rep." },
      { q: "Can it transfer to a human?", a: "Yes - warm transfer with context so the caller does not start over." },
    ],
  },
  {
    slug: "ai-chatbots",
    title: "AI Chatbots",
    short: "Chat that knows your product, your docs, and when to hand off to a human.",
    hero: "Support and sales chat grounded in your real knowledge base.",
    overview:
      "We build chatbots that answer from your docs, policies, and product data - not generic fluff. They stay on-brand, cite sources when useful, and escalate to humans with full context. Web, WhatsApp, Slack, or in-app.",
    icon: "chat",
    outcomes: [
      "Faster first response without hiring overnight support",
      "Fewer repeated questions hitting your team",
      "Cleaner handoffs with conversation history",
    ],
    deliverables: [
      "Knowledge base ingestion and refresh pipeline",
      "Chat UI or channel connectors",
      "Human handoff rules and CRM / helpdesk sync",
      "Analytics for deflection, CSAT proxies, and gaps",
    ],
    process: [
      { title: "Source the truth", detail: "Docs, FAQs, tickets, and product catalog become the retrieval set." },
      { title: "Design guardrails", detail: "What it can promise, what it must refuse, and when to escalate." },
      { title: "Ship the channel", detail: "Website widget, WhatsApp, Slack, or embedded app chat." },
      { title: "Close the loop", detail: "Unanswered questions feed content updates." },
    ],
    useCases: [
      "Product support and onboarding",
      "Internal employee helpdesk",
      "Sales FAQ and lead capture",
      "Policy / compliance Q&A",
    ],
    stack: ["RAG pipelines", "OpenAI / Anthropic", "Intercom / Zendesk / custom", "WhatsApp Cloud API"],
    timeline: "Useful chatbot in 2-5 weeks",
    faqs: [
      { q: "Will it hallucinate?", a: "We ground answers in your sources and refuse when confidence is low, then escalate." },
      { q: "How do we keep it current?", a: "We set up refresh jobs and a simple path for your team to update source docs." },
    ],
  },
  {
    slug: "ai-sdrs",
    title: "AI SDRs",
    short: "Outbound that qualifies leads and books meetings while your team sleeps.",
    hero: "Pipeline that runs while your best reps focus on closing.",
    overview:
      "AI SDRs research accounts, personalize outreach, follow up, and book qualified meetings into your calendar. They work email (and optionally LinkedIn or voice) with your ICP, sequences, and CRM hygiene - supervised by your sales team.",
    icon: "users",
    outcomes: [
      "More qualified meetings without adding headcount",
      "Consistent follow-up that humans drop when busy",
      "Clear scoring so reps only talk to real opportunities",
    ],
    deliverables: [
      "ICP and messaging frameworks",
      "Outbound sequences with personalization logic",
      "CRM sync and meeting booking",
      "Rep dashboard for replies and handoffs",
    ],
    process: [
      { title: "Define who is worth chasing", detail: "ICP, disqualifiers, and what 'qualified' means for your AEs." },
      { title: "Build the machine", detail: "Enrichment, copy variants, sending infrastructure, and compliance." },
      { title: "Run and review", detail: "Daily reply handling with human overrides on hot threads." },
      { title: "Scale what works", detail: "Double down on channels and angles that book meetings." },
    ],
    useCases: [
      "B2B SaaS outbound",
      "Agency new-business pipelines",
      "Event / webinar follow-up",
      "Reactivation of cold CRM lists",
    ],
    stack: ["HubSpot / Salesforce", "Email infra", "Enrichment APIs", "Calendar booking", "Optional voice"],
    timeline: "First meetings in 3-6 weeks",
    faqs: [
      { q: "Is this spam?", a: "No. Volume is controlled, copy is personalized, and we respect opt-outs and sending limits." },
      { q: "Do reps lose control?", a: "They stay in the loop on promising threads and own the live conversation." },
    ],
  },
  {
    slug: "custom-saas",
    title: "Custom SaaS",
    short: "A product built around how you actually work - not a forced fit.",
    hero: "Your workflow as a product - owned by you, not rented forever.",
    overview:
      "When off-the-shelf tools force awkward processes, we build a focused SaaS product around your users. Multi-tenant or single-tenant, billing if needed, clean UX, and a roadmap you control. Senior product + engineering from discovery through launch.",
    icon: "code",
    outcomes: [
      "Software that matches how your team actually operates",
      "No per-seat tax for features you do not need",
      "A foundation you can extend instead of replace",
    ],
    deliverables: [
      "Product discovery and UX flows",
      "Web app (auth, roles, core modules)",
      "Admin tools and basic analytics",
      "Deployed environment with CI/CD",
    ],
    process: [
      { title: "Discover", detail: "Users, jobs-to-be-done, and the thinnest product that still wins." },
      { title: "Design", detail: "Flows and UI that feel intentional - not a dashboard of everything." },
      { title: "Build", detail: "Iterative releases with your team testing real scenarios." },
      { title: "Launch", detail: "Hardening, onboarding, and a plan for the next modules." },
    ],
    useCases: [
      "Internal ops platforms turned into customer products",
      "Industry-specific portals",
      "Marketplace or multi-role apps",
      "Replacing brittle spreadsheet systems",
    ],
    stack: ["React", "Node / Python", "Postgres", "Auth (SSO)", "Stripe optional"],
    timeline: "MVP in 6-12 weeks depending on scope",
    faqs: [
      { q: "Can we own the IP?", a: "Yes. Work-for-hire and repo ownership are standard unless we agree otherwise." },
      { q: "What about maintenance?", a: "We offer retainers, or we hand off with docs and training." },
    ],
  },
  {
    slug: "enterprise-software",
    title: "Enterprise Software",
    short: "Internal platforms with login, permissions, and an audit trail your security team can live with.",
    hero: "Internal systems built for security reviews - not just happy-path demos.",
    overview:
      "We build enterprise-grade internal platforms: SSO, RBAC, audit logs, environments, and integrations with the systems your company already trusts. Designed to survive procurement, security questionnaires, and real usage at scale.",
    icon: "building",
    outcomes: [
      "One system of record instead of scattered tools",
      "Permissions and logs that pass security review",
      "Integrations that reduce swivel-chair work",
    ],
    deliverables: [
      "Architecture and threat / access model",
      "SSO (SAML / OIDC) and role-based access",
      "Core modules with audit logging",
      "Staging + production with change control",
    ],
    process: [
      { title: "Align with stakeholders", detail: "Security, IT, and business owners agree on scope and controls." },
      { title: "Architect for audit", detail: "Identity, data boundaries, and logging from day one." },
      { title: "Integrate carefully", detail: "ERP, CRM, HRIS - with clear ownership of each interface." },
      { title: "Hardening and rollout", detail: "UAT, training, phased go-live." },
    ],
    useCases: [
      "Internal portals and approval workflows",
      "Ops command centers",
      "Partner / vendor portals",
      "Compliance-heavy data entry systems",
    ],
    stack: ["SSO / IdP", "Postgres", "React", "API gateways", "Observability"],
    timeline: "Phased delivery over 8-16+ weeks",
    faqs: [
      { q: "Can you fill security questionnaires?", a: "Yes. We document architecture, data flows, and controls for your review." },
      { q: "On-prem or cloud?", a: "Either. We adapt to your cloud policy and residency needs." },
    ],
  },
  {
    slug: "crm-automation",
    title: "CRM Automation",
    short: "HubSpot, Salesforce, or your own CRM - wired so nothing falls through.",
    hero: "A CRM that updates itself - so your pipeline stays honest.",
    overview:
      "We clean, connect, and automate your CRM so leads move, owners get notified, and reporting stops lying. HubSpot, Salesforce, Pipedrive, or custom - with workflows, enrichment, and bidirectional sync to the tools your team already uses.",
    icon: "workflow",
    outcomes: [
      "Fewer leads stuck with no owner",
      "Reporting leadership can trust",
      "Reps spend time selling, not updating fields",
    ],
    deliverables: [
      "Pipeline and lifecycle redesign",
      "Automation workflows and alerts",
      "Enrichment and dedupe rules",
      "Dashboards for funnel health",
    ],
    process: [
      { title: "Audit the mess", detail: "Fields, stages, ownership rules, and where deals die." },
      { title: "Simplify the model", detail: "Only the fields and stages people will actually use." },
      { title: "Automate the glue", detail: "Routing, sequences, Slack alerts, and sync jobs." },
      { title: "Train and lock in", detail: "Playbooks so the CRM does not rot again." },
    ],
    useCases: [
      "Lead routing and SLA alerts",
      "Deal stage automation",
      "Marketing to sales handoff",
      "Customer success playbooks in CRM",
    ],
    stack: ["HubSpot", "Salesforce", "Zapier / n8n", "Enrichment APIs", "Slack"],
    timeline: "Meaningful automation in 2-6 weeks",
    faqs: [
      { q: "Do we need to migrate CRMs?", a: "Usually no. We fix what you have first. Migration only if it is clearly broken." },
      { q: "Will sales adopt it?", a: "We design around how they already work and cut fields they ignore." },
    ],
  },
  {
    slug: "whatsapp-automation",
    title: "WhatsApp Automation",
    short: "Sales, support, and updates on WhatsApp - without drowning your inbox.",
    hero: "Meet customers where they already reply - WhatsApp.",
    overview:
      "WhatsApp Business API flows for sales, support, reminders, and transactional updates. Template messages, smart routing, AI replies where it helps, and human takeover when it matters - all synced to your CRM.",
    icon: "chat",
    outcomes: [
      "Higher reply rates than email for many markets",
      "Structured conversations instead of a shared phone chaos",
      "CRM history for every WhatsApp thread",
    ],
    deliverables: [
      "WhatsApp Business / Cloud API setup",
      "Approved message templates",
      "Chat flows + AI assist + human inbox",
      "CRM / helpdesk sync",
    ],
    process: [
      { title: "Get compliant", detail: "Business verification, templates, and opt-in strategy." },
      { title: "Design flows", detail: "Sales, support, and notification journeys with clear exits to humans." },
      { title: "Connect systems", detail: "CRM, calendars, order systems." },
      { title: "Operate", detail: "Agent inbox, SLAs, and analytics." },
    ],
    useCases: [
      "Appointment reminders",
      "Lead qualification chats",
      "Order and delivery updates",
      "Customer support in local markets",
    ],
    stack: ["WhatsApp Cloud API", "Twilio optional", "CRM", "AI reply layer", "Inbox UI"],
    timeline: "Live flows in 3-6 weeks (after Meta approvals)",
    faqs: [
      { q: "How long do Meta approvals take?", a: "Often days to a couple of weeks. We start design in parallel so you are not idle." },
      { q: "Can multiple agents reply?", a: "Yes - shared inbox with assignment and history." },
    ],
  },
  {
    slug: "email-automation",
    title: "Email Automation",
    short: "Outbound and lifecycle email that reads personal, not mass-blast.",
    hero: "Email that feels written for one person - at scale.",
    overview:
      "Lifecycle and outbound email systems with solid deliverability, personalization that is not creepy, and journeys that react to real behavior. Welcome series, nurture, win-back, and transactional - wired to your product and CRM.",
    icon: "mail",
    outcomes: [
      "Higher open and reply rates from better relevance",
      "Journeys that run without a marketer babysitting every send",
      "Deliverability you can defend",
    ],
    deliverables: [
      "Domain / DNS / deliverability baseline",
      "Journey maps and copy frameworks",
      "Automation in your ESP or custom sender",
      "Performance dashboards",
    ],
    process: [
      { title: "Fix the foundation", detail: "SPF, DKIM, DMARC, list hygiene, sending reputation." },
      { title: "Map journeys", detail: "Triggers, branches, and exit criteria." },
      { title: "Write and test", detail: "Variants that sound human, with clear CTAs." },
      { title: "Optimize", detail: "Weekly reads on what converts, then prune what does not." },
    ],
    useCases: [
      "SaaS onboarding sequences",
      "Sales outbound with personalization",
      "Re-engagement campaigns",
      "Transactional + product emails",
    ],
    stack: ["Customer.io / Braze / HubSpot / Resend", "CRM events", "Product analytics"],
    timeline: "First journeys live in 2-5 weeks",
    faqs: [
      { q: "Can you work with our existing ESP?", a: "Yes. We prefer to deepen what you already pay for before adding tools." },
      { q: "Do you write the copy?", a: "Yes - or we partner with your brand team and implement." },
    ],
  },
  {
    slug: "workflow-automation",
    title: "Workflow Automation",
    short: "n8n, Make, Zapier - whatever stack you have, connected properly.",
    hero: "Glue that does not break every time someone changes a field.",
    overview:
      "We design durable automations across your tools: reliable triggers, error handling, retries, and observability. Whether you standardize on n8n, Make, Zapier, or custom workers, we build flows that ops can trust.",
    icon: "workflow",
    outcomes: [
      "Manual multi-step jobs become one trigger",
      "Failures alert someone instead of failing silently",
      "Less shadow-IT spaghetti",
    ],
    deliverables: [
      "Automation inventory and priority map",
      "Production workflows with error paths",
      "Secrets and environment separation",
      "Runbooks for common failures",
    ],
    process: [
      { title: "Inventory", detail: "List the painful handoffs and estimate time saved." },
      { title: "Standardize", detail: "Naming, folders, credentials, and environments." },
      { title: "Build resilient flows", detail: "Idempotency, retries, dead-letter handling." },
      { title: "Hand over", detail: "Train your ops owner so they are not dependent on us forever." },
    ],
    useCases: [
      "Lead sync across ads, forms, CRM",
      "Invoice and finance ops",
      "HR onboarding checklists",
      "Data sync between SaaS tools",
    ],
    stack: ["n8n", "Make", "Zapier", "Webhooks", "Queues / workers"],
    timeline: "High-ROI flows in 1-4 weeks",
    faqs: [
      { q: "Should we use Zapier or n8n?", a: "Depends on volume, security, and who maintains it. We recommend based on your constraints." },
      { q: "What about fragile zaps?", a: "We rebuild critical paths with better error handling and monitoring." },
    ],
  },
  {
    slug: "dashboard-development",
    title: "Dashboard Development",
    short: "Dashboards your team opens every morning - not ones that gather dust.",
    hero: "Numbers your team actually uses to make decisions.",
    overview:
      "We build operational and executive dashboards tied to trustworthy data sources - not vanity charts. Clear KPIs, fast loads, role-based views, and definitions everyone agrees on.",
    icon: "chart",
    outcomes: [
      "One source of truth for the metrics that matter",
      "Less time exporting CSVs every Monday",
      "Alerts when something drifts off target",
    ],
    deliverables: [
      "Metric dictionary and data model",
      "ETL / warehouse hooks as needed",
      "Interactive dashboards (web)",
      "Access control and sharing",
    ],
    process: [
      { title: "Decide what matters", detail: "Stakeholders pick a short list of decisions the dashboard must support." },
      { title: "Trace the data", detail: "Sources, freshness, and ownership of each metric." },
      { title: "Design for scanning", detail: "Hierarchy, filters, and mobile-friendly views." },
      { title: "Ship and iterate", detail: "Launch with the core, then add depth where people ask." },
    ],
    useCases: [
      "Sales and pipeline health",
      "Ops / SLA monitoring",
      "Product usage analytics",
      "Finance and cash snapshots",
    ],
    stack: ["Postgres / warehouse", "dbt optional", "React + charts", "Metabase / custom"],
    timeline: "Useful dashboard in 2-6 weeks",
    faqs: [
      { q: "Can you use our warehouse?", a: "Yes. We plug into BigQuery, Snowflake, Redshift, or Postgres." },
      { q: "Why not just Tableau?", a: "Sometimes Tableau is right. When you need a productized, branded ops view, custom often wins." },
    ],
  },
  {
    slug: "api-development",
    title: "API Development",
    short: "Clean APIs other systems can rely on - documented and versioned.",
    hero: "Interfaces your partners and products can depend on.",
    overview:
      "We design and build REST or GraphQL APIs with auth, rate limits, versioning, and docs your engineers will actually read. Internal microservices or public partner APIs - with contracts that do not break silently.",
    icon: "code",
    outcomes: [
      "Stable contracts between systems",
      "Faster partner and frontend integration",
      "Fewer 'who changed this endpoint?' incidents",
    ],
    deliverables: [
      "API design and OpenAPI / schema docs",
      "Auth (API keys, OAuth, mTLS as needed)",
      "Implementation with tests",
      "Versioning and deprecation policy",
    ],
    process: [
      { title: "Contract first", detail: "Agree on shapes and errors before writing handlers." },
      { title: "Build securely", detail: "Auth, validation, and abuse protections." },
      { title: "Document", detail: "Interactive docs and examples." },
      { title: "Operate", detail: "Monitoring, SLOs, and changelog." },
    ],
    useCases: [
      "Public partner APIs",
      "Mobile / web backends",
      "Integration layers for legacy systems",
      "Webhook platforms",
    ],
    stack: ["Node / Python / Go", "OpenAPI", "Postgres", "Redis", "API gateways"],
    timeline: "First version in 3-8 weeks",
    faqs: [
      { q: "REST or GraphQL?", a: "We choose based on clients and query patterns - not fashion." },
      { q: "Do you handle webhooks too?", a: "Yes - signed payloads, retries, and idempotency." },
    ],
  },
  {
    slug: "mern-stack",
    title: "MERN Stack",
    short: "Mongo, Express, React, Node - full apps from database to UI.",
    hero: "Full-stack apps shipped on a proven JavaScript stack.",
    overview:
      "End-to-end MERN applications: data models, APIs, React frontends, auth, and deployment. Ideal when you want one language across the stack and a team that can move fast without a polyglot tax.",
    icon: "database",
    outcomes: [
      "A working product from database to UI",
      "One stack your JS team can own",
      "Clear structure for the next engineers you hire",
    ],
    deliverables: [
      "Mongo schema and Express API",
      "React frontend with routing and state",
      "Auth and role basics",
      "Deployed app with CI",
    ],
    process: [
      { title: "Scope the vertical slice", detail: "One complete user journey first." },
      { title: "Model the data", detail: "Collections that match how you query for real." },
      { title: "Build API + UI together", detail: "Tight loops so contracts stay honest." },
      { title: "Harden and deploy", detail: "Env configs, backups, and monitoring." },
    ],
    useCases: [
      "MVPs and internal tools",
      "Customer portals",
      "Admin + client apps",
      "Content / ops platforms",
    ],
    stack: ["MongoDB", "Express", "React", "Node.js", "Vite / Next-style tooling as needed"],
    timeline: "MVP in 4-10 weeks",
    faqs: [
      { q: "Why Mongo?", a: "Great when documents fit the domain. If relational fits better, we will say so." },
      { q: "Can you add TypeScript?", a: "Yes - we usually do for maintainability." },
    ],
  },
  {
    slug: "mcp-servers",
    title: "MCP Servers",
    short: "Connect your models to your real data and tools, safely.",
    hero: "Give your AI access to tools - with permissions you control.",
    overview:
      "Model Context Protocol servers that expose your databases, CRMs, files, and internal APIs to AI clients safely. Scoped tools, auth, and audit so agents can act without becoming a free-for-all.",
    icon: "cpu",
    outcomes: [
      "AI assistants that can query and act on real systems",
      "Centralized tool access instead of one-off hacks",
      "Permissions and logs security can review",
    ],
    deliverables: [
      "MCP server design and tool catalog",
      "Auth and scoping model",
      "Implementation against your systems",
      "Client setup guides (Cursor, Claude, custom)",
    ],
    process: [
      { title: "Inventory tools", detail: "What the model should read vs. write." },
      { title: "Threat model", detail: "Secrets, PII, and blast radius." },
      { title: "Build the server", detail: "Stable tools with clear schemas." },
      { title: "Pilot with users", detail: "Tune prompts and permissions with real workflows." },
    ],
    useCases: [
      "Internal AI copilots with live data",
      "Dev tools that query staging safely",
      "Ops agents with ticket and CRM actions",
      "Knowledge + action bridges",
    ],
    stack: ["MCP", "TypeScript / Python", "OAuth / API keys", "Your internal APIs"],
    timeline: "Useful MCP surface in 2-5 weeks",
    faqs: [
      { q: "Is MCP production-ready for us?", a: "We design for your risk level - read-only first if needed, then write tools." },
      { q: "Which clients do you support?", a: "Cursor, Claude Desktop, and custom MCP clients." },
    ],
  },
  {
    slug: "cloud-integrations",
    title: "Cloud Integrations",
    short: "AWS, Azure, or GCP - set up so you can see what is going on.",
    hero: "Cloud that is observable, cost-aware, and not a black box.",
    overview:
      "We wire your apps into AWS, Azure, or GCP the right way: identity, networking, storage, compute, secrets, and monitoring. Integrations between cloud services and your SaaS tools - with cost and security in mind.",
    icon: "cloud",
    outcomes: [
      "Environments you can deploy to with confidence",
      "Logs and metrics when something breaks",
      "Fewer surprise cloud bills",
    ],
    deliverables: [
      "Cloud architecture diagram",
      "IaC or documented setup",
      "CI/CD into your environments",
      "Monitoring and alerting baselines",
    ],
    process: [
      { title: "Assess", detail: "Current cloud sprawl, risks, and cost hotspots." },
      { title: "Design", detail: "Accounts, networks, and service choices that fit the workload." },
      { title: "Implement", detail: "Provision, connect apps, migrate carefully." },
      { title: "Observe", detail: "Dashboards, budgets, and on-call ready alerts." },
    ],
    useCases: [
      "App hosting and data pipelines",
      "SSO and secrets management",
      "Event-driven integrations",
      "Multi-env (dev / staging / prod) setup",
    ],
    stack: ["AWS / Azure / GCP", "Terraform / CDK optional", "Containers", "Observability stacks"],
    timeline: "Solid baseline in 3-8 weeks",
    faqs: [
      { q: "Do you lock us into one cloud?", a: "We follow your preference. Multi-cloud only when there is a real reason." },
      { q: "Can you fix an existing mess?", a: "Yes - stabilize first, then refactor without a big-bang rewrite." },
    ],
  },
  {
    slug: "custom-ai-solutions",
    title: "Custom AI Solutions",
    short: "If it does not fit a template, we still build it around your workflow.",
    hero: "Bespoke AI for the problem nobody has a SaaS for yet.",
    overview:
      "Some problems are weird - and that is fine. We design custom AI systems around your data, constraints, and success metrics: classification, extraction, copilots, decision support, or hybrid human+AI workflows that do not fit a product category.",
    icon: "sparkles",
    outcomes: [
      "A solution shaped around your edge cases",
      "Clear evaluation so you know it works",
      "A path from prototype to production ownership",
    ],
    deliverables: [
      "Problem framing and success metrics",
      "Prototype with evaluation harness",
      "Production system with monitoring",
      "Training for the operators who own it",
    ],
    process: [
      { title: "Frame the bet", detail: "What decision or task improves, and how we measure it." },
      { title: "Prototype fast", detail: "Prove signal on real samples before building the cathedral." },
      { title: "Evaluate honestly", detail: "Holdout sets, error analysis, human review loops." },
      { title: "Productize", detail: "UI, APIs, permissions, and ops." },
    ],
    useCases: [
      "Document intelligence for niche formats",
      "Domain copilots for specialists",
      "Risk / triage scoring",
      "Hybrid automation with human checkpoints",
    ],
    stack: ["Best model for the job", "Custom pipelines", "Your data stores", "Eval tooling"],
    timeline: "Prototype in 2-4 weeks; production varies",
    faqs: [
      { q: "What if the idea does not work?", a: "We kill weak approaches early with evaluation - before you fund a long build." },
      { q: "Do we need tons of labeled data?", a: "Not always. We start with what you have and expand labels only where ROI is clear." },
    ],
  },
];

export function getServiceBySlug(slug: string) {
  return SERVICES.find((s) => s.slug === slug);
}

export function getServiceSlugs() {
  return SERVICES.map((s) => s.slug);
}
