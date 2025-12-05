"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CardContent as CardContentType } from "@/lib/types";
import Image from "next/image";

interface CardSectionProps {
  content: CardContentType;
}

export function CardSection({ content }: CardSectionProps) {
  return (
    <div className="mb-12">
      {(content.title || content.subtitle) && (
        <div className="text-center mb-8">
          {content.title && (
            <h2 className="text-3xl font-bold mb-2">{content.title}</h2>
          )}
          {content.subtitle && (
            <p className="text-gray-600 dark:text-gray-400">
              {content.subtitle}
            </p>
          )}
        </div>
      )}

      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {content.cards.map((card, index) => (
          <Card
            key={index}
            className="hover:shadow-lg transition-shadow overflow-hidden"
          >
            {card.image && (
              <div className="relative h-48 w-full">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover"
                />
              </div>
            )}
            <CardHeader>
              <CardTitle>{card.title}</CardTitle>
            </CardHeader>
            <CardContent>
              {card.description && (
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {card.description}
                </p>
              )}
              {card.tags && card.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-4">
                  {card.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="default">
                      {tag}
                    </Badge>
                  ))}
                </div>
              )}
              {card.link && (
                <a
                  href={card.link}
                  className="text-primary hover:underline inline-block"
                >
                  Learn More →
                </a>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
