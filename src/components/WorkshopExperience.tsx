import React from "react";
import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";
import {
  ClipboardCheck,
  ShieldCheck,
  Sparkles,
  MapPin,
  Clock,
  ArrowRight,
  HelpCircle,
} from "lucide-react";

export function WorkshopExperience() {
  const steps = [
    {
      number: "01",
      icon: ClipboardCheck,
      title: "Direct Vehicle Assessment",
      description:
        "When you arrive at our Sarjapur Road studio, our technicians inspect your car alongside you — noting paint condition, tint requirements, or accessory fitment goals before any job begins.",
    },
    {
      number: "02",
      icon: Sparkles,
      title: "Scratch-Safe Procedures",
      description:
        "Whether it is high-pressure snow foam washing, multi-stage machine compounding, or heat-gun solar film shrinking, we use clean microfibers and protective seat covers to keep your car safe.",
    },
    {
      number: "03",
      icon: ShieldCheck,
      title: "Verified Material Quality",
      description:
        "We source genuine automotive sun films, durable leatherette fabrics, all-weather floor mats, and branded alloy wheels so your enhancements last through Bengaluru weather and traffic.",
    },
    {
      number: "04",
      icon: Clock,
      title: "Clear Timelines & Handover",
      description:
        "From quick same-day exterior washes and floor mat installations to scheduled multi-hour solar tinting and detailing sessions, we give you realistic delivery windows without surprises.",
    },
  ];

  return (
    <section className="bg-obsidian-100 py-20 border-b border-obsidian-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-obsidian-50 border border-racing-500/30 text-xs font-mono uppercase tracking-widest text-racing-400">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>The M2M Standard</span>
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-warm-white tracking-tight">
            What to Expect at Our Workshop.
          </h2>
          <p className="text-sm sm:text-base text-warm-dim leading-relaxed">
            Honest service without aggressive sales pitches. Here is what happens when you bring your vehicle to M2M Car Care & Accessories.
          </p>
        </div>

        {/* 4 Step Process Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="relative p-6 sm:p-7 rounded-sm bg-obsidian-card border border-obsidian-border hover:border-racing-500/50 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-11 h-11 rounded-sm bg-obsidian-50 border border-racing-500/30 flex items-center justify-center text-racing-500 group-hover:bg-racing-500 group-hover:text-obsidian transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="font-mono font-bold text-2xl text-obsidian-border group-hover:text-racing-500/30 transition-colors">
                      {step.number}
                    </span>
                  </div>

                  <h3 className="font-heading font-bold text-lg text-warm-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-warm-dim leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-obsidian-border/50 text-[11px] font-mono text-warm-dim">
                  Bengaluru Car Care Standard
                </div>
              </div>
            );
          })}
        </div>

        {/* Visit Banner CTA */}
        <div className="mt-14 p-6 sm:p-8 rounded-sm bg-obsidian border border-racing-500/30 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-1">
            <h3 className="font-heading font-bold text-xl text-warm-white">
              Ready to visit the workshop?
            </h3>
            <p className="text-xs sm:text-sm text-warm-dim">
              Drive into our facility on Sarjapur Road or navigate with Google Maps.
            </p>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <a
              href={siteConfig.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 text-xs font-heading font-semibold uppercase tracking-wider text-obsidian bg-racing-500 hover:bg-racing-400 rounded-sm shadow-card transition-all w-full sm:w-auto"
            >
              <MapPin className="w-4 h-4" />
              <span>Get Directions</span>
            </a>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 text-xs font-heading font-medium text-warm-white bg-obsidian-100 hover:bg-obsidian-50 border border-obsidian-border rounded-sm transition-all w-full sm:w-auto"
            >
              <span>Enquire Online</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
