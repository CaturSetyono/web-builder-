"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, AlertCircle, XCircle } from "lucide-react";
import { StatusContent } from "@/lib/types";

interface StatusSectionProps {
  content: StatusContent;
}

export function StatusSection({ content }: StatusSectionProps) {
  const getStatusIcon = (status: "healthy" | "degraded" | "down") => {
    switch (status) {
      case "healthy":
        return <CheckCircle2 className="h-5 w-5 text-green-500" />;
      case "degraded":
        return <AlertCircle className="h-5 w-5 text-yellow-500" />;
      case "down":
        return <XCircle className="h-5 w-5 text-red-500" />;
    }
  };

  const getStatusVariant = (status: "healthy" | "degraded" | "down") => {
    switch (status) {
      case "healthy":
        return "success" as const;
      case "degraded":
        return "warning" as const;
      case "down":
        return "destructive" as const;
    }
  };

  return (
    <div className="mb-12">
      {content.title && (
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold">{content.title}</h2>
        </div>
      )}

      <div className="space-y-4">
        {content.services.map((service, index) => (
          <Card key={index}>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {getStatusIcon(service.status)}
                  <CardTitle>{service.name}</CardTitle>
                </div>
                <Badge variant={getStatusVariant(service.status)}>
                  {service.status}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                {service.uptime && (
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    Uptime:{" "}
                    <span className="font-semibold">{service.uptime}</span>
                  </div>
                )}
                {service.message && (
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {service.message}
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
