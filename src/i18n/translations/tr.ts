export default {
  meta: {
    title: "Mira - Aile içi şiddet desteği",
    description: "Kuzey Makedonya'da aile içi şiddete karşı destek platformu.",
  },

  nav: {
    home: "Ana Sayfa",
    guide: "Adımlar",
    resources: "Yardım",
    hotlines: "Ara",
    doc: "Belgele",
    safety: "Güvenlik",
  },

  exit: "Hızlı çıkış",

  home: {
    headline: "Yalnız değilsiniz.",
    subtitle: "Kuzey Makedonya'da aile içi şiddete karşı destek platformu.",
    emergencyLabel: "Acil durum?",
    emergencyAction: "192'yi şimdi ara",
    sosLabel: "Ulusal SOS Hattı",
    sosNumber: "15-315 (7/24)",
    cardGuide: "Şimdi ne yapmalıyım?",
    cardGuideDesc: "Adım adım rehber",
    cardResources: "Yakınımda yardım bul",
    cardSafety: "Güvenlik planı",
    cardSafetyDesc: "Güvenli ayrılmaya hazırlan",
    cardHotlines: "Tüm yardım hatları",
    privacy: "Bu sayfa veri saklamaz. Çerez yok.",
    privacyHistory: "Tarayıcı geçmişi silinebilir.",
    providerCTA: "Bir kuruluş veya profesyonel misiniz? Platforma katkıda bulunun \u2192",
  },

  contribute: {
    title: "Platforma katkıda bulunun",
    subtitle: "Bir kuruluş, terapist, danışman veya başka bir hizmet sağlayıcısıysanız, platforma eklenmek için aşağıdaki formu doldurun.",
    formNotice: "Bilgileriniz platforma eklenmeden önce doğrulanacaktır.",
    fields: {
      orgName: "Kuruluş adı",
      orgType: "Kuruluş türü",
      orgTypeOptions: {
        ngo: "STK",
        institution: "Devlet kurumu",
        ngoNetwork: "STK ağı",
        localNgo: "Yerel kadın STK'sı",
      },
      city: "Şehir",
      address: "Adres",
      phones: "Telefon numaraları",
      phonesHint: "Her numarayı yeni satıra yazın",
      email: "E-posta",
      website: "Web sitesi",
      categories: "Sunduğunuz hizmetler",
      description: "Hizmetlerin kısa açıklaması",
      descriptionHint: "Sunduğunuz hizmetleri açıklayın (2-3 cümle)",
      contactPerson: "İletişim kişisi",
      availability: "Çalışma saatleri",
      availabilityHint: "ör. 7/24, Pazartesi - Cuma 9-17",
      verification: "Bu bilgileri nasıl doğrulayabiliriz?",
      submit: "Gönder",
      success: "Teşekkürler! Bilgileriniz başarıyla gönderildi. Doğrulama sonrası sizinle iletişime geçeceğiz.",
    },
  },

  categories: {
    all: "Tümü",
    shelter: "Sığınma evi",
    sos: "SOS hattı",
    legal: "Hukuki yardım",
    psycho: "Psikolojik destek",
  },

  resources: {
    title: "Yardım bul",
    organizationsIn: "kuruluşlar",
    verified: "Doğrulandı",
    cities: "şehirde",
  },

  guide: {
    title: "Şimdi ne yapmalıyım?",
    subtitle: "Bu adımları izle, birer birer, kendi hızında.",
  },

  hotlines: {
    title: "Yardım hatları",
    subtitle: "Doğrudan aramak için tıkla",
    warning: "Birisi telefonunu kontrol ediyorsa, başka birinin telefonundan veya ankesörden ara.",
    warningLabel: "Dikkat:",
  },

  safety: {
    title: "Güvenlik planı",
    subtitle: "Bunları önceden hazırla. İşaretlediğin her kutu güvenliğe doğru bir adım.",
    steps: "adım",
  },

  guideSteps: [
    {
      num: "01",
      title: "Şimdi güvende misin?",
      subtitle: "Acil tehlikede misin?",
      content: "Şimdi tehlikedeysen, 192'den polisi ara veya evden ayrıl. Komşuya, aileye veya sığınma evine git. Eşyaların için endişelenme, senin güvenliğin en önemli.",
      action: "192'yi şimdi ara",
      actionType: "emergency" as const,
    },
    {
      num: "02",
      title: "Şiddeti belgele",
      subtitle: "Koruman için kanıt topla",
      content: "Yaraları fotoğrafla. Tehdit mesajlarını kaydet. Tarihleri ve olayları yaz. Bu, şikâyet ederken veya koruma emri isterken yardımcı olacak.",
      action: "Nasıl belgelenir",
      actionType: "info" as const,
    },
    {
      num: "03",
      title: "Hukuki yardım iste",
      subtitle: "Hakların var, kullan onları",
      content: "Avukatsız koruma emri alabilirsin. Adalet Bakanlığı'nın yerel ofisine gidin. ESE ücretsiz hukuki yardım sunuyor (02 3298 295). Helsinki Komitesi'nin ücretsiz hattı: 0800 44 222.",
      action: "Kuruluşları gör",
      actionType: "navigate" as const,
    },
    {
      num: "04",
      title: "Güvenlik planı",
      subtitle: "Güvenli ayrılmaya hazırlan",
      content: "Belgeler, para ve kıyafetlerle hazır bir çanta tut. Güvendiğin birine nereye gideceğini söyle. Sığınma evi numaralarını ezberle.",
      action: "Güvenlik planı oluştur",
      actionType: "navigate" as const,
    },
  ],

  safetySteps: [
    {
      icon: "doc",
      title: "Belgeler",
      items: [
        "Kimlik kartı / pasaport",
        "Doğum belgesi (senin ve çocukların)",
        "Evlilik cüzdanı",
        "Koruma emri (varsa)",
      ],
    },
    {
      icon: "money",
      title: "Para",
      items: [
        "Nakit para, mümkün olduğunca",
        "Banka kartı",
        "Yedek ev/araba anahtarı",
      ],
    },
    {
      icon: "bag",
      title: "Hazır çanta",
      items: [
        "2-3 günlük kıyafet",
        "Gerekli ilaçlar",
        "Telefon şarj aleti",
        "Çocuk için küçük oyuncak",
      ],
    },
    {
      icon: "phone",
      title: "İletişim",
      items: [
        "Ulusal SOS hattı: 15-315",
        "SOS mobil: 070 141 700",
        "Ücretsiz hukuki yardım: 0800 44 222",
        "Güvendiğin kişinin adı",
        "Gidebileceğin adres",
      ],
    },
  ],

  hotlineNames: {
    "police": { name: "Polis, Acil", available: "7/24" },
    "sos-crisis": { name: "Ulusal SOS, Kriz Merkezi", available: "7/24" },
    "sos-mobile": { name: "Ulusal Mobil SOS (NCGE)", available: "7/24" },
    "sos-ozs": { name: "Ulusal SOS, OZS", available: "7/24" },
    "ambulance": { name: "Ambulans", available: "7/24" },
    "lastrada": { name: "Open Gate, İnsan Ticareti", available: "7/24" },
    "helsinki-legal": { name: "Helsinki Komitesi, Hukuki Yardım", available: "Ücretsiz" },
    "helsinki-safe": { name: "Güvenli Ev, Helsinki", available: "7/24" },
    "ese-legal": { name: "ESE, Hukuki Yardım", available: "Pazartesi - Cuma" },
    "megjashi": { name: "Alo Buşavko, Çocuklar", available: "7/24" },
  },

  docGuide: {
    title: "Şiddeti nasıl belgelenir",
    subtitle: "Koruman için kanıt topla. Sakladığın her kanıt yardımcı olur.",
    sections: [
      {
        title: "Yaraları fotoğrafla",
        items: [
          "Şiddetten hemen sonra yaraların net fotoğraflarını çek",
          "Yakından ve uzaktan fotoğrafla",
          "Tarih ve saatin fotoğrafta görünür olduğundan emin ol",
          "Güvenli bir yerde sakla (e-posta, bulut veya güvendiğin biri)",
        ],
      },
      {
        title: "Mesajları kaydet",
        items: [
          "Tehdit veya taciz mesajlarını silme",
          "Konuşmaların ekran görüntüsünü al",
          "Tehdit e-postalarını kaydet",
          "Sesli mesajları kaydet (varsa)",
        ],
      },
      {
        title: "Günlük tut",
        items: [
          "Her olayın tarihini, saatini ve yerini yaz",
          "Ne olduğunu ayrıntılı olarak anlat",
          "Tanık olup olmadığını not et",
          "Doktora veya polise gidip gitmediğini not et",
        ],
      },
      {
        title: "Tıbbi kanıtlar",
        items: [
          "Her olaydan sonra doktora git",
          "Ayrıntılı tıbbi rapor iste",
          "Tüm raporların kopyalarını sakla",
          "Reçete ve sonuçları fotoğrafla",
        ],
      },
    ],
    callToAction: "Hazır olduğunuzda, bu kanıtlar şunlar için yardımcı olacak:",
    purposes: [
      "Polise şikâyet başvurusu",
      "Mahkemeden koruma emri talebi",
      "Kuruluşlardan ücretsiz hukuki yardım",
    ],
  },

  orgs: {
    "crisis-center": {
      name: "Kriz Merkezi 'Umut'",
      type: "STK - SOS hattı ve kriz sığınağı",
      desc: "Aile içi şiddet mağdurları için 7/24 ulusal SOS hattı; kadın ve çocuklar için 24-48 saat kriz sığınağı; psikososyal destek; hukuki danışmanlık.",
    },
    "mwrc": {
      name: "Makedonya Kadın Hakları Merkezi - Sığınma Evi (MWRC)",
      type: "STK - Sığınma evi ve hukuki destek",
      desc: "Şiddet mağduru kadın ve çocuklar için sığınma evi; ücretsiz konaklama, yemek, tıbbi, psikososyal destek ve hukuki yardım.",
    },
    "ncge": {
      name: "Ulusal Toplumsal Cinsiyet Eşitliği Konseyi (NCGE)",
      type: "STK ağı - Ulusal mobil SOS hattı",
      desc: "Aile içi ve toplumsal cinsiyete dayalı şiddet mağduru kadınlar için 7/24 ücretsiz mobil SOS hattı; danışmanlık, bilgilendirme ve yönlendirme.",
    },
    "ozs": {
      name: "Üsküp Kadınlar Örgütü (OZS)",
      type: "STK - SOS hattı ve geçici sığınma",
      desc: "24 saat ulusal SOS hattı; vaka tespiti; profesyonel ve psikososyal destek; geçici güvenli sığınma.",
    },
    "lastrada": {
      name: "Open Gate - La Strada Makedonya",
      type: "STK - İnsan ticareti ve cinsel şiddet",
      desc: "7/24 SOS hattı; uzun süreli sığınma evi; insan ticareti ve cinsel şiddet mağdurları için tıbbi, hukuki, psikososyal ve mesleki destek.",
    },
    "helsinki": {
      name: "Helsinki Komitesi - Hukuki Yardım ve Güvenli Ev",
      type: "STK - Hukuki yardım ve güvenli ev",
      desc: "Aile içi şiddetten koruma dahil ücretsiz hukuki yardım; kriz ve şiddet durumlarında geçici konaklama sağlayan Güvenli Ev.",
    },
    "network": {
      name: "Ulusal Ağ - Şiddete Karşı Ses",
      type: "STK ağı - Koordinasyon ve politika",
      desc: "20'den fazla sivil toplum kuruluşundan oluşan ağ; hizmetleri, savunuculuğu ve eğitimi koordine eder; ülke genelinde sığınma evleri ve SOS hatları listesi tutar.",
    },
    "ese": {
      name: "ESE - Özgürlük Derneği",
      type: "STK - Hukuki ve psikolojik destek",
      desc: "Aile içi şiddet yaşayan kadınlar için ücretsiz hukuki yardım, hukuki temsil ve psikolojik destek.",
    },
    "hera": {
      name: "HERA - Sağlık ve Araştırma",
      type: "STK - Üreme sağlığı ve toplumsal cinsiyet şiddeti",
      desc: "Ücretsiz ve gizli üreme sağlığı hizmetleri; toplumsal cinsiyete dayalı şiddet mağdurlarına destek.",
    },
    "mlsp": {
      name: "Çalışma ve Sosyal Politika Bakanlığı",
      type: "Kurum - Politika ve denetim",
      desc: "Şiddetten koruma politikaları ve mevzuatından sorumlu; uzmanlaşmış hizmetleri ve sığınma evlerini kaydeder ve denetler.",
    },
    "social-work-skopje": {
      name: "Belediyelerarası Sosyal Hizmet Merkezi - Üsküp",
      type: "Kurum - Sosyal hizmet ve koruma",
      desc: "Kamu sosyal hizmet merkezi; aile içi şiddet vakalarını yönetir; koruma için özel birimler ve acil ekip.",
    },
    "megjashi": {
      name: "İlk Çocuk Elçiliği - Megjashi (Alo Buşavko)",
      type: "STK - Çocuk SOS hattı",
      desc: "Çocuk ve gençler için şiddet, istismar ve diğer sorunlar hakkında konuşmak için 7/24 gizli yardım hattı.",
    },
    "albanian-women-forum": {
      name: "Arnavut Kadınlar Forumu",
      type: "Yerel STK - Savunuculuk ve danışmanlık",
      desc: "Savunuculuk, kadına yönelik şiddet, psikososyal bakım, kadın sağlığı.",
    },
    "albanian-women-gostivar": {
      name: "Arnavut Kadınlar Birliği - Gostivar Şubesi",
      type: "Yerel STK - Danışmanlık ve faaliyetler",
      desc: "Odak: Arnavut kadının statüsü, rolü ve sosyal konumu.",
    },
    "jehona": {
      name: "Jehona - Bağımsız Kadınlar Derneği",
      type: "Yerel STK - Danışmanlık ve psikososyal bakım",
      desc: "Kadına yönelik şiddet, psikososyal bakım, kadın sağlığı, insani yardım.",
    },
    "hz-majka": {
      name: "Hz. Majka - Kumanovo Kadınlar Örgütü",
      type: "Yerel STK - Aktivizm ve eğitim",
      desc: "Aktivizm, eğitim, kadına yönelik şiddete karşı programlar.",
    },
    "sos-kumanovo": {
      name: "SOS Telefon - Kumanovo",
      type: "Yerel STK - SOS hattı",
      desc: "Şiddet mağduru kadın ve çocuklar için SOS hattı. Bilgilendirme, araştırma, psikososyal bakım.",
    },
    "bisera": {
      name: "Bisera - Ohri Kadınlar Derneği",
      type: "Yerel STK - SOS hattı ve danışmanlık",
      desc: "Şiddet yaşayan kadın ve çocuklar için SOS hattı.",
    },
    "hajat": {
      name: "Hajat - Struga Türk Kadınlar Örgütü",
      type: "Yerel STK - Danışmanlık ve eğitim",
      desc: "Genç kız ve kadınlar için programlar, eğitim, kadına yönelik şiddet, sağlık.",
    },
    "oz-struga": {
      name: "Kadınlar Örgütü - Struga",
      type: "Yerel STK - Danışmanlık ve faaliyetler",
      desc: "Genç kadınlar, kadına yönelik şiddet, psikososyal bakım, kadın sağlığı.",
    },
    "iskra": {
      name: "Iskra - Bitola Kadınlar Derneği",
      type: "Yerel STK - SOS hattı ve danışmanlık",
      desc: "Kadın ve çocuklar için SOS hattı. Sağlık, eğitim, kadına yönelik şiddet.",
    },
    "oz-bitola": {
      name: "Bitola Kadınlar Örgütü",
      type: "Yerel STK - Danışmanlık ve eğitim",
      desc: "Eğitim, insani faaliyetler, psikososyal bakım, kadına yönelik şiddet.",
    },
    "oz-sveti-nikole": {
      name: "Kadınlar Örgütü - Sveti Nikole",
      type: "Yerel STK - Danışmanlık ve faaliyetler",
      desc: "Kadınlar, çocuklar ve gençler; kadına yönelik şiddet, psikososyal bakım, sağlık.",
    },
    "oz-pehcevo": {
      name: "Kadınlar Örgütü - Pehçevo",
      type: "Yerel STK - Danışmanlık ve faaliyetler",
      desc: "Kadın hakları, eşitlik, eğitim, kadına yönelik şiddet, sağlık.",
    },
    "roza": {
      name: "Roza - Rankovce Kadınlar Örgütü",
      type: "Yerel STK - Danışmanlık ve faaliyetler",
      desc: "Kadın hakları, kadına yönelik şiddet, psikososyal bakım, sağlık, çevre.",
    },
    "zhena": {
      name: "Zhena Derneği - Samokov",
      type: "Yerel STK - Danışmanlık ve faaliyetler",
      desc: "Aktivizm, araştırma, kadına yönelik şiddet, psikososyal bakım, sağlık.",
    },
  },

  // Legal
  legal: {
    lastUpdated: "Son güncelleme: Nisan 2026",
    privacyLink: "Gizlilik politikası",
    cookiesLink: "Çerez politikası",
    backHome: "Ana sayfaya dön",
    banner: {
      message: "Bu site gizliliğe öncelik veren analitik kullanır. Çerez yok, takip yok, kişisel veri toplanmıyor.",
      accept: "Anladım",
      more: "Daha fazla bilgi",
    },
    privacy: {
      title: "Gizlilik politikası",
      subtitle: "Ziyaretçiler ve katkı sağlayanlar hakkındaki bilgileri nasıl işliyoruz.",
      sections: [
        {
          h: "1. Bu politika hakkında",
          p: "Bu Gizlilik Politikası, mira.'nın bu web sitesinin ziyaretçilerine ait bilgileri nasıl işlediğini açıklar. Gizliliğini korumaya kararlıyız. Politika, Kuzey Makedonya Cumhuriyeti Kişisel Verilerin Korunması Kanunu ve Avrupa Birliği Genel Veri Koruma Tüzüğü (GDPR) ile uyumlu olarak hazırlanmıştır.",
        },
        {
          h: "2. Biz kimiz",
          p: "mira., Kuzey Makedonya'da aile içi şiddetten etkilenen kişiler için ticari olmayan bir bilgi platformudur. Ürün veya hizmet satmıyoruz. Reklam göstermiyoruz.",
        },
        {
          h: "3. Hangi verileri işliyoruz",
          p: "Verileri mutlak asgari düzeyde tutuyoruz. Ziyaretçiler için: Gizliliğe öncelik veren Simple Analytics'i kullanıyoruz; yalnızca anonim, toplu eğilimleri ölçer (sayfa görüntülemeleri, ülke, yönlendiren site, tarayıcı, ekran boyutu). IP adresini kaydetmez, çerez yerleştirmez ve seni birey olarak tanımlayamaz. Katkı sağlayanlar (kuruluşlar) için: Katkı formunu doldurursan, kuruluşunun adı, türü, şehri, adresi, telefonları, e-postası, web sitesi, hizmetleri, açıklaması, iletişim kişisi, uygunluk bilgileri ve doğrulama bilgilerini gönüllü olarak iletirsin.",
        },
        {
          h: "4. Hukuki dayanak",
          p: "Katkı formu için hukuki dayanak, formu gönderdiğinde verdiğin onaydır (GDPR madde 6(1)(a)). Analitik için hukuki dayanak, platformu geliştirmek amacıyla anonim trafiği anlamakta meşru menfaatimizdir (GDPR madde 6(1)(f)). Bu işleme kişisel veri içermez.",
        },
        {
          h: "5. Verilerini nasıl kullanıyoruz",
          p: "Kuruluş verileri yalnızca kuruluşunun doğrulanması ve platformda yayınlanması için kullanılır. Analitik veriler yalnızca anonim trafik desenlerini anlamak için kullanılır.",
        },
        {
          h: "6. Verilerini kim alıyor",
          p: "Simple Analytics anonim analitiği işler (simpleanalytics.com/privacy). FormSubmit, Katkı formunu e-posta adresimize iletir (formsubmit.co/privacy). Verilerini başka hiçbir üçüncü tarafla satmaz, paylaşmaz veya takas etmeyiz.",
        },
        {
          h: "7. Verilerini ne kadar süreyle saklıyoruz",
          p: "Kuruluş verileri, kuruluş listelendiği sürece veya silinmesini isteyene kadar saklanır. Anonim analitik, Simple Analytics tarafından kendi saklama politikasına göre toplu olarak saklanır.",
        },
        {
          h: "8. Hakların",
          p: "Kişisel Verilerin Korunması Kanunu ve GDPR kapsamında; hakkında tuttuğumuz verilere erişme, yanlış verilerin düzeltilmesini isteme, silinmesini isteme, işlemeye itiraz etme, onayı istediğin an geri çekme ve Kuzey Makedonya Kişisel Verileri Koruma Ajansı'na (azlp.mk) şikayette bulunma hakkına sahipsin.",
        },
        {
          h: "9. Veri güvenliği",
          p: "Verileri yetkisiz erişim, değişiklik, ifşa veya imhaya karşı korumak için makul teknik ve organizasyonel önlemler alıyoruz.",
        },
        {
          h: "10. Bu politikada değişiklikler",
          p: "Bu politika zaman zaman güncellenebilir. Yukarıdaki tarih son güncellemeyi gösterir.",
        },
        {
          h: "11. İletişim",
          p: "Gizlilikle ilgili her türlü soru için veya haklarını kullanmak için Katkı sayfası üzerinden bize ulaş.",
        },
      ],
    },
    cookies: {
      title: "Çerez politikası",
      subtitle: "Bu site çerez kullanmaz.",
      sections: [
        {
          h: "1. Çerez yok",
          p: "Takip amaçlı olarak cihazına çerez, takip pikseli veya başka kalıcı bir tanımlayıcı yerleştirmiyoruz. Ziyaretin herhangi bir kimlikle eşleşmez.",
        },
        {
          h: "2. Çerezsiz analitik",
          p: "Simple Analytics, çerezsiz bir analitik servistir ve yalnızca anonim, toplu eğilimleri ölçer (sayfa görüntülemeleri, ülke, yönlendiren, tarayıcı, ekran boyutu). Çerez yerleştirmez, başka sitelerde seni takip etmez ve seni tanımlayamaz.",
        },
        {
          h: "3. Kesinlikle gerekli depolama",
          p: "Gizlilik bildirim şeridini kapatırsan, tarayıcı local storage'ına küçük bir işaret yerleştiririz; böylece bildirim tekrar görünmez. Bu, tercihini hatırlamak için kesinlikle gereklidir ve Kuzey Makedonya Elektronik İletişim Kanunu kapsamında onay gerektirmez.",
        },
        {
          h: "4. Üçüncü taraf bağlantılar",
          p: "Kuruluşların web sitelerine, telefon numaralarına veya e-posta adreslerine giden harici bağlantılara tıkladığında, o üçüncü taraf hizmetleri kendi politikalarına göre kendi çerezlerini yerleştirebilir. Biz bunları kontrol etmeyiz.",
        },
        {
          h: "5. Tarayıcında çerez yönetimi",
          p: "Herhangi bir sitenin yerleştirdiği çerezleri engellemek veya silmek istersen bunu tarayıcı ayarlarından yapabilirsin. Tarayıcının yardım sayfalarında yönergeler bulunur.",
        },
        {
          h: "6. Tarayıcı geçmişi",
          p: "Bu siteye yaptığın ziyaret tarayıcı geçmişinde görünebilir. Güvenlik nedeniyle ziyaretini gizlemen gerekirse ziyaretin ardından tarayıcı geçmişini temizle veya sayfanın üstündeki 'Hızlı çıkış' düğmesini kullan.",
        },
      ],
    },
  },
} as const;
