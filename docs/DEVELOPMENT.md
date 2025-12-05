# 🛠️ Development Guide

## Project Overview

This is a **configuration-driven Next.js template** yang memungkinkan pembuatan single-page websites hanya dengan mengubah file `config.yaml` atau `config.json`.

## Architecture

### Component Hierarchy

```
App Root
├── ThemeProvider (Dark mode management)
├── Navbar (Dynamic navigation dari config)
└── Main Content
    ├── Hero Section (optional)
    ├── Dynamic Sections (dari config.pages)
    └── Footer (optional)
```

### Data Flow

```
config.yaml
    ↓
loadSiteConfig() [lib/config.ts]
    ↓
Server Component [app/page.tsx]
    ↓
Component Mapping
    ↓
Dynamic Section Rendering
```

## Key Files Explained

### `src/lib/config.ts`

- **Purpose**: Load dan parse configuration files
- **Features**:
  - YAML parsing dengan js-yaml
  - Fallback ke JSON
  - Default configuration
  - File watching (development mode)

### `src/lib/types.ts`

- **Purpose**: TypeScript type definitions
- **Contains**:
  - SiteConfig interface (main config structure)
  - Content interfaces untuk setiap section type
  - Navigation types

### `src/app/page.tsx`

- **Purpose**: Main page renderer
- **Logic**:
  1. Load config dengan `loadSiteConfig()`
  2. Find home page (`path: '/'`)
  3. Map section types ke components
  4. Render all sections sequentially

### Component Architecture

#### Dynamic Components (`src/components/dynamic/`)

Setiap dynamic component menerima `content` prop dengan type-specific interface:

```typescript
interface HeroSectionProps {
  content: HeroContent;
}

export function HeroSection({ content }: HeroSectionProps) {
  // Component implementation
}
```

**Available Components:**

1. **Hero** - Full-width header dengan CTA
2. **GridSection** - Grid layout untuk services/features
3. **CardSection** - Card-based layout dengan images
4. **StatusSection** - System status monitoring
5. **MarkdownSection** - Raw HTML/Markdown content

#### UI Components (`src/components/ui/`)

Reusable UI primitives:

- **Button**: Multi-variant button dengan asChild support
- **Card**: Container dengan header/content sections
- **Badge**: Status indicators
- **Navbar**: Responsive navigation
- **ThemeProvider**: Dark mode wrapper

## Adding New Section Types

### Step 1: Define Type Interface

```typescript
// src/lib/types.ts
export interface YourNewContent {
  title: string;
  // ... other fields
}
```

### Step 2: Create Component

```typescript
// src/components/dynamic/YourSection.tsx
"use client";

import { YourNewContent } from "@/lib/types";

interface YourSectionProps {
  content: YourNewContent;
}

export function YourSection({ content }: YourSectionProps) {
  return (
    <div className="mb-12">
      <h2>{content.title}</h2>
      {/* Your component JSX */}
    </div>
  );
}
```

### Step 3: Register in Component Map

```typescript
// src/app/page.tsx
import { YourSection } from "@/components/dynamic/YourSection";

const COMPONENT_MAP = {
  hero: HeroSection,
  grid: GridSection,
  yournew: YourSection, // Add here
  // ...
};
```

### Step 4: Use in Config

```yaml
pages:
  - path: "/your-section"
    type: "yournew"
    content:
      title: "Your Title"
      # ... your content
```

## Styling Guide

### Tailwind Classes

Project menggunakan **Tailwind CSS v4** dengan custom color system:

```css
/* Available CSS Variables */
--background
--foreground
--primary
--secondary
--muted
--accent
--destructive
--border
```

### Using Custom Colors

```tsx
// In your component
<div className="bg-primary text-primary-foreground">
  Content
</div>

<Badge variant="destructive">Error</Badge>
```

### Responsive Design Pattern

```tsx
// Mobile-first approach
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
  {/* Items */}
</div>
```

## Configuration Patterns

### Basic Page Structure

```yaml
pages:
  - path: "/" # Root path (required)
    type: "hero" # Component type
    content: # Type-specific content
      title: "Welcome"
```

### Multiple Sections

```yaml
pages:
  - path: "/"
    type: "hero"
    content: { ... }

  - path: "/services" # Will render as #services section
    type: "grid"
    content: { ... }

  - path: "/status"
    type: "status"
    content: { ... }
```

### Navigation Links

```yaml
navigation:
  - label: "Home"
    path: "/" # Full page

  - label: "Services"
    path: "#services" # Anchor link (smooth scroll)
```

## Environment Variables

Create `.env.local` for custom settings:

```env
# Custom config file path
CONFIG_FILE=custom-config.yaml

# Force theme mode
THEME_MODE=dark

# Node environment
NODE_ENV=development
```

## Development Workflow

### 1. Local Development

```bash
npm run dev
```

- Server runs on http://localhost:3000
- Hot reload enabled
- Config file watching active

### 2. Making Changes

1. Edit `config.yaml`
2. Save file
3. Browser auto-refreshes
4. Check console for errors

### 3. Adding New Components

1. Create component file
2. Add to COMPONENT_MAP
3. Define TypeScript types
4. Test with config

### 4. Testing

```bash
# Type checking
npm run build

# Lint check
npm run lint

# Fix lint issues
npm run lint -- --fix
```

## Common Tasks

### Change Primary Color

```yaml
# config.yaml
theme:
  primary: "#ff6b6b" # Your hex color
```

### Add New Navigation Item

```yaml
navigation:
  - label: "New Page"
    path: "#new-page"
```

### Create New Section

```yaml
pages:
  - path: "/new-section"
    type: "grid" # Use existing type
    content:
      title: "New Section"
      items: [...]
```

### Enable Dark Mode by Default

```yaml
theme:
  mode: "dark"
```

## Troubleshooting

### Issue: Config not loading

**Solution**:

1. Check file exists: `config.yaml` or `config.json`
2. Verify YAML syntax (use YAML linter)
3. Check console for error messages

### Issue: Section not rendering

**Solution**:

1. Verify `type` in config matches COMPONENT_MAP
2. Check TypeScript types match content structure
3. Look for console errors

### Issue: Styles not applying

**Solution**:

1. Restart dev server (`Ctrl+C`, then `npm run dev`)
2. Check Tailwind classes are correct
3. Verify CSS variables in globals.css

### Issue: TypeScript errors

**Solution**:

1. Run `npm run build` to see all errors
2. Check interface definitions in `lib/types.ts`
3. Ensure content types match component props

## Performance Optimization

### Image Optimization

```tsx
import Image from "next/image";

<Image
  src="/image.jpg"
  alt="Description"
  width={500}
  height={300}
  priority // For above-fold images
/>;
```

### Code Splitting

Components automatically code-split with Next.js App Router. No additional configuration needed.

### Server vs Client Components

- **Server Components** (default): Static content, data fetching
- **Client Components** (`'use client'`): Interactive elements, event handlers

```tsx
// Server Component (default)
export default async function Page() {
  const data = await fetchData();
  return <div>{data}</div>;
}

// Client Component (interactive)
("use client");
export function InteractiveButton() {
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount(count + 1)}>{count}</button>;
}
```

## Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Other Platforms

```bash
# Build
npm run build

# Start production server
npm run start
```

Files needed:

- `package.json`
- `next.config.ts`
- `config.yaml` or `config.json`
- All `src/` files

## Best Practices

1. **Always validate config YAML syntax** before deploying
2. **Use TypeScript types** for all new components
3. **Test responsive design** on mobile, tablet, desktop
4. **Optimize images** - use WebP format, appropriate sizes
5. **Keep sections modular** - one concern per component
6. **Use semantic HTML** - proper heading hierarchy
7. **Add aria-labels** for accessibility
8. **Test dark mode** - ensure all colors work in both themes

## Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS v4](https://tailwindcss.com/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Lucide Icons](https://lucide.dev/)
- [YAML Syntax](https://yaml.org/spec/1.2.2/)

---

Happy coding! 🚀
