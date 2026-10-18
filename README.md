# M2M Car Care & Accessories — Premium Automotive Website

A production-ready website engineered for **M2M Car Care & Accessories**, an automotive care, detailing, and accessories studio located along Sarjapur Road / Jakkasandra Extension in Bengaluru, Karnataka, India.

Built specifically for a client presentation demo with the business owner, emphasizing craftsmanship, authentic local photography, conversion-focused UX, and local SEO.

---

## 1. Architectural Highlights

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript (Strict typing across config, services, and image manifests)
- **Styling**: Tailwind CSS with custom automotive design tokens:
  - Deep obsidian & charcoal surfaces (`#090a0c`, `#0e1013`, `#12151b`)
  - Controlled electric racing-orange accents (`#ff5500`, `#e64300`)
  - Warm white editorial typography (`#faf9f6`, `#f4f2ec`)
- **Typography**: Google Fonts via `next/font/google`:
  - Headings: `Outfit` & `Syne`
  - Body: `Inter`
  - Technical Badges: `Space Grotesk`
- **Icons**: Lucide React
- **Photography**: 100% authentic local shop & vehicle photos from the M2M studio (Zero stock images, zero AI fakes).
- **SEO & Structured Data**: Built-in `LocalBusiness` JSON-LD schema, OpenGraph tags, dynamic `sitemap.xml`, and `robots.txt`.

---

## 2. Project Directory Structure

```
├── public/
│   └── images/                     # Local authentic photos
│       ├── hero/                   # High-resolution hero showcase images
│       ├── workshop/               # Service bays & technician work
│       ├── car-wash/               # Washing bays & exterior care
│       ├── glass-tinting/          # Solar heat-rejection films
│       ├── headlight-repair/       # Lens restoration & lighting
│       ├── accessories/            # Alloy wheels, seat covers & mats
│       ├── detailing/              # Machine polish & paint finishes
│       ├── gallery/                # Raw client vehicle archive
│       └── inside/                 # Showroom & rack displays
├── scripts/
│   └── generate-images-manifest.mjs # Recursive image scanner & manifest generator
├── src/
│   ├── app/
│   │   ├── about/page.tsx          # Workshop story & philosophy
│   │   ├── services/page.tsx       # Comprehensive service directory
│   │   ├── gallery/page.tsx        # Filterable photo portfolio
│   │   ├── contact/page.tsx        # Inquiry form & directions
│   │   ├── globals.css             # Design tokens & scroll behavior
│   │   ├── icon.tsx                # Dynamic brand favicon generator
│   │   ├── layout.tsx              # Root layout & LocalBusiness JSON-LD
│   │   ├── page.tsx                # Editorial homepage
│   │   ├── robots.ts               # Search engine crawler directives
│   │   └── sitemap.ts              # Dynamic XML sitemap
│   ├── components/
│   │   ├── ContactForm.tsx         # Validated inquiry form with demo feedback
│   │   ├── FeaturedShowcase.tsx    # Editorial asymmetric work portfolio
│   │   ├── Footer.tsx              # Brand footer & verification notes
│   │   ├── GalleryGrid.tsx         # Progressive masonry grid with filters
│   │   ├── Hero.tsx                # Bold hero section with genuine photos
│   │   ├── Lightbox.tsx            # Fullscreen modal with keyboard navigation
│   │   ├── MapEmbed.tsx            # Responsive Google Maps embed & copy address
│   │   ├── Navbar.tsx              # Compacting sticky header & mobile drawer
│   │   ├── PageHeader.tsx          # Reusable internal page heroes
│   │   ├── ServiceCard.tsx         # Card with category tags & features
│   │   └── WorkshopExperience.tsx  # "What to Expect" 4-step process
│   ├── data/
│   │   ├── imagesManifest.ts       # Auto-generated image catalog (100+ images)
│   │   ├── servicesData.ts         # Configurable service scopes & highlights
│   │   └── siteConfig.ts           # Central business configuration
│   ├── lib/
│   │   └── utils.ts                # Class merging utility (clsx + twMerge)
│   └── types/
│       └── index.ts                # TypeScript interfaces
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── next.config.mjs
```

---

## 3. Central Business Configuration (`src/data/siteConfig.ts`)

All business details are centralized in `src/data/siteConfig.ts`. Never hardcode contact numbers, addresses, or links across individual pages.

```typescript
export const siteConfig: SiteConfig = {
  businessName: "M2M Car Care & Accessories",
  locality: "Jakkasandra Extension, Sarjapur Road",
  city: "Bengaluru",
  state: "Karnataka",
  pincode: "560034",
  provisionalAddress: "No. 2/20, Jakkasandra Extension, Sarjapur Road, Jakkasandra, Bengaluru, Karnataka 560034",
  alternativeAddress: "Art Arcade, No. 107, 80 Feet Road, 4th Block, Koramangala, Bengaluru, Karnataka 560034",
  googleMapsUrl: "https://maps.app.goo.gl/BcSdT1WpgsGVM5Q87",
  contact: {
    phone: "",        // Enter official number when verified with owner (e.g. "+91 98450 12345")
    whatsapp: "",     // Enter WhatsApp number (e.g. "+91 98450 12345")
    email: "",        // Enter official email
    openingHours: "", // e.g. "9:30 AM – 8:30 PM"
    workingDays: "Monday to Sunday (Subject to confirmation)",
  },
  // ...
};
```

---

## 4. Missing Client Details Checklist

Before deploying this website to a live public domain, verify the following details with the business owner during your meeting:

1. **Official Customer Phone & WhatsApp Number**:
   - Currently left blank (`""`).
   - When configured in `src/data/siteConfig.ts`, the "Call" and "WhatsApp" buttons will automatically turn active.
2. **Current Physical Shop Address**:
   - Google Maps lists: *No. 2/20, Jakkasandra Extension, Sarjapur Road, Bengaluru 560034*.
   - Older business directories show: *Art Arcade, No. 107, 80 Feet Road, 4th Block, Koramangala 560034*.
   - Confirm which address should appear on invoices and signage.
3. **Daily Working Hours**:
   - Confirm standard opening and closing times (e.g., 9:30 AM to 8:30 PM) and whether the workshop is open 7 days a week.
4. **Services List Sign-off**:
   - Confirm if mechanical oil changes and headlight lens restoration are actively offered, or if the primary focus is washing, sun film, and custom accessories. Services can be enabled or disabled with a single boolean flag `enabled: true/false` in `src/data/servicesData.ts`.
5. **Enquiry Form Backend**:
   - The inquiry form currently operates in a transparent **Demo Simulation State**. In production, it can be hooked into Formspree, Resend, or a direct WhatsApp API webhook in under 5 minutes.

---

## 5. Image Management Workflow

### How to Add or Replace Photographs

1. Place your new `.jpg`, `.png`, or `.webp` image files into the appropriate folder under `public/images/`:
   - `public/images/hero/`
   - `public/images/workshop/`
   - `public/images/car-wash/`
   - `public/images/glass-tinting/`
   - `public/images/headlight-repair/`
   - `public/images/accessories/`
   - `public/images/detailing/`
   - `public/images/gallery/`
2. Run the manifest generator:
   ```bash
   npm run generate:images
   ```
3. The script automatically indexes all images, parses dimensions, sets up descriptive alt text, and writes a typed array to `src/data/imagesManifest.ts`.

---

## 6. How to Run Locally

### Prerequisites
- Node.js 18+ (tested on Node v24.21.0)
- npm 9+

### Install Dependencies
```bash
npm install
```

### Start Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### Run Production Build & Type Check
```bash
npm run build
```
```bash
npm run start
```
