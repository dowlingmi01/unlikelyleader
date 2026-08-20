/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: false,
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  async redirects() {
    return [
      {
        source: '/collective-rise',
        destination: '/workshops',
        permanent: true,
      },
      {
        source: '/learn-more',
        destination: '/book',
        permanent: true,
      },
      {
        source: '/archetypes/rational-bridge',
        destination: '/archetypes/relational-bridge',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
