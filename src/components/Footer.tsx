import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Mail, Phone, MapPin } from "lucide-react";
import { Logo } from "./Logo";
import { navLinks, services, site } from "@/lib/site";
import { useT } from "@/lib/i18n";

export function Footer() {
  const { t } = useT();
  return (
    <footer className="relative mt-32 overflow-hidden bg-[oklch(0.16_0.03_215)] text-[oklch(0.92_0.01_180)]">
      <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: "radial-gradient(circle at 20% 0%, oklch(0.72 0.08 155) 0%, transparent 50%), radial-gradient(circle at 80% 100%, oklch(0.55 0.07 200) 0%, transparent 50%)" }} />
      <div className="container-px relative mx-auto max-w-7xl py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Logo className="h-20 md:h-24" invert />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-[oklch(0.78_0.015_190)]">
              {t("footer.about")}
            </p>
            <div className="mt-6 flex gap-5">
              {[
                { label: "Facebook", href: "https://www.facebook.com/share/17n4CKBvN6/?mibextid=wwXIfr", Icon: Facebook },
                { label: "Instagram", href: "https://www.instagram.com/plusfacilities", Icon: Instagram },
                { label: "TikTok", href: "https://www.tiktok.com/@plusfacilities?_r=1&_t=ZS-96RPRW6Ekfw", Icon: TikTokIcon },
              ].map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="group flex flex-col items-center gap-1.5"
                >
                  <span className="rounded-full border border-white/10 p-2.5 transition group-hover:border-accent group-hover:bg-accent/10 group-hover:text-accent">
                    <Icon size={16} />
                  </span>
                  <span className="text-[10px] uppercase tracking-[0.14em] text-[oklch(0.78_0.015_190)] transition group-hover:text-accent">
                    {label}
                  </span>
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
