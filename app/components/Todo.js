import React from 'react'
// import ReactDOM from 'react-dom'
// import {deleteTodo} from './actions/action'
// import store from './store/store'

class Todo extends React.Component {
  // constructor (props) {
  //   super(props)
  //   this.deleteTodo = this.deleteTodo.bind(this)
  // }
  //
  // deleteTodo (e) {
  //   store.dispatch(deleteTodo())
  // }

  render (props) {
    return (
      <tr>
        <td onClick={this.props.onClick}>{this.props.todoObj.todo}</td>
      </tr>
    )
  }
}

export default Todo
