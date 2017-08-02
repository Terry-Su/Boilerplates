import Inferno from 'inferno'
import { render } from 'inferno'
import App from '../component/App.js'
// redux
import { Provider } from 'inferno-redux'
import { createStore } from 'redux'
import reducer from '../reducer/index'

let store = createStore(reducer)

render(
  <Provider store={ store }>
    <App />
  </Provider>,
  document.getElementById('app')
)