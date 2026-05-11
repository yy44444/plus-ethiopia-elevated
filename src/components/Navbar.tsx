import { useEffect, useState } from "react";
import { Link, useLocation } from "@tanstack/react-router";
import { Menu, X, Globe } from "lucide-react";
import { Logo } from "./Logo";
import { navLinks } from "@/lib/site";
import { useQuote } from "./QuoteModal";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [lang, setLang] = useState<"EN" | "AM">("EN");
  const { pathname } = useLocation();
  const { open: openQuote } = useQuote();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled || open ? "glass shadow-soft" : "bg-transparent"
      }`}
    >
      <nav className="container-px mx-auto flex h-20 max-w-7xl items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <Logo className="h-10" />
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
                {l.label}
                <span className="pointer-events-none absolute inset-x-4 -bottom-0.5 h-px origin-left scale-x-0 bg-gradient-brand transition-transform duration-300 group-hover:scale-x-100 group-data-[status=active]:scale-x-100" />
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setLang(lang === "EN" ? "AM" : "EN")}
            className="hidden items-center gap-1.5 rounded-full border border-border/60 bg-card/60 px-3 py-1.5 text-xs font-semibold text-foreground/80 transition hover:border-primary hover:text-primary md:flex"
            aria-label="Switch language"
          >
            <Globe size={14} />
            {lang === "EN" ? "EN · አማ" : "አማ · EN"}
          </button>
          <button
            onClick={openQuote}
            className="hidden rounded-full bg-gradient-brand px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-soft transition hover:-translate-y-0.5 hover:shadow-elegant md:inline-flex"
          >
            Get a Quote
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
          open ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
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
                {l.label}
              </Link>
            </li>
          ))}
          <li className="mt-2 flex gap-2">
            <button
              onClick={() => setLang(lang === "EN" ? "AM" : "EN")}
              className="flex flex-1 items-center justify-center gap-1.5 rounded-xl border border-border bg-card px-4 py-3 text-sm font-semibold"
            >
              <Globe size={14} /> {lang === "EN" ? "English" : "አማርኛ"}
            </button>
            <button
              onClick={openQuote}
              className="flex-1 rounded-xl bg-gradient-brand px-4 py-3 text-sm font-semibold text-primary-foreground"
            >
              Get a Quote
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
}
