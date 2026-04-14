/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/haven-properties',
  assetPrefix: '/haven-properties/',
  typescript: { ignoreBuildErrors: true },
  eslint: { ignoreDuringBuilds: true },
  images: { unoptimized: true },
}
export default nextConfig
