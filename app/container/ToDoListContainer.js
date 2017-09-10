import {connect} from 'react-redux'
import {
  deleteTodo,
  updateToDoStatus,
  visibilityFilter} from '../actions/action'
import TodoList from '../components/TodoList'

const getDataByFilter = (state) => {
  switch (state.filter) {
    case 'ACTIVE':
      return getActiveToDos(state)
    case 'COMPLETED':
      return getCompletedToDos(state)
    default:
      return state
  }
}

const getActiveToDos = (state) => {
  let ActiveToDos = {}
  for (let key in state.todoList) {
    if (state.todoList.hasOwnProperty(key)) {
      if (!state.todoList[key].completed) {
        Object.assign(ActiveToDos, {[key]: state.todoList[key]})
      }
    }
  }
  return { todoList: ActiveToDos, currentTodoListId: state.currentTodoListId, filter: 'ACTIVE' }
}

const getCompletedToDos = state => {
  let completedToDos = {}
  for (let key in state.todoList) {
    if (state.todoList.hasOwnProperty(key)) {
      if (state.todoList[key].completed) {
        Object.assign(completedToDos, {[key]: state.todoList[key]})
      }
    }
  }
  return { todoList: completedToDos, currentTodoListId: state.currentTodoListId, filter: 'COMPLETED' }
}

const mapStateToProps = (state) => (
  {
    state: getDataByFilter(state)
  }
)

const mapDispatchToProps = (dispatch) => (
  {
    ondeleteTodoClick () {
      dispatch(deleteTodo())
    },
    onUpdateTodoStatus (id, status) {
      dispatch(updateToDoStatus(id, status))
    },
    applyVisibilityFilter (filter) {
      dispatch(visibilityFilter(filter))
    }
  }
)

const ToDoListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)

export default ToDoListContainer
