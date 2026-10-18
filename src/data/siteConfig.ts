import { SiteConfig } from "@/types";

export const siteConfig: SiteConfig = {
  businessName: "M2M Car Care & Accessories",
  shortName: "M2M Car Care",
  tagline: "Care That Keeps You Moving",
  description:
    "Premium automotive care, precision vehicle washing, heat-rejection glass tinting, headlight restoration, and custom car accessories in Bengaluru.",
  locality: "Jakkasandra Extension, Sarjapur Road",
  city: "Bengaluru",
  state: "Karnataka",
  pincode: "560034",
  provisionalAddress:
    "No. 2/20, Jakkasandra Extension, Sarjapur Road, Jakkasandra, Bengaluru, Karnataka 560034",
  alternativeAddress:
    "Art Arcade, No. 107, 80 Feet Road, 4th Block, Koramangala, Bengaluru, Karnataka 560034",
  isAddressVerified: false, // Flag indicating physical verification pending with owner
  googleMapsUrl: "https://maps.app.goo.gl/BcSdT1WpgsGVM5Q87",
  googleMapsEmbedQuery:
    "M2M Car Care And Accessories, Sarjapur Road, Bengaluru, Karnataka 560034",
  justdialUrl:
    "https://www.justdial.com/Bangalore/M2M-Car-Care-And-Accessories-Koramangala-4Th-Block/080PXX80-XX80-170427012502-M1D2_BZDET",

  // CONTACT INFORMATION
  // Note: Phone, WhatsApp, email, and hours are kept empty until verified with business owner.
  // The UI will gracefully adapt and not display broken or placeholder phone numbers.
  contact: {
    phone: "", // To be verified before production launch (e.g., "+91 XXXXX XXXXX")
    whatsapp: "", // To be verified before production launch
    email: "", // To be verified before production launch
    openingHours: "", // e.g. "9:30 AM – 8:30 PM" (Pending confirmation)
    workingDays: "Monday to Sunday (Subject to confirmation)",
    isVerified: false,
  },

  socialLinks: {
    instagram: "",
    facebook: "",
    youtube: "",
  },

  seo: {
    siteUrl: "https://m2mcarcare.com", // Canonical domain placeholder
    siteName: "M2M Car Care & Accessories",
    defaultTitle: "M2M Car Care & Accessories | Automotive Care & Styling in Bengaluru",
    defaultDescription:
      "Expert vehicle care, pressure washing, sun film glass tinting, headlight restoration, and custom car accessories in Jakkasandra & Koramangala, Sarjapur Road, Bengaluru.",
    keywords: [
      "M2M Car Care",
      "Car accessories Bengaluru",
      "Car wash Sarjapur Road",
      "Sun film glass tinting Bangalore",
      "Headlight restoration Koramangala",
      "Custom seat covers Bangalore",
      "Car detailing Jakkasandra",
      "Automotive accessories 560034",
      "Alloy wheels fitment Bengaluru"
    ],
  },

  demoMode: {
    enabled: false,
    notice:
      "Client Presentation Demo: Contact numbers, exact operational hours, and final address confirmation are pending owner sign-off.",
  },
};
