import React from 'react'
import Checkbox from 'material-ui/Checkbox'

const styles = {
  block: {
    maxWidth: 250,
  },
  checkbox: {
    marginBottom: 16,
  },
}

class Todo extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      checked: this.props.todoObj.complete
    }
    this.updateCheck = this.updateCheck.bind(this)
  }

  updateCheck (id) {
    this.setState((oldState) => {
      return {
        checked: !oldState.checked
      }
    })
    console.log('<todo.js updateCheck> id = ', id, '  !this.props.todoObj.completed = ', !this.props.todoObj.completed)
    this.props.updateToDoStatus(id, !this.props.todoObj.completed)
  }

  render (props) {
    console.log('props = ', this.props)
    return (
      <div >
        <Checkbox
          label={this.props.todoObj.todo}
          checked={this.state.checked}
          onCheck={() => { this.updateCheck(this.props.todoObj.id) }}
          style={styles.checkbox} />
      </div>
    )
  }
}

export default Todo
