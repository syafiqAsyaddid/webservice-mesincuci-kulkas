/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  async redirects() {
    return [
      {
        source: '/wilayah/jakarta',
        destination: '/wilayah/jakarta-timur',
        permanent: false,
      },
      {
        source: '/wilayah/tangerang',
        destination: '/wilayah',
        permanent: false,
      },
      {
        source: '/wilayah/bogor',
        destination: '/wilayah',
        permanent: false,
      },
      {
        source: '/estimasi-biaya',
        destination: '/layanan',
        permanent: true,
      },
      {
        source: '/tentang',
        destination: '/tentang-kami',
        permanent: true,
      },
      {
        source: '/layanan/kulkas',
        destination: '/layanan/service-kulkas',
        permanent: true,
      },
      {
        source: '/layanan/mesin-cuci',
        destination: '/layanan/service-mesin-cuci',
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
