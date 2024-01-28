/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverComponentsExternalPackages: ["puppeteer-core"],
  },
  images: {
    domains: ["se-img.dcd-production.i.geniussports.com"],
  },
};

export default nextConfig;
