export const ADD_TODO = 'ADD_TODO'
export const TOGGLE_TODO = 'TOGGlE_TODO'

export const addTodo = (id, text) => ({
  type: ADD_TODO,
  payload: { id, text }
})

export const toggeTodo = (id) => ({
  type: TOGGLE_TODO,
  payload: { id }
})
