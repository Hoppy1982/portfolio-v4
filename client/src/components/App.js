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
            <Route exact path='/' component={Home} />
          </Switch>
        </main>
        <Footer />
      </div>
    )
  }
}


const StyledApp = styled(App)`
   @font-face {
    font-family: 'Lato';
    font-style: normal;
    font-weight: 400;
    src: local('Lato Regular'), local('Lato-Regular'), url(https://fonts.gstatic.com/s/lato/v14/S6uyw4BMUTPHjx4wXg.woff2) format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  }

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
