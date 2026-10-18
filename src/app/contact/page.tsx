import React from "react";
import { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { ContactForm } from "@/components/ContactForm";
import { MapEmbed } from "@/components/MapEmbed";
import { siteConfig } from "@/data/siteConfig";
import {
  MapPin,
  Phone,
  MessageCircle,
  Clock,
  ExternalLink,
  Compass,
  AlertCircle,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Contact & Directions | M2M Car Care Sarjapur Road Bengaluru",
  description:
    "Get directions to M2M Car Care & Accessories on Sarjapur Road, Jakkasandra Bengaluru. View location map, inquire about car wash and tinting, and schedule your vehicle visit.",
};

export default function ContactPage() {
  const hasPhone = Boolean(siteConfig.contact.phone);
  const hasWhatsApp = Boolean(siteConfig.contact.whatsapp);
  const hasHours = Boolean(siteConfig.contact.openingHours);

  return (
    <div className="flex flex-col">
      <PageHeader
        badge="Connect With Workshop"
        title="Visit Us or Plan Your Vehicle Service."
        description="We are located along the Sarjapur Road corridor in South-East Bengaluru, easily accessible from Koramangala, Jakkasandra, and HSR Layout."
        breadcrumbs={[{ label: "Contact" }]}
      />

      {/* Main Contact Section (Crisp White Background) */}
      <section className="bg-white py-16 sm:py-24 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Contact Information Column */}
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-racing-600 font-semibold">
                  <Compass className="w-3.5 h-3.5" />
                  <span>Workshop Channels</span>
                </div>
                <h2 className="font-heading font-bold text-3xl text-slate-900 tracking-tight">
                  Direct In-Person Care.
                </h2>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Have a question about sun film specifications, custom seat patterns, or wash turnaround times? Reach out or drive in directly.
                </p>
              </div>

              {/* Address Card */}
              <div className="p-6 rounded-sm bg-slate-50 border border-slate-200 shadow-sm space-y-4">
                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-sm bg-orange-50 border border-racing-500/30 text-racing-500 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <span className="text-xs font-mono uppercase tracking-wider text-slate-500 block">
                      Physical Location:
                    </span>
                    <p className="text-sm text-slate-900 font-medium leading-relaxed">
                      {siteConfig.provisionalAddress}
                    </p>
                  </div>
                </div>

                <a
                  href={siteConfig.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-racing-600 hover:text-racing-500 transition-colors pt-2 border-t border-slate-200 w-full"
                >
                  <span>Open in Google Maps App</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Contact Numbers & WhatsApp */}
              <div className="p-6 rounded-sm bg-slate-50 border border-slate-200 shadow-sm space-y-4">
                <h3 className="text-xs font-mono uppercase tracking-wider text-slate-800 border-b border-slate-200 pb-2 font-semibold">
                  Direct Contact Lines
                </h3>

                {hasPhone ? (
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Phone className="w-4 h-4 text-racing-500" />
                      <span className="text-sm text-slate-900 font-mono font-medium">
                        {siteConfig.contact.phone}
                      </span>
                    </div>
                    <a
                      href={`tel:${siteConfig.contact.phone}`}
                      className="text-xs font-mono text-racing-600 hover:underline font-semibold"
                    >
                      Call Now
                    </a>
                  </div>
                ) : (
                  <div className="p-3 rounded-sm bg-white border border-slate-200 text-xs text-slate-600 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-slate-400" />
                      <span>Phone Line:</span>
                    </div>
                    <span className="font-mono text-racing-600 text-[11px] font-semibold">
                      Pending Owner Launch Sign-off
                    </span>
                  </div>
                )}

                {hasWhatsApp ? (
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <MessageCircle className="w-4 h-4 text-green-600" />
                      <span className="text-sm text-slate-900 font-mono font-medium">
                        {siteConfig.contact.whatsapp}
                      </span>
                    </div>
                    <a
                      href={`https://wa.me/${siteConfig.contact.whatsapp.replace(/[^0-9]/g, "")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-mono text-green-600 hover:underline font-semibold"
                    >
                      WhatsApp
                    </a>
                  </div>
                ) : (
                  <div className="p-3 rounded-sm bg-white border border-slate-200 text-xs text-slate-600 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <MessageCircle className="w-4 h-4 text-slate-400" />
                      <span>WhatsApp Support:</span>
                    </div>
                    <span className="font-mono text-green-600 text-[11px] font-semibold">
                      Configurable in siteConfig.ts
                    </span>
                  </div>
                )}
              </div>

              {/* Working Hours Card */}
              <div className="p-6 rounded-sm bg-slate-50 border border-slate-200 shadow-sm space-y-3">
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-slate-800 border-b border-slate-200 pb-2 font-semibold">
                  <Clock className="w-4 h-4 text-racing-500" />
                  <span>Working Hours & Schedule</span>
                </div>

                <div className="text-xs text-slate-600 space-y-2 font-mono">
                  <div className="flex justify-between">
                    <span>Operating Days:</span>
                    <span className="text-slate-900 font-medium">{siteConfig.contact.workingDays}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Hours:</span>
                    <span className="text-slate-900 font-medium">
                      {hasHours ? siteConfig.contact.openingHours : "Confirmed upon client launch"}
                    </span>
                  </div>
                  <div className="pt-2 text-[11px] text-slate-500 border-t border-slate-200">
                    Walk-ins are welcomed for vehicle inspection, foam washing, and accessories consultations.
                  </div>
                </div>
              </div>

              {/* Owner Presentation Notice */}
              <div className="p-4 rounded-sm bg-orange-50 border border-racing-500/30 text-xs text-slate-700 space-y-1.5 font-mono">
                <div className="flex items-center gap-1.5 font-bold text-racing-600">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>Client Checklist Note:</span>
                </div>
                <p className="leading-relaxed">
                  During your presentation to the business owner, confirm: (1) Primary customer WhatsApp number, (2) Exact opening & closing times, and (3) Physical signage address wording.
                </p>
              </div>
            </div>

            {/* Right Contact Form Column */}
            <div className="lg:col-span-7">
              <div className="mb-4">
                <span className="text-xs font-mono uppercase tracking-widest text-racing-600 font-semibold block">
                  Interactive Service Enquiry
                </span>
                <h3 className="font-heading font-bold text-2xl text-slate-900 mt-1">
                  Tell Us About Your Vehicle.
                </h3>
              </div>
              <ContactForm variant="light" />
            </div>
          </div>
        </div>
      </section>

      {/* Embedded Map Section (Soft Light Slate Section) */}
      <section className="bg-slate-50 py-16 sm:py-24 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="space-y-2">
            <span className="text-xs font-mono uppercase tracking-widest text-racing-600 font-semibold block">
              Workshop Navigation Map
            </span>
            <h2 className="font-heading font-bold text-3xl text-slate-900">
              Locate M2M on Sarjapur Road.
            </h2>
          </div>

          <MapEmbed />
        </div>
      </section>
    </div>
  );
}
