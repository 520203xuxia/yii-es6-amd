import Vue from 'vue'
import template from 'text!./app.html'
import 'css!/dest/css/base.css'
import 'jquery'
import { comp1 } from './components/Comp1'
import comp2 from './components/Comp2'

let App = Vue.extend({
    
    template,
    
    data () {
        return {
            fluid : true,
            aside : false
        }
    },
    
    components : {
        comp1,
        comp2
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
            require(['asyn'], function(asyn) {
                asyn('body')
            }) 
           
        }
        
    }
    
})

export default App