/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "storage.googleapis.com",
        pathname: "/**", // Match all paths under this hostname
      },
      {
        protocol: "https",
        hostname: "via.placeholder.com", // Corrected: Removed protocol
        pathname: "/**", // Match all paths under this hostname
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com", // Corrected: Removed protocol
        pathname: "/**", // Match all paths under this hostname
      },
    ],
  },
  eslint: {
    ignoreDuringBuilds: true, // Suppresses ESLint errors during the build
  },
};

export default nextConfig;
