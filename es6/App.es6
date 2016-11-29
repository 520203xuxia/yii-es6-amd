import Vue from 'vue'
import template from 'text!./app.html'
import 'css!/dest/css/base.css'
import asyn from './asyn'

let App = Vue.extend({
    
    template,
    
    data () {
        return {
            fluid : true,
            aside : false
        }
    },
    
    computed : {
        
        contClass () {
            return this.fluid ? 'container-fluid' : 'container'
        }
        
    },
    
    methods : {
        
        toggleFluid () {
            this.fluid = !this.fluid
        },
        
        toggleAside () {
            this.aside = !this.aside;
        },
        
        insert () {
            asyn(document.body);
            
            //$(document.body).load('/dest/script/script.html')
        }
        
    }
    
})

export default App