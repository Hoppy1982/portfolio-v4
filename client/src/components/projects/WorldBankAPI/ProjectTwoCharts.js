import React, { Component } from 'react'
import styled from 'styled-components'


class ProjectTwoCharts extends Component {
  render() {
    const energyData = this.props.energyData
    const showPercents = this.props.showPercents

    return (
      <div className={this.props.className}>
        {energyData.map((countryData, i) => {
          const countryId = countryData[0].countryId
          const countryName = countryData[0].countryName

          if(showPercents === true) {
            return <RenderPercentsBarChart
              key={countryId + i}//key name using index is a smell.
              countryName={countryName}
              countryData={countryData}
            />

          } else if (showPercents === false) {
            return <RenderAbsolutesBarChart
              key={countryId + i}//key name using index is a smell.
              countryName={countryName}
              countryData={countryData}
            />
          }

        })}
      </div>
    )
  }
}


function RenderPercentsBarChart(props) {
  const countryName = props.countryName
  const countryData = props.countryData

  return (
    <div className='chart chart--percents'>
      <h5>{countryName}</h5>
      <div className='chart__graphic'>

        {countryData.map((yearlyData, i) => {
          return <RenderPercentsBar
            key={yearlyData.year + i}//key name using index is a smell.
            year={yearlyData.year}
            percentClean={yearlyData.percentClean}
            percentDirty={yearlyData.percentDirty}
            percentHydro={yearlyData.percentHydro}
            percentNuclear={yearlyData.percentNuclear}
          />
        })}

      </div>
    </div>
  )
}


function RenderPercentsBar(props) {
  const year = props.year
  const percentClean = props.percentClean
  const percentDirty = props.percentDirty
  const percentNuclear = props.percentNuclear
  const percentHydro = props.percentHydro
  const dirtyStyle = {height: `${percentDirty}%`}
  const nuclearStyle = {height: `${percentNuclear}%`}
  const cleanStyle = {height: `${percentClean}%`}
  const hydroStyle = {height: `${percentHydro}%`}

  return (
    <div className='chart__column chart__column--percents'>
      <p className='chart__columns-label'>{year}</p>
      <div className='chart__column-graphic'>
        <div className={`chart__energy-graphic--clean clean${percentClean}`} style={cleanStyle}></div>
        <div className={`chart__energy-graphic--hydro hydro${percentHydro}`} style={hydroStyle}></div>
        <div className={`chart__energy-graphic--nuclear nuclear${percentNuclear}`} style={nuclearStyle}></div>
        <div className={`chart__energy-graphic--dirty dirty${percentDirty}`} style={dirtyStyle}></div>
      </div>
    </div>
  )
}



function RenderAbsolutesBarChart(props) {
  const countryName = props.countryName
  const countryData = props.countryData

  return (
    <div className='chart'>
      <h5>{countryName}</h5>
      <div className='chart__graphic chart__graphic--absolutes'>

        {countryData.map((yearlyData, i) => {
          return <RenderAbsolutesBar
            key={yearlyData.year + i}//key name using index is a smell.
            year={yearlyData.year}
            totalClean={yearlyData.totalClean}
            totalDirty={yearlyData.totalDirty}
            totalHydro={yearlyData.totalHydro}
            totalNuclear={yearlyData.totalNuclear}
          />
        })}

      </div>
    </div>
  )
}


function RenderAbsolutesBar(props) {
  const year = props.year
  const totalClean = props.totalClean
  const totalDirty = props.totalDirty
  const totalNuclear = props.totalNuclear
  const totalHydro = props.totalHydro
  const yScaleFactor = 0.00000000001
  const dirtyPxHeight = {height: `${totalDirty * yScaleFactor}px`}
  const nuclearPxHeight = {height: `${totalNuclear * yScaleFactor}px`}
  const cleanPxHeight = {height: `${totalClean * yScaleFactor}px`}
  const hydroPxHeight = {height: `${totalHydro * yScaleFactor}px`}

  return (
    <div className='chart__column'>
      <div className='chart__column-graphic'>
        <div className={`chart__energy-graphic--clean clean${totalClean}`} style={cleanPxHeight}></div>
        <div className={`chart__energy-graphic--hydro hydro${totalHydro}`} style={hydroPxHeight}></div>
        <div className={`chart__energy-graphic--nuclear nuclear${totalNuclear}`} style={nuclearPxHeight}></div>
        <div className={`chart__energy-graphic--dirty dirty${totalDirty}`} style={dirtyPxHeight}></div>
      </div>
      <p className='chart__columns-label'>{year}</p>
    </div>
  )
}


const StyledProjectTwoCharts = styled(ProjectTwoCharts)`
  box-sizing: border-box;

  .chart {
    background-color: #fff;
    border: solid #222 2px;
    border-top-right-radius: 24px;
    width: 94%;
    margin-left: auto;
    margin-right: auto;
    margin-top: 1em;
    margin-bottom: 1em;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    padding-top: 0.5em;
  }

  .chart--percents {
    height: 240px;
  }

  .chart__graphic {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    align-items: flex-start;
    height: 100%;
    width: 100%;
    overflow-x: scroll;
    padding-top: 0.5em;
  }

  .chart__graphic--absolutes {
    align-items: flex-end;
    padding-top: 2em;
    padding-bottom: 2em;
  }

  .chart__column {
    flex: 1 1 auto;
    width: 1%;
    min-width: 10px;
  }

  .chart__column--percents {
    height: 140px;
  }

  .chart__column-graphic {
    position: relative;
    top: -14px;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }

  .chart__energy-graphic--clean {
    background: #52af4f;
    border-color: #b2e8b0;
    border-style: solid;
    border-width: 0px 1px 0px 1px;
  }

  .chart__energy-graphic--hydro {
    background: #364256;
    border-color: #a6badb;
    border-style: solid;
    border-width: 0px 1px 0px 1px;
  }

  .chart__energy-graphic--nuclear {
    background: #af8346;
    border-color: #e2b26f;
    border-style: solid;
    border-width: 0px 1px 0px 1px;
  }

  .chart__energy-graphic--dirty {
    background: #683411;
    border-color: #cc7d49;
    border-style: solid;
    border-width: 0px 1px 0px 1px;
  }

  /*not strictly necessary now, used to get rid of zero value energy blocks if they have top or bottom borders*/
  .clean0, .dirty0, .nuclear0, .hydro0 {
    display: none;
  }

  .chart__columns-label {
    -webkit-transform: rotate(90deg);
            transform: rotate(90deg);
    font-size: 0.7em;
    font-weight: bold;
    position: relative;
    top: 110%;
  }
`


export default StyledProjectTwoCharts
