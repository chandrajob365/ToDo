const intialState = {
  todoList: {},
  currentTodoListId: 0
}

function todos (state = {}, action) {
  switch (action.type) {
    case 'ADD_TODO':
        let newToDoId = state.currentTodoListId
        return Object.assign(
          {},
          state,
          {
            [newToDoId + action.text]: {todo: action.text, id: (newToDoId + action.text)},
            currentTodoListId: ++newToDoId
          }
        )
    case 'DELETE_TODO':
      let todoListCopy = Object.assign({}, state)
      delete todoListCopy[action.id]
      return Object.assign({}, todoListCopy)
    default:
      return state
  }
}

export default todos
