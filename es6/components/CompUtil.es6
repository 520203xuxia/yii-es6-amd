export default function(datas, template, value, text) {
    let createTemp = function (value,text) {
        return `<h${value}>${text}</h${value}`;
    }
    return {
        data () {
            return datas
        },
        
        template: createTemp(value, text),
        
        methods : {
            init () {
                
            }
        }
    }
}