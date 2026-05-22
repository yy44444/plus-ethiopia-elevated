import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "en" | "am";

type Dict = Record<string, string>;

const en: Dict = {
  // Nav
  "nav.home": "Home",
  "nav.about": "About",
  "nav.services": "Services",
  "nav.industries": "Industries",
  "nav.testimonials": "Testimonials",
  "nav.contact": "Contact",
  "nav.quote": "Get a Quote",

  // Common
  "cta.quote": "Get a Free Quote",
  "cta.contact": "Contact Us",
  "cta.talk": "Talk to us",
  "cta.learn": "Learn more",
  "cta.request_service": "Request this service",
  "cta.send": "Send message",

  // Hero
  "hero.badge": "Trusted across Ethiopia",
  "hero.title.1": "Professional Facility Management",
  "hero.title.2": "Solutions You Can Trust",
  "hero.subtitle":
    "Delivering premium cleaning, security, landscaping, pest control, and event support services for businesses, residences, and events across Ethiopia.",

  // Home About
  "home.about.eyebrow": "About Plus Facilities",
  "home.about.title": "Elevating Standards in Facility Management",
  "home.about.p1":
    "Plus Facilities delivers integrated facility management solutions designed to create cleaner, safer, and more efficient environments. From commercial buildings and residential properties to corporate events and hospitality spaces, our trained professionals provide reliable services with precision, professionalism, and attention to detail.",
  "home.about.p2":
    "We combine modern operational standards with customer-focused service to help clients maintain environments that reflect excellence.",
  "home.about.t1": "Trained Teams",
  "home.about.d1": "Professional, vetted staff",
  "home.about.t2": "Reliable Service",
  "home.about.d2": "Consistent quality, every visit",
  "home.about.t3": "Reliable Support",
  "home.about.d3": "From real professionals, every time",

  // Services grid
  "home.services.eyebrow": "What we do",
  "home.services.title.1": "Comprehensive services,",
  "home.services.title.2": "expertly delivered",
  "home.services.intro":
    "Five integrated service lines, one accountable partner — engineered for businesses that demand consistency.",

  // Why us
  "why.eyebrow": "The Plus difference",
  "why.title": "Why Businesses Trust Plus Facilities",
  "why.intro": "Six commitments we hold ourselves to — every site, every shift.",
  "why.1.t": "Trained Professionals",
  "why.1.d": "Vetted, uniformed teams trained on international service protocols.",
  "why.2.t": "Reliable Operations",
  "why.2.d": "Predictable schedules, accountable supervisors, transparent reporting.",
  "why.3.t": "Modern Equipment",
  "why.3.d": "Industry-grade tools and eco-conscious chemicals for superior results.",
  "why.4.t": "Fast Response Time",
  "why.4.d": "Dispatch within hours for urgent or after-hours requirements.",
  "why.5.t": "High Service Standards",
  "why.5.d": "Quality audits and KPIs at every site, every cycle.",
  "why.6.t": "Customer Satisfaction",
  "why.6.d": "A dedicated account manager who answers when you call.",

  // CTA banner
  "cta.eyebrow": "Ready to begin?",
  "cta.title": "Let's create better environments together.",

  // About page
  "about.eyebrow": "About us",
  "about.title.1": "Elevating standards in",
  "about.title.2": "facility management",
  "about.intro":
    "A modern Ethiopian company built around one idea: facility services should make your business better, not just keep it clean.",
  "about.section.title": "Built for the businesses shaping Ethiopia's future.",
  "about.section.p1":
    "Plus Facilities delivers integrated facility management solutions designed to create cleaner, safer, and more efficient environments. From commercial buildings and residential properties to corporate events and hospitality spaces, our trained professionals provide reliable services with precision, professionalism, and attention to detail.",
  "about.section.p2":
    "We combine modern operational standards with customer-focused service to help clients maintain environments that reflect excellence — across Addis Ababa and beyond.",
  "about.values.eyebrow": "Our values",
  "about.values.title": "Four principles. Every site. Every shift.",
  "about.v1.t": "Precision",
  "about.v1.d": "We measure what we manage. Every site has KPIs, audits, and reporting.",
  "about.v2.t": "People-first",
  "about.v2.d": "Our staff are trained, paid fairly, and equipped to perform with pride.",
  "about.v3.t": "Accountability",
  "about.v3.d": "A named account manager owns your site — not a call centre, not a queue.",
  "about.v4.t": "Excellence",
  "about.v4.d": "We hold ourselves to international standards adapted for Ethiopia.",

  // Services page
  "services.eyebrow": "Our services",
  "services.title.1": "Five integrated services.",
  "services.title.2": "One accountable partner.",
  "services.intro":
    "Each service line is staffed, trained, and supervised in-house — so we can stand behind every outcome.",

  // Service items (titles + descriptions)
  "svc.cleaning.title": "Cleaning & Janitorial Services",
  "svc.cleaning.short": "Cleaning & Janitorial",
  "svc.cleaning.desc":
    "Maintain spotless and hygienic environments with professional cleaning solutions tailored for offices, commercial properties, residential spaces, and hospitality facilities.",
  "svc.security.title": "Security Services",
  "svc.security.short": "Security",
  "svc.security.desc":
    "Protect your property and operations with trained security personnel dedicated to safety, professionalism, and rapid response.",
  "svc.landscaping.title": "Landscaping & Grounds Maintenance",
  "svc.landscaping.short": "Landscaping",
  "svc.landscaping.desc":
    "Enhance outdoor spaces with expertly maintained gardens, greenery, and landscape solutions that create lasting impressions.",
  "svc.events.title": "Event Support Services",
  "svc.events.short": "Event Support",
  "svc.events.desc":
    "Ensure smooth and organized events with reliable operational support, setup assistance, crowd coordination, and venue preparation.",
  "svc.pest.title": "Pest Control Services",
  "svc.pest.short": "Pest Control",
  "svc.pest.desc":
    "Eliminate pests effectively using safe and modern treatment methods designed for residential, commercial, and industrial environments.",

  // Industries
  "ind.eyebrow": "Industries we serve",
  "ind.title.1": "Tailored programs for every",
  "ind.title.2": "environment",
  "ind.intro":
    "From corporate towers to residential estates, our service models adapt to your operational realities.",
  "ind.1.t": "Corporate Offices",
  "ind.1.d": "Discreet daytime cleaning, mailroom and reception support for premium workplaces.",
  "ind.2.t": "Hotels & Hospitality",
  "ind.2.d": "Housekeeping, public-area care and brand-standard service for hospitality leaders.",
  "ind.3.t": "Residential Apartments",
  "ind.3.d": "Common-area maintenance, security and pest programs for modern residences.",
  "ind.4.t": "Commercial Buildings",
  "ind.4.d": "Multi-tenant facility management with measurable SLAs and transparent reporting.",
  "ind.5.t": "Warehouses",
  "ind.5.d": "Industrial cleaning, perimeter security and pest exclusion for logistics operations.",
  "ind.6.t": "Retail Spaces",
  "ind.6.d": "High-traffic floor care, glass detailing and visitor-ready presentation every day.",
  "ind.7.t": "Events & Venues",
  "ind.7.d": "Pre-event setup, on-site coordination and post-event recovery — all in one team.",

  // Testimonials
  "tst.eyebrow": "Testimonials",
  "tst.title.1": "What our clients",
  "tst.title.2": "say",
  "tst.intro": "Trusted by corporate, hospitality, and residential leaders across Ethiopia.",
  "tst.1.q": "Plus Facilities transformed the cleanliness and professionalism of our office environment. Their team is reliable, organized, and highly professional.",
  "tst.1.r": "Operations Director",
  "tst.2.q": "Their security and event support services exceeded our expectations with outstanding coordination and professionalism.",
  "tst.2.r": "General Manager",
  "tst.3.q": "From the first walkthrough to monthly reporting, everything is handled with precision. They're the partner we wish we'd hired sooner.",
  "tst.3.r": "Facilities Lead",
  "tst.4.q": "Landscaping has elevated the entire entrance experience for our residents. Beautiful, consistent, never an issue.",
  "tst.4.r": "Property Manager",
  "tst.5.q": "Pest control was discreet, scheduled around guests, and effective. Our hospitality team only hears compliments.",
  "tst.5.r": "Hotel Manager",
  "tst.6.q": "A real account manager. Real reporting. Real results. That's all you can ask for.",
  "tst.6.r": "COO",

  // Contact
  "contact.eyebrow": "Contact",
  "contact.title.1": "Let's create",
  "contact.title.2": "better environments",
  "contact.title.3": "together",
  "contact.intro": "Reach our team for a tailored proposal, walk-through, or partnership discussion.",
  "contact.form.title": "Send us a message",
  "contact.form.sub": "We respond within one business day.",
  "contact.form.name": "Full name",
  "contact.form.phone": "Phone",
  "contact.form.email": "Email",
  "contact.form.service": "Service of interest",
  "contact.form.service.placeholder": "Select a service…",
  "contact.form.message": "Message",
  "contact.form.thanks": "Thank you",
  "contact.form.received": "Your message has been received.",
  "contact.card.office": "Office",
  "contact.card.phone": "Phone",
  "contact.card.email": "Email",
  "contact.card.whatsapp": "WhatsApp",
  "contact.card.whatsapp.value": "Chat with our team",

  // Quote modal
  "quote.eyebrow": "Get a Quote",
  "quote.title": "Tell us about your facility",
  "quote.sub": "A specialist will respond within one business day.",
  "quote.fullname": "Full name",
  "quote.phone": "Phone",
  "quote.email": "Email address",
  "quote.service.placeholder": "Select a service…",
  "quote.message": "Tell us about your needs…",
  "quote.submit": "Request Quote",
  "quote.received.title": "Quote request received",
  "quote.received.sub": "Our team will contact you within 24 hours.",

  // Footer
  "footer.about":
    "Integrated facility management delivering cleaner, safer and more efficient environments across Ethiopia.",
  "footer.nav": "Navigation",
  "footer.services": "Services",
  "footer.contact": "Contact",
  "footer.rights": "All rights reserved.",
  "footer.tagline": "Designed for excellence. Built for trust.",

  // Misc
  "addis": "Ayat Shopping Mall, 2VC9+7M8, Addis Ababa",
};

const am: Dict = {
  // Nav
  "nav.home": "መነሻ",
  "nav.about": "ስለ እኛ",
  "nav.services": "አገልግሎቶች",
  "nav.industries": "የምንሰራባቸው ዘርፎች",
  "nav.testimonials": "የደንበኞች አስተያየት",
  "nav.contact": "አግኙን",
  "nav.quote": "የዋጋ ግምት ይጠይቁ",

  // Common
  "cta.quote": "ነፃ የዋጋ ግምት ያግኙ",
  "cta.contact": "አግኙን",
  "cta.talk": "ያነጋግሩን",
  "cta.learn": "ተጨማሪ ይመልከቱ",
  "cta.request_service": "ይህን አገልግሎት ይጠይቁ",
  "cta.send": "መልዕክት ላክ",

  // Hero
  "hero.badge": "በመላው ኢትዮጵያ የታመነ",
  "hero.title.1": "የተዋጣለት የተቋማት አስተዳደር",
  "hero.title.2": "የሚታመኑበት መፍትሔዎች",
  "hero.subtitle":
    "ለንግድ ድርጅቶች፣ ለመኖሪያ ቤቶችና ለዝግጅቶች የቅንጡ ጽዳት፣ ጥበቃ፣ የመሬት ገጽታ ልማት፣ የተባዮች ቁጥጥር እና የዝግጅት ድጋፍ አገልግሎቶችን በመላው ኢትዮጵያ እናቀርባለን።",

  // Home About
  "home.about.eyebrow": "ስለ ፕላስ ፋሲሊቲስ",
  "home.about.title": "በተቋማት አስተዳደር ውስጥ ደረጃን ማሻሻል",
  "home.about.p1":
    "ፕላስ ፋሲሊቲስ ንፁህ፣ ደህንነቱ የተጠበቀና ቀልጣፋ አካባቢዎችን ለመፍጠር የተቀየሰ የተቀናጀ የተቋማት አስተዳደር መፍትሔዎችን ያቀርባል። ከንግድ ሕንፃዎች እና ከመኖሪያ ቤቶች እስከ የድርጅት ዝግጅቶች እና የእንግዳ ማስተናገጃ ስፍራዎች ድረስ፣ የሰለጠኑ ባለሙያዎቻችን አስተማማኝ አገልግሎቶችን በትክክለኛነት፣ በሙያዊነትና በጥንቃቄ ይሰጣሉ።",
  "home.about.p2":
    "ዘመናዊ የአሠራር ደረጃዎችን ከደንበኛ-ተኮር አገልግሎት ጋር በማጣመር ደንበኞቻችን ብቃትን የሚያንፀባርቁ አካባቢዎችን እንዲይዙ እንረዳለን።",
  "home.about.t1": "የሰለጠኑ ቡድኖች",
  "home.about.d1": "ሙያዊና የተረጋገጡ ሠራተኞች",
  "home.about.t2": "አስተማማኝ አገልግሎት",
  "home.about.d2": "በእያንዳንዱ ጉብኝት ወጥ ጥራት",
  "home.about.t3": "አስተማማኝ ድጋፍ",
  "home.about.d3": "ከእውነተኛ ባለሙያዎች በየጊዜው",

  // Services grid
  "home.services.eyebrow": "የምንሰራው ስራ",
  "home.services.title.1": "ሰፋ ያሉ አገልግሎቶች፣",
  "home.services.title.2": "በሙያዊነት የቀረቡ",
  "home.services.intro":
    "አምስት የተቀናጁ አገልግሎቶች፣ አንድ ተጠያቂ አጋር — ወጥነትን ለሚሹ ድርጅቶች የተዘጋጀ።",

  // Why us
  "why.eyebrow": "የፕላስ ልዩነት",
  "why.title": "ድርጅቶች ለምን ፕላስ ፋሲሊቲስን ይታመናሉ",
  "why.intro": "በእያንዳንዱ ቦታ፣ በእያንዳንዱ ፈረቃ የምንጠብቃቸው ስድስት ቃላት።",
  "why.1.t": "የሰለጠኑ ባለሙያዎች",
  "why.1.d": "በዓለም አቀፍ የአገልግሎት መመሪያዎች የሰለጠኑ የተረጋገጡና ዩኒፎርም የለበሱ ቡድኖች።",
  "why.2.t": "አስተማማኝ ሥራ",
  "why.2.d": "ሊገመቱ የሚችሉ መርሐ ግብሮች፣ ተጠያቂ ተቆጣጣሪዎችና ግልጽ ሪፖርት።",
  "why.3.t": "ዘመናዊ መሣሪያዎች",
  "why.3.d": "ለላቀ ውጤት ኢንዱስትሪ-ደረጃ መሣሪያዎችና ለአካባቢ ተስማሚ ኬሚካሎች።",
  "why.4.t": "ፈጣን ምላሽ",
  "why.4.d": "ለአስቸኳይ ወይም ከስራ ሰዓት ውጪ ጥያቄዎች በሰዓታት ውስጥ መላክ።",
  "why.5.t": "ከፍተኛ የአገልግሎት ደረጃ",
  "why.5.d": "በእያንዳንዱ ቦታና ዑደት ጥራት ቁጥጥር እና አመላካቾች።",
  "why.6.t": "የደንበኛ እርካታ",
  "why.6.d": "በሚደውሉበት ጊዜ የሚመልስ የተወሰነ የደንበኛ አስተዳዳሪ።",

  // CTA banner
  "cta.eyebrow": "ለመጀመር ዝግጁ ነዎት?",
  "cta.title": "በአንድነት የተሻሉ አካባቢዎችን እንፍጠር።",

  // About page
  "about.eyebrow": "ስለ እኛ",
  "about.title.1": "በተቋማት አስተዳደር",
  "about.title.2": "ደረጃን ማሻሻል",
  "about.intro":
    "በአንድ ሐሳብ ላይ የተመሠረተ ዘመናዊ የኢትዮጵያ ድርጅት፡ የተቋማት አገልግሎቶች ንግድዎን ማጽዳት ብቻ ሳይሆን ማሻሻል አለባቸው።",
  "about.section.title": "የኢትዮጵያን የወደፊት የሚቀርጹ ድርጅቶችን ለማገልገል የተገነባ።",
  "about.section.p1":
    "ፕላስ ፋሲሊቲስ ንፁህ፣ ደህንነቱ የተጠበቀና ቀልጣፋ አካባቢዎችን ለመፍጠር የተቀየሰ የተቀናጀ የተቋማት አስተዳደር መፍትሔዎችን ያቀርባል። ከንግድ ሕንፃዎች እና ከመኖሪያ ቤቶች እስከ የድርጅት ዝግጅቶችና የእንግዳ ማስተናገጃ ስፍራዎች ድረስ፣ የሰለጠኑ ባለሙያዎቻችን አስተማማኝ አገልግሎቶችን በትክክለኛነት፣ በሙያዊነትና በጥንቃቄ ይሰጣሉ።",
  "about.section.p2":
    "ዘመናዊ የአሠራር ደረጃዎችን ከደንበኛ-ተኮር አገልግሎት ጋር በማጣመር ደንበኞቻችን በአዲስ አበባና ከዚያም በላይ ብቃትን የሚያንፀባርቁ አካባቢዎችን እንዲይዙ እንረዳለን።",
  "about.values.eyebrow": "እሴቶቻችን",
  "about.values.title": "አራት መርሆዎች። በእያንዳንዱ ቦታ። በእያንዳንዱ ፈረቃ።",
  "about.v1.t": "ትክክለኛነት",
  "about.v1.d": "የምንቆጣጠረውን እንለካለን። እያንዳንዱ ቦታ የአፈጻጸም መለኪያዎች፣ ቁጥጥር እና ሪፖርት አለው።",
  "about.v2.t": "ሰው-ተኮር",
  "about.v2.d": "ሠራተኞቻችን የሰለጠኑ፣ ፍትሐዊ ደመወዝ የሚያገኙና በኩራት እንዲሠሩ የተዘጋጁ ናቸው።",
  "about.v3.t": "ተጠያቂነት",
  "about.v3.d": "የተወሰነ የደንበኛ አስተዳዳሪ ቦታዎን ይመራል — ጥሪ ማዕከል ወይም ወረፋ አይደለም።",
  "about.v4.t": "ብቃት",
  "about.v4.d": "ለኢትዮጵያ የተስተካከሉ ዓለም አቀፍ ደረጃዎችን እንጠብቃለን።",

  // Services page
  "services.eyebrow": "የእኛ አገልግሎቶች",
  "services.title.1": "አምስት የተቀናጁ አገልግሎቶች።",
  "services.title.2": "አንድ ተጠያቂ አጋር።",
  "services.intro":
    "እያንዳንዱ የአገልግሎት መስመር በውስጣችን ሰራተኞች የተመደበ፣ የሰለጠነና የተቆጣጠረ ነው — ለእያንዳንዱ ውጤት ቆመን እንመልሳለን።",

  // Service items
  "svc.cleaning.title": "የጽዳት እና የጃኒቶሪያል አገልግሎቶች",
  "svc.cleaning.short": "ጽዳት እና ጃኒቶሪያል",
  "svc.cleaning.desc":
    "ለቢሮዎች፣ ለንግድ ንብረቶች፣ ለመኖሪያ ቦታዎችና ለእንግዳ ማስተናገጃ ተቋማት የተዘጋጁ ሙያዊ የጽዳት መፍትሔዎችን በማቅረብ ንፁህና ጤናማ አካባቢዎችን ጠብቁ።",
  "svc.security.title": "የጥበቃ አገልግሎቶች",
  "svc.security.short": "ጥበቃ",
  "svc.security.desc":
    "ለደህንነት፣ ለሙያዊነትና ለፈጣን ምላሽ የተሰጡ የሰለጠኑ የጥበቃ ሠራተኞች በመጠቀም ንብረትዎንና ሥራዎን ይጠብቁ።",
  "svc.landscaping.title": "የመሬት ገጽታ ልማት እና ጥገና",
  "svc.landscaping.short": "የመሬት ገጽታ",
  "svc.landscaping.desc":
    "በሙያዊነት የተያዙ የአትክልት ስፍራዎችን፣ አረንጓዴን እና የመሬት ገጽታ መፍትሔዎችን በማቅረብ ለረጅም ጊዜ የሚቆዩ ስሜቶችን ይፍጠሩ።",
  "svc.events.title": "የዝግጅት ድጋፍ አገልግሎቶች",
  "svc.events.short": "የዝግጅት ድጋፍ",
  "svc.events.desc":
    "በአስተማማኝ የአሠራር ድጋፍ፣ የማዘጋጀት ድጋፍ፣ የሕዝብ ቅንጅት እና የቦታ ዝግጅት ለስላሳና የተደራጁ ዝግጅቶችን ያረጋግጡ።",
  "svc.pest.title": "የተባዮች ቁጥጥር አገልግሎቶች",
  "svc.pest.short": "የተባዮች ቁጥጥር",
  "svc.pest.desc":
    "ለመኖሪያ፣ ለንግድ እና ለኢንዱስትሪ አካባቢዎች የተዘጋጁ ደህንነቱ የተጠበቀና ዘመናዊ የሕክምና ዘዴዎችን በመጠቀም ተባዮችን በብቃት ያስወግዱ።",

  // Industries
  "ind.eyebrow": "የምንሰራባቸው ዘርፎች",
  "ind.title.1": "ለእያንዳንዱ አካባቢ",
  "ind.title.2": "የተዘጋጁ ፕሮግራሞች",
  "ind.intro":
    "ከንግድ ማማዎች እስከ የመኖሪያ ግዛቶች ድረስ፣ የአገልግሎት ሞዴሎቻችን ከእርስዎ የአሠራር ሁኔታዎች ጋር ይስማማሉ።",
  "ind.1.t": "የድርጅት ቢሮዎች",
  "ind.1.d": "ለደረጃኛ የስራ ቦታዎች ጸጥ ያለ የቀን ጽዳት፣ የፖስታ ክፍል እና የመቀበያ ድጋፍ።",
  "ind.2.t": "ሆቴሎች እና እንግዳ መስተንግዶ",
  "ind.2.d": "ለእንግዳ መስተንግዶ መሪዎች የቤት እንክብካቤ፣ የሕዝብ ቦታ ጥንቃቄ እና የብራንድ ደረጃ አገልግሎት።",
  "ind.3.t": "የመኖሪያ አፓርትመንቶች",
  "ind.3.d": "ለዘመናዊ መኖሪያዎች የጋራ ቦታ ጥገና፣ ጥበቃ እና የተባዮች መርሃ ግብሮች።",
  "ind.4.t": "የንግድ ሕንፃዎች",
  "ind.4.d": "በሚለኩ የአገልግሎት ስምምነቶችና ግልጽ ሪፖርት የብዙ ተከራዮች የተቋማት አስተዳደር።",
  "ind.5.t": "መጋዘኖች",
  "ind.5.d": "ለሎጂስቲክስ ሥራዎች የኢንዱስትሪ ጽዳት፣ የዙሪያ ጥበቃ እና የተባዮች መከላከል።",
  "ind.6.t": "የችርቻሮ ቦታዎች",
  "ind.6.d": "ለከፍተኛ ትራፊክ የወለል እንክብካቤ፣ የመስታወት ጽዳት እና ለጎብኚ ዝግጁ የሆነ አቀራረብ በየቀኑ።",
  "ind.7.t": "ዝግጅቶች እና ቦታዎች",
  "ind.7.d": "የቅድመ-ዝግጅት ማዘጋጀት፣ የቦታ ላይ ቅንጅት እና የድህረ-ዝግጅት ማገገም — ሁሉም በአንድ ቡድን።",

  // Testimonials
  "tst.eyebrow": "የደንበኞች አስተያየት",
  "tst.title.1": "ደንበኞቻችን ምን",
  "tst.title.2": "እንደሚሉ",
  "tst.intro": "በመላው ኢትዮጵያ በድርጅት፣ በእንግዳ መስተንግዶ እና በመኖሪያ መሪዎች የታመነ።",
  "tst.1.q": "ፕላስ ፋሲሊቲስ የቢሮአችንን ንፅህናና ሙያዊነት ቀይሯል። ቡድናቸው አስተማማኝ፣ የተደራጀና በከፍተኛ ሙያዊነት የሚሠራ ነው።",
  "tst.1.r": "የሥራ ኃላፊ",
  "tst.2.q": "የጥበቃና የዝግጅት ድጋፍ አገልግሎታቸው በላቀ ቅንጅትና ሙያዊነት ከጠበቅነው በላይ ሆኗል።",
  "tst.2.r": "ዋና ሥራ አስኪያጅ",
  "tst.3.q": "ከመጀመሪያው ጉብኝት እስከ ወርሃዊ ሪፖርት ድረስ፣ ሁሉም ነገር በትክክለኛነት ይሠራል። ቀደም ብለን ብንቀጥራቸው እንመኛለን።",
  "tst.3.r": "የተቋማት ኃላፊ",
  "tst.4.q": "የመሬት ገጽታ ልማት የመግቢያ ተሞክሮአችንን ሙሉ ለሙሉ አሻሽሏል። ውብ፣ ወጥና ችግር የሌለው።",
  "tst.4.r": "የንብረት አስተዳዳሪ",
  "tst.5.q": "የተባዮች ቁጥጥር ጸጥ ያለ፣ በእንግዶች ዙሪያ የተቀመረና ውጤታማ ነበር። የእንግዳ መስተንግዶ ቡድናችን አድናቆት ብቻ ይሰማል።",
  "tst.5.r": "የሆቴል ሥራ አስኪያጅ",
  "tst.6.q": "እውነተኛ የደንበኛ አስተዳዳሪ። እውነተኛ ሪፖርት። እውነተኛ ውጤት። ይኽው ብቻ ነው የሚጠበቀው።",
  "tst.6.r": "ዋና የሥራ አስፈጻሚ",

  // Contact
  "contact.eyebrow": "አግኙን",
  "contact.title.1": "በአንድነት",
  "contact.title.2": "የተሻሉ አካባቢዎችን",
  "contact.title.3": "እንፍጠር",
  "contact.intro": "ለተዘጋጀ ሐሳብ፣ ለቦታ ጉብኝት ወይም ለሽርክና ውይይት ቡድናችንን ያግኙ።",
  "contact.form.title": "መልዕክት ይላኩልን",
  "contact.form.sub": "በአንድ የሥራ ቀን ውስጥ እንመልሳለን።",
  "contact.form.name": "ሙሉ ስም",
  "contact.form.phone": "ስልክ",
  "contact.form.email": "ኢሜይል",
  "contact.form.service": "የሚፈልጉት አገልግሎት",
  "contact.form.service.placeholder": "አገልግሎት ይምረጡ…",
  "contact.form.message": "መልዕክት",
  "contact.form.thanks": "እናመሰግናለን",
  "contact.form.received": "መልዕክትዎ ደርሷል።",
  "contact.card.office": "ቢሮ",
  "contact.card.phone": "ስልክ",
  "contact.card.email": "ኢሜይል",
  "contact.card.whatsapp": "ዋትስአፕ",
  "contact.card.whatsapp.value": "ከቡድናችን ጋር ያውሩ",

  // Quote modal
  "quote.eyebrow": "የዋጋ ግምት",
  "quote.title": "ስለ ተቋምዎ ይንገሩን",
  "quote.sub": "ባለሙያ በአንድ የሥራ ቀን ውስጥ ይመልስልዎታል።",
  "quote.fullname": "ሙሉ ስም",
  "quote.phone": "ስልክ",
  "quote.email": "ኢሜይል አድራሻ",
  "quote.service.placeholder": "አገልግሎት ይምረጡ…",
  "quote.message": "ስለ ፍላጎቶችዎ ይንገሩን…",
  "quote.submit": "የዋጋ ግምት ይጠይቁ",
  "quote.received.title": "የዋጋ ግምት ጥያቄ ደርሷል",
  "quote.received.sub": "ቡድናችን በ24 ሰዓታት ውስጥ ያገኝዎታል።",

  // Footer
  "footer.about":
    "በመላው ኢትዮጵያ ንፁህ፣ ደህንነቱ የተጠበቀና ቀልጣፋ አካባቢዎችን የሚያቀርብ የተቀናጀ የተቋማት አስተዳደር።",
  "footer.nav": "አሰሳ",
  "footer.services": "አገልግሎቶች",
  "footer.contact": "አግኙን",
  "footer.rights": "ሁሉም መብቶች የተጠበቁ ናቸው።",
  "footer.tagline": "ለብቃት የተዘጋጀ። በእምነት የተገነባ።",

  // Misc
  "addis": "አያት ሞል፣ 2VC9+7M8፣ አዲስ አበባ",
};

const dicts: Record<Lang, Dict> = { en, am };

type Ctx = { lang: Lang; setLang: (l: Lang) => void; t: (key: string) => string; toggle: () => void };
const LangCtx = createContext<Ctx | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    try {
      const stored = localStorage.getItem("pf-lang") as Lang | null;
      if (stored === "en" || stored === "am") setLangState(stored);
    } catch {}
  }, []);

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = lang === "am" ? "am" : "en";
      document.documentElement.dataset.lang = lang;
    }
  }, [lang]);

  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    try { localStorage.setItem("pf-lang", l); } catch {}
  }, []);

  const toggle = useCallback(() => setLang(lang === "en" ? "am" : "en"), [lang, setLang]);

  const t = useCallback((key: string) => dicts[lang][key] ?? dicts.en[key] ?? key, [lang]);

  return <LangCtx.Provider value={{ lang, setLang, t, toggle }}>{children}</LangCtx.Provider>;
}

export function useT() {
  const c = useContext(LangCtx);
  if (!c) throw new Error("LanguageProvider missing");
  return c;
}
