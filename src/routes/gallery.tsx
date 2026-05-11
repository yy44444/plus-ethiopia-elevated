import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import cleaning from "@/assets/cleaning.jpg";
import security from "@/assets/security.jpg";
import landscaping from "@/assets/landscaping.jpg";
import events from "@/assets/events.jpg";
import pest from "@/assets/pest.jpg";
import about from "@/assets/about.jpg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Plus Facilities" },
      { name: "description", content: "See Plus Facilities teams at work across Ethiopian offices, hotels, residences and event venues." },
      { property: "og:title", content: "Gallery — Plus Facilities" },
      { property: "og:description", content: "Our teams in action across Ethiopia." },
    ],
  }),
  component: Gallery,
});

const items = [
  { src: cleaning, label: "Cleaning teams in modern offices", span: "lg:col-span-2 lg:row-span-2" },
  { src: security, label: "Security at luxury properties" },
  { src: landscaping, label: "Landscaping & grounds care" },
  { src: events, label: "Event support in venues", span: "lg:col-span-2" },
  { src: pest, label: "Pest control specialists" },
  { src: about, label: "Our trained team" },
];

function Gallery() {
  return (
    <>
      <PageHeader eyebrow="Gallery" title={<>Our work, in <em className="not-italic text-gradient-brand">motion</em></>} intro="A visual record of teams, sites, and standards across Addis Ababa." />
      <section className="container-px mx-auto max-w-7xl pb-32">
        <div className="grid auto-rows-[260px] grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {items.map((it, i) => (
            <figure key={i} className={`group relative overflow-hidden rounded-3xl shadow-soft ${it.span ?? ""}`}>
              <img src={it.src} alt={it.label} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.18_0.04_220/0.85)] via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />
              <figcaption className="absolute bottom-5 left-5 right-5 translate-y-4 text-sm font-medium text-white opacity-0 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                {it.label}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
    </>
  );
}
