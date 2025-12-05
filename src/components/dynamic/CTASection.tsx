"use client";

import { Button } from "@/components/ui/button";
import { CTAContent } from "@/lib/types";

interface CTASectionProps {
  content: CTAContent;
}

export function CTASection({ content }: CTASectionProps) {
  const getBackgroundStyle = () => {
    if (content.backgroundImage) {
      return {
        backgroundImage: `url(${content.backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      };
    }

    switch (content.backgroundStyle) {
      case "gradient":
        return {
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        };
      case "solid":
        return {
          background: "hsl(var(--primary))",
        };
      default:
        return {
          background: "linear-gradient(to right, #6366f1, #8b5cf6)",
        };
    }
  };

  return (
    <div className="mb-20">
      <div
        className="relative rounded-3xl overflow-hidden shadow-2xl"
        style={getBackgroundStyle()}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40" />

        <div className="relative z-10 px-8 py-20 md:py-32 text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 max-w-4xl mx-auto">
            {content.title}
          </h2>

          {content.description && (
            <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-3xl mx-auto">
              {content.description}
            </p>
          )}

          {content.buttons && content.buttons.length > 0 && (
            <div className="flex flex-wrap gap-4 justify-center">
              {content.buttons.map((button, index) => (
                <Button
                  key={index}
                  size="lg"
                  variant={button.variant || "primary"}
                  className={`text-lg px-8 py-6 ${
                    button.variant === "primary" || !button.variant
                      ? "bg-white text-gray-900 hover:bg-gray-100"
                      : ""
                  }`}
                  asChild
                >
                  <a href={button.href}>{button.text}</a>
                </Button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
