import React, { Component } from 'react'
import { connect } from 'react-redux';
import { selectTodos } from '../reducers/todo-slice'

const d3 = require('d3'),
  cloud = require('d3-cloud')

class D3WordCluster extends Component {

  buildCloud = () => {
    const freqs = this.props.todos.reduce((acc, task) => {
      task.action.split(' ').forEach(word => {
        if (acc[word]) {
          acc[word] += 1
        }
        else {
          acc[word] = 1
        }
      })
      return acc
    }, {})
    const layout = cloud()
      .size([500, 500])
      .words(Object.entries(freqs).map(([word, count]) => {
        return { text: word, size: count * 35, test: "haha" }
      }))
      .padding(5)
      .rotate(function () { return ~~(Math.random() * 2) * 90; })
      .font("Impact")
      .fontSize(function (d) { return d.size; })
      .on("end", draw);

    layout.start();

    function draw(words) {
      d3.select("svg")
        .attr("width", layout.size()[0])
        .attr("height", layout.size()[1])
        .append("g")
        .attr("transform", "translate(" + layout.size()[0] / 2 + "," + layout.size()[1] / 2 + ")")
        .selectAll("text")
        .data(words)
        .enter().append("text")
        .style("font-size", function (d) { return d.size + "px"; })
        .style("font-family", "Impact")
        .attr("text-anchor", "middle")
        .attr("transform", function (d) {
          return "translate(" + [d.x, d.y] + ")rotate(" + d.rotate + ")";
        })
        .text(function (d) { return d.text; });
    }
  }

  componentDidMount() {
    this.buildCloud()
  }

  componentDidUpdate() {
    d3.selectAll("svg *").remove();
    this.buildCloud()
  }

  render() {
    return (<svg></svg>)
  }
}

const mapStateToProps = (state) => ({
  todos: selectTodos(state)
})
export default connect(mapStateToProps)(D3WordCluster);