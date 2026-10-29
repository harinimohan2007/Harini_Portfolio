import { Project, AchievementItem, SkillCategory, LeadershipRole, EducationItem } from '../types';

export const PERSONAL_INFO = {
  name: "Harini M.",
  tagline: "Creative Developer in the Making",
  roleHeadline: "Computer Science Undergraduate | AI-Assisted Product Builder",
  bioIntro: "I turn ideas into interactive digital experiences, combining AI-assisted development, product thinking, and creative problem-solving.",
  status: "Computer Science Undergraduate • 2027",
  location: "Coimbatore, India",
  email: "harinimohan385@gmail.com",
  linkedin: "https://www.linkedin.com/in/harini-mohan2007",
  github: "https://github.com/hxrixi",
  academicAverage: "92%",
  scholarship: "Merit Scholarship Recipient",
  college: "Sankara College of Science and Commerce, Coimbatore",
  degree: "B.Sc. Computer Science",
  period: "2024–2027",
};

export const ABOUT_STORY = {
  headline: "Building at the intersection of technology and imagination.",
  paragraphs: [
    "I'm Harini, a Computer Science undergraduate interested in building digital products that solve real problems.",
    "My approach combines AI-assisted development, rapid prototyping, creative problem-solving, and collaboration. I enjoy turning ideas into working prototypes and exploring how technology can make everyday experiences better.",
    "Beyond development, I enjoy leadership, coordinating teams, and helping ideas move from discussion to execution."
  ],
  pillars: [
    {
      title: "Product Thinking",
      shortDesc: "Translating abstract problem statements into focused, user-centered digital solutions that prioritize clarity and genuine utility.",
      details: "Focusing on identifying core user friction, prioritizing feature roadmaps, and architecting cohesive end-to-end product flows."
    },
    {
      title: "AI-Assisted Development",
      shortDesc: "Amplifying software velocity and rapid prototyping through generative development workflows, modern tools, and rapid experimentation.",
      details: "Leveraging environments like Google AI Studio and iterative AI scaffolding to explore architectures and test product prototypes fast."
    },
    {
      title: "Leadership & Collaboration",
      shortDesc: "Guiding departmental student initiatives, steering technical symposia, and empowering peer communities from ideas to execution.",
      details: "Serving as Technegen Chairman and mentoring 120+ peers through hackathon facilitation, fostering a collaborative builder culture."
    }
  ]
};

export const ACHIEVEMENTS: AchievementItem[] = [
  {
    id: "academic-excellence",
    title: "Academic Distinction & Merit Scholarship",
    category: "Academic Excellence",
    detail: "Maintained a consistent 92% academic average across coursework at Sankara College, awarded the institutional Merit Scholarship for scholastic distinction.",
    metric: "92%",
    metricLabel: "Academic Average",
    dateOrPeriod: "2024 – Present",
    iconType: "scholarship"
  },
  {
    id: "technegen-chairman",
    title: "Chairman, Technegen CS Department",
    category: "Student Leadership",
    detail: "Elected as Chairman to lead the Computer Science Department association, presiding over technical programs, workshops, and inter-collegiate events.",
    metric: "2026–2027",
    metricLabel: "Executive Term",
    dateOrPeriod: "2026 – 2027",
    iconType: "leadership"
  },
  {
    id: "assistive-nav-hackathon",
    title: "Third Prize in Hackathon",
    category: "Hackathon Award",
    detail: "Developed a functional mobile application concept designed to empower visually impaired individuals with camera-based obstacle detection and real-time audio cues.",
    metric: "3rd Place",
    metricLabel: "Hackathon Finalist",
    dateOrPeriod: "Hackathon",
    iconType: "award"
  },
  {
    id: "traffic-ideathon",
    title: "Second Prize in Ideathon",
    category: "Innovation Award",
    detail: "Conceived an AI-based traffic congestion solution prototype that explores smarter approaches to urban traffic management and dynamic flow optimization.",
    metric: "2nd Place",
    metricLabel: "Ideathon Prototype",
    dateOrPeriod: "Ideathon",
    iconType: "award"
  },
  {
    id: "technegen-vice-chairman",
    title: "Former Vice Chairman, Technegen",
    category: "Leadership Foundation",
    detail: "Served as Vice Chairman for the 2025–2026 term, coordinating core committee operations and foundational student technical engagement.",
    metric: "2025–2026",
    metricLabel: "Tenure",
    dateOrPeriod: "2025 – 2026",
    iconType: "leadership"
  },
  {
    id: "nptel-python-ds",
    title: "NPTEL Certification: Python for Data Science",
    category: "Professional Certification",
    detail: "Earned formal national certification in Python for Data Science through NPTEL with a verified score of 67%.",
    metric: "67%",
    metricLabel: "Score Achieved",
    dateOrPeriod: "NPTEL Certified",
    iconType: "certificate"
  },
  {
    id: "hackathon-facilitator",
    title: "Hackathon Awareness Seminar Facilitator",
    category: "Peer Mentorship",
    detail: "Orchestrated and conducted a comprehensive hackathon orientation program, inspiring and equipping 120+ student participants with ideation techniques.",
    metric: "120+",
    metricLabel: "Students Guided",
    dateOrPeriod: "Technegen Program",
    iconType: "seminar"
  }
];

export const PROJECTS: Project[] = [
  {
    id: "ecolens",
    title: "EcoLens",
    category: "AI-Assisted Sustainability Product Concept",
    subtitle: "Environmental Impact Product Comparison Engine",
    description: "An eco-friendly product comparison web application concept focused on environmental sustainability. The experience helps users explore products through a sustainability-focused lens.",
    liveUrl: "https://ecolens-hackathon.vercel.app/",
    tags: ["AI-Assisted Prototyping", "Sustainability Analytics", "Rapid Prototyping", "Vercel"],
    role: "Concept Architect & Product Builder",
    accentColor: "emerald",
    features: [
      "Comparative eco-indexing for consumer packaging & footprint",
      "Sustainability-first exploration lens for mindful consumer decisions",
      "Interactive comparison matrices showing carbon and packaging trade-offs",
      "Streamlined responsive interface deployed for live exploration"
    ],
    previewDetails: {
      highlightLabel: "Eco-Index Comparison",
      mockupType: "sustainability",
      metrics: [
        { label: "Design Focus", value: "Eco Transparency" },
        { label: "Deployment", value: "Vercel Live" }
      ]
    }
  },
  {
    id: "factora",
    title: "FACTORA",
    category: "AI-Powered Manufacturing Decision Intelligence",
    subtitle: "Production Risk Analysis & What-If Simulations",
    description: "A prototype focused on production risk analysis, what-if simulations, and intelligent operational decision-making.",
    liveUrl: "https://factoravercelapp.vercel.app/",
    tags: ["Decision Intelligence", "Risk Simulation", "Operational Analytics", "AI Prototyping"],
    role: "Product & Simulation Prototyper",
    accentColor: "cyan",
    features: [
      "What-if simulation engine for manufacturing line contingencies",
      "Production bottleneck detection and risk prioritization matrix",
      "Operational decision-support dashboard for factory floor intelligence",
      "Interactive telemetry views engineered for rapid scenario testing"
    ],
    previewDetails: {
      highlightLabel: "Operational Intelligence",
      mockupType: "manufacturing",
      metrics: [
        { label: "System Core", value: "What-If Simulator" },
        { label: "Domain", value: "Smart Manufacturing" }
      ]
    }
  },
  {
    id: "assistive-navigation",
    title: "Assistive Navigation Application",
    category: "Hackathon Project",
    subtitle: "Camera-Based Obstacle Detection & Audio Assistance",
    description: "A mobile application concept designed to assist visually impaired people with navigation using camera-based obstacle detection and voice alerts.",
    achievement: "Third Prize in Hackathon",
    tags: ["Accessibility", "Mobile Concept", "Computer Vision UX", "Audio Assistance"],
    role: "Lead Concept Designer & Hackathon Builder",
    accentColor: "violet",
    features: [
      "Camera-assisted forward field scan for real-time hazard identification",
      "Immediate auditory feedback cues calibrated for varying obstacle proximity",
      "High-contrast voice-first navigation flow built for hands-free orientation",
      "Recognized with Third Prize among competitive hackathon entries"
    ],
    previewDetails: {
      highlightLabel: "3rd Prize Hackathon Entry",
      mockupType: "navigation",
      metrics: [
        { label: "Recognition", value: "3rd Prize" },
        { label: "Feedback", value: "Voice Alerts" }
      ]
    }
  },
  {
    id: "traffic-congestion",
    title: "AI-Based Traffic Congestion Solution",
    category: "Ideathon Concept",
    subtitle: "Dynamic Urban Flow Management Prototype",
    description: "An AI-based traffic congestion solution prototype proposed to explore smarter approaches to urban traffic management.",
    achievement: "Second Prize in Ideathon",
    tags: ["Smart Mobility", "Urban Flow Optimization", "Ideathon", "System Architecture"],
    role: "Ideation Lead & System Architect",
    accentColor: "amber",
    features: [
      "Dynamic urban intersection traffic flow analysis concept",
      "Algorithmic bottleneck prediction modeled for congestion reduction",
      "Adaptive signal timing framework to minimize gridlock propagation",
      "Awarded Second Prize for innovative approach to municipal transit"
    ],
    previewDetails: {
      highlightLabel: "2nd Prize Ideathon Entry",
      mockupType: "traffic",
      metrics: [
        { label: "Recognition", value: "2nd Prize" },
        { label: "Focus", value: "Urban Mobility" }
      ]
    }
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Programming",
    description: "Foundational software development and object-oriented principles.",
    skills: [
      {
        name: "Java",
        focus: "Object-Oriented Design & Data Structures",
        context: "Academic foundation, algorithms, and modular object design."
      }
    ]
  },
  {
    title: "AI-Assisted Development",
    description: "Accelerating the entire product lifecycle from idea to interactive prototype.",
    skills: [
      {
        name: "AI-Assisted Website Development",
        focus: "Interactive UI & Front-end Workflows",
        context: "Leveraging generative environments to synthesize and refine modern interfaces."
      },
      {
        name: "AI Tools",
        focus: "Prompt Engineering & Workflow Acceleration",
        context: "Deploying state-of-the-art developer tooling to speed up ideation cycles."
      },
      {
        name: "Rapid Prototyping",
        focus: "Iterative Build & Verification",
        context: "Moving from user stories to working web applications within tight sprint cycles."
      },
      {
        name: "Product Development",
        focus: "User Journey & Feature Scoping",
        context: "Framing technical implementation around practical usability and problem-solving."
      }
    ]
  },
  {
    title: "Tools & Ecosystem",
    description: "Platforms and environments powering version control, deployment, and delivery.",
    skills: [
      { name: "Google AI Studio", focus: "Prototyping & Generative Systems", context: "Ideating with state-of-the-art models and system prompts." },
      { name: "Stitch", focus: "Component & App Prototyping", context: "Streamlined rapid interface structuring." },
      { name: "Git & GitHub", focus: "Version Control & Collaboration", context: "Repository stewardship, branching, and open-source tracking." },
      { name: "Vercel", focus: "Continuous Deployment & Hosting", context: "Deploying live web applications with instant production URLs." },
      { name: "Canva", focus: "Visual Ideation & Presentation Design", context: "Crafting technical slide decks and event collateral." },
      { name: "Google Workspace", focus: "Productivity & Event Coordination", context: "Organizing departmental communication, surveys, and schedules." },
      { name: "Microsoft Office", focus: "Documentation & Analysis", context: "Technical reporting, data summaries, and structured analysis." }
    ]
  },
  {
    title: "Core Strengths",
    description: "Interpersonal, analytical, and execution capabilities cultivated through leadership.",
    skills: [
      { name: "Leadership", focus: "Departmental Stewardship", context: "Chairman of Technegen Computer Science Department." },
      { name: "Effective Communication", focus: "Technical & Peer Clarity", context: "Facilitator for 120+ student workshops and project presentations." },
      { name: "Teamwork & Collaboration", focus: "Synergistic Problem Solving", context: "Cross-functional team coordination during hackathons and symposia." },
      { name: "Problem-Solving", focus: "Analytical Thinking", context: "Tackling real-world accessibility and urban transit challenges." },
      { name: "Adaptability", focus: "Rapid Tool Adoption", context: "Swiftly mastering new AI workflows and evolving design paradigms." },
      { name: "Time Management", focus: "Milestone Delivery", context: "Balancing academic rigor (92% avg) with departmental governance." }
    ]
  }
];

export const LEADERSHIP_ROLES: LeadershipRole[] = [
  {
    role: "Chairman",
    organization: "Technegen — Computer Science Department",
    period: "2026–2027",
    isCurrent: true,
    description: "Leading the executive council of Technegen, the Computer Science Department association at Sankara College. Driving departmental innovation, technical activities, and student community initiatives.",
    impactMetrics: "Elected Department Head",
    keyContributions: [
      "Directing student technical symposiums, hackathon orientations, and skill-building workshops",
      "Guiding committee members in organizing inter-collegiate competitions and technical fests",
      "Serving as the primary bridge between the faculty administration and 200+ CS students",
      "Fostering an inclusive culture that encourages early-year students to build and participate in hackathons"
    ]
  },
  {
    role: "Vice Chairman",
    organization: "Technegen — Computer Science Department",
    period: "2025–2026",
    isCurrent: false,
    description: "Supported departmental administration, operational planning, and participant engagement across flagship technical initiatives.",
    impactMetrics: "Executive Council Leadership",
    keyContributions: [
      "Spearheaded logistics and speaker coordination for guest lectures and tech panels",
      "Collaborated on student registration, budget allocation, and technical resources",
      "Paved the operational groundwork for expanded hackathon readiness programs"
    ]
  },
  {
    role: "Seminar Facilitator",
    organization: "Hackathon Awareness Program",
    period: "120+ Students Impacted",
    isCurrent: false,
    description: "Conducted an interactive orientation seminar designed to demystify hackathons for undergraduates and catalyze competitive technical participation.",
    impactMetrics: "120+ Attendees",
    keyContributions: [
      "Formulated an actionable guide covering problem selection, team roles, and rapid prototyping",
      "Addressed beginner apprehension, breaking down how to present solutions to juries",
      "Spurred student participation in regional hackathons and ideathon submissions"
    ]
  }
];

export const EDUCATION_DATA: EducationItem[] = [
  {
    degree: "B.Sc. Computer Science",
    institution: "Sankara College of Science and Commerce, Coimbatore",
    period: "2024–2027",
    score: "92%",
    scoreType: "Current Academic Average",
    honors: "Merit Scholarship Recipient",
    highlights: [
      "Core coursework: Object-Oriented Programming (Java), Data Structures, Database Systems, Computer Networks",
      "Chairman of the Computer Science Department Association (Technegen)",
      "Consistent academic top-ranker throughout the degree program"
    ]
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    institution: "State Board of Secondary Education",
    period: "Completed 2024",
    score: "84.3%",
    scoreType: "Final Board Score",
    highlights: ["Mathematics & Computer Science focus", "Strong analytical foundation"]
  },
  {
    degree: "Secondary School Leaving Certificate (SSLC)",
    institution: "State Board of Secondary Education",
    period: "Completed 2022",
    score: "87.4%",
    scoreType: "Final Board Score",
    highlights: ["Distinction in Science and Mathematics"]
  }
];
