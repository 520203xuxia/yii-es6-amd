requirejs.config({
    
    baseUrl: '/dest/script',
   
    packages: [{
		name: 'css',
		location: '../node_modules/require-css',
		main: 'css'
	} ,{ 
		name: 'jquery',
		location: '../node_modules/jquery/dist',
		main: 'jquery'
	}, { 
		name: 'require',
		location: '../node_modules/requirejs',
		main: 'require'
	} ,{
		name: 'text',
		location: '../node_modules/text',
		main: 'text'
	} ,{ 
		name: 'vue',
		location: '../node_modules/vue/dist',
		main: 'vue'
	}]
    
});

require(['App'], function(App) {
    
    new App.default({
        
        el : 'main#appRoot'
        
    });
})