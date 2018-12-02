import React, { Component } from 'react'
import styled from 'styled-components'
import ToDo from './ToDo'
import commonStyles from '../../../common-styles'


class ToDoContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return(
      <div className={this.props.className}>
        <h1>To Do App</h1>
        <ToDo />
      </div>
    )
  }
}


const StyledToDoContainer = styled(ToDoContainer)`
  ${commonStyles.defaultStyles}
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: 2em;
  padding-top: 1em;
  padding-bottom: 2em;
  border-top: solid ${commonStyles.colorOne} 8px;
  background-color: #267;
`

export default StyledToDoContainer
