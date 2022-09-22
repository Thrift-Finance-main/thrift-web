
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
    config.module.rules.push({
      test: /\.pdf$/,
      use: {
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]',
        },
      },
    });

    return config
  }
}
