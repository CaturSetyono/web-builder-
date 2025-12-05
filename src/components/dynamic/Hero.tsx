"use client";

import { Button } from "@/components/ui/button";
import { HeroContent } from "@/lib/types";

interface HeroSectionProps {
  content: HeroContent;
}

export function HeroSection({ content }: HeroSectionProps) {
  const backgroundStyle = content.backgroundImage
    ? {
        backgroundImage: `url(${content.backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }
    : { background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)" };

  return (
    <div
      className="relative overflow-hidden"
      style={{ minHeight: "calc(100vh - 4rem)", ...backgroundStyle }}
    >
      {/* Overlay with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/50 to-black/60" />

      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-1/2 -left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6 py-24 md:py-32">
        <div className="max-w-5xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight tracking-tight">
            {content.title}
          </h1>
          {content.subtitle && (
            <p className="text-xl md:text-3xl text-white/95 font-light max-w-3xl mx-auto leading-relaxed">
              {content.subtitle}
            </p>
          )}
          {content.description && (
            <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
              {content.description}
            </p>
          )}
          {content.cta && (
            <div className="pt-4">
              <Button
                size="lg"
                variant={content.cta.variant || "primary"}
                className="bg-white text-gray-900 hover:bg-white/90 text-lg px-8 py-6 h-auto font-semibold shadow-2xl hover:shadow-white/20 transition-all duration-300 hover:scale-105"
                asChild
              >
                <a href={content.cta.href}>{content.cta.text}</a>
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
