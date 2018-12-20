import React, { Component } from 'react'
import styled from 'styled-components'
import ToDo from './ToDo'
import ToDoProjectDesc from './ToDoProjectDesc'
import CodeLink from '../../CodeLink'
import TechUsed from '../../TechUsed'
import commonStyles from '../../../common-styles'


class ToDoContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return(
      <div className={this.props.className}>
        <div className='title-and-link'>
          <h2>To Do App With Persistant Storage</h2>
          <CodeLink url='https://github.com/Hoppy1982/portfolio-v4/tree/master/client/src/components/projects/ToDo' />
          <TechUsed techs={[
            {name: 'css', icon: 'css3', pack: 'fab', key: 0},
            {name: 'js', icon: 'js-square', pack: 'fab', key: 1},
            {name: 'react', icon: 'react', pack: 'fab', key: 2},
            {name: 'mysql', icon: 'database', pack: 'fas', key: 3}
          ]} />
        </div>
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
  background-color: #5591a0;

  .title-and-link {
    flex: 0 0 100%;
    padding-top: 1.5em;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
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
