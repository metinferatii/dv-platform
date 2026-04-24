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
    verified: "Provjereno",
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
      content: "Možeš dobiti zaštitnu mjeru bez advokata. Idite u lokalnu kancelariju Ministarstva pravde. ESE nudi besplatnu pravnu pomoć (02 3298 295). Helsinški komitet ima besplatnu liniju: 0800 44 222.",
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

  // Legal
  legal: {
    lastUpdated: "Posljednje ažuriranje: April 2026",
    privacyLink: "Politika privatnosti",
    cookiesLink: "Politika kolačića",
    backHome: "Nazad na početnu",
    banner: {
      message: "Ova stranica koristi analitiku koja poštuje privatnost. Bez kolačića, bez praćenja, bez ličnih podataka.",
      accept: "U redu",
      more: "Saznaj više",
    },
    privacy: {
      title: "Politika privatnosti",
      subtitle: "Kako postupamo sa informacijama o posjetiteljima i onima koji daju doprinos.",
      sections: [
        {
          h: "1. O ovoj politici",
          p: "Ova Politika privatnosti objašnjava kako mira. obrađuje informacije o posjetiteljima ove web stranice. Obavezujemo se da ćemo štititi tvoju privatnost. Politika je izrađena u skladu sa Zakonom o zaštiti ličnih podataka Republike Sjeverne Makedonije i Općom uredbom o zaštiti podataka EU-a (GDPR).",
        },
        {
          h: "2. Ko smo mi",
          p: "mira. je nekomercijalna informativna platforma za osobe pogođene nasiljem u porodici u Sjevernoj Makedoniji. Ne prodajemo proizvode ili usluge. Ne prikazujemo reklame.",
        },
        {
          h: "3. Koje podatke obrađujemo",
          p: "Podatke svodimo na apsolutni minimum. Za posjetitelje: koristimo Simple Analytics, analitički servis koji poštuje privatnost i mjeri samo anonimne, skupne trendove (pregledi stranica, država, referentna stranica, pretraživač, veličina ekrana). Ne bilježi tvoju IP adresu, ne postavlja kolačiće i ne može te identifikovati. Za organizacije koje daju doprinos: ako popuniš obrazac za učešće, dobrovoljno nam dostavljaš naziv, vrstu, grad, adresu, brojeve telefona, email, web stranicu, usluge, opis, kontakt osobu, dostupnost i podatke za provjeru.",
        },
        {
          h: "4. Pravni osnov",
          p: "Za obrazac za učešće, pravni osnov je tvoja saglasnost, data prilikom slanja obrasca (član 6(1)(a) GDPR). Za analitiku, pravni osnov je naš legitimni interes za razumijevanje anonimnog prometa radi poboljšanja platforme (član 6(1)(f) GDPR). Ova obrada ne uključuje lične podatke.",
        },
        {
          h: "5. Kako koristimo podatke",
          p: "Podaci organizacija koriste se samo za provjeru i objavljivanje organizacije na platformi. Analitički podaci koriste se samo za razumijevanje anonimnih obrazaca prometa.",
        },
        {
          h: "6. Ko prima tvoje podatke",
          p: "Simple Analytics obrađuje anonimnu analitiku (simpleanalytics.com/privacy). FormSubmit dostavlja obrazac za učešće na našu email adresu (formsubmit.co/privacy). Tvoje podatke ne prodajemo, ne dijelimo i ne razmjenjujemo ni s jednom drugom trećom stranom.",
        },
        {
          h: "7. Koliko dugo čuvamo podatke",
          p: "Podaci organizacije čuvaju se dok je organizacija navedena na platformi, ili dok ne zatražiš brisanje. Anonimnu analitiku Simple Analytics čuva u zbirnom obliku prema svojoj politici čuvanja.",
        },
        {
          h: "8. Tvoja prava",
          p: "Prema Zakonu o zaštiti ličnih podataka i GDPR-u, imaš pravo pristupiti podacima koje čuvamo o tebi, tražiti ispravku netačnih podataka, tražiti brisanje, prigovoriti obradi, povući saglasnost u bilo kojem trenutku i podnijeti pritužbu Agenciji za zaštitu ličnih podataka Sjeverne Makedonije (azlp.mk).",
        },
        {
          h: "9. Sigurnost podataka",
          p: "Preduzimamo razumne tehničke i organizacione mjere za zaštitu podataka od neovlaštenog pristupa, izmjene, otkrivanja ili uništenja.",
        },
        {
          h: "10. Izmjene ove politike",
          p: "Ova politika može se povremeno ažurirati. Datum iznad prikazuje posljednje ažuriranje.",
        },
        {
          h: "11. Kontakt",
          p: "Za bilo kakva pitanja vezana za privatnost ili korištenje tvojih prava, kontaktiraj nas preko stranice za učešće.",
        },
      ],
    },
    cookies: {
      title: "Politika kolačića",
      subtitle: "Ova stranica ne koristi kolačiće.",
      sections: [
        {
          h: "1. Nema kolačića",
          p: "Ne postavljamo kolačiće, piksele za praćenje niti bilo kakve druge trajne identifikatore na tvoj uređaj u svrhu praćenja. Tvoja posjeta se ne povezuje ni sa kakvim identitetom.",
        },
        {
          h: "2. Analitika bez kolačića",
          p: "Koristimo Simple Analytics, analitički servis bez kolačića koji mjeri samo anonimne, skupne trendove (pregledi, država, referentna stranica, pretraživač, veličina ekrana). Ne postavlja kolačiće, ne prati te kroz druge stranice i ne može te identifikovati.",
        },
        {
          h: "3. Strogo potrebno spremište",
          p: "Ako zatvoriš obavijest o privatnosti, u local storage pretraživača spremamo malu oznaku kako se obavijest ne bi ponovo pojavljivala. Ovo je strogo potrebno da bi se zapamtila tvoja preferenca i ne zahtijeva saglasnost prema Zakonu o elektronskim komunikacijama Sjeverne Makedonije.",
        },
        {
          h: "4. Linkovi ka trećim stranama",
          p: "Kada klikneš na vanjske linkove ka web stranicama, brojevima telefona ili email adresama organizacija, ti servisi trećih strana mogu postaviti svoje kolačiće prema svojim politikama. Mi ih ne kontroliramo.",
        },
        {
          h: "5. Upravljanje kolačićima u pretraživaču",
          p: "Ako želiš blokirati ili obrisati kolačiće koje postavlja bilo koja stranica, to možeš učiniti u postavkama pretraživača. Uputstva su dostupna na stranicama pomoći tvog pretraživača.",
        },
        {
          h: "6. Historija pretraživača",
          p: "Tvoja posjeta ovoj stranici može se pojaviti u historiji pretraživača. Ako iz sigurnosnih razloga trebaš sakriti posjetu, obriši historiju nakon posjete ili koristi dugme 'Brzi izlaz' na vrhu stranice.",
        },
      ],
    },
  },
} as const;
