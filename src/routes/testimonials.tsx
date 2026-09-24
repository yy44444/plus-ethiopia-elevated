import { createFileRoute } from "@tanstack/react-router";
import { Quote, Star } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { useT } from "@/lib/i18n";

export const Route = createFileRoute("/testimonials")({
  head: () => ({
    meta: [
      { title: "Client Testimonials | Plus Facilities Addis Ababa, Ethiopia" },
      { name: "description", content: "Read reviews from corporate, hospitality and residential clients in Addis Ababa and Ethiopia who trust Plus Facilities for cleaning, window cleaning and facility management." },
      { property: "og:title", content: "Testimonials — Plus Facilities Ethiopia" },
      { property: "og:description", content: "What our clients in Ethiopia say about Plus Facilities." },
      { property: "og:url", content: "/testimonials" },
    ],
    links: [{ rel: "canonical", href: "/testimonials" }],
  }),
  component: Testimonials,
});

const meta = [
  { name: "Selamawit Tadesse", org: "Bole Corporate Tower" },
  { name: "Daniel Bekele", org: "Sheraton-area Hospitality Group" },
  { name: "Hanna Mekonnen", org: "Kazanchis Office Park" },
  { name: "Yonas Alemu", org: "CMC Residences" },
  { name: "Mahlet Girma", org: "Addis Boutique Hotel" },
  { name: "Robel Asfaw", org: "Megenagna Trade Center" },
];

function Testimonials() {
  const { t } = useT();
  return (
    <>
      <PageHeader
        eyebrow={t("tst.eyebrow")}
        title={<>{t("tst.title.1")} <em className="not-italic text-gradient-brand">{t("tst.title.2")}</em></>}
        intro={t("tst.intro")}
      />
      <section className="container-px mx-auto max-w-7xl pb-32">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {meta.map((m, i) => {
            const n = i + 1;
            return (
              <figure key={n} className="group relative flex h-full flex-col rounded-3xl border border-border bg-card p-8 shadow-soft transition hover:-translate-y-1 hover:shadow-elegant">
                <Quote className="absolute right-6 top-6 text-accent/30" size={48} />
                <div className="mb-4 flex gap-0.5 text-accent">
                  {Array.from({ length: 5 }).map((_, j) => <Star key={j} size={14} fill="currentColor" />)}
                </div>
                <blockquote className="relative text-base leading-relaxed text-foreground/90">"{t(`tst.${n}.q`)}"</blockquote>
                <figcaption className="mt-6 border-t border-border pt-5">
                  <p className="font-semibold">{m.name}</p>
                  <p className="text-xs text-muted-foreground">{t(`tst.${n}.r`)} · {m.org}</p>
                </figcaption>
              </figure>
            );
          })}
        </div>
      </section>
    </>
  );
}
