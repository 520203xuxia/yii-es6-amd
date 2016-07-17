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
                sourceMap: false,
                presets: ['babel-preset-es2015'],
                babelrc: true
            },
            dist: {
                expand: true,
                ext: '.js',
                cwd: 'src/es6/',
                src: ['**/*.js'],
                dest: 'src/amd'
            }
        },

        requirejs: {
            compile: {
                options: {
                    appDir: './src/amd',
                    baseUrl: '/dist/js/',
                    dir: './dist/js',
                    optimize: 'none',
                    mainConfigFile: 'src/rjConfig.js'
                }
            }
        },

        watch: {
            scripts: {
                files: ['src/es6/**/*.js', 'rjConfig.js'],
                tasks: ['eslint', 'babel', 'requirejs'],
                options: {
                    spawn: false,
                    debounceDelay: 100
                }
            }
        },

        eslint: {
            options: {
                quiet: false,
                //  configFile: 'eslint.json',
                outputFile: 'eslint.log',
                useEslintrc: true
            },
            all: {
                files: {
                    src: ['src/es6/**/*.js']
                }
            },
            //  target: ['Gruntfile.js']
            //  target: ['src/es6/app.js']
        }
    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-babel');
    grunt.loadNpmTasks('grunt-contrib-requirejs');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-eslint');
    // Default task(s).
    //grunt.registerTask('default', ['uglify']);
    grunt.registerTask('check', ['eslint']);
    grunt.registerTask('build', ['eslint', 'babel', 'requirejs']);
    grunt.registerTask('default', ['watch']);
    //grunt.registerTask('default', ['babel', 'requirejs']);
};
