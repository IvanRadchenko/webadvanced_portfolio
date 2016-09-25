'use strict';

module.exports = function() {
  $.gulp.task('sprite', function() {
    var spriteData = $.gulp.src('./sources/img/work/leaves/*.png')
     .pipe($.gp.spritesmith({
      imgName: 'leaves.png',
      imgPath: '../img/work/leaves/sprite.png',
      cssName: '_leaves.scss',
      padding: 20 ,
      algorithm: 'top-down'
    }));
     spriteData.img.pipe($.gulp.dest($.config.root + 'source/img/work/'));
     spriteData.css.pipe($.gulp.dest($.config.root + 'source/style/common/'));
  });
};