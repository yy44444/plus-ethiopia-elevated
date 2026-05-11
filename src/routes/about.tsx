import { createFileRoute } from "@tanstack/react-router";
import { Award, Users, Target, Compass } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import aboutImg from "@/assets/about.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Plus Facilities" },
      { name: "description", content: "Plus Facilities is Ethiopia's integrated facility management partner — trained teams, modern systems, measurable standards." },
      { property: "og:title", content: "About Plus Facilities" },
      { property: "og:description", content: "Trained teams, modern systems, measurable standards." },
    ],
  }),
  component: About,
});

function About() {
  const values = [
    { icon: Target, title: "Precision", desc: "We measure what we manage. Every site has KPIs, audits, and reporting." },
    { icon: Users, title: "People-first", desc: "Our staff are trained, paid fairly, and equipped to perform with pride." },
    { icon: Compass, title: "Accountability", desc: "A named account manager owns your site — not a call centre, not a queue." },
    { icon: Award, title: "Excellence", desc: "We hold ourselves to international standards adapted for Ethiopia." },
  ];
  return (
    <>
      <PageHeader eyebrow="About us" title={<>Elevating standards in <em className="not-italic text-gradient-brand">facility management</em></>} intro="A modern Ethiopian company built around one idea: facility services should make your business better, not just keep it clean." />

      <section className="container-px mx-auto max-w-7xl py-20">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <img src={aboutImg} alt="Team" loading="lazy" width={1280} height={1024} className="rounded-3xl shadow-elegant" />
          <div>
            <h2 className="text-3xl md:text-4xl">Built for the businesses shaping Ethiopia's future.</h2>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              Plus Facilities delivers integrated facility management solutions designed to create cleaner, safer, and more efficient environments. From commercial buildings and residential properties to corporate events and hospitality spaces, our trained professionals provide reliable services with precision, professionalism, and attention to detail.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              We combine modern operational standards with customer-focused service to help clients maintain environments that reflect excellence — across Addis Ababa and beyond.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gradient-soft py-24">
        <div className="container-px mx-auto max-w-7xl">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-accent">Our values</p>
          <h2 className="mt-3 max-w-2xl text-4xl md:text-5xl">Four principles. Every site. Every shift.</h2>
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <div key={v.title} className="rounded-2xl border border-border bg-card p-7 shadow-soft transition hover:-translate-y-1 hover:shadow-elegant">
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-brand text-white"><v.icon size={20} /></div>
                <h3 className="text-xl">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
