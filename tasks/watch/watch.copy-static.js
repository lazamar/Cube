const gulp = require('gulp');
const copyStatic = require('../copy-static');
const organiser = require('gulp-organiser');

module.exports = organiser.register((task) => {
  gulp.task(task.name, () => gulp.watch(copyStatic.src, [copyStatic.name]));
});
