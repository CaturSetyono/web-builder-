// Konfigurasi utama
export interface SiteConfig {
  site: {
    title: string;
    description?: string;
    favicon?: string;
  };
  theme?: {
    primary?: string;
    secondary?: string;
    background?: string;
    text?: string;
    mode?: "light" | "dark";
  };
  navigation?: Array<{
    label: string;
    path: string;
  }>;
  pages: Array<{
    path: string; // '/' atau '/section'
    type: string; // 'hero', 'grid', 'cards', 'status', 'markdown'
    content:
      | HeroContent
      | GridContent
      | CardContent
      | StatusContent
      | MarkdownContent;
    metadata?: {
      title?: string;
      description?: string;
    };
  }>;
}

// Type untuk Hero section
export interface HeroContent {
  title: string;
  subtitle?: string;
  description?: string;
  cta?: {
    text: string;
    href: string;
    variant?: "primary" | "secondary" | "outline";
  };
  backgroundImage?: string;
}

// Type untuk Grid section
export interface GridContent {
  title?: string;
  subtitle?: string;
  columns?: number; // 1-4
  items: Array<{
    title: string;
    description?: string;
    icon?: string; // Lucide icon name atau URL
    link?: string;
    status?: "healthy" | "degraded" | "down";
  }>;
}

// Type untuk Card section
export interface CardContent {
  title?: string;
  subtitle?: string;
  cards: Array<{
    title: string;
    description?: string;
    image?: string;
    link?: string;
    tags?: string[];
  }>;
}

// Type untuk Status section
export interface StatusContent {
  title?: string;
  services: Array<{
    name: string;
    status: "healthy" | "degraded" | "down";
    uptime?: string;
    message?: string;
  }>;
}

// Type untuk Markdown section
export interface MarkdownContent {
  title?: string;
  content: string;
}

// Type untuk Feature section (alternating layout)
export interface FeatureContent {
  title?: string;
  subtitle?: string;
  features: Array<{
    title: string;
    description: string;
    image?: string;
    icon?: string;
    reverse?: boolean;
    badge?: string;
  }>;
}

// Type untuk Testimonial section
export interface TestimonialContent {
  title?: string;
  subtitle?: string;
  testimonials: Array<{
    name: string;
    role: string;
    company?: string;
    content: string;
    avatar?: string;
    rating?: number;
  }>;
}

// Type untuk CTA (Call to Action) section
export interface CTAContent {
  title: string;
  description?: string;
  buttons?: Array<{
    text: string;
    href: string;
    variant?: "primary" | "secondary" | "outline";
  }>;
  backgroundImage?: string;
  backgroundStyle?: "gradient" | "solid" | "image";
}

// Type untuk Pricing section
export interface PricingContent {
  title?: string;
  subtitle?: string;
  plans: Array<{
    name: string;
    price: string;
    period?: string;
    description?: string;
    features: string[];
    highlighted?: boolean;
    buttonText?: string;
    buttonHref?: string;
  }>;
}

// Type untuk Stats/Metrics section
export interface StatsContent {
  title?: string;
  subtitle?: string;
  stats: Array<{
    value: string;
    label: string;
    icon?: string;
    description?: string;
  }>;
  layout?: "grid" | "inline";
}

// Type untuk Timeline section
export interface TimelineContent {
  title?: string;
  subtitle?: string;
  items: Array<{
    title: string;
    date?: string;
    description: string;
    icon?: string;
    image?: string;
  }>;
}

// Type untuk Team section
export interface TeamContent {
  title?: string;
  subtitle?: string;
  members: Array<{
    name: string;
    role: string;
    bio?: string;
    avatar?: string;
    social?: {
      twitter?: string;
      linkedin?: string;
      github?: string;
      email?: string;
    };
  }>;
}
