import path from 'path';
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import {CleanWebpackPlugin} from 'clean-webpack-plugin';
import OptimizeCSSAssetsPlugin from 'optimize-css-assets-webpack-plugin';
import CreateFileWebpack from 'create-file-webpack';
import {version} from './package.json';

const isProd = process.env.npm_lifecycle_event === 'build';
const isDev = process.env.npm_lifecycle_event === 'start';

const plugins = [
  new HtmlWebpackPlugin({
    template: path.resolve(__dirname) + '/index.html',
    filename: 'index.html',
    inject: 'body',
    version
  }),
  new MiniCssExtractPlugin({
    filename: 'assets/[name]_[hash].css',
  }),
  new CleanWebpackPlugin({
    cleanOnceBeforeBuildPatterns: ['**/*', '!static', '!static/**/*', '!favicon.ico'],
  })
];

const webpackConfig = {
  mode: isProd ? 'production' : 'development',
  entry: {
    main: './src/index.js'
  },
  output: {
    filename: '[name]_[hash].js',
    path: path.resolve(__dirname, 'public')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.css$/,
        exclude: [/node_modules/, /src\/style/],
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                context: path.resolve(__dirname, 'src'),
              }
            }
          }
        ],
      },
      {
        test: /\.css$/,
        include: [/node_modules/, /src\/style/],
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader'
        ]
      }
    ]
  },
  plugins,
  resolve: {
    modules: [path.resolve(__dirname, 'src'), 'node_modules']
  },
  optimization: {
    minimizer: [new OptimizeCSSAssetsPlugin({})],
  },
  devServer: {
    public: 'integrity-tool.local.performgroup.com:4000',
    https: true,
    port: 4000
  }
}

if (isDev) {
  webpackConfig.devtool = 'eval-source-map';
  webpackConfig.devServer = {
    contentBase: path.join(__dirname, 'public'),
    public: 'localhost:3001',
    https: true,
    port: 3001
  };
  plugins.push(new CreateFileWebpack({
    path: path.resolve(__dirname, 'public'),
    fileName: 'env.js',
    content: `window.ENV = {
  ENDPOINT_ADDRESS: 'https://integrity-cp.local.performgroup.com',
  ENDPOINT_PREFIX: '/integrity-tool-rest/',
  ENDPOINT_REPORT_ADDRESS: 'https://integrity-dc.local.performgroup.com',
  ENDPOINT_REPORT_PREFIX: 'document',
  PERFORM_FEEDS: 'preprod',
  FEEDS: 'feeds'
};`
  }))
}

export default webpackConfig;
