const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const WebpackPWAManifestPlugin = require('webpack-pwa-manifest')
const WorkBox = require('workbox-webpack-plugin')

module.exports = {
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json']
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: [
              ['@babel/plugin-transform-runtime', { regenerator: true }]
            ]
          }
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: './index.html',
      favicon: './public/favicon.ico'
    }),
    new WebpackPWAManifestPlugin({
      name: 'InstaPet :)',
      short_name: 'InstaPet',
      description: 'Found your Beutiful Pet',
      background_color: '#fff',
      theme_color: '#b1a',
      display: 'standalone',
      scope: '/',
      start_url: '/',
      filename: 'site.webmanifest.json',
      icons: [
        {
          src: path.resolve('src/assets/icon-192x192.png'),
          size: '192x192',
          purpose: 'any maskable',
          type: 'image/png'
        },
        {
          src: path.resolve('src/assets/icon-256x256.png'),
          size: '256x256',
          purpose: 'any maskable',
          type: 'image/png'
        },
        {
          src: path.resolve('src/assets/icon-384x384.png'),
          size: '384x384',
          purpose: 'any maskable',
          type: 'image/png'
        },
        {
          src: path.resolve('src/assets/icon-512x512.png'),
          size: '512x512',
          purpose: 'any maskable',
          type: 'image/png'
        }
      ]
    }),
    new WorkBox.GenerateSW({
      runtimeCaching: [
        {
          urlPattern: new RegExp(
            'https://(res.cloudinary.com|images.unsplash.com)'
          ),
          handler: 'CacheFirst',
          options: {
            cacheName: 'images'
          }
        },
        {
          urlPattern: new RegExp('https://instalog-dev.vercel.app/'),
          handler: 'NetworkFirst',
          options: {
            cacheName: 'api'
          }
        }
      ]
    })
  ],
  // Mi configuracion del servidor
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist/')
    },
    compress: true,
    historyApiFallback: true,
    port: 3001,
    open: true
  }
}
