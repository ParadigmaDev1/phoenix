import gpug from "gulp-pug";

export const pug = () => {
  return gulp
    .src("./src/pug/**/*.pug") // Укажите путь к Pug-файлам
    .pipe(
      plumber(
        notify.onError({
          title: "PUG",
          message: "Error: <%= error.message %>",
        })
      )
    )
    .pipe(
      pug({
        pretty: true, // Форматировать HTML для чтения
      })
    )
    .pipe(gulp.dest("./dist")) // Укажите выходную папку
    .pipe(browserSync.stream());
};
