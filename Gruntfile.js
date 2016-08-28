module.exports = function(grunt) {
    grunt.initConfig({
        mkdir: {
            all: {
                options: {
                    mode: 0777,
                    create: [
                        './db',
                        './db/session'
                    ]
                }
            }
        },

        htmlmin: {
            all: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true
                },

                files: {
                    'client-min/index.html': 'client/index.html'
                }
            }
        },

        concat: {
            all: {
                options: { separator: '' },
                src: [
                    'client/utility.js',
                    'client/**/*.js',
                    'engine/**/*.js'
                ],
                dest: 'client-min/b.js'
            }
        },
        
        uglify: {
            options: {
                compress: true,
                mangle: false,
                sourceMap: false
            },

            all: {
                src: 'client-min/b.js',
                dest: 'client-min/b.js'
            }
        },

        watch: {
            all: {
                files: [
                    'client/**/*.html',
                    'client/**/*.css',
                    'client/**/*.js',
                    'engine/**/*.js'
                ],
                tasks: ['default']
            }
        }
    });

    grunt.loadNpmTasks('grunt-mkdir');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['mkdir', 'htmlmin', 'concat', 'uglify']);
}
