export default {
  meta: {
    title: "Mira  Akharin pe familijako maripe",
    description: "Platforma vaš akharin pe familijako maripe ando Utarno Makedonija.",
  },

  nav: {
    home: "Kher",
    guide: "Pala",
    resources: "Akharin",
    hotlines: "Akharin",
    doc: "Dokumentirin",
    safety: "Sigurnost",
  },

  exit: "Ik sig",

  home: {
    headline: "Naj korkori.",
    subtitle: "Platforma vaš akharin pe familijako maripe ando Utarno Makedonija.",
    emergencyLabel: "Urgentno?",
    emergencyAction: "Akharin 192 akana",
    sosLabel: "Nacionalno SOS linija",
    sosNumber: "15-315 (24/7)",
    cardGuide: "So te kerav akana?",
    cardGuideDesc: "Vodič korak pal korak",
    cardResources: "Arakh akharin paše mande",
    cardSafety: "Plano vaš sigurnost",
    cardSafetyDesc: "Pripremi tu vaš sigurno džajbe",
    cardHotlines: "Sa telefonska numeria vaš akharin",
    privacy: "Akaja stranica naj čhuvel podatke. Naj kolačinja.",
    privacyHistory: "Istorija e browserisko šaj te istrinel pe.",
    providerCTA: "San organizacija vaj profesionalco? De doprinos pe platforma \u2192",
  },

  contribute: {
    title: "De doprinos pe platforma",
    subtitle: "Ako san organizacija, terapeuti, savetnikano vajaver sluzhbashi, pherav o formulari tele te aven shte pe platforma.",
    formNotice: "Tumare podatke ka oven verificirime angleder te oven shte pe platforma.",
    fields: {
      orgName: "Anav e organizacijako",
      orgType: "Tipo e organizacijako",
      orgTypeOptions: {
        ngo: "NVO",
        institution: "Themesko institucie",
        ngoNetwork: "Mrezha NVO",
        localNgo: "Lokalno NVO vaš džuvlja",
      },
      city: "Foro",
      address: "Adresa",
      phones: "Telefonske numeria",
      phonesHint: "Shte sako numero ando nevo redi",
      email: "E-poshta",
      website: "Veb-strana",
      categories: "Servisia so nudinen",
      description: "Cikno opisi e servisiengero",
      descriptionHint: "Opisisar e servisia so nudinen (2-3 rechenicea)",
      contactPerson: "Kontakt manush",
      availability: "Butjako vakti",
      availabilityHint: "pr. 24/7, Ponedelnik - Petok 9-17",
      verification: "Sar shaj te verificirina akala informacie?",
      submit: "Bichar",
      success: "Naistutar! Tumare podatke bichalje uspeshno. Ka kontaktirina tumen palo verificiribe.",
    },
  },

  categories: {
    all: "Sa",
    shelter: "Than te ačhove",
    sos: "SOS linija",
    legal: "Hakojutno akharin",
    psycho: "Psihološko akharin",
  },

  resources: {
    title: "Arakh akharin",
    organizationsIn: "organizacie ando",
    cities: "foruria",
  },

  guide: {
    title: "So te kerav akana?",
    subtitle: "Dža palal akala korakia  jek pal jek, ke tiro tempo.",
  },

  hotlines: {
    title: "Numeria vaš akharin",
    subtitle: "Klikin vaš direkt akharin",
    warning: "Ako nekova kontrolirinel tiro telefoni, akharin katar avereskoro telefoni ja katar telefonsko govornica.",
    warningLabel: "Pažnja:",
  },

  safety: {
    title: "Plano vaš sigurnost",
    subtitle: "Pripremi akala buća angleder. Svako kutija kaj čhivel pe si jek korak karing sigurnost.",
    steps: "korakia",
  },

  guideSteps: [
    {
      num: "01",
      title: "San li sigurno akana?",
      subtitle: "San li ando opasnost akana?",
      content: "Ako san ando opasnost akana, akharin policija ko 192 ja dža katar o kher. Dža ko komšiuria, familija ja strehimore. Na dara vaš e buća  tiri sigurnost si e maj važno.",
      action: "Akharin 192 akana",
      actionType: "emergency" as const,
    },
    {
      num: "02",
      title: "Dokumentirin o maripe",
      subtitle: "Kidže dokazuria vaš tiri zaštita",
      content: "Fotografirin e povredia. Čhuv e porukia so den dara. Pisin e datumiuria thaj e buća so ulo. Akava ka pomožinel kana ka den tužba ja ka rode zaštitno naredba.",
      action: "Sar te dokumentirines",
      actionType: "info" as const,
    },
    {
      num: "03",
      title: "Rod pravno akharin",
      subtitle: "Si tut pravia  koristin len",
      content: "Šaj te avel tut zaštitno naredba bi advokatisko. Dža ko najbližno osnovno sudišće. ESE del besplatno pravno akharin (02 3298 295). Helsinški komiteti si les besplatno linija: 0800 44 222.",
      action: "Dikh organizacie",
      actionType: "navigate" as const,
    },
    {
      num: "04",
      title: "Plano vaš sigurnost",
      subtitle: "Pripremi tu vaš sigurno džajbe",
      content: "Av spremno torba e dokumentencar, lovencar thaj gadecar. Phen nekaskoro ke patjan kaj ka džas. Sikh e numeria e strehimorengo napamet.",
      action: "Ker plano vaš sigurnost",
      actionType: "navigate" as const,
    },
  ],

  safetySteps: [
    {
      icon: "doc",
      title: "Dokumentia",
      items: [
        "Lično karta / pasoši",
        "Izvodi katar matičnone knjige (tiro thaj e čhavorengoro)",
        "Venčanica",
        "Zaštitno naredba (ako si tut)",
      ],
    },
    {
      icon: "money",
      title: "Love",
      items: [
        "Gotovina  kobor šaj",
        "Bankakiri kartica",
        "Rezervna ključaria katar kher/kolini",
      ],
    },
    {
      icon: "bag",
      title: "Spremno torba",
      items: [
        "Gada vaš 2–3 dive",
        "Potrebna ilaćia",
        "Polnači vaš telefoni",
        "Tikni igračka vaš čhavo",
      ],
    },
    {
      icon: "phone",
      title: "Kontaktia",
      items: [
        "Nacionalno SOS linija: 15-315",
        "SOS mobilno: 070 141 700",
        "Besplatno pravno akharin: 0800 44 222",
        "Anav e manušeskoro ke patjan les",
        "Adresa kaj šaj te džas",
      ],
    },
  ],

  hotlineNames: {
    "police": { name: "Policija, Urgentno", available: "24/7" },
    "sos-crisis": { name: "Nacionalno SOS, Krizengo centri", available: "24/7" },
    "sos-mobile": { name: "Nacionalno mobilno SOS (NCGE)", available: "24/7" },
    "sos-ozs": { name: "Nacionalno SOS, OZS", available: "24/7" },
    "ambulance": { name: "Ambulanca", available: "24/7" },
    "lastrada": { name: "Open Gate, Anti-trafiking", available: "24/7" },
    "helsinki-legal": { name: "Helsinski komiteti, Pravno akharin", available: "Besplatno" },
    "helsinki-safe": { name: "Sigurno kher, Helsinki", available: "24/7" },
    "ese-legal": { name: "ESE, Pravno akharin", available: "Ponedeljako - Parashtuj" },
    "megjashi": { name: "Alo Busavko, Chavore", available: "24/7" },
  },

  docGuide: {
    title: "Sar te dokumentirines o maripe",
    subtitle: "Kidze dokazuria vas tiri zastita. Svako dokazi so chuves les pomozinel.",
    sections: [
      {
        title: "Fotografirin e povredia",
        items: [
          "Ker jashne fotografie e povrediengo odmah palo maripe",
          "Fotografirin katar pashe thaj katar dur",
          "Sigurno ker ke o datumi thaj o vreme dikhljona ko fotografija",
          "Chuv len ko sigurno than (email, oblako ja ko manus ke patjas)",
        ],
      },
      {
        title: "Chuv e poruke",
        items: [
          "Na istrinen e poruke so den dara ja so urazinen",
          "Ker snimka e ekranoskiri e razgovorengo",
          "Chuv e email-ia so den dara",
          "Chuv e govorne poruke ako si",
        ],
      },
      {
        title: "Pisin dnevniko",
        items: [
          "Pisin o datumi, vreme thaj than e svakone incidentoskoro",
          "Pershkruaj so ulo e detaljencar",
          "Shenjo dali sas svedokia",
          "Shenjo dali geljam ko doktori ja ko policija",
        ],
      },
      {
        title: "Medicinska dokazuria",
        items: [
          "Dzha ko doktori palo svako incidenti",
          "Rod detaljno medicinska izvestaj",
          "Chuv kopie katar sa e izvestaja",
          "Fotografirin e recepte thaj rezultatia",
        ],
      },
    ],
    callToAction: "Kana ka aves spremno, akala dokazuria ka pomozinen vas:",
    purposes: [
      "Podnosibe e prijavakoro ko policija",
      "Rodibe zastitno naredba ko sudiste",
      "Besplatno pravno akharin katar organizacie",
    ],
  },

  orgs: {
    "crisis-center": {
      name: "Krizengo centri 'Nadež'",
      type: "NVO  SOS linija thaj krizengo strehimore",
      desc: "Nacionalno SOS linija 24/7 vaš žrtve familijake maripaskoro; krizengo strehimore 24–48 sahata vaš džuvlja thaj čhave; psihosocijalno akharin; pravno sovetuibe.",
    },
    "mwrc": {
      name: "Makedonsko centri vaš pravuria e džuvljengere  Strehimore (MWRC)",
      type: "NVO  Strehimore thaj pravno akharin",
      desc: "Strehimore vaš džuvlja thaj čhave žrtve maripaskoro; besplatno smeštaj, habe, medicinska, psihosocijalno akharin thaj pravno pomoš.",
    },
    "ncge": {
      name: "Nacionalno soveti vaš rodovo ednakvost (NCGE)",
      type: "Mreža NVO  Nacionalno mobilno SOS linija",
      desc: "Besplatno mobilno SOS linija 24/7 vaš džuvlja žrtve familijake thaj rodovake maripaskoro; sovetuibe, informiribe thaj upatiribe.",
    },
    "ozs": {
      name: "Organizacija e džuvljengiri e forosko Skopje (OZS)",
      type: "NVO  SOS linija thaj privremeno strehimore",
      desc: "Nacionalno SOS linija 24 sahata; identifikacie e slučajengiri; profesionalno thaj psihosocijalno akharin; privremeno sigurno strehimore.",
    },
    "lastrada": {
      name: "Open Gate – La Strada Makedonija",
      type: "NVO  Anti-trafiking thaj seksualno maripe",
      desc: "SOS linija 24/7; dolgoročno strehimore; medicinska, pravno, psihosocijalno thaj profesionalno akharin vaš žrtve trafikingoskoro thaj seksualnone maripaskoro.",
    },
    "helsinki": {
      name: "Helsinški komiteti  Pravno akharin thaj Sigurno kher",
      type: "NVO  Pravno akharin thaj sigurno kher",
      desc: "Besplatno pravno akharin inkluziviribe zaštita katar familijako maripe; Sigurno kher e privremenone strehimorear ando krizne situacie.",
    },
    "network": {
      name: "Nacionalno mreža  Glasi kontra maripe",
      type: "Mreža NVO  Koordinacie thaj politike",
      desc: "Mreža katar 20+ NVO-ia; koordinirinel servisia, zalaganje thaj obuke; održinel onlajn liste e strehimorengere thaj SOS linijengere ando celo them.",
    },
    "ese": {
      name: "ESE  Združenije vaš emanciapcie",
      type: "NVO  Pravno thaj psihološko akharin",
      desc: "Besplatno pravno akharin, pravno zastapuibe thaj psihološko pomoš vaš džuvlja so doživuinen familijako maripe.",
    },
    "hera": {
      name: "HERA  Sastipen thaj rodibe",
      type: "NVO  Reproduktivno sastipen thaj rodovo maripe",
      desc: "Besplatna thaj konfidencijalna servisia vaš reproduktivno sastipen; akharin vaš preživeanuria rodovake maripaskoro.",
    },
    "mlsp": {
      name: "Ministerstvo vaš buti thaj socijalno politika",
      type: "Institucie  Politike thaj nadzori",
      desc: "Odgovorno vaš politike thaj zakonodavstvo vaš zaštita katar maripe; registririnel thaj nadgledinel specializirane službe thaj strehimorea.",
    },
    "social-work-skopje": {
      name: "JUMCSR  Centri vaš socijalno buti Skopje",
      type: "Institucie  Socijalno buti thaj zaštita",
      desc: "Javno centri vaš socijalno buti; upravinel e slučajencar familijake maripaskoro; posvećene edinice vaš zaštita thaj urgentno timi.",
    },
    "megjashi": {
      name: "Angluni čhavorengiri ambasada Megjashi (Alo Bušavko)",
      type: "NVO  SOS linija vaš čhave",
      desc: "Konfidencijalno linija 24/7 vaš čhave thaj terne te vakerena vaš maripe, zloupotrebia thaj avera problemia.",
    },
    "albanian-women-forum": {
      name: "Forumi e albanskone džuvljengiro",
      type: "Lokalno NVO  Zalaganje thaj sovetuibe",
      desc: "Zalaganje, maripe kontra džuvlja, psihosocijalno akharin, sastipen e džuvljengero.",
    },
    "albanian-women-gostivar": {
      name: "Sojuzi e albanskone džuvljengiro  Ogranok Gostivari",
      type: "Lokalno NVO  Sovetuibe thaj aktivnostia",
      desc: "Fokusi: statusi, rola thaj socijalno pozicie e albanskone džuvljengiri.",
    },
    "jehona": {
      name: "Jehona  Nezavisno združenije e džuvljengiro",
      type: "Lokalno NVO  Sovetuibe thaj psihosocijalno akharin",
      desc: "Maripe kontra džuvlja, psihosocijalno akharin, sastipen e džuvljengero, humanitarno pomoš.",
    },
    "hz-majka": {
      name: "Hz. Majka  Organizacije e džuvljengiri Kumanovo",
      type: "Lokalno NVO  Aktivizmi thaj edukacije",
      desc: "Aktivizmi, edukacije, programia kontra maripe pe džuvlja.",
    },
    "sos-kumanovo": {
      name: "SOS Telefoni  Kumanovo",
      type: "Lokalno NVO  SOS linija",
      desc: "SOS linija vaš džuvlja thaj čhave žrtve maripaskoro. Informiribe, rodibe, psihosocijalno akharin.",
    },
    "bisera": {
      name: "Bisera  Združenije e džuvljengiro Ohri",
      type: "Lokalno NVO  SOS linija thaj sovetuibe",
      desc: "SOS linija vaš džuvlja thaj čhave so doživuinen maripe.",
    },
    "hajat": {
      name: "Hajat  Organizacije e turskone džuvljengiri Struga",
      type: "Lokalno NVO  Sovetuibe thaj edukacije",
      desc: "Programia vaš čhaja thaj terne džuvlja, edukacije, maripe kontra džuvlja, sastipen.",
    },
    "oz-struga": {
      name: "Organizacije e džuvljengiri  Struga",
      type: "Lokalno NVO  Sovetuibe thaj aktivnostia",
      desc: "Terne džuvlja, maripe kontra džuvlja, psihosocijalno akharin, sastipen e džuvljengero.",
    },
    "iskra": {
      name: "Iskra  Združenije e džuvljengiro Bitola",
      type: "Lokalno NVO  SOS linija thaj sovetuibe",
      desc: "SOS linija vaš džuvlja thaj čhave. Sastipen, edukacije, maripe kontra džuvlja.",
    },
    "oz-bitola": {
      name: "Organizacije e džuvljengiri Bitola",
      type: "Lokalno NVO  Sovetuibe thaj obuke",
      desc: "Obuke, edukacije, humanitarne aktivnostia, psihosocijalno akharin, maripe kontra džuvlja.",
    },
    "oz-sveti-nikole": {
      name: "Organizacije e džuvljengiri  Sveti Nikole",
      type: "Lokalno NVO  Sovetuibe thaj aktivnostia",
      desc: "Džuvlja, čhave thaj terne; maripe kontra džuvlja, psihosocijalno akharin, sastipen.",
    },
    "oz-pehcevo": {
      name: "Organizacije e džuvljengiri  Pehčevo",
      type: "Lokalno NVO  Sovetuibe thaj aktivnostia",
      desc: "Pravuria e džuvljengere, ednakvost, edukacije, maripe kontra džuvlja, sastipen.",
    },
    "roza": {
      name: "Roza  Organizacije e džuvljengiri Rankovce",
      type: "Lokalno NVO  Sovetuibe thaj aktivnostia",
      desc: "Pravuria e džuvljengere, maripe kontra džuvlja, psihosocijalno akharin, sastipen, životno sredina.",
    },
    "zhena": {
      name: "Združenije 'Žena'  Samokov",
      type: "Lokalno NVO  Sovetuibe thaj aktivnostia",
      desc: "Aktivizmi, rodibe, maripe kontra džuvlja, psihosocijalno akharin, sastipen.",
    },
  },
} as const;
