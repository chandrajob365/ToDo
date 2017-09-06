import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import todos from './reducers/reducer'
import App from './components/App'

let store = createStore(todos)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
