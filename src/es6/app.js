/**
 * Created by Huan on 7/17/16.
 */
import selection from 'd3l/selection'
let Vue = require('vue')  //  required library that don't need default
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
      el: 'body',

      components: {
        selection
      }
    })
  }
}
