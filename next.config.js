/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: {},
  // Allow cross-origin dev requests (e.g. from LAN IPs) to access /_next/* assets.
  // See: https://nextjs.org/docs/app/api-reference/config/next-config-js/allowedDevOrigins
  allowedDevOrigins: [
    "http://localhost:3000",
    "http://192.168.20.34:3000",
  ],
  async headers() {
    return [
      {
        source: "/documentos/:path*",
        headers: [
          { key: "Content-Disposition", value: "inline" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Cache-Control", value: "no-store" },
        ],
      },
    ];
  },
  webpack: (config) => {
    config.watchOptions = {
      ...(config.watchOptions || {}),
      ignored: [
        "**/pagefile.sys",
        "**/hiberfil.sys",
        "**/swapfile.sys",
      ],
    };
    return config;
  },
};

module.exports = nextConfig
