import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Sparkles, ShieldCheck, Leaf, CalendarCheck, Bug, Users, Clock, Award, Zap, Heart, Wrench } from "lucide-react";
import heroImg from "@/assets/hero.jpg";
import aboutImg from "@/assets/about.jpg";
import { Section } from "@/components/Section";
import { useQuote } from "@/components/QuoteModal";
import { services } from "@/lib/site";
import { useT } from "@/lib/i18n";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Plus Facilities | Cleaning, Security & Facility Management in Addis Ababa, Ethiopia" },
      { name: "description", content: "Trusted facility management company in Addis Ababa offering cleaning services, security services, pest control, landscaping, event support and property management across Ethiopia." },
      { name: "keywords", content: "cleaning services Addis Ababa, security services Ethiopia, pest control Addis Ababa, gardening services Ethiopia, property management Addis Ababa, event support services Ethiopia, facility management Ethiopia" },
      { property: "og:title", content: "Plus Facilities — Facility Management in Addis Ababa" },
      { property: "og:description", content: "Premium cleaning, security, landscaping, pest control and event support services across Addis Ababa and Ethiopia." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const iconMap = { Sparkles, ShieldCheck, Leaf, CalendarCheck, Bug } as const;

function Hero() {
  const { open } = useQuote();
  const { t } = useT();
  return (
    <section className="relative min-h-[100svh] overflow-hidden">
      <img src={heroImg} alt="Plus Facilities team" className="absolute inset-0 h-full w-full object-cover" width={1920} height={1280} />
      <div className="absolute inset-0" style={{ background: "var(--gradient-hero-overlay)" }} />
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 h-[500px] w-[500px] animate-spin-slow rounded-full border border-white/10" />
        <div className="absolute top-1/4 -right-40 h-[700px] w-[700px] animate-spin-slow rounded-full border border-white/5" style={{ animationDuration: "60s", animationDirection: "reverse" }} />
        <div className="absolute bottom-10 left-10 h-72 w-72 animate-float-slow rounded-full opacity-30 blur-3xl" style={{ background: "oklch(0.72 0.08 155 / 0.5)" }} />
      </div>

      <div className="container-px relative mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-center pt-32 pb-20">
        <div className="max-w-3xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-white backdrop-blur-md animate-fade-up">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            {t("hero.badge")}
          </div>
          <h1 className="text-5xl leading-[1.05] text-white md:text-6xl lg:text-7xl animate-fade-up delay-100">
            {t("hero.title.1")} <span className="text-gradient-brand bg-gradient-to-r from-[oklch(0.85_0.08_165)] to-[oklch(0.75_0.06_195)] bg-clip-text text-transparent">{t("hero.title.2")}</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/85 md:text-xl animate-fade-up delay-200">
            {t("hero.subtitle")}
          </p>
          <div className="mt-10 flex flex-wrap gap-4 animate-fade-up delay-300">
            <button onClick={open} className="group inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 text-sm font-semibold text-primary shadow-elegant transition hover:-translate-y-0.5">
              {t("cta.quote")}
              <ArrowRight size={16} className="transition group-hover:translate-x-1" />
            </button>
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/5 px-7 py-4 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/10">
              {t("cta.contact")}
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 text-white/60 md:block">
        <div className="flex h-10 w-6 justify-center rounded-full border border-white/40 pt-2">
          <span className="h-2 w-0.5 animate-bounce rounded-full bg-white/80" />
        </div>
      </div>
    </section>
  );
}

function About() {
  const { t } = useT();
  return (
    <section className="container-px mx-auto max-w-7xl py-24 md:py-32">
      <div className="grid items-center gap-16 lg:grid-cols-2">
        <div className="relative">
          <div className="absolute -inset-6 -z-10 rounded-3xl bg-gradient-brand opacity-20 blur-2xl" />
          <img src={aboutImg} alt="Plus Facilities team" loading="lazy" width={1280} height={1024} className="rounded-3xl shadow-elegant" />
        </div>
        <div>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-accent">{t("home.about.eyebrow")}</p>
          <h2 className="text-4xl leading-[1.1] md:text-5xl">{t("home.about.title")}</h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">{t("home.about.p1")}</p>
          <p className="mt-4 leading-relaxed text-muted-foreground">{t("home.about.p2")}</p>

          <div className="mt-10 grid gap-5 border-t border-border pt-8 sm:grid-cols-3">
            {[1, 2, 3].map((n) => (
              <div key={n}>
                <p className="font-display text-lg text-primary">{t(`home.about.t${n}`)}</p>
                <p className="mt-1 text-sm text-muted-foreground">{t(`home.about.d${n}`)}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ServicesGrid() {
  const { t } = useT();
  return (
    <section className="relative bg-gradient-soft">
      <Section
        eyebrow={t("home.services.eyebrow")}
        title={<>{t("home.services.title.1")} <em className="not-italic text-gradient-brand">{t("home.services.title.2")}</em></>}
        intro={t("home.services.intro")}
      >
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => {
            const Icon = iconMap[s.icon as keyof typeof iconMap];
            return (
              <Link key={s.slug} to="/services" className="group relative overflow-hidden rounded-3xl border border-border bg-card p-8 shadow-soft transition duration-500 hover:-translate-y-2 hover:shadow-elegant">
                <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-gradient-brand opacity-0 blur-2xl transition duration-500 group-hover:opacity-30" />
                <div className="relative">
                  <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-brand text-white shadow-soft transition duration-500 group-hover:scale-110 group-hover:rotate-6">
                    <Icon size={24} />
                  </div>
                  <p className="mb-2 text-xs font-mono text-muted-foreground">0{i + 1}</p>
                  <h3 className="text-2xl">{t(`svc.${s.slug}.title`)}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{t(`svc.${s.slug}.desc`)}</p>
                  <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                    {t("cta.learn")} <ArrowRight size={14} className="transition group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </Section>
    </section>
  );
}

function WhyUs() {
  const { t } = useT();
  const icons = [Users, Wrench, Zap, Clock, Award, Heart];
  return (
    <Section eyebrow={t("why.eyebrow")} title={t("why.title")} intro={t("why.intro")}>
      <div className="mt-16 grid gap-px overflow-hidden rounded-3xl border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
        {icons.map((Icon, i) => {
          const n = i + 1;
          return (
            <div key={n} className="group bg-card p-8 transition hover:bg-gradient-soft">
              <Icon className="text-accent transition group-hover:scale-110" size={28} />
              <h3 className="mt-5 text-xl">{t(`why.${n}.t`)}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{t(`why.${n}.d`)}</p>
            </div>
          );
        })}
      </div>
    </Section>
  );
}

function CTA() {
  const { open } = useQuote();
  const { t } = useT();
  return (
    <section className="container-px mx-auto max-w-7xl pb-32">
      <div className="relative overflow-hidden rounded-[2rem] bg-gradient-brand p-12 shadow-elegant md:p-20">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(circle at 20% 30%, white, transparent 40%), radial-gradient(circle at 80% 70%, white, transparent 40%)" }} />
        <div className="relative grid items-center gap-8 md:grid-cols-[1.5fr,1fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/70">{t("cta.eyebrow")}</p>
            <h2 className="mt-3 text-4xl text-white md:text-5xl">{t("cta.title")}</h2>
          </div>
          <div className="flex flex-wrap gap-3 md:justify-end">
            <button onClick={open} className="rounded-full bg-white px-7 py-4 text-sm font-semibold text-primary shadow-soft transition hover:-translate-y-0.5">{t("cta.quote")}</button>
            <Link to="/contact" className="rounded-full border border-white/30 px-7 py-4 text-sm font-semibold text-white transition hover:bg-white/10">{t("cta.talk")}</Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function Home() {
  return (
    <>
      <Hero />
      <About />
      <ServicesGrid />
      <WhyUs />
      <CTA />
    </>
  );
}
