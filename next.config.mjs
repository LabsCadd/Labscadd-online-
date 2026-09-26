/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // Allows local network IP access without HMR warning
  },
  allowedDevOrigins: ["localhost:3000", "192.168.*", "192.168.1.104:3000"],
};

export default nextConfig;
