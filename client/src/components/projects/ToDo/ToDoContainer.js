import React, { Component } from 'react'
import styled from 'styled-components'
import ToDo from './ToDo'
import ToDoProjectDesc from './ToDoProjectDesc'
import commonStyles from '../../../common-styles'


class ToDoContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return(
      <div className={this.props.className}>
        <h2>To Do App With Persistant Storage</h2>
        <ToDoProjectDesc />
        <ToDo />
      </div>
    )
  }
}


const StyledToDoContainer = styled(ToDoContainer)`
  ${commonStyles.defaultStyles}
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: 2em;
  padding-top: 1em;
  padding-bottom: 2em;
  border-top: solid ${commonStyles.colorOne} 8px;
  background-color: #267;

  h2 {
    flex: 0 0 100%;
    padding-top: 1.5em;
    text-align: center;
  }

  @media only screen
    and (min-device-width: 1200px)
    and (min-width: 1200px) {
      flex-direction: row;
      flex-wrap: wrap;
      align-items: flex-start;
    }
`

export default StyledToDoContainer
