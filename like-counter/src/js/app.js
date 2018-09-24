import { createStore } from 'redux'
import { increment, decrement } from './actions'

const reducer = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT': return state + 1;
    case 'DECREMENT': return state !== 0 ? state - 1 : 0;
  };
  return state
}

const store = createStore(reducer)

const $counter = document.querySelector('[data-js="counter"]')
const $increment = document.querySelector('[data-js="increment"]')
const $decrement = document.querySelector('[data-js="decrement"]')

$increment.addEventListener('click', () => store.dispatch(increment()))
$decrement.addEventListener('click', () => store.dispatch(decrement()))

const render = () => $counter.textContent = store.getState()
render()
store.subscribe(render)
