export default {
  meta: {
    title: "Mira  Domestic Violence Support",
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
    fields: {
      orgName: "Organization name",
      orgType: "Organization type",
      orgTypeOptions: {
        ngo: "NGO",
        institution: "State institution",
        ngoNetwork: "NGO network",
        localNgo: "Local women's NGO",
      },
      city: "City",
      address: "Address",
      phones: "Phone numbers",
      phonesHint: "Add each number on a new line",
      email: "Email",
      website: "Website",
      categories: "Services you offer",
      description: "Brief description of services",
      descriptionHint: "Describe the services you provide (2-3 sentences)",
      contactPerson: "Contact person",
      availability: "Working hours",
      availabilityHint: "e.g. 24/7, Mon - Fri 9-17",
      verification: "How can we verify this information?",
      submit: "Submit",
      success: "Thank you! Your information was submitted successfully. We will contact you after verification.",
    },
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
    verified: "Verified",
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
      content: "You can get a protection order without a lawyer. Go to the local office of the Ministry of Justice. ESE offers free legal help (02 3298 295). The Helsinki Committee has a free line: 0800 44 222.",
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

  // Legal
  legal: {
    lastUpdated: "Last updated: April 2026",
    privacyLink: "Privacy Policy",
    cookiesLink: "Cookie Policy",
    backHome: "Back to home",
    banner: {
      message: "This site uses privacy-first analytics. No cookies, no tracking, no personal data collected.",
      accept: "Got it",
      more: "Learn more",
    },
    privacy: {
      title: "Privacy Policy",
      subtitle: "How we handle information about visitors and contributors.",
      sections: [
        {
          h: "1. About this policy",
          p: "This Privacy Policy explains how mira. processes information about visitors to this website. We are committed to protecting your privacy. This policy is prepared in line with the Law on Personal Data Protection of the Republic of North Macedonia and the EU General Data Protection Regulation (GDPR).",
        },
        {
          h: "2. Who we are",
          p: "mira. is a non-commercial information platform for people affected by domestic violence in North Macedonia. We do not sell products or services. We do not run advertising.",
        },
        {
          h: "3. What data we process",
          p: "We keep data to an absolute minimum. For visitors: we use Simple Analytics, a privacy-first analytics service that measures only anonymous, aggregated trends (page views, country, referring site, browser, screen size). It does not record your IP address, does not set cookies, and cannot identify you. For contributors (organisations): if you fill in the Contribute form, you voluntarily provide your organisation's name, type, city, address, phone numbers, email, website, services, description, contact person, availability, and verification info.",
        },
        {
          h: "4. Legal basis",
          p: "For the Contribute form, the legal basis is your consent, given when you submit the form (Article 6(1)(a) GDPR). For analytics, the legal basis is our legitimate interest in understanding anonymous traffic to improve the platform (Article 6(1)(f) GDPR). This processing does not involve personal data.",
        },
        {
          h: "5. How we use your data",
          p: "Organisation data is used only to verify and publish your organisation on the platform. Analytics data is used only to understand anonymous traffic patterns.",
        },
        {
          h: "6. Who receives your data",
          p: "Simple Analytics processes anonymous analytics (simpleanalytics.com/privacy). FormSubmit delivers the Contribute form to our email (formsubmit.co/privacy). We do not sell, share, or trade your data with any other third parties.",
        },
        {
          h: "7. How long we keep your data",
          p: "Organisation data is kept for as long as the organisation is listed, or until you request deletion. Anonymous analytics are kept in aggregate form by Simple Analytics according to their retention policy.",
        },
        {
          h: "8. Your rights",
          p: "Under the Law on Personal Data Protection and GDPR, you have the right to access the data we hold about you, to request correction of inaccurate data, to request deletion, to object to processing, to withdraw consent at any time, and to lodge a complaint with the Agency for Personal Data Protection of North Macedonia (azlp.mk).",
        },
        {
          h: "9. Data security",
          p: "We take reasonable technical and organisational measures to protect your data against unauthorised access, alteration, disclosure, or destruction.",
        },
        {
          h: "10. Changes to this policy",
          p: "We may update this policy from time to time. The date above shows the last update.",
        },
        {
          h: "11. Contact",
          p: "For any privacy-related questions or to exercise your rights, contact us through the Contribute page.",
        },
      ],
    },
    cookies: {
      title: "Cookie Policy",
      subtitle: "This website does not use cookies.",
      sections: [
        {
          h: "1. No cookies",
          p: "We do not set cookies, tracking pixels, or any other persistent identifier on your device for tracking purposes. Your visit is not linked to any identity.",
        },
        {
          h: "2. Cookie-free analytics",
          p: "We use Simple Analytics, a cookie-free analytics service that measures only anonymous, aggregated trends (page views, country, referring site, browser, screen size). It does not place cookies, does not track you across websites, and cannot identify you.",
        },
        {
          h: "3. Strictly necessary storage",
          p: "If you dismiss the privacy notice banner, we store a small flag in your browser's local storage so the banner does not reappear. This is strictly necessary to remember your preference and does not require consent under the Macedonian Law on Electronic Communications.",
        },
        {
          h: "4. Third-party links",
          p: "When you click external links to organisations' websites, phone numbers, or email addresses, those third-party services may set their own cookies under their own policies. We do not control them.",
        },
        {
          h: "5. Managing cookies in your browser",
          p: "If you want to block or delete cookies set by any site, you can do this in your browser settings. Instructions are available on your browser's help pages.",
        },
        {
          h: "6. Browser history",
          p: "Your visit to this site may appear in your browser history. If you need to hide your visit for safety reasons, clear your browser history after your visit, or use the 'Quick exit' button at the top of the page.",
        },
      ],
    },
  },
} as const;
