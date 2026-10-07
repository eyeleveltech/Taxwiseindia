import type { NextConfig } from "next";
import { LEGACY_SERVICE_LINKS } from "./lib/services";

const nextConfig: NextConfig = {
  // the eight original service routes now live inside the seven service pages
  async redirects() {
    return Object.entries(LEGACY_SERVICE_LINKS).map(([from, to]) => ({
      source: `/${from}`,
      destination: to,
      permanent: true,
    }));
  },
};

export default nextConfig;
