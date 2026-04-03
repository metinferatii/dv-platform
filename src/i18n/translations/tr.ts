export default {
  meta: {
    title: "Bilgi - Aile ici siddet destegi",
    description: "Kuzey Makedonya'da aile ici siddete karsi destek platformu.",
  },

  nav: {
    home: "Ana Sayfa",
    guide: "Adimlar",
    resources: "Yardim",
    hotlines: "Ara",
    doc: "Belgele",
    safety: "Guvenlik",
  },

  exit: "Hizli cikis",

  home: {
    headline: "Yalniz degilsin.",
    subtitle: "Kuzey Makedonya'da aile ici siddete karsi destek platformu.",
    emergencyLabel: "Acil durum?",
    emergencyAction: "192'yi simdi ara",
    sosLabel: "Ulusal SOS Hatti",
    sosNumber: "15-315 (7/24)",
    cardGuide: "Simdi ne yapmaliyim?",
    cardGuideDesc: "Adim adim rehber",
    cardResources: "Yakinimda yardim bul",
    cardSafety: "Guvenlik plani",
    cardSafetyDesc: "Guvenli ayrilmaya hazirlan",
    cardHotlines: "Tum yardim hatlari",
    privacy: "Bu sayfa veri saklamaz. Cerez yok.",
    privacyHistory: "Tarayici gecmisi silinebilir.",
  },

  resources: {
    title: "Yardim bul",
    organizationsIn: "kuruluslar",
    cities: "sehirde",
  },

  guide: {
    title: "Simdi ne yapmaliyim?",
    subtitle: "Bu adimlari izle, birer birer, kendi hizinda.",
  },

  hotlines: {
    title: "Yardim hatlari",
    subtitle: "Dogrudan aramak icin tikla",
    warning: "Birisi telefonunu kontrol ediyorsa, baska birinin telefonundan veya ankesorden ara.",
    warningLabel: "Dikkat:",
  },

  safety: {
    title: "Guvenlik plani",
    subtitle: "Bunlari onceden hazirla. Isaretledigin her kutu guvenlige dogru bir adim.",
    steps: "adim",
  },

  guideSteps: [
    {
      num: "01",
      title: "Simdi guvende misin?",
      subtitle: "Acil tehlikede misin?",
      content: "Simdi tehlikedeysen, 192'den polisi ara veya evden ayril. Komsula, aileye veya siginma evine git. Esyalarin icin endiselenmme, senin guvenligin en onemli.",
      action: "192'yi simdi ara",
      actionType: "emergency" as const,
    },
    {
      num: "02",
      title: "Siddeti belgele",
      subtitle: "Koruman icin kanit topla",
      content: "Yaralari fotografla. Tehdit mesajlarini kaydet. Tarihleri ve olaylari yaz. Bu, sikayet ederken veya koruma emri isterken yardimci olacak.",
      action: "Nasil belgelenir",
      actionType: "info" as const,
    },
    {
      num: "03",
      title: "Hukuki yardim iste",
      subtitle: "Haklarin var, kullan onlari",
      content: "Avukatsiz koruma emri alabilirsin. En yakin temel mahkemeye git. ESE ucretsiz hukuki yardim sunuyor (02 3298 295). Helsinki Komitesi'nin ucretsiz hatti: 0800 44 222.",
      action: "Kuruluslari gor",
      actionType: "navigate" as const,
    },
    {
      num: "04",
      title: "Guvenlik plani",
      subtitle: "Guvenli ayrilmaya hazirlan",
      content: "Belgeler, para ve kiyafetlerle hazir bir canta tut. Guvendigin birine nereye gidecegini soyle. Siginma evi numaralarini ezberle.",
      action: "Guvenlik plani olustur",
      actionType: "navigate" as const,
    },
  ],

  safetySteps: [
    {
      icon: "doc",
      title: "Belgeler",
      items: [
        "Kimlik karti / pasaport",
        "Dogum belgesi (senin ve cocuklarin)",
        "Evlilik cuzdani",
        "Koruma emri (varsa)",
      ],
    },
    {
      icon: "money",
      title: "Para",
      items: [
        "Nakit para, mumkun oldugunca",
        "Banka karti",
        "Yedek ev/araba anahtari",
      ],
    },
    {
      icon: "bag",
      title: "Hazir canta",
      items: [
        "2-3 gunluk kiyafet",
        "Gerekli ilaclar",
        "Telefon sarj aleti",
        "Cocuk icin kucuk oyuncak",
      ],
    },
    {
      icon: "phone",
      title: "Iletisim",
      items: [
        "Ulusal SOS hatti: 15-315",
        "SOS mobil: 070 141 700",
        "Ucretsiz hukuki yardim: 0800 44 222",
        "Guvendigin kisinin adi",
        "Gidebilecegin adres",
      ],
    },
  ],

  hotlineNames: {
    "police": { name: "Polis, Acil", available: "7/24" },
    "sos-crisis": { name: "Ulusal SOS, Kriz Merkezi", available: "7/24" },
    "sos-mobile": { name: "Ulusal Mobil SOS (NCGE)", available: "7/24" },
    "sos-ozs": { name: "Ulusal SOS, OZS", available: "7/24" },
    "ambulance": { name: "Ambulans", available: "7/24" },
    "lastrada": { name: "Open Gate, Insan Ticareti", available: "7/24" },
    "helsinki-legal": { name: "Helsinki Komitesi, Hukuki Yardim", available: "Ucretsiz" },
    "helsinki-safe": { name: "Guvenli Ev, Helsinki", available: "7/24" },
    "ese-legal": { name: "ESE, Hukuki Yardim", available: "Pazartesi - Cuma" },
    "megjashi": { name: "Alo Bushavko, Cocuklar", available: "7/24" },
  },

  docGuide: {
    title: "Siddeti nasil belgelenir",
    subtitle: "Koruman icin kanit topla. Sakladigin her kanit yardimci olur.",
    sections: [
      {
        title: "Yaralari fotografla",
        items: [
          "Siddetten hemen sonra yaralarin net fotograflarini cek",
          "Yakindan ve uzaktan fotografla",
          "Tarih ve saatin fotografta gorunur oldugundan emin ol",
          "Guvenli bir yerde sakla (e-posta, bulut veya guvendigin biri)",
        ],
      },
      {
        title: "Mesajlari kaydet",
        items: [
          "Tehdit veya taciz mesajlarini silme",
          "Konusmalarin ekran goruntusunu al",
          "Tehdit e-postalarini kaydet",
          "Sesli mesajlari kaydet (varsa)",
        ],
      },
      {
        title: "Gunluk tut",
        items: [
          "Her olayin tarihini, saatini ve yerini yaz",
          "Ne oldugunu ayrintili olarak anlat",
          "Tanik olup olmadigini not et",
          "Doktora veya polise gidip gitmedigini not et",
        ],
      },
      {
        title: "Tibbi kanitlar",
        items: [
          "Her olaydan sonra doktora git",
          "Ayrintili tibbi rapor iste",
          "Tum raporlarin kopyalarini sakla",
          "Recete ve sonuclari fotografla",
        ],
      },
    ],
    callToAction: "Hazir oldugunuzda, bu kanitlar sunlar icin yardimci olacak:",
    purposes: [
      "Polise sikayet basvurusu",
      "Mahkemeden koruma emri talebi",
      "Kuruluslardan ucretsiz hukuki yardim",
    ],
  },

  orgs: {
    "crisis-center": {
      name: "Kriz Merkezi 'Umut'",
      type: "STK - SOS hatti ve kriz siginagi",
      desc: "Aile ici siddet magdurlari icin 7/24 ulusal SOS hatti; kadin ve cocuklar icin 24-48 saat kriz siginagi; psikososyal destek; hukuki danismanlik.",
    },
    "mwrc": {
      name: "Makedonya Kadin Haklari Merkezi - Siginma Evi (MWRC)",
      type: "STK - Siginma evi ve hukuki destek",
      desc: "Siddet magduru kadin ve cocuklar icin siginma evi; ucretsiz konaklama, yemek, tibbi, psikososyal destek ve hukuki yardim.",
    },
    "ncge": {
      name: "Ulusal Toplumsal Cinsiyet Esitligi Konseyi (NCGE)",
      type: "STK agi - Ulusal mobil SOS hatti",
      desc: "Aile ici ve toplumsal cinsiyete dayali siddet magduru kadinlar icin 7/24 ucretsiz mobil SOS hatti; danismanlik, bilgilendirme ve yonlendirme.",
    },
    "ozs": {
      name: "Uskup Kadinlar Orgutu (OZS)",
      type: "STK - SOS hatti ve gecici siginma",
      desc: "24 saat ulusal SOS hatti; vaka tespiti; profesyonel ve psikososyal destek; gecici guvenli siginma.",
    },
    "lastrada": {
      name: "Open Gate - La Strada Makedonya",
      type: "STK - Insan ticareti ve cinsel siddet",
      desc: "7/24 SOS hatti; uzun sureli siginma evi; insan ticareti ve cinsel siddet magdurlari icin tibbi, hukuki, psikososyal ve mesleki destek.",
    },
    "helsinki": {
      name: "Helsinki Komitesi - Hukuki Yardim ve Guvenli Ev",
      type: "STK - Hukuki yardim ve guvenli ev",
      desc: "Aile ici siddetten koruma dahil ucretsiz hukuki yardim; kriz ve siddet durumlarinda gecici konaklama saglayan Guvenli Ev.",
    },
    "network": {
      name: "Ulusal Ag - Siddete Karsi Ses",
      type: "STK agi - Koordinasyon ve politika",
      desc: "20'den fazla sivil toplum kurulusundan olusan ag; hizmetleri, savunuculugu ve egitimi koordine eder; ulke genelinde siginma evleri ve SOS hatlari listesi tutar.",
    },
    "ese": {
      name: "ESE - Ozgurluk Dernegi",
      type: "STK - Hukuki ve psikolojik destek",
      desc: "Aile ici siddet yasayan kadinlar icin ucretsiz hukuki yardim, hukuki temsil ve psikolojik destek.",
    },
    "hera": {
      name: "HERA - Saglik ve Arastirma",
      type: "STK - Ureme sagligi ve toplumsal cinsiyet siddeti",
      desc: "Ucretsiz ve gizli ureme sagligi hizmetleri; toplumsal cinsiyete dayali siddet magdurlarina destek.",
    },
    "mlsp": {
      name: "Calisma ve Sosyal Politika Bakanligi",
      type: "Kurum - Politika ve denetim",
      desc: "Siddetten koruma politikalari ve mevzuatindan sorumlu; uzmanlasmis hizmetleri ve siginma evlerini kaydeder ve denetler.",
    },
    "social-work-skopje": {
      name: "Belediyelerarasi Sosyal Hizmet Merkezi - Uskup",
      type: "Kurum - Sosyal hizmet ve koruma",
      desc: "Kamu sosyal hizmet merkezi; aile ici siddet vakalarini yonetir; koruma icin ozel birimler ve acil ekip.",
    },
    "megjashi": {
      name: "Ilk Cocuk Elciligi - Megjashi (Alo Bushavko)",
      type: "STK - Cocuk SOS hatti",
      desc: "Cocuk ve gencler icin siddet, istismar ve diger sorunlar hakkinda konusmak icin 7/24 gizli yardim hatti.",
    },
    "albanian-women-forum": {
      name: "Arnavut Kadinlar Forumu",
      type: "Yerel STK - Savunuculuk ve danismanlik",
      desc: "Savunuculuk, kadina yonelik siddet, psikososyal bakim, kadin sagligi.",
    },
    "albanian-women-gostivar": {
      name: "Arnavut Kadinlar Birligi - Gostivar Subesi",
      type: "Yerel STK - Danismanlik ve faaliyetler",
      desc: "Odak: Arnavut kadinin statusu, rolu ve sosyal konumu.",
    },
    "jehona": {
      name: "Jehona - Bagimsiz Kadinlar Dernegi",
      type: "Yerel STK - Danismanlik ve psikososyal bakim",
      desc: "Kadina yonelik siddet, psikososyal bakim, kadin sagligi, insani yardim.",
    },
    "hz-majka": {
      name: "Hz. Majka - Kumanovo Kadinlar Orgutu",
      type: "Yerel STK - Aktivizm ve egitim",
      desc: "Aktivizm, egitim, kadina yonelik siddete karsi programlar.",
    },
    "sos-kumanovo": {
      name: "SOS Telefon - Kumanovo",
      type: "Yerel STK - SOS hatti",
      desc: "Siddet magduru kadin ve cocuklar icin SOS hatti. Bilgilendirme, arastirma, psikososyal bakim.",
    },
    "bisera": {
      name: "Bisera - Ohri Kadinlar Dernegi",
      type: "Yerel STK - SOS hatti ve danismanlik",
      desc: "Siddet yasayan kadin ve cocuklar icin SOS hatti.",
    },
    "hajat": {
      name: "Hajat - Struga Turk Kadinlar Orgutu",
      type: "Yerel STK - Danismanlik ve egitim",
      desc: "Genc kiz ve kadinlar icin programlar, egitim, kadina yonelik siddet, saglik.",
    },
    "oz-struga": {
      name: "Kadinlar Orgutu - Struga",
      type: "Yerel STK - Danismanlik ve faaliyetler",
      desc: "Genc kadinlar, kadina yonelik siddet, psikososyal bakim, kadin sagligi.",
    },
    "iskra": {
      name: "Iskra - Bitola Kadinlar Dernegi",
      type: "Yerel STK - SOS hatti ve danismanlik",
      desc: "Kadin ve cocuklar icin SOS hatti. Saglik, egitim, kadina yonelik siddet.",
    },
    "oz-bitola": {
      name: "Bitola Kadinlar Orgutu",
      type: "Yerel STK - Danismanlik ve egitim",
      desc: "Egitim, insani faaliyetler, psikososyal bakim, kadina yonelik siddet.",
    },
    "oz-kriva-palanka": {
      name: "Kadinlar Orgutu - Kriva Palanka",
      type: "Yerel STK - Danismanlik ve faaliyetler",
      desc: "Kadin haklari, insani faaliyetler, kadina yonelik siddet, saglik.",
    },
    "oz-sveti-nikole": {
      name: "Kadinlar Orgutu - Sveti Nikole",
      type: "Yerel STK - Danismanlik ve faaliyetler",
      desc: "Kadinlar, cocuklar ve gencler; kadina yonelik siddet, psikososyal bakim, saglik.",
    },
    "oz-pehcevo": {
      name: "Kadinlar Orgutu - Pehcevo",
      type: "Yerel STK - Danismanlik ve faaliyetler",
      desc: "Kadin haklari, esitlik, egitim, kadina yonelik siddet, saglik.",
    },
    "roza": {
      name: "Roza - Rankovce Kadinlar Orgutu",
      type: "Yerel STK - Danismanlik ve faaliyetler",
      desc: "Kadin haklari, kadina yonelik siddet, psikososyal bakim, saglik, cevre.",
    },
    "zhena": {
      name: "Zhena Dernegi - Samokov",
      type: "Yerel STK - Danismanlik ve faaliyetler",
      desc: "Aktivizm, arastirma, kadina yonelik siddet, psikososyal bakim, saglik.",
    },
  },
} as const;
