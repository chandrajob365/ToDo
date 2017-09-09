import React from 'react'
import Todo from './Todo'
import FlatButton from 'material-ui/FlatButton'

class TodoList extends React.Component {
  render (props) {
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
        <FlatButton label='ALL' primary onClick={this.props.onShowAllTodoClick}
          backgroundColor={this.props.state.filter === 'ALL' ? '#BDBDBD' : '#ECEFF1'} />
        <FlatButton label='Active' primary onClick={this.props.onShowActiveTodoClick}
          backgroundColor={this.props.state.filter === 'ACTIVE' ? '#BDBDBD' : '#ECEFF1'} />
        <FlatButton label='Completed' primary onClick={this.props.onShowCompletedTodoClick}
          backgroundColor={this.props.state.filter === 'COMPLETED' ? '#BDBDBD' : '#ECEFF1'} />
        <FlatButton label='Delete Completed' secondary onClick={this.props.ondeleteTodoClick} />
      </div>
    )
  }
}

export default TodoList
