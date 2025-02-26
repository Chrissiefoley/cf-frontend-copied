// const path = require("path");

// module.exports = {
//   entry: "../../my-app/src/index.js",
//   output: {
//     path: path.resolve(__dirname, "dist"),
//     filename: "bundle.js",
//   },
//   module: {
//     rules: [
//       {
//         test: /\.js$/,
//         exclude: /node_modules/,
//         use: {
//           loader: "babel-loader",
//           options: {
//             presets: ["@babel/preset-env", "@babel/preset-react"],
//           },
//         },
//       },
//     ],
//   },
//   devServer: {
//     contentBase: path.join(__dirname, "dist"),
//     compress: true,
//     port: 3000,
//   },
// };
