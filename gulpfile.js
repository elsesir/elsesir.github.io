var gulp = require('gulp'),//引入gulp
    //压缩
    minifycss = require('gulp-minify-css'), //压缩CSS
    htmlmin = require('gulp-htmlmin'),//压缩html
    uglify = require('gulp-uglify'), //js压缩
    imagemin = require('gulp-imagemin'),//图片压缩


    //js检测
  //  jshint = require('gulp-jshint'),
    //信息提示类
    rename = require('gulp-rename'),//重命名
    notify = require('gulp-notify'),//提示信息
    //css
   // less = require('gulp-less'),//less生成CSS

    clean = require('gulp-clean'),

    //文件合并
    concat = require('gulp-concat'),

    cache = require('gulp-cache'),
    //监听
    livereload = require('gulp-livereload'),//当代码变化时，执行实现
    browserSync = require('browser-sync').create(),//浏览器同步刷新

    autoprefixer = require('gulp-autoprefixer');


// 压缩非minjs,检查JS
gulp.task('scripts', function() {
    return gulp.src(['js/*.js', '!js/*min.js'])// 要压缩的js文件
//      .pipe(jshint())
//      .pipe(jshint.reporter('default'))
        //      .pipe(rename({
        //          suffix: '.min'
        //      }))
        .pipe(uglify()) //使用uglify进行压缩,更多配置请参考：
        .pipe(gulp.dest('dist/js'))//压缩后的路径
        .pipe(notify({
            message: 'Scripts task complete'
        }));
});

// 压缩非mincss
gulp.task('styles', function() {
    return gulp.src(['css/*.css', '!**/*min.css'])
        .pipe(autoprefixer())
        .pipe(minifycss())
        .pipe(gulp.dest('dist/css'))
        .pipe(notify({
            message: 'styles task complete'
        }));
});

//压缩图片
gulp.task('images', function() {
    return gulp.src(['src/**/*.png', 'src/**/*.jpg', 'src/**/*.gif'])
        //      .pipe(cache(imagemin({
        //          optimizationLevel: 3,
        //          progressive: true,
        //          interlaced: true
        //      })))
        .pipe(gulp.dest('build'))
        .pipe(notify({
            message: 'Images task complete'
        }));
});

// 压缩html
gulp.task('htmls', function() {
    return gulp.src('src/**/*.shtml')
//      .pipe(htmlmin())
        .pipe(gulp.dest('build'))
        .pipe(notify({
            message: 'htmls task complete'
        }));
});

// 移动MINJS,MINCSS
gulp.task('min_css_js', function() {
    return gulp.src(['src/**/*min.js', 'src/**/*min.css'])
        .pipe(gulp.dest('build'))
        .pipe(notify({
            message: 'build min css / js task complete'
        }));
});

// 移动字体文件
gulp.task('fonts', function() {
    return gulp.src('src/**/*.ttf')
        .pipe(gulp.dest('build'))
        .pipe(notify({
            message: 'fonts task complete'
        }));
});

/**
 * 删除所有编译文件
 */
gulp.task('clean', function() {
    return gulp.src(['build'], {
            read: false
        })
        .pipe(clean());
});

// // 预设任务
// gulp.task('default', ['clean'], function() {
//     gulp.start(['scripts', 'styles', 'images', 'htmls', 'min_css_js', 'fonts']);
// });



// 看手
// gulp.task('watch', function() {

// //看守所有.scss档
//  gulp.watch('src/css/**/*.scss', ['styles']);
//  // 看守所有.js档
//  gulp.watch('src/js/**/*.js', ['scripts']);

//  // 看守所有图片档
//  gulp.watch('src/images/**/*', ['images']);
// //建立即时重整伺服器
// livereload.listen();
// //  var server = livereload();
// // //看守所有位在 dist/  目录下的档案，一旦有更动，便进行重整
// //  gulp.watch(['src/**']).on('change', function(file) {
// //      server.changed(src);
// //  });

// });

var browserSync = require('browser-sync').create();// 静态服务器
gulp.task('browser-sync', function() {
    var files = [
       'src/html/*.html',
       'src/css/*.css',
       'src/js/*.js'
    ];
   browserSync.init({
     server: { baseDir: "./" }
   });
});// 代理
// gulp.task('browser-sync', function() {
//  browserSync.init({ proxy: "你的域名或IP" });
// });//这个可以注释掉，不写也行。目前我还没有发现这个的用法
gulp.task('watch', function () {
   gulp.watch([
        'src/html/*.html',
       'src/css/*.css',
       'src/js/*.js'
       // 'src/html/yinyangshi.html',
       // 'src/css/yinyangshi.css',
       // 'src/js/yinyangshi.js'
   ], ['browser-sync']);
 });
gulp.task('default', ['browser-sync','watch']);

