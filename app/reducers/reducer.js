const intialState = {
  todoList: {},
  currentTodoListId: 0
}

function todos (state = intialState, action) {
  console.log('<reducer.js Entry>------state = ', state, '  -----------action = ', action)
  switch (action.type) {
    case 'ADD_TODO':
        let newToDoId = state.currentTodoListId
        return {
          ...state,
          todoList : {
            ...state.todoList,
            [newToDoId + action.text]: {todo: action.text, id: (newToDoId + action.text), completed: false}
          },
          currentTodoListId: ++newToDoId
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
      console.log('<reducer.js , DELETE_TODO>After Del todoListCopy = ', todoListCopy)
      return todoListCopy
    case 'UPDATE_STATUS':
      console.log('<reducer.js, todos - UPDATE_STATUS > ------state = ', state, '  -----------action = ', action)
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
    case 'ALL':
      return state
    case 'ACTIVE':
      // let stateCpy = Object.assign({}, state)
      let ActiveToDos = {}
      for (let key in state.todoList) {
        if (state.todoList.hasOwnProperty(key)) {
          if (!state.todoList[key].completed) {
            Object.assign(ActiveToDos, {key: state.todoList[key]})
          }
        }
      }
      return { todoList: ActiveToDos, currentTodoListId: state.currentTodoListId }
    case 'COMPLETED':
      let completedToDos = {}
      for (let key in state.todoList) {
        if (state.todoList.hasOwnProperty(key)) {
          if (state.todoList[key].completed) {
            Object.assign(completedToDos, {key: state.todoList[key]})
          }
        }
      }
      return { todoList: completedToDos, currentTodoListId: state.currentTodoListId }
    default:
      return state
  }
}

export default todos
