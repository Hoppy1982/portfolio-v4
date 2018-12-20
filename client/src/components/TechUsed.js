import React, { Component } from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import commonStyles from '../common-styles'


function TechUsed(props) {

  const techsAndIcons = props.techs.map((tech) => {
    if (tech.icon !== '') {
      return <li className='listItem' key={tech.key}>
        <p className='liLeft'>{tech.name}</p>
        <FontAwesomeIcon className='liRight' icon={[tech.pack, tech.icon]} />
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
  margin-top: 16px;
  border: solid 4px ${commonStyles.colorOne};
  border-radius: 12px;
  width: 180px;
  background-color: ${commonStyles.colorOne};

  h4 {
    color: #fff;
    text-align: center;
  }

  ul {
    list-style: none;
    background-color: ${commonStyles.colorOne};
    color: #fff;
    margin-top: 4px;
  }

  .listItem {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }

  .liLeft, .liRight {
    flex: 1 1 50%;
  }
`

export default StyledTechUsed
