// 引入 gulp
var gulp = require('gulp');

// 引入组件
var concat = require('gulp-concat');
var rename = require('gulp-rename');


//复制codemirror
gulp.task('bs',function(){
  gulp.src(['./vendor/bootstrap/dist/**/*.*'],{base:'./vendor'})
    .pipe(gulp.dest('lib'));
});

gulp.task('jq',function(){
  gulp.src(['./vendor/jquery/dist/**/*.*'],{base: './vendor'})
    .pipe(gulp.dest('lib'));
});

// 默认任务
gulp.task('default', function(){
  gulp.start('bs','jq');

  //监听js文件
  gulp.watch('./vendor/**/*.*',function(){
    gulp.start('bs','jq');
  });

});