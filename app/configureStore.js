import {createStore} from 'redux'
import todos from './reducers/reducer'
import {loadState, saveState} from './storage/localStorage'

const configureStore = () => {
  const persistedStore = loadState()
  const store = createStore(
    todos,
    persistedStore)
  store.subscribe(() => {
    (setTimeout(
      saveState({
        todoList: store.getState().todoList,
        currentTodoListId: store.getState().currentTodoListId})),
      1000)
  })
  return store
}

export default configureStore
