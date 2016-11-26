import Vue from 'vue'
import template from 'text!./app.html'
import 'css!/dest/css/base.css'

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
        }
        
    }
    
})

export default App