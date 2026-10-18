"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import { allImages, ImageManifestItem } from "@/data/imagesManifest";
import { Lightbox } from "@/components/Lightbox";
import { Filter, Layers, Maximize2, Sparkles } from "lucide-react";

const CATEGORIES = [
  { id: "all", label: "All Photographs" },
  { id: "accessories", label: "Showroom & Accessories", match: ["accessories", "inside"] },
  { id: "workshop", label: "Workshop & Bays", match: ["workshop"] },
  { id: "detailing", label: "Detailing & Finish", match: ["detailing"] },
  { id: "glass-tinting", label: "Glass Tinting & Sun Film", match: ["glass-tinting"] },
  { id: "car-wash", label: "Wash & Exterior", match: ["car-wash"] },
  { id: "headlight-repair", label: "Headlight Care", match: ["headlight-repair"] },
  { id: "gallery", label: "Project Archive", match: ["gallery"] },
];

export function GalleryGrid() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const [visibleCount, setVisibleCount] = useState(24);

  // Filter images by category
  const filteredImages = useMemo(() => {
    if (activeCategory === "all") {
      return allImages;
    }
    const catObj = CATEGORIES.find((c) => c.id === activeCategory);
    const matches = catObj?.match || [activeCategory];
    return allImages.filter((img) => matches.includes(img.category));
  }, [activeCategory]);

  const displayedImages = filteredImages.slice(0, visibleCount);
  const hasMore = visibleCount < filteredImages.length;

  const currentLightboxImage =
    selectedImageIndex !== null ? filteredImages[selectedImageIndex] : null;

  const handleNext = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex + 1) % filteredImages.length);
    }
  };

  const handlePrev = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex(
        (selectedImageIndex - 1 + filteredImages.length) % filteredImages.length
      );
    }
  };

  return (
    <div>
      {/* Category Filter Controls */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-6 border-b border-slate-200">
        <div className="flex flex-wrap items-center gap-2">
          {CATEGORIES.map((cat) => {
            const count =
              cat.id === "all"
                ? allImages.length
                : allImages.filter((img) =>
                    (cat.match || [cat.id]).includes(img.category)
                  ).length;

            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => {
                  setActiveCategory(cat.id);
                  setVisibleCount(24);
                  setSelectedImageIndex(null);
                }}
                className={`px-4 py-2 rounded-sm text-xs font-mono uppercase tracking-wider transition-all flex items-center gap-2 ${
                  activeCategory === cat.id
                    ? "bg-racing-500 text-obsidian font-bold shadow-md"
                    : "bg-white text-slate-700 hover:text-slate-900 hover:bg-slate-100 border border-slate-200 shadow-xs"
                }`}
              >
                <span>{cat.label}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                    activeCategory === cat.id
                      ? "bg-obsidian text-racing-400"
                      : "bg-slate-100 text-slate-600"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        <div className="text-xs font-mono text-slate-500">
          Showing {displayedImages.length} of {filteredImages.length} items
        </div>
      </div>

      {/* Empty State */}
      {displayedImages.length === 0 && (
        <div className="p-16 text-center rounded-sm bg-white border border-slate-200 shadow-sm my-8">
          <Layers className="w-10 h-10 text-slate-400 mx-auto mb-3 opacity-60" />
          <h3 className="font-heading font-semibold text-slate-900 text-lg">
            No photographs found in this category
          </h3>
          <p className="text-xs font-mono text-slate-500 mt-1">
            Check back soon as we continuously archive new workshop jobs.
          </p>
        </div>
      )}

      {/* Grid Display */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {displayedImages.map((image, index) => (
          <div
            key={image.id}
            onClick={() => setSelectedImageIndex(index)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                setSelectedImageIndex(index);
              }
            }}
            tabIndex={0}
            role="button"
            aria-label={`View ${image.title} in full size`}
            className="group relative rounded-sm overflow-hidden bg-white border border-slate-200 hover:border-racing-500 hover:shadow-xl transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-racing-500 shadow-sm"
          >
            <div className="relative h-60 w-full overflow-hidden bg-slate-100">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 300px"
                loading="lazy"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-65 transition-opacity" />

              {/* Hover indicator icon */}
              <div className="absolute top-3 right-3 p-2 rounded-xs bg-white/95 backdrop-blur-md border border-slate-200 text-slate-900 opacity-0 group-hover:opacity-100 transition-opacity shadow-sm">
                <Maximize2 className="w-3.5 h-3.5 text-racing-600" />
              </div>

              {/* Bottom Caption */}
              <div className="absolute bottom-3 left-3 right-3 space-y-0.5">
                <span className="text-[10px] font-mono uppercase tracking-widest text-racing-400 block font-semibold">
                  {image.category}
                </span>
                <p className="text-xs font-heading font-medium text-white truncate drop-shadow-sm">
                  {image.title}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Progressive Load More */}
      {hasMore && (
        <div className="mt-12 text-center">
          <button
            type="button"
            onClick={() => setVisibleCount((prev) => prev + 24)}
            className="inline-flex items-center gap-2 px-8 py-3.5 text-xs font-heading font-bold uppercase tracking-wider text-slate-900 bg-white hover:bg-slate-50 border border-slate-300 hover:border-racing-500 rounded-sm transition-all shadow-sm"
          >
            <span>Load Additional Photographs</span>
            <span className="font-mono text-slate-500">
              (+{Math.min(24, filteredImages.length - visibleCount)})
            </span>
          </button>
        </div>
      )}

      {/* Fullscreen Accessible Lightbox */}
      <Lightbox
        image={currentLightboxImage}
        onClose={() => setSelectedImageIndex(null)}
        onNext={handleNext}
        onPrev={handlePrev}
        currentIndex={selectedImageIndex ?? 0}
        totalImages={filteredImages.length}
      />
    </div>
  );
}
