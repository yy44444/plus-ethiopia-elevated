import { createFileRoute } from "@tanstack/react-router";
import { Building2, Hotel, Home, Warehouse, ShoppingBag, PartyPopper, Building } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { useT } from "@/lib/i18n";

export const Route = createFileRoute("/industries")({
  head: () => ({
    meta: [
      { title: "Industries — Plus Facilities" },
      { name: "description", content: "We serve corporate offices, hotels, residences, commercial buildings, warehouses, retail spaces and event venues across Ethiopia." },
      { property: "og:title", content: "Industries we serve" },
      { property: "og:description", content: "Tailored facility services across seven industry verticals." },
    ],
  }),
  component: Industries,
});

const icons = [Building2, Hotel, Home, Building, Warehouse, ShoppingBag, PartyPopper];

function Industries() {
  const { t } = useT();
  return (
    <>
      <PageHeader
        eyebrow={t("ind.eyebrow")}
        title={<>{t("ind.title.1")} <em className="not-italic text-gradient-brand">{t("ind.title.2")}</em></>}
        intro={t("ind.intro")}
      />
      <section className="container-px mx-auto max-w-7xl pb-32">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {icons.map((Icon, i) => {
            const n = i + 1;
            return (
              <div key={n} className="group relative overflow-hidden rounded-3xl border border-border bg-card p-8 shadow-soft transition duration-500 hover:-translate-y-1 hover:shadow-elegant">
                <div className="absolute -bottom-16 -right-16 h-40 w-40 rounded-full bg-gradient-brand opacity-0 blur-3xl transition duration-500 group-hover:opacity-25" />
                <Icon className="text-accent transition group-hover:scale-110" size={32} />
                <h3 className="relative mt-5 text-xl">{t(`ind.${n}.t`)}</h3>
                <p className="relative mt-2 text-sm leading-relaxed text-muted-foreground">{t(`ind.${n}.d`)}</p>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
