import type { ReactNode } from "react";

export function PageHeader({ eyebrow, title, intro }: { eyebrow: string; title: ReactNode; intro?: string }) {
  return (
    <section className="relative overflow-hidden pt-40 pb-20 md:pt-48 md:pb-28">
      <div className="absolute inset-0 -z-10 bg-gradient-soft" />
      <div className="absolute -top-32 -right-32 -z-10 h-[500px] w-[500px] animate-float-slow rounded-full opacity-30" style={{ background: "radial-gradient(circle, oklch(0.72 0.08 155 / 0.4), transparent 70%)" }} />
      <div className="absolute -bottom-32 -left-32 -z-10 h-[400px] w-[400px] animate-float-slow rounded-full opacity-30" style={{ background: "radial-gradient(circle, oklch(0.55 0.07 200 / 0.4), transparent 70%)", animationDelay: "-7s" }} />
      <div className="container-px mx-auto max-w-7xl">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-accent animate-fade-up">{eyebrow}</p>
        <h1 className="max-w-4xl text-5xl leading-[1.05] md:text-6xl lg:text-7xl animate-fade-up delay-100">{title}</h1>
        {intro && <p className="mt-6 max-w-2xl text-lg text-muted-foreground animate-fade-up delay-200">{intro}</p>}
      </div>
    </section>
  );
}
