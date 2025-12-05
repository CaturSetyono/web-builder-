import { loadSiteConfig } from "@/lib/config";
import { HeroSection } from "@/components/dynamic/Hero";
import { GridSection } from "@/components/dynamic/GridSection";
import { CardSection } from "@/components/dynamic/CardSection";
import { StatusSection } from "@/components/dynamic/StatusSection";
import { MarkdownSection } from "@/components/dynamic/MarkdownSection";
import { FeatureSection } from "@/components/dynamic/FeatureSection";
import { TestimonialSection } from "@/components/dynamic/TestimonialSection";
import { CTASection } from "@/components/dynamic/CTASection";
import { PricingSection } from "@/components/dynamic/PricingSection";
import { StatsSection } from "@/components/dynamic/StatsSection";
import { TimelineSection } from "@/components/dynamic/TimelineSection";
import { TeamSection } from "@/components/dynamic/TeamSection";
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type AllContent = any;

// Component mapping berdasarkan type di config
const COMPONENT_MAP = {
  hero: HeroSection,
  grid: GridSection,
  cards: CardSection,
  status: StatusSection,
  markdown: MarkdownSection,
  features: FeatureSection,
  testimonials: TestimonialSection,
  cta: CTASection,
  pricing: PricingSection,
  stats: StatsSection,
  timeline: TimelineSection,
  team: TeamSection,
};

export default async function HomePage() {
  const config = await loadSiteConfig();

  // Check if configuration exists
  if (!config.pages || config.pages.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-2xl mx-auto px-6 py-12 text-center">
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-blue-100 dark:bg-blue-900 mb-6">
              <svg
                className="w-10 h-10 text-blue-600 dark:text-blue-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Welcome to Your Template
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              This is a configuration-driven Next.js skeleton template.
              <br />
              Get started by creating your{" "}
              <code className="px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded text-sm font-mono">
                config.yaml
              </code>{" "}
              file.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-8 text-left mb-8">
            <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
              Quick Start:
            </h2>
            <ol className="space-y-4 text-gray-700 dark:text-gray-300">
              <li className="flex items-start">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 flex items-center justify-center text-sm font-bold mr-3">
                  1
                </span>
                <span>
                  Create a{" "}
                  <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-700 rounded text-sm font-mono">
                    config.yaml
                  </code>{" "}
                  file in the root directory
                </span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 flex items-center justify-center text-sm font-bold mr-3">
                  2
                </span>
                <span>Define your site structure, navigation, and content</span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 flex items-center justify-center text-sm font-bold mr-3">
                  3
                </span>
                <span>Save the file and watch your site come to life!</span>
              </li>
            </ol>
          </div>

          <div className="bg-gray-900 dark:bg-gray-950 rounded-xl shadow-xl p-6 text-left overflow-x-auto">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-semibold text-gray-400 uppercase">
                config.yaml
              </span>
              <span className="text-xs text-gray-500">
                Example Configuration
              </span>
            </div>
            <pre className="text-sm text-gray-300 font-mono overflow-x-auto">
              {`site:
  title: "My Awesome Site"
  description: "Built with config-driven template"

navigation:
  - label: "Home"
    path: "/"
  - label: "About"
    path: "#about"

pages:
  - path: "/"
    type: "hero"
    content:
      title: "Hello World"
      subtitle: "Welcome to my site"
      cta:
        text: "Get Started"
        href: "#content"`}
            </pre>
          </div>

          <div className="mt-8 text-sm text-gray-600 dark:text-gray-400">
            <p>
              📚 Check the{" "}
              <code className="px-1.5 py-0.5 bg-gray-200 dark:bg-gray-700 rounded font-mono">
                README.md
              </code>{" "}
              for complete documentation
            </p>
          </div>
        </div>
      </div>
    );
  }

  // Cari halaman untuk root path '/'
  const homePage = config.pages.find((page) => page.path === "/");

  if (!homePage) {
    return (
      <div className="min-h-[400px] flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-2">No Home Page Found</h2>
          <p className="text-gray-600 dark:text-gray-400">
            Please add a page with path &quot;/&quot; in your config.yaml
          </p>
        </div>
      </div>
    );
  }

  const Component = COMPONENT_MAP[homePage.type as keyof typeof COMPONENT_MAP];

  if (!Component) {
    return (
      <div className="p-8 bg-gray-100 dark:bg-gray-800 rounded-lg">
        <h3 className="text-lg font-medium mb-2">Unknown Section Type</h3>
        <p>Type: {homePage.type}</p>
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
          Available types: hero, grid, cards, status, markdown, features,
          testimonials, cta, pricing, stats, timeline, team
        </p>
      </div>
    );
  }

  return (
    <div className="w-full">
      <Component content={homePage.content as AllContent} />

      {/* Render semua sections lainnya sebagai bagian dari single page */}
      {config.pages
        .filter((page) => page.path !== "/")
        .map((section, index) => {
          const SectionComponent =
            COMPONENT_MAP[section.type as keyof typeof COMPONENT_MAP];

          if (!SectionComponent) {
            return (
              <div key={index} className="mb-12">
                <div className="p-8 bg-gray-100 dark:bg-gray-800 rounded-lg">
                  <h3 className="text-xl font-bold mb-2">
                    Unknown Section Type
                  </h3>
                  <p>Type: {section.type}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                    Available types: hero, grid, cards, status, markdown,
                    features, testimonials, cta, pricing, stats, timeline, team
                  </p>
                </div>
              </div>
            );
          }

          return (
            <div
              key={index}
              id={section.path.replace("/", "")}
              className="mb-12"
            >
              <SectionComponent content={section.content as AllContent} />
            </div>
          );
        })}
    </div>
  );
}
