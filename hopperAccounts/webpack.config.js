const path = require('path');

module.exports = {
  mode: 'development',
  entry: './frontend/src/index.js',
  output: {
    path: path.resolve(__dirname, 'frontend/static/frontend'),
    filename: 'main.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      // Add a new rule for CSS files
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  stats: {
    all: true,
  },
};
