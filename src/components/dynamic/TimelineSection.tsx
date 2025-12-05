"use client";

import { TimelineContent } from "@/lib/types";
import Image from "next/image";
import { Circle } from "lucide-react";

interface TimelineSectionProps {
  content: TimelineContent;
}

export function TimelineSection({ content }: TimelineSectionProps) {
  return (
    <div className="mb-20">
      {(content.title || content.subtitle) && (
        <div className="text-center mb-16">
          {content.title && (
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              {content.title}
            </h2>
          )}
          {content.subtitle && (
            <p className="text-xl text-gray-600 dark:text-gray-400">
              {content.subtitle}
            </p>
          )}
        </div>
      )}

      <div className="max-w-4xl mx-auto">
        {content.items.map((item, index) => (
          <div key={index} className="relative pb-12 last:pb-0">
            {/* Vertical Line */}
            {index < content.items.length - 1 && (
              <div className="absolute left-6 top-12 bottom-0 w-0.5 bg-blue-200 dark:bg-blue-800" />
            )}

            <div className="flex gap-6 items-start">
              {/* Icon/Circle */}
              <div className="relative z-10 flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-blue-600 dark:bg-blue-500 flex items-center justify-center shadow-lg">
                  <Circle className="w-6 h-6 text-white fill-white" />
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 pt-1">
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300">
                  {item.date && (
                    <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">
                      {item.date}
                    </span>
                  )}
                  <h3 className="text-2xl font-bold mt-2 mb-3">{item.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {item.description}
                  </p>
                  {item.image && (
                    <div className="relative h-48 mt-4 rounded-lg overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
