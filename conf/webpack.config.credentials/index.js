const webpack =　require("webpack");

module.exports = {
  mode: 'development',
  //mode: 'production',
  entry: __dirname + '/../../js/credentials/index.js',
  output: {
      path: __dirname + '/../../dist/credentials/',
      filename: 'index.js'
  },
  module: {
    rules: [
      {
        test: /\.(mjs|js|ts)$/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: [
                "@babel/preset-env",
              ],
            },
          },
        ],
      },
      {
        test: require.resolve("mofron"),
        loader: "expose-loader",
        options: {
          exposes: {
            globalName: "_mofron",
            moduleLocalName: "mofron"
          }
        }
      },
      {
        test: /\.css/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: { url: false }
          }
        ]
      }
    ],
  },
  target: ["web", "es5"]
};
