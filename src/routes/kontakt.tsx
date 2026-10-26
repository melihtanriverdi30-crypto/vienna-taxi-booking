import { createFileRoute } from "@tanstack/react-router";
import { useLang } from "@/lib/lang";
import { ADDRESS, EMAIL, PHONE, WA } from "@/lib/contact";

export const Route = createFileRoute("/kontakt")({
  head: () => ({
    meta: [
      { title: "Kontakt – Taxi Salzburg" },
      { name: "description", content: "Taxi Salzburg kontaktieren: Telefon, WhatsApp und E-Mail – 24 Stunden erreichbar." },
      { property: "og:title", content: "Kontakt – Taxi Salzburg" },
      { property: "og:description", content: "Telefon, WhatsApp und E-Mail – rund um die Uhr." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Contact,
});

function Contact() {
  const { p } = useLang();
  const items = [
    { icon: "📞", label: p.phone, value: PHONE, href: `tel:${PHONE}` },
    { icon: "💬", label: p.whatsapp, value: `+${WA}`, href: `https://wa.me/${WA}` },
    { icon: "✉️", label: p.email, value: EMAIL, href: `mailto:${EMAIL}` },
    { icon: "📍", label: p.address, value: ADDRESS },
    { icon: "🕐", label: p.hours, value: p.hoursVal },
  ];
  return (
    <section className="mx-auto max-w-6xl px-4 pb-20 pt-28">
      <h1 className="font-display text-4xl font-extrabold md:text-5xl">{p.cTitle}</h1>
      <p className="mt-3 text-lg text-muted-foreground">{p.cSub}</p>
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <div className="grid gap-4">
          {items.map((it) => {
            const body = (
              <>
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary text-xl">{it.icon}</span>
                <span>
                  <span className="block text-sm text-muted-foreground">{it.label}</span>
                  <span className="block font-bold" dir="ltr">{it.value}</span>
                </span>
              </>
            );
            const cls = "flex items-center gap-4 rounded-2xl border border-border bg-card p-5 shadow-card transition hover:border-primary";
            return it.href ? (
              <a key={it.label} href={it.href} target={it.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className={cls}>{body}</a>
            ) : (
              <div key={it.label} className={cls}>{body}</div>
            );
          })}
        </div>
        <iframe
          title="Map"
          src={`https://www.google.com/maps?q=${encodeURIComponent(ADDRESS)}&output=embed`}
          className="min-h-[420px] w-full rounded-2xl border border-border shadow-card"
          loading="lazy"
        />
      </div>
    </section>
  );
}
