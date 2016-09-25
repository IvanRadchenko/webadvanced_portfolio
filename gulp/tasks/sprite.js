'use strict';

module.exports = function() {
  $.gulp.task('sprite', function () {
    var spriteData = $.gulp.src('./source/img/work/leaves/*.png')
      .pipe($.gp.spritesmith({
        imgName: 'leaves.png',
        cssName: '_leaves.scss',
        padding: 20,
        algorithm: 'top-down'
      }));
    spriteData.img.pipe($.gulp.dest('./source/img/work/leaves/'));
    spriteData.css.pipe($.gulp.dest('./source/style/common/'));

    return spriteData;
  });
};