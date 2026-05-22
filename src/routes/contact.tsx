import { createFileRoute } from "@tanstack/react-router";
import { useRef, useState } from "react";
import { MapPin, Phone, Mail, MessageCircle, Send, Loader2 } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { site, services } from "@/lib/site";
import { useT } from "@/lib/i18n";
import { sendForm } from "@/lib/sendForm";

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
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const { t } = useT();

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    const fd = new FormData(e.currentTarget);
    try {
      await sendForm({
        source: "Contact Form",
        name: String(fd.get("name") || ""),
        email: String(fd.get("email") || ""),
        phone: String(fd.get("phone") || ""),
        service: String(fd.get("service") || ""),
        message: String(fd.get("message") || ""),
      });
      formRef.current?.reset();
      setSent(true);
    } catch {
      setError("Could not send. Please try again or email us directly.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <PageHeader
        eyebrow={t("contact.eyebrow")}
        title={<>{t("contact.title.1")} <em className="not-italic text-gradient-brand">{t("contact.title.2")}</em> {t("contact.title.3")}</>}
        intro={t("contact.intro")}
      />

      <section className="container-px mx-auto max-w-7xl pb-32">
        <div className="grid gap-10 lg:grid-cols-[1.1fr,1fr]">
          <div className="rounded-3xl border border-border bg-card p-8 shadow-soft md:p-12">
            <h2 className="text-3xl">{t("contact.form.title")}</h2>
            <p className="mt-2 text-sm text-muted-foreground">{t("contact.form.sub")}</p>
            {sent ? (
              <div className="mt-12 rounded-2xl border border-accent/30 bg-accent/5 p-8 text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-brand text-3xl text-white">✓</div>
                <h3 className="text-2xl">{t("contact.form.thanks")}</h3>
                <p className="mt-2 text-muted-foreground">{t("contact.form.received")}</p>
              </div>
            ) : (
              <form ref={formRef} onSubmit={onSubmit} className="mt-8 grid gap-5">
                <div className="grid gap-5 md:grid-cols-2">
                  <Field label={t("contact.form.name")} required><input name="name" required className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-primary" /></Field>
                  <Field label={t("contact.form.phone")} required><input name="phone" required type="tel" className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-primary" /></Field>
                </div>
                <Field label={t("contact.form.email")} required><input name="email" required type="email" className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-primary" /></Field>
                <Field label={t("contact.form.service")}>
                  <select name="service" className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-primary">
                    <option value="">{t("contact.form.service.placeholder")}</option>
                    {services.map(s => <option key={s.slug} value={s.slug}>{t(`svc.${s.slug}.title`)}</option>)}
                  </select>
                </Field>
                <Field label={t("contact.form.message")}><textarea name="message" rows={5} className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-primary" /></Field>
                {error && <p className="text-xs text-destructive">{error}</p>}
                <button disabled={loading} type="submit" className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-brand px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-soft transition hover:-translate-y-0.5 disabled:opacity-70">
                  {loading ? <Loader2 size={14} className="animate-spin" /> : <>{t("cta.send")} <Send size={14} /></>}
                </button>
              </form>
            )}
          </div>

          <div className="space-y-6">
            <ContactCard icon={MapPin} label={t("contact.card.office")} value={t("addis")} />
            <ContactCard icon={Phone} label={t("contact.card.phone")} value={site.phone} href={`tel:${site.phone}`} />
            <ContactCard icon={Mail} label={t("contact.card.email")} value={site.email} href={`mailto:${site.email}`} />
            <ContactCard icon={MessageCircle} label={t("contact.card.whatsapp")} value={t("contact.card.whatsapp.value")} href={site.whatsapp} />

            <div className="overflow-hidden rounded-3xl border border-border shadow-soft">
              <iframe
                title="Plus Facilities location"
                src="https://www.google.com/maps?q=Ayat+Shopping+Mall+Addis+Ababa&output=embed"
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
