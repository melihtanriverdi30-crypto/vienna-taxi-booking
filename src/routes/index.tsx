import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { z } from "zod";
import hero from "@/assets/hero-alps.jpg";
import { useLang } from "@/lib/lang";
import { PHONE, WA } from "@/lib/contact";
import { AIRPORT_FLAT, estimateFare } from "@/lib/pricing";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Taxi Salzburg 24/7 – Online buchen & Flughafentransfer" },
      { name: "description", content: "Taxi in Salzburg online reservieren, Preis berechnen und Fixpreis-Flughafentransfer buchen. DE · EN · TR · NL · AR." },
      { property: "og:title", content: "Taxi Salzburg 24/7" },
      { property: "og:description", content: "Online buchen, Preis berechnen, Flughafentransfer zum Fixpreis." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const schema = z.object({
  from: z.string().trim().min(2).max(150),
  to: z.string().trim().min(2).max(150),
  date: z.string().min(1),
  time: z.string().min(1),
  pax: z.string().min(1).max(2),
  name: z.string().trim().min(2).max(100),
  phone: z.string().trim().min(5).max(30).regex(/^[+\d\s()-]+$/),
});

function Index() {
  const { t } = useLang();
  const [km, setKm] = useState(10);
  const [night, setNight] = useState(false);
  const [error, setError] = useState("");

  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget)) as Record<string, string>;
    const r = schema.safeParse(data);
    if (!r.success) return setError(t.required);
    setError("");
    const d = r.data;
    const msg = `Taxi: ${d.from} → ${d.to}\n${d.date} ${d.time}\n${t.passengers}: ${d.pax}\n${d.name} (${d.phone})`;
    window.open(`https://wa.me/${WA}?text=${encodeURIComponent(msg)}`, "_blank");
  }

  return (
    <div className="font-sans">


      <section className="relative flex min-h-[88vh] items-end">
        <img src={hero} alt="Taxi Salzburg" width={1600} height={1008} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-hero-overlay" />
        <div className="relative mx-auto w-full max-w-6xl px-4 pb-20 pt-32 text-hero-foreground">
          <p className="mb-4 inline-block rounded-full bg-hero-foreground/15 px-4 py-1.5 text-sm font-semibold backdrop-blur">{t.tagline}</p>
          <h1 className="max-w-3xl font-display text-4xl font-extrabold leading-tight md:text-6xl">{t.heroTitle}</h1>
          <p className="mt-4 max-w-xl text-lg opacity-90">{t.heroSub}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#book" className="rounded-xl bg-primary px-6 py-3 font-bold text-primary-foreground shadow-glow transition hover:scale-105">{t.bookNow}</a>
            <a href={`tel:${PHONE}`} className="rounded-xl border border-hero-foreground/50 bg-hero-foreground/10 px-6 py-3 font-bold backdrop-blur">📞 {t.call}</a>
          </div>
        </div>
      </section>

      <section id="book" className="mx-auto grid max-w-6xl gap-6 px-4 py-16 md:grid-cols-5">
        <form onSubmit={submit} className="rounded-2xl border border-border bg-card p-6 shadow-card md:col-span-3">
          <h2 className="mb-5 font-display text-2xl font-extrabold">{t.bookTitle}</h2>
          <div className="grid gap-3 sm:grid-cols-2">
            <input name="from" placeholder={t.from} maxLength={150} className="field sm:col-span-2" />
            <input name="to" placeholder={t.to} maxLength={150} className="field sm:col-span-2" />
            <input name="date" type="date" aria-label={t.date} className="field" />
            <input name="time" type="time" aria-label={t.time} className="field" />
            <select name="pax" aria-label={t.passengers} className="field" defaultValue="1">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => <option key={n} value={n}>{n} {t.passengers}</option>)}
            </select>
            <input name="name" placeholder={t.name} maxLength={100} className="field" />
            <input name="phone" type="tel" placeholder={t.phone} maxLength={30} className="field sm:col-span-2" />
          </div>
          {error && <p className="mt-3 text-sm text-destructive">{error}</p>}
          <button className="mt-5 w-full rounded-xl bg-accent py-3 font-bold text-accent-foreground transition hover:opacity-90">💬 {t.send}</button>
        </form>

        <div className="rounded-2xl border border-border bg-card p-6 shadow-card md:col-span-2">
          <h2 className="mb-5 font-display text-2xl font-extrabold">{t.calcTitle}</h2>
          <label className="text-sm text-muted-foreground">{t.km}: <b className="text-foreground">{km} km</b></label>
          <input type="range" min={1} max={150} value={km} onChange={(e) => setKm(+e.target.value)} className="mt-2 w-full accent-primary" />
          <label className="mt-4 flex items-center gap-2 text-sm">
            <input type="checkbox" checked={night} onChange={(e) => setNight(e.target.checked)} className="accent-primary" />
            {t.night}
          </label>
          <div className="mt-6 rounded-xl bg-secondary p-5 text-center">
            <p className="text-sm text-muted-foreground">{t.estimate}</p>
            <p className="font-display text-4xl font-extrabold text-primary">€ {estimateFare(km, night).toFixed(2)}</p>
          </div>
          <p className="mt-3 text-xs text-muted-foreground">{t.calcNote}</p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-16">
        <div className="grid items-center gap-6 rounded-2xl bg-primary p-8 text-primary-foreground md:grid-cols-3">
          <div className="md:col-span-2">
            <h2 className="font-display text-3xl font-extrabold">✈ {t.airportTitle}</h2>
            <p className="mt-2 opacity-80">{t.airportText}</p>
            <ul className="mt-4 grid gap-1 font-semibold">
              {t.airportPoints.map((p) => <li key={p}>✓ {p}</li>)}
            </ul>
          </div>
          <div className="text-center">
            <p className="text-sm uppercase opacity-70">{t.flat}</p>
            <p className="font-display text-6xl font-extrabold">€{AIRPORT_FLAT}</p>
            <a href="#book" className="mt-3 inline-block rounded-xl bg-card px-5 py-2 font-bold text-primary">{t.bookNow}</a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-20">
        <h2 className="mb-6 font-display text-3xl font-extrabold">{t.whyTitle}</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {t.why.map(([h, p]) => (
            <div key={h} className="rounded-2xl border border-border bg-card p-6 shadow-card">
              <p className="font-display text-xl font-bold text-primary">{h}</p>
              <p className="mt-1 text-muted-foreground">{p}</p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
