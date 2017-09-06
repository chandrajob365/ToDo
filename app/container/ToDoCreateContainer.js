import {connect} from 'react-redux'
import {addToDo} from '../actions/action'
import TodoCreate from '../components/TodoCreate'

const mapDispatchToProps = dispatch => {
  return {
    onAddToDoClick: todo => {
      dispatch(addToDo(todo))
    }
  }
}

const ToDoCreateContainer = connect(
  mapDispatchToProps
)(TodoCreate)

export default ToDoCreateContainer
