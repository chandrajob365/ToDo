import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import TodoHeader from './TodoHeader'
import ToDoCreateContainer from '../container/ToDoCreateContainer'
import ToDoListContainer from '../container/ToDoListContainer'
import Footer from './Footer'

const App = () => (
  <div>
    <MuiThemeProvider >
      <div>
        <TodoHeader />
        <ToDoCreateContainer />
        <ToDoListContainer />
        <Footer />
      </div>
    </MuiThemeProvider>
  </div>
)

export default App
