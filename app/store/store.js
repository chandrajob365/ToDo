import {createStore} from 'redux'
import todos from './reducers/reducers'

export let store = createStore(todos)
