"use client";

import React, { useState } from "react";
import { siteConfig } from "@/data/siteConfig";
import {
  MapPin,
  ExternalLink,
  Copy,
  Check,
  Navigation,
  AlertCircle,
} from "lucide-react";

export function MapEmbed() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(siteConfig.provisionalAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="rounded-sm border border-obsidian-border bg-obsidian-card overflow-hidden shadow-premium">
      <div className="grid grid-cols-1 lg:grid-cols-12">
        {/* Left Info Column */}
        <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-obsidian-border">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-racing-500">
              <Navigation className="w-3.5 h-3.5" />
              <span>Workshop Location</span>
            </div>

            <div>
              <h3 className="font-heading font-bold text-2xl text-warm-white">
                Find Us in Bengaluru
              </h3>
              <p className="text-xs font-mono text-warm-dim mt-1">
                Sarjapur Road / Jakkasandra / Koramangala
              </p>
            </div>

            {/* Address Card */}
            <div className="p-4 rounded-sm bg-obsidian-100 border border-obsidian-border space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-racing-500 shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <span className="text-xs font-mono uppercase tracking-wider text-warm-dim block">
                    Provisional Physical Address:
                  </span>
                  <p className="text-sm text-warm-white font-medium leading-relaxed">
                    {siteConfig.provisionalAddress}
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={handleCopy}
                className="inline-flex items-center gap-2 text-xs font-mono text-racing-400 hover:text-racing-300 transition-colors pt-2 border-t border-obsidian-border w-full justify-between"
              >
                <span>{copied ? "Address Copied to Clipboard!" : "Copy Full Address"}</span>
                {copied ? <Check className="w-3.5 h-3.5 text-green-400" /> : <Copy className="w-3.5 h-3.5" />}
              </button>
            </div>

            {/* Verification Note for Owner Review */}
            <div
              id="verification-note"
              className="p-3.5 rounded-sm bg-racing-500/10 border border-racing-500/30 text-xs text-warm-dim space-y-1"
            >
              <div className="flex items-center gap-1.5 font-semibold text-racing-400">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>Client Verification Note:</span>
              </div>
              <p className="leading-relaxed">
                Business directories mention <em>{siteConfig.alternativeAddress}</em>, while Maps indicates Jakkasandra Extension. Please confirm the exact current customer walk-in gate before final print collateral.
              </p>
            </div>
          </div>

          {/* Action Button */}
          <div className="pt-6 mt-6 border-t border-obsidian-border">
            <a
              href={siteConfig.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full py-3.5 px-4 text-xs font-heading font-semibold uppercase tracking-wider text-obsidian bg-racing-500 hover:bg-racing-400 rounded-sm shadow-card transition-all active:scale-[0.98]"
            >
              <Navigation className="w-4 h-4" />
              <span>Open in Google Maps App</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Right Map Embed Column */}
        <div className="lg:col-span-7 relative min-h-[360px] lg:min-h-[460px] bg-obsidian-200">
          <iframe
            title="M2M Car Care & Accessories Location Map"
            width="100%"
            height="100%"
            style={{ border: 0, minHeight: "360px" }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            src={`https://maps.google.com/maps?q=${encodeURIComponent(
              siteConfig.googleMapsEmbedQuery
            )}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
            className="w-full h-full filter invert-[0.9] hue-rotate-180 brightness-90 contrast-125"
          />
        </div>
      </div>
    </div>
  );
}
