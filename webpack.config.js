var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: {
    js: './example/example.jsx',
    css: './rating.css'
  },
  output: {
    path: './example',
    filename: 'example.js',
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /dist|node_modules/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015', 'stage-0'],
        },
      },
      {
        test: /\.css?$/,
        exclude: /dist|node_modules/,
        loader: ExtractTextPlugin.extract("style-loader", "css-loader!postcss-loader")
      },
    ]
  },
  plugins: [
    new ExtractTextPlugin("example.css")
  ],
  postcss: function() {
    return [
      require('postcss-nested')()
    ];
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.css']
  }
};
