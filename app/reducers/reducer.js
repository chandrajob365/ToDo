function todos (state = {}, action) {
  console.log('state = ', state, '  action = ', action)
  switch (action.type) {
    case 'ADD_TODO':
      let newToDoId = state.currentTodoListId || 0
      return {
        ...state,
        todoList: {
          ...state.todoList,
          [newToDoId + action.text]: {todo: action.text, id: (newToDoId + action.text), completed: false}
        },
        currentTodoListId: ++newToDoId,
        filter: 'ALL'
      }
    case 'DELETE_TODO':
      let todoListCopy = Object.assign({}, state)
      for (let key in todoListCopy.todoList) {
        if (todoListCopy.todoList.hasOwnProperty(key)) {
          if (todoListCopy.todoList[key].completed) {
            delete todoListCopy.todoList[key]
          }
        }
      }
      return todoListCopy
    case 'UPDATE_STATUS':
      return {
        ...state,
        todoList: {
          ...state.todoList,
          [action.id]: {
            ...state.todoList[action.id],
            completed: action.status
          }
        }

      }
    case 'SET_VISIBILITY_FILTER':
      return {
        ...state,
        filter: action.filter
      }
    default:
      return state
  }
}

export default todos
