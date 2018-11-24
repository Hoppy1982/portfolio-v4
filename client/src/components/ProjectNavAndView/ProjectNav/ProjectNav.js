import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'
import styled from 'styled-components'


class ProjectNav extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return(
      <nav className={this.props.className}>
        <NavLink to='/projects/to-do-app'>ToDo App</NavLink>
        <NavLink to='/projects/particle-alphabet'>Particle Alphabet</NavLink>
        <NavLink to='/projects/world-bank-api'>Energy Data</NavLink>
      </nav>
    )
  }
}


const StyledProjectNav = styled(ProjectNav)`
`

export default StyledProjectNav
