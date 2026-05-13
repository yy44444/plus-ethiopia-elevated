export const site = {
  name: "Plus Facilities",
  phone: "+251975123512",
  phoneDigits: "251975123512",
  email: "info.plusfacilities@gmail.com",
  formEndpoint: "https://formsubmit.co/ajax/info.plusfacilities@gmail.com",
  location: "Addis Ababa, Ethiopia",
  whatsapp: "https://wa.me/251975123512",
  tagline: "Integrated Facility Management",
};

export const navLinks = [
  { to: "/", label: "Home", key: "home" },
  { to: "/about", label: "About", key: "about" },
  { to: "/services", label: "Services", key: "services" },
  { to: "/industries", label: "Industries", key: "industries" },
  { to: "/testimonials", label: "Testimonials", key: "testimonials" },
  { to: "/contact", label: "Contact", key: "contact" },
] as const;

export const services = [
  { slug: "cleaning", icon: "Sparkles" },
  { slug: "security", icon: "ShieldCheck" },
  { slug: "landscaping", icon: "Leaf" },
  { slug: "events", icon: "CalendarCheck" },
  { slug: "pest", icon: "Bug" },
] as const;
