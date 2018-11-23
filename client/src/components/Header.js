import React, { Component } from 'react'
import styled from 'styled-components'

import LogoOne from './LogoOne'
import Nav from './Nav'

import {
  Route
} from 'react-router-dom'

class Header extends Component {
  constructor(props) {
    super(props)

    this.handleRouteChange = this.handleRouteChange.bind(this)
  }

  handleRouteChange() {
    setTimeout(() => {
      this.refs.bottomLine.classList.remove('bottomLineWide')
    }, 10)

    setTimeout(() => {
      this.refs.bottomLine.classList.add('bottomLineWide')
    }, 500)
  }

  componentDidMount() {
    this.handleRouteChange()
  }


  render() {
    return (
      <header className={this.props.className}>
        <LogoOne />
        <div ref={"bottomLine"} className="bottomLine"></div>
        <Nav />
        <Route onChange={this.handleRouteChange()}/>
      </header>
    )
  }
}


const StyledHeader = styled(Header)`
  box-sizing: border-box;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 1em;
  flex: 0 0 auto;
  font-family: lato;
  background: #222;

  .bottomLine {
    height: 2px;
    background: #fff;
    margin-top: 1em;
    width: 0%;
  }

  .bottomLineWide {
    transition: width 1.5s;
    width: 100%;
  }
`


export default StyledHeader
