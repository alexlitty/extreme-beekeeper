module.exports = function(grunt) {
    grunt.initConfig({
        htmlmin: {
            clientMin: {
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
            clientMin: {
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

            clientMin: {
                src: 'client-min/b.js',
                dest: 'client-min/b.js'
            }
        },

        watch: {
            scripts: {
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

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['htmlmin', 'concat', 'uglify']);
}
