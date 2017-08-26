
//     //压缩
//     minifycss = require('gulp-minify-css'), //压缩CSS
//     htmlmin = require('gulp-htmlmin'),//压缩html
//     imagemin = require('gulp-imagemin'),//图片压缩
//
//
//     //js检测
//   //  jshint = require('gulp-jshint'),
//     //信息提示类
//     rename = require('gulp-rename'),//重命名
//     notify = require('gulp-notify'),//提示信息
//     //css
//    // less = require('gulp-less'),//less生成CSS
//
//     clean = require('gulp-clean'),
//
//     //文件合并
//     concat = require('gulp-concat'),
//
//     cache = require('gulp-cache'),
//     //监听
//     livereload = require('gulp-livereload'),//当代码变化时，执行实现
//     watch = require('gulp-watch'),
//
//     autoprefixer = require('gulp-autoprefixer'),
//
//     changed = require('gulp-changed');


// 压缩非minjs,检查JS
// gulp.task('scripts', function() {
//     return gulp.src(['js/*.js', '!js/*min.js'])// 要压缩的js文件
// //      .pipe(jshint())
// //      .pipe(jshint.reporter('default'))
//         //      .pipe(rename({
//         //          suffix: '.min'
//         //      }))
//         .pipe(uglify()) //使用uglify进行压缩,更多配置请参考：
//         .pipe(gulp.dest('dist/js'))//压缩后的路径
//         .pipe(notify({
//             message: 'Scripts task complete'
//         }));
// });
//
// // 压缩非mincss
// gulp.task('styles', function() {
//     return gulp.src(['css/*.css', '!**/*min.css'])
//         .pipe(autoprefixer())
//         .pipe(minifycss())
//         .pipe(gulp.dest('dist/css'))
//         .pipe(notify({
//             message: 'styles task complete'
//         }));
// });
//
// //压缩图片
// gulp.task('images', function() {
//     return gulp.src(['src/**/*.png', 'src/**/*.jpg', 'src/**/*.gif'])
//         //      .pipe(cache(imagemin({
//         //          optimizationLevel: 3,
//         //          progressive: true,
//         //          interlaced: true
//         //      })))
//         .pipe(gulp.dest('build'))
//         .pipe(notify({
//             message: 'Images task complete'
//         }));
// });
//
// // 压缩html
// gulp.task('htmls', function() {
//     return gulp.src('src/**/*.shtml')
// //      .pipe(htmlmin())
//         .pipe(gulp.dest('build'))
//         .pipe(notify({
//             message: 'htmls task complete'
//         }));
// });
//
// // 移动MINJS,MINCSS
// gulp.task('min_css_js', function() {
//     return gulp.src(['src/**/*min.js', 'src/**/*min.css'])
//         .pipe(gulp.dest('build'))
//         .pipe(notify({
//             message: 'build min css / js task complete'
//         }));
// });
//
// // 移动字体文件
// gulp.task('fonts', function() {
//     return gulp.src('src/**/*.ttf')
//         .pipe(gulp.dest('build'))
//         .pipe(notify({
//             message: 'fonts task complete'
//         }));
// });
//
// /**
//  * 删除所有编译文件
//  */
// gulp.task('clean', function() {
//     return gulp.src(['build'], {
//             read: false
//         })
//         .pipe(clean());
// });

var gulp = require('gulp');//引入gulp
var bs = require('browser-sync').create();// 静态服务器

var paths = {
    src: {
        dir: './src',
        img: './src/images/**/*.{JPG,jpg,png,gif,svg}',
        slice: './src/slice/**/*.png',
        js: './src/js/**/*.js',
        media: './src/media/**/*',
        less: './src/css/style-*.less',
        lessAll: './src/css/**/*.less',
        sass: './src/css/style-*.scss',
        sassAll: './src/css/**/*.scss',
        html: ['./src/html/**/*.html', '!./src/html/_*/**.html', '!./src/html/_*/**/**.html'],
        svg:['./src/svg/**/*.svg'],
        htmlAll: './src/html/**/*.html'
    },
    dev: {
        dir: './dev',
        css: './dev/css',
        html: './dev/html',
        js: './dev/js',
        symboltemp:'./dev/symboltemp/',
        symbol:'./dev/symbolsvg'

    }
};
//启动 livereload
/*function startServer() {
    bs.init({
        server: paths.dev.dir,
        port: config['livereload']['port'] || 8080,
        startPath: config['livereload']['startPath'] || '/html',
        reloadDelay: 0,
        notify: {      //自定制livereload 提醒条
            styles: [
                "margin: 0",
                "padding: 5px",
                "position: fixed",
                "font-size: 10px",
                "z-index: 9999",
                "bottom: 0px",
                "right: 0px",
                "border-radius: 0",
                "border-top-left-radius: 5px",
                "background-color: rgba(60,197,31,0.5)",
                "color: white",
                "text-align: center"
            ]
        }
    });
}
//监听文件
function watch(cb) {
    var watcher = gulp.watch([
            paths.src.img,
            paths.src.svg,
            paths.src.slice,
            paths.src.js,
            paths.src.media,
            paths.src.lessAll,
            paths.src.sassAll,
            paths.src.htmlAll
        ],
        {ignored: /[\/\\]\./}
    );

    watcher
        .on('change', function (file) {
            util.log(file + ' has been changed');
            watchHandler('changed', file);
        })
        .on('add', function (file) {
            util.log(file + ' has been added');
            watchHandler('add', file);
        })
        .on('unlink', function (file) {
            util.log(file + ' is deleted');
            watchHandler('removed', file);
        });

    cb();
}
gulp.task('default', gulp.series(watch,startServer ));
gulp.task('default').description = "This is the default task and it does certain things";
// gulp.task('serve', function () {
//     bs.init({
//         port: 2017,
//         server: {
//             baseDir: ['./']
//         }
//     });
// });
//
// gulp.task('watch', gulp.series('serve', function () {
//     return gulp.src('src/html/*.html')
//         .pipe(bs.reload());
// }));
const reload = bs.reload;
/*实时监控*/
gulp.task('browser-sync', function() {
    var files = [
        'index.html',
        '**/*.html',
        '**/*.css',
        '**/*.js'
    ];
    bs.init(files,{
        server: {
            baseDir: "./"
        }
    });
});

gulp.task('default',gulp.series('browser-sync')); //定义默认任务



