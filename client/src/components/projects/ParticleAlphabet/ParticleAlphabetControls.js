import React, { Component } from 'react'
import styled from 'styled-components'
import commonStyles from '../../../common-styles'

function ParticleAlphabetProjectDesc(props) {
  return <div className={props.className}>

    <div className='controls__top'>
      <div className='controls__inputDesc'>Type in the box:</div>
      <input className='controls__input' type="text" value={this.state.value} onChange={this.contentOneHandleTargetWordChange} className='control'></input>
    </div>

    <div className='controls__lower'>
      <button onClick={this.contentOneHandleToggleWP} className='controls__button'>Toggle Waypoints</button>
      <button onClick={this.contentOneHandleTogglePaths} className='controls__button'>Toggle Paths</button>
    </div>

  </div>
}


const StyledParticleAlphabetControls = styled(ParticleAlphabetControls)`
  margin-top: 0.5em;
  border: solid #222 4px;
  width: 400px;
  background: #222;

  .controls__top {
    box-sizing: border-box;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding-left: 1em;
  }

  .controls__inputDesc {
    font-weight: 600;
    background: #222;
    color: white;
    flex: 1 1 auto;
    width: 40%;
  }

  input {
    flex: 1 1 auto;
    width: 60%;
    height: 2em;
    font-size: 1.2em;
  }

  .controls__lower {
    width: 100%;
  }

  .controls__button {
    height: 50px;
    width: 50%;
    font-weight: 800;
    font-size: 1em;
  }

  .controls__button:hover {
    background: #222;
    color: white;
    cursor: pointer;
  }
`

export default StyledParticleAlphabetControls
