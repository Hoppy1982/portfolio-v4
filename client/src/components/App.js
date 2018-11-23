import React, { Component } from 'react'
import {
  BrowserRouter,
  Route,
  Link,
  Switch,
  Redirect,
} from 'react-router-dom'
import ToDo from './projects/ToDo/ToDo'
import NotFound from './NotFound'
import Header from './Header'


class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className={this.props.className}>
        <Header />
        <Switch>
          <Route path='/' component={ToDo} />
          <Route component={NotFound} />
        </Switch>
      </div>
    )
  }
}


export default App;
