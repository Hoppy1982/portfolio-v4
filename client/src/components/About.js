import React, { Component } from 'react'
import styled from 'styled-components'
import commonStyles from '../common-styles'


function About(props) {
  return <div className={props.className}>
    <p>About page placeholder</p>
  </div>
}


const StyledAbout = styled(About)`
  ${commonStyles.defaultStyles}
  font-size: 16px;
  margin-top: 1.5em;

  article {
    margin: ${commonStyles.sideMarginOne};
    border: solid lightgrey 2px;
    border-radius: 8px;
    box-shadow: 0px 4px 8px #575859;
    background-color: ${commonStyles.colorOne};
    color: #fff;
  }

  p {
    margin: ${commonStyles.sideMarginOne};
    text-align: center;
    font-size: calc(1.2em + 0.5vw);
  }

  @media only screen
    and (min-device-width: 1200px)
    and (min-width: 1200px) {
      flex: 1 1 100%;
      max-width: 1200px;
    }
`

export default StyledAbout
