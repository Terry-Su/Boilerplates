import React from 'react'
import Home from './Home'
import {hot} from 'react-hot-loader/root'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import app from './reducers/app'

const store = createStore(app)

function App() {
    return <Provider store={store}><Home /></Provider>
}

export default hot(App)