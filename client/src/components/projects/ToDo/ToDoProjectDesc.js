import React, { Component } from 'react'
import styled from 'styled-components'
import commonStyles from '../../../common-styles'

function ToDoProjectDesc(props) {
  return <div className={props.className}>
    <h3>Project Description</h3>
    <p>
    EXAMPLE TEXT! This project combines data from a few different endpoints of the
    world bank API to show either energy production sources as a percentage
    or in absolute terms. I was trying to illustrate that while a greater
    of energy is being produced from clean sources that the total energy
    produced from fossil fuels might still be rising. Data for the UK is
    always shown, then you can select a second country to compare it to.
    I decided against including a vertical scale for the absolute values for
    two reasons, firstly I think the numbers are meaningless to most people and
    secondly I was trying to keep the chart as simple as possible as it's just
    made using simple css. The learning objective for me doing this was practice
    at using an API, not a graphics library. In hindsight, this is not the best way of
    displaying the data for energy production in absolute terms. Either I could
    have used a logarithmic scale or I think better yet, a pie chart of
    which it's area equated to energy amount produced. In that way you could still illustrate
    a comparision between the UK and somewhere else...although you'd need a slider for the year
    perhaps.
    </p>
  </div>
}


const StyledToDoProjectDesc = styled(ToDoProjectDesc)`
  //--------------------------------
  //Mobile or small window (default)

  font-size: 16px;
  margin-top: 1.5em;

  h3 {
    margin: ${commonStyles.sideMarginOne};
    text-align: left;
    font-size: calc(1.5em + 1vw);
  }

  p {
    margin: ${commonStyles.sideMarginOne};
    text-align: left;
    font-size: calc(1.2em + 1vw);
  }

  //--------------------------------
  //Desktop & not small window

  @media only screen
    and (min-device-width: 1200px)
    and (min-width: 1200px) {
      border: solid red 12px;
    }
`

export default StyledToDoProjectDesc
