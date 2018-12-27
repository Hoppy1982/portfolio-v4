import React, { Component } from 'react'
import styled from 'styled-components'
import commonStyles from '../../../common-styles'

function WorldBankAPIProjectDesc(props) {
  return <div className={props.className}>
    <article>
    <h4>Project Desciption</h4>
    <p>
      This project combines data from a few different endpoints of the world
      bank API to show either energy production sources as a percentage or in
      absolute terms.
    </p>
    <p>
      I was trying to illustrate that while a greater of energy is being
      produced from clean sources that the total energy produced from fossil
      fuels might still be rising.
    </p>
    <p>
      Data for the UK is always shown, then you can select a second country to
      compare it to.
    </p>
    <p>
      I decided against including a vertical scale for the absolute values for
      two reasons, firstly I think the numbers are meaningless to most people
      and secondly I was trying to keep the chart as simple as possible as it's
      just made using simple css.
    </p>
    <p>
      The learning objective for me doing this was practice at using an API, not
      a graphics library.
    </p>
    <p>
      In hindsight, this is not the best way of displaying the data for energy
      production in absolute terms.
    </p>
    <p>
      Either I could have used a logarithmic scale or I think better yet, a pie
      chart of which it's area equated to energy amount produced.
    </p>
    <p>
      In that way you could still illustrate a comparision between the UK and
      somewhere else...although you'd need a slider for the year perhaps.
    </p>

    <h4>How it works</h4>
    <p>
      The world bank API has loads of good information but finding the specific
      data I wanted was a pain.
    </p>
    <p>
      I used several different fetch calls and then combined the responses.
    </p>
    <p>
      For example one fetch was used to get population data for each country,
      then another for energy consumption per capita.
    </p>
    <p>
      They were combined to get total energy usage per country.
    </p>
    <p>
      In total 6 separate fetch requests are made (consumption per capita,
      population, percentage energy produced from solar & wind combined,
      percentage from hydro, percentage from nuclear and percentage from fossil
      fuels).
    </p>
    <p>
      There must be some other energy sources, such as burning rubbish that I
      didn't account for so the percentage columns have a slight variation in
      height.
    </p>
    <p>
      That could be fixed by including an 'other sources' block when I get
      around to it.
    </p>
    <p>
      I used promise.all to harvest up all the different responses before doing
      the mathsy stuff.
    </p>
    </article>
  </div>
}

const StyledWorldBankAPIProjectDesc = styled(WorldBankAPIProjectDesc)`
  //--------------------------------
  //Mobile or small window (default)

  font-size: 16px;
  margin-top: 1.5em;

  article {
    margin: ${commonStyles.sideMarginOne};
    border: solid lightgrey 2px;
    border-radius: 8px;
    box-shadow: 0px 4px 8px #575859;
    background-color: #fff;
  }

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
      flex: 1 1 100%;
      max-width: 1200px;
    }
`

export default StyledWorldBankAPIProjectDesc
