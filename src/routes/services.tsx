import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Sparkles, ShieldCheck, Leaf, CalendarCheck, Bug } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { services } from "@/lib/site";
import { useQuote } from "@/components/QuoteModal";
import { useT } from "@/lib/i18n";
import cleaning from "@/assets/cleaning.jpg";
import security from "@/assets/security.jpg";
import landscaping from "@/assets/landscaping.jpg";
import events from "@/assets/events.jpg";
import pest from "@/assets/pest.jpg";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Cleaning, Security, Pest Control & Landscaping Services in Addis Ababa | Plus Facilities" },
      { name: "description", content: "Professional cleaning services, security services, pest control, gardening, event support and property management in Addis Ababa and across Ethiopia. Request a free quote." },
      { name: "keywords", content: "cleaning services in Addis Ababa, best pest control company in Ethiopia, security services Addis Ababa, gardening services Addis Ababa, event support services Ethiopia, property management Ethiopia" },
      { property: "og:title", content: "Facility Services in Addis Ababa — Plus Facilities" },
      { property: "og:description", content: "Five integrated facility services for businesses in Addis Ababa and Ethiopia." },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: Services,
});

const iconMap = { Sparkles, ShieldCheck, Leaf, CalendarCheck, Bug } as const;
const imgMap: Record<string, string> = { cleaning, security, landscaping, events, pest };

function Services() {
  const { open } = useQuote();
  const { t } = useT();
  return (
    <>
      <PageHeader
        eyebrow={t("services.eyebrow")}
        title={<>{t("services.title.1")} <em className="not-italic text-gradient-brand">{t("services.title.2")}</em></>}
        intro={t("services.intro")}
      />

      <section className="container-px mx-auto max-w-7xl pb-32">
        <div className="space-y-24">
          {services.map((s, i) => {
            const Icon = iconMap[s.icon as keyof typeof iconMap];
            const reverse = i % 2 === 1;
            return (
              <div key={s.slug} className={`grid items-center gap-12 lg:grid-cols-2 ${reverse ? "lg:[&>*:first-child]:order-2" : ""}`}>
                <div className="relative">
                  <div className="absolute -inset-4 -z-10 rounded-3xl bg-gradient-brand opacity-20 blur-2xl" />
                  <img src={imgMap[s.slug]} alt={t(`svc.${s.slug}.title`)} loading="lazy" width={1280} height={896} className="rounded-3xl shadow-elegant" />
                </div>
                <div>
                  <div className="mb-5 inline-flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-brand text-white"><Icon size={20} /></div>
                    <span className="font-mono text-xs text-muted-foreground">0{i + 1} / 0{services.length}</span>
                  </div>
                  <h2 className="text-3xl md:text-4xl">{t(`svc.${s.slug}.title`)}</h2>
                  <p className="mt-5 text-lg leading-relaxed text-muted-foreground">{t(`svc.${s.slug}.desc`)}</p>
                  <button onClick={open} className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-brand px-6 py-3 text-sm font-semibold text-primary-foreground shadow-soft transition hover:-translate-y-0.5">
                    {t("cta.request_service")} <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
