module.exports = function(grunt) {

    grunt.initConfig({
        sass: {
            dist: {
                options: {
                    style: 'expanded'
                },
                files: [{
                    expand: true,
                    cwd: 'scss',
                    src: ['extra-styles.scss'],
                    dest: 'css',
                    ext: '.css'
                }]
            }
        },
        autoprefixer: {
            options: {
                browsers: ['last 2 version']
            },
            no_dest: {
                src: 'css/extra-style.css'
            }
        },
        watch: {
            sass: {
                files: ['scss/extra-styles.scss'],
                tasks: ['sass','autoprefixer'],
                options: {
                    spawn: false
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['sass','autoprefixer']);
};