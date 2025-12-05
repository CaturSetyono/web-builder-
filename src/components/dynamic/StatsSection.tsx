"use client";

import { StatsContent } from "@/lib/types";
import { TrendingUp } from "lucide-react";

interface StatsSectionProps {
  content: StatsContent;
}

export function StatsSection({ content }: StatsSectionProps) {
  const layout = content.layout || "grid";

  return (
    <div className="mb-20 py-16 bg-gradient-to-r from-blue-600 to-purple-600 -mx-4 px-4">
      <div className="container mx-auto">
        {(content.title || content.subtitle) && (
          <div className="text-center mb-12">
            {content.title && (
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
                {content.title}
              </h2>
            )}
            {content.subtitle && (
              <p className="text-xl text-white/90">{content.subtitle}</p>
            )}
          </div>
        )}

        <div
          className={
            layout === "inline"
              ? "flex flex-wrap justify-center gap-12"
              : "grid gap-8 md:grid-cols-2 lg:grid-cols-4"
          }
        >
          {content.stats.map((stat, index) => (
            <div
              key={index}
              className="text-center transform hover:scale-110 transition-transform duration-300"
            >
              {stat.icon && (
                <TrendingUp className="w-12 h-12 text-white/80 mx-auto mb-4" />
              )}
              <div className="text-5xl md:text-6xl font-bold text-white mb-2">
                {stat.value}
              </div>
              <div className="text-xl text-white/90 font-semibold mb-2">
                {stat.label}
              </div>
              {stat.description && (
                <p className="text-white/70">{stat.description}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
