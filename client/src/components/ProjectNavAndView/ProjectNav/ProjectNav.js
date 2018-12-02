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
      <div className={this.props.className}>
        <div className='leftButton button'>
          <p>left</p>
        </div>
        <div className='rightButton button'>
          <p>right</p>
        </div>
        <nav>
          <NavLink to='/projects/to-do-app'>ToDo App</NavLink>
          <NavLink to='/projects/particle-alphabet'>Particle Alphabet</NavLink>
          <NavLink to='/projects/world-bank-api'>Energy Data</NavLink>
        </nav>
      </div>
    )
  }
}


const StyledProjectNav = styled(ProjectNav)`
  border: solid #222 3px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;

  width: 100%;
  height: 6em;
  box-sizing: border-box;
  margin: 0px;
  padding: 0px;

  .button {
    box-sizing: border-box;
    border: solid red 2px;
    width: 50%;
  }

  .leftButton {
    order: 1;
  }

  .rightButton {
    order: 2;
  }

  nav {
    box-sizing: border-box;
    flex: 1 1 auto;
    order: 3;
    border: solid green 2px;
  }


  @media only screen and (min-width: 480px) {
    flex-wrap: nowrap;
    max-width: 680px;

    .button {

    }

    .leftButton {
      order: 1;
    }

    .rightButton {
      order: 3;
    }

    nav {
      order: 2;
    }
  }
`

export default StyledProjectNav
