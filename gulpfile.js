const {src, dest, watch} = require("gulp")
const compileSass = require('gulp-sass')(require('sass'));
// compileSass.compiler =require("node-sass")
const sourcemaps = require('gulp-sourcemaps');

const bundleSass = ()=>{
    return src("./Sass/**/*.scss")
    .pipe(sourcemaps.init())
    .pipe(compileSass().on("error", compileSass.logError))
    .pipe(sourcemaps.write('./'))
    .pipe(dest("./dist"))
};

const devWatch =()=>{
    watch("./Sass/**/*.scss", bundleSass)
}

exports.bundleSass = bundleSass;
exports.devWatch = devWatch;