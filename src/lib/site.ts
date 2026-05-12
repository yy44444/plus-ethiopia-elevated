export const site = {
  name: "Plus Facilities",
  phone: "+251975123512",
  phoneDigits: "251975123512",
  email: "info@plusfacilities.com",
  location: "Addis Ababa, Ethiopia",
  whatsapp: "https://wa.me/251975123512",
  tagline: "Integrated Facility Management",
};

export const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/industries", label: "Industries" },
  
  { to: "/testimonials", label: "Testimonials" },
  { to: "/contact", label: "Contact" },
] as const;

export const services = [
  {
    slug: "cleaning",
    title: "Cleaning & Janitorial Services",
    short: "Cleaning & Janitorial",
    description:
      "Maintain spotless and hygienic environments with professional cleaning solutions tailored for offices, commercial properties, residential spaces, and hospitality facilities.",
    icon: "Sparkles",
  },
  {
    slug: "security",
    title: "Security Services",
    short: "Security",
    description:
      "Protect your property and operations with trained security personnel dedicated to safety, professionalism, and rapid response.",
    icon: "ShieldCheck",
  },
  {
    slug: "landscaping",
    title: "Landscaping & Grounds Maintenance",
    short: "Landscaping",
    description:
      "Enhance outdoor spaces with expertly maintained gardens, greenery, and landscape solutions that create lasting impressions.",
    icon: "Leaf",
  },
  {
    slug: "events",
    title: "Event Support Services",
    short: "Event Support",
    description:
      "Ensure smooth and organized events with reliable operational support, setup assistance, crowd coordination, and venue preparation.",
    icon: "CalendarCheck",
  },
  {
    slug: "pest",
    title: "Pest Control Services",
    short: "Pest Control",
    description:
      "Eliminate pests effectively using safe and modern treatment methods designed for residential, commercial, and industrial environments.",
    icon: "Bug",
  },
] as const;
