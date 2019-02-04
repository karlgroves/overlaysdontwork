'use strict';

module.exports = function (grunt) {

    // Load all grunt tasks
    require('load-grunt-tasks')(grunt);

    // Show elapsed time at the end
    require('time-grunt')(grunt);

    grunt.util.linefeed = '\n';

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        name: 'OverlaysDontWork',

        datetime: Date.now(),

        clean: {
            files: [
                'dist*',
                '.sass-cache/*'
            ]
        },

        concat: {

            /* Concat the JS  */
            js: {
                files: {
                    'dist/js/overlaysDontWork.js': [
                        'src/**/*.js'
                    ]
                }
            }
        },

        /* Now compile the SASS hotness */
        sass: {
            dist: {
                files: {
                    'src/style.css': ['sass/main.scss']
                }
            }
        },

        uglify: {

            options: {
                preserveComments: false
            },

            build: {
                files: {
                    'dist/js/overlaysDontWork.min.js': ['dist/js/overlaysDontWork.js']
                }
            }
        },

        cssmin: {
            files: {
                'dist/style.css': ['dist/style.css']
            }
        },

        jsonlint: {
            configFiles: {
                src: ['package.json', '.eslintrc']
            }
        },

        copy: {
            main: {
                files: [
                    //copy all of 'src' into 'dist'
                    {
                        expand: true,
                        cwd: 'src/',
                        src: '**',
                        dest: 'dist/'
                    },

                    // copy fontawesome css
                    {
                        expand: true,
                        cwd: 'node_modules/font-awesome/',
                        src: 'css/*',
                        dest: 'dist/fontawesome/'
                    },

                    // copy fontawesome fonts
                    {
                        expand: true,
                        cwd: 'node_modules/font-awesome/',
                        src: 'fonts/*',
                        dest: 'dist/fontawesome/'
                    },

                    // copy jquery
                    {
                        expand: true,
                        cwd: 'node_modules/jquery/',
                        src: 'dist/*',
                        dest: 'dist/jquery/'
                    }

                ]
            }
        },

        eslint: {
            options: {
                configFile: '.eslintrc'
            },
            configs: {
                src: ['Gruntfile.js']
            },
            src: {
                src: ['js/**/*.js']
            }
        },

        watch: {
            everything: {
                files: ['sass/*.scss', 'src/**/*', 'js/**/*'],
                tasks: ['default']
            }
        },
    });

    grunt.registerTask('test', ['jsonlint', 'eslint']);
    grunt.registerTask('build', ['clean', 'concat', 'sass', 'copy']);
    grunt.registerTask('default', ['test', 'build']);
};
