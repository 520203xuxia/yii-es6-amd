/**
 * Created by Huan on 7/17/16.
 */
let Vue = require('vue')  //  required library that don't need default
let template = <section v-text="message"></section>
/**
 * 系统应用主程序
 * @name app
 * @namespace app
 * @version 1.0
 */
 
export default {
  /**
   * 初始化应用程序
   * @function
   * @memberof app
   */
  init () {
    return new Vue({
      
    	template,
    	
    	data () {
    		return {
    			message : 'ok!'
    		}
    	},

      components: {
      }
    })
  }
}
