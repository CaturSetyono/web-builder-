"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CircleDot } from "lucide-react";
import { GridContent } from "@/lib/types";

interface GridSectionProps {
  content: GridContent;
}

export function GridSection({ content }: GridSectionProps) {
  const cols = content.columns || 3;
  const colClass =
    cols === 1
      ? "grid-cols-1"
      : cols === 2
      ? "grid-cols-1 md:grid-cols-2"
      : cols === 3
      ? "grid-cols-1 md:grid-cols-3"
      : "grid-cols-1 md:grid-cols-4";

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

      <div className={`grid gap-6 ${colClass}`}>
        {content.items.map((item, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                {item.icon && (
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <CircleDot className="h-5 w-5 text-primary" />
                  </div>
                )}
                <CardTitle>{item.title}</CardTitle>
              </div>
              {item.status && (
                <Badge
                  variant={
                    item.status === "healthy"
                      ? "success"
                      : item.status === "degraded"
                      ? "warning"
                      : "destructive"
                  }
                >
                  {item.status}
                </Badge>
              )}
            </CardHeader>
            <CardContent>
              {item.description && (
                <p className="text-gray-600 dark:text-gray-400">
                  {item.description}
                </p>
              )}
              {item.link && (
                <a
                  href={item.link}
                  className="text-primary hover:underline mt-2 inline-block"
                >
                  View Details →
                </a>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
