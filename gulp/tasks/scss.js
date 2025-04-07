import dartSass from "sass";
import gulpSass from "gulp-sass";
import rename from "gulp-rename";
import cleanCss from "gulp-clean-css";
import webpcss from "gulp-webpcss";
import autoprefixer from "gulp-autoprefixer";
import groupCssMediaQueries from "gulp-group-css-media-queries";
import flatmap from "gulp-flatmap"; // Импортируем gulp-flatmap

const sass = gulpSass(dartSass);

export const scss = () => {
  return app.gulp
    .src(app.path.src.scss, { sourcemaps: true })
    .pipe(
      app.plugins.plumber(
        app.plugins.notify.onError({
          title: "SCSS",
          message: "Error: <%= error.message %>",
        })
      )
    )

    .pipe(app.plugins.replace(/@img\//g, "../img/"))
    .pipe(
      flatmap((stream, file) => {
        return stream
          .pipe(
            sass({
              outputStyle: "expanded",
            })
          )
          .pipe(groupCssMediaQueries())
          .pipe(
            webpcss({
              webpClass: ".webp",
              noWebpClass: ".no-webp",
            })
          )
          .pipe(
            autoprefixer({
              grid: true,
              overrideBrowserslist: ["last 3 versions"],
              cascade: true,
            })
          )
          .pipe(cleanCss())
          .pipe(
            rename((path) => {
              // Убираем путь к папке для всех файлов
              path.dirname = "";
            })
          );
      })
    )
    .pipe(app.gulp.dest(app.path.build.css))
    .pipe(app.plugins.browsersync.stream());
};
