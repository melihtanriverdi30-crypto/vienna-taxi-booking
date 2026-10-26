import { useLang } from "@/lib/lang";

// Sample reviews — replace with real customer reviews
const REVIEWS = [
  { name: "Anna M.", from: "Wien", rating: 5, text: "Pünktlich am Flughafen, sehr freundlicher Fahrer und ein sauberes Auto. Gerne wieder!" },
  { name: "James P.", from: "London", rating: 5, text: "Booked via WhatsApp in two minutes. Fixed airport price, no surprises. Highly recommended." },
  { name: "Mehmet K.", from: "İstanbul", rating: 5, text: "Ailecek kayak tatiline geldik, van çok rahattı. Şoför Türkçe de biliyordu, çok memnun kaldık." },
  { name: "Sanne de V.", from: "Utrecht", rating: 4, text: "Fijne rit naar het centrum, vriendelijke chauffeur. Iets wachten bij het ophalen, verder top." },
  { name: "أحمد س.", from: "دبي", rating: 5, text: "خدمة ممتازة وسيارة مريحة جداً. السائق كان محترماً ووصلنا في الوقت المحدد." },
  { name: "Lukas H.", from: "Salzburg", rating: 5, text: "Mein Taxi für jeden Anlass. Immer erreichbar, auch nachts um drei." },
];

function Stars({ n }: { n: number }) {
  return (
    <span className="text-lg tracking-wider text-star" aria-label={`${n}/5`}>
      {"★".repeat(n)}
      <span className="text-border">{"★".repeat(5 - n)}</span>
    </span>
  );
}

export function Reviews() {
  const { p } = useLang();
  const avg = REVIEWS.reduce((s, r) => s + r.rating, 0) / REVIEWS.length;
  return (
    <section className="mx-auto max-w-6xl px-4 pb-20">
      <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
        <div>
          <h2 className="font-display text-3xl font-extrabold">{p.rTitle}</h2>
          <p className="mt-2 text-muted-foreground">{p.rSub}</p>
        </div>
        <div className="flex items-center gap-3 rounded-2xl border border-border bg-card px-5 py-3 shadow-card">
          <span className="font-display text-4xl font-extrabold text-primary">{avg.toFixed(1)}</span>
          <span>
            <Stars n={Math.round(avg)} />
            <span className="block text-sm text-muted-foreground">{REVIEWS.length} {p.rCount}</span>
          </span>
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        {REVIEWS.map((r) => (
          <figure key={r.name} className="flex flex-col rounded-2xl border border-border bg-card p-6 shadow-card">
            <Stars n={r.rating} />
            <blockquote dir="auto" className="mt-3 flex-1 text-foreground">“{r.text}”</blockquote>
            <figcaption className="mt-5 flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary font-bold text-primary-foreground">
                {r.name.charAt(0)}
              </span>
              <span>
                <span dir="auto" className="block font-bold">{r.name}</span>
                <span className="block text-sm text-muted-foreground">{r.from}</span>
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
