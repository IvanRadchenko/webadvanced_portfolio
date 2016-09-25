'use strict';

module.exports = function() {
  $.gulp.task('copy:image', function() {
    return $.gulp.src(['./source/img/{header,login,preloader,slider,sprite,water_map}/*.*','./source/img/work/*.*','./source/img/work/leaves/leaves.png'], { since: $.gulp.lastRun('copy:image') })
      .pipe($.gulp.dest($.config.root + '/assets/img'));
  });
};
