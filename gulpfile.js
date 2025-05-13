import gulp from "gulp";
import { path as configPath } from "./gulp/config/path.js";
import { plugins } from "./gulp/config/plugins.js";
import browserSync from "browser-sync";
import fs from "fs";
import path from "path";

// Импорт всех задач
import { reset } from "./gulp/tasks/reset.js";
import { copy } from "./gulp/tasks/copy.js";
import { scss } from "./gulp/tasks/scss.js";
import { js } from "./gulp/tasks/js.js";
import { images } from "./gulp/tasks/images.js";
import { otfToTtf, ttfToWoff, fontsStyle } from "./gulp/tasks/fonts.js";

// Глобальная переменная для текущей страницы
let currentPage = "";

// Инициализация глобального объекта
global.app = {
  path: configPath,
  gulp: gulp,
  plugins: {
    ...plugins,
    browserSync,
  },
  isBuild: process.argv.includes("--build"),
  isDev: !process.argv.includes("--build"),
};

// Функция для поиска зависимых страниц
function getDependentPages(componentPath) {
  const componentName = path.basename(componentPath, ".pug");
  const pages = [];

  const walkSync = (dir, filelist = []) => {
    fs.readdirSync(dir).forEach((file) => {
      const dirPath = path.join(dir, file);
      if (fs.statSync(dirPath).isDirectory()) {
        filelist = walkSync(dirPath, filelist);
      } else if (path.extname(file) === ".pug") {
        filelist.push(dirPath);
      }
    });
    return filelist;
  };

  const allPugFiles = walkSync("src");

  allPugFiles.forEach((pugFile) => {
    const content = fs.readFileSync(pugFile, "utf8");
    if (content.includes(`+${componentName}(`)) {
      pages.push(pugFile);
    }
  });

  return pages;
}

// Обработка Pug файлов
const processPug = (filePath) => {
  return app.gulp
    .src(filePath, { base: "src" })
    .pipe(app.plugins.plumber())
    .pipe(
      app.plugins.pug({
        pretty: app.isDev,
        basedir: path.resolve("src/pug"),
      })
    )
    .pipe(app.gulp.dest("dist"))
    .pipe(app.plugins.browserSync.stream());
};

// Полная сборка Pug
const pugAll = () => processPug(app.path.src.pug);

// Инициализация сервера
const server = () => {
  app.plugins.browserSync.init({
    server: {
      baseDir: "./dist",
    },
    middleware: (req, res, next) => {
      if (req.url.endsWith(".html")) {
        currentPage = req.url.replace(/^\//, "");
      }
      next();
    },
  });
};

// Вотчер для Pug
const watchPug = () => {
  app.gulp.watch(app.path.watch.pug).on("change", async (filePath) => {
    console.log(`Изменен файл: ${filePath}`);

    if (filePath.includes("components")) {
      console.log("Изменен глобальный компонент - пересборка всех страниц");
      return pugAll();
    } else if (filePath.includes("pages")) {
      const componentName = path.basename(filePath, ".pug");
      const dependentPages = getDependentPages(filePath);

      if (dependentPages.length > 0) {
        console.log(
          `Пересборка зависимых страниц: ${dependentPages.join(", ")}`
        );
        return Promise.all(dependentPages.map((page) => processPug(page)));
      }
    }

    console.log(`Обработка отдельного файла: ${filePath}`);
    return processPug(filePath);
  });
};

// Вотчеры для других типов файлов
const watchOther = () => {
  app.gulp.watch(app.path.watch.files, copy);
  app.gulp.watch(app.path.watch.scss, scss);
  app.gulp.watch(app.path.watch.js, js);
  app.gulp.watch(app.path.watch.images, images);
};

// Основные задачи
const mainTasks = gulp.series(
  fontsStyle,
  gulp.parallel(copy, pugAll, scss, js, images)
);

// Сценарии
const dev = gulp.series(
  reset,
  otfToTtf,
  ttfToWoff,
  mainTasks,
  gulp.parallel(watchPug, watchOther, server)
);

const build = gulp.series(reset, otfToTtf, ttfToWoff, mainTasks);

export { dev, build };
export default dev;
