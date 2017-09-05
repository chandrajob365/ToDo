const React = require('react')
const ReactDOM = require('react-dom')
const TodoHeader = require('./components/TodoHeader')
const TodoCreate = require('./components/TodoCreate')
const TodoList = require('./components/TodoList')

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      todoList: {},
      currentTodoListId: 0
    }
    this.updateToDoList = this.updateToDoList.bind(this)
    this.deleteTodo = this.deleteTodo.bind(this)
  }

  updateToDoList (newTodo) {
    let newTodoId = ++this.state.currentTodoListId
    this.setState(
      {
        todoList: Object.assign({}, this.state.todoList, {[newTodoId + newTodo]: {todo: newTodo, id: (newTodoId + newTodo)}}),
        currentTodoListId: newTodoId
      }
    )
  }

  deleteTodo (todoId) {
    let todoListCopy = Object.assign({}, this.state.todoList)
    delete todoListCopy[todoId]
    this.setState({
      todoList: Object.assign({}, todoListCopy)
    })
  }

  render () {
    console.log('<index.js, render> Entry')
    return (
      <div>
        <TodoHeader />
        <TodoCreate updateToDoList={this.updateToDoList} />
        <TodoList todoList={this.state.todoList} deleteTodo={this.deleteTodo} />
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
)
