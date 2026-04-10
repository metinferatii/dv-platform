export default {
  // Meta
  meta: {
    title: "Informata  Mbështetje ndaj dhunës në familje",
    description: "Platformë për mbështetje ndaj dhunës në familje në Maqedoninë e Veriut.",
  },

  // Nav
  nav: {
    home: "Ballina",
    guide: "Hapat",
    resources: "Ndihmë",
    hotlines: "Thirr",
    doc: "Dokumento",
    safety: "Siguria",
  },

  // Quick exit
  exit: "Dil shpejt",

  // Home page
  home: {
    headline: "Nuk je vetëm.",
    subtitle: "Platformë për mbështetje ndaj dhunës në familje në Maqedoninë e Veriut.",
    emergencyLabel: "Urgjencë?",
    emergencyAction: "Thirr 192 tani",
    sosLabel: "Linja SOS Nacionale",
    sosNumber: "15-315 (24/7)",
    cardGuide: "Çfarë të bëj tani?",
    cardGuideDesc: "Udhëzues hap pas hapi",
    cardResources: "Gjej ndihmë pranë meje",
    cardSafety: "Plani i sigurisë",
    cardSafetyDesc: "Përgatitu për largim të sigurt",
    cardHotlines: "Të gjitha numrat e ndihmës",
    privacy: "Kjo faqe nuk ruan të dhëna. Asnjë cookie.",
    privacyHistory: "Historiku i shfletuesit mund të fshihet.",
    providerCTA: "Je organizatë ose profesionist/e? Kontribuo në platformë \u2192",
  },

  // Contribute page
  contribute: {
    title: "Kontribuo në platformë",
    subtitle: "Nëse jeni organizatë, terapist/e, këshilltar/e ose ofrues tjetër shërbimesh, plotësoni formularin më poshtë për t'u shtuar në platformë.",
    formNotice: "Të dhënat tuaja do të verifikohen para se të shtohen në platformë.",
    fields: {
      orgName: "Emri i organizatës",
      orgType: "Lloji i organizatës",
      orgTypeOptions: {
        ngo: "OJQ",
        institution: "Institucion shtetëror",
        ngoNetwork: "Rrjet OJQ-sh",
        localNgo: "OJQ lokale e grave",
      },
      city: "Qyteti",
      address: "Adresa",
      phones: "Numrat e telefonit",
      phonesHint: "Shtoni secilin numër në rresht të ri",
      email: "Email",
      website: "Faqja e internetit",
      categories: "Shërbimet që ofroni",
      description: "Përshkrim i shkurtër i shërbimeve",
      descriptionHint: "Përshkruani shërbimet që ofroni (2-3 fjali)",
      contactPerson: "Personi kontaktues",
      availability: "Orari i punës",
      availabilityHint: "p.sh. 24/7, E hënë - E premte 9-17",
      verification: "Si mund ta verifikojmë këtë informacion?",
      submit: "Dërgo",
      success: "Faleminderit! Të dhënat tuaja u dërguan me sukses. Do t'ju kontaktojmë pasi të verifikohen.",
    },
  },

  // Categories
  categories: {
    all: "Të gjitha",
    shelter: "Strehimore",
    sos: "Linja SOS",
    legal: "Ndihmë juridike",
    psycho: "Mbështetje psikologjike",
  },

  // Resources
  resources: {
    title: "Gjej ndihmë",
    organizationsIn: "organizata në",
    cities: "qytete",
  },

  // Guide
  guide: {
    title: "Çfarë të bëj tani?",
    subtitle: "Ndiq këta hapa  një nga një, me ritmin tënd.",
  },

  // Hotlines
  hotlines: {
    title: "Numrat e ndihmës",
    subtitle: "Kliko për të thirrur direkt",
    warning: "Nëse dikush kontrollon telefonin tënd, thirr nga telefoni i dikujt tjetër ose nga një kabinë telefonike.",
    warningLabel: "Kujdes:",
  },

  // Safety
  safety: {
    title: "Plani i sigurisë",
    subtitle: "Përgatit këto gjëra përpara. Çdo kutizë që e shënon është një hap drejt sigurisë.",
    steps: "hapa",
  },

  // Guide steps
  guideSteps: [
    {
      num: "01",
      title: "Je e sigurt tani?",
      subtitle: "A je në rrezik të menjëhershëm?",
      content: "Nëse je në rrezik tani, thirr policinë në 192 ose largohu nga shtëpia. Shko te fqinjët, familja, ose një strehimore. Mos u mundo për gjërat  siguria jote është më e rëndësishme.",
      action: "Thirr 192 tani",
      actionType: "emergency" as const,
    },
    {
      num: "02",
      title: "Dokumento dhunën",
      subtitle: "Mblidh prova për mbrojtjen tënde",
      content: "Fotografo lëndimet. Ruaj mesazhet kërcënuese. Shkruaj datat dhe ngjarjet. Kjo do të ndihmojë kur të paraqesësh ankesë ose të kërkosh urdhër mbrojtjeje.",
      action: "Si të dokumentosh",
      actionType: "info" as const,
    },
    {
      num: "03",
      title: "Kërko ndihmë ligjore",
      subtitle: "Ke të drejta  përdori ato",
      content: "Mund të marrësh urdhër mbrojtjeje pa avokat. Shko në gjykatën themelore më të afërt. ESE ofron ndihmë ligjore falas (02 3298 295). Komiteti i Helsinkit ka linjë falas: 0800 44 222.",
      action: "Shiko organizatat",
      actionType: "navigate" as const,
    },
    {
      num: "04",
      title: "Plani i sigurisë",
      subtitle: "Përgatitu për largim të sigurt",
      content: "Mbaj një çantë të gatshme me dokumente, para, dhe rroba. Thuaji dikujt që i beson ku do shkosh. Mëso numrat e strehimoreve përmendësh.",
      action: "Krijo plan sigurie",
      actionType: "navigate" as const,
    },
  ],

  // Safety checklist
  safetySteps: [
    {
      icon: "doc",
      title: "Dokumentet",
      items: [
        "Letërnjoftimi / pasaporta",
        "Certifikata e lindjes (e jotja dhe fëmijëve)",
        "Certifikata e martesës",
        "Urdhëri i mbrojtjes (nëse e ke)",
      ],
    },
    {
      icon: "money",
      title: "Paratë",
      items: [
        "Para cash  sa të mundesh",
        "Karta bankare",
        "Çelësat e shtëpisë/veturës rezervë",
      ],
    },
    {
      icon: "bag",
      title: "Çanta e gatshme",
      items: [
        "Rroba për 2–3 ditë",
        "Ilaçet e nevojshme",
        "Karikues telefoni",
        "Lodra e vogël për fëmijën",
      ],
    },
    {
      icon: "phone",
      title: "Kontaktet",
      items: [
        "Linja SOS nacionale: 15-315",
        "SOS mobile: 070 141 700",
        "Ndihmë ligjore falas: 0800 44 222",
        "Emri i personit që i beson",
        "Adresa ku mund të shkosh",
      ],
    },
  ],

  // Hotline names
  hotlineNames: {
    "police": { name: "Policia, Urgjence", available: "24/7" },
    "sos-crisis": { name: "SOS Nacionale, Qendra e Krizes", available: "24/7" },
    "sos-mobile": { name: "SOS Mobile Nacionale (NCGE)", available: "24/7" },
    "sos-ozs": { name: "SOS Nacionale, OZS", available: "24/7" },
    "ambulance": { name: "Ambulanca", available: "24/7" },
    "lastrada": { name: "Open Gate, Anti-trafikim", available: "24/7" },
    "helsinki-legal": { name: "Komiteti i Helsinkit, Ndihme Ligjore", available: "Falas" },
    "helsinki-safe": { name: "Shtepia e Sigurt, Helsinki", available: "24/7" },
    "ese-legal": { name: "ESE, Ndihme Ligjore", available: "E hene - E premte" },
    "megjashi": { name: "Alo Bushavko, Femije", available: "24/7" },
  },

  // Documentation guide
  docGuide: {
    title: "Si te dokumentosh dhunen",
    subtitle: "Mblidh prova per mbrojtjen tende. Cdo prove qe ruan te ndihmon.",
    sections: [
      {
        title: "Fotografo lendimet",
        items: [
          "Bej foto te qarta te lendimeve menjehere pas dhunes",
          "Fotografo nga afer dhe nga larg",
          "Sigurohu qe data dhe ora jane te dukshme ne foto",
          "Ruaji ne nje vend te sigurt (email, cloud, ose te nje person i besueshem)",
        ],
      },
      {
        title: "Ruaj mesazhet",
        items: [
          "Mos fshi mesazhet kercenuese ose abuzive",
          "Bej screenshot te bisedave",
          "Ruaj email-at kercenuese",
          "Ruaj mesazhet zanore nese ka",
        ],
      },
      {
        title: "Mbaj ditar",
        items: [
          "Shkruaj daten, oren dhe vendin e cdo incidenti",
          "Pershkruaj se cfare ndodhi me detaje",
          "Shenjo nese ka pasur deshmitare",
          "Shenjo nese ke shkuar te mjeku ose policia",
        ],
      },
      {
        title: "Provat mjekesore",
        items: [
          "Shko te mjeku pas cdo incidenti",
          "Kerko raport mjekesor te detajuar",
          "Ruaj kopje te te gjitha raporteve",
          "Fotografo receta dhe rezultatet",
        ],
      },
    ],
    callToAction: "Kur te jesh gati, keto prova do te ndihmojne per:",
    purposes: [
      "Paraqitje te ankeses ne polici",
      "Kerkese per urdher mbrojtjeje ne gjykate",
      "Ndihme ligjore falas nga organizatat",
    ],
  },

  // Organization descriptions (keyed by org name for lookup)
  orgs: {
    "crisis-center": {
      name: "Qendra e Krizës 'Shpresë'",
      type: "OJQ  Linja SOS & strehim krize",
      desc: "Linja SOS nacionale 24/7 për viktimat e dhunës në familje; strehim krize 24–48 orë për gra dhe fëmijë; mbështetje psikosociale; këshillim ligjor.",
    },
    "mwrc": {
      name: "Qendra e Grave Maqedonase  Strehimorja (MWRC)",
      type: "OJQ  Strehimore & ndihmë ligjore",
      desc: "Strehim për gra dhe fëmijë viktima të dhunës; akomodim falas, ushqim, mbështetje mjekësore, psikosociale dhe ndihmë ligjore.",
    },
    "ncge": {
      name: "Këshilli Nacional për Barazi Gjinore (NCGE)",
      type: "Rrjet OJQ  Linja SOS mobile nacionale",
      desc: "Linja SOS mobile falas 24/7 për gra viktima të dhunës në familje dhe dhunës gjinore; këshillim, informim dhe referim.",
    },
    "ozs": {
      name: "Organizata e Grave të Qytetit të Shkupit (OZS)",
      type: "OJQ  Linja SOS & strehim i përkohshëm",
      desc: "Linja SOS nacionale 24 orë; identifikim i rasteve; mbështetje profesionale dhe psikosociale; strehim i përkohshëm i sigurt.",
    },
    "lastrada": {
      name: "Open Gate – La Strada Maqedoni",
      type: "OJQ  Anti-trafikim & dhunë seksuale",
      desc: "Linja SOS 24/7; strehim afatgjatë; mbështetje mjekësore, ligjore, psikosociale dhe profesionale për viktimat e trafikimit dhe dhunës seksuale.",
    },
    "helsinki": {
      name: "Komiteti i Helsinkit  Ndihmë Ligjore & Shtëpi e Sigurt",
      type: "OJQ  Ndihmë ligjore & shtëpi e sigurt",
      desc: "Ndihmë ligjore falas përfshirë mbrojtje nga dhuna në familje; Shtëpi e Sigurt me strehim të përkohshëm në raste krize dhe dhune.",
    },
    "network": {
      name: "Rrjeti Nacional  Zëri kundër Dhunës",
      type: "Rrjet OJQ  Koordinim & politika",
      desc: "Rrjet ombrellë i 20+ OJQ-ve; koordinon shërbime, avokaci dhe trajnime; mirëmban lista online të strehimoreve dhe linjave SOS në mbarë vendin.",
    },
    "ese": {
      name: "ESE  Shoqata për Emancipim",
      type: "OJQ  Ndihmë ligjore & psikologjike",
      desc: "Ndihmë ligjore falas, përfaqësim juridik dhe ndihmë psikologjike për gratë që përjetojnë dhunë në familje.",
    },
    "hera": {
      name: "HERA  Shëndet dhe Kërkime",
      type: "OJQ  Shëndet riprodhues & dhunë gjinore",
      desc: "Shërbime falas dhe konfidenciale të shëndetit riprodhues; mbështetje për të mbijetuarat e dhunës gjinore.",
    },
    "mlsp": {
      name: "Ministria e Punës dhe Politikës Sociale",
      type: "Institucional  Politika & mbikëqyrje",
      desc: "Përgjegjëse për politikat dhe legjislacionin për mbrojtjen nga dhuna; regjistron dhe mbikëqyr shërbimet e specializuara dhe strehimoret.",
    },
    "social-work-skopje": {
      name: "Qendra Ndërkomunale për Punë Sociale  Shkup",
      type: "Institucional  Punë sociale & mbrojtje",
      desc: "Qendra publike e punës sociale; menaxhon rastet e dhunës në familje; njësi të dedikuara për mbrojtje nga dhuna dhe ekip emergjent.",
    },
    "megjashi": {
      name: "Ambasada e Parë e Fëmijëve  Megjashi",
      type: "OJQ  Linja SOS për fëmijë",
      desc: "Linja konfidenciale 24/7 për fëmijë dhe të rinj për të folur rreth dhunës, abuzimit dhe problemeve të tjera.",
    },
    "albanian-women-forum": {
      name: "Forumi i Gruas Shqiptare",
      type: "OJQ lokale  Avokaci & këshillim",
      desc: "Avokaci, dhunë ndaj grave, kujdes psikosocial, shëndet i grave.",
    },
    "albanian-women-gostivar": {
      name: "Bashkimi i Grave Shqiptare  Dega Gostivar",
      type: "OJQ lokale  Këshillim & aktivitete",
      desc: "Fokus: statusi, roli dhe pozita sociale e gruas shqiptare.",
    },
    "jehona": {
      name: "Jehona  Shoqata e Pavarur e Grave",
      type: "OJQ lokale  Këshillim & kujdes psikosocial",
      desc: "Dhunë ndaj grave, kujdes psikosocial, shëndet i grave, ndihmë humanitare.",
    },
    "hz-majka": {
      name: "Hz. Majka  Organizata e Grave Kumanovë",
      type: "OJQ lokale  Aktivizëm & edukim",
      desc: "Aktivizëm, edukim, programe kundër dhunës ndaj grave.",
    },
    "sos-kumanovo": {
      name: "SOS Telefoni  Kumanovë",
      type: "OJQ lokale  Linja SOS",
      desc: "Linja SOS për gra dhe fëmijë viktima të dhunës. Informim, kërkim, kujdes psikosocial.",
    },
    "bisera": {
      name: "Bisera  Shoqata e Grave Ohër",
      type: "OJQ lokale  Linja SOS & këshillim",
      desc: "Linja SOS për gra dhe fëmijë që përjetojnë dhunë.",
    },
    "hajat": {
      name: "Hajat  Organizata e Grave Turke Strugë",
      type: "OJQ lokale  Këshillim & edukim",
      desc: "Programe për vajza dhe gra të reja, edukim, dhunë ndaj grave, shëndet.",
    },
    "oz-struga": {
      name: "Organizata e Grave  Strugë (OZ Strugë)",
      type: "OJQ lokale  Këshillim & aktivitete",
      desc: "Gra të reja, dhunë ndaj grave, kujdes psikosocial, shëndet i grave.",
    },
    "iskra": {
      name: "Iskra  Shoqata e Grave Manastir",
      type: "OJQ lokale  Linja SOS & këshillim",
      desc: "Linja SOS për gra dhe fëmijë. Shëndet, edukim, dhunë ndaj grave.",
    },
    "oz-bitola": {
      name: "Organizata e Grave Manastir",
      type: "OJQ lokale  Këshillim & trajnim",
      desc: "Trajnim, edukim, aktivitete humanitare, kujdes psikosocial, dhunë ndaj grave.",
    },
    "oz-sveti-nikole": {
      name: "Organizata e Grave  Sveti Nikollë",
      type: "OJQ lokale  Këshillim & aktivitete",
      desc: "Gra, fëmijë dhe të rinj; dhunë ndaj grave, kujdes psikosocial, shëndet.",
    },
    "oz-pehcevo": {
      name: "Organizata e Grave  Pehçevë",
      type: "OJQ lokale  Këshillim & aktivitete",
      desc: "Të drejtat e grave, barazi, edukim, dhunë ndaj grave, shëndet.",
    },
    "roza": {
      name: "Roza  Organizata e Grave Rankovce",
      type: "OJQ lokale  Këshillim & aktivitete",
      desc: "Të drejtat e grave, dhunë ndaj grave, kujdes psikosocial, shëndet, mjedis.",
    },
    "zhena": {
      name: "Shoqata 'Zhena'  Samokov",
      type: "OJQ lokale  Këshillim & aktivitete",
      desc: "Aktivizëm, kërkim, dhunë ndaj grave, kujdes psikosocial, shëndet.",
    },
  },
} as const;
