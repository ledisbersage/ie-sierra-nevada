/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: {},
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
