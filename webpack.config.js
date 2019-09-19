/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

const path = require('path')
const CopyPlugin = require('copy-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')

const devMode = process.env.NODE_ENV === 'development'

module.exports = {
  devtool: 'inline-source-map',
  devServer: {
    compress: true,
    port: 9001
  },
  optimization: {
    minimizer: [new OptimizeCSSAssetsPlugin({})]
  },

  entry: {
    background: './src/background/index.ts',
    content: './src/content/index.ts',
    utils: './src/utils/index.ts'
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].bundle.js'
  },

  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },

  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: devMode ? '[name].css' : '[name].[hash].css',
      chunkFilename: devMode ? '[id].css' : '[id].[hash].css',
      ignoreOrder: false
    }),
    new CopyPlugin([
      {
        from: 'src/ui/*.html',
        to: path.resolve(__dirname, 'dist'),
        flatten: true
      },
      {
        from: './manifest.json',
        to: path.resolve(__dirname, 'dist')
      },
      {
        from: './src/css/banner.css',
        to: path.resolve(__dirname, 'dist/css')
      },
      {
        from: path.resolve(__dirname, 'src/_locales/**/*'),
        to: path.resolve(__dirname, 'dist'),
        transformPath (targetPath) {
          return targetPath.replace('src/', '/')
        }
      }
    ])
  ],

  module: {
    rules: [
      { test: /\.tsx?$/, loader: 'ts-loader' },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: devMode,
              reloadAll: true
            }
          },
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: 'img/[name].[ext]'
        }
      }
    ]
  }
}
