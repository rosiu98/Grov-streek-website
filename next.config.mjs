/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverComponentsExternalPackages: ["puppeteer-core"],
  },
  images: {
    domains: [
      "se-img.dcd-production.i.geniussports.com",
      "images.statsengine.playbyplay.api.geniussports.com",
      "scontent-waw1-1.xx.fbcdn.net",
      "scontent-waw2-1.xx.fbcdn.net",
      "scontent-waw2-2.xx.fbcdn.net",
      "scontent*",
    ],
  },
};

export default nextConfig;
