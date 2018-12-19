import React, { Component } from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import commonStyles from '../common-styles'

function CodeLink(props) {
  let url = props.url

  return (
    <a className={props.className} href={props.url}>
      <FontAwesomeIcon icon={['fab', 'github-square']} />
      <p>View Code</p>
    </a>
  )
}


const StyledCodeLink = styled(CodeLink)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 140px;
  border: solid ${commonStyles.colorOne} 4px;
  border-radius: 12px;
  margin-top: 16px;
  background-color: ${commonStyles.colorOne};
  color: #fff;
  font-size: 32px;
  text-decoration: none;

  &:hover {
    background-color: #fff;
    color: ${commonStyles.colorOne};
  }

  p {
    font-size: 16px;
  }
`

export default StyledCodeLink
