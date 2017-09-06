import React from 'react'
import Todo from './Todo'

class TodoList extends React.Component {

  render (props) {
    let rows = []
    let todoList = this.props.todoList
    if (todoList) {
      for (let todoObj in todoList) {
        if (todoList.hasOwnProperty(todoObj)) {
          rows.push(<Todo
            todoObj={todoList[todoObj]}
            key={todoList[todoObj].id}
            deleteTodo={() => this.props.ondeleteTodoClick(todoList[todoObj].id)} />)
        }
      }
    }
    let styles = {
      display: 'flex',
      justifyContent: 'center',
      border: '1px solid black',
      margin: '20px'
    }

    return (
      <div>
        <table style={styles}>
          <tbody>{rows}</tbody>
        </table>
      </div>
    )
  }
}

export default TodoList
