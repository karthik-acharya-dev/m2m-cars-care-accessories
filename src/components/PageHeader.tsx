import React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface PageHeaderProps {
  badge: string;
  title: string;
  description: string;
  breadcrumbs?: { label: string; href?: string }[];
}

export function PageHeader({
  badge,
  title,
  description,
  breadcrumbs = [],
}: PageHeaderProps) {
  return (
    <div className="relative bg-obsidian-100 border-b border-obsidian-border py-14 sm:py-20 overflow-hidden">
      {/* Background subtle glow */}
      <div className="absolute top-0 right-1/4 w-80 h-80 bg-racing-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Breadcrumb */}
        {breadcrumbs.length > 0 && (
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-1.5 text-xs font-mono text-warm-dim mb-4"
          >
            <Link href="/" className="hover:text-warm-white transition-colors">
              Home
            </Link>
            {breadcrumbs.map((crumb, idx) => (
              <React.Fragment key={idx}>
                <ChevronRight className="w-3 h-3 text-obsidian-border" />
                {crumb.href ? (
                  <Link href={crumb.href} className="hover:text-warm-white transition-colors">
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-racing-400 font-semibold">{crumb.label}</span>
                )}
              </React.Fragment>
            ))}
          </nav>
        )}

        <div className="space-y-3 max-w-3xl">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-racing-500">
            <span className="w-1.5 h-1.5 rounded-full bg-racing-500" />
            <span>{badge}</span>
          </div>

          <h1 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-warm-white tracking-tight leading-tight">
            {title}
          </h1>

          <p className="text-base sm:text-lg text-warm-white/75 leading-relaxed pt-1">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
