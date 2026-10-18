"use client";

import React, { useEffect, useCallback } from "react";
import Image from "next/image";
import { ImageManifestItem } from "@/data/imagesManifest";
import { X, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";

interface LightboxProps {
  image: ImageManifestItem | null;
  onClose: () => void;
  onNext?: () => void;
  onPrev?: () => void;
  currentIndex?: number;
  totalImages?: number;
}

export function Lightbox({
  image,
  onClose,
  onNext,
  onPrev,
  currentIndex = 0,
  totalImages = 0,
}: LightboxProps) {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowRight" && onNext) {
        onNext();
      } else if (e.key === "ArrowLeft" && onPrev) {
        onPrev();
      }
    },
    [onClose, onNext, onPrev]
  );

  useEffect(() => {
    if (!image) return;
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [image, handleKeyDown]);

  if (!image) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Image Lightbox Viewer"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md p-2 sm:p-6"
    >
      {/* Background click to close */}
      <div
        className="absolute inset-0 cursor-zoom-out"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Top Bar Controls */}
      <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10 pointer-events-auto">
        <div className="flex items-center gap-3 bg-obsidian/80 px-3 py-1.5 rounded-sm border border-obsidian-border text-xs font-mono text-warm-dim">
          <span className="text-racing-400 font-semibold uppercase">{image.category}</span>
          {totalImages > 0 && (
            <>
              <span>•</span>
              <span>
                {currentIndex + 1} / {totalImages}
              </span>
            </>
          )}
        </div>

        <button
          type="button"
          onClick={onClose}
          className="p-2.5 rounded-sm bg-obsidian/80 hover:bg-racing-500 hover:text-obsidian text-warm-white border border-obsidian-border transition-colors focus:outline-none focus:ring-2 focus:ring-racing-500"
          aria-label="Close Lightbox (Escape)"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Previous Button */}
      {onPrev && (
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onPrev();
          }}
          className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 z-10 p-3 rounded-sm bg-obsidian/80 hover:bg-racing-500 hover:text-obsidian text-warm-white border border-obsidian-border transition-all focus:outline-none focus:ring-2 focus:ring-racing-500"
          aria-label="Previous Image (Left Arrow)"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
      )}

      {/* Next Button */}
      {onNext && (
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onNext();
          }}
          className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 z-10 p-3 rounded-sm bg-obsidian/80 hover:bg-racing-500 hover:text-obsidian text-warm-white border border-obsidian-border transition-all focus:outline-none focus:ring-2 focus:ring-racing-500"
          aria-label="Next Image (Right Arrow)"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      )}

      {/* Main Image Display */}
      <div className="relative max-w-5xl max-h-[82vh] w-full h-full flex flex-col items-center justify-center pointer-events-auto z-0">
        <div className="relative w-full h-[70vh] max-h-[800px]">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes="90vw"
            priority
            className="object-contain"
          />
        </div>

        {/* Caption */}
        <div className="mt-3 text-center max-w-2xl px-4 py-2 bg-obsidian/90 rounded-sm border border-obsidian-border">
          <p className="text-xs sm:text-sm font-heading font-medium text-warm-white">
            {image.alt}
          </p>
          <span className="text-[10px] font-mono text-warm-dim block mt-0.5">
            M2M Car Care & Accessories • Bengaluru
          </span>
        </div>
      </div>
    </div>
  );
}
