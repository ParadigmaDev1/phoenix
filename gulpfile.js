import gulp from "gulp";

import { path } from "./gulp/config/path.js";

import { plugins } from "./gulp/config/plugins.js";
import pug from "gulp-pug";
import plumber from "gulp-plumber";
import notify from "gulp-notify";
import browserSync from "browser-sync";
// Импорт задач
import { copy } from "./gulp/tasks/copy.js";
import { html } from "./gulp/tasks/html.js";
// import { pug } from "./gulp/tasks/pug.js";
import { reset } from "./gulp/tasks/reset.js";
import { server } from "./gulp/tasks/server.js";
import { scss } from "./gulp/tasks/scss.js";
import { js } from "./gulp/tasks/js.js";
import { images } from "./gulp/tasks/images.js";
import { otfToTtf, ttfToWoff, fontsStyle } from "./gulp/tasks/fonts.js";

const pugTask = () => {
  return gulp
    .src("./src/*.pug") // Укажите путь к Pug-файлам
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

global.app = {
  path: path,
  gulp: gulp,
  plugins: plugins,
  isBuild: process.argv.includes("--build"),
  isDev: !process.argv.includes("--build"),
};

function watcher() {
  gulp.watch(path.watch.files, copy);
  // gulp.watch(path.watch.html, html);
  gulp.watch(path.watch.pug, pugTask);
  gulp.watch(path.watch.scss, scss);
  gulp.watch(path.watch.js, js);
  gulp.watch(path.watch.images, images);
}

// Последовательная обработка шрифтов
const fonts = gulp.series(otfToTtf, ttfToWoff, fontsStyle);
//const fonts = gulp.series(otfToTtf);

// Основные задачи
const mainTasks = gulp.series(
  fonts,
  gulp.parallel(fonts, copy, pugTask, scss, js, images)
);

// Постороение сценариев выполнения задач
const dev = gulp.series(reset, mainTasks, gulp.parallel(watcher, server));
const build = gulp.series(reset, mainTasks);

// экспорт сценариев
export { dev };
export { build };

// Выполнение сценарий по умолчанию
gulp.task("default", dev);

// spawn('gulp', [], { stdio: 'inherit'});
// process.exit();

process.on("SIGINT", function () {
  setTimeout(function () {
    gutil.log(gutil.colors.red("Successfully closed " + process.pid));
    process.exit(1);
  }, 500);
});
