import React from 'react'
import { connect } from 'react-redux'

const App = ({ todos }) => (
  <div>
    {console.log('todos', todos)}
    <form>
      <input type='text' />
      <button>Cadastrar</button>
    </form>

    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          {todo.text}
        </li>
      ))}
    </ul>
  </div>
)

const mapStateToProps = (state) => ({
  todos: state
})

export default connect(mapStateToProps)(App)
