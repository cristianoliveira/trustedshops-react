const path = require('path');
const SOURCE_DIR = path.resolve(__dirname, 'src');

module.exports = {
  entry: SOURCE_DIR + '/index.js',
  output: {
    filename: 'mylib-react-ui.min.js',
    library: 'mylib-react-ui',
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.(js|jsx)$/,
        loader: 'eslint-loader',
        include: path.resolve(__dirname, '.'),
      },
      {
        test: /\.(js|jsx)$/,
        include: SOURCE_DIR,
        loader: 'babel-loader'
      },
      {
        test: /\.svg$/,
        exclude: /node_modules/,
        use: [
          'svg-sprite-loader',
          'svgo-loader'
        ]
      },
      {
        test: /\.(jpe|jpg|woff|woff2|eot|ttf)(\?.*$|$)/,
        loader: 'file-loader',
        query: {
          name: 'public/fonts/[name].[hash:8].[ext]'
        }
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              minimize: true,
              sourceMap: true,

            },
          },
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss', // https://webpack.js.org/guides/migrating/#complex-options
              plugins: () => [
                require("postcss-import")({
                  path: SOURCE_DIR
                }),
                require('postcss-cssnext')({
                  "browserslist": [
                    '> 1%',
                    'last 2 versions',
                    'Firefox ESR',
                    'not ie <= 9'
                  ]
                }),
                require('postcss-flexbugs-fixes'),
                require('postcss-mixins'),
                require('postcss-inherit'),
                require('postcss-nested'),
                require('postcss-reporter')
              ],
            },
          },
          {
            loader: 'stylefmt-loader',
            options: {
              config: ".stylelintrc"
            },
          },
        ],
      },
    ],
  },

  plugins: [
    require('stylelint-webpack-plugin')({
      configFile: '.stylelintrc',
      context: 'src',
      files: '**/*.css',
      failOnError: false,
      quiet: false,
    })
  ],
};
