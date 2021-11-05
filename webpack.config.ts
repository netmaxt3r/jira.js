import * as path from 'path';
// @ts-ignore
import * as TypescriptDeclarationPlugin from 'typescript-declaration-webpack-plugin';
import { Configuration } from 'webpack';

const config: Configuration = {
  mode: 'development',
  target: 'web',
  entry: './src/index.ts',
  output: {
    chunkFormat: false,
    path: path.resolve(__dirname, 'browser'),
    filename: 'index.js',
    library: {
      name: 'jira',
      type: 'commonjs2',
    },
  },
  resolve: {
    extensions: ['.ts', '.js'],
    fallback: {
      os: require.resolve('os-browserify/browser'),
      buffer: require.resolve('buffer'),
      child_process: false,
      path: false,
      assert: false,
      crypto: false,
      url: false,
      http: false,
      https: false,
      querystring: false,
      stream: false,
      fs: false,
      zlib: false,
      tty: false,
      util: false,
    },
  },
  module: {
    rules: [
      {
        test: /\.ts$/i,
        loader: 'ts-loader',
        exclude: /node_modules/i,
      },
    ],
  },
  plugins: [
    new TypescriptDeclarationPlugin({
      removeComments: false,
    }),
  ],
};

export default config;
