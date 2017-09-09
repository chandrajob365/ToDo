import {connect} from 'react-redux'
import {
  deleteTodo,
  updateToDoStatus,
  showAll,
  showActive,
  showCompleted} from '../actions/action'
import TodoList from '../components/TodoList'
const mapStateToProps = (state) => {
  console.log('<ToDoListContainer, mapStateToProps> -------- state = ', state)
  return {
    state: state
  }
}

const mapDispatchToProps = (dispatch) => {
  console.log('<ToDoListContainer, mapDispatchToProps> dispatch = ', dispatch)
  return {
    ondeleteTodoClick: () => {
      console.log('<<ToDoListContainer, mapDispatchToProps , ondeleteTodoClick> Entry ')
      console.log('ToDoListContainer, mapDispatchToProps> call to dispatch -> ', dispatch(deleteTodo()))
    },
    onUpdateTodoStatus: (id, status) => {
      console.log('<ToDoListContainer, mapDispatchToProps- onUpdateTodoStatus>, id = ', id, '  status = ', status)
      dispatch(updateToDoStatus(id, status))
    }
    // onShowAllTodoClick: () => {
    //   console.log('<<ToDoListContainer, mapDispatchToProps , onShowAllTodoClick> Entry ')
    //   console.log('ToDoListContainer, mapDispatchToProps> call to dispatch -> ', dispatch(showAll()))
    // },
    // onShowActiveTodoClick: () => {
    //   console.log('<<ToDoListContainer, mapDispatchToProps , onShowActiveTodoClick> Entry ')
    //   console.log('ToDoListContainer, mapDispatchToProps> call to dispatch -> ', dispatch(showActive()))
    // },
    // onShowCompletedTodoClick: () => {
    //   console.log('<<ToDoListContainer, mapDispatchToProps , onShowCompletedTodoClick> Entry ')
    //   console.log('ToDoListContainer, mapDispatchToProps> call to dispatch -> ', dispatch(showCompleted()))
    // }
  }
}

const ToDoListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)

export default ToDoListContainer
