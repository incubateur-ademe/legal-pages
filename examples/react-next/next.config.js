/** @type {import('next').NextConfig} */
const config = {
  swcMinify: true,
  webpack: config => {
    config.module.rules.push({
      test: /\.(woff2|webmanifest)$/,
      type: "asset/resource",
    });

    return config;
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = config;
