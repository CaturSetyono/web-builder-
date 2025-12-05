"use client";

import { Card, CardContent } from "@/components/ui/card";
import { TestimonialContent } from "@/lib/types";
import Image from "next/image";
import { Star, Quote } from "lucide-react";

interface TestimonialSectionProps {
  content: TestimonialContent;
}

export function TestimonialSection({ content }: TestimonialSectionProps) {
  return (
    <div className="mb-20 py-16 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 -mx-4 px-4">
      <div className="container mx-auto">
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

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {content.testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="relative overflow-hidden hover:shadow-2xl transition-shadow duration-300"
            >
              <CardContent className="p-8">
                <Quote className="w-10 h-10 text-blue-600 dark:text-blue-400 mb-4 opacity-50" />

                <p className="text-gray-700 dark:text-gray-300 mb-6 italic leading-relaxed">
                  &quot;{testimonial.content}&quot;
                </p>

                {testimonial.rating && (
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < testimonial.rating!
                            ? "text-yellow-400 fill-yellow-400"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                )}

                <div className="flex items-center gap-4">
                  {testimonial.avatar ? (
                    <div className="relative w-12 h-12 rounded-full overflow-hidden">
                      <Image
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ) : (
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white font-bold">
                      {testimonial.name.charAt(0)}
                    </div>
                  )}
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {testimonial.role}
                      {testimonial.company && ` at ${testimonial.company}`}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
