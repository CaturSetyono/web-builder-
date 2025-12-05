# 🚀 Dynamic Next.js Template

A powerful, configuration-driven Next.js template that automatically generates beautiful, modern websites from YAML/JSON configuration files. Build portfolios, SaaS landing pages, documentation sites, and more—all without writing code.

## ✨ Features

- **📝 Configuration-Driven**: Define your entire site structure in `config.yaml` or `config.json`
- **🎨 12 Modern Section Types**: Hero, Features, Grid, Cards, Testimonials, Pricing, CTA, Stats, Timeline, Team, Status, and Markdown
- **💎 Beautiful UI**: Modern gradients, shadows, animations, and hover effects
- **🌓 Dark Mode Support**: Built-in theme provider with system preference detection
- **📱 Fully Responsive**: Mobile-first design that works on all devices (1-4 column grids)
- **⚡ Hot Reload**: Automatic refresh when config files change (development mode)
- **🎯 Type-Safe**: Full TypeScript support with comprehensive type definitions
- **🔧 Customizable Theming**: Custom colors, fonts, and styling through config
- **♿ Accessible**: Semantic HTML and ARIA labels throughout
- **🎭 Multi-Purpose**: Perfect for portfolios, SaaS landing pages, documentation, blogs, and business sites

## 🏗️ Project Structure

```
/templates/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout with dynamic theming
│   │   ├── page.tsx            # Main page renderer
│   │   └── globals.css         # Global styles with CSS variables
│   ├── components/
│   │   ├── dynamic/            # Dynamic section components (12 types)
│   │   │   ├── Hero.tsx
│   │   │   ├── FeatureSection.tsx
│   │   │   ├── GridSection.tsx
│   │   │   ├── CardSection.tsx
│   │   │   ├── TestimonialSection.tsx
│   │   │   ├── PricingSection.tsx
│   │   │   ├── CTASection.tsx
│   │   │   ├── StatsSection.tsx
│   │   │   ├── TimelineSection.tsx
│   │   │   ├── TeamSection.tsx
│   │   │   ├── StatusSection.tsx
│   │   │   └── MarkdownSection.tsx
│   │   └── ui/                 # Base UI components
│   │       ├── Navbar.tsx
│   │       ├── ThemeProvider.tsx
│   │       ├── button.tsx
│   │       ├── card.tsx
│   │       └── badge.tsx
│   └── lib/
│       ├── types.ts            # TypeScript interfaces
│       ├── config.ts           # Config loader & parser
│       └── theme.ts            # Theme manager
├── config.yaml                 # Your site configuration
├── tailwind.config.ts          # Tailwind configuration
└── package.json
```

## 🚀 Quick Start

### 1. Install Dependencies

```bash
npm install
```

### 2. Start Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see your site.

### 3. Customize Configuration

Edit `config.yaml` in the root directory to customize your site. The page will auto-reload when you save changes.

## ⚙️ Configuration Guide

### Basic Structure

```yaml
site:
  title: "Your Site Title"
  description: "Your site description"
  favicon: "/favicon.ico"

theme:
  primary: "#6366f1"
  secondary: "#8b5cf6"
  mode: "light" # or "dark"

navigation:
  - label: "Home"
    path: "/"
  - label: "Services"
    path: "#services"

pages:
  - path: "/"
    type: "hero"
    content:
      # ... section-specific content
```

### Supported Section Types

The template supports **12 different section types** for maximum flexibility:

1. **Hero** - Main landing section with CTA
2. **Features** - Showcase features with images and icons
3. **Testimonials** - Customer reviews with ratings
4. **Pricing** - Pricing plans with feature lists
5. **CTA** - Call-to-action sections
6. **Stats** - Display metrics and numbers
7. **Timeline** - Chronological events
8. **Team** - Team member profiles
9. **Grid** - Multi-column item display
10. **Cards** - Flexible card layouts
11. **Status** - System status dashboard
12. **Markdown** - Rich text content

See **[docs/SECTION_TYPES.md](docs/SECTION_TYPES.md)** for detailed documentation and examples of each section type.

### Quick Examples

#### Hero with Background

```yaml
- path: "/"
  type: "hero"
  content:
    title: "Welcome to My Site"
    subtitle: "Building amazing things"
    backgroundImage: "https://example.com/image.jpg"
    cta:
      text: "Get Started"
      href: "#services"
```

#### Feature Section

```yaml
- path: "/features"
  type: "features"
  content:
    title: "Powerful Features"
    features:
      - title: "Lightning Fast"
        description: "Optimized performance"
        icon: "zap"
        image: "https://example.com/fast.jpg"
```

#### Pricing Plans

```yaml
- path: "/pricing"
  type: "pricing"
  content:
    title: "Simple Pricing"
    plans:
      - name: "Starter"
        price: "$0"
        period: "/month"
        highlighted: true
        features:
          - "Up to 5 users"
          - "Basic support"
        cta:
          text: "Get Started"
          href: "/signup"
```

#### Testimonials

```yaml
- path: "/testimonials"
  type: "testimonials"
  content:
    title: "What Users Say"
    testimonials:
      - name: "Sarah Johnson"
        role: "CTO at TechCorp"
        avatar: "https://i.pravatar.cc/150?img=1"
        content: "Amazing platform!"
        rating: 5
```

## 🎨 Theming

Customize colors in `config.yaml`:

```yaml
theme:
  primary: "#6366f1" # Primary color (HSL or HEX)
  secondary: "#8b5cf6" # Secondary color
  background: "#f9fafb" # Background color
  text: "#1f2937" # Text color
  mode: "light" # "light" or "dark"
```

Or customize CSS variables in `src/app/globals.css`.

## 📦 Building for Production

```bash
# Build the application
npm run build

# Start production server
npm run start
```

## 🔧 Advanced Usage

### Using JSON Instead of YAML

Create `config.json` in the root directory:

```json
{
  "site": {
    "title": "My Site"
  },
  "pages": [...]
}
```

The template automatically falls back to JSON if YAML is not found.

### Custom Components

Add new component types in `src/app/page.tsx`:

```typescript
const COMPONENT_MAP = {
  hero: HeroSection,
  grid: GridSection,
  yourCustomType: YourCustomComponent,
};
```

### Environment Variables

Create `.env.local` for environment-specific configuration:

```env
CONFIG_FILE=custom-config.yaml
```

## 🛠️ Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Theme**: next-themes
- **Icons**: Lucide React
- **Config Parser**: js-yaml

## 📝 Development

### File Watching

In development mode, the template watches `config.yaml` and `config.json` for changes and automatically reloads.

### Type Safety

All configuration is type-checked using TypeScript interfaces defined in `src/lib/types.ts`.

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

MIT License - feel free to use this template for any project!

## 🙏 Acknowledgments

Built with ❤️ using:

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Lucide Icons](https://lucide.dev/)
- [js-yaml](https://github.com/nodeca/js-yaml)

---

**Happy Building! 🚀**
