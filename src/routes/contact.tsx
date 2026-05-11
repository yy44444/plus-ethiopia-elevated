import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { MapPin, Phone, Mail, MessageCircle, Send } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { site, services } from "@/lib/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Plus Facilities" },
      { name: "description", content: "Reach Plus Facilities in Addis Ababa. Phone, email, WhatsApp, and a quote form for new projects." },
      { property: "og:title", content: "Contact Plus Facilities" },
      { property: "og:description", content: "Talk to our team in Addis Ababa." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <>
      <PageHeader eyebrow="Contact" title={<>Let's create <em className="not-italic text-gradient-brand">better environments</em> together</>} intro="Reach our team for a tailored proposal, walk-through, or partnership discussion." />

      <section className="container-px mx-auto max-w-7xl pb-32">
        <div className="grid gap-10 lg:grid-cols-[1.1fr,1fr]">
          <div className="rounded-3xl border border-border bg-card p-8 shadow-soft md:p-12">
            <h2 className="text-3xl">Send us a message</h2>
            <p className="mt-2 text-sm text-muted-foreground">We respond within one business day.</p>
            {sent ? (
              <div className="mt-12 rounded-2xl border border-accent/30 bg-accent/5 p-8 text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-brand text-3xl text-white">✓</div>
                <h3 className="text-2xl">Thank you</h3>
                <p className="mt-2 text-muted-foreground">Your message has been received.</p>
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="mt-8 grid gap-5">
                <div className="grid gap-5 md:grid-cols-2">
                  <Field label="Full name" required><input required className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-primary" /></Field>
                  <Field label="Phone" required><input required type="tel" className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-primary" /></Field>
                </div>
                <Field label="Email" required><input required type="email" className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-primary" /></Field>
                <Field label="Service of interest">
                  <select className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-primary">
                    <option>Select a service…</option>
                    {services.map(s => <option key={s.slug}>{s.title}</option>)}
                  </select>
                </Field>
                <Field label="Message"><textarea rows={5} className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-primary" /></Field>
                <button type="submit" className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-brand px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-soft transition hover:-translate-y-0.5">
                  Send message <Send size={14} />
                </button>
              </form>
            )}
          </div>

          <div className="space-y-6">
            <ContactCard icon={MapPin} label="Office" value={site.location} />
            <ContactCard icon={Phone} label="Phone" value={site.phone} href={`tel:${site.phone}`} />
            <ContactCard icon={Mail} label="Email" value={site.email} href={`mailto:${site.email}`} />
            <ContactCard icon={MessageCircle} label="WhatsApp" value="Chat with our team" href={site.whatsapp} />

            <div className="overflow-hidden rounded-3xl border border-border shadow-soft">
              <iframe
                title="Plus Facilities location"
                src="https://www.google.com/maps?q=Addis+Ababa,Ethiopia&output=embed"
                width="100%"
                height="320"
                loading="lazy"
                className="block"
                style={{ border: 0 }}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function Field({ label, required, children }: { label: string; required?: boolean; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-2 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">{label}{required && <span className="text-accent"> *</span>}</span>
      {children}
    </label>
  );
}

function ContactCard({ icon: Icon, label, value, href }: { icon: any; label: string; value: string; href?: string }) {
  const Inner = (
    <div className="group flex items-start gap-4 rounded-2xl border border-border bg-card p-6 shadow-soft transition hover:-translate-y-0.5 hover:shadow-elegant">
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-brand text-white"><Icon size={20} /></div>
      <div>
        <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{label}</p>
        <p className="mt-1 text-base text-foreground">{value}</p>
      </div>
    </div>
  );
  return href ? <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">{Inner}</a> : Inner;
}
