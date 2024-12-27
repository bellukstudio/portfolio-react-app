/** @type {import('next').NextConfig} */
const nextConfig = {
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
};

export default nextConfig;
