import React from 'react'
// import ReactDOM from 'react-dom'
// import {addToDo} from './actions/action'
// import store from './store/store'

class TodoCreate extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      value: ''
    }
    this.handleChange = this.handleChange.bind(this)
    // this.createNewToDo = this.createNewToDo.bind(this)
  }

  handleChange (event) {
    this.setState({
      value: event.target.value
    })
  }

  // createNewToDo (event) {
  //   console.log('<TodoCreate, createNewToDo> this.state.value = ', this.state.value)
  //   console.log('<TodoCreate, createNewToDo> this.refs.item.value = ', this.refs.item.value)
  //   store.dispatch(addToDo(this.refs.item.value))
  //   this.setState({
  //     value: ''
  //   })
  //   ReactDOM.findDOMNode(this.refs.item).focus()
  // }

  render (props) {
    console.log('props = ', props)
    return (
      <div>
        <input type='text' ref='item' name='todo' value={this.state.value} onChange={this.handleChange} />
        <button onClick={this.props.onAddToDoClick(this.state.value)}>Create</button>
      </div>
    )
  }
}

export default TodoCreate
