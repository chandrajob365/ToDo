import React from 'react'
import TodoHeader from './TodoHeader'
import ToDoCreateContainer from '../container/ToDoCreateContainer'
import ToDoListContainer from '../container/ToDoListContainer'

const App = () => (
  <div>
    <TodoHeader />
    <ToDoCreateContainer />
    <ToDoListContainer />
  </div>
)

export default App
