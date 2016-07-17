/**
 * Created by Huan on 7/17/16.
 */
import user from './commons/user'
let d3 = require('d3')  //  required library that don't need default
export default {

    init () {
        user.name = 'Gan Huan'
        console.log(user.username)
        d3.select('body').append('h1').text(user.name)
    },

    render () {
    }
}
