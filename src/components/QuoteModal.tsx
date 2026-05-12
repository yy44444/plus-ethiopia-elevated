import { useState, createContext, useContext, type ReactNode } from "react";
import { X } from "lucide-react";
import { services } from "@/lib/site";
import { useT } from "@/lib/i18n";

const Ctx = createContext<{ open: () => void } | null>(null);
export const useQuote = () => {
  const c = useContext(Ctx);
  if (!c) throw new Error("QuoteProvider missing");
  return c;
};

export function QuoteProvider({ children }: { children: ReactNode }) {
  const [isOpen, setOpen] = useState(false);
  const [sent, setSent] = useState(false);

  return (
    <Ctx.Provider value={{ open: () => { setOpen(true); setSent(false); } }}>
      {children}
      {isOpen && <QuoteDialog onClose={() => setOpen(false)} sent={sent} setSent={setSent} />}
    </Ctx.Provider>
  );
}

function QuoteDialog({ onClose, sent, setSent }: { onClose: () => void; sent: boolean; setSent: (v: boolean) => void }) {
  const { t } = useT();
  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 animate-fade-in"
      style={{ background: "oklch(0.18 0.03 220 / 0.55)", backdropFilter: "blur(8px)" }}
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-lg rounded-3xl bg-card p-8 shadow-elegant animate-fade-up"
      >
        <button
          onClick={onClose}
          className="absolute right-5 top-5 rounded-full p-2 text-muted-foreground hover:bg-muted transition"
          aria-label="Close"
        >
          <X size={18} />
        </button>
        {sent ? (
          <div className="py-10 text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-brand text-primary-foreground text-3xl">✓</div>
            <h3 className="text-2xl">{t("quote.received.title")}</h3>
            <p className="mt-2 text-muted-foreground">{t("quote.received.sub")}</p>
          </div>
        ) : (
          <>
            <p className="text-xs uppercase tracking-[0.2em] text-accent">{t("quote.eyebrow")}</p>
            <h3 className="mt-2 text-2xl">{t("quote.title")}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{t("quote.sub")}</p>
            <form
              className="mt-6 grid gap-4"
              onSubmit={(e) => { e.preventDefault(); setSent(true); }}
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <input required placeholder={t("quote.fullname")} className="rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-primary transition" />
                <input required type="tel" placeholder={t("quote.phone")} className="rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-primary transition" />
              </div>
              <input required type="email" placeholder={t("quote.email")} className="rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-primary transition" />
              <select className="rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-primary transition">
                <option value="">{t("quote.service.placeholder")}</option>
                {services.map(s => <option key={s.slug} value={s.slug}>{t(`svc.${s.slug}.title`)}</option>)}
              </select>
              <textarea rows={3} placeholder={t("quote.message")} className="rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-primary transition" />
              <button type="submit" className="mt-2 rounded-xl bg-gradient-brand px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-soft transition hover:shadow-elegant hover:-translate-y-0.5">
                {t("quote.submit")}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
