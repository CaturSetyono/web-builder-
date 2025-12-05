"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PricingContent } from "@/lib/types";
import { Check } from "lucide-react";

interface PricingSectionProps {
  content: PricingContent;
}

export function PricingSection({ content }: PricingSectionProps) {
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

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {content.plans.map((plan, index) => (
          <Card
            key={index}
            className={`relative overflow-hidden hover:shadow-2xl transition-all duration-300 ${
              plan.highlighted
                ? "border-4 border-blue-600 dark:border-blue-400 scale-105"
                : ""
            }`}
          >
            {plan.highlighted && (
              <div className="absolute top-0 right-0 bg-blue-600 text-white px-4 py-1 text-sm font-semibold rounded-bl-lg">
                Popular
              </div>
            )}

            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>

              {plan.description && (
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  {plan.description}
                </p>
              )}

              <div className="mb-6">
                <span className="text-5xl font-bold">{plan.price}</span>
                {plan.period && (
                  <span className="text-gray-600 dark:text-gray-400 ml-2">
                    /{plan.period}
                  </span>
                )}
              </div>

              <Button
                className="w-full mb-6"
                variant={plan.highlighted ? "primary" : "outline"}
                size="lg"
                asChild
              >
                <a href={plan.buttonHref || "#"}>
                  {plan.buttonText || "Get Started"}
                </a>
              </Button>

              <ul className="space-y-3">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 dark:text-gray-300">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
