const React = require('react')
const ReactDOM = require('react-dom')

class Todo extends React.Component {
  constructor (props) {
    super(props)
    console.log('<TODO constructor>')
    this.deleteTodo = this.deleteTodo.bind(this)
  }

  deleteTodo (e) {
    console.log('<Todo, deleteTodo> Entry this.props.id = ', this.props.id)
    this.props.deleteTodo(this.props.id)
  }

  render (props) {
    // console.log('<Todo, render> this.props.id=', this.props.id)
    let key = Object.keys(this.props.todoObj)
    console.log('<Todo, render> key = ', key)
    return(
      <tr>
        <td>{this.props.todoObj[key].todo}</td>
        <td onClick={this.deleteTodo}
            style={{padding: '5px', border: '1px solid red', background: 'red'}}>
            Delete
        </td>
      </tr>
    )
  }
}

module.exports = Todo
