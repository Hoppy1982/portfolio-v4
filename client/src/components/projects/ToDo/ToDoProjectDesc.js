import React, { Component } from 'react'
import styled from 'styled-components'
import commonStyles from '../../../common-styles'

function ToDoProjectDesc(props) {
  return <article className={props.className}>
    <h4>Project Desciption</h4>
    <p>
      I made this in vanilla javascript without using any libraries other
      than React with the idea that it would be good practice at using
      classes to organise the different particle behaviours. Originally
      I thought I could use it as full page navigation system. I was going
      to have the particles form the chosen nav link then all zoom off down
      a wormhole. They'd then zoom out of wormhole on the destination
      page and do something else like make an animated pomodoro timer.
      In the end though I settled on leaving it as a self contained project.
    </p>

    <h4>How It Works</h4>
    <p>
      There are 3 particle classes, a super Particle class and then sub
      classes for HoldPatternParticle & LettersParticle. The 2 particle
      types live in separate arrays. To transition between behaviour types
      they're pretty much just popped off one array and onto the other.
    </p>
    <p>
      The hold pattern particles follow cubic bezier curves. Those curves
      are defined by 4 coordinates, start, end & 2 control points. I used
      an array of pre-determined waypoints and randomized a little distance
      from those to get the start and end points. The control points are
      pretty much randomized inside a square whose diagonals are bound by
      the start and end points.
    </p>
    <p>
      For the letters particles I created an array of shape objects which
      specificies the coordinates of each character vertex as a ratio of the
      space assigned to each character. The space assigned to each character
      is dependent on the longest word provided. Letter particles are given
      target vertex to fly to.
    </p>
  </article>
}


const StyledToDoProjectDesc = styled(ToDoProjectDesc)`
  //--------------------------------
  //Mobile or small window (default)

  font-size: 16px;
  margin-top: 1.5em;

  h4 {
    margin: ${commonStyles.sideMarginOne};
    text-align: center;
    font-size: calc(1.1em + 0.5vw);
  }

  p {
    margin: ${commonStyles.sideMarginOne};
    text-align: left;
    font-size: calc(1.2em + 0.5vw);
  }

  //--------------------------------
  //Desktop & not small window

  @media only screen
    and (min-device-width: 1200px)
    and (min-width: 1200px) {
      flex: 1 1 400px;

      margin-top: 72px;
    }
`

export default StyledToDoProjectDesc
