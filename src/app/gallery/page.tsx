import React from "react";
import { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { GalleryGrid } from "@/components/GalleryGrid";
import { allImages } from "@/data/imagesManifest";
import { Camera, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Work Gallery | Automotive Detailing & Accessories Archive",
  description:
    "Explore our live visual archive of genuine automotive transformations, custom alloy wheel fitments, solar film installations, and car detailing at M2M Car Care Bengaluru.",
};

export default function GalleryPage() {
  return (
    <div className="flex flex-col">
      <PageHeader
        badge="Live Workshop Archive"
        title="Visual Record of Craftsmanship."
        description={`Explore genuine photographs documenting actual customer vehicles, interior accessories, and service bays at M2M Car Care & Accessories in Bengaluru.`}
        breadcrumbs={[{ label: "Gallery" }]}
      />

      {/* Main Filterable Gallery Section (Light slate / White background matching Home, About, Services) */}
      <section className="bg-slate-50 py-12 sm:py-20 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Authenticity Guarantee Callout */}
          <div className="mb-10 p-4 rounded-sm bg-white border border-slate-200 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs font-mono">
            <div className="flex items-center gap-2.5 text-slate-800">
              <Camera className="w-4 h-4 text-racing-600" />
              <span className="font-semibold text-slate-900">Authentic Local Photography</span>
              <span className="text-slate-500">({allImages.length} verified workshop photos)</span>
            </div>
            <div className="flex items-center gap-1.5 text-racing-600 font-semibold">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Zero AI-generated cars or stock image fakes</span>
            </div>
          </div>

          <GalleryGrid />
        </div>
      </section>
    </div>
  );
}
