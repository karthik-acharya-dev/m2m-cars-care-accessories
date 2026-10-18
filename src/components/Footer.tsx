import React from "react";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/data/siteConfig";
import { servicesData } from "@/data/servicesData";
import {
  MapPin,
  Phone,
  Mail,
  ArrowUpRight,
  ShieldCheck,
  Clock,
  Compass,
} from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-obsidian border-t border-obsidian-border text-warm-white/80">
      {/* Top Banner: Location & Quick Direction */}
      <div className="border-b border-obsidian-border/60 bg-obsidian-100/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-sm bg-obsidian-50 border border-racing-500/30 text-racing-500 shrink-0">
              <Compass className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-heading font-semibold text-warm-white text-base sm:text-lg">
                Visiting M2M Workshop in Bengaluru
              </h3>
              <p className="text-sm text-warm-dim mt-0.5 max-w-xl">
                Located conveniently along the Sarjapur Road corridor near Jakkasandra Extension & Koramangala. Drive in for quick wash, accessory fitting, or solar film consultation.
              </p>
            </div>
          </div>

          <a
            href={siteConfig.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 text-xs font-heading font-semibold uppercase tracking-wider text-obsidian bg-racing-500 hover:bg-racing-400 rounded-sm shadow-card transition-all shrink-0"
          >
            <MapPin className="w-4 h-4" />
            <span>Open in Google Maps</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative shrink-0 w-11 h-11 rounded-sm overflow-hidden border border-racing-500/50 bg-black p-0.5 shadow-md">
                <Image
                  src="/images/logo/logo.png"
                  alt="M2M Car Care Studio Logo"
                  width={44}
                  height={44}
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <span className="font-heading font-bold text-lg text-warm-white block">
                  {siteConfig.businessName}
                </span>
                <span className="text-[11px] font-mono tracking-widest text-racing-400 uppercase">
                  Bengaluru Automotive Studio
                </span>
              </div>
            </div>

            <p className="text-sm text-warm-dim leading-relaxed max-w-md">
              Meticulous automotive maintenance, heat-rejection glass tinting, headlight lens clarity restoration, and bespoke interior accessories tailored for motorists who value craftsmanship.
            </p>

            <div className="pt-2 text-xs text-warm-dim/80 space-y-1 font-mono">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-racing-500" />
                <span>Primary Zone: Jakkasandra, Koramangala & Sarjapur Road</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-racing-500" />
                <span>Serving passenger cars, premium sedans & SUVs</span>
              </div>
            </div>
          </div>

          {/* Quick Navigation */}
          <div>
            <h4 className="font-heading text-xs font-bold uppercase tracking-widest text-warm-white mb-4 border-l-2 border-racing-500 pl-2">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/" className="hover:text-racing-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-racing-400 transition-colors">
                  About Workshop
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-racing-400 transition-colors">
                  Services Directory
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-racing-400 transition-colors">
                  Work Portfolio
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-racing-400 transition-colors">
                  Location & Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Key Services */}
          <div>
            <h4 className="font-heading text-xs font-bold uppercase tracking-widest text-warm-white mb-4 border-l-2 border-racing-500 pl-2">
              Services
            </h4>
            <ul className="space-y-2.5 text-sm">
              {servicesData.slice(0, 5).map((service) => (
                <li key={service.id}>
                  <Link
                    href={`/services#${service.slug}`}
                    className="hover:text-racing-400 transition-colors block truncate"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Location & Verification Details */}
          <div>
            <h4 className="font-heading text-xs font-bold uppercase tracking-widest text-warm-white mb-4 border-l-2 border-racing-500 pl-2">
              Workshop Location
            </h4>
            <div className="space-y-3 text-xs text-warm-dim">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-racing-500 shrink-0 mt-0.5" />
                <div>
                  <span className="text-warm-white font-medium block">Provisional Address:</span>
                  <span className="leading-relaxed">{siteConfig.provisionalAddress}</span>
                </div>
              </div>

              {siteConfig.contact.phone ? (
                <div className="flex items-center gap-2 text-warm-white">
                  <Phone className="w-4 h-4 text-racing-500" />
                  <a href={`tel:${siteConfig.contact.phone}`} className="hover:text-racing-400">
                    {siteConfig.contact.phone}
                  </a>
                </div>
              ) : (
                <div className="flex items-center gap-2 text-warm-dim italic">
                  <Phone className="w-3.5 h-3.5 opacity-50" />
                  <span>Phone: Confirmed at Owner Launch</span>
                </div>
              )}

              <div className="pt-2 border-t border-obsidian-border text-[11px] text-warm-dim/80">
                <span className="font-semibold text-racing-400 block mb-0.5">Verification Note:</span>
                Address record to be reconciled with owner between Jakkasandra Ext. and Koramangala 4th Block before public indexing.
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-obsidian-border flex flex-col sm:flex-row items-center justify-between text-xs text-warm-dim gap-4">
          <p>© {currentYear} {siteConfig.businessName}. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-racing-400">
              <ShieldCheck className="w-4 h-4" />
              <span>Authentic Local Business Demo</span>
            </span>
            <Link href="/contact" className="hover:text-warm-white transition-colors">
              Client Review Notes
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
