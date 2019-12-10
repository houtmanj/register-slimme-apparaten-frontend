// Important modules this config uses
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const OfflinePlugin = require('offline-plugin');

module.exports = require('./webpack.base.babel')({
  mode: 'production',

  // In production, we skip all hot-reloading stuff
  entry: ['@babel/polyfill', path.join(process.cwd(), 'src/app.js')],

  // Utilize long-term caching by adding content hashes (not compilation hashes) to compiled assets
  output: {
    filename: '[name].[chunkhash].js',
    chunkFilename: '[name].[chunkhash].chunk.js',
  },

  plugins: [
    // Minify and optimize the index.html
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
      },
      inject: true,
    }),

    // Put it in the end to capture all the HtmlWebpackPlugin's
    // assets manipulations and do leak its manipulations to HtmlWebpackPlugin
    new OfflinePlugin({
      relativePaths: false,
      publicPath: '/',

      // No need to cache .htaccess. See http://mxs.is/googmp,
      // this is applied before any match in `caches` section
      excludes: ['.htaccess'],

      caches: {
        main: [':rest:'],

        // All chunks marked as `additional`, loaded after main section
        // and do not prevent SW to install. Change to `optional` if
        // do not want them to be preloaded at all (cached only when first loaded)
        additional: ['*.chunk.js'],
      },

      // Removes warning for about `additional` section usage
      safeToUseOptionalCaches: true,

      AppCache: false,
    }),
  ],

  performance: {
    assetFilter: assetFilename => !/(\.map$)|(^(main\.|favicon\.))/.test(assetFilename),
  },

  optimization: {
    namedModules: true, // NamedModulesPlugin()
    splitChunks: {
      name: 'vendor',
      minChunks: 2,
    },
    noEmitOnErrors: true, // NoEmitOnErrorsPlugin
    concatenateModules: true, // ModuleConcatenationPlugin
  },
});
