import { promises as fs } from "fs";
import { join } from "path";
import yaml from "js-yaml";
import { SiteConfig } from "./types";

const DEFAULT_CONFIG: SiteConfig = {
  site: {
    title: "Configuration Required",
    description: "Please create a config.yaml file to get started",
  },
  pages: [],
};

export async function loadSiteConfig(): Promise<SiteConfig> {
  try {
    // Cek config.yaml dulu
    const configPath = join(process.cwd(), "config.yaml");
    const configContent = await fs.readFile(configPath, "utf-8");
    return yaml.load(configContent) as SiteConfig;
  } catch {
    try {
      // Fallback ke config.json
      const jsonPath = join(process.cwd(), "config.json");
      const jsonContent = await fs.readFile(jsonPath, "utf-8");
      return JSON.parse(jsonContent) as SiteConfig;
    } catch {
      console.warn("No config file found, using default configuration");
      return DEFAULT_CONFIG;
    }
  }
}

// Untuk development: watch config changes
export function setupConfigWatcher() {
  if (process.env.NODE_ENV === "development") {
    try {
      // eslint-disable-next-line @typescript-eslint/no-require-imports
      const chokidar = require("chokidar");
      const watcher = chokidar.watch(["config.yaml", "config.json"], {
        cwd: process.cwd(),
        ignoreInitial: true,
      });

      watcher.on("change", () => {
        console.log("Config changed, reloading...");
        // Di development, kita bisa trigger refresh via React context atau event
      });
    } catch {
      console.log("Chokidar not available, skipping config watching");
    }
  }
}
