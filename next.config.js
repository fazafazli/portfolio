/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '3000',
        pathname: '/api/media/**',
      },
      {
        protocol: 'https',
        hostname: 'dspuxcs.storage.supabase.co',
        pathname: '/storage/v1/s3/**',
      },

    ],
  },
};

module.exports = nextConfig;