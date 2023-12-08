const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ProvidePlugin } = require("webpack");
const { env } = require("process");
const {BundleAnalyzerPlugin} = require("webpack-bundle-analyzer");

/** @type {import('webpack').Configuration} */
module.exports = {
  entry: "./src/index.tsx", //entry부터 시작해서 확장자가 ts/js인 파일들을 번들링
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
    alias: {
      "@": __dirname + "/src",
    },
  },
  // 모듈 해석기
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "esbuild-loader",
        options: {
          target: "es2020",
        },
      },
      {
        test: /\.(gif|jpg|png|webp|svg|mp4)$/,
        type: "asset/resource",
      }
    ],
  },
  // 번들링이 완료된 결과물에 대한 설정(출력)
  output : {
    filename: "js/[name]-[chunkhash].js",
    assetModuleFilename: "asset/[hash][ext][query]",
    path: __dirname + "/dist",  // 결과물들의 위치
    clean: true, 
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
    new ProvidePlugin({
      React: "react",
    }),
    
    //  // 번들 분석기
    //  !env.WEBPACK_SERVE
    //  ? new BundleAnalyzerPlugin({
    //      analyzerMode: "static",
    //      openAnalyzer: false,
    //    })
    //  : null,
    env.WEBPACK_SERVE
    ? null
    : new BundleAnalyzerPlugin({
        analyzerMode: "static",
        openAnalyzer: false,
      }),
  ].filter(Boolean),

  
  devServer: {
    historyApiFallback: true,
    static: "./dist",
    open: true,
  },
  // 소스맵 최적화
  devtool: env.WEBPACK_SERVE
    ? "eval-cheap-module-source-map"
    : false,
  // 빌드 캐시 최적화
  cache: {
    type: env.WEBPACK_SERVE
      ? "memory"
      : "filesystem",
  },
};