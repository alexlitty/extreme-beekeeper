module.exports = function(grunt) {
    grunt.initConfig({
        paths: {
            src: {
                js: 'client/**/*.js'
            },

            dest: {
                js: 'www/beekeeper.js'
            }
        },

        htmlmin: {
            www: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true
                },

                files: {
                    'www/index.html': 'client/index.html'
                }
            }
        },

        concat: {
            js: {
                options: {
                    separator: ''
                },
                src: [
                    'client/utility.js',
                    'client/**/*.js',
                    'engine/**/*.js'
                ],
                dest: 'www/beekeeper.js'
            }
        },
        
        uglify: {
            options: {
                compress: true,
                mangle: false,
                sourceMap: false
            },

            www: {
                src: 'www/beekeeper.js',
                dest: 'www/b.js'
            }
        },

        watch: {
            scripts: {
                files: [
                    'client/**/*.html',
                    'client/**/*.js',
                    'engine/**/*.js'
                ],
                tasks: ['default']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['htmlmin', 'concat', 'uglify']);
}
