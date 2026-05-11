import { createFileRoute } from "@tanstack/react-router";
import { Building2, Hotel, Home, Warehouse, ShoppingBag, PartyPopper, Building } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";

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

const items = [
  { icon: Building2, title: "Corporate Offices", desc: "Discreet daytime cleaning, mailroom and reception support for premium workplaces." },
  { icon: Hotel, title: "Hotels & Hospitality", desc: "Housekeeping, public-area care and brand-standard service for hospitality leaders." },
  { icon: Home, title: "Residential Apartments", desc: "Common-area maintenance, security and pest programs for modern residences." },
  { icon: Building, title: "Commercial Buildings", desc: "Multi-tenant facility management with measurable SLAs and transparent reporting." },
  { icon: Warehouse, title: "Warehouses", desc: "Industrial cleaning, perimeter security and pest exclusion for logistics operations." },
  { icon: ShoppingBag, title: "Retail Spaces", desc: "High-traffic floor care, glass detailing and visitor-ready presentation every day." },
  { icon: PartyPopper, title: "Events & Venues", desc: "Pre-event setup, on-site coordination and post-event recovery — all in one team." },
];

function Industries() {
  return (
    <>
      <PageHeader eyebrow="Industries we serve" title={<>Tailored programs for every <em className="not-italic text-gradient-brand">environment</em></>} intro="From corporate towers to residential estates, our service models adapt to your operational realities." />
      <section className="container-px mx-auto max-w-7xl pb-32">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((it) => (
            <div key={it.title} className="group relative overflow-hidden rounded-3xl border border-border bg-card p-8 shadow-soft transition duration-500 hover:-translate-y-1 hover:shadow-elegant">
              <div className="absolute -bottom-16 -right-16 h-40 w-40 rounded-full bg-gradient-brand opacity-0 blur-3xl transition duration-500 group-hover:opacity-25" />
              <it.icon className="text-accent transition group-hover:scale-110" size={32} />
              <h3 className="relative mt-5 text-xl">{it.title}</h3>
              <p className="relative mt-2 text-sm leading-relaxed text-muted-foreground">{it.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
