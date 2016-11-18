/**
 * Created by Huan on 7/17/16.
 */
var	es6 = 'es6/',
	scripts = es6 + '**/*.js',
	main = '<%= pkg.main %>',
	esFiles = [scripts, main + '.js']
	dest = '../dist/';
module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build: {
                src: '<%= pkg.main %>.js',
                dest: 'build/<%= pkg.main %>.min.js'
            }
        },

		clean: {
            build: [dest]
        },

		copy: {
            main: {
                files: [{
                    expand: true,
                    cwd : es6,
                    src : ['**/*.html', '**/*.css'],
                    dest
                }]
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
                cwd: './',
                src: [scripts, main],
                dest
            }
        },

        requirejs: {
            compile: {
                options: {
                    appDir: dest,
                    baseUrl: dest,
                    dir: dest,
                    optimize: 'none',
                    mainConfigFile: 'rjConfig.js'
                }
            }
        },

        watch: {
            es6: {
                files: esFiles,
                tasks: ['babel', 'copy'],
                options: {
                    spawn: false,
                    debounceDelay: 100
                }
            },

			statics : {
            	 files: [es6 + '**/*.html', es6 + '**/*.css'],
                 tasks: ['copy'],
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
                outputFile: dest + 'eslint.log',
                useEslintrc: true
            },
            all: {
                files: {
                    src: esFiles
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
	grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');
    // Default task(s).
    //grunt.registerTask('default', ['uglify']);
    grunt.registerTask('clean', ['clean']);
    grunt.registerTask('build', ['eslint', 'babel', 'requirejs']);
    grunt.registerTask('default', ['babel', 'copy', 'watch']);
    //grunt.registerTask('default', ['babel', 'requirejs']);
};