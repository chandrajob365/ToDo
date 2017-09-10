export let addToDo = (text) => (
  {
    type: 'ADD_TODO',
    text
  }
)

export let deleteTodo = () => (
  {
    type: 'DELETE_TODO'
  }
)

export let updateToDoStatus = (id, status) => (
  {
    type: 'UPDATE_STATUS',
    id,
    status
  }
)

export let visibilityFilter = (filter) => (
  {
    type: 'SET_VISIBILITY_FILTER',
    filter
  }
)
