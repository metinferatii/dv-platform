export default {
  meta: {
    title: "Mira - Podrška protiv nasilja u porodici",
    description: "Platforma za podršku protiv nasilja u porodici u Sjevernoj Makedoniji.",
  },

  nav: {
    home: "Početna",
    guide: "Koraci",
    resources: "Pomoć",
    hotlines: "Pozovi",
    doc: "Dokumentuj",
    safety: "Sigurnost",
  },

  exit: "Brzi izlaz",

  home: {
    headline: "Nisi sam/a.",
    subtitle: "Platforma za podršku protiv nasilja u porodici u Sjevernoj Makedoniji.",
    emergencyLabel: "Hitno?",
    emergencyAction: "Pozovi 192 odmah",
    sosLabel: "Nacionalna SOS linija",
    sosNumber: "15-315 (0-24)",
    cardGuide: "Šta da radim sada?",
    cardGuideDesc: "Vodič korak po korak",
    cardResources: "Pronađi pomoć blizu mene",
    cardSafety: "Plan sigurnosti",
    cardSafetyDesc: "Pripremi se za sigurno napuštanje",
    cardHotlines: "Svi telefoni za pomoć",
    privacy: "Ova stranica ne čuva podatke. Nema kolačića.",
    privacyHistory: "Historija pretraživača se može obrisati.",
    providerCTA: "Ste organizacija ili profesionalac? Doprinesite platformi \u2192",
  },

  contribute: {
    title: "Doprinesite platformi",
    subtitle: "Ako ste organizacija, terapeut, savjetnik ili drugi pružalac usluga, popunite formular ispod da biste bili dodani na platformu.",
    formNotice: "Vaši podaci će biti provjereni prije dodavanja na platformu.",
    fields: {
      orgName: "Naziv organizacije",
      orgType: "Vrsta organizacije",
      orgTypeOptions: {
        ngo: "NVO",
        institution: "Državna institucija",
        ngoNetwork: "Mreža NVO",
        localNgo: "Lokalna NVO za žene",
      },
      city: "Grad",
      address: "Adresa",
      phones: "Telefonski brojevi",
      phonesHint: "Dodajte svaki broj u novi red",
      email: "E-pošta",
      website: "Web stranica",
      categories: "Usluge koje nudite",
      description: "Kratak opis usluga",
      descriptionHint: "Opišite usluge koje pružate (2-3 rečenice)",
      contactPerson: "Kontakt osoba",
      availability: "Radno vrijeme",
      availabilityHint: "npr. 0-24, Ponedeljak - Petak 9-17",
      verification: "Kako možemo provjeriti ove informacije?",
      submit: "Pošalji",
      success: "Hvala! Vaši podaci su uspješno poslani. Kontaktirat ćemo vas nakon verifikacije.",
    },
  },

  categories: {
    all: "Sve",
    shelter: "Sklonište",
    sos: "SOS linija",
    legal: "Pravna pomoć",
    psycho: "Psihološka podrška",
  },

  resources: {
    title: "Pronađi pomoć",
    organizationsIn: "organizacija u",
    cities: "gradova",
  },

  guide: {
    title: "Šta da radim sada?",
    subtitle: "Prati ove korake, jedan po jedan, svojim tempom.",
  },

  hotlines: {
    title: "Telefoni za pomoć",
    subtitle: "Klikni za direktan poziv",
    warning: "Ako neko kontroliše tvoj telefon, pozovi sa tuđeg telefona ili javne govornice.",
    warningLabel: "Pažnja:",
  },

  safety: {
    title: "Plan sigurnosti",
    subtitle: "Pripremi ove stvari unaprijed. Svako polje koje označiš je korak ka sigurnosti.",
    steps: "koraka",
  },

  guideSteps: [
    {
      num: "01",
      title: "Jesi li sigurna sada?",
      subtitle: "Jesi li u neposrednoj opasnosti?",
      content: "Ako si sada u opasnosti, pozovi policiju na 192 ili napusti kuću. Idi kod komšija, porodice ili u sklonište. Ne brini o stvarima, tvoja sigurnost je najvažnija.",
      action: "Pozovi 192 odmah",
      actionType: "emergency" as const,
    },
    {
      num: "02",
      title: "Dokumentuj nasilje",
      subtitle: "Prikupi dokaze za svoju zaštitu",
      content: "Fotografiši povrede. Sačuvaj prijeteće poruke. Zapiši datume i događaje. Ovo će pomoći kada podnosiš prijavu ili tražiš zaštitnu mjeru.",
      action: "Kako dokumentovati",
      actionType: "info" as const,
    },
    {
      num: "03",
      title: "Potraži pravnu pomoć",
      subtitle: "Imaš prava, iskoristi ih",
      content: "Možeš dobiti zaštitnu mjeru bez advokata. Idi u najbliži osnovni sud. ESE nudi besplatnu pravnu pomoć (02 3298 295). Helsinški komitet ima besplatnu liniju: 0800 44 222.",
      action: "Pogledaj organizacije",
      actionType: "navigate" as const,
    },
    {
      num: "04",
      title: "Plan sigurnosti",
      subtitle: "Pripremi se za sigurno napuštanje",
      content: "Drži spremnu torbu sa dokumentima, novcem i odjećom. Reci nekome kome vjeruješ gdje ćeš ići. Nauči napamet brojeve skloništa.",
      action: "Napravi plan sigurnosti",
      actionType: "navigate" as const,
    },
  ],

  safetySteps: [
    {
      icon: "doc",
      title: "Dokumenti",
      items: [
        "Lična karta / pasoš",
        "Rodni list (tvoj i dječiji)",
        "Vjenčani list",
        "Zaštitna mjera (ako imaš)",
      ],
    },
    {
      icon: "money",
      title: "Novac",
      items: [
        "Gotovina, koliko možeš",
        "Bankovna kartica",
        "Rezervni ključevi od kuće/auta",
      ],
    },
    {
      icon: "bag",
      title: "Spremna torba",
      items: [
        "Odjeća za 2-3 dana",
        "Potrebni lijekovi",
        "Punjač za telefon",
        "Mala igračka za dijete",
      ],
    },
    {
      icon: "phone",
      title: "Kontakti",
      items: [
        "Nacionalna SOS linija: 15-315",
        "SOS mobilni: 070 141 700",
        "Besplatna pravna pomoć: 0800 44 222",
        "Ime osobe kojoj vjeruješ",
        "Adresa gdje možeš otići",
      ],
    },
  ],

  hotlineNames: {
    "police": { name: "Policija, Hitno", available: "0-24" },
    "sos-crisis": { name: "Nacionalna SOS, Krizni centar", available: "0-24" },
    "sos-mobile": { name: "Nacionalna mobilna SOS (NCGE)", available: "0-24" },
    "sos-ozs": { name: "Nacionalna SOS, OZS", available: "0-24" },
    "ambulance": { name: "Hitna pomoć", available: "0-24" },
    "lastrada": { name: "Open Gate, Trgovina ljudima", available: "0-24" },
    "helsinki-legal": { name: "Helsinški komitet, Pravna pomoć", available: "Besplatno" },
    "helsinki-safe": { name: "Sigurna kuća, Helsinki", available: "0-24" },
    "ese-legal": { name: "ESE, Pravna pomoć", available: "Pon - Pet" },
    "megjashi": { name: "Alo Bušavko, Djeca", available: "0-24" },
  },

  docGuide: {
    title: "Kako dokumentovati nasilje",
    subtitle: "Prikupi dokaze za svoju zaštitu. Svaki dokaz koji sačuvaš pomaže.",
    sections: [
      {
        title: "Fotografiši povrede",
        items: [
          "Napravi jasne fotografije povreda odmah nakon nasilja",
          "Fotografiši izbliza i iz daljine",
          "Osiguraj da su datum i vrijeme vidljivi na fotografiji",
          "Sačuvaj na sigurnom mjestu (e-mail, oblak ili kod osobe od povjerenja)",
        ],
      },
      {
        title: "Sačuvaj poruke",
        items: [
          "Ne briši prijeteće ili uvredljive poruke",
          "Napravi snimku ekrana razgovora",
          "Sačuvaj prijeteće e-mailove",
          "Sačuvaj govorne poruke ako ih ima",
        ],
      },
      {
        title: "Vodi dnevnik",
        items: [
          "Zapiši datum, vrijeme i mjesto svakog incidenta",
          "Opiši šta se desilo sa detaljima",
          "Zabilježi da li je bilo svjedoka",
          "Zabilježi da li si išla kod ljekara ili u policiju",
        ],
      },
      {
        title: "Medicinski dokazi",
        items: [
          "Idi kod ljekara nakon svakog incidenta",
          "Zatraži detaljan medicinski izvještaj",
          "Sačuvaj kopije svih izvještaja",
          "Fotografiši recepte i rezultate",
        ],
      },
    ],
    callToAction: "Kada budeš spremna, ovi dokazi će pomoći za:",
    purposes: [
      "Podnošenje prijave u policiji",
      "Traženje zaštitne mjere na sudu",
      "Besplatnu pravnu pomoć od organizacija",
    ],
  },

  orgs: {
    "crisis-center": {
      name: "Krizni centar 'Nadež'",
      type: "NVO - SOS linija i krizno sklonište",
      desc: "Nacionalna SOS linija 0-24 za žrtve nasilja u porodici; krizno sklonište 24-48 sati za žene i djecu; psihosocijalna podrška; pravno savjetovanje.",
    },
    "mwrc": {
      name: "Makedonski centar za prava žena - Sklonište (MWRC)",
      type: "NVO - Sklonište i pravna pomoć",
      desc: "Sklonište za žene i djecu žrtve nasilja; besplatan smještaj, hrana, medicinska, psihosocijalna podrška i pravna pomoć.",
    },
    "ncge": {
      name: "Nacionalni savjet za rodnu ravnopravnost (NCGE)",
      type: "Mreža NVO - Nacionalna mobilna SOS linija",
      desc: "Besplatna mobilna SOS linija 0-24 za žene žrtve porodičnog i rodnog nasilja; savjetovanje, informisanje i upućivanje.",
    },
    "ozs": {
      name: "Organizacija žena grada Skoplja (OZS)",
      type: "NVO - SOS linija i privremeno sklonište",
      desc: "Nacionalna SOS linija 24 sata; identifikacija slučajeva; profesionalna i psihosocijalna podrška; privremeno sigurno sklonište.",
    },
    "lastrada": {
      name: "Open Gate - La Strada Makedonija",
      type: "NVO - Trgovina ljudima i seksualno nasilje",
      desc: "SOS linija 0-24; dugoročno sklonište; medicinska, pravna, psihosocijalna i profesionalna podrška za žrtve trgovine ljudima i seksualnog nasilja.",
    },
    "helsinki": {
      name: "Helsinški komitet - Pravna pomoć i Sigurna kuća",
      type: "NVO - Pravna pomoć i sigurna kuća",
      desc: "Besplatna pravna pomoć uključujući zaštitu od nasilja u porodici; Sigurna kuća sa privremenim smještajem u kriznim situacijama.",
    },
    "network": {
      name: "Nacionalna mreža - Glas protiv nasilja",
      type: "Mreža NVO - Koordinacija i politike",
      desc: "Mreža od 20+ organizacija; koordinira usluge, zagovaranje i obuke; održava online liste skloništa i SOS linija širom zemlje.",
    },
    "ese": {
      name: "ESE - Udruženje za emancipaciju",
      type: "NVO - Pravna i psihološka pomoć",
      desc: "Besplatna pravna pomoć, pravno zastupanje i psihološka pomoć za žene koje doživljavaju porodično nasilje.",
    },
    "hera": {
      name: "HERA - Zdravlje i istraživanje",
      type: "NVO - Reproduktivno zdravlje i rodno nasilje",
      desc: "Besplatne i povjerljive usluge reproduktivnog zdravlja; podrška za preživjele rodnog nasilja.",
    },
    "mlsp": {
      name: "Ministarstvo rada i socijalne politike",
      type: "Institucija - Politike i nadzor",
      desc: "Odgovorno za politike i zakonodavstvo o zaštiti od nasilja; registruje i nadgleda specijalizirane službe i skloništa.",
    },
    "social-work-skopje": {
      name: "Međuopštinski centar za socijalni rad - Skoplje",
      type: "Institucija - Socijalni rad i zaštita",
      desc: "Javni centar za socijalni rad; upravlja slučajevima porodičnog nasilja; posvećene jedinice za zaštitu i hitni tim.",
    },
    "megjashi": {
      name: "Prva dječija ambasada Međaši (Alo Bušavko)",
      type: "NVO - SOS linija za djecu",
      desc: "Povjerljiva linija 0-24 za djecu i mlade da razgovaraju o nasilju, zlostavljanju i drugim problemima.",
    },
    "albanian-women-forum": {
      name: "Forum albanskih žena",
      type: "Lokalna NVO - Zagovaranje i savjetovanje",
      desc: "Zagovaranje, nasilje nad ženama, psihosocijalna njega, zdravlje žena.",
    },
    "albanian-women-gostivar": {
      name: "Savez albanskih žena - Ogranak Gostivar",
      type: "Lokalna NVO - Savjetovanje i aktivnosti",
      desc: "Fokus: status, uloga i socijalni položaj albanske žene.",
    },
    "jehona": {
      name: "Jehona - Nezavisno udruženje žena",
      type: "Lokalna NVO - Savjetovanje i psihosocijalna njega",
      desc: "Nasilje nad ženama, psihosocijalna njega, zdravlje žena, humanitarna pomoć.",
    },
    "hz-majka": {
      name: "Hz. Majka - Organizacija žena Kumanovo",
      type: "Lokalna NVO - Aktivizam i edukacija",
      desc: "Aktivizam, edukacija, programi protiv nasilja nad ženama.",
    },
    "sos-kumanovo": {
      name: "SOS Telefon - Kumanovo",
      type: "Lokalna NVO - SOS linija",
      desc: "SOS linija za žene i djecu žrtve nasilja. Informisanje, istraživanje, psihosocijalna njega.",
    },
    "bisera": {
      name: "Bisera - Udruženje žena Ohrid",
      type: "Lokalna NVO - SOS linija i savjetovanje",
      desc: "SOS linija za žene i djecu koja doživljavaju nasilje.",
    },
    "hajat": {
      name: "Hajat - Organizacija turskih žena Struga",
      type: "Lokalna NVO - Savjetovanje i edukacija",
      desc: "Programi za djevojke i mlade žene, edukacija, nasilje nad ženama, zdravlje.",
    },
    "oz-struga": {
      name: "Organizacija žena - Struga",
      type: "Lokalna NVO - Savjetovanje i aktivnosti",
      desc: "Mlade žene, nasilje nad ženama, psihosocijalna njega, zdravlje žena.",
    },
    "iskra": {
      name: "Iskra - Udruženje žena Bitola",
      type: "Lokalna NVO - SOS linija i savjetovanje",
      desc: "SOS linija za žene i djecu. Zdravlje, edukacija, nasilje nad ženama.",
    },
    "oz-bitola": {
      name: "Organizacija žena Bitola",
      type: "Lokalna NVO - Savjetovanje i obuke",
      desc: "Obuke, edukacija, humanitarne aktivnosti, psihosocijalna njega, nasilje nad ženama.",
    },
    "oz-sveti-nikole": {
      name: "Organizacija žena - Sveti Nikole",
      type: "Lokalna NVO - Savjetovanje i aktivnosti",
      desc: "Žene, djeca i mladi; nasilje nad ženama, psihosocijalna njega, zdravlje.",
    },
    "oz-pehcevo": {
      name: "Organizacija žena - Pehčevo",
      type: "Lokalna NVO - Savjetovanje i aktivnosti",
      desc: "Prava žena, jednakost, edukacija, nasilje nad ženama, zdravlje.",
    },
    "roza": {
      name: "Roza - Organizacija žena Rankovce",
      type: "Lokalna NVO - Savjetovanje i aktivnosti",
      desc: "Prava žena, nasilje nad ženama, psihosocijalna njega, zdravlje, okoliš.",
    },
    "zhena": {
      name: "Udruženje 'Žena' - Samokov",
      type: "Lokalna NVO - Savjetovanje i aktivnosti",
      desc: "Aktivizam, istraživanje, nasilje nad ženama, psihosocijalna njega, zdravlje.",
    },
  },
} as const;
