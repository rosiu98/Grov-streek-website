/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverComponentsExternalPackages: ["puppeteer-core"],
  },
  images: {
    domains: [
      "se-img.dcd-production.i.geniussports.com",
      "scontent-waw1-1.xx.fbcdn.net",
    ],
  },
};

export default nextConfig;
