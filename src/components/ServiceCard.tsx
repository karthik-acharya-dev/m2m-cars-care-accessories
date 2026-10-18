import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ServiceItem } from "@/types";
import { ArrowRight, CheckCircle2 } from "lucide-react";

interface ServiceCardProps {
  service: ServiceItem;
  featured?: boolean;
  variant?: "light" | "dark";
}

export function ServiceCard({
  service,
  featured = false,
  variant = "light",
}: ServiceCardProps) {
  const isLight = variant === "light";

  return (
    <div
      id={service.slug}
      className={`group relative flex flex-col rounded-sm transition-all duration-300 overflow-hidden ${
        isLight
          ? "bg-white border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-racing-500/60"
          : "bg-obsidian-card border border-obsidian-border hover:border-racing-500/60 shadow-premium"
      } ${featured ? "lg:col-span-2 lg:flex-row" : ""}`}
    >
      {/* Service Image Container */}
      <div
        className={`relative w-full overflow-hidden ${
          isLight ? "bg-slate-100" : "bg-obsidian-200"
        } ${featured ? "lg:w-1/2 h-64 lg:h-auto min-h-[260px]" : "h-56"}`}
      >
        <Image
          src={service.imageSrc}
          alt={service.imageAlt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
          className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
        />
        <div
          className={`absolute inset-0 bg-gradient-to-t ${
            isLight
              ? "from-slate-900/60 via-transparent to-transparent"
              : "from-obsidian-card via-transparent to-transparent opacity-80"
          }`}
        />

        <div className="absolute top-3 left-3 px-2.5 py-1 rounded-xs bg-obsidian/85 backdrop-blur-md border border-obsidian-border text-[11px] font-mono uppercase tracking-wider text-racing-400">
          {service.category}
        </div>
      </div>

      {/* Service Details */}
      <div
        className={`p-6 sm:p-7 flex flex-col justify-between flex-1 ${
          featured ? "lg:w-1/2" : ""
        }`}
      >
        <div className="space-y-3">
          <h3
            className={`font-heading font-bold text-xl sm:text-2xl transition-colors ${
              isLight
                ? "text-slate-900 group-hover:text-racing-600"
                : "text-warm-white group-hover:text-racing-400"
            }`}
          >
            {service.title}
          </h3>
          <p
            className={`text-xs font-mono ${
              isLight ? "text-racing-600 font-semibold" : "text-warm-dim"
            }`}
          >
            {service.tagline}
          </p>
          <p
            className={`text-sm leading-relaxed ${
              isLight ? "text-slate-600" : "text-warm-white/75"
            }`}
          >
            {service.description}
          </p>

          {/* Key Feature Points */}
          <ul
            className={`pt-2 space-y-1.5 border-t ${
              isLight ? "border-slate-100" : "border-obsidian-border/60"
            }`}
          >
            {service.features.slice(0, 3).map((feat, idx) => (
              <li
                key={idx}
                className={`flex items-start gap-2 text-xs ${
                  isLight ? "text-slate-600" : "text-warm-dim"
                }`}
              >
                <CheckCircle2 className="w-3.5 h-3.5 text-racing-500 shrink-0 mt-0.5" />
                <span>{feat}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Action Link */}
        <div
          className={`pt-6 mt-4 border-t flex items-center justify-between ${
            isLight ? "border-slate-100" : "border-obsidian-border/50"
          }`}
        >
          <Link
            href="/contact"
            className={`inline-flex items-center gap-2 text-xs font-heading font-bold uppercase tracking-wider transition-colors ${
              isLight
                ? "text-slate-900 hover:text-racing-600"
                : "text-warm-white hover:text-racing-400"
            }`}
          >
            <span>Inquire for Vehicle</span>
            <ArrowRight className="w-3.5 h-3.5 text-racing-500 group-hover:translate-x-1 transition-transform" />
          </Link>
          <span
            className={`text-[11px] font-mono ${
              isLight ? "text-slate-400" : "text-warm-dim"
            }`}
          >
            Bengaluru Studio
          </span>
        </div>
      </div>
    </div>
  );
}
