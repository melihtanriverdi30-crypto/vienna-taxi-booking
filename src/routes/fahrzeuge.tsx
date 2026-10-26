import { createFileRoute, Link } from "@tanstack/react-router";
import sedan from "@/assets/car-sedan.jpg";
import van from "@/assets/car-van.jpg";
import bus from "@/assets/car-bus.jpg";
import { useLang } from "@/lib/lang";

export const Route = createFileRoute("/fahrzeuge")({
  head: () => ({
    meta: [
      { title: "Fahrzeuge – Taxi Salzburg" },
      { name: "description", content: "Limousine, Van und Kleinbus: unsere Taxi-Flotte in Salzburg für 1 bis 8 Personen." },
      { property: "og:title", content: "Fahrzeuge – Taxi Salzburg" },
      { property: "og:description", content: "Limousine, Van und Kleinbus für jede Gruppengröße." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Vehicles,
});

const SPECS = [
  { img: sedan, seats: 4, bags: 3 },
  { img: van, seats: 7, bags: 6 },
  { img: bus, seats: 8, bags: 10 },
];

function Vehicles() {
  const { p } = useLang();
  return (
    <section className="mx-auto max-w-6xl px-4 pb-20 pt-28">
      <h1 className="font-display text-4xl font-extrabold md:text-5xl">{p.vTitle}</h1>
      <p className="mt-3 text-lg text-muted-foreground">{p.vSub}</p>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {SPECS.map((s, i) => (
          <article key={i} className="overflow-hidden rounded-2xl border border-border bg-card shadow-card">
            <img src={s.img} alt={p.cars[i].name} loading="lazy" width={1200} height={800} className="aspect-[3/2] w-full object-cover" />
            <div className="p-6">
              <h2 className="font-display text-2xl font-extrabold">{p.cars[i].name}</h2>
              <p className="mt-2 text-muted-foreground">{p.cars[i].desc}</p>
              <div className="mt-4 flex gap-3 text-sm font-semibold">
                <span className="rounded-full bg-secondary px-3 py-1">👤 {s.seats} {p.seats}</span>
                <span className="rounded-full bg-secondary px-3 py-1">🧳 {s.bags} {p.bags}</span>
              </div>
              <Link to="/" hash="book" className="mt-5 block rounded-xl bg-primary py-3 text-center font-bold text-primary-foreground shadow-glow">
                {p.book}
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
