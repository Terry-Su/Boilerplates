import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Loadable from 'react-loadable'

const Loading = () => <div>Loading...</div>

const Home = Loadable({ loader: () => import(/* webpackChunkName: "Home" */'./Home'), loading: Loading })
const DevBook = Loadable({ loader: () => import(/* webpackChunkName: "DevBook" */'@src/components/DevBook'), loading: Loading })

export default function Root() {
    return <Router>
      <Switch>
        <Route path="/" exact><Home /></Route>
        <Route path="/dev-book" exact><DevBook /></Route>
      </Switch>
    </Router>
}