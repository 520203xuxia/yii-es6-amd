let d3 = require('d3')
let template = require('text!./selection.html')
export default {
  template,
  data () {
    return {
      title: 'Selection',
      datas: []
    }
  },

  ready () {
    window.syntaxhighlighter.default.highlight()
  },

  methods: {
    select () {
      let items = d3.select('#selOne').data([1, 2])
      let result = items.append('li').text(d => d)
      result.classed('list-group-item', true)
      this.datas = result.data()
    },

    enterSelect () {
      //  这个append针对的是谁
      let items = d3.select('#selOne').data([1, 2]).enter().append('li').text(d => d)
      items.classed('list-group-item', true)
      this.datas = items.data()
    },

    exitSelect () {
      let items = d3.select('#selOne').data([1, 2]).exit().remove()
      this.datas = items.data()
    }
  }
}
