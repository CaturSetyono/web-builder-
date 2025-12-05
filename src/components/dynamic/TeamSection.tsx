"use client";

import { Card, CardContent } from "@/components/ui/card";
import { TeamContent } from "@/lib/types";
import Image from "next/image";
import { Twitter, Linkedin, Github, Mail } from "lucide-react";

interface TeamSectionProps {
  content: TeamContent;
}

export function TeamSection({ content }: TeamSectionProps) {
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

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {content.members.map((member, index) => (
          <Card
            key={index}
            className="overflow-hidden hover:shadow-2xl transition-shadow duration-300 group"
          >
            <CardContent className="p-0">
              {/* Avatar */}
              <div className="relative h-64 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900">
                {member.avatar ? (
                  <Image
                    src={member.avatar}
                    alt={member.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-6xl font-bold text-blue-600 dark:text-blue-400">
                      {member.name.charAt(0)}
                    </span>
                  </div>
                )}
              </div>

              {/* Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-blue-600 dark:text-blue-400 font-semibold mb-3">
                  {member.role}
                </p>
                {member.bio && (
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                    {member.bio}
                  </p>
                )}

                {/* Social Links */}
                {member.social && (
                  <div className="flex gap-3">
                    {member.social.twitter && (
                      <a
                        href={member.social.twitter}
                        className="text-gray-600 hover:text-blue-400 dark:text-gray-400 dark:hover:text-blue-400"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Twitter className="w-5 h-5" />
                      </a>
                    )}
                    {member.social.linkedin && (
                      <a
                        href={member.social.linkedin}
                        className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Linkedin className="w-5 h-5" />
                      </a>
                    )}
                    {member.social.github && (
                      <a
                        href={member.social.github}
                        className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                    )}
                    {member.social.email && (
                      <a
                        href={`mailto:${member.social.email}`}
                        className="text-gray-600 hover:text-red-600 dark:text-gray-400 dark:hover:text-red-400"
                      >
                        <Mail className="w-5 h-5" />
                      </a>
                    )}
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
