const React = require('react')
const ReactDOM = require('react-dom')
const TodoHeader = require('./components/TodoHeader')
const TodoCreate = require('./components/TodoCreate')
const TodoList = require('./components/TodoList')

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      todoList: [],
      currentTodoListId: 0
    }
    this.updateToDoList = this.updateToDoList.bind(this)
  //  this.getLastTodoId = this.getLastTodoId.bind(this)
    this.deleteTodo = this.deleteTodo.bind(this)
  }

  // getLastTodoId () {
  //   let len = this.state.todoList.length
  //   if (len !== 0) {
  //     let id = this.state.todoList[len - 1].id
  //     let matched = id.match(/^[0-9]+/)
  //     console.log('<index.js, getLastTodoId> matched = ', matched)
  //     return matched[0]
  //   }
  //   return 0
  // }

  updateToDoList (newTodo) {
    console.log('<updateToDoList> tonewTododo = ', newTodo)
    // let newTodoId = (this.getLastTodoId() + 1) + newTodo
    let newTodoId = ++this.state.currentTodoListId + newTodo
    this.setState(
      {
        todoList: [...this.state.todoList, {[newTodoId]: {todo: newTodo, id: newTodoId}}],
        currentTodoListId: newTodoId
      }
    )
  }

  deleteTodo (todoId) {
    let newTodoList = this.state.todoList.slice()
    console.log('<index.js deleteTodo> newTodoList = ', newTodoList)
    console.log('<index.js deleteTodo> newTodoList[Object.keys] = ', newTodoList[todoId])
    // newTodoList.slice(newTodoList.indexOf(newTodoList[todoId]), 1)
    // this.setState({
    //   todoList: [...this.state.todoList, newTodoList]
    // })
    console.log('<index.js, deleteTodo> this.state.todoList = ', this.state.todoList)
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
