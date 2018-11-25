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
import Footer from './Footer'
import Home from './Home'
import Sites from './Sites'
//remove ToDo component once it's working in ProjectNavAndView
import ToDo from './projects/ToDo/ToDo'
import ProjectNavAndView from './ProjectNavAndView/ProjectNavAndView'


class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className={this.props.className}>
        <Header />
        <main>
          <Switch>
            <Route exact path='/home' component={Home} />
            <Route exact path='/sites' component={Sites} />
            <Route path='/projects' component={ProjectNavAndView} />
          </Switch>
        </main>
        <Footer />
      </div>
    )
  }
}


const StyledApp = styled(App)`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  min-height: 100vh;

main {
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
`


export default StyledApp;
