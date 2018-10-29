import deepFreeze from 'deep-freeze'
import todos from './index'
import { ADD_TODO, TOGGLE_TODO } from './actions'

describe('smoke testings', () => {
  it('should todos to be a function', () => (
    expect(typeof todos).toBe('function')
  ))

  it('should returns initial state when call todos without params', () => {
    expect(todos()).toEqual([])
  })
})

describe('add action', () => {
  it('should add a todo item', () => {
    const before = deepFreeze([])
    const action = {
      type: ADD_TODO,
      payload: { id: 0, text: 'First todo' }
    }
    const after = deepFreeze([{ id: 0, text: 'First todo' }])
    expect(todos(before, action)).toEqual(after)
  })

  it('should add another todo item', () => {
    const before = deepFreeze([{ id: 0, text: 'First todo' }])
    const action = {
      type: ADD_TODO,
      payload: { id: 2, text: 'Second todo' }
    }
    const after = [
      { id: 0, text: 'First todo' },
      { id: 2, text: 'Second todo' }
    ]
    expect(todos(before, action)).toEqual(after)
  })
})

describe('toggle action', () => {
  it('should toggle a todo item by id', () => {
    const before = deepFreeze([{ id: 0, text: 'First todo', completed: false }])
    const action = {
      type: TOGGLE_TODO,
      payload: { id: 0 }
    }
    const after = deepFreeze([{ id: 0, text: 'First todo', completed: true }])
    expect(todos(before, action)).toEqual(after)
  })

  it('should toggle another todo item by id', () => {
    const before = deepFreeze([
      { id: 0, text: 'First todo', completed: false },
      { id: 1, text: 'First todo', completed: false }
    ])
    const action = {
      type: TOGGLE_TODO,
      payload: { id: 1 }
    }
    const after = deepFreeze([
      { id: 0, text: 'First todo', completed: false },
      { id: 1, text: 'First todo', completed: true }
    ])
    expect(todos(before, action)).toEqual(after)
  })
})
