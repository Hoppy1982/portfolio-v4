import React, { Component } from 'react'
import styled from 'styled-components'
import commonStyles from '../common-styles'
import myFace0 from '../images/my-face-0.jpg'
import myFace1 from '../images/my-face-1.jpg'


function About(props) {
  return <div className={props.className}>
    <article>
      <h2>#WIP#</h2>

      <p>
        <img src={myFace0} className='imgRight'/>
        I'm an aspiring web developer living in Brighton. I've been coding on
        and off for a couple of years, I love learning and problem solving & I'm
        chuffed to finally be getting to the point I can build my little project
        ideas.
        <br /><br />
        <img src={myFace1} className='imgLeft'/>
        I've always had technical jobs, having worked as an avionics technician
        in the army and on flight simulators after leaving.
        <br /><br />
        filler words asd asd asdjn dasd asd asd sdsdsd asdasd sdsad asdasd asda
        asd asd asd asd asd asd fad as gadds asdasd asdasd asdasd asdasdasdasd..
        <br /><br />
        A couple of years ago I converted a camper van which is something I'd
        wanted to do as long as I can remember.
        <br /><br />
        <img src={myFace0} className='imgRight'/>
        It's not perfect (and initially wasn't even water proof..) but I got a
        lot of satisfaction from doing it.
        <br /><br />
        I'm currently waiting the right time to rip it to bits so I can start
        again.
      </p>

    </article>
  </div>
}


const StyledAbout = styled(About)`
  ${commonStyles.defaultStyles}
  width: 100%;
  font-size: 16px;
  margin-top: 1.5em;

  article {
    margin: ${commonStyles.sideMarginOne};
    padding-bottom: 20px;
    border: solid lightgrey 2px;
    border-radius: 8px;
    box-shadow: 0px 4px 8px #575859;
    background-color: ${commonStyles.colorOne};
    color: #fff;
    overflow: hidden;
  }

  p {
    text-align: left;
    font-size: calc(1.2em + 0.5vw);
    margin: ${commonStyles.sideMarginOne};
  }

  img {
    width: 30%;
    height: auto;
    max-width: 200px;
    border: solid lightgrey 2px;
  }

  .imgRight {
    float: right;
    margin-left: ${commonStyles.sideMarginOne};
    border-top-right-radius: 16px;
  }

  .imgLeft {
    float: left;
    margin-right: ${commonStyles.sideMarginOne};
    margin-top: ${commonStyles.sideMarginOne};
    border-top-left-radius: 16px;
  }

  @media only screen
    and (min-device-width: 900px)
    and (min-width: 900px) {
      flex: 1 1 100%;
      max-width: 900px;
    }
`

export default StyledAbout
