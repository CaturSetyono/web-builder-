import "./globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/ui/ThemeProvider";
import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/ui/Footer";
import { loadSiteConfig } from "@/lib/config";

const inter = Inter({ subsets: ["latin"] });

export async function generateMetadata() {
  const config = await loadSiteConfig();
  return {
    title: config.site.title,
    description: config.site.description || "Engineering Dashboard",
  };
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const config = await loadSiteConfig();
  const hasNavigation = config.navigation && config.navigation.length > 0;

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="min-h-screen bg-background text-foreground flex flex-col">
            {hasNavigation && <Navbar navigation={config.navigation} />}
            <main
              className={`flex-1 container mx-auto px-4 ${
                hasNavigation ? "py-8" : "py-0"
              }`}
            >
              {children}
            </main>
            <Footer
              siteName={config.site.title}
              description={config.site.description}
              navigation={config.navigation}
            />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
