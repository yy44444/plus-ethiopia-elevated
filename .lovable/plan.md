# Plus Facilities — SEO-first rebuild

Rebuild the site around 4 core services with separate, crawlable pages, honest content, and full technical SEO. Keep the current logo, the English/Amharic switch, the WhatsApp button, and the email forms.

## What changes for visitors

- **4 main services:** Pest Control, Cleaning & Janitorial (window cleaning moves under this), Gardening & Landscaping, Event Support.
- **New brand colors:** dark teal #335c5b, light background #f4fafa, gray-blue #a0b4b5 / #90a2ac. The design becomes calmer and more corporate, with less decoration.
- **Tagline:** "Your Environment. Our Responsibility. Proven Results."
- **Contact details everywhere:** +251 97 512 3512, +251 91 167 2209, info.plusfacilities@gmail.com, Addis Ababa. Business hours are shown as Mon–Sat 8:00–18:00 until you confirm the real hours.
- **Testimonials page removed.** The current testimonials are invented. The Industries page becomes "Who we serve" content on the service pages.
- **New quote page** with Name, Company, Phone, Email, Service, Property type, Location and Message. It sends to your email.

## Pages

```text
/                                   Home
/services                           All services
/services/pest-control              (strongest page)
/services/cleaning-janitorial
/services/landscaping-gardening
/services/event-support
/pest-control/cockroach-control
/pest-control/termite-control       (incl. pre-construction)
/pest-control/rodent-control
/pest-control/commercial-pest-control  (hotels, restaurants, offices, warehouses)
/cleaning/post-construction-cleaning
/cleaning/window-cleaning           (incl. high-rise; one page, not two, to avoid duplicates)
/cleaning/commercial-cleaning
/landscaping/garden-maintenance
/landscaping/garden-renovation
/landscaping/commercial-landscaping
/about  /contact  /request-quote
/guides                             Help articles list
/guides/<slug>                      10 articles (the listed topics)
```

Old addresses (/industries, /testimonials) permanently redirect (301) to the matching new pages. No separate neighborhood pages. Areas such as Bole, Kazanchis, CMC and Ayat appear once in an "Areas we serve" section.

## Each service page

One H1, an intro, what's included, problems solved, who it's for, a 4-step process, areas served, visible FAQs, calls to action (Request a Quote / Book a Site Inspection / Call / Inquiry), related links and a photo with descriptive alt text. Wording is unique on every page. There are no guarantees, statistics, awards or client names. Prices are described as depending on the site, with an inspection-based quote.

## Photos

The existing realistic, faceless service photos are reused, and new faceless ones are made only where needed (termite, rodent, garden renovation). None of them show a person presented as a real employee.

## Technical details

- One file per page under TanStack routes. Content is rendered on the server, so search engines see it without running scripts.
- Page content lives in typed data modules (services, subpages, guides), with shared page templates to keep things consistent.
- Every page has its own title, description, og:title, og:description, twitter card and canonical (https://plus-ethiopia-elevated.lovable.app/...).
- Structured data: Organization + LocalBusiness on the home page (no ratings), Service on service pages, BreadcrumbList on deeper pages, and FAQPage only where the FAQs are visible on the page. Article on guides.
- Visible breadcrumbs on subpages and guides.
- The sitemap is generated automatically from the same data, so it always lists every page. robots.txt links to the sitemap.
- Images are converted to WebP with fixed width/height. The first photo on each page loads eagerly; the rest load lazily.
- Amharic: all navigation and page layout text is translated. Long SEO page text is English first. The Amharic body text for the new pages can follow as a second step.
- The existing quote form sender gets extra fields.

## Final deliverable

After building, I run a check across all pages: one H1 each, unique titles and descriptions, no broken links, valid structured data, and mobile screenshots. You also get an SEO report (/mnt/documents/plus-facilities-seo-report.md) listing, per page: URL, target topic, title, description, H1, main sections, links, structured data, issues and recommendations. It ends with a Google Search Console and Google Business Profile checklist.

## Needs your confirmation (can be changed later)

- Business hours (placeholder Mon–Sat 8:00–18:00)
- Whether you really provide security support at events (it is listed in your brief; I'll word it as "coordination of security support")
