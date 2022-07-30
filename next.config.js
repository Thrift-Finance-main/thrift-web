/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  exportTrailingSlash: true,
  images: {

    domains: [
      'res.cloudinary.com','/'
    ],
   }
  ,
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.experiments = { ...config.experiments, asyncWebAssembly: true }
    return config
  },
}
