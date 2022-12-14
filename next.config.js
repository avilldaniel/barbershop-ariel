/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["d1i3aib8o7oh3l.cloudfront.net"],
  },
  experimental: { images: { allowFutureImage: true } },
};

module.exports = nextConfig;
