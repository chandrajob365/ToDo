export let addToDo = (text) => {
  console.log('<action.js addToDo> text = ', text)
  return {
    type: 'ADD_TODO',
    text
  }
}

export let deleteTodo = () => {
  return {
    type: 'DELETE_TODO'
  }
}

export let updateToDoStatus = (id, status) => {
  console.log('<action.js updateToDoStatus> id = ', id, '  status = ', status)
  return {
    type: 'UPDATE_STATUS',
    id,
    status
  }
}

export let visibilityFilter = (filter) => {
  return {
    type: filter
  }
}
