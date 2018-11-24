import React, { Component } from 'react'
import {
  BrowserRouter,
  Route,
  Switch,
} from 'react-router-dom'
import styled from 'styled-components'
import ProjectNav from './ProjectNav/ProjectNav'
import ToDo from './../projects/ToDo/ToDo'
import ProjectOne from './../projects/ParticleAlphabet/ProjectOne'


class ProjectNavAndView extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    console.log('ProjectNavAndView.render()')
    console.log(`match.path: ${this.props.match.path}`)
    console.log(`match.url: ${this.props.match.url}`)
    return(
      <div className={this.props.className}>
        <ProjectNav />
        <Switch>
          <Route path={`${this.props.match.path}/to-do-app`} component={ToDo}/>
          <Route path={`${this.props.match.path}/particle-alphabet`} component={ProjectOne}/>
        </Switch>
      </div>
    )
  }
}


const StyledProjectNavAndView = styled(ProjectNavAndView)`
`

export default StyledProjectNavAndView
