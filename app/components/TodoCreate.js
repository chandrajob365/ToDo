import React from 'react'
import ReactDOM from 'react-dom'
import TextField from 'material-ui/TextField'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import ContentAdd from 'material-ui/svg-icons/content/add'

class TodoCreate extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      value: ''
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (event) {
    this.setState({
      value: event.target.value
    })
  }

  render (props) {
    console.log('props = ', this.props)
    return (
      <div>
        <TextField floatingLabelText='Enter Todo'
          ref='item' name='todo' value={this.state.value} onChange={this.handleChange} />
        <FloatingActionButton mini onClick={() => {
          this.props.onAddToDoClick(this.state.value)
          this.setState({
            value: ''
          })
          ReactDOM.findDOMNode(this.refs.item).focus()
        }}>
          <ContentAdd />
        </FloatingActionButton>

      </div>
    )
  }
}

export default TodoCreate
