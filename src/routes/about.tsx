import { createFileRoute } from "@tanstack/react-router";
import { Award, Users, Target, Compass } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import aboutImg from "@/assets/about.jpg";
import { useT } from "@/lib/i18n";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Plus Facilities | Leading Facility Management Company in Ethiopia" },
      { name: "description", content: "Plus Facilities is a trusted facility management company in Addis Ababa, Ethiopia — delivering cleaning, security, landscaping, pest control and event support with trained teams and modern systems." },
      { property: "og:title", content: "About Plus Facilities — Addis Ababa" },
      { property: "og:description", content: "Trained teams, modern systems, measurable standards across Ethiopia." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

function About() {
  const { t } = useT();
  const icons = [Target, Users, Compass, Award];
  return (
    <>
      <PageHeader
        eyebrow={t("about.eyebrow")}
        title={<>{t("about.title.1")} <em className="not-italic text-gradient-brand">{t("about.title.2")}</em></>}
        intro={t("about.intro")}
      />

      <section className="container-px mx-auto max-w-7xl py-20">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <img src={aboutImg} alt="Team" loading="lazy" width={1280} height={1024} className="rounded-3xl shadow-elegant" />
          <div>
            <h2 className="text-3xl md:text-4xl">{t("about.section.title")}</h2>
            <p className="mt-6 leading-relaxed text-muted-foreground">{t("about.section.p1")}</p>
            <p className="mt-4 leading-relaxed text-muted-foreground">{t("about.section.p2")}</p>
          </div>
        </div>
      </section>

      <section className="bg-gradient-soft py-24">
        <div className="container-px mx-auto max-w-7xl">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-accent">{t("about.values.eyebrow")}</p>
          <h2 className="mt-3 max-w-2xl text-4xl md:text-5xl">{t("about.values.title")}</h2>
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {icons.map((Icon, i) => {
              const n = i + 1;
              return (
                <div key={n} className="rounded-2xl border border-border bg-card p-7 shadow-soft transition hover:-translate-y-1 hover:shadow-elegant">
                  <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-brand text-white"><Icon size={20} /></div>
                  <h3 className="text-xl">{t(`about.v${n}.t`)}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{t(`about.v${n}.d`)}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
