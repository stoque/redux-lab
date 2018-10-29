import { ADD_TODO, TOGGLE_TODO } from './actions'

export const initialState = [ {id: 1, text: 'First Todo'} ]

const todos = (state = initialState, action = {}) => {
  switch (action.type) {
    case ADD_TODO:
      return [ ...state, action.payload ]

    case TOGGLE_TODO:
      return state.map(todo => {
        if (todo.id !== action.payload.id) {
          return todo
        }
        return {
          ...todo,
          completed: !todo.completed
        }
      })

    default:
      return state
  }
}

export default todos
