//webpackage.config.js
const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
function resolve(relatedPath) {
  return path.join(__dirname, relatedPath);
}
module.exports = env => {
  return {
    entry: "./src/index.js",
    output: {
      path: resolve("./dist"),
      filename: "dist.[hash:8].js",
    },
    mode:
      process.env.NODE_ENV === "production"
        ? "production"
        : "development" /**可以更改模式*/,
    devtool: "cheap-module-source-map",
    devServer: {
      /**开发服务器*/ contentBase: path.join(__dirname, "./src/"),
      publicPath: "/",
      host: "127.0.0.1",
      port: 3000,
      compress: true,
      stats: {
        colors: true,
      },
      historyApiFallback: true,
    },
    resolve: {
      /**配置解析*/ extensions: [".wasm", ".mjs", ".js", ".json", ".jsx"],
      alias: {
        // 减少使用别名提高编译速速
        "@pages": path.join(__dirname, "./src/pages"),
        "@router": path.join(__dirname, "./src/router"),
        "@components": path.join(__dirname, "./src/components"),
        "@store": path.join(__dirname, "./src/store"),
      },
    },
    /**配置模块*/
    module: {
      rules: [
        {
          test: /\.jsx?$/, // jsx文件的正则
          exclude: /node_modules/, // 排除 node_modules 文件夹
          use: {
            // loader 是 babel
            loader: "babel-loader",
            options: {
              // babel 转义的配置选项
              babelrc: false,
              presets: [
                // 添加 preset-react
                require.resolve("@babel/preset-react"),
                [require.resolve("@babel/preset-env"), { modules: false }],
              ],
              cacheDirectory: true,
            },
          },
        },
        {
          test: /\.css$/,
          use: ["style-loader", "css-loader"],
        },
        {
          test: /\.scss$/,
          use: ["style-loader", "css-loader", "sass-loader"],
        },
        {
          test: /\.(jpg|png|jpeg|gif)$/,
          loader: "url-loader",
        },
      ],
    },
    plugins: [
      /**插件的配置*/
      /**打包html插件*/
      new CleanWebpackPlugin(),
      new HtmlWebPackPlugin({
        template: "public/index.html",
        filename: "index.html",
        inject: true,
        hash: true /**上线后清缓存用*/,
        minify: {
          removeAttributeQuotes: true /**删除打包后的html的属性引号*/,
          collapseWhitespace: true /**删除空行*/,
        },
      }),
      new CopyWebpackPlugin({
        patterns: [
          {
            from: "./src/static",
            to: "public",
          },
        ],
      }),
    ],
  };
};
