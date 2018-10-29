import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './app'
import reducer from './store/reducers'

const store = createStore(reducer)

store.subscribe(() => {
  console.log('state:', store.getState())
})

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
document.getElementById('root'))
