import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Loadable from 'react-loadable'

const Loading = () => <div>Loading...</div>

const Home = Loadable({ loader: () => import(/* webpackChunkName: "Home" */'./Home'), loading: Loading })

export default function Root() {
    return <Router>
      <Switch>
        <Route path="/" exact><Home /></Route>
      </Switch>
    </Router>
}