# Section Types Reference

This template now supports **12 different section types** that can be used to build modern, dynamic websites. Each section is fully customizable via `config.yaml`.

## Overview

The template is designed to be flexible and work for various website types:

- 🎨 **Portfolio Sites** - Showcase your work with hero, features, and timeline
- 🚀 **SaaS Landing Pages** - Convert visitors with pricing, testimonials, and CTAs
- 📚 **Documentation Sites** - Present information with cards, markdown, and grids
- 💼 **Business Sites** - Build trust with team, stats, and feature sections
- 🛠️ **Developer Portals** - Display services, status, and technical content

## Section Types

### 1. Hero (`type: hero`)

**Purpose:** Main landing section with title, subtitle, and call-to-action

**Features:**

- Large, eye-catching headline
- Background image support
- Primary CTA button
- Responsive design

**Example:**

```yaml
- path: "/"
  type: "hero"
  content:
    title: "Welcome to Our Platform"
    subtitle: "Build amazing things"
    description: "Detailed description text"
    backgroundImage: "https://example.com/image.jpg"
    cta:
      text: "Get Started"
      href: "/signup"
      variant: "primary"
```

---

### 2. Features (`type: features`)

**Purpose:** Showcase product features with alternating image/text layout

**Features:**

- Alternating left/right layout
- Icon support with Lucide icons
- Image display with hover effects
- Badge/tag support
- Gradient text effects

**Example:**

```yaml
- path: "/features"
  type: "features"
  content:
    title: "Powerful Features"
    subtitle: "Everything you need"
    features:
      - title: "Lightning Fast"
        description: "Optimized performance"
        icon: "zap"
        image: "https://example.com/fast.jpg"
        badge: "New"

      - title: "Secure"
        description: "Enterprise security"
        icon: "shield"
        image: "https://example.com/secure.jpg"
```

**Visual Style:** Modern with large spacing, transforms, and gradient accents

---

### 3. Grid (`type: grid`)

**Purpose:** Display multiple items in a responsive grid layout

**Features:**

- Customizable columns (1-4)
- Icon support
- Status indicators
- Link support
- Card-based design

**Example:**

```yaml
- path: "/services"
  type: "grid"
  content:
    title: "Our Services"
    subtitle: "What we offer"
    columns: 3
    items:
      - title: "Service One"
        description: "Description text"
        icon: "package"
        status: "healthy"
        link: "/service-1"
```

---

### 4. Cards (`type: cards`)

**Purpose:** Highlight key content in card format

**Features:**

- Flexible layout (grid or list)
- Icon support
- Metadata display
- Shadow effects
- Dark mode support

**Example:**

```yaml
- path: "/highlights"
  type: "cards"
  content:
    title: "Featured Content"
    layout: "grid"
    cards:
      - title: "Card Title"
        description: "Card description"
        icon: "star"
        metadata:
          - label: "Author"
            value: "John Doe"
```

---

### 5. Testimonials (`type: testimonials`)

**Purpose:** Display customer testimonials and reviews

**Features:**

- Avatar display
- Star ratings
- Role and name
- Quote styling
- Grid layout (1-3 columns)

**Example:**

```yaml
- path: "/testimonials"
  type: "testimonials"
  content:
    title: "What Our Users Say"
    subtitle: "Trusted by teams worldwide"
    testimonials:
      - name: "Sarah Johnson"
        role: "CTO at TechCorp"
        avatar: "https://i.pravatar.cc/150?img=1"
        content: "Amazing platform!"
        rating: 5
```

**Visual Style:** Cards with shadow, rounded corners, and star ratings

---

### 6. Pricing (`type: pricing`)

**Purpose:** Display pricing plans and tiers

**Features:**

- Multiple plan display
- Highlighted/featured plan option
- Feature list with checkmarks
- CTA button per plan
- Period display (monthly/yearly)
- Responsive grid (1-3 columns)

**Example:**

```yaml
- path: "/pricing"
  type: "pricing"
  content:
    title: "Simple Pricing"
    subtitle: "Choose your plan"
    plans:
      - name: "Starter"
        price: "$0"
        period: "/month"
        description: "For small teams"
        features:
          - "Up to 5 users"
          - "Basic support"
        cta:
          text: "Get Started"
          href: "/signup"

      - name: "Pro"
        price: "$49"
        period: "/month"
        description: "For growing teams"
        highlighted: true
        features:
          - "Up to 50 users"
          - "Priority support"
          - "Advanced features"
        cta:
          text: "Start Trial"
          href: "/trial"
```

**Visual Style:** Cards with border accents, highlighted plans have gradient borders

---

### 7. CTA (Call-to-Action) (`type: cta`)

**Purpose:** Strong call-to-action section to drive conversions

**Features:**

- Multiple CTA buttons
- Background options (gradient/image/solid)
- Large, prominent text
- Overlay effects
- Responsive spacing

**Example:**

```yaml
- path: "/cta"
  type: "cta"
  content:
    title: "Ready to Get Started?"
    subtitle: "Join thousands of happy users"
    backgroundType: "gradient"
    backgroundImage: "https://example.com/bg.jpg"
    ctas:
      - text: "Start Free Trial"
        href: "/trial"
        variant: "primary"
      - text: "Learn More"
        href: "/about"
        variant: "secondary"
```

**Visual Style:** Hero-sized with bold gradients and prominent buttons

---

### 8. Stats (`type: stats`)

**Purpose:** Display key metrics and statistics

**Features:**

- Large number display
- Icon support
- Gradient background option
- Inline or grid layout
- Hover animations

**Example:**

```yaml
- path: "/stats"
  type: "stats"
  content:
    title: "By the Numbers"
    layout: "grid"
    background: "gradient"
    stats:
      - label: "Active Users"
        value: "50K+"
        icon: "users"

      - label: "Services"
        value: "1M+"
        icon: "package"
```

**Visual Style:** Bold numbers with gradient backgrounds and smooth hover effects

---

### 9. Timeline (`type: timeline`)

**Purpose:** Display chronological events or milestones

**Features:**

- Vertical timeline design
- Date display
- Image support
- Connected line visual
- Card-based items

**Example:**

```yaml
- path: "/timeline"
  type: "timeline"
  content:
    title: "Our Journey"
    subtitle: "The story so far"
    items:
      - date: "2024-01"
        title: "Launch"
        description: "Released version 1.0"
        image: "https://example.com/launch.jpg"

      - date: "2024-06"
        title: "Growth"
        description: "Reached 10K users"
```

**Visual Style:** Vertical line with alternating cards, images, and dates

---

### 10. Team (`type: team`)

**Purpose:** Showcase team members

**Features:**

- Avatar display
- Role and bio
- Social media links (Twitter, LinkedIn, GitHub)
- Responsive grid (1-4 columns)
- Hover effects

**Example:**

```yaml
- path: "/team"
  type: "team"
  content:
    title: "Meet Our Team"
    subtitle: "The people behind the product"
    columns: 3
    members:
      - name: "Alex Turner"
        role: "CEO"
        avatar: "https://i.pravatar.cc/150?img=10"
        bio: "10+ years in tech"
        social:
          - platform: "twitter"
            url: "https://twitter.com/alex"
          - platform: "linkedin"
            url: "https://linkedin.com/in/alex"
          - platform: "github"
            url: "https://github.com/alex"
```

**Visual Style:** Clean cards with avatars, hover effects on social icons

---

### 11. Status (`type: status`)

**Purpose:** Display system/service status

**Features:**

- Status indicators (healthy/degraded/down)
- Uptime display
- Optional messages
- Real-time updates (via config)

**Example:**

```yaml
- path: "/status"
  type: "status"
  content:
    title: "System Status"
    services:
      - name: "API"
        status: "healthy"
        uptime: "99.99%"

      - name: "Database"
        status: "degraded"
        uptime: "98.5%"
        message: "Higher latency"
```

---

### 12. Markdown (`type: markdown`)

**Purpose:** Render markdown content for documentation/articles

**Features:**

- Full markdown support
- Syntax highlighting (if configured)
- Responsive text
- Typography styles

**Example:**

```yaml
- path: "/docs"
  type: "markdown"
  content:
    markdown: |
      # Documentation

      This is **bold** and this is *italic*.

      - List item 1
      - List item 2
```

---

## Usage Tips

### Multi-Section Pages

You can combine multiple sections on a single page:

```yaml
pages:
  - path: "/"
    type: "hero"
    content:
      title: "Welcome"
      # ... hero content

  - path: "/features"
    type: "features"
    content:
      title: "Features"
      # ... features content

  - path: "/pricing"
    type: "pricing"
    content:
      title: "Pricing"
      # ... pricing content
```

All sections will render on the main page with anchor links based on their path.

### Theme Consistency

All sections respect the theme settings in `config.yaml`:

```yaml
theme:
  primary: "#6366f1"
  secondary: "#8b5cf6"
  mode: "light"
```

### Responsive Design

All sections are mobile-responsive and adapt to different screen sizes:

- Mobile: Single column layouts
- Tablet: 2-column grids
- Desktop: Up to 4-column grids (depending on section type)

### Dark Mode

Every section supports dark mode with appropriate color schemes that automatically switch based on user preference.

## Best Practices

1. **Hero First:** Start with a hero section for immediate impact
2. **Mix Types:** Combine different section types for variety
3. **Clear Hierarchy:** Use titles and subtitles consistently
4. **CTAs:** Include clear calls-to-action throughout
5. **Visual Balance:** Mix text-heavy and visual sections
6. **Mobile-First:** Always preview on mobile devices
7. **Performance:** Optimize images before use
8. **Accessibility:** Provide alt text and meaningful link text

## Examples by Website Type

### Portfolio Site

```
hero → features → timeline → team → cta
```

### SaaS Landing Page

```
hero → features → pricing → testimonials → stats → cta
```

### Documentation Site

```
hero → grid → cards → markdown → status
```

### Business Site

```
hero → features → team → testimonials → pricing → cta
```

---

**Need Help?** Check `config.yaml.example` for complete examples of each section type.
