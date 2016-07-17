/**
 * Created by Huan on 7/17/16.
 */
module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build: {
                src: 'src/<%= pkg.main %>.js',
                dest: 'build/<%= pkg.main %>.min.js'
            }
        },

        babel: {
            options: {
                sourceMap: true,
                presets: ['babel-preset-es2015'],
                babelrc: true
            },
            dist: {
                expand: true,
                ext: '.js',
                cwd: 'src/',
                src: ['**/*.js'],
                dest: 'dist/'
            }
        }
    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-babel');
    // Default task(s).
    //grunt.registerTask('default', ['uglify']);
    grunt.registerTask('default', ['babel']);
};
