import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { LANGS } from "@/lib/i18n";
import { useLang } from "@/lib/lang";
import { PHONE, WA } from "@/lib/contact";

export function SiteHeader() {
  const { lang, setLang, p, t } = useLang();
  const [open, setOpen] = useState(false);
  const links = [
    { to: "/", label: p.nav.home },
    { to: "/fahrzeuge", label: p.nav.vehicles },
    { to: "/kontakt", label: p.nav.contact },
  ] as const;

  return (
    <header className="fixed inset-x-0 top-0 z-20 border-b border-border/50 bg-card/95 shadow-card backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3">
        <Link to="/" className="font-display text-lg tracking-wide">
          <span className="rounded-lg bg-primary px-2 py-1 text-primary-foreground">TAXI</span>{" "}
          <span className="font-extrabold">Salzburg</span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="rounded-lg px-3 py-2 font-semibold text-muted-foreground transition hover:bg-secondary hover:text-foreground"
              activeProps={{ className: "!text-primary bg-secondary" }}
              activeOptions={{ exact: true }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <div className="hidden flex-wrap gap-1 sm:flex">
            {LANGS.map((l) => (
              <button
                key={l.code}
                onClick={() => setLang(l.code)}
                className={`rounded-md px-2.5 py-1 text-sm font-semibold transition ${lang === l.code ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground hover:bg-muted"}`}
              >
                {l.label}
              </button>
            ))}
          </div>
          <button
            onClick={() => setOpen(!open)}
            aria-label="Menu"
            className="rounded-lg bg-secondary px-3 py-2 text-lg md:hidden"
          >
            ☰
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-card px-4 py-3 md:hidden">
          {links.map((l) => (
            <Link key={l.to} to={l.to} onClick={() => setOpen(false)} className="block rounded-lg px-3 py-2 font-semibold">
              {l.label}
            </Link>
          ))}
          <div className="mt-2 flex flex-wrap gap-1">
            {LANGS.map((l) => (
              <button
                key={l.code}
                onClick={() => setLang(l.code)}
                className={`rounded-md px-2.5 py-1 text-sm font-semibold ${lang === l.code ? "bg-primary text-primary-foreground" : "bg-secondary"}`}
              >
                {l.label}
              </button>
            ))}
          </div>
          <a href={`https://wa.me/${WA}`} className="mt-3 block rounded-lg bg-accent px-3 py-2 text-center font-bold text-accent-foreground">
            💬 WhatsApp
          </a>
          <a href={`tel:${PHONE}`} className="mt-2 block rounded-lg bg-primary px-3 py-2 text-center font-bold text-primary-foreground">
            📞 {t.call}
          </a>
        </div>
      )}
    </header>
  );
}

export function SiteFooter() {
  const { t, p } = useLang();
  return (
    <>
      <footer className="border-t border-border bg-card py-8 text-center text-sm text-muted-foreground">
        <div className="mb-2 flex justify-center gap-4 font-semibold">
          <Link to="/">{p.nav.home}</Link>
          <Link to="/fahrzeuge">{p.nav.vehicles}</Link>
          <Link to="/kontakt">{p.nav.contact}</Link>
        </div>
        © {new Date().getFullYear()} {t.footer} · <a href={`tel:${PHONE}`}>{PHONE}</a>
      </footer>
      <a
        href={`https://wa.me/${WA}`}
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp"
        className="fixed bottom-5 end-5 z-30 flex h-14 w-14 items-center justify-center rounded-full bg-accent text-2xl shadow-glow transition hover:scale-110"
      >
        💬
      </a>
    </>
  );
}
