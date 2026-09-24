export const site = {
  name: "Plus Facilities",
  phone: "+251975123512",
  phone2: "0911672209",
  phoneDigits: "251975123512",
  email: "info.plusfacilities@gmail.com",
  formEndpoint: "https://formsubmit.co/ajax/info.plusfacilities@gmail.com",
  location: "Ayat Shopping Mall, 2VC9+7M8, Addis Ababa",
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
  { slug: "cleaning", icon: "Sparkles", items: 3 },
  { slug: "window", icon: "AppWindow", items: 3 },
  { slug: "pest", icon: "Bug", items: 2 },
  { slug: "landscaping", icon: "Leaf", items: 0 },
  { slug: "events", icon: "CalendarCheck", items: 0 },
] as const;
