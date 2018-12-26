import React, { Component } from 'react'
import styled from 'styled-components'
import commonStyles from '../../../common-styles'


class ParticleAlphabetControls extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return(
      <div className={this.props.className}>

        <div className='controls__top'>
          <div className='controls__inputDesc'>Type in the box:</div>
          <input className='controls__input' type="text" value={this.state.value} onChange={this.props.wordChange} className='control'></input>
        </div>

        <div className='controls__lower'>
          <button onClick={this.props.toggleWP} className='controls__button'>Toggle Waypoints</button>
          <button onClick={this.props.togglePaths} className='controls__button'>Toggle Paths</button>
        </div>

      </div>
    )
  }
}


const StyledParticleAlphabetControls = styled(ParticleAlphabetControls)`
  box-sizing: border-box;
  margin-top: 1em;
  border: solid #222 4px;
  background: #222;
  width: calc(100% - ${commonStyles.sideMarginOne} - ${commonStyles.sideMarginOne});

  @media only screen
    and (min-device-width: 700px)
    and (min-width: 700px) {
      width: calc(700px - ${commonStyles.sideMarginOne} - ${commonStyles.sideMarginOne})
    }

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
