import * as nodePath from "path";
const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = `./dist`;
const srcFolder = `./src`;

export const path = {
  build: {
    js: `${buildFolder}/js/`,
    images: `${buildFolder}/img/`,
    css: `${buildFolder}/css/`,
    html: `${buildFolder}/`,
    pug: `${buildFolder}/`,
    fonts: `${buildFolder}/fonts/`,
    files: `${buildFolder}/files/`,
    php: `${buildFolder}/php/`,
  },
  src: {
    js: `${srcFolder}/js/app.js`,
    images: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp}`,
    svg: `${srcFolder}/img/**/*.svg`,
    scss: [
      `${srcFolder}/scss/*.scss`,
      `${srcFolder}/pug/components/**/*.scss`,
      `${srcFolder}/pug/pages/**/*.scss`,
      `${srcFolder}/pug/modals/**/*.scss`,
    ],
    html: `${srcFolder}/*.html`,
    pug: `${srcFolder}/*.pug`,
    files: `${srcFolder}/files/**/*.*`,
    php: `${srcFolder}/php/**/*.*`,
  },
  watch: {
    js: `${srcFolder}/**/*.js`,
    images: `${srcFolder}/img/**/*.{jpg,jpeg,svg,png,gif,webp}`,
    scss: `${srcFolder}/**/*.scss`,
    html: `${srcFolder}/**/*.html`,
    pug: `${srcFolder}/**/*.pug`,
    files: `${srcFolder}/files/**/*.*`,
    php: `${srcFolder}/php/**/*.*`,
  },
  clean: buildFolder,
  buildFolder: buildFolder,
  srcFolder: srcFolder,
  rootFolder: rootFolder,
  ftp: ``,
};
