import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'
import styled from 'styled-components'
import commonStyles from '../../../common-styles'


class ProjectNav extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return(
      <nav className={this.props.className}>
        <NavLink className='navLink' to='/projects/particle-alphabet'>Particle Alphabet</NavLink>
        <NavLink className='navLink' to='/projects/world-bank-api'>Energy Data</NavLink>
        <NavLink className='navLink firstNavLink' to='/projects/to-do-app'>ToDo App</NavLink>
      </nav>
    )
  }
}


const StyledProjectNav = styled(ProjectNav)`
  ${commonStyles.defaultStyles}

  border: solid ${commonStyles.colorOne} 6px;
  display: flex;
  box-sizing: content-box;
  height: 6em;
  flex: 0 0 auto;
  overflow-x: scroll;
  flex-direction: row;
  flex-wrap: nowrap;
  width: calc( 100% - 12px );

  .navLink {
    flex: 0 0 auto;
    box-sizing: border-box;
    border: solid #9cafce;
    border-width: 4px 4px 4px 0px;
    background-color: #222;
    color: #fff;
    width: 180px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    font-size: 1.2em;
    transition: all 0.5s;
  }

  .firstNavLink {
    border-left-width: 4px;
  }

  .navLink:hover {
    background-color: #444;
    color: #bbb;
    font-size: 1.4em;
  }

  @media only screen and (min-width: 480px) {
    max-width: 480px;
  }
`

export default StyledProjectNav
