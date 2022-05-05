const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const nextConfig = {
  reactStrictMode: true,
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Important: return the modified config
    return config
  },
  future: {
    webpack5: true,
  },
}

module.exports = nextConfig
