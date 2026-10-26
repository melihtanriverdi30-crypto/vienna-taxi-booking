import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { T, type Lang } from "./i18n";
import { P } from "./pages-i18n";

type Ctx = { lang: Lang; setLang: (l: Lang) => void; t: (typeof T)[Lang]; p: (typeof P)[Lang] };
const LangCtx = createContext<Ctx | null>(null);

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("de");

  useEffect(() => {
    const saved = localStorage.getItem("lang") as Lang | null;
    if (saved && saved in T) setLangState(saved);
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  }, [lang]);

  const setLang = (l: Lang) => {
    setLangState(l);
    localStorage.setItem("lang", l);
  };

  return <LangCtx.Provider value={{ lang, setLang, t: T[lang], p: P[lang] }}>{children}</LangCtx.Provider>;
}

export function useLang() {
  const c = useContext(LangCtx);
  if (!c) throw new Error("useLang outside LangProvider");
  return c;
}
