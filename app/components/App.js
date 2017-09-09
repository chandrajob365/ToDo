import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import TodoHeader from './TodoHeader'
import ToDoCreateContainer from '../container/ToDoCreateContainer'
import ToDoListContainer from '../container/ToDoListContainer'

const App = () => (
  <div>
    <MuiThemeProvider >
      <div>
        <TodoHeader />
        <ToDoCreateContainer />
        <ToDoListContainer />
      </div>
    </MuiThemeProvider>
  </div>
)

export default App
