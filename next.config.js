/** @type {import('next').NextConfig} */
const isPages = process.env.GITHUB_PAGES === 'true'
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''

const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  ...(isPages
    ? {
        output: 'export',
        trailingSlash: true,
        basePath,
        assetPrefix: basePath || undefined,
      }
    : {}),
}

module.exports = nextConfig
