import { createFileRoute } from "@tanstack/react-router";
import { Quote, Star } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";

export const Route = createFileRoute("/testimonials")({
  head: () => ({
    meta: [
      { title: "Testimonials — Plus Facilities" },
      { name: "description", content: "Hear from corporate, hospitality and residential clients across Ethiopia who trust Plus Facilities." },
      { property: "og:title", content: "Testimonials — Plus Facilities" },
      { property: "og:description", content: "What our clients say about Plus Facilities." },
    ],
  }),
  component: Testimonials,
});

const items = [
  { quote: "Plus Facilities transformed the cleanliness and professionalism of our office environment. Their team is reliable, organized, and highly professional.", name: "Selamawit Tadesse", role: "Operations Director", org: "Bole Corporate Tower" },
  { quote: "Their security and event support services exceeded our expectations with outstanding coordination and professionalism.", name: "Daniel Bekele", role: "General Manager", org: "Sheraton-area Hospitality Group" },
  { quote: "From the first walkthrough to monthly reporting, everything is handled with precision. They're the partner we wish we'd hired sooner.", name: "Hanna Mekonnen", role: "Facilities Lead", org: "Kazanchis Office Park" },
  { quote: "Landscaping has elevated the entire entrance experience for our residents. Beautiful, consistent, never an issue.", name: "Yonas Alemu", role: "Property Manager", org: "CMC Residences" },
  { quote: "Pest control was discreet, scheduled around guests, and effective. Our hospitality team only hears compliments.", name: "Mahlet Girma", role: "Hotel Manager", org: "Addis Boutique Hotel" },
  { quote: "A real account manager. Real reporting. Real results. That's all you can ask for.", name: "Robel Asfaw", role: "COO", org: "Megenagna Trade Center" },
];

function Testimonials() {
  return (
    <>
      <PageHeader eyebrow="Testimonials" title={<>What our clients <em className="not-italic text-gradient-brand">say</em></>} intro="Trusted by corporate, hospitality, and residential leaders across Ethiopia." />
      <section className="container-px mx-auto max-w-7xl pb-32">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((t, i) => (
            <figure key={i} className="group relative flex h-full flex-col rounded-3xl border border-border bg-card p-8 shadow-soft transition hover:-translate-y-1 hover:shadow-elegant">
              <Quote className="absolute right-6 top-6 text-accent/30" size={48} />
              <div className="mb-4 flex gap-0.5 text-accent">
                {Array.from({ length: 5 }).map((_, j) => <Star key={j} size={14} fill="currentColor" />)}
              </div>
              <blockquote className="relative text-base leading-relaxed text-foreground/90">"{t.quote}"</blockquote>
              <figcaption className="mt-6 border-t border-border pt-5">
                <p className="font-semibold">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.role} · {t.org}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
    </>
  );
}
