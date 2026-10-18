import React from "react";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";
import {
  MapPin,
  ArrowRight,
  Shield,
  Sparkles,
  Wrench,
  Sun,
  Layers,
} from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-obsidian pt-6 pb-20 lg:pt-12 lg:pb-32 border-b border-obsidian-border">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-racing-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-racing-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Editorial Headline & Actions */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            {/* Location & Authenticity Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-obsidian-100/90 border border-racing-500/30 text-xs font-mono text-warm-white shadow-sm">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-racing-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-racing-500"></span>
              </span>
              <span className="text-racing-400 font-semibold tracking-wide">
                BENGALURU WORKSHOP
              </span>
              <span className="text-warm-dim">•</span>
              <span className="text-warm-dim truncate max-w-[200px] sm:max-w-none">
                Sarjapur Road / Jakkasandra
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl text-warm-white tracking-tight leading-[1.08]">
                Care That Keeps <br className="hidden sm:inline" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-warm-white via-warm-white to-racing-400">
                  You Moving.
                </span>
              </h1>
              <p className="text-xs sm:text-sm font-mono tracking-widest text-racing-500 uppercase pt-1">
                Precision Detailing • Sun Film Tinting • Bespoke Accessories
              </p>
            </div>

            {/* Description */}
            <p className="text-base sm:text-lg text-warm-white/80 leading-relaxed max-w-2xl font-sans">
              From precision pressure washing and heat-rejection glass tinting to custom interior seat fitments and premium alloy styling — M2M delivers meticulous automotive care for Bengaluru motorists.
            </p>

            {/* Primary & Secondary Call To Actions */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-4 text-sm font-heading font-bold uppercase tracking-wider text-obsidian bg-racing-500 hover:bg-racing-400 rounded-sm shadow-orangeGlow transition-all active:scale-[0.98]"
              >
                <span>Explore Services</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <a
                href={siteConfig.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 text-sm font-heading font-semibold text-warm-white bg-obsidian-100 hover:bg-obsidian-50 border border-obsidian-border hover:border-racing-500/50 rounded-sm transition-all shadow-card"
              >
                <MapPin className="w-4 h-4 text-racing-500" />
                <span>Get Directions (Maps)</span>
              </a>
            </div>

            {/* Verified Pillar Highlights */}
            <div className="pt-6 border-t border-obsidian-border/80 grid grid-cols-2 sm:grid-cols-3 gap-4">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-sm bg-obsidian-100 border border-obsidian-border text-racing-500">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-heading font-semibold text-xs text-warm-white block">
                    Paint & Wash
                  </span>
                  <span className="text-[11px] text-warm-dim block">
                    Grit-safe protocol
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-sm bg-obsidian-100 border border-obsidian-border text-racing-500">
                  <Sun className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-heading font-semibold text-xs text-warm-white block">
                    Solar Tinting
                  </span>
                  <span className="text-[11px] text-warm-dim block">
                    High heat rejection
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2.5 col-span-2 sm:col-span-1">
                <div className="p-2 rounded-sm bg-obsidian-100 border border-obsidian-border text-racing-500">
                  <Layers className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-heading font-semibold text-xs text-warm-white block">
                    Interior Fitments
                  </span>
                  <span className="text-[11px] text-warm-dim block">
                    Seat covers & mats
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual - Authentic Workshop Photography */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              {/* Outer decorative border & racing accent bracket */}
              <div className="relative rounded-sm overflow-hidden border border-obsidian-border bg-obsidian-card p-2 shadow-2xl">
                <div className="relative h-[340px] sm:h-[440px] w-full rounded-sm overflow-hidden bg-obsidian-200">
                  <Image
                    src="/images/inside/ANWiy9RRR7rqK0ywbV6u8KaU5rmm5VADLZXi9vbIxlohpLzT94x3W_3es4-EVIklEvTNIHK5P0BSMFHRBof2ZMWxQwGqbkc6hQcUJKlLJ9EidqqZWt7HE_wEpCd6TRxoqrctOIPHMpYYw4032-h3024-k-no.jpg"
                    alt="Custom tuned sports car in M2M Car Care workshop Bengaluru"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                    className="object-cover object-center transform hover:scale-105 transition-transform duration-700"
                  />
                  {/* Subtle vignette gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-transparent opacity-80" />

                  {/* On-image caption badge */}
                  <div className="absolute bottom-4 left-4 right-4 p-3 bg-obsidian/90 backdrop-blur-md border border-obsidian-border/90 rounded-sm flex items-center justify-between">
                    <div>
                      <span className="text-[10px] font-mono tracking-widest text-racing-400 uppercase block">
                        Actual Workshop Facility
                      </span>
                      <span className="text-xs font-semibold text-warm-white block truncate">
                        Custom Fitment & Detailing Bay
                      </span>
                    </div>
                    <Link
                      href="/gallery"
                      className="text-xs font-mono text-warm-white/90 hover:text-racing-400 flex items-center gap-1 shrink-0 ml-2"
                    >
                      View 90+ photos <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Floating secondary badge */}
              <div className="hidden sm:flex absolute -bottom-6 -left-6 p-4 rounded-sm bg-obsidian-100/95 border border-racing-500/40 shadow-premium items-center gap-3.5 backdrop-blur-md">
                <div className="w-10 h-10 rounded-sm bg-racing-500/10 border border-racing-500/30 flex items-center justify-center text-racing-500">
                  <Wrench className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono uppercase tracking-wider text-warm-dim block">
                    Full Studio Setup
                  </span>
                  <span className="text-sm font-bold text-warm-white block">
                    Wash, Tint & Styling
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
