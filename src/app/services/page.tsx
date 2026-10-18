import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { servicesData } from "@/data/servicesData";
import { siteConfig } from "@/data/siteConfig";
import {
  CheckCircle2,
  ArrowRight,
  Sparkles,
  MessageSquare,
  HelpCircle,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Automotive Services | Car Wash, Sun Film, Headlight Restoration & Accessories",
  description:
    "Comprehensive car care services in Bengaluru: precision washing, heat-rejection glass tinting, headlight lens clarity restoration, custom seat covers, and vehicle accessories.",
};

export default function ServicesPage() {
  const enabledServices = servicesData.filter((svc) => svc.enabled);

  return (
    <div className="flex flex-col">
      <PageHeader
        badge="Services Directory"
        title="Precision Car Care & Custom Styling."
        description="Every service below is performed with professional-grade tools, proven materials, and deliberate craftsmanship at our Sarjapur Road workshop."
        breadcrumbs={[{ label: "Services" }]}
      />

      {/* Services List Section (Crisp Light Background with White Cards) */}
      <section className="bg-slate-50 py-16 sm:py-24 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
          {enabledServices.map((service, index) => {
            const isReversed = index % 2 === 1;

            return (
              <div
                key={service.id}
                id={service.slug}
                className="scroll-mt-28 p-6 sm:p-10 rounded-sm bg-white border border-slate-200/90 hover:border-racing-500/50 hover:shadow-xl transition-all shadow-sm"
              >
                <div
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${
                    isReversed ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Visual Side */}
                  <div
                    className={`lg:col-span-6 relative ${
                      isReversed ? "lg:order-2" : "lg:order-1"
                    }`}
                  >
                    <div className="relative rounded-sm overflow-hidden border border-slate-200 bg-slate-100 h-72 sm:h-96 shadow-md group">
                      <Image
                        src={service.imageSrc}
                        alt={service.imageAlt}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                        className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-75" />

                      {/* Category tag */}
                      <div className="absolute top-4 left-4 px-3 py-1 rounded-xs bg-obsidian/90 backdrop-blur-md border border-obsidian-border text-xs font-mono uppercase tracking-wider text-racing-400">
                        {service.category}
                      </div>

                      <div className="absolute bottom-4 left-4 right-4 p-3 bg-obsidian/90 backdrop-blur-md rounded-sm border border-obsidian-border text-warm-white">
                        <span className="text-[10px] font-mono text-racing-400 uppercase tracking-wider block">
                          Verified Service Bay
                        </span>
                        <span className="text-xs font-semibold truncate block">
                          {service.imageAlt}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Details Side */}
                  <div
                    className={`lg:col-span-6 space-y-5 ${
                      isReversed ? "lg:order-1" : "lg:order-2"
                    }`}
                  >
                    <div className="space-y-1.5">
                      <span className="text-xs font-mono uppercase tracking-widest text-racing-600 font-semibold block">
                        Category: {service.category}
                      </span>
                      <h2 className="font-heading font-bold text-2xl sm:text-3xl text-slate-900 tracking-tight">
                        {service.title}
                      </h2>
                      <p className="text-xs sm:text-sm font-mono text-slate-500">
                        {service.tagline}
                      </p>
                    </div>

                    <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Features List */}
                    <div className="pt-2">
                      <h3 className="text-xs font-mono uppercase tracking-wider text-slate-900 mb-3 flex items-center gap-2 font-semibold">
                        <Sparkles className="w-3.5 h-3.5 text-racing-500" />
                        <span>Included Scope & Key Highlights</span>
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {service.features.map((feature, fIdx) => (
                          <div
                            key={fIdx}
                            className="flex items-start gap-2 p-2.5 rounded-sm bg-slate-50 border border-slate-200/80 text-xs text-slate-700"
                          >
                            <CheckCircle2 className="w-3.5 h-3.5 text-racing-500 shrink-0 mt-0.5" />
                            <span className="leading-snug">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Action Bar */}
                    <div className="pt-4 flex flex-wrap items-center gap-4">
                      <Link
                        href={`/contact?service=${encodeURIComponent(service.title)}`}
                        className="inline-flex items-center gap-2 px-5 py-3 text-xs font-heading font-bold uppercase tracking-wider text-obsidian bg-racing-500 hover:bg-racing-400 rounded-sm shadow-md transition-all"
                      >
                        <MessageSquare className="w-3.5 h-3.5" />
                        <span>Enquire About Availability</span>
                      </Link>

                      <a
                        href={siteConfig.googleMapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-3 text-xs font-heading font-semibold text-slate-800 hover:text-racing-600 border border-slate-300 rounded-sm transition-colors"
                      >
                        <span>Drive to Workshop</span>
                        <ArrowRight className="w-3 h-3 text-racing-500" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Transparent Service Guarantee & Consultation Notice (Dark Obsidian Finish) */}
      <section className="bg-obsidian py-16 border-b border-obsidian-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-racing-500">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Custom Requirements</span>
          </div>
          <h2 className="font-heading font-bold text-2xl sm:text-3xl text-warm-white tracking-tight">
            Have a Specific Vehicle Fitment or Custom Job in Mind?
          </h2>
          <p className="text-sm text-warm-dim leading-relaxed">
            Need customized leather stitching colors, special alloy wheel offsets, or high-infrared architectural automotive sun films? Drive by our workshop for hands-on vehicle inspection and straightforward advice.
          </p>

          <div className="pt-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 text-xs font-heading font-bold uppercase tracking-wider text-obsidian bg-racing-500 hover:bg-racing-400 rounded-sm shadow-card transition-all"
            >
              <span>Speak with Workshop Team</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
