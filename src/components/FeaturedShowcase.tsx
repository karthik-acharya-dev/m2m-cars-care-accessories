import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Camera } from "lucide-react";

export function FeaturedShowcase() {
  const showcaseItems = [
    {
      src: "/images/gallery/ANWiy9SzIE_H445phPK8fYvULQ2girkcnfwVaztUnMYZEonPF02Ny_PF8qbdurlDCgrAWz1cD6AMSooWcmKM_OcEBbMDIjTcjMYlyE05qajs_FXGK7wUC7iDjMATZyH9x1Xgtgc7xIUuw3000-h4000-k-no.jpg",
      title: "BMW 2-Series Detailing & Alloy Fitment",
      category: "Detailing & Wheels",
      caption: "Under LED inspection tunnel lights in M2M detailing bay",
      span: "lg:col-span-7 lg:row-span-2",
      heightClass: "h-80 sm:h-96 lg:h-[520px]",
    },
    {
      src: "/images/gallery/ANWiy9QxR8QmvBivm76UXB-BrrgjHG1hmN2lDZ1ezPAA4EDi-fmU3exabg3lbu874OokP518iZzltLUckzHIQyAH2l2_nX4zBRtf_8Z2SKtyZHNRB1Rkaf1g_0Nc5vAjoFHiILrkSV85pQw3024-h4032-k-no.jpg",
      title: "Audi S8 Exterior Styling & Sun Film",
      category: "Solar Tint & Styling",
      caption: "Parked at M2M Car Care & Accessories workshop frontage",
      span: "lg:col-span-5",
      heightClass: "h-64 sm:h-72 lg:h-[248px]",
    },
    {
      src: "/images/inside/ANWiy9Rwj7s3HCKIsqf8kEYxAcDD6BZmVmq0RcubK6f6AJWVp9YgiTYe0AaCnowc618BvR4xISLUErYgdoC_gDN3CSFtWwWFq39w3MgdoHVXqQvXlwlaSggDi84m8jdVqatLdQuS-ErMV4bMvRRjw1200-h1600-k-no.jpg",
      title: "Hartge Multi-Piece Style Alloy Wheels",
      category: "Accessories Showroom",
      caption: "Curated wheel fitments for premium German and Japanese cars",
      span: "lg:col-span-5",
      heightClass: "h-64 sm:h-72 lg:h-[248px]",
    },
    {
      src: "/images/inside/ANWiy9Rd7fnKNMpqsOu7php3OMxrbVJ3f4n5vmGP_bl9XQgBbwomXfy4LL1Bu8W5zTZQ2s4U6EgYOip_qfoNaS0ZZP_FQFkBJuvfcx3wV2wrqZpQx4yhpS2DjpsZRYM-DLHDzs9e-esw3000-h4000-k-no.jpg",
      title: "Custom BBS Wheel Fitment on Compact SUV",
      category: "Custom Fitment",
      caption: "Stance, offset calibration, and wheel balancing",
      span: "lg:col-span-4",
      heightClass: "h-64 sm:h-72",
    },
    {
      src: "/images/inside/ANWiy9Sh8jwk3Yw5f-HUjmjj4vyYyyXmlKFE8yfpJGdJ824IIpjBnWiTSLKDKIno6tI8UURRf7QtJO6hxE_IUL-BKdQY0iuNueU66Wkc1SW4kYo7ySDT8lYigyi1gxYPeFHF868Zd9Wkw4000-h3000-k-no.jpg",
      title: "Baleno Full Service & Wash Inspection",
      category: "Workshop Maintenance",
      caption: "Active bay servicing by dedicated automotive technicians",
      span: "lg:col-span-4",
      heightClass: "h-64 sm:h-72",
    },
    {
      src: "/images/inside/ANWiy9RRR7rqK0ywbV6u8KaU5rmm5VADLZXi9vbIxlohpLzT94x3W_3es4-EVIklEvTNIHK5P0BSMFHRBof2ZMWxQwGqbkc6hQcUJKlLJ9EidqqZWt7HE_wEpCd6TRxoqrctOIPHMpYYw4032-h3024-k-no.jpg",
      title: "Electric Blue Custom Project Car",
      category: "Bodykit & Headlights",
      caption: "Custom aero kit, projector lamps, and tire setup",
      span: "lg:col-span-4",
      heightClass: "h-64 sm:h-72",
    },
  ];

  return (
    <section className="bg-obsidian py-20 border-b border-obsidian-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-racing-500">
              <Camera className="w-3.5 h-3.5" />
              <span>Authentic Workshop Archive</span>
            </div>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-warm-white tracking-tight">
              Featured Automotive Work.
            </h2>
            <p className="text-sm sm:text-base text-warm-dim max-w-xl">
              Real projects completed inside our Bengaluru studio. Every photograph below depicts genuine vehicles, fitments, and workshop bays at M2M.
            </p>
          </div>

          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 px-5 py-3 text-xs font-heading font-bold uppercase tracking-wider text-warm-white bg-obsidian-100 hover:bg-obsidian-50 border border-obsidian-border hover:border-racing-500 rounded-sm transition-all shadow-card shrink-0"
          >
            <span>Explore Complete Gallery</span>
            <ArrowRight className="w-3.5 h-3.5 text-racing-500" />
          </Link>
        </div>

        {/* Asymmetric Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-5">
          {showcaseItems.map((item, idx) => (
            <div
              key={idx}
              className={`group relative rounded-sm overflow-hidden border border-obsidian-border bg-obsidian-200 ${item.span}`}
            >
              <div className={`relative w-full ${item.heightClass}`}>
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 700px"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/20 to-transparent opacity-85 group-hover:opacity-75 transition-opacity" />

                {/* Top Category Badge */}
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-xs bg-obsidian/85 backdrop-blur-md border border-obsidian-border text-[10px] font-mono uppercase tracking-wider text-racing-400">
                  {item.category}
                </div>

                {/* Bottom Overlay Info */}
                <div className="absolute bottom-4 left-4 right-4 space-y-1">
                  <h3 className="font-heading font-bold text-base sm:text-lg text-warm-white group-hover:text-racing-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-warm-dim/90 line-clamp-1">
                    {item.caption}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
