/**
 * Created by Huan on 7/17/16.
 */
var path = require('path')
console.info(path.resolve('.'))
module.exports = function(grunt) {
	
	var dest = 'dest/',
		pat = '**/*'
		cwd = 'es6/';
	
	var ext = '.es6',
		esPat = pat + ext,
		esDest = dest + '/script';
    
    var lessDest = dest + '/css',
        lessCwd = 'less/',
        lessExt = '.less',
        lessPat = lessCwd + pat + lessExt;

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        babel: {
            options: {
                sourceMap: false,
                presets: ['babel-preset-latest'],
                babelrc: true
            },
            dist: {
                expand: true,
                ext : '.js',
                cwd,
                src: [ esPat ],
                dest: esDest
            }
        },

        clean: {
            build: [esDest, lessDest]
        },

        copy: {
            static : {
                files: [{
                    expand: true,
                    cwd,
                    src: ['**/*.html', '**/*.js', '**/*.css'],
                    dest: esDest
                }]
            }
        },
        
        less : {
            main : {
                files : [{
                    expand : true,
                    ext : '.css',
                    cwd : lessCwd,
                    src : [pat + lessExt],
                    dest : lessDest,
                }]
            }
        },

        watch: {
            es6: {
                files: ['es6/**/*.es6'],
                tasks: ['babel'],
                options: {
                    spawn: false,
                    debounceDelay: 100
                }
            },
            
            less : {
                files : [lessPat],
                tasks : ['less'],
                options: {
                    spawn: false,
                    debounceDelay: 100
                }
            },
            
            static : {
                files: ['es6/**/*.html', 'es6/**/*.js', 'es6/**/*.css'],
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
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-requirejs');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-eslint');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');
    // Default task(s).
    //grunt.registerTask('default', ['uglify']);
    grunt.registerTask('check', ['eslint']);
    grunt.registerTask('build', ['clean', 'babel', 'less', 'copy']);
    grunt.registerTask('default', ['watch']);
    //grunt.registerTask('default', ['babel', 'requirejs']);
};
