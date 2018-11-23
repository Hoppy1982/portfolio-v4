import React, { Component } from 'react'
import {
  NavLink
} from 'react-router-dom'
import styled from 'styled-components'

class Nav extends Component {
  render() {
    return(
      <nav className={this.props.className}>
        <NavLink to='/home' activeClassName='active' exact={true} className='navbar__link'>Home</NavLink>
        <NavLink to='/sites' activeClassName='active' className='navbar__link'>Sites</NavLink>
        <NavLink to='/projects' activeClassName='active' className='navbar__link'>Labs</NavLink>
      </nav>
    )
  }
}


const StyledNav = styled(Nav)`
  box-sizing: border-box;
  background: #222;
  width: 100%;
  margin-top: 2em;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: flex-end;
  height: 100%;


  .navbar__link {
    flex: 0 1 auto;
    list-style: none;
    height: 2em;
    line-height: 2em;
    margin-left: 8px;
    margin-right: 8px;
    background: #ddd;
    color: #222;
    font-weight: 600;
    width: 10em;
    text-align: center;
    border-top: solid transparent 4px;
    border-right: solid transparent 4px;
    border-left: solid transparent 4px;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    text-decoration: none;
  }

  .navbar__link:hover {
    cursor: pointer;
    border-top: solid #9cafce 4px;
    border-right: solid #9cafce 4px;
    border-left: solid #9cafce 4px;
  }

  .active {
    background: white;
    border-top: solid #9cafce 4px;
    border-right: solid #9cafce 4px;
    border-left: solid #9cafce 4px;
  }
`


export default StyledNav
