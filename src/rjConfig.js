/**
 * Created by Huan on 7/17/16.
 */
requirejs.config({

	baseUrl: 'dist/js',
	paths: {
		'syntaxhighlighter': '../../asset/syntaxhighlighter'
	},
	//path
	//packages
	packages: [{
		name: 'd3',
		location: '../../bower_components/d3',
		main: 'd3'
	},{
		name: 'text',
		location: '../../bower_components/text',
		main: 'text'
	},{
		name: 'vue',
		location: '../../bower_components/vue/dist',
		main: 'vue'
	}]

})
