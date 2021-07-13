import React,{Component} from 'react'
import {HashRouter as Router, Switch, Route } from 'react-router-dom'
import HomePage from './component/pages/HomePage'

export default class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact='/' component={HomePage} />
        </Switch>
      </Router>
    )
  }
}
