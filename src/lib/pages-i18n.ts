import type { Lang } from "./i18n";

type P = {
  nav: { home: string; vehicles: string; contact: string };
  vTitle: string; vSub: string; seats: string; bags: string; book: string;
  cars: { name: string; desc: string }[];
  cTitle: string; cSub: string; phone: string; whatsapp: string; email: string; address: string; hours: string; hoursVal: string;
};

export const P: Record<Lang, P> = {
  de: {
    nav: { home: "Startseite", vehicles: "Fahrzeuge", contact: "Kontakt" },
    vTitle: "Unsere Fahrzeuge", vSub: "Moderne, saubere Fahrzeuge für jede Gruppengröße.", seats: "Sitze", bags: "Koffer", book: "Dieses Fahrzeug buchen",
    cars: [
      { name: "Limousine", desc: "Komfortabel für Stadtfahrten und Geschäftsreisen." },
      { name: "Van", desc: "Ideal für Familien und Flughafentransfers mit Gepäck." },
      { name: "Kleinbus", desc: "Für Gruppen, Ausflüge und Skitransfers." },
    ],
    cTitle: "Kontakt", cSub: "Wir sind rund um die Uhr für Sie erreichbar.", phone: "Telefon", whatsapp: "WhatsApp", email: "E-Mail", address: "Adresse", hours: "Erreichbarkeit", hoursVal: "24 Stunden, 7 Tage",
  },
  en: {
    nav: { home: "Home", vehicles: "Vehicles", contact: "Contact" },
    vTitle: "Our vehicles", vSub: "Modern, clean cars for every group size.", seats: "seats", bags: "bags", book: "Book this vehicle",
    cars: [
      { name: "Sedan", desc: "Comfortable for city rides and business trips." },
      { name: "Van", desc: "Ideal for families and airport transfers with luggage." },
      { name: "Minibus", desc: "For groups, excursions and ski transfers." },
    ],
    cTitle: "Contact", cSub: "We are available around the clock.", phone: "Phone", whatsapp: "WhatsApp", email: "Email", address: "Address", hours: "Availability", hoursVal: "24 hours, 7 days",
  },
  tr: {
    nav: { home: "Ana Sayfa", vehicles: "Araçlar", contact: "İletişim" },
    vTitle: "Araçlarımız", vSub: "Her grup büyüklüğü için modern ve temiz araçlar.", seats: "koltuk", bags: "bavul", book: "Bu aracı rezerve et",
    cars: [
      { name: "Sedan", desc: "Şehir içi ve iş seyahatleri için konforlu." },
      { name: "Van", desc: "Aileler ve bagajlı havalimanı transferleri için ideal." },
      { name: "Minibüs", desc: "Gruplar, geziler ve kayak transferleri için." },
    ],
    cTitle: "İletişim", cSub: "7/24 ulaşabilirsiniz.", phone: "Telefon", whatsapp: "WhatsApp", email: "E-posta", address: "Adres", hours: "Çalışma saatleri", hoursVal: "7 gün 24 saat",
  },
  nl: {
    nav: { home: "Home", vehicles: "Voertuigen", contact: "Contact" },
    vTitle: "Onze voertuigen", vSub: "Moderne, schone auto's voor elke groepsgrootte.", seats: "zitplaatsen", bags: "koffers", book: "Dit voertuig boeken",
    cars: [
      { name: "Sedan", desc: "Comfortabel voor stadsritten en zakenreizen." },
      { name: "Busje", desc: "Ideaal voor gezinnen en luchthaventransfers met bagage." },
      { name: "Minibus", desc: "Voor groepen, uitstapjes en skitransfers." },
    ],
    cTitle: "Contact", cSub: "Wij zijn dag en nacht bereikbaar.", phone: "Telefoon", whatsapp: "WhatsApp", email: "E-mail", address: "Adres", hours: "Bereikbaarheid", hoursVal: "24 uur, 7 dagen",
  },
  ar: {
    nav: { home: "الرئيسية", vehicles: "السيارات", contact: "اتصل بنا" },
    vTitle: "سياراتنا", vSub: "سيارات حديثة ونظيفة لكل حجم مجموعة.", seats: "مقاعد", bags: "حقائب", book: "احجز هذه السيارة",
    cars: [
      { name: "سيدان", desc: "مريحة للتنقل في المدينة ورحلات العمل." },
      { name: "فان", desc: "مثالية للعائلات والنقل إلى المطار مع الأمتعة." },
      { name: "حافلة صغيرة", desc: "للمجموعات والرحلات ونقل التزلج." },
    ],
    cTitle: "اتصل بنا", cSub: "نحن متاحون على مدار الساعة.", phone: "الهاتف", whatsapp: "واتساب", email: "البريد الإلكتروني", address: "العنوان", hours: "أوقات العمل", hoursVal: "٢٤ ساعة، ٧ أيام",
  },
};
