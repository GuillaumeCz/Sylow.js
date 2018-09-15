import gulp from 'gulp';
import babel from 'gulp-babel';
import gulpLoadPlugins from 'gulp-load-plugins';
import path from 'path';
import del from 'del';
import webpack from 'webpack';
import webpackStream from 'webpack-stream';
import webpackConfig from './webpack.config';

import uglify from 'gulp-uglify';
import sourcemaps from 'gulp-sourcemaps';
import concat from 'gulp-concat';

const plugins = gulpLoadPlugins();

const paths = {
    dest: './dist',
    src: './lib/**/*.js',
    tests: 'test.js'
};

// Clean up dist
gulp.task('clean', () => del.sync(['dist/**', 'dist/.*', '!dist']));

// Compile ES6 to ES5, uglify it and copy to dist
gulp.task('compile', () => 
    gulp.src(paths.src)
        .pipe(plugins.newer(paths.dest))
        .pipe(plugins.sourcemaps.init())
            .pipe(plugins.babel())
            .pipe(plugins.uglify())
        .pipe(plugins.sourcemaps.write())
        .pipe(gulp.dest(paths.dest))
);

gulp.task('nodemon', () => {
    gulp.watch(paths.src, ['compile'])
    return plugins.nodemon({
        script: 'index.js',
        ext: 'js',
        watch: ['./**/*.js', '!webpack.config.js', '!gulpfile.babel.js'],
        ignore: ['node_modules/**/*.js', 'dist/**/*.js'],
        task: ['clean', 'compile']
    });
});

// TODO: Find a way to include webpack...
gulp.task('webpack', () => 
    gulp.src(paths.src)
        .pipe(webpackStream(webpackConfig, webpack))
        .pipe(gulp.dest(paths.dest))
);

gulp.task('default', ['clean', 'compile']);
