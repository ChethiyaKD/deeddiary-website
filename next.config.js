/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/deeddiary-website',
  assetPrefix: '/deeddiary-website',
}

module.exports = nextConfig 