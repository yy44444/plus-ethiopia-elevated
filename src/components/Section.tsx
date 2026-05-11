import type { ReactNode } from "react";

export function Section({
  eyebrow, title, intro, children, center = false, className = "",
}: { eyebrow?: string; title: ReactNode; intro?: string; children?: ReactNode; center?: boolean; className?: string }) {
  return (
    <section className={`container-px mx-auto max-w-7xl py-24 md:py-32 ${className}`}>
      <div className={center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
        {eyebrow && (
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-accent">{eyebrow}</p>
        )}
        <h2 className="text-4xl leading-[1.1] md:text-5xl lg:text-[3.5rem]">{title}</h2>
        {intro && <p className="mt-5 text-lg leading-relaxed text-muted-foreground">{intro}</p>}
      </div>
      {children}
    </section>
  );
}
