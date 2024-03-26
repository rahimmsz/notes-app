// const { merge } = require("webpack-merge");
// const common = require("./webpack.common.js");

// module.exports = merge(common, {
//   mode: "production",
//   module: {
//     rules: [
//       {
//         test: /\.js$/,
//         use: [
//           {
//             loader: "babel-loader",
//             exclude: /(node_modules|bower_components)/,
//             options: {
//               presets: ["@babel/preset-env"],
//             },
//           },
//         ],
//         exclude: /node_modules/,
//       },
//     ],
//   },
// });

const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "production",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/, // Exclude here
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env"],
            },
          },
        ],
      },
    ],
  },
});
