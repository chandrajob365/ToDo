const React = require('react')
const ReactDOM = require('react-dom')

class TodoCreate extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      value: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.createNewToDo = this.createNewToDo.bind(this)
  }

  handleChange (event) {
    this.setState({
      value: event.target.value
    })
  }

  createNewToDo (event) {
    console.log('<TodoCreate, createNewToDo> this.state.value = ', this.state.value)
    this.props.updateToDoList(this.state.value)
    this.setState({
      value: ''
    })
    ReactDOM.findDOMNode(this.refs.item).focus()
  }

  render (props) {
    return (
      <div>
        <input type='text' ref='item' name='todo' value={this.state.value} onChange={this.handleChange} />
        <button onClick={this.createNewToDo}>Create</button>
      </div>
    )
  }
}

module.exports = TodoCreate
