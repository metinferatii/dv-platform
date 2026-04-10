export default {
  meta: {
    title: "Info  Domestic Violence Support",
    description: "Support platform for domestic violence in North Macedonia.",
  },

  nav: {
    home: "Home",
    guide: "Steps",
    resources: "Help",
    hotlines: "Call",
    doc: "Document",
    safety: "Safety",
  },

  exit: "Quick exit",

  home: {
    headline: "You are not alone.",
    subtitle: "Support platform for domestic violence in North Macedonia.",
    emergencyLabel: "Emergency?",
    emergencyAction: "Call 192 now",
    sosLabel: "National SOS Line",
    sosNumber: "15-315 (24/7)",
    cardGuide: "What should I do now?",
    cardGuideDesc: "Step by step guide",
    cardResources: "Find help near me",
    cardSafety: "Safety plan",
    cardSafetyDesc: "Prepare for a safe exit",
    cardHotlines: "All helpline numbers",
    privacy: "This page does not store any data. No cookies.",
    privacyHistory: "Browser history can be deleted.",
    providerCTA: "Are you an organization or professional? Contribute to the platform \u2192",
  },

  contribute: {
    title: "Contribute to the platform",
    subtitle: "If you are an organization, therapist, counselor, or other service provider, fill out the form below to be added to the platform.",
    formNotice: "Your information will be verified before being added to the platform.",
  },

  categories: {
    all: "All",
    shelter: "Shelter",
    sos: "SOS Line",
    legal: "Legal aid",
    psycho: "Psychological support",
  },

  resources: {
    title: "Find help",
    organizationsIn: "organizations in",
    cities: "cities",
  },

  guide: {
    title: "What should I do now?",
    subtitle: "Follow these steps  one by one, at your own pace.",
  },

  hotlines: {
    title: "Helpline numbers",
    subtitle: "Click to call directly",
    warning: "If someone controls your phone, call from someone else's phone or a payphone.",
    warningLabel: "Caution:",
  },

  safety: {
    title: "Safety plan",
    subtitle: "Prepare these things ahead of time. Every box you check is a step towards safety.",
    steps: "steps",
  },

  guideSteps: [
    {
      num: "01",
      title: "Are you safe right now?",
      subtitle: "Are you in immediate danger?",
      content: "If you are in danger now, call police at 192 or leave the house. Go to neighbors, family, or a shelter. Don't worry about your things  your safety is the most important.",
      action: "Call 192 now",
      actionType: "emergency" as const,
    },
    {
      num: "02",
      title: "Document the violence",
      subtitle: "Gather evidence for your protection",
      content: "Photograph injuries. Save threatening messages. Write down dates and events. This will help when you file a complaint or request a protection order.",
      action: "How to document",
      actionType: "info" as const,
    },
    {
      num: "03",
      title: "Seek legal help",
      subtitle: "You have rights  use them",
      content: "You can get a protection order without a lawyer. Go to the nearest basic court. ESE offers free legal help (02 3298 295). The Helsinki Committee has a free line: 0800 44 222.",
      action: "View organizations",
      actionType: "navigate" as const,
    },
    {
      num: "04",
      title: "Safety plan",
      subtitle: "Prepare for a safe departure",
      content: "Keep a bag ready with documents, money, and clothes. Tell someone you trust where you will go. Memorize shelter phone numbers.",
      action: "Create safety plan",
      actionType: "navigate" as const,
    },
  ],

  safetySteps: [
    {
      icon: "doc",
      title: "Documents",
      items: [
        "ID card / passport",
        "Birth certificate (yours and children's)",
        "Marriage certificate",
        "Protection order (if you have one)",
      ],
    },
    {
      icon: "money",
      title: "Money",
      items: [
        "Cash  as much as you can",
        "Bank card",
        "Spare house/car keys",
      ],
    },
    {
      icon: "bag",
      title: "Ready bag",
      items: [
        "Clothes for 2–3 days",
        "Necessary medications",
        "Phone charger",
        "Small toy for the child",
      ],
    },
    {
      icon: "phone",
      title: "Contacts",
      items: [
        "National SOS line: 15-315",
        "SOS mobile: 070 141 700",
        "Free legal help: 0800 44 222",
        "Name of the person you trust",
        "Address where you can go",
      ],
    },
  ],

  hotlineNames: {
    "police": { name: "Police, Emergency", available: "24/7" },
    "sos-crisis": { name: "National SOS, Crisis Center", available: "24/7" },
    "sos-mobile": { name: "National Mobile SOS (NCGE)", available: "24/7" },
    "sos-ozs": { name: "National SOS, OWS", available: "24/7" },
    "ambulance": { name: "Ambulance", available: "24/7" },
    "lastrada": { name: "Open Gate, Anti-trafficking", available: "24/7" },
    "helsinki-legal": { name: "Helsinki Committee, Legal Aid", available: "Free" },
    "helsinki-safe": { name: "Safe House, Helsinki", available: "24/7" },
    "ese-legal": { name: "ESE, Legal Aid", available: "Mon - Fri" },
    "megjashi": { name: "Alo Bushavko, Children", available: "24/7" },
  },

  docGuide: {
    title: "How to document violence",
    subtitle: "Gather evidence for your protection. Every piece of evidence you save helps.",
    sections: [
      {
        title: "Photograph injuries",
        items: [
          "Take clear photos of injuries immediately after the violence",
          "Photograph from close up and from a distance",
          "Make sure the date and time are visible in the photo",
          "Save them in a safe place (email, cloud, or with someone you trust)",
        ],
      },
      {
        title: "Save messages",
        items: [
          "Do not delete threatening or abusive messages",
          "Take screenshots of conversations",
          "Save threatening emails",
          "Save voice messages if there are any",
        ],
      },
      {
        title: "Keep a diary",
        items: [
          "Write down the date, time and place of every incident",
          "Describe what happened in detail",
          "Note whether there were witnesses",
          "Note whether you went to a doctor or police",
        ],
      },
      {
        title: "Medical evidence",
        items: [
          "Go to a doctor after every incident",
          "Request a detailed medical report",
          "Keep copies of all reports",
          "Photograph prescriptions and results",
        ],
      },
    ],
    callToAction: "When you are ready, this evidence will help for:",
    purposes: [
      "Filing a complaint with the police",
      "Requesting a protection order in court",
      "Free legal help from organizations",
    ],
  },

  orgs: {
    "crisis-center": {
      name: "Crisis Center 'Hope'",
      type: "NGO  SOS line & crisis shelter",
      desc: "24/7 national SOS line for domestic violence victims; 24–48h crisis shelter for women and children; psychosocial support; legal counselling.",
    },
    "mwrc": {
      name: "Macedonian Women's Rights Centre  Shelter (MWRC)",
      type: "NGO  Shelter & legal support",
      desc: "Shelter for women and children victims of violence; free accommodation, food, medical, psychosocial support and legal aid.",
    },
    "ncge": {
      name: "National Council for Gender Equality (NCGE)",
      type: "NGO network  National mobile SOS line",
      desc: "Free 24/7 mobile SOS line for women victims of domestic and gender-based violence; counselling, information and referral.",
    },
    "ozs": {
      name: "Organization of Women of the City of Skopje (OWS)",
      type: "NGO  SOS line & temporary shelter",
      desc: "24-hour national SOS helpline; case identification; professional and psychosocial support; temporary safe accommodation.",
    },
    "lastrada": {
      name: "Open Gate – La Strada Macedonia",
      type: "NGO  Anti-trafficking & sexual violence",
      desc: "24/7 SOS helpline; long-term shelter; medical, legal, psychosocial and vocational support for victims of trafficking and sexual violence.",
    },
    "helsinki": {
      name: "Helsinki Committee  Legal Aid & Safe House",
      type: "NGO  Legal aid & safe house",
      desc: "Free legal aid including domestic violence protection; Safe House with temporary accommodation in crisis and violence situations.",
    },
    "network": {
      name: "National Network  Voice against Violence",
      type: "NGO network  Coordination & policy",
      desc: "Umbrella network of 20+ CSOs; coordinates services, advocacy and training; maintains online lists of shelters and SOS lines across the country.",
    },
    "ese": {
      name: "ESE  Association for Emancipation",
      type: "NGO  Legal & psychological support",
      desc: "Free legal assistance, legal representation and psychological help for women experiencing domestic violence.",
    },
    "hera": {
      name: "HERA  Health and Research",
      type: "NGO  Reproductive health & GBV support",
      desc: "Free and confidential reproductive health services; support for survivors of gender-based violence.",
    },
    "mlsp": {
      name: "Ministry of Labour and Social Policy",
      type: "Institution  Policy & oversight",
      desc: "Responsible for policies and legislation on protection from violence; registers and supervises specialized services and shelters.",
    },
    "social-work-skopje": {
      name: "Inter-municipal Centre for Social Work  Skopje",
      type: "Institution  Social work & protection",
      desc: "Public social work centre; manages domestic violence cases; dedicated units for protection and emergency team.",
    },
    "megjashi": {
      name: "First Children's Embassy  Megjashi (Alo Bushavko)",
      type: "NGO  Children's SOS line",
      desc: "24/7 confidential helpline for children and youth to talk about violence, abuse and other problems.",
    },
    "albanian-women-forum": {
      name: "Albanian Women's Forum",
      type: "Local NGO  Advocacy & counselling",
      desc: "Advocacy, violence against women, psychosocial care, women's health.",
    },
    "albanian-women-gostivar": {
      name: "Albanian Women's Union  Gostivar Branch",
      type: "Local NGO  Counselling & activities",
      desc: "Focus: status, role and social position of Albanian women.",
    },
    "jehona": {
      name: "Jehona  Independent Women's Association",
      type: "Local NGO  Counselling & psychosocial care",
      desc: "Violence against women, psychosocial care, women's health, humanitarian aid.",
    },
    "hz-majka": {
      name: "Hz. Majka  Women's Organization Kumanovo",
      type: "Local NGO  Activism & education",
      desc: "Activism, education, programs against violence against women.",
    },
    "sos-kumanovo": {
      name: "SOS Telephone  Kumanovo",
      type: "Local NGO  SOS line",
      desc: "SOS line for women and children victims of violence. Information, research, psychosocial care.",
    },
    "bisera": {
      name: "Bisera  Women's Association Ohrid",
      type: "Local NGO  SOS line & counselling",
      desc: "SOS line for women and children experiencing violence.",
    },
    "hajat": {
      name: "Hajat  Turkish Women's Organization Struga",
      type: "Local NGO  Counselling & education",
      desc: "Programs for girls and young women, education, violence against women, health.",
    },
    "oz-struga": {
      name: "Women's Organization  Struga (OZ Struga)",
      type: "Local NGO  Counselling & activities",
      desc: "Young women, violence against women, psychosocial care, women's health.",
    },
    "iskra": {
      name: "Iskra  Women's Association Bitola",
      type: "Local NGO  SOS line & counselling",
      desc: "SOS line for women and children. Health, education, violence against women.",
    },
    "oz-bitola": {
      name: "Women's Organization Bitola",
      type: "Local NGO  Counselling & training",
      desc: "Training, education, humanitarian activities, psychosocial care, violence against women.",
    },
    "oz-sveti-nikole": {
      name: "Women's Organization  Sveti Nikole",
      type: "Local NGO  Counselling & activities",
      desc: "Women, children and youth; violence against women, psychosocial care, health.",
    },
    "oz-pehcevo": {
      name: "Women's Organization  Pehchevo",
      type: "Local NGO  Counselling & activities",
      desc: "Women's rights, equality, education, violence against women, health.",
    },
    "roza": {
      name: "Roza  Women's Organization Rankovce",
      type: "Local NGO  Counselling & activities",
      desc: "Women's rights, violence against women, psychosocial care, health, environment.",
    },
    "zhena": {
      name: "Association 'Zhena'  Samokov",
      type: "Local NGO  Counselling & activities",
      desc: "Activism, research, violence against women, psychosocial care, health.",
    },
  },
} as const;
