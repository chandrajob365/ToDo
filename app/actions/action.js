export let addToDo = (text) => {
  return {
    type: 'ADD_TODO',
    text
  }
}

export let deleteTodo = (id) => {
  return {
    type: 'DELETE_TODO',
    id
  }
}
