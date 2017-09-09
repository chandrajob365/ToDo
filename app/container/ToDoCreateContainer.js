import {connect} from 'react-redux'
import {addToDo} from '../actions/action'
import TodoCreate from '../components/TodoCreate'

const mapDispatchToProps = dispatch => {
  return {
    onAddToDoClick: todoText => {
      if (todoText.length > 0) {
        dispatch(addToDo(todoText))
      }
    }
  }
}

const ToDoCreateContainer = connect(
  undefined,
  mapDispatchToProps
)(TodoCreate)

export default ToDoCreateContainer
