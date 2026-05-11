import logo from "@/assets/logo.png";

export function Logo({ className = "h-10", invert = false }: { className?: string; invert?: boolean }) {
  return (
    <img
      src={logo}
      alt="Plus Facilities"
      className={`${className} w-auto object-contain ${invert ? "brightness-0 invert" : ""}`}
    />
  );
}
