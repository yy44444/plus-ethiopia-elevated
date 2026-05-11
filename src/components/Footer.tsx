import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Linkedin, Twitter, Mail, Phone, MapPin } from "lucide-react";
import { Logo } from "./Logo";
import { navLinks, services, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="relative mt-32 overflow-hidden bg-[oklch(0.16_0.03_215)] text-[oklch(0.92_0.01_180)]">
      <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: "radial-gradient(circle at 20% 0%, oklch(0.72 0.08 155) 0%, transparent 50%), radial-gradient(circle at 80% 100%, oklch(0.55 0.07 200) 0%, transparent 50%)" }} />
      <div className="container-px relative mx-auto max-w-7xl py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Logo className="h-12" invert />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-[oklch(0.78_0.015_190)]">
              Integrated facility management delivering cleaner, safer and more efficient environments across Ethiopia.
            </p>
            <div className="mt-6 flex gap-3">
              {[Facebook, Instagram, Linkedin, Twitter].map((Icon, i) => (
                <a key={i} href="#" aria-label="social" className="rounded-full border border-white/10 p-2.5 transition hover:border-accent hover:bg-accent/10 hover:text-accent">
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="mb-5 font-display text-sm uppercase tracking-[0.18em] text-accent">Navigation</h4>
            <ul className="space-y-3 text-sm">
              {navLinks.map(l => (
                <li key={l.to}><Link to={l.to} className="text-[oklch(0.82_0.012_190)] transition hover:text-accent">{l.label}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-5 font-display text-sm uppercase tracking-[0.18em] text-accent">Services</h4>
            <ul className="space-y-3 text-sm">
              {services.map(s => (
                <li key={s.slug}><Link to="/services" className="text-[oklch(0.82_0.012_190)] transition hover:text-accent">{s.short}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-5 font-display text-sm uppercase tracking-[0.18em] text-accent">Contact</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex gap-3"><MapPin size={16} className="mt-0.5 text-accent shrink-0" /><span className="text-[oklch(0.82_0.012_190)]">{site.location}</span></li>
              <li className="flex gap-3"><Phone size={16} className="mt-0.5 text-accent shrink-0" /><a href={`tel:${site.phone}`} className="text-[oklch(0.82_0.012_190)] hover:text-accent">{site.phone}</a></li>
              <li className="flex gap-3"><Mail size={16} className="mt-0.5 text-accent shrink-0" /><a href={`mailto:${site.email}`} className="text-[oklch(0.82_0.012_190)] hover:text-accent">{site.email}</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-[oklch(0.7_0.015_190)] md:flex-row">
          <p>© {new Date().getFullYear()} Plus Facilities. All rights reserved.</p>
          <p>Designed for excellence. Built for trust.</p>
        </div>
      </div>
    </footer>
  );
}
