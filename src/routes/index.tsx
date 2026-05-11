import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Sparkles, ShieldCheck, Leaf, CalendarCheck, Bug, Users, Clock, Award, Zap, Heart, Wrench } from "lucide-react";
import heroImg from "@/assets/hero.jpg";
import aboutImg from "@/assets/about.jpg";
import { Section } from "@/components/Section";
import { useQuote } from "@/components/QuoteModal";
import { services } from "@/lib/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Plus Facilities — Premium Facility Management Ethiopia" },
      { name: "description", content: "Integrated cleaning, security, landscaping, pest control and event support services for businesses across Ethiopia." },
      { property: "og:title", content: "Plus Facilities" },
      { property: "og:description", content: "Premium integrated facility management across Ethiopia." },
    ],
  }),
  component: Home,
});

const iconMap = { Sparkles, ShieldCheck, Leaf, CalendarCheck, Bug } as const;

function Hero() {
  const { open } = useQuote();
  return (
    <section className="relative min-h-[100svh] overflow-hidden">
      <img src={heroImg} alt="Plus Facilities team" className="absolute inset-0 h-full w-full object-cover" width={1920} height={1280} />
      <div className="absolute inset-0" style={{ background: "var(--gradient-hero-overlay)" }} />
      {/* geometric */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 h-[500px] w-[500px] animate-spin-slow rounded-full border border-white/10" />
        <div className="absolute top-1/4 -right-40 h-[700px] w-[700px] animate-spin-slow rounded-full border border-white/5" style={{ animationDuration: "60s", animationDirection: "reverse" }} />
        <div className="absolute bottom-10 left-10 h-72 w-72 animate-float-slow rounded-full opacity-30 blur-3xl" style={{ background: "oklch(0.72 0.08 155 / 0.5)" }} />
      </div>

      <div className="container-px relative mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-center pt-32 pb-20">
        <div className="max-w-3xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-white backdrop-blur-md animate-fade-up">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            Trusted across Ethiopia
          </div>
          <h1 className="text-5xl leading-[1.05] text-white md:text-6xl lg:text-7xl animate-fade-up delay-100">
            Professional Facility Management <span className="text-gradient-brand bg-gradient-to-r from-[oklch(0.85_0.08_165)] to-[oklch(0.75_0.06_195)] bg-clip-text text-transparent">Solutions You Can Trust</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/85 md:text-xl animate-fade-up delay-200">
            Delivering premium cleaning, security, landscaping, pest control, and event support services for businesses, residences, and events across Ethiopia.
          </p>
          <div className="mt-10 flex flex-wrap gap-4 animate-fade-up delay-300">
            <button onClick={open} className="group inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 text-sm font-semibold text-primary shadow-elegant transition hover:-translate-y-0.5">
              Get a Free Quote
              <ArrowRight size={16} className="transition group-hover:translate-x-1" />
            </button>
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/5 px-7 py-4 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/10">
              Contact Us
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
  return (
    <section className="container-px mx-auto max-w-7xl py-24 md:py-32">
      <div className="grid items-center gap-16 lg:grid-cols-2">
        <div className="relative">
          <div className="absolute -inset-6 -z-10 rounded-3xl bg-gradient-brand opacity-20 blur-2xl" />
          <img src={aboutImg} alt="Plus Facilities team" loading="lazy" width={1280} height={1024} className="rounded-3xl shadow-elegant" />
          <div className="absolute -bottom-8 -right-8 hidden rounded-2xl bg-card p-6 shadow-elegant md:block">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-brand"><Award className="text-white" size={22} /></div>
              <div>
                <p className="font-display text-2xl">10+ Years</p>
                <p className="text-xs text-muted-foreground">of operational excellence</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-accent">About Plus Facilities</p>
          <h2 className="text-4xl leading-[1.1] md:text-5xl">Elevating Standards in Facility Management</h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Plus Facilities delivers integrated facility management solutions designed to create cleaner, safer, and more efficient environments. From commercial buildings and residential properties to corporate events and hospitality spaces, our trained professionals provide reliable services with precision, professionalism, and attention to detail.
          </p>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            We combine modern operational standards with customer-focused service to help clients maintain environments that reflect excellence.
          </p>

          <div className="mt-10 grid grid-cols-3 gap-4 border-t border-border pt-8">
            {[
              { n: "500+", l: "Projects delivered" },
              { n: "120+", l: "Trained staff" },
              { n: "98%", l: "Client retention" },
            ].map((s) => (
              <div key={s.l}>
                <p className="font-display text-3xl text-gradient-brand md:text-4xl">{s.n}</p>
                <p className="mt-1 text-xs text-muted-foreground">{s.l}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ServicesGrid() {
  return (
    <section className="relative bg-gradient-soft">
      <Section eyebrow="What we do" title={<>Comprehensive services, <em className="not-italic text-gradient-brand">expertly delivered</em></>} intro="Five integrated service lines, one accountable partner — engineered for businesses that demand consistency.">
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
                  <h3 className="text-2xl">{s.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.description}</p>
                  <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                    Learn more <ArrowRight size={14} className="transition group-hover:translate-x-1" />
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
  const items = [
    { icon: Users, title: "Trained Professionals", desc: "Vetted, uniformed teams trained on international service protocols." },
    { icon: Wrench, title: "Reliable Operations", desc: "Predictable schedules, accountable supervisors, transparent reporting." },
    { icon: Zap, title: "Modern Equipment", desc: "Industry-grade tools and eco-conscious chemicals for superior results." },
    { icon: Clock, title: "Fast Response Time", desc: "Dispatch within hours for urgent or after-hours requirements." },
    { icon: Award, title: "High Service Standards", desc: "Quality audits and KPIs at every site, every cycle." },
    { icon: Heart, title: "Customer Satisfaction", desc: "A dedicated account manager who answers when you call." },
  ];
  return (
    <Section eyebrow="The Plus difference" title="Why Businesses Trust Plus Facilities" intro="Six commitments we hold ourselves to — every site, every shift.">
      <div className="mt-16 grid gap-px overflow-hidden rounded-3xl border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
        {items.map((it) => (
          <div key={it.title} className="group bg-card p-8 transition hover:bg-gradient-soft">
            <it.icon className="text-accent transition group-hover:scale-110" size={28} />
            <h3 className="mt-5 text-xl">{it.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{it.desc}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

function CTA() {
  const { open } = useQuote();
  return (
    <section className="container-px mx-auto max-w-7xl pb-32">
      <div className="relative overflow-hidden rounded-[2rem] bg-gradient-brand p-12 shadow-elegant md:p-20">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(circle at 20% 30%, white, transparent 40%), radial-gradient(circle at 80% 70%, white, transparent 40%)" }} />
        <div className="relative grid items-center gap-8 md:grid-cols-[1.5fr,1fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/70">Ready to begin?</p>
            <h2 className="mt-3 text-4xl text-white md:text-5xl">Let's create better environments together.</h2>
          </div>
          <div className="flex flex-wrap gap-3 md:justify-end">
            <button onClick={open} className="rounded-full bg-white px-7 py-4 text-sm font-semibold text-primary shadow-soft transition hover:-translate-y-0.5">Get a Free Quote</button>
            <Link to="/contact" className="rounded-full border border-white/30 px-7 py-4 text-sm font-semibold text-white transition hover:bg-white/10">Talk to us</Link>
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
