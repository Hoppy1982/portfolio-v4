import React, { Component } from 'react'
import {
  NavLink
} from 'react-router-dom'
import styled from 'styled-components'
import commonStyles from '../common-styles'

class Nav extends Component {
  render() {
    return(
      <nav className={this.props.className}>
        <NavLink to='/home' activeClassName='active' exact={true} className='navbar__link'>Home</NavLink>
        <NavLink to='/about' activeClassName='active' exact={true} className='navbar__link'>About</NavLink>
        <NavLink to='/projects' activeClassName='active' className='navbar__link'>Projects</NavLink>
        <NavLink to='/experiments' activeClassName='active' className='navbar__link'>Experiments</NavLink>
      </nav>
    )
  }
}


const StyledNav = styled(Nav)`
  box-sizing: border-box;
  background: ${commonStyles.colorOne};
  width: 100%;
  margin-top: 2em;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: flex-end;
  height: 100%;


  .navbar__link {
    flex: 0 1 180px;
    list-style: none;
    height: 2em;
    font-size: calc(0.7em + 1vw);
    line-height: 2em;
    margin-left: 6px;
    margin-right: 6px;
    background: #ddd;
    color: ${commonStyles.colorOne};
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
