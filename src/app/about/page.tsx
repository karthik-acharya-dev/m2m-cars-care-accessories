import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { siteConfig } from "@/data/siteConfig";
import {
  MapPin,
  ArrowRight,
  ShieldCheck,
  Wrench,
  Sparkles,
  Compass,
  CheckCircle2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | Workshop Philosophy & Craftsmanship",
  description:
    "Learn about M2M Car Care & Accessories in Bengaluru. Our workshop standards, hands-on automotive team, and dedicated vehicle care on Sarjapur Road.",
};

export default function AboutPage() {
  const values = [
    {
      icon: ShieldCheck,
      title: "Uncompromising Material Selection",
      description:
        "We do not cut corners with cheap solar films, ill-fitting universal covers, or abrasive compounds. We select materials that stand up to daily heat and usage.",
    },
    {
      icon: Wrench,
      title: "Skilled Automotive Fitters",
      description:
        "Every cut, stitch, and buffer pass is handled by technicians who understand modern vehicle trims, sensitive electronics, and paint clearcoats.",
    },
    {
      icon: Compass,
      title: "Honest Client Guidance",
      description:
        "If a scratch can be safely buffed without repainting, or if your headlights only need a multi-stage polish rather than replacement, that is exactly what we advise.",
    },
  ];

  return (
    <div className="flex flex-col">
      <PageHeader
        badge="About M2M Car Care"
        title="Dedicated Automotive Care in Bengaluru."
        description="Craftsmanship, honest recommendations, and custom automotive fitments on Sarjapur Road."
        breadcrumbs={[{ label: "About" }]}
      />

      {/* Main Story & Workshop Photography (Crisp White Background) */}
      <section className="bg-white py-16 sm:py-24 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Story Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-racing-600 font-semibold">
                <span>The Story of M2M</span>
              </div>
              <h2 className="font-heading font-bold text-3xl sm:text-4xl text-slate-900 tracking-tight leading-tight">
                Where Technical Precision Meets Automotive Style.
              </h2>

              <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed">
                <p>
                  Located in the bustling automotive corridor of Sarjapur Road and Jakkasandra Extension, <strong className="text-slate-900 font-semibold">M2M Car Care & Accessories</strong> was established to give motorists a dependable, single-roof destination for essential vehicle upkeep and personalized aesthetic enhancements.
                </p>
                <p>
                  Bengaluru’s driving conditions place immense stress on automobiles — blazing daytime sun that cooks interior trims, dense stop-and-go traffic that splatters grime, and pitted roads that dull exterior paintwork. We engineered our workshop services specifically to safeguard and elevate vehicles facing these exact realities.
                </p>
                <p className="text-slate-600">
                  From multi-stage grit-safe pressure washes to precision-cut solar control sun film and custom-tailored leatherette seat contours, our team approaches every vehicle with the care of true enthusiasts.
                </p>
              </div>

              {/* Verified Commitments */}
              <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono text-slate-800">
                <div className="flex items-center gap-2 p-3 rounded-sm bg-slate-50 border border-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-racing-500 shrink-0" />
                  <span>Transparent Upfront Scope</span>
                </div>
                <div className="flex items-center gap-2 p-3 rounded-sm bg-slate-50 border border-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-racing-500 shrink-0" />
                  <span>High-Grade Heat Rejection Films</span>
                </div>
                <div className="flex items-center gap-2 p-3 rounded-sm bg-slate-50 border border-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-racing-500 shrink-0" />
                  <span>Clean Dust-Controlled Bays</span>
                </div>
                <div className="flex items-center gap-2 p-3 rounded-sm bg-slate-50 border border-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-racing-500 shrink-0" />
                  <span>Direct Owner Accountability</span>
                </div>
              </div>
            </div>

            {/* Asymmetric Photography Column */}
            <div className="lg:col-span-5 space-y-4">
              <div className="relative rounded-sm overflow-hidden border border-slate-300 h-72 sm:h-80 bg-slate-200 shadow-xl">
                <Image
                  src="/images/inside/ANWiy9RRR7rqK0ywbV6u8KaU5rmm5VADLZXi9vbIxlohpLzT94x3W_3es4-EVIklEvTNIHK5P0BSMFHRBof2ZMWxQwGqbkc6hQcUJKlLJ9EidqqZWt7HE_wEpCd6TRxoqrctOIPHMpYYw4032-h3024-k-no.jpg"
                  alt="Custom tuned sports car in M2M Car Care workshop bay"
                  fill
                  sizes="(max-width: 768px) 100vw, 500px"
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-75" />
                <div className="absolute bottom-3 left-3 px-3 py-1.5 rounded-xs bg-obsidian/90 backdrop-blur-md border border-obsidian-border text-[10px] font-mono text-warm-white">
                  Custom Tuning & Fitment Bay
                </div>
              </div>

              <div className="relative rounded-sm overflow-hidden border border-slate-300 h-56 sm:h-64 bg-slate-200 shadow-md">
                <Image
                  src="/images/inside/ANWiy9Rd7fnKNMpqsOu7php3OMxrbVJ3f4n5vmGP_bl9XQgBbwomXfy4LL1Bu8W5zTZQ2s4U6EgYOip_qfoNaS0ZZP_FQFkBJuvfcx3wV2wrqZpQx4yhpS2DjpsZRYM-DLHDzs9e-esw3000-h4000-k-no.jpg"
                  alt="Accessories and alloy wheel showroom inside M2M Bengaluru"
                  fill
                  sizes="(max-width: 768px) 100vw, 500px"
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-75" />
                <div className="absolute bottom-3 left-3 px-3 py-1.5 rounded-xs bg-obsidian/90 backdrop-blur-md border border-obsidian-border text-[10px] font-mono text-warm-white">
                  Curated Accessories & BBS Fitment Center
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Workshop Principles (Soft Light Slate Section) */}
      <section className="bg-slate-50 py-20 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12 space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-racing-600 font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Workshop Philosophy</span>
            </div>
            <h2 className="font-heading font-bold text-3xl text-slate-900 tracking-tight">
              Our Service Standards.
            </h2>
            <p className="text-sm text-slate-600">
              The core operating principles behind every car wash, tint installation, and accessory fitment we undertake.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((v, idx) => {
              const Icon = v.icon;
              return (
                <div
                  key={idx}
                  className="p-8 rounded-sm bg-white border border-slate-200/90 shadow-sm space-y-4 hover:border-racing-500/50 hover:shadow-md transition-all"
                >
                  <div className="w-12 h-12 rounded-sm bg-orange-50 border border-racing-500/30 flex items-center justify-center text-racing-500">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-heading font-bold text-xl text-slate-900">
                    {v.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {v.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Direct CTA (Dark Obsidian Finish) */}
      <section className="bg-obsidian py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-warm-white tracking-tight">
            Experience M2M Automotive Care First-Hand.
          </h2>
          <p className="text-sm sm:text-base text-warm-dim max-w-2xl mx-auto leading-relaxed">
            Drive by our Sarjapur Road workshop for a consultation, or view our full services directory to explore all available maintenance and accessories packages.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-heading font-bold uppercase tracking-wider text-obsidian bg-racing-500 hover:bg-racing-400 rounded-sm shadow-card transition-all w-full sm:w-auto"
            >
              <span>Explore All Services</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <a
              href={siteConfig.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-heading font-semibold text-warm-white bg-obsidian-100 hover:bg-obsidian-50 border border-obsidian-border rounded-sm transition-all w-full sm:w-auto"
            >
              <MapPin className="w-4 h-4 text-racing-500" />
              <span>Get Directions to Workshop</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
