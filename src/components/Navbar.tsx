import { useEffect, useState } from "react";
import { Link, useLocation } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { navLinks } from "@/lib/site";
import { useQuote } from "./QuoteModal";
import { useT } from "@/lib/i18n";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const { open: openQuote } = useQuote();
  const { t, lang, setLang } = useT();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  const switchLang = (l: "en" | "am") => {
    if (l === lang) return;
    if (typeof document !== "undefined") {
      document.documentElement.classList.add("lang-switching");
      setTimeout(() => {
        setLang(l);
        requestAnimationFrame(() =>
          document.documentElement.classList.remove("lang-switching")
        );
      }, 140);
    } else setLang(l);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled || open ? "glass shadow-soft" : "bg-transparent"
      }`}
    >
      <nav className="container-px mx-auto flex h-24 max-w-7xl items-center justify-between md:h-28">
        <Link to="/" className="flex items-center gap-2 py-2" aria-label="Plus Facilities home">
          <Logo className="h-16 md:h-20 lg:h-24" />
        </Link>

        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((l) => (
            <li key={l.to}>
              <Link
                to={l.to}
                activeOptions={{ exact: l.to === "/" }}
                className="group relative rounded-full px-4 py-2 text-sm font-medium text-foreground/80 transition hover:text-primary"
                activeProps={{ className: "text-primary" }}
              >
                {t(`nav.${l.key}`)}
                <span className="pointer-events-none absolute inset-x-4 -bottom-0.5 h-px origin-left scale-x-0 bg-gradient-brand transition-transform duration-300 group-hover:scale-x-100 group-data-[status=active]:scale-x-100" />
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <LanguageToggle lang={lang} onChange={switchLang} />
          <button
            onClick={openQuote}
            className="hidden rounded-full bg-gradient-brand px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-soft transition hover:-translate-y-0.5 hover:shadow-elegant md:inline-flex"
          >
            {t("nav.quote")}
          </button>
          <button
            onClick={() => setOpen(!open)}
            className="rounded-full p-2 text-foreground lg:hidden"
            aria-label="Menu"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile */}
      <div
        className={`overflow-hidden transition-all duration-500 lg:hidden ${
          open ? "max-h-[640px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="container-px mx-auto flex max-w-7xl flex-col gap-1 pb-6">
          {navLinks.map((l) => (
            <li key={l.to}>
              <Link
                to={l.to}
                activeOptions={{ exact: l.to === "/" }}
                className="block rounded-xl px-4 py-3 text-base font-medium text-foreground/80 transition hover:bg-muted hover:text-primary"
                activeProps={{ className: "bg-muted text-primary" }}
              >
                {t(`nav.${l.key}`)}
              </Link>
            </li>
          ))}
          <li className="mt-2">
            <button
              onClick={openQuote}
              className="w-full rounded-xl bg-gradient-brand px-4 py-3 text-sm font-semibold text-primary-foreground"
            >
              {t("nav.quote")}
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
}

function LanguageToggle({ lang, onChange }: { lang: "en" | "am"; onChange: (l: "en" | "am") => void }) {
  return (
    <div
      role="group"
      aria-label="Language"
      className="relative flex items-center rounded-full border border-border/60 bg-card/70 p-0.5 shadow-sm backdrop-blur"
    >
      <span
        aria-hidden
        className="absolute top-0.5 bottom-0.5 w-[calc(50%-0.125rem)] rounded-full bg-gradient-brand transition-all duration-500 ease-[cubic-bezier(.22,1,.36,1)]"
        style={{ left: lang === "en" ? "0.125rem" : "calc(50% + 0rem)" }}
      />
      <button
        onClick={() => onChange("en")}
        className={`relative z-10 rounded-full px-2.5 py-1 text-[11px] font-semibold leading-none transition-colors duration-300 ${
          lang === "en" ? "text-primary-foreground" : "text-foreground/70 hover:text-foreground"
        }`}
      >
        EN
      </button>
      <button
        onClick={() => onChange("am")}
        className={`relative z-10 rounded-full px-2.5 py-1 text-[11px] font-semibold leading-none transition-colors duration-300 ${
          lang === "am" ? "text-primary-foreground" : "text-foreground/70 hover:text-foreground"
        }`}
        style={{ fontFamily: '"Noto Sans Ethiopic", system-ui, sans-serif' }}
      >
        አማ
      </button>
    </div>
  );
}
