import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Mail, Phone, MapPin } from "lucide-react";
import { Logo } from "./Logo";
import { navLinks, services, site } from "@/lib/site";
import { useT } from "@/lib/i18n";

function TikTokIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.07A6.33 6.33 0 0 0 5.8 20.1a6.34 6.34 0 0 0 10.86-4.43V8.5a8.16 8.16 0 0 0 4.77 1.52V6.69h-1.84Z" />
    </svg>
  );
}

export function Footer() {
  const { t } = useT();
  return (
    <footer className="relative mt-32 overflow-hidden bg-[oklch(0.16_0.03_215)] text-[oklch(0.92_0.01_180)]">
      <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: "radial-gradient(circle at 20% 0%, oklch(0.72 0.08 155) 0%, transparent 50%), radial-gradient(circle at 80% 100%, oklch(0.55 0.07 200) 0%, transparent 50%)" }} />
      <div className="container-px relative mx-auto max-w-7xl py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Logo className="h-20 md:h-24" />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-[oklch(0.78_0.015_190)]">
              {t("footer.about")}
            </p>
            <div className="mt-6 flex gap-3">
              {[
                { label: "Facebook", href: "https://web.facebook.com/profile.php?id=61584954328147", Icon: Facebook },
                { label: "Instagram", href: "https://www.instagram.com/plusfacilities_?igsh=YmUzMzM3Y2xtNW5r", Icon: Instagram },
                { label: "TikTok", href: "https://www.tiktok.com/@plusfacilities", Icon: TikTokIcon },
              ].map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="rounded-full border border-white/10 p-2.5 transition hover:border-accent hover:bg-accent/10 hover:text-accent"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="mb-5 font-display text-sm uppercase tracking-[0.18em] text-accent">{t("footer.nav")}</h4>
            <ul className="space-y-3 text-sm">
              {navLinks.map(l => (
                <li key={l.to}><Link to={l.to} className="text-[oklch(0.82_0.012_190)] transition hover:text-accent">{t(`nav.${l.key}`)}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-5 font-display text-sm uppercase tracking-[0.18em] text-accent">{t("footer.services")}</h4>
            <ul className="space-y-3 text-sm">
              {services.map(s => (
                <li key={s.slug}><Link to="/services" className="text-[oklch(0.82_0.012_190)] transition hover:text-accent">{t(`svc.${s.slug}.short`)}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-5 font-display text-sm uppercase tracking-[0.18em] text-accent">{t("footer.contact")}</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex gap-3"><MapPin size={16} className="mt-0.5 text-accent shrink-0" /><span className="text-[oklch(0.82_0.012_190)]">{t("addis")}</span></li>
              <li className="flex gap-3"><Phone size={16} className="mt-0.5 text-accent shrink-0" /><a href={`tel:${site.phone}`} className="text-[oklch(0.82_0.012_190)] hover:text-accent">{site.phone}</a></li>
              <li className="flex gap-3"><Mail size={16} className="mt-0.5 text-accent shrink-0" /><a href={`mailto:${site.email}`} className="text-[oklch(0.82_0.012_190)] hover:text-accent">{site.email}</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-[oklch(0.7_0.015_190)] md:flex-row">
          <p>© {new Date().getFullYear()} Plus Facilities. {t("footer.rights")}</p>
          <p>{t("footer.tagline")}</p>
        </div>
      </div>
    </footer>
  );
}
