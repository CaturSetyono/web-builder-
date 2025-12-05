"use client";

import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { FeatureContent } from "@/lib/types";
import { CheckCircle2 } from "lucide-react";

interface FeatureSectionProps {
  content: FeatureContent;
}

export function FeatureSection({ content }: FeatureSectionProps) {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-6">
        {(content.title || content.subtitle) && (
          <div className="text-center mb-20">
            {content.title && (
              <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent leading-tight">
                {content.title}
              </h2>
            )}
            {content.subtitle && (
              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
                {content.subtitle}
              </p>
            )}
          </div>
        )}

        <div className="space-y-32">
          {content.features.map((feature, index) => {
            const isReverse = feature.reverse || index % 2 !== 0;

            return (
              <div
                key={index}
                className={`flex flex-col ${
                  isReverse ? "lg:flex-row-reverse" : "lg:flex-row"
                } gap-16 items-center`}
              >
                {/* Image/Icon Side */}
                <div className="flex-1 relative">
                  {feature.image ? (
                    <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl ring-1 ring-gray-200 dark:ring-gray-700">
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 z-10" />
                      <Image
                        src={feature.image}
                        alt={feature.title}
                        fill
                        className="object-cover transition-transform duration-700 hover:scale-110"
                      />
                    </div>
                  ) : (
                    <div className="flex items-center justify-center h-[400px] bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 rounded-2xl">
                      <CheckCircle2 className="w-32 h-32 text-blue-600 dark:text-blue-400" />
                    </div>
                  )}
                </div>

                {/* Content Side */}
                <div className="flex-1 space-y-6">
                  {feature.badge && (
                    <Badge
                      variant="default"
                      className="inline-block px-4 py-1.5 text-sm font-semibold"
                    >
                      {feature.badge}
                    </Badge>
                  )}
                  <h3 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
                    {feature.title}
                  </h3>
                  <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
