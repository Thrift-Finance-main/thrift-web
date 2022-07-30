/** @type {import('next').NextConfig} */
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
    path: '/',
  }
  ,
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.experiments = { ...config.experiments, asyncWebAssembly: true }
    return config
  },
}
