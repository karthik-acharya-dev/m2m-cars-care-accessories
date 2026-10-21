"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/data/siteConfig";
import {
  Menu,
  X,
  MapPin,
  Phone,
  ChevronRight,
  ShieldAlert,
} from "lucide-react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on page transition
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
  ];

  const hasPhone = Boolean(siteConfig.contact.phone);

  return (
    <>
      {/* Main Sticky Navigation */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isMobileMenuOpen
            ? "bg-[#090a0c] border-b border-obsidian-border shadow-premium py-3"
            : isScrolled
            ? "bg-obsidian/95 backdrop-blur-md border-b border-obsidian-border shadow-premium py-3"
            : "bg-obsidian/90 backdrop-blur-sm border-b border-obsidian-border/50 py-4 sm:py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo / Wordmark */}
            <Link
              href="/"
              className="group flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-racing-500 rounded-sm"
              aria-label="M2M Car Care & Accessories Home"
            >
              <div className="relative shrink-0 w-10 h-10 rounded-sm overflow-hidden border border-racing-500/50 bg-black p-0.5 shadow-sm group-hover:border-racing-500 group-hover:shadow-orangeGlow transition-all">
                <Image
                  src="/images/logo/logo.png"
                  alt="M2M Car Care Studio Logo"
                  width={40}
                  height={40}
                  className="w-full h-full object-contain"
                  priority
                />
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-bold text-lg sm:text-xl text-warm-white tracking-tight leading-none group-hover:text-racing-400 transition-colors">
                  M2M CAR CARE
                </span>
                <span className="text-[10px] font-mono tracking-widest text-warm-dim uppercase">
                  & Accessories • Bengaluru
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center space-x-1 lg:space-x-2" aria-label="Main Navigation">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`px-3 py-2 rounded-sm text-sm font-medium transition-colors relative ${
                      isActive
                        ? "text-racing-500 font-semibold"
                        : "text-warm-white/80 hover:text-warm-white hover:bg-obsidian-50/50"
                    }`}
                  >
                    {link.name}
                    {isActive && (
                      <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-racing-500 rounded-full" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop Action Buttons */}
            <div className="hidden sm:flex items-center gap-3">
              {hasPhone ? (
                <a
                  href={`tel:${siteConfig.contact.phone}`}
                  className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-mono text-warm-white bg-obsidian-100 border border-obsidian-border rounded-sm hover:border-racing-500 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-racing-500" />
                  <span>{siteConfig.contact.phone}</span>
                </a>
              ) : null}

              <a
                href={siteConfig.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-heading font-semibold uppercase tracking-wider text-obsidian bg-racing-500 hover:bg-racing-400 rounded-sm shadow-card transition-all active:scale-[0.98]"
              >
                <MapPin className="w-3.5 h-3.5" />
                <span>Get Directions</span>
              </a>
            </div>

            {/* Mobile Menu Toggle Button */}
            <div className="flex md:hidden items-center gap-2">
              <a
                href={siteConfig.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center p-2 rounded-sm text-racing-500 bg-obsidian-100 border border-racing-500/40"
                aria-label="Get Directions on Google Maps"
              >
                <MapPin className="w-4 h-4" />
              </a>

              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-sm text-warm-white bg-obsidian-100 border border-obsidian-border hover:text-racing-500 hover:border-racing-500 transition-colors focus:outline-none focus:ring-2 focus:ring-racing-500"
                aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={isMobileMenuOpen}
              >
                {isMobileMenuOpen ? <X className="w-6 h-6 text-racing-500" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer - 100% Solid Opaque Full-Screen Overlay */}
        {isMobileMenuOpen && (
          <div
            className="md:hidden fixed inset-x-0 top-[65px] bottom-0 bg-[#090a0c] border-t border-obsidian-border shadow-2xl p-5 flex flex-col justify-between overflow-y-auto z-50 pb-20"
            style={{ backgroundColor: "#090a0c" }}
          >
            <div className="flex flex-col space-y-2.5 pb-6 border-b border-obsidian-border">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`flex items-center justify-between px-4 py-3.5 rounded-sm text-base font-heading font-semibold transition-all ${
                      isActive
                        ? "bg-[#14171d] text-racing-500 border-l-4 border-racing-500 shadow-sm"
                        : "text-warm-white bg-[#12151b] hover:bg-[#1a1d24] hover:text-racing-400 border border-obsidian-border"
                    }`}
                  >
                    <span>{link.name}</span>
                    <ChevronRight className={`w-4 h-4 ${isActive ? "text-racing-500" : "opacity-40"}`} />
                  </Link>
                );
              })}
            </div>

            <div className="pt-6 space-y-4">
              <div className="text-xs text-warm-dim flex items-start gap-2 bg-[#12151b] p-3 rounded-sm border border-obsidian-border">
                <MapPin className="w-4 h-4 text-racing-500 shrink-0 mt-0.5" />
                <span>{siteConfig.provisionalAddress}</span>
              </div>

              <div className="grid grid-cols-1 gap-2.5 pt-2">
                <a
                  href={siteConfig.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3.5 text-sm font-heading font-semibold uppercase tracking-wider text-obsidian bg-racing-500 hover:bg-racing-400 rounded-sm text-center shadow-card active:scale-[0.98] transition-all"
                >
                  <MapPin className="w-4 h-4" />
                  <span>Navigate to Workshop</span>
                </a>

                <Link
                  href="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 w-full py-3.5 text-sm font-heading font-medium text-warm-white bg-[#12151b] hover:bg-[#1a1d24] border border-obsidian-border hover:border-racing-500 rounded-sm transition-colors text-center"
                >
                  <span>Enquire / Book Consultation</span>
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
