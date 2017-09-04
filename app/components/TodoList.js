const React = require('react')
const ReactDOM = require('react-dom')
const Todo = require('./Todo')

class TodoList extends React.Component {
  constructor (props) {
    super(props)
  }

  render (props) {
    let rows = []
    console.log('<TodoList, render > this.props.todoList = ', this.props.todoList)
    if (this.props.todoList) {
      this.props.todoList.forEach(todoObj => {
        let key = Object.keys(todoObj)
        console.log('<TodoList, render > key = ', Object.keys.call(this.props.todoList, todoObj), '\ntodoObjId = ', todoObj)
        rows.push(<Todo
              todoObj={todoObj}
              deleteTodo={this.props.deleteTodo} />)
      })
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

module.exports = TodoList
