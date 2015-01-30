/*global module: false, require: false */

module.exports = function (grunt) {
    'use strict';

    var sourcemaps = true;

    require('jit-grunt')(grunt, {
        'scsslint' : 'grunt-scss-lint'
    });

    grunt.initConfig({
        scsslint: {
            all: [
                '_dev/**/*.scss'
            ]
        },
        libsass: {
            all: {
                options: {
                    style: 'compact', // See: http://fettblog.eu/blog/2014/04/10/gulp-sass-autoprefixer-sourcemaps/
                    sourcemap: sourcemaps
                },
                files: {
                    'assets/css/styles.css': '_dev/styles/styles.scss'
                }
            }
        },
        autoprefixer: {
            all: {
                options: {
                    browsers: [
                        'last 2 version',
                        'ie 8',
                        'Firefox ESR',
                        'Android >= 4.0',
                        'Safari 6.1'
                    ],
                    map: sourcemaps
                },
                src: 'assets/css/styles.css'
            }
        },
        cssmin: {
            all: {
                files: {
                    'assets/css/styles.min.css': [
                        '_vendor/normalize-css/normalize.css',
                        'assets/css/styles.css'
                    ]
                }
            }
        },
        lineending: {
            options: {
                eol: 'lf',
                overwrite: true
            },
            css: {
                files: {
                    '': ['assets/css/*']
                }
            },
            js: {
                files: {
                    '': ['assets/js/*']
                }
            }
        },
        browserSync: {
            dev: {
                bsFiles: {
                    src: [
                        'assets/js/scripts.min.js',
                        'assets/js/vendor.min.js',
                        'assets/css/styles.min.css',
                        'assets/images/*.png',
                        'assets/images/*.svg'
                    ]
                },
                options : {
                    proxy: 'http://localhost:1238'
                }
            }
        },
        watch: {
            // These options slow down the Grunt watcher so that it does not eat so much CPU
            options: {
                spawn: false,
                interrupt: false,
                interval: 5007,
                debounceDelay: 200
            },
            sass: {
                files: [
                    '_dev/styles/partials/*.scss',
                    '_dev/styles/styles.scss'
                ],
                tasks: [
                    'css'
                ]
            },
            Gruntfile: {
                files: ['Gruntfile.js'],
                tasks: [
                    'jshint:Gruntfile'
                ]
            }
        }
    });

    grunt.registerTask('default', [
        'css'
    ]);
    grunt.registerTask('css', [
        'libsass',
        'autoprefixer',
        'cssmin',
        'lineending:css'
    ]);
    grunt.registerTask('browsersync', [
        'browserSync'
    ]);
};