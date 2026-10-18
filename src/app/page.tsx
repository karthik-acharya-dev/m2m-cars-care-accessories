import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Hero } from "@/components/Hero";
import { ServiceCard } from "@/components/ServiceCard";
import { FeaturedShowcase } from "@/components/FeaturedShowcase";
import { WorkshopExperience } from "@/components/WorkshopExperience";
import { MapEmbed } from "@/components/MapEmbed";
import { servicesData } from "@/data/servicesData";
import { siteConfig } from "@/data/siteConfig";
import {
  ArrowRight,
  ShieldCheck,
  Compass,
  Wrench,
  Sparkles,
  Layers,
  MapPin,
  ExternalLink,
} from "lucide-react";

export default function HomePage() {
  const enabledServices = servicesData.filter((svc) => svc.enabled);

  return (
    <div className="flex flex-col">
      {/* 1. Hero Section (Premium Dark Obsidian) */}
      <Hero />

      {/* 2. Business Introduction Section (Crisp White Background) */}
      <section className="bg-white py-16 sm:py-24 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5 space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-racing-600 font-semibold">
                <span className="w-2 h-0.5 bg-racing-500" />
                <span>About The Workshop</span>
              </div>
              <h2 className="font-heading font-bold text-3xl sm:text-4xl text-slate-900 tracking-tight leading-tight">
                Authentic Craftsmanship for Everyday & Performance Cars.
              </h2>
            </div>

            <div className="lg:col-span-7 space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed">
              <p>
                Based on Sarjapur Road in South-East Bengaluru, <strong className="text-slate-900 font-semibold">M2M Car Care & Accessories</strong> provides hands-on vehicle care focused on durability, aesthetic refinement, and honest advice.
              </p>
              <p className="text-slate-600">
                Whether protecting your cabin from Karnataka&apos;s afternoon sun with solar tint film, restoring weathered headlight lenses for night drives, or customizing your interior with precision-stitched upholstery, our team treats every vehicle with deliberate attention to detail.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-6 text-xs font-mono text-slate-800">
                <div className="flex items-center gap-2">
                  <span className="text-racing-500 font-bold">✓</span>
                  <span>Walk-ins & Pre-bookings</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-racing-500 font-bold">✓</span>
                  <span>Premium Grade Materials</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-racing-500 font-bold">✓</span>
                  <span>No Unsupported Guarantees</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Services Overview Section (Crisp Light Slate with White Cards) */}
      <section className="bg-slate-50 py-20 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-racing-600 font-semibold">
                <Wrench className="w-3.5 h-3.5" />
                <span>Our Core Capabilities</span>
              </div>
              <h2 className="font-heading font-bold text-3xl sm:text-4xl text-slate-900 tracking-tight">
                Car Care & Styling Solutions.
              </h2>
              <p className="text-sm sm:text-base text-slate-600 max-w-xl">
                Confirmed workshop services available for passenger sedans, hatchbacks, and SUVs across Bengaluru.
              </p>
            </div>

            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-xs font-heading font-bold uppercase tracking-wider text-slate-900 hover:text-racing-600 transition-colors"
            >
              <span>View In-Depth Service Guide</span>
              <ArrowRight className="w-3.5 h-3.5 text-racing-500" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {enabledServices.map((service, idx) => (
              <ServiceCard
                key={service.id}
                service={service}
                featured={idx === 0}
                variant="light"
              />
            ))}
          </div>
        </div>
      </section>

      {/* 4. Featured Automotive Work Gallery Showcase (Dark Dramatic Obsidian Section) */}
      <FeaturedShowcase />

      {/* 5. Why Choose M2M Section (Clean White Background) */}
      <section className="bg-white py-20 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14 space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-racing-600 font-semibold">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Trust & Practical Value</span>
            </div>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-slate-900 tracking-tight">
              Why Motorists Choose M2M.
            </h2>
            <p className="text-sm sm:text-base text-slate-600">
              Straightforward vehicle care grounded in real service capability, convenient location, and dependable workmanship.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-7 rounded-sm bg-slate-50 border border-slate-200/90 shadow-sm space-y-4 hover:border-racing-500/50 transition-colors">
              <div className="w-12 h-12 rounded-sm bg-orange-50 border border-racing-500/30 flex items-center justify-center text-racing-500">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-bold text-xl text-slate-900">
                Accessible Bengaluru Hub
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Positioned directly on the Sarjapur Road belt connecting Jakkasandra, Koramangala, and HSR Layout. Easy drop-off and pickup during your work commute.
              </p>
            </div>

            <div className="p-7 rounded-sm bg-slate-50 border border-slate-200/90 shadow-sm space-y-4 hover:border-racing-500/50 transition-colors">
              <div className="w-12 h-12 rounded-sm bg-orange-50 border border-racing-500/30 flex items-center justify-center text-racing-500">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-bold text-xl text-slate-900">
                Transparent Job Scope
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                We explain exactly what steps your car requires — whether a simple light polish or a full headlight wet-sand — without pushing unnecessary add-ons.
              </p>
            </div>

            <div className="p-7 rounded-sm bg-slate-50 border border-slate-200/90 shadow-sm space-y-4 hover:border-racing-500/50 transition-colors">
              <div className="w-12 h-12 rounded-sm bg-orange-50 border border-racing-500/30 flex items-center justify-center text-racing-500">
                <Layers className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-bold text-xl text-slate-900">
                Genuine Fitments & Materials
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                From durable heat-rejection sun films to snug-fit leatherette seat patterns and branded alloy wheels, we only install accessories designed to withstand real daily wear.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. About Preview Section (Soft Light Slate Background) */}
      <section className="bg-slate-100/70 py-20 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Visual Side */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-sm overflow-hidden border border-slate-300/80 bg-slate-200 h-80 sm:h-96 shadow-lg">
                <Image
                  src="/images/inside/ANWiy9Sh8jwk3Yw5f-HUjmjj4vyYyyXmlKFE8yfpJGdJ824IIpjBnWiTSLKDKIno6tI8UURRf7QtJO6hxE_IUL-BKdQY0iuNueU66Wkc1SW4kYo7ySDT8lYigyi1gxYPeFHF868Zd9Wkw4000-h3000-k-no.jpg"
                  alt="M2M Car Care technician at work inside the Bengaluru garage"
                  fill
                  sizes="(max-width: 768px) 100vw, 600px"
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-75" />
                <div className="absolute bottom-4 left-4 right-4 p-3 bg-obsidian/90 backdrop-blur-md rounded-sm border border-obsidian-border text-warm-white">
                  <span className="text-[11px] font-mono text-racing-400 uppercase block">
                    Inside The Workshop
                  </span>
                  <span className="text-xs font-semibold block">
                    Active servicing bay & accessory installation facility
                  </span>
                </div>
              </div>
            </div>

            {/* Content Side */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-racing-600 font-semibold">
                <span>The Story of M2M</span>
              </div>
              <h2 className="font-heading font-bold text-3xl sm:text-4xl text-slate-900 tracking-tight">
                Built Around A Passion For Fine Automobiles.
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                M2M Car Care & Accessories began with a clear mission: provide Bengaluru car owners with a specialized studio that combines reliable maintenance with custom aesthetic upgrades.
              </p>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Instead of impersonal assembly lines, our workshop provides personal consultation. We listen to how you use your car, recommend the best sun film shades or upholstery contours, and execute the installation with pride.
              </p>

              <div className="pt-2">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 px-6 py-3 text-xs font-heading font-bold uppercase tracking-wider text-slate-900 bg-white hover:bg-slate-50 border border-slate-300 hover:border-racing-500 rounded-sm transition-all shadow-sm"
                >
                  <span>Read Full About Story</span>
                  <ArrowRight className="w-3.5 h-3.5 text-racing-500" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Workshop Experience (Dark Obsidian Break Section) */}
      <WorkshopExperience />

      {/* 8. Workshop Location & Navigation Section (Clean White Background) */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10 space-y-2">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-racing-600 font-semibold">
              <MapPin className="w-3.5 h-3.5" />
              <span>Location & Directions</span>
            </div>
            <h2 className="font-heading font-bold text-3xl text-slate-900 tracking-tight">
              Visit Us in Person.
            </h2>
            <p className="text-sm text-slate-600 max-w-xl">
              Easy driving access along Sarjapur Road. Open for walk-in consultations and scheduled vehicle services.
            </p>
          </div>

          <MapEmbed />
        </div>
      </section>
    </div>
  );
}
