const { src, dest, series, parallel } = require('gulp');
const babel = require('gulp-babel');
const sourcemaps = require('gulp-sourcemaps'); //npm i gulp-sourcemaps
const concat = require('gulp-concat'); //npm i gulp-concat
const clean = require('gulp-clean'); //npm i gulp-clean
const uglify = require('gulp-uglify'); //npm install --save-dev gulp-uglify
const htmlmin = require('gulp-htmlmin'); //npm install --save gulp-htmlmin
const watch = require('gulp-watch');//npm install --save-dev gulp-watch
const sass = require('gulp-sass')(require('sass')); //npm install sass gulp-sass --save-dev
const cssnano = require('gulp-cssnano'); // npm i --save-dev gulp-cssnano
const autoprefixer = require('gulp-autoprefixer');//npm install --save-dev gulp-autoprefixer
const open = require('gulp-open'); //npm install gulp-open --save
const image = require('gulp-image');//npm install --save-dev gulp-image
const webp = require('gulp-webp'); //npm install --save-dev gulp-webp

const cleanFolders = () => {
   return src('build', { read: false })
      .pipe(clean())
}

const jsFiles = () => {
   return src('src/js/**/*.js')
      .pipe(sourcemaps.init({ loadMaps: true }))
      .pipe(concat('main.js'))
      .pipe(babel({
         presets: ['@babel/env'],
         plugins: ['@babel/transform-runtime']
      }))
      .pipe(uglify())
      .pipe(sourcemaps.write())
      .pipe(dest('build/js'))
}
const scssToCss = () => {
   return src('src/styles/main.scss')
      .pipe(sourcemaps.init({ loadMaps: true }))
      .pipe(sass().on('error', sass.logError))
      .pipe(autoprefixer())
      .pipe(cssnano())
      // .pipe(concat('main.css'))
      .pipe(sourcemaps.write(''))
      .pipe(dest('build/styles'))
}

const minifyHtml = () => {
   return src('src/**/*.html')
      .pipe(htmlmin({ collapseWhitespace: true }))
      .pipe(dest('build'))
}

const openHtml = () => {
   const browser = 'firefox' || 'google-chrome'
   return src('build/index.html')
      .pipe(open({ app: browser }))
}
const miniImage = () => {
   return src('src/images/*')
      .pipe(image())
      .pipe(dest('build/images'))
}
const webpImage = () => {
   return src('src/images/*')
      .pipe(webp())
      .pipe(dest('build/images'))
}

const watchFiles = () => {
   watch('src/**/*.js', jsFiles);
   watch('src/styles/**/*.scss', scssToCss);
   watch('src/**/*.html', minifyHtml);
   // watch('src/images/*', parallel(miniImage, webpImage))
}


exports.cleanFolders = cleanFolders;
exports.watchFiles = watchFiles;
exports.openHtml = openHtml;
exports.minifyHtml = minifyHtml;

exports.imagesOptimizations = series(miniImage, webpImage);

exports.default = series(parallel(miniImage, webpImage,jsFiles, scssToCss), minifyHtml, openHtml, watchFiles);

