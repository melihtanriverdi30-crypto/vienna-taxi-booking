export type Lang = "de" | "en" | "tr" | "nl" | "ar";

export const LANGS: { code: Lang; label: string }[] = [
  { code: "de", label: "DE" },
  { code: "en", label: "EN" },
  { code: "tr", label: "TR" },
  { code: "nl", label: "NL" },
  { code: "ar", label: "عربي" },
];

type Dict = {
  tagline: string; heroTitle: string; heroSub: string; bookNow: string; call: string;
  bookTitle: string; from: string; to: string; date: string; time: string; passengers: string;
  name: string; phone: string; send: string; sent: string;
  calcTitle: string; km: string; night: string; estimate: string; calcNote: string;
  airportTitle: string; airportText: string; flat: string; airportPoints: string[];
  whyTitle: string; why: [string, string][]; footer: string; required: string;
};

export const T: Record<Lang, Dict> = {
  de: {
    tagline: "Taxi Salzburg · 24/7", heroTitle: "Ihre Fahrt in Salzburg – in Minuten bestellt.",
    heroSub: "Pünktlich, sicher und zum fairen Preis. Stadtfahrten, Flughafentransfer und Fernfahrten.",
    bookNow: "Jetzt buchen", call: "Anrufen",
    bookTitle: "Taxi reservieren", from: "Abholort", to: "Zielort", date: "Datum", time: "Uhrzeit",
    passengers: "Personen", name: "Name", phone: "Telefon", send: "Per WhatsApp senden", sent: "WhatsApp wird geöffnet…",
    calcTitle: "Preisrechner", km: "Strecke (km)", night: "Nachtfahrt (22–06 Uhr)", estimate: "Geschätzter Preis",
    calcNote: "Unverbindliche Schätzung. Grundgebühr 4,50 € + 2,00 €/km.",
    airportTitle: "Flughafentransfer Salzburg (SZG)", airportText: "Fixpreis von der Altstadt zum Flughafen – ohne Überraschungen.",
    flat: "Fixpreis", airportPoints: ["Flugüberwachung inklusive", "Abholung mit Namensschild", "Kostenlose Wartezeit 30 Min."],
    whyTitle: "Warum wir?", why: [["24/7", "Rund um die Uhr erreichbar"], ["Fixpreise", "Transparent & fair"], ["Komfort", "Moderne, saubere Fahrzeuge"]],
    footer: "Taxi Salzburg", required: "Bitte alle Felder ausfüllen.",
  },
  en: {
    tagline: "Taxi Salzburg · 24/7", heroTitle: "Your ride in Salzburg – booked in minutes.",
    heroSub: "Punctual, safe and fairly priced. City rides, airport transfers and long distance.",
    bookNow: "Book now", call: "Call",
    bookTitle: "Book a taxi", from: "Pickup", to: "Destination", date: "Date", time: "Time",
    passengers: "Passengers", name: "Name", phone: "Phone", send: "Send via WhatsApp", sent: "Opening WhatsApp…",
    calcTitle: "Fare calculator", km: "Distance (km)", night: "Night ride (10pm–6am)", estimate: "Estimated fare",
    calcNote: "Non-binding estimate. Base fee €4.50 + €2.00/km.",
    airportTitle: "Salzburg Airport transfer (SZG)", airportText: "Fixed price from the old town to the airport – no surprises.",
    flat: "Fixed price", airportPoints: ["Flight tracking included", "Meet & greet with name sign", "30 min free waiting"],
    whyTitle: "Why us?", why: [["24/7", "Available around the clock"], ["Fixed prices", "Transparent & fair"], ["Comfort", "Modern, clean cars"]],
    footer: "Taxi Salzburg", required: "Please fill in all fields.",
  },
  tr: {
    tagline: "Taksi Salzburg · 7/24", heroTitle: "Salzburg'da yolculuğunuz – dakikalar içinde hazır.",
    heroSub: "Dakik, güvenli ve uygun fiyatlı. Şehir içi, havalimanı transferi ve uzun yol.",
    bookNow: "Hemen rezervasyon", call: "Ara",
    bookTitle: "Taksi rezervasyonu", from: "Alış noktası", to: "Varış noktası", date: "Tarih", time: "Saat",
    passengers: "Kişi", name: "Ad Soyad", phone: "Telefon", send: "WhatsApp ile gönder", sent: "WhatsApp açılıyor…",
    calcTitle: "Fiyat hesaplayıcı", km: "Mesafe (km)", night: "Gece (22–06)", estimate: "Tahmini ücret",
    calcNote: "Bağlayıcı olmayan tahmin. Açılış 4,50 € + 2,00 €/km.",
    airportTitle: "Salzburg Havalimanı transferi (SZG)", airportText: "Eski şehirden havalimanına sabit fiyat – sürpriz yok.",
    flat: "Sabit fiyat", airportPoints: ["Uçuş takibi dahil", "İsim tabelası ile karşılama", "30 dk ücretsiz bekleme"],
    whyTitle: "Neden biz?", why: [["7/24", "Her an ulaşılabilir"], ["Sabit fiyat", "Şeffaf ve adil"], ["Konfor", "Modern, temiz araçlar"]],
    footer: "Taksi Salzburg", required: "Lütfen tüm alanları doldurun.",
  },
  nl: {
    tagline: "Taxi Salzburg · 24/7", heroTitle: "Uw rit in Salzburg – binnen minuten geboekt.",
    heroSub: "Stipt, veilig en eerlijk geprijsd. Stadsritten, luchthavenvervoer en lange afstanden.",
    bookNow: "Nu boeken", call: "Bellen",
    bookTitle: "Taxi reserveren", from: "Ophaaladres", to: "Bestemming", date: "Datum", time: "Tijd",
    passengers: "Personen", name: "Naam", phone: "Telefoon", send: "Verstuur via WhatsApp", sent: "WhatsApp wordt geopend…",
    calcTitle: "Prijscalculator", km: "Afstand (km)", night: "Nachtrit (22–06 uur)", estimate: "Geschatte prijs",
    calcNote: "Vrijblijvende schatting. Starttarief € 4,50 + € 2,00/km.",
    airportTitle: "Luchthaventransfer Salzburg (SZG)", airportText: "Vaste prijs van de oude stad naar de luchthaven – geen verrassingen.",
    flat: "Vaste prijs", airportPoints: ["Vluchtbewaking inbegrepen", "Ontvangst met naambord", "30 min gratis wachttijd"],
    whyTitle: "Waarom wij?", why: [["24/7", "Altijd bereikbaar"], ["Vaste prijzen", "Transparant & eerlijk"], ["Comfort", "Moderne, schone auto's"]],
    footer: "Taxi Salzburg", required: "Vul alle velden in.",
  },
  ar: {
    tagline: "تاكسي سالزبورغ · ٢٤/٧", heroTitle: "رحلتك في سالزبورغ – احجز خلال دقائق.",
    heroSub: "دقة في المواعيد، أمان وأسعار عادلة. رحلات داخل المدينة، نقل من وإلى المطار ورحلات طويلة.",
    bookNow: "احجز الآن", call: "اتصل",
    bookTitle: "حجز تاكسي", from: "مكان الانطلاق", to: "الوجهة", date: "التاريخ", time: "الوقت",
    passengers: "الركاب", name: "الاسم", phone: "الهاتف", send: "أرسل عبر واتساب", sent: "جارٍ فتح واتساب…",
    calcTitle: "حاسبة الأجرة", km: "المسافة (كم)", night: "رحلة ليلية (٢٢–٠٦)", estimate: "الأجرة التقديرية",
    calcNote: "تقدير غير ملزم. رسوم أساسية 4.50 € + 2.00 €/كم.",
    airportTitle: "النقل إلى مطار سالزبورغ (SZG)", airportText: "سعر ثابت من المدينة القديمة إلى المطار – بدون مفاجآت.",
    flat: "سعر ثابت", airportPoints: ["متابعة الرحلة الجوية", "استقبال بلوحة الاسم", "٣٠ دقيقة انتظار مجاني"],
    whyTitle: "لماذا نحن؟", why: [["٢٤/٧", "متاحون على مدار الساعة"], ["أسعار ثابتة", "شفافة وعادلة"], ["راحة", "سيارات حديثة ونظيفة"]],
    footer: "تاكسي سالزبورغ", required: "يرجى ملء جميع الحقول.",
  },
};
