import logo from "@/assets/logo.png";

export function Logo({
  className,
  invert = false,
}: { className?: string; invert?: boolean }) {
  return (
    <img
      src={logo}
      alt="Plus Facilities"
      className={`${className ?? "h-14 md:h-16"} w-auto object-contain ${invert ? "brightness-0 invert" : ""}`}
      style={{ imageRendering: "auto" }}
    />
  );
}
