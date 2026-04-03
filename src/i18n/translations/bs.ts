export default {
  meta: {
    title: "Informacije - Podrska protiv nasilja u porodici",
    description: "Platforma za podrsku protiv nasilja u porodici u Sjevernoj Makedoniji.",
  },

  nav: {
    home: "Pocetna",
    guide: "Koraci",
    resources: "Pomoc",
    hotlines: "Pozovi",
    doc: "Dokumentuj",
    safety: "Sigurnost",
  },

  exit: "Brzi izlaz",

  home: {
    headline: "Nisi sama.",
    subtitle: "Platforma za podrsku protiv nasilja u porodici u Sjevernoj Makedoniji.",
    emergencyLabel: "Hitno?",
    emergencyAction: "Pozovi 192 odmah",
    sosLabel: "Nacionalna SOS linija",
    sosNumber: "15-315 (0-24)",
    cardGuide: "Sta da radim sada?",
    cardGuideDesc: "Vodic korak po korak",
    cardResources: "Pronadji pomoc blizu mene",
    cardSafety: "Plan sigurnosti",
    cardSafetyDesc: "Pripremi se za sigurno napustanje",
    cardHotlines: "Svi telefoni za pomoc",
    privacy: "Ova stranica ne cuva podatke. Nema kolacica.",
    privacyHistory: "Historija pretrazivaca se moze obrisati.",
  },

  resources: {
    title: "Pronadji pomoc",
    organizationsIn: "organizacija u",
    cities: "gradova",
  },

  guide: {
    title: "Sta da radim sada?",
    subtitle: "Prati ove korake, jedan po jedan, svojim tempom.",
  },

  hotlines: {
    title: "Telefoni za pomoc",
    subtitle: "Klikni za direktan poziv",
    warning: "Ako neko kontrolise tvoj telefon, pozovi sa tudjeg telefona ili javne govornice.",
    warningLabel: "Paznja:",
  },

  safety: {
    title: "Plan sigurnosti",
    subtitle: "Pripremi ove stvari unaprijed. Svako polje koje oznacis je korak ka sigurnosti.",
    steps: "koraka",
  },

  guideSteps: [
    {
      num: "01",
      title: "Jesi li sigurna sada?",
      subtitle: "Jesi li u neposrednoj opasnosti?",
      content: "Ako si sada u opasnosti, pozovi policiju na 192 ili napusti kucu. Idi kod komsija, porodice ili u skloniste. Ne brini o stvarima, tvoja sigurnost je najvaznija.",
      action: "Pozovi 192 odmah",
      actionType: "emergency" as const,
    },
    {
      num: "02",
      title: "Dokumentuj nasilje",
      subtitle: "Prikupi dokaze za svoju zastitu",
      content: "Fotografisi povrede. Sacuvaj prijetece poruke. Zapisi datume i dogadjaje. Ovo ce pomoci kada podnosisss prijavu ili trazis zastitnu mjeru.",
      action: "Kako dokumentovati",
      actionType: "info" as const,
    },
    {
      num: "03",
      title: "Potrazi pravnu pomoc",
      subtitle: "Imas prava, iskoristi ih",
      content: "Mozes dobiti zastitnu mjeru bez advokata. Idi u najblizi osnovni sud. ESE nudi besplatnu pravnu pomoc (02 3298 295). Helsinski komitet ima besplatnu liniju: 0800 44 222.",
      action: "Pogledaj organizacije",
      actionType: "navigate" as const,
    },
    {
      num: "04",
      title: "Plan sigurnosti",
      subtitle: "Pripremi se za sigurno napustanje",
      content: "Drzi spremnu torbu sa dokumentima, novcem i odjecom. Reci nekome kome vjerujes gdje ces ici. Nauci napamet brojeve sklosnista.",
      action: "Napravi plan sigurnosti",
      actionType: "navigate" as const,
    },
  ],

  safetySteps: [
    {
      icon: "doc",
      title: "Dokumenti",
      items: [
        "Licna karta / pasos",
        "Rodni list (tvoj i djeciji)",
        "Vjencani list",
        "Zastitna mjera (ako imas)",
      ],
    },
    {
      icon: "money",
      title: "Novac",
      items: [
        "Gotovina, koliko mozes",
        "Bankovna kartica",
        "Rezervni kljucevi od kuce/auta",
      ],
    },
    {
      icon: "bag",
      title: "Spremna torba",
      items: [
        "Odjeca za 2-3 dana",
        "Potrebni lijekovi",
        "Punjac za telefon",
        "Mala igracka za dijete",
      ],
    },
    {
      icon: "phone",
      title: "Kontakti",
      items: [
        "Nacionalna SOS linija: 15-315",
        "SOS mobilni: 070 141 700",
        "Besplatna pravna pomoc: 0800 44 222",
        "Ime osobe kojoj vjerujes",
        "Adresa gdje mozes otici",
      ],
    },
  ],

  hotlineNames: {
    "police": { name: "Policija, Hitno", available: "0-24" },
    "sos-crisis": { name: "Nacionalna SOS, Krizni centar", available: "0-24" },
    "sos-mobile": { name: "Nacionalna mobilna SOS (NCGE)", available: "0-24" },
    "sos-ozs": { name: "Nacionalna SOS, OZS", available: "0-24" },
    "ambulance": { name: "Hitna pomoc", available: "0-24" },
    "lastrada": { name: "Open Gate, Trgovina ljudima", available: "0-24" },
    "helsinki-legal": { name: "Helsinski komitet, Pravna pomoc", available: "Besplatno" },
    "helsinki-safe": { name: "Sigurna kuca, Helsinki", available: "0-24" },
    "ese-legal": { name: "ESE, Pravna pomoc", available: "Pon - Pet" },
    "megjashi": { name: "Alo Busavko, Djeca", available: "0-24" },
  },

  docGuide: {
    title: "Kako dokumentovati nasilje",
    subtitle: "Prikupi dokaze za svoju zastitu. Svaki dokaz koji sacuvas pomaze.",
    sections: [
      {
        title: "Fotografisi povrede",
        items: [
          "Napravi jasne fotografije povreda odmah nakon nasilja",
          "Fotografisi izbliza i iz daljine",
          "Osiguraj da su datum i vrijeme vidljivi na fotografiji",
          "Sacuvaj na sigurnom mjestu (e-mail, oblak ili kod osobe od povjerenja)",
        ],
      },
      {
        title: "Sacuvaj poruke",
        items: [
          "Ne brisi prijetece ili uvredljive poruke",
          "Napravi snimku ekrana razgovora",
          "Sacuvaj prijetece e-mailove",
          "Sacuvaj govorne poruke ako ih ima",
        ],
      },
      {
        title: "Vodi dnevnik",
        items: [
          "Zapisi datum, vrijeme i mjesto svakog incidenta",
          "Opisi sta se desilo sa detaljima",
          "Zabiljezi da li je bilo svjedoka",
          "Zabiljezi da li si isla kod ljekara ili u policiju",
        ],
      },
      {
        title: "Medicinski dokazi",
        items: [
          "Idi kod ljekara nakon svakog incidenta",
          "Zatrazi detaljan medicinski izvjestaj",
          "Sacuvaj kopije svih izvjestaja",
          "Fotografisi recepte i rezultate",
        ],
      },
    ],
    callToAction: "Kada budes spremna, ovi dokazi ce pomoci za:",
    purposes: [
      "Podnosenje prijave u policiji",
      "Trazenje zastitne mjere na sudu",
      "Besplatnu pravnu pomoc od organizacija",
    ],
  },

  orgs: {
    "crisis-center": {
      name: "Krizni centar 'Nadez'",
      type: "NVO - SOS linija i krizno skloniste",
      desc: "Nacionalna SOS linija 0-24 za zrtve nasilja u porodici; krizno skloniste 24-48 sati za zene i djecu; psihosocijalna podrska; pravno savjetovanje.",
    },
    "mwrc": {
      name: "Makedonski centar za prava zena - Skloniste (MWRC)",
      type: "NVO - Skloniste i pravna pomoc",
      desc: "Skloniste za zene i djecu zrtve nasilja; besplatan smjestaj, hrana, medicinska, psihosocijalna podrska i pravna pomoc.",
    },
    "ncge": {
      name: "Nacionalni savjet za rodnu ravnopravnost (NCGE)",
      type: "Mreza NVO - Nacionalna mobilna SOS linija",
      desc: "Besplatna mobilna SOS linija 0-24 za zene zrtve porodicnog i rodnog nasilja; savjetovanje, informisanje i upucivanje.",
    },
    "ozs": {
      name: "Organizacija zena grada Skoplja (OZS)",
      type: "NVO - SOS linija i privremeno skloniste",
      desc: "Nacionalna SOS linija 24 sata; identifikacija slucajeva; profesionalna i psihosocijalna podrska; privremeno sigurno skloniste.",
    },
    "lastrada": {
      name: "Open Gate - La Strada Makedonija",
      type: "NVO - Trgovina ljudima i seksualno nasilje",
      desc: "SOS linija 0-24; dugorocno skloniste; medicinska, pravna, psihosocijalna i profesionalna podrska za zrtve trgovine ljudima i seksualnog nasilja.",
    },
    "helsinki": {
      name: "Helsinski komitet - Pravna pomoc i Sigurna kuca",
      type: "NVO - Pravna pomoc i sigurna kuca",
      desc: "Besplatna pravna pomoc ukljucujuci zastitu od nasilja u porodici; Sigurna kuca sa privremenim smjestajem u kriznim situacijama.",
    },
    "network": {
      name: "Nacionalna mreza - Glas protiv nasilja",
      type: "Mreza NVO - Koordinacija i politike",
      desc: "Mreza od 20+ organizacija; koordinira usluge, zagovaranje i obuke; odrzava online liste sklonista i SOS linija sirom zemlje.",
    },
    "ese": {
      name: "ESE - Udruzenje za emancipaciju",
      type: "NVO - Pravna i psiholoska pomoc",
      desc: "Besplatna pravna pomoc, pravno zastupanje i psiholoska pomoc za zene koje dozivljavaju porodicno nasilje.",
    },
    "hera": {
      name: "HERA - Zdravlje i istrazivanje",
      type: "NVO - Reproduktivno zdravlje i rodno nasilje",
      desc: "Besplatne i povjerljive usluge reproduktivnog zdravlja; podrska za prezivjele rodnog nasilja.",
    },
    "mlsp": {
      name: "Ministarstvo rada i socijalne politike",
      type: "Institucija - Politike i nadzor",
      desc: "Odgovorno za politike i zakonodavstvo o zastiti od nasilja; registruje i nadgleda specijalizirane sluzbe i sklonista.",
    },
    "social-work-skopje": {
      name: "Medjuopstinski centar za socijalni rad - Skoplje",
      type: "Institucija - Socijalni rad i zastita",
      desc: "Javni centar za socijalni rad; upravlja slucajevima porodicnog nasilja; posvecene jedinice za zastitu i hitni tim.",
    },
    "megjashi": {
      name: "Prva djecija ambasada Medjasi (Alo Busavko)",
      type: "NVO - SOS linija za djecu",
      desc: "Povjerljiva linija 0-24 za djecu i mlade da razgovaraju o nasilju, zlostavljanju i drugim problemima.",
    },
    "albanian-women-forum": {
      name: "Forum albanskih zena",
      type: "Lokalna NVO - Zagovaranje i savjetovanje",
      desc: "Zagovaranje, nasilje nad zenama, psihosocijalna njega, zdravlje zena.",
    },
    "albanian-women-gostivar": {
      name: "Savez albanskih zena - Ogranak Gostivar",
      type: "Lokalna NVO - Savjetovanje i aktivnosti",
      desc: "Fokus: status, uloga i socijalni polozaj albanske zene.",
    },
    "jehona": {
      name: "Jehona - Nezavisno udruzenje zena",
      type: "Lokalna NVO - Savjetovanje i psihosocijalna njega",
      desc: "Nasilje nad zenama, psihosocijalna njega, zdravlje zena, humanitarna pomoc.",
    },
    "hz-majka": {
      name: "Hz. Majka - Organizacija zena Kumanovo",
      type: "Lokalna NVO - Aktivizam i edukacija",
      desc: "Aktivizam, edukacija, programi protiv nasilja nad zenama.",
    },
    "sos-kumanovo": {
      name: "SOS Telefon - Kumanovo",
      type: "Lokalna NVO - SOS linija",
      desc: "SOS linija za zene i djecu zrtve nasilja. Informisanje, istrazivanje, psihosocijalna njega.",
    },
    "bisera": {
      name: "Bisera - Udruzenje zena Ohrid",
      type: "Lokalna NVO - SOS linija i savjetovanje",
      desc: "SOS linija za zene i djecu koja dozivljavaju nasilje.",
    },
    "hajat": {
      name: "Hajat - Organizacija turskih zena Struga",
      type: "Lokalna NVO - Savjetovanje i edukacija",
      desc: "Programi za djevojke i mlade zene, edukacija, nasilje nad zenama, zdravlje.",
    },
    "oz-struga": {
      name: "Organizacija zena - Struga",
      type: "Lokalna NVO - Savjetovanje i aktivnosti",
      desc: "Mlade zene, nasilje nad zenama, psihosocijalna njega, zdravlje zena.",
    },
    "iskra": {
      name: "Iskra - Udruzenje zena Bitola",
      type: "Lokalna NVO - SOS linija i savjetovanje",
      desc: "SOS linija za zene i djecu. Zdravlje, edukacija, nasilje nad zenama.",
    },
    "oz-bitola": {
      name: "Organizacija zena Bitola",
      type: "Lokalna NVO - Savjetovanje i obuke",
      desc: "Obuke, edukacija, humanitarne aktivnosti, psihosocijalna njega, nasilje nad zenama.",
    },
    "oz-kriva-palanka": {
      name: "Organizacija zena - Kriva Palanka",
      type: "Lokalna NVO - Savjetovanje i aktivnosti",
      desc: "Prava zena, humanitarne aktivnosti, nasilje nad zenama, zdravlje.",
    },
    "oz-sveti-nikole": {
      name: "Organizacija zena - Sveti Nikole",
      type: "Lokalna NVO - Savjetovanje i aktivnosti",
      desc: "Zene, djeca i mladi; nasilje nad zenama, psihosocijalna njega, zdravlje.",
    },
    "oz-pehcevo": {
      name: "Organizacija zena - Pehcevo",
      type: "Lokalna NVO - Savjetovanje i aktivnosti",
      desc: "Prava zena, jednakost, edukacija, nasilje nad zenama, zdravlje.",
    },
    "roza": {
      name: "Roza - Organizacija zena Rankovce",
      type: "Lokalna NVO - Savjetovanje i aktivnosti",
      desc: "Prava zena, nasilje nad zenama, psihosocijalna njega, zdravlje, okolis.",
    },
    "zhena": {
      name: "Udruzenje 'Zena' - Samokov",
      type: "Lokalna NVO - Savjetovanje i aktivnosti",
      desc: "Aktivizam, istrazivanje, nasilje nad zenama, psihosocijalna njega, zdravlje.",
    },
  },
} as const;
