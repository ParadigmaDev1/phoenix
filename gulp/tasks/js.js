import webpack from "webpack-stream";
import { config as babelConfig } from "./babel.js"; // Исправленный путь импорта
import path from "path";
import TerserPlugin from "terser-webpack-plugin"; // Добавлен импорт TerserPlugin

export const js = () => {
  return app.gulp
    .src(app.path.src.js, { sourcemaps: app.isDev })
    .pipe(
      app.plugins.plumber(
        app.plugins.notify.onError({
          title: "JS",
          message: "Error: <%= error.message %>",
        })
      )
    )
    .pipe(
      webpack({
        mode: app.isBuild ? "production" : "development",
        entry: {
          app: app.path.src.js,
          // Дополнительные точки входа для разделения кода
          vendor: ["swiper", "@fancyapps/ui", "air-datepicker"],
        },
        output: {
          filename: "[name].min.js",
          chunkFilename: "[name].chunk.js", // Имена для чанков
        },
        module: {
          rules: [
            {
              test: /\.js$/,
              exclude: /node_modules/,
              use: {
                loader: "babel-loader",
                options: babelConfig, // Используем импортированную конфигурацию
              },
            },
          ],
        },
        resolve: {
          extensions: [".js"],
          alias: {
            "@": path.resolve(app.path.src.js.replace("/**/*.js", "")),
          },
        },
        optimization: {
          minimize: app.isBuild,
          minimizer: [
            new TerserPlugin({
              extractComments: false,
            }),
          ],
        },
        devtool: app.isDev ? "source-map" : false,
      })
    )
    .pipe(app.gulp.dest(app.path.build.js))
    .pipe(app.plugins.browsersync.stream());
};
