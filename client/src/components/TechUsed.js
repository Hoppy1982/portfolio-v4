import React, { Component } from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import commonStyles from '../common-styles'


function TechUsed(props) {

  const techsAndIcons = props.techs.map((tech) => {
    if (tech.icon !== '') {
      return <li className='listItem' key={tech.key}>
        <p className='liLeft'>{tech.name}</p>
        <FontAwesomeIcon className='liRight' icon={['fab', tech.icon]} />
      </li>
    }

    return <li className='listItem' key={tech.key}>
      <p className='liLeft'>{tech.name}</p>
      <div className='liRight'></div>
    </li>
  })

  return (
    <div className={props.className}>
      <h4>Technolgies Used:</h4>
      <ul>
        {techsAndIcons}
      </ul>
    </div>
  )
}


const StyledTechUsed = styled(TechUsed)`
  ul {
    list-style: none;
  }

  .listItem {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    width: 120px;
  }

  .liLeft, .liRight {
    flex: 0 0 100px;
    border: solid blue 2px;
  }
`

export default StyledTechUsed
