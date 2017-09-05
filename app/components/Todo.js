const React = require('react')
const ReactDOM = require('react-dom')

class Todo extends React.Component {
  constructor (props) {
    super(props)
    this.deleteTodo = this.deleteTodo.bind(this)
  }

  deleteTodo (e) {
    this.props.deleteTodo(this.props.todoObj.id)
  }

  render (props) {
    return (
      <tr>
        <td onClick={this.deleteTodo}>{this.props.todoObj.todo}</td>
      </tr>
    )
  }
}

module.exports = Todo
