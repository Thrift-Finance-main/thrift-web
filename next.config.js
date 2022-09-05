/** @type {import('next').NextConfig} */
const { i18n } = require('./next-i18next.config')

module.exports = {
  reactStrictMode: true,
  exportTrailingSlash: true,
  // images: {
  //   loader: 'akamai',
  //   path: '/',
  //domains: [
  //  'res.cloudinary.com'
  //],
  // }

  images: {
    loader: 'akamai',
    path: '/',
  },
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.experiments = { ...config.experiments, asyncWebAssembly: true }
    return config
  },
  i18n,
}
