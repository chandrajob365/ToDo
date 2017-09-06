import {connect} from 'react-redux'
import {deleteTodo} from '../actions/action'
import TodoList from '../components/TodoList'

const mapStateToProps = (state) => {
  return {
    todoList: state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    ondeleteTodoClick: id => {
      dispatch(deleteTodo(id))
    }
  }
}

const ToDoListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)

export default ToDoListContainer
