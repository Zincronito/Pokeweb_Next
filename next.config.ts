import type { NextConfig } from "next";


const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'raw.githubusercontent.com' },
      { protocol: 'https', hostname: 'm.media-amazon.com' }, 
    ],
  },
};

export default nextConfig;
