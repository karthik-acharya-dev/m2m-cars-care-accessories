export interface SiteConfig {
  businessName: string;
  shortName: string;
  tagline: string;
  description: string;
  locality: string;
  city: string;
  state: string;
  pincode: string;
  provisionalAddress: string;
  alternativeAddress: string;
  isAddressVerified: boolean;
  googleMapsUrl: string;
  googleMapsEmbedQuery: string;
  justdialUrl: string;
  contact: {
    phone: string; // Empty string if unverified
    whatsapp: string; // Empty string if unverified
    email: string; // Empty string if unverified
    openingHours: string; // Empty string if unverified
    workingDays: string;
    isVerified: boolean;
  };
  socialLinks: {
    instagram?: string;
    facebook?: string;
    youtube?: string;
  };
  seo: {
    siteUrl: string;
    siteName: string;
    defaultTitle: string;
    defaultDescription: string;
    keywords: string[];
  };
  demoMode: {
    enabled: boolean;
    notice: string;
  };
}

export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  description: string;
  features: string[];
  category: 'cleaning' | 'protection' | 'styling' | 'maintenance';
  imageSrc: string;
  imageAlt: string;
  enabled: boolean;
  isVerifiedService: boolean;
}

export interface GalleryItem {
  id: string;
  src: string;
  alt: string;
  title: string;
  category: string;
  width: number;
  height: number;
  aspectRatio: number;
}
