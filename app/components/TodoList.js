import React from 'react'
import Todo from './Todo'
import FlatButton from 'material-ui/FlatButton'

class TodoList extends React.Component {
  constructor (props) {
    super(props)
  }
  render () {
    console.log('<TodoList.js render> this.props.state = ', this.props.state)
    let rows = []
    let todoList = this.props.state.todoList
    console.log('<TodoList>this.props.todoList = ', this.props.state.todoList)
    for (let todoObj in todoList) {
      if (todoList.hasOwnProperty(todoObj)) {
        rows.push(
          <Todo
          todoObj={todoList[todoObj]}
          key={todoList[todoObj].id}
          updateToDoStatus={this.props.onUpdateTodoStatus} />)
      }
    }
    let styles = {
      justifyContent: 'center',
      border: '1px solid black',
      margin: '20px'
    }

    return (
      <div style={styles}>
        {rows}
      <FlatButton label='ALL' disabled={true} />
      <FlatButton label='Active' disabled={true} />
      <FlatButton label='Completed' disabled={true} />
      <FlatButton label='Delete' secondary={true} onClick={this.props.ondeleteTodoClick}  />
      </div>
    )
  }
}

export default TodoList
