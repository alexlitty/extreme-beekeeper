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
                    separator: ';'
                },
                src: ['client/**/*.js'],
                dest: '<%= paths.dest.js %>'
            }
        },

        uglify: {
            options: {
                compress: true,
                mangle: true,
                sourceMap: false
            },

            www: {
                src: '<%= paths.src.js %>',
                dest: '<%= paths.dest.js %>'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');

    grunt.registerTask('default', ['htmlmin', 'concat', 'uglify']);
}
