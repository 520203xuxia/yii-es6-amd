import template from 'text!./Comp1.html'
import Vue from 'vue'

let comp1 = Vue.extend({
    
    template,
    
    data () {
        return {
            message : 'C1',
            age     : 20
        }
    }
    
})

export { comp1 }
