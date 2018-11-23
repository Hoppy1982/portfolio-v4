import React, { Component } from 'react'
import {
  BrowserRouter,
  Route,
  Link,
  Switch,
  Redirect,
} from 'react-router-dom'
import styled from 'styled-components'


import NotFound from './NotFound'
import Header from './Header'
import Home from './Home'
import Sites from './Sites'
import ToDo from './projects/ToDo/ToDo'


class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className={this.props.className}>
        <Header />
        <Switch>
          <Route path='/home' exact component={Home} />
          <Route path='/sites' exact component={Sites} />
          <Route path='/projects' exact component={ToDo} />
          <Route component={NotFound} />
        </Switch>
      </div>
    )
  }
}


const StyledApp = styled(App)`

`


export default StyledApp;
