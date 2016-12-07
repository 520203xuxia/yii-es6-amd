import template from 'text!./Comp1.html'
import Vue from 'vue'
import 'css!default'

let comp1 = Vue.extend({
    
    template,
    
    data () {
        return {
            message : 'C1',
            age     : 20
        }
    },
    
    mounted () {
        console.debug(this.$el.getBoundingClientRect())
    }
    
})

export { comp1 }
